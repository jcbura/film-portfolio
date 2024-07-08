"use client";

import clsx from "clsx";
import ImageWrapper from "./ImageWrapper";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/react/20/solid";
import { getIdFromIndex, getOpacity, getPath } from "../lib/scripts";
import { useKeyPress, useMouseMoving } from "../lib/hooks";
import { Photos } from "../lib/definitions";
import { useRouter } from "next/navigation";

interface Props {
  photos: Photos;
  index: number;
  origin: string;
  mobile?: boolean;
}

const ImageSlider = ({ photos, index, origin, mobile = false }: Props) => {
  const path = getPath(origin);
  const router = useRouter();

  const handleKeyPress = (key: string) => {
    if (key === "Escape") {
      router.push(origin);
    } else if (key === "ArrowRight" && index !== photos.length - 1) {
      router.push(`${path}${getIdFromIndex(photos, index + 1)}`);
    } else if (key === "ArrowLeft" && index !== 0) {
      router.push(`${path}${getIdFromIndex(photos, index - 1)}`);
    }
  };

  useKeyPress(["Escape", "ArrowRight", "ArrowLeft"], handleKeyPress);
  const isMouseMoving = useMouseMoving(1000);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        className={clsx(
          "absolute z-10 top-0 right-0 p-4 transition duration-300",
          getOpacity(isMouseMoving, mobile)
        )}
      >
        <Link href={origin}>
          <CloseIcon className="w-8 h-8 fill-black/50 hover:fill-black" />
        </Link>
      </div>
      <div className="w-full h-full flex items-center">
        <div
          className={clsx(
            "hidden sm:flex sm:justify-center sm:w-1/12 transition duration-300",
            getOpacity(isMouseMoving, mobile)
          )}
        >
          {index !== 0 && (
            <Link href={`${path}${getIdFromIndex(photos, index - 1)}`}>
              <ChevronLeftIcon className="w-12 h-12 fill-black/50 hover:fill-black" />
            </Link>
          )}
        </div>
        <div className="w-full sm:w-5/6 h-full p-8 sm:px-0 sm:py-12">
          <Link
            href={
              index === photos.length - 1
                ? ""
                : `${path}${getIdFromIndex(photos, index + 1)}`
            }
          >
            <ImageWrapper
              photo={photos[index]}
              transition="slider"
              fit="contain"
            />
          </Link>
        </div>
        <div
          className={clsx(
            "hidden sm:flex sm:justify-center sm:w-1/12 transition duration-300",
            getOpacity(isMouseMoving, mobile)
          )}
        >
          {index !== photos.length - 1 && (
            <Link href={`${path}${getIdFromIndex(photos, index + 1)}`}>
              <ChevronRightIcon className="w-12 h-12 fill-black/50 hover:fill-black" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
