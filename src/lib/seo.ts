export const SITE_URL = "https://www.havenzaproperties.com";
export const SITE_NAME = "Havenza Properties";
export const SITE_DEFAULT_TITLE =
  "Havenza Properties — Refinement, Rigour, Real Value in Dubai";
export const SITE_DEFAULT_DESCRIPTION =
  "Boutique Dubai real estate advisory offering premium property solutions and strategic investment opportunities. Founded by Ansiya Rouf Madathilparambil.";
export const SITE_KEYWORDS =
  "Havenza Properties, Dubai real estate, Dubai property advisory, luxury property Dubai, off-plan investment Dubai, Palm Jumeirah, Dubai Marina, Downtown Dubai, Ansiya Rouf Madathilparambil, boutique property advisory";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl("/havenza-logo.png");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords ?? SITE_KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
