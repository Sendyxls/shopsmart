import React, { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SimpleCameraProps {
  onClose: () => void;
  onScan: (barcode: string) => void;
}

const SimpleCamera: React.FC<SimpleCameraProps> = ({ onClose, onScan }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err: any) {
        setError(err.message || 'Camera error');
      }
    };
    startCamera();
  }, []);

  // �������� ������������ (��� �����)
  const handleMockScan = () => {
    onScan('4601234567890');
  };

  return (
    <div className="fixed inset-0 bg-black z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />

      {error && (
        <div className="absolute bottom-8 left-4 right-4 bg-red-500 text-white p-3 rounded">
          {error}
        </div>
      )}

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <button
          onClick={handleMockScan}
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          ����-������������
        </button>
        <p className="text-white text-sm mt-2">��� ����� ������� ������</p>
      </div>
    </div>
  );
};

export default SimpleCamera;