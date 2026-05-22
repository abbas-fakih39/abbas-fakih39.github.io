"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  delay = 0,
  speed = 30,
  className = "",
  showCursor = true,
  onComplete,
}: Props) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(() => {
      const type = () => {
        if (idx < text.length) {
          setDisplay(text.slice(0, idx + 1));
          idx++;
          timer = setTimeout(type, speed);
        } else {
          setDone(true);
          onComplete?.();
        }
      };
      type();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timer);
    };
  }, [text, delay, speed, onComplete]);

  return (
    <span className={className}>
      {display}
      {showCursor && !done && (
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "1.1em",
            background: "#00f0ff",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "blink 1s step-end infinite",
          }}
        />
      )}
    </span>
  );
}
