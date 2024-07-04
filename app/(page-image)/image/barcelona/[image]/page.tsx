import ImageSlider from "@/app/ui/ImageSlider";
import { fetchPhotos } from "@/app/lib/data";
import { getIndexFromId } from "@/app/lib/scripts";

const Page = async ({ params }: { params: { image: string } }) => {
  const image = params.image;
  const photos = await fetchPhotos("barcelona");
  const index = getIndexFromId(photos, image);

  return <ImageSlider photos={photos} index={index} origin="/barcelona" />;
};

export default Page;
