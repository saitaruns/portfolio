"use client";
import { toCanvas, toPng } from "html-to-image";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Clone = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [html, setHtml] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const el = document.querySelector("main");
      // const clone = el.cloneNode(true);

      toCanvas(el).then((canvas) => {
        setHtml(canvas.toDataURL("image/png"));
      });
    }
  }, []);

  useEffect(() => {
    const refElement = ref.current;
    const { width, height } = refElement.getBoundingClientRect();
    const handleMouseMove = (event) => {
      // Update mouse position when the mouse moves
      const { clientX, clientY } = event;

      // Calculate the new position of the mouse
      const x = clientX * (width / screen.width);
      const y = clientY * (height / screen.height);

      // Update the state with the new position
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      // Update scroll position when the user scrolls
      const { scrollX, scrollY } = window;

      ref.current.scrollTo({
        top: scrollY * (height / screen.height),
        left: scrollX * (width / screen.width),
        behavior: "instant",
      });

      setScrollPosition({
        x: scrollX * (width / screen.width),
        y: scrollY * (height / screen.height),
      });
    };

    // Add event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Add event listener for scroll
    document.addEventListener("scroll", handleScroll);

    // Clean up by removing the event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-full w-full overflow-auto relative no-scrollbar pointer-events-none"
      ref={ref}
    >
      {html && (
        <Image
          src={html}
          alt="Debate0"
          className="rounded-md relative p-10 mx-auto"
          width={200}
          height={200}
          // fill
        />
      )}
      <div
        style={{
          position: "absolute",
          left: mousePosition.x + scrollPosition.x,
          top: mousePosition.y + scrollPosition.y,
          width: "12px",
          height: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default Clone;
