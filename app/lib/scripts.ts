import { cache } from "react";
import { Photos } from "./definitions";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const fetchPhotos = cache(async (photosArg: string) => {
  try {
    const { resources } = await cloudinary.search
      .expression(`tags=${photosArg}`)
      .execute();

    const photos: Photos = resources.map((resource: any) => ({
      assetId: resource.asset_id,
      src: resource.secure_url,
      alt: resource.public_id,
      width: resource.width,
      height: resource.height,
    }));

    console.log(photos);

    return photos;
  } catch (error) {
    console.error("Error:", error);
    throw new Error(`Failed to fetch ${photosArg} photos.`);
  }
});

export const getIndexFromId = (photos: Photos, public_id: string) => {
  return photos.findIndex((photo) => photo.alt === public_id);
};

export const getIdFromIndex = (photos: Photos, index: number) => {
  if (index >= 0 && index < photos.length) {
    return photos[index].alt;
  }
};

export const getPath = (path: string) => {
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
