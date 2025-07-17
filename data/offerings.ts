export interface Offering {
  title: string
  slug: string
}

/**
 * Titles & slugs that appear in the footer “Our Programs” list.
 * (Keep this list in sync with the main “offerings” displayed on the home page.)
 */
export const offerings: Offering[] = [
  { title: "Code", slug: "code" },
  { title: "Craft", slug: "craft" },
  { title: "Code-n-Craft", slug: "code-n-craft" },
  { title: "Internships", slug: "internships" },
  { title: "Programs", slug: "programs" },
  { title: "Bulk Orders", slug: "bulk-orders" },
]
