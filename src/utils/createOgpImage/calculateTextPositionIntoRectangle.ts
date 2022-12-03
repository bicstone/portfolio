/**
 * Calculate text positions to draw texts into rectangle
 *
 * forked from https://github.com/kentaro-m/catchy-image/blob/6eb20df1bc1f9042c9e229f7f6e1100f90bb538f/src/index.js
 * MIT License Copyright (c) 2020 Kentaro Matsushita
 */

import { isDefined } from "../typeguard";

export const calculateTextPositionIntoRectangle = ({
  ctx,
  text,
  paddingTop,
  paddingLeft,
  font,
  width,
  height,
}: {
  ctx: CanvasRenderingContext2D;
  text: string;
  paddingTop: number;
  paddingLeft: number;
  font: string;
  width: number;
  height: number;
}): {
  lines: Array<{
    y: number;
    text: string;
    x: number;
  }>;
} => {
  const lines: Array<{ text: string; x: number; y: number }> = [];
  ctx.font = font;

  let words: string[] = [...text];
  let top = paddingTop;

  while (words.length > 0) {
    let i: number | undefined;
    let slicedText: string | undefined;
    let textSize: TextMetrics | undefined;

    for (i = words.length; i >= 0; i -= 1) {
      slicedText = words.slice(0, i).join("");
      textSize = ctx.measureText(slicedText);

      if (textSize.width <= width) {
        break;
      }
    }

    if (!isDefined(i) || !isDefined(slicedText) || !isDefined(textSize)) {
      throw new Error("Title is not provided.");
    }

    const lineHeight =
      (textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent) *
      1.2;

    lines.push({
      text: slicedText,
      x: paddingLeft,
      y: top + lineHeight,
    });

    words = words.slice(i);
    top += lineHeight;
  }

  const space = paddingTop + height - top;
  if (words.length === 0 && space >= 0) {
    const centeredLines = lines.map((line) => {
      return {
        ...line,
        y: line.y + space / 2,
      };
    });
    return {
      lines: centeredLines,
    };
  }

  throw new Error(
    "Failed draw title into a rectangle. Shorten title and retry."
  );
};
