export const services = {
  youtube: {
    apiKey: Bun.env.YOUTUBE_API_KEY,
    apiSearchUrl: Bun.env.YOUTUBE_API_SEARCH_URL!,
    baseUrl: Bun.env.YOUTUBE_BASE_URL!,
  },
  deezer: {
    apiUrl: Bun.env.DEEZER_API_URL!,
  },
  appleMusic: {
    baseUrl: Bun.env.APPLE_MUSIC_BASE_URL!,
  },
  tidal: {
    baseUrl: Bun.env.TIDAL_BASE_URL!,
  },
  soundCloud: {
    baseUrl: Bun.env.SOUNDCLOUD_BASE_URL!,
  },
};

export const redis = {
  url: Bun.env.REDIS_URL!,
  searchCountKey: 'idonthavespotify:searchCount',
  cacheKey: 'idonthavespotify:cache:',
};
