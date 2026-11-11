/** Resolves a file in public/media, so the site also works when served from a sub-path */
export const media = (path: string) => `${import.meta.env.BASE_URL}media/${path}`;
