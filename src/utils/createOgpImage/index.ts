import { generateImage } from "./generateImage";

export interface CreateOgpImageProps {
  title: string;
  slug: string;
}

export const createOgpImage = async ({
  title,
  slug,
}: CreateOgpImageProps): Promise<void> => {
  await generateImage({
    fileName: `${slug}.png`,
    title,
  });
};
