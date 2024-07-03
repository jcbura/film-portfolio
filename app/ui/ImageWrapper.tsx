"use client";

import clsx from "clsx";
import { CldImage } from "next-cloudinary";
import { Photo } from "../lib/definitions";
import { useState } from "react";

interface Props {
  photo: Photo;
  quality?: number;
  transition?: "none" | "grid" | "slider";
  fit?: "contain" | "cover";
}

const ImageWrapper = ({
  photo,
  quality = 70,
  transition = "none",
  fit = "cover",
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-full overflow-hidden">
      <CldImage
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        style={{ objectFit: `${fit}` }}
        onLoad={() => setLoaded(true)}
        quality={quality}
        className={clsx("max-w-auto h-full transition duration-500", {
          "translate-y-full": !loaded && transition === "grid",
          "translate-y-0": loaded && transition === "grid",
          "opacity-0 blur-sm": !loaded && transition === "slider",
          "opacity-100 blur-0": loaded && transition === "slider",
        })}
      />
    </div>
  );
};

export default ImageWrapper;
