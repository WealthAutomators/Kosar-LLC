"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endTime: string;
  className?: string;
  variant?: "light" | "dark";
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function calculateTimeLeft(endTime: string) {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({ endTime, className, variant = "light" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft(endTime)), 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {[
          { label: "Hrs", value: timeLeft.hours },
          { label: "Min", value: timeLeft.minutes },
          { label: "Sec", value: timeLeft.seconds },
        ].map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span
              className={
                variant === "dark"
                  ? "flex h-10 w-10 items-center justify-center bg-accent text-sm font-semibold text-white"
                  : "flex h-10 w-10 items-center justify-center bg-primary text-sm font-semibold text-white"
              }
            >
              {pad(unit.value)}
            </span>
            <span
              className={
                variant === "dark"
                  ? "mt-1 text-[10px] uppercase tracking-wider text-white/60"
                  : "mt-1 text-[10px] uppercase tracking-wider text-muted-foreground"
              }
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
