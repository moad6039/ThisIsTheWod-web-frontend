import React, { useEffect } from "react";

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  loginIdentifier: string;
  loginPassword: string;
  showLoginPassword: boolean;
  onIdentifierChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  error?: string;
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#97fb57" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#97fb57" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function LoginModal({
  visible,
  onClose,
  loginIdentifier,
  loginPassword,
  showLoginPassword,
  onIdentifierChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
  error,
}: LoginModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (visible) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [visible, onClose]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);


  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} type="button" aria-label="Close">
          ✕
        </button>

        <button className="google-btn" onClick={() => {}} type="button">
          <img src="/logoGoogle.png" alt="Google logo" />
          <span>Login with Google</span>
        </button>

        <div className="separator">
          <div className="separator-line" />
          <span className="separator-text">or</span>
          <div className="separator-line" />
        </div>

        <input
          className="auth-input"
          placeholder="Username or Email"
          value={loginIdentifier}
          onChange={(e) => onIdentifierChange(e.target.value)}
          autoComplete="username"
        />

        <div className="password-wrapper">
          <input
            placeholder="Password"
            type={showLoginPassword ? "text" : "password"}
            value={loginPassword}
            onChange={(e) => onPasswordChange(e.target.value)}
            autoComplete="current-password"
          />
          <button className="eye-btn" onClick={onTogglePassword} type="button" aria-label="Toggle password visibility">
            {showLoginPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        </div>

        <button className="forgot-btn" onClick={() => {}} type="button">
          Forgot password?
        </button>

        {error && <span className="error-text">{error}</span>}

        <button className="btn-primary" onClick={onSubmit} type="button">
          LOG IN
        </button>
      </div>
    </div>
  );
}
