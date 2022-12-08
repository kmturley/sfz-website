import slugify from 'slugify';

function toSlug(input: string) {
  return slugify(input, {
    lower: true
  })
}

export { toSlug };
