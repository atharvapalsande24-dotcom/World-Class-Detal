/**
 * Converts a string into a URL-safe slug.
 * - Lowercases the input
 * - Strips characters that are not lowercase letters, digits, spaces, or hyphens
 * - Trims leading/trailing whitespace
 * - Replaces whitespace runs with a single hyphen
 * - Collapses consecutive hyphens
 * - Removes leading and trailing hyphens
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Alias for slugify — convenience helper for generating service slugs.
 */
export const getServiceSlug = slugify
