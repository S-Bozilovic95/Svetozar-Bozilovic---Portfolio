import { useEffect, useState } from "react";
import Button from "../../components/Button";

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <Button onClick={handleCopy} aria-live="polite">
      {copied ? "Copied" : "Copy email"}
    </Button>
  );
};

export default CopyEmailButton;
