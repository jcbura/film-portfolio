import ImageSlider from "@/app/ui/ImageSlider";
import { fetchPhotos, getIndexFromId } from "@/app/lib/scripts";

const Page = async ({ params }: { params: { image: string } }) => {
  const image = params.image;
  const photos = await fetchPhotos("rome");
  const index = getIndexFromId(photos, image);

  return <ImageSlider photos={photos} index={index} origin="/rome" />;
};

export default Page;
