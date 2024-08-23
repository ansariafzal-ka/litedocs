"use client";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  const signInHandler = () => {
    signIn("google", {
      callbackUrl: "/documents",
    });
  };
  return (
    <button
      type="button"
      onClick={signInHandler}
      className="btn btn_dark flex justify-center items-center gap-2"
    >
      <img src="google.svg" alt="google-logo" className="w-5 h-5" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
