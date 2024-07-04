import ImageGrid from "@/app/ui/ImageGrid";
import { fetchPhotos } from "@/app/lib/data";

const Page = async () => {
  const photos = await fetchPhotos("favorite");

  return (
    <div>
      <ImageGrid photos={photos} />
    </div>
  );
};

export default Page;
