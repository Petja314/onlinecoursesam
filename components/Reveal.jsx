"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.classList.add("visible");
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={`${className} reveal`.trim()}>{children}</Tag>;
}
