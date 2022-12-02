import path from "path";

import catchy from "catchy-image";

const fontFamily = "BIZUDPGothic";
const rootDir = path.resolve(__dirname, "..", "..", "..");

export const getFileName = (slug: string): string => `${slug}.png`;

export interface CreateOgpImageProps {
  title: string;
  slug: string;
}

export const createOgpImage = async ({
  title,
  slug,
}: CreateOgpImageProps): Promise<void> => {
  const options = {
    output: {
      directory: path.resolve(rootDir, "static", "ogp"),
      fileName: getFileName(slug),
    },
    image: {
      width: 1200,
      height: 630,
      backgroundColor: "#fff",
      backgroundImage: path.resolve(__dirname, "background.png"),
    },
    style: {
      title: {
        fontFamily,
        fontColor: "rgba(0, 0, 0, 0.87)",
        fontWeight: "bold",
        fontSize: 60,
        paddingTop: 100,
        paddingBottom: 200,
        paddingLeft: 150,
        paddingRight: 150,
      },
      author: {
        fontFamily,
        fontColor: "rgba(0, 0, 0, 0.65)",
        fontWeight: "400",
        fontSize: 46,
      },
    },
    meta: {
      title,
      author: "Oishi Takanori",
    },
    fontFile: [
      {
        path: path.resolve(__dirname, fontFamily, "Bold.ttf"),
        family: fontFamily,
        weight: "bold",
      },
      {
        path: path.resolve(__dirname, fontFamily, "Regular.ttf"),
        family: fontFamily,
        weight: "400",
      },
    ],
    iconFile: path.resolve(rootDir, "static", "android-chrome-512x512.png"),
  };

  await catchy.generate(options);
};
