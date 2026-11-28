import type { APIRoute } from "astro";

// https://www.rfc-editor.org/rfc/rfc9116
// Expires はビルドのたびに更新し、RFC の推奨どおり 1 年未満にする
const EXPIRES_IN_DAYS = 180;
const MILLISECONDS_PER_DAY = 86_400_000;

export const GET: APIRoute = () => {
  const expires = new Date(Date.now() + EXPIRES_IN_DAYS * MILLISECONDS_PER_DAY);

  const body = [
    "Contact: https://github.com/bicstone/portfolio/security/advisories/new",
    `Expires: ${expires.toISOString()}`,
    "Encryption: https://bicstone.me/takanori0014.asc",
    "Preferred-Languages: ja, en",
    "Canonical: https://bicstone.me/.well-known/security.txt",
    "Policy: https://github.com/bicstone/portfolio/blob/main/SECURITY.md",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
