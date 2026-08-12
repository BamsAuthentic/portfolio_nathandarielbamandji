"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

const emptySubscribe = () => () => {};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        const shouldBeDark = mediaQuery.matches;
        if (shouldBeDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        updateTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    updateTheme();

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const toggleTheme = () => {
      const dark = document.documentElement.classList.toggle("dark");
      setIsDarkMode(dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    };

    type StartViewTransition = (callback: () => void) => { ready: Promise<void> };
    const doc = document as unknown as { startViewTransition?: StartViewTransition };

    if (typeof doc.startViewTransition !== "function") {
      flushSync(toggleTheme);

      try {
        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const y = top + height / 2;
        const x = left + width / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

        document.documentElement.animate(
          [
            { clipPath: `circle(0px at ${x}px ${y}px)`, opacity: 0.98 },
            { clipPath: `circle(${maxRad}px at ${x}px ${y}px)`, opacity: 1 },
          ],
          { duration: 650, easing: "ease-in-out" }
        );
      } catch {}
      return;
    }

    await doc.startViewTransition!(() => {
      flushSync(toggleTheme);
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRad}px at ${x}px ${y}px)`],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  if (!mounted) {
    return (
      <button
        ref={buttonRef}
        onClick={changeTheme}
        className={cn(className)}
        type="button"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        aria-pressed={isDarkMode}
      >
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(className)}
      type="button"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
