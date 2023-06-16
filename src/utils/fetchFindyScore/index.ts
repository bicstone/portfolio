import { promises as fs } from "fs";
import https from "https";
import path from "path";

const CONTENT_DIR = path.resolve(__dirname, "..", "..", "..", "content");
const SCORE_FILE = path.resolve(CONTENT_DIR, "findy", "scores.json");

interface Response {
  data: {
    shareProfile: {
      skillDeviation: {
        totalDeviation: number;
      };
    };
  };
}

const options: https.RequestOptions = {
  method: "POST",
  hostname: "api.findy-code.io",
  path: "/graphql/user?opname=FetchUserShareProfile",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
};

const body: string = JSON.stringify({
  operationName: "FetchUserShareProfile",
  variables: {
    shareHash: "AKvsozgldUI4i",
  },
  query:
    "query FetchUserShareProfile($shareHash: String!) {\n  shareProfile(shareHash: $shareHash) {\n    skillDeviation {\n      totalDeviation\n    }\n  }\n}",
});

const fetchData = async (): Promise<string> => {
  return await new Promise<string>((resolve, reject) => {
    const req = https.request(options, (res) => {
      const data: string[] = [];
      res.on("data", (d) => data.push(d));
      res.on("end", () => {
        resolve(data.join(""));
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
};

export const fetchFindyScore = async (): Promise<void> => {
  const data = await fetchData();
  const response: Response = JSON.parse(data);

  await fs.writeFile(
    SCORE_FILE,
    JSON.stringify(response.data.shareProfile.skillDeviation)
  );
};
