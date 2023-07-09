/**
 * forked from https://github.com/kentaro-m/catchy-image/blob/6eb20df1bc1f9042c9e229f7f6e1100f90bb538f/src/index.js
 * MIT License Copyright (c) 2020 Kentaro Matsushita
 */

import { promises as fs } from "fs";
import path from "path";

import { createCanvas, registerFont, Image } from "canvas";

import { SITE_METADATA } from "../../constants/SITE_METADATA";

import { calculateTextPositionIntoRectangle } from "./calculateTextPositionIntoRectangle";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;

const PADDING_TOP = 90;
const PADDING_RIGHT = 190;
const PADDING_BOTTOM = 200;
const PADDING_LEFT = 200;

const ICON_WIDTH = 80;
const ICON_HEIGHT = 80;
const ICON_PADDING_RIGHT = 20;
const ICON_PADDING_BOTTOM = 90;

const ROOT_DIR = path.resolve(__dirname, "..", "..", "..");
const STATIC_DIR = path.resolve(ROOT_DIR, "static");
const OUTPUT_DIR = path.resolve(STATIC_DIR, "ogp");

const FONT_FAMILY = "UDGothic";
const FONT_FILES = [
  {
    path: path.resolve(__dirname, FONT_FAMILY, "Bold.ttf"),
    family: FONT_FAMILY,
    weight: "bold",
  },
  {
    path: path.resolve(__dirname, FONT_FAMILY, "Regular.ttf"),
    family: FONT_FAMILY,
    weight: "400",
  },
];

const STYLES = {
  bold: {
    font: `bold 60px "${FONT_FAMILY}"`,
    fontColor: "rgba(0, 0, 0, 0.87)",
  },
  regular: {
    font: `400 40px "${FONT_FAMILY}"`,
    fontColor: "rgba(0, 0, 0, 0.65)",
  },
};

const ICON_FILE = path.resolve(STATIC_DIR, "android-chrome-512x512.png");
const BACKGROUND_IMAGE_FILE = path.resolve(__dirname, "background.png");

const AUTHOR_TEXT = `${SITE_METADATA.lastName} ${SITE_METADATA.firstName} (@${SITE_METADATA.author})`;

interface GenerateImageOptions {
  fileName: string;
  title: string;
}

/**
 * Generate Open Graph images.
 */
export const generateImage = async ({
  fileName,
  title,
}: GenerateImageOptions): Promise<void> => {
  // RegisterFont
  FONT_FILES.forEach(({ path, family, weight }) => {
    registerFont(path, {
      family,
      weight,
    });
  });

  // Create canvas
  const canvas = createCanvas(IMAGE_WIDTH, IMAGE_HEIGHT);
  const ctx = canvas.getContext("2d");

  // Draw a background
  ctx.fillRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

  const imageFile = await fs.readFile(BACKGROUND_IMAGE_FILE);
  const image = new Image();
  image.src = imageFile;
  ctx.drawImage(image, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

  // Draw title texts
  const { lines } = calculateTextPositionIntoRectangle({
    ctx,
    text: title,
    paddingTop: PADDING_TOP,
    paddingLeft: PADDING_LEFT,
    font: STYLES.bold.font,
    width: IMAGE_WIDTH - PADDING_LEFT - PADDING_RIGHT,
    height: IMAGE_HEIGHT - PADDING_TOP - PADDING_BOTTOM,
  });

  lines.forEach(({ text, x, y }) => {
    ctx.fillStyle = STYLES.bold.fontColor;
    ctx.fillText(text, x, y);
  });

  // Draw an author text
  ctx.font = STYLES.regular.font;
  ctx.fillStyle = STYLES.regular.fontColor;
  ctx.fillText(
    AUTHOR_TEXT,
    PADDING_LEFT + ICON_WIDTH + ICON_PADDING_RIGHT,
    IMAGE_HEIGHT - ICON_PADDING_BOTTOM - 22,
  );

  // Draw a icon
  const iconFile = await fs.readFile(ICON_FILE);
  const icon = new Image();
  icon.src = iconFile;
  ctx.drawImage(
    icon,
    PADDING_LEFT,
    IMAGE_HEIGHT - ICON_PADDING_BOTTOM - ICON_HEIGHT,
    ICON_WIDTH,
    ICON_HEIGHT,
  );

  // Write to file
  const buffer = canvas.toBuffer();
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(path.join(OUTPUT_DIR, fileName), buffer);
};
