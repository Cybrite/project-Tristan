export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.8,
  extraSlow: 1.5,
};

export const POEM_READING_INTERVAL = 3000;

export const ROUTES = {
  home: "/",
  gallery: "/gallery",
  poem: (id: string) => `/poem/${id}`,
  about: "/about",
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};
