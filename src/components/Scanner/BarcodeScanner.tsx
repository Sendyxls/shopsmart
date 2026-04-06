import React, { useState, useRef } from 'react';
import { X, CameraOff, Camera } from 'lucide-react';

interface BarcodeScannerProps {
  onClose: () => void;
  onScan: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onClose, onScan }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Запуск камеры по кнопке
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        videoRef.current.muted = true;
        await videoRef.current.play();
      }

      setHasPermission(true);
      setIsCameraActive(true);
      setErrorMessage('');
    } catch (err: any) {
      console.error('Camera error:', err);
      setHasPermission(false);
      setIsCameraActive(false);
      if (err.name === 'NotAllowedError') {
        setErrorMessage('Разрешите доступ к камере в браузере');
      } else if (err.name === 'NotFoundError') {
        setErrorMessage('Камера не найдена');
      } else {
        setErrorMessage('Ошибка доступа: ' + err.message);
      }
    }
  };

  // Остановка камеры при закрытии
  const stopAndClose = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    onClose();
  };

  // Демо-скан (для теста)
  const handleMockScan = () => {
    onScan('4601234567890');
  };

  // Если камера ещё не включена — показываем кнопку
  if (!isCameraActive) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
        <button
          onClick={stopAndClose}
          className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
          <Camera className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Доступ к камере</h3>
          <p className="text-gray-600 mb-4">
            Для сканирования штрих-кодов необходимо разрешить доступ к камере.
          </p>
          <button
            onClick={startCamera}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Включить камеру
          </button>
          <button
            onClick={handleMockScan}
            className="w-full mt-3 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300"
          >
            Демо-скан (чай)
          </button>
        </div>
      </div>
    );
  }

  // Если камера включена, но произошла ошибка
  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
          <CameraOff className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Камера не доступна</h3>
          <p className="text-gray-600 mb-4">{errorMessage}</p>
          <button onClick={stopAndClose} className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  // Камера активна — показываем видео
  return (
    <div className="fixed inset-0 bg-black z-50">
      <button
        onClick={stopAndClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white"
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
          <div className="w-72 h-40 border-2 border-blue-500 rounded-lg" />
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-500" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-500" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-500" />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 animate-scan-line" />
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
