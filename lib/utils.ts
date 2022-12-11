import slugify from 'slugify';

function includesValue(items: string | string[], value: string) {
  if (typeof items === 'string') {
    return items === toSlug(value);
  } else {
    return items.includes(toSlug(value));
  }
}

function toSlug(input: string) {
  return slugify(input || '', {
    lower: true
  })
}

export { includesValue, toSlug };
