import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";

const TRAIL = [
  { top: "8%", left: "6%", size: 22, rotate: -18, delay: "0s" },
  { top: "38%", left: "18%", size: 16, rotate: 24, delay: "0.4s" },
  { top: "64%", left: "10%", size: 20, rotate: -6, delay: "0.8s" },
  { top: "20%", left: "82%", size: 18, rotate: 14, delay: "0.2s" },
  { top: "52%", left: "88%", size: 24, rotate: -22, delay: "0.6s" },
  { top: "80%", left: "76%", size: 16, rotate: 10, delay: "1s" },
];

/** Trilha decorativa de patinhas — o elemento assinatura da página, usado atrás do hero. */
export function PawTrail({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {TRAIL.map((paw, index) => (
        <PawPrint
          key={index}
          className="absolute animate-float-slow text-primary/15"
          style={{
            top: paw.top,
            left: paw.left,
            width: paw.size,
            height: paw.size,
            animationDelay: paw.delay,
            ["--float-rotate" as string]: `${paw.rotate}deg`,
            transform: `rotate(${paw.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
