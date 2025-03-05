"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

function BookFreeTrialButton({ className }: { className?: string }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)} className={className}>
        Book Your Free Trial
      </button>
      {isPopupOpen && (
        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
}

export default BookFreeTrialButton;
