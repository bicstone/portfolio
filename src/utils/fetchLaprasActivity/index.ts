import { promises as fs } from "fs";
import https from "https";
import path from "path";

import { toDate } from "date-fns-tz";
import { dump } from "js-yaml";

const API_URL = "https://lapras.com/public/bicstone.json";

const CONTENT_DIR = path.resolve(__dirname, "..", "..", "..", "content");
const ZENN_FILE = path.resolve(CONTENT_DIR, "zenn", "articles.yml");
const SPEAKER_DECK_FILE = path.resolve(
  CONTENT_DIR,
  "speakerdeck",
  "slides.yml"
);

interface ZennArticle {
  title: string;
  url: string;
  tags: string[];
  posted_at: string;
}

interface SpeakerDeckSlide {
  title: string;
  description: string;
  url: string;
  star_count: number;
  view_count: number;
  presentation_date: string;
}

interface Response {
  zenn_articles: ZennArticle[];
  speaker_deck_slides: SpeakerDeckSlide[];
}

interface TimeLineItem {
  title: string;
  date: Date;
  url: string;
}

const fetchData = async (): Promise<string> => {
  return await new Promise<string>((resolve, reject) => {
    https
      .request(API_URL, (res) => {
        const data: string[] = [];
        res.on("data", (d) => data.push(d));
        res.on("end", () => {
          resolve(data.join(""));
        });
      })
      .on("error", reject)
      .end();
  });
};

export const fetchLaprasActivity = async (): Promise<void> => {
  const data = await fetchData();
  const response: Response = JSON.parse(data);
  const timeZone = "Asia/Tokyo";

  const zennArticles: TimeLineItem[] = response.zenn_articles.map((article) => {
    return {
      title: article.title,
      date: toDate(article.posted_at, { timeZone }),
      url: article.url,
    };
  });

  const speakerDeckSlides: TimeLineItem[] = response.speaker_deck_slides.map(
    (slide) => {
      return {
        title: slide.title,
        date: toDate(slide.presentation_date, { timeZone }),
        url: slide.url,
      };
    }
  );

  await fs.writeFile(ZENN_FILE, dump(zennArticles));

  await fs.writeFile(SPEAKER_DECK_FILE, dump(speakerDeckSlides));
};
