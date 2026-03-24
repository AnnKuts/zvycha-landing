import { useState, useEffect, useRef } from "react";
import "./BetaModal.css";

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaModal = ({ isOpen, onClose }: BetaModalProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (emailValue: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      setError("Please enter a valid email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Failed to subscribe");
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading && !isSuccess) {
      handleSubmit();
    }
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleClose = () => {
    setEmail("");
    setError("");
    setIsLoading(false);
    setIsSuccess(false);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="beta-modal-overlay" onClick={handleOverlayClick}>
      <div className="beta-modal">
        {!isSuccess ? (
          <>
            <h2 className="beta-modal-title">Join the beta</h2>
            <p className="beta-modal-description">
              Be one of the first to build habits with your virtual pet
            </p>

            <input
              ref={inputRef}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              className="beta-modal-input"
              disabled={isLoading}
            />

            {error && <p className="beta-modal-error">{error}</p>}

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="beta-modal-button"
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  Joining...
                </>
              ) : (
                "Get early access"
              )}
            </button>
          </>
        ) : (
          <>
            <div className="beta-modal-success">
              <h2 className="beta-modal-title">You're in!</h2>
              <p className="beta-modal-description">
                Thanks! We'll send an email to join the demo when we're ready.
              </p>

              <button
                onClick={handleClose}
                className="beta-modal-button beta-modal-button-success"
              >
                Got it
              </button>
            </div>
            <div className="sparkles">
              <span className="sparkle"></span>
              <span className="sparkle"></span>
              <span className="sparkle"></span>
              <span className="sparkle"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BetaModal;
