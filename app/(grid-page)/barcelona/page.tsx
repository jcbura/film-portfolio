import ImageGrid from "@/app/ui/ImageGrid";
import { fetchPhotos } from "@/app/lib/scripts";

const Page = async () => {
  const photos = await fetchPhotos("barcelona");

  return (
    <div>
      <ImageGrid photos={photos} />
    </div>
  );
};

export default Page;
