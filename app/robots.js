export const runtime = "edge";

export default function robots() {
  return new Response(
    `
    User-agent: *
    Allow: /
    Disallow: /private/

    Sitemap: https://vbccinstruments.com/api/sitemap
    `,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
