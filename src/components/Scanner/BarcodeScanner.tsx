import React, { useState, useEffect, useRef } from 'react';
import { X, CameraOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BrowserMultiFormatReader } from '@zxing/browser';

interface BarcodeScannerProps {
    onClose: () => void;
    onScan: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose, onScan }) => {
    const { t } = useTranslation();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
    const hasScannedRef = useRef(false);
    const initAttemptedRef = useRef(false);

    // Остановка сканера
    const stopScanner = useRef(() => {
        if (codeReaderRef.current) {
            try {
                codeReaderRef.current = null;
            } catch (err) {
                console.error('Error stopping scanner:', err);
            }
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => {
                if (track.readyState === 'live') {
                    track.stop();
                }
            });
            streamRef.current = null;
        }
    }).current;

    useEffect(() => {
        if (initAttemptedRef.current) return;
        initAttemptedRef.current = true;

        const initScanner = async () => {
            try {
                if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                    setErrorMessage(t('scan.error.general'));
                    setHasPermission(false);
                    return;
                }

                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = devices.filter(device => device.kind === 'videoinput');

                if (videoDevices.length === 0) {
                    setErrorMessage(t('scan.error.camera_not_found'));
                    setHasPermission(false);
                    return;
                }

                await new Promise(resolve => setTimeout(resolve, 100));

                let stream;
                try {
                    stream = await navigator.mediaDevices.getUserMedia({
                        video: { facingMode: { exact: 'environment' } }
                    });
                } catch {
                    stream = await navigator.mediaDevices.getUserMedia({ video: true });
                }

                streamRef.current = stream;

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.setAttribute('playsinline', 'true');
                    await videoRef.current.play();
                }

                setHasPermission(true);
                setErrorMessage('');

                await new Promise(resolve => setTimeout(resolve, 500));

                const codeReader = new BrowserMultiFormatReader();
                codeReaderRef.current = codeReader;

                if (codeReader && videoRef.current) {
                    await codeReader.decodeFromVideoElement(
                        videoRef.current,
                        (result) => {
                            if (hasScannedRef.current) return;

                            if (result) {
                                hasScannedRef.current = true;
                                const barcode = result.getText();
                                console.log('Scanned:', barcode);
                                stopScanner();
                                onScan(barcode);
                            }
                        }
                    );
                }

            } catch (err: any) {
                console.error('Camera error:', err);
                setHasPermission(false);

                if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                    setErrorMessage(t('scan.error.camera_permission'));
                } else if (err.name === 'NotFoundError') {
                    setErrorMessage(t('scan.error.camera_not_found'));
                } else if (err.name === 'NotReadableError') {
                    setErrorMessage(t('scan.error.camera_busy'));
                } else {
                    setErrorMessage(t('scan.error.general'));
                }
            }
        };

        initScanner();

        return () => {
            stopScanner();
            initAttemptedRef.current = false;
        };

    }, []); // Убираем зависимости, так как используем useRef

    if (hasPermission === null) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>{t('message.loading')}</p>
                </div>
            </div>
        );
    }

    if (!hasPermission) {
        return (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
                <div className="bg-white p-6 rounded-lg max-w-md w-full">
                    <CameraOff className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-center mb-2">
                        {t('error.camera.permission')}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">
                        {errorMessage}
                    </p>
                    <div className="bg-yellow-50 p-3 rounded mb-4">
                        <p className="text-sm font-semibold text-yellow-800 mb-1">💡 {t('scan.solutions.title')}:</p>
                        <ul className="text-xs text-yellow-700 list-disc list-inside space-y-1">
                            <li>{t('scan.solutions.allow_camera')}</li>
                            <li>{t('scan.solutions.close_apps')}</li>
                            <li>{t('scan.solutions.reload')}</li>
                            <li>{t('scan.solutions.use_chrome')}</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => {
                            initAttemptedRef.current = false;
                            window.location.reload();
                        }}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-2"
                    >
                        {t('scan.reload_button')}
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
                    >
                        {t('scan.close_button')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black z-50">
            <button
                onClick={() => {
                    stopScanner();
                    onClose();
                }}
                className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70"
            >
                <X className="w-6 h-6" />
            </button>

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
                <div className="relative">
                    <div className="w-72 h-40 border-2 border-blue-500 rounded-lg bg-transparent"></div>
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 animate-scan-line"></div>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-white text-lg font-semibold mb-2">
                    {t('scan.title')}
                </p>
                <p className="text-gray-300 text-sm">
                    {t('scan.supported_formats')}
                </p>
            </div>
        </div>
    );
};

export default BarcodeScanner;