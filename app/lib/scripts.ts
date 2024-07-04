import { Photos } from "./definitions";

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
