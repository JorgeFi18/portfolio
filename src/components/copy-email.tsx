"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmail({
  email,
  className = "",
  copyLabel,
  copiedLabel,
}: {
  email: string;
  className?: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copyAddress} className={className}>
      {copied ? (
        <Check className="size-4" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Copy className="size-4" strokeWidth={1.75} aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
}
