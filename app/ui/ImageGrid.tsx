"use client";

import ImageWrapper from "./ImageWrapper";
import Link from "next/link";
import { Photos } from "../lib/definitions";
import { usePathname } from "next/navigation";

interface Props {
  photos: Photos;
}

const ImageGrid = ({ photos }: Props) => {
  const pathname = usePathname();

  const getPath = (path: string) => {
    switch (path) {
      case "/formula1":
        return "/image/formula1/";
      case "/imsa":
        return "/image/imsa/";
      case "/barcelona":
        return "/image/barcelona/";
      case "/rome":
        return "/image/rome/";
      default:
        return "/image/home/";
    }
  };

  const path = getPath(pathname);

  return (
    <div className="columns-1 md:columns-2 xl:columns-3">
      {photos.map((photo, index) => (
        <div className="mb-4" key={photo.assetId}>
          <Link href={`${path}${photo.alt}`} className="hover:opacity-50">
            <ImageWrapper photo={photo} quality={10} transition="grid" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
