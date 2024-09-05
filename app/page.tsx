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
    <div className="w-full m-8">
      <div className="relative aspect-square h-full max-h-[400px] max-w-[600px] w-full overflow-hidden">
        <div
          ref={imageMoveContainerRef}
          className="relative cursor-crosshair overflow-hidden h-full w-full"
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
    </div>
  );
}
