"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    // Create the animation circle
    const circle = document.createElement('div');
    circle.style.setProperty('--x', `${x}px`);
    circle.style.setProperty('--y', `${y}px`);
    circle.className = 'theme-switch-circle';
    circle.style.backgroundColor = theme === 'light' ? 'hsl(0 0% 3.9%)' : 'hsl(0 0% 100%)';

    document.body.appendChild(circle);

    // Trigger the animation
    setIsAnimating(true);
    requestAnimationFrame(() => {
      circle.classList.add('expanding');
    });

    // Switch theme after a small delay
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
      setIsAnimating(false);
      document.body.removeChild(circle);
    }, 500);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      disabled={isAnimating}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}