/** Join class names, ignoring falsy values. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** True for links that leave the site (http/https/mailto/tel). */
export function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
