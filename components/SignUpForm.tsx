import React from 'react';
import GuestAccessButton from './GuestAccessButton';

interface SignUpFormProps {
  username: string;
  email: string;
  password: string;
  showPassword: boolean;
  onUsernameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onSubmit: () => void;
  error?: string;
  onLoginPress: () => void;
  onGuestPress: () => void;
}

function EyeIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#97fb57' strokeWidth='2'>
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#97fb57' strokeWidth='2'>
      <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94' />
      <path d='M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19' />
      <line x1='1' y1='1' x2='23' y2='23' />
    </svg>
  );
}

export default function SignUpForm({
  username,
  email,
  password,
  showPassword,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
  error,
  onLoginPress,
  onGuestPress,
}: SignUpFormProps) {
  return (
    <div className='auth-card'>
      <button className='google-btn' onClick={() => {}} type='button'>
        <img src='/logoGoogle.png' alt='Google logo' />
        <span>Sign up with Google</span>
      </button>

      <div className='separator'>
        <div className='separator-line' />
        <span className='separator-text'>or</span>
        <div className='separator-line' />
      </div>

      <input
        className='auth-input'
        placeholder='Username'
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        autoComplete='username'
      />

      <input
        className='auth-input'
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        autoComplete='email'
      />

      <div className='password-wrapper'>
        <input
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          autoComplete='new-password'
        />
        <button className='eye-btn' onClick={onTogglePassword} type='button' aria-label='Toggle password visibility'>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      {error && <span className='error-text'>{error}</span>}

      <button className='btn-primary' onClick={onSubmit} type='button'>
        SIGN UP
      </button>

      <div className='login-row'>
        <span>Already have an account? </span>
        <button className='link-btn' onClick={onLoginPress} type='button'>Log In</button>
      </div>

      <GuestAccessButton onPress={onGuestPress} />
    </div>
  );
}
