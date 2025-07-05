"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      isIconOnly
      color="primary"
      variant="shadow"
      size="lg"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50"
      aria-label="Scroll to top"
    >
      ↑
    </Button>
  );
}
