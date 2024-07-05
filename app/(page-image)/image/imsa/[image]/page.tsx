import ImageSlider from "@/app/ui/ImageSlider";
import { fetchPhotos } from "@/app/lib/data";
import { getIndexFromId } from "@/app/lib/scripts";
import { isMobile } from "@/app/lib/isMobile";
import { headers } from "next/headers";

const Page = async ({ params }: { params: { image: string } }) => {
  const image = params.image;
  const photos = await fetchPhotos("imsa");
  const index = getIndexFromId(photos, image);

  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <ImageSlider
      photos={photos}
      index={index}
      origin="/imsa"
      mobile={mobileCheck}
    />
  );
};

export default Page;
