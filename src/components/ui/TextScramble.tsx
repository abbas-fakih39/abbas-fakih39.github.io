"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "span" | "div";
  accent?: boolean;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function TextScramble({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  accent = false,
}: Props) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const frameRef = useRef(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
      const q = text.split("").map((char, i) => ({
        from: chars[Math.floor(Math.random() * chars.length)],
        to: char,
        start: Math.floor(Math.random() * 20) + i * 30,
        end: Math.floor(Math.random() * 20) + i * 30 + 30,
      }));
      queueRef.current = q;

      let frame = 0;
      const update = () => {
        let output = "";
        let complete = 0;
        for (let i = 0; i < q.length; i++) {
          const item = q[i];
          if (frame >= item.end) {
            output += item.to;
            complete++;
          } else if (frame >= item.start) {
            if (item.to === " ") {
              output += " ";
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          } else {
            output += "";
          }
        }
        setDisplay(output);
        if (complete < q.length) {
          frameRef.current = requestAnimationFrame(update);
          frame++;
        }
      };
      frameRef.current = requestAnimationFrame(update);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay]);

  if (!started) return <Tag className={className} style={{ opacity: 0 }}>{text}</Tag>;

  return (
    <Tag
      className={className}
      style={
        accent
          ? {
              background: "linear-gradient(135deg, #00f0ff, #bd00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }
          : undefined
      }
    >
      {display}
    </Tag>
  );
}
