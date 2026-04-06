import React, { useState, useEffect, useRef } from 'react';
import { X, CameraOff } from 'lucide-react';

interface BarcodeScannerProps {
  onClose: () => void;
  onScan: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose, onScan }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const hasScannedRef = useRef(false);

  // Имитация сканирования для демо
  const handleMockScan = () => {
    if (hasScannedRef.current) return;
    hasScannedRef.current = true;
    onScan('4601234567890');
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        // Проверяем поддержку
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setErrorMessage('Ваш браузер не поддерживает доступ к камере');
          setHasPermission(false);
          return;
        }

        // Пробуем получить доступ с разными настройками
        let stream = null;
        const constraintsList = [
          { video: { facingMode: 'environment' } },
          { video: { width: { ideal: 1280 }, height: { ideal: 720 } } },
          { video: true }
        ];

        for (const constraints of constraintsList) {
          try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (stream) break;
          } catch (err) {
            console.log('Failed with constraints:', constraints, err);
            continue;
          }
        }

        if (!stream) {
          throw new Error('Не удалось получить доступ к камере');
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.setAttribute('autoplay', 'true');
          
          // Принудительно запускаем видео
          await videoRef.current.play().catch(e => {
            console.error('Video play error:', e);
            // Пробуем еще раз через секунду
            setTimeout(() => videoRef.current?.play(), 1000);
          });
        }

        setHasPermission(true);
        setErrorMessage('');
        
        // Логируем успех
        console.log('Camera started successfully');

      } catch (err: any) {
        console.error('Camera error:', err);
        setHasPermission(false);
        
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setErrorMessage('Доступ к камере запрещен. Разрешите доступ в настройках браузера.');
        } else if (err.name === 'NotFoundError') {
          setErrorMessage('Камера не найдена на устройстве');
        } else if (err.name === 'NotReadableError') {
          setErrorMessage('Камера занята другим приложением');
        } else {
          setErrorMessage('Не удалось получить доступ к камере: ' + err.message);
        }
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => {
          if (track.readyState === 'live') {
            track.stop();
          }
        });
        streamRef.current = null;
      }
    };
  }, []);

  if (hasPermission === null) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Запрос доступа к камере...</p>
        </div>
      </div>
    );
  }

  if (!hasPermission) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <CameraOff className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-center mb-2">Камера не доступна</h3>
          <p className="text-gray-600 text-center mb-4">{errorMessage}</p>
          <button onClick={onClose} className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      <button
        onClick={() => {
          if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
          }
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
        style={{ transform: 'scaleX(-1)' }} // Зеркальное отображение для удобства
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="w-72 h-40 border-2 border-blue-500 rounded-lg"></div>
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 animate-scan-line"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white text-lg font-semibold mb-2">Наведите камеру на штрих-код</p>
        
        <button 
          onClick={handleMockScan}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Тест (чай)
        </button>
      </div>
    </div>
  );
};

export default BarcodeScanner;
