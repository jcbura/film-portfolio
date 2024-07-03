import ImageWrapper from "./ImageWrapper";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/react/20/solid";
import { getIdFromIndex, getPath } from "../lib/scripts";
import { Photos } from "../lib/definitions";

interface Props {
  photos: Photos;
  index: number;
  origin: string;
}

const ImageSlider = ({ photos, index, origin }: Props) => {
  const path = getPath(origin);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="absolute z-10 top-0 right-0 p-4">
        <Link href={origin}>
          <CloseIcon className="w-8 h-8 fill-black/50 hover:fill-black" />
        </Link>
      </div>
      <div className="w-full h-full flex items-center">
        <div className="hidden sm:flex sm:justify-center sm:w-1/12">
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
        <div className="hidden sm:flex sm:justify-center sm:w-1/12">
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
