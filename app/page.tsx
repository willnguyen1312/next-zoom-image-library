"use client";

import { useZoomImageMove } from "@zoom-image/react";
import { useEffect, useRef } from "react";
import NextImage from "next/image";

import mountains from "../public/mountains.jpg";

export default function Home() {
  const imageMoveContainerRef = useRef<HTMLDivElement>(null);

  const { createZoomImage: createZoomImageMove } = useZoomImageMove();

  useEffect(() => {
    const imageContainer = imageMoveContainerRef.current as HTMLDivElement;
    createZoomImageMove(imageContainer, {
      zoomImageSource: mountains.src,
    });
  }, []);

  return (
    <div className="p-4 font-sans">
      <div
        ref={imageMoveContainerRef}
        className="relative cursor-crosshair overflow-hidden"
        style={{
          width: "600px",
          height: "400px",
        }}
      >
        <NextImage
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          alt="Mountains"
          src={mountains}
          priority={true}
        />
      </div>
    </div>
  );
}
