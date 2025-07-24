import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm.tsx";
import { SignupForm } from "./SignupForm.tsx";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export const AuthModal = ({ isOpen, onClose, initialMode = "login" }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        {mode === "login" ? (
          <LoginForm onToggleMode={toggleMode} onClose={onClose} />
        ) : (
          <SignupForm onToggleMode={toggleMode} onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};