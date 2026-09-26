const PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="rgb(226,232,240)"/></svg>`;

const pick = (value) => (value && value.length > 0 ? value : PLACEHOLDER);

export const IMG = {
  HERO_TEAM: pick(import.meta.env.VITE_IMG_HERO_TEAM),

  SVC_PAID_SOCIAL: pick(import.meta.env.VITE_IMG_SVC_PAID_SOCIAL),
  SVC_UGC: pick(import.meta.env.VITE_IMG_SVC_UGC),
  SVC_CRO: pick(import.meta.env.VITE_IMG_SVC_CRO),
  SVC_EMAIL: pick(import.meta.env.VITE_IMG_SVC_EMAIL),
  ANALYTICS: pick(import.meta.env.VITE_IMG_ANALYTICS),

  PODCAST_MIC: pick(import.meta.env.VITE_IMG_PODCAST_MIC),
  PODCAST_STUDIO: pick(import.meta.env.VITE_IMG_PODCAST_STUDIO),
  PODCAST_TEAM: pick(import.meta.env.VITE_IMG_PODCAST_TEAM),

  BEAUTY: pick(import.meta.env.VITE_IMG_BEAUTY),
  FITNESS: pick(import.meta.env.VITE_IMG_FITNESS),
  HOME: pick(import.meta.env.VITE_IMG_HOME),
  ORGANICS: pick(import.meta.env.VITE_IMG_ORGANICS),
  RETAIL: pick(import.meta.env.VITE_IMG_RETAIL),

  FUNNEL: pick(import.meta.env.VITE_IMG_FUNNEL),
  WEBDESIGN: pick(import.meta.env.VITE_IMG_WEBDESIGN),
  SHOPPING: pick(import.meta.env.VITE_IMG_SHOPPING),
  DATA_CHART: pick(import.meta.env.VITE_IMG_DATA_CHART),
  DATA_REPORT: pick(import.meta.env.VITE_IMG_DATA_REPORT),
  DATA_SCREEN: pick(import.meta.env.VITE_IMG_DATA_SCREEN),
  DATA_ANALYST: pick(import.meta.env.VITE_IMG_DATA_ANALYST),
  DATA_MEETING: pick(import.meta.env.VITE_IMG_DATA_MEETING),
  SOCIAL_ADS: pick(import.meta.env.VITE_IMG_SOCIAL_ADS),
  SOCIAL_MEDIA: pick(import.meta.env.VITE_IMG_SOCIAL_MEDIA),
  MOBILE_ADS: pick(import.meta.env.VITE_IMG_MOBILE_ADS),
  STRATEGY: pick(import.meta.env.VITE_IMG_STRATEGY),
  TEAM_COLLAB: pick(import.meta.env.VITE_IMG_TEAM_COLLAB),
  TEAM_MEETING: pick(import.meta.env.VITE_IMG_TEAM_MEETING),
  CREATIVE: pick(import.meta.env.VITE_IMG_CREATIVE),
  TEAM_DISCUSSION: pick(import.meta.env.VITE_IMG_TEAM_DISCUSSION),
  TEAM_LAPTOPS: pick(import.meta.env.VITE_IMG_TEAM_LAPTOPS),
};

export default IMG;
