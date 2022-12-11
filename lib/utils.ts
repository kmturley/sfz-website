import slugify from 'slugify';

function includesValue(items: string | string[] | undefined, value: string) {
  if (typeof items === 'string') {
    return items === toSlug(value);
  } else if (typeof items === 'object') {
    return items.includes(toSlug(value));
  }
}

function toSlug(input: string) {
  return slugify(input || '', {
    lower: true,
  });
}

export { includesValue, toSlug };
