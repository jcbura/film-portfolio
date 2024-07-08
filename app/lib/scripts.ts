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

export const getOpacity = (isMouseMoving: boolean, isMobile: boolean) => {
  if (!isMouseMoving && !isMobile) {
    return "opacity-0";
  } else if (isMouseMoving && !isMobile) {
    return "opacity-100";
  }
};

export const getTextColor = (pathname: string, paths: string[]) => {
  const numPaths = paths.length;

  if (numPaths === 1) {
    if (pathname === paths[0]) {
      return "text-black";
    } else {
      return "text-black/50";
    }
  } else {
    if (pathname === paths[0] || pathname === paths[1]) {
      return "text-black";
    } else {
      return "text-black/50";
    }
  }
};

export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
