import React, { useState, useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ResetPinModalProps {
  onClose: () => void;
}

const ResetPinModal: React.FC<ResetPinModalProps> = ({ onClose }) => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(140); // 2:20 in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePinChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Allow only single digits

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move to next input if a digit is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newPin = pastedData.split("");
      setPin(newPin);
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = () => {
    const pinCode = pin.join("");
    alert(`Verifying PIN: ${pinCode}`); // Replace with actual verification logic
    onClose();
  };

  const isPinComplete = pin.every((digit) => digit !== "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h3 className="text-center text-lg font-semibold text-gray-900">
          Reset PIN code
        </h3>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">+371 - 00000000</p>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg font-medium focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`PIN digit ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Email verification code already sent.
          </p>
          <p className="mt-1 text-sm text-gray-500">{formatTime(timer)}</p>
        </div>

        <button
          onClick={handleVerify}
          disabled={!isPinComplete}
          className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ${
            isPinComplete
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-300 cursor-not-allowed"
          }`}
          aria-label="Verify PIN"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default ResetPinModal;
