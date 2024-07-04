import ImageGrid from "../ui/ImageGrid";
import { fetchPhotos } from "../lib/data";

const Home = async () => {
  const photos = await fetchPhotos("favorite");

  return (
    <div>
      <ImageGrid photos={photos} />
    </div>
  );
};

export default Home;
