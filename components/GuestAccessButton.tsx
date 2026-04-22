import React from "react";

interface GuestAccessButtonProps {
  onPress: () => void;
  label?: string;
}

export default function GuestAccessButton({
  onPress,
  label = "Proceed without account",
}: GuestAccessButtonProps) {
  return (
    <button onClick={onPress} className="guest-btn" type="button">
      {label}
    </button>
  );
}
