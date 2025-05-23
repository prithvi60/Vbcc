import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
*[_type == "post"]|order(publishedAt desc)[0...12] {
  title,
  slug,
  blogShortRead,
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  "plainBody": body[].children[].text
}`;


export const POST_QUERY = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  blogShortRead,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  body[]{
    ...,
    _type == "image" => {
      "imageUrl": asset->url,
      alt
    }
  }
}
`