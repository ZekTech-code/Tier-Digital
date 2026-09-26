const PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="rgb(226,232,240)"/></svg>`;

const parseImageMap = () => {
  try {
    const raw = import.meta.env.VITE_IMAGE_MAP;
    const parsed = typeof raw === "string" ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
};

const images = parseImageMap();

const pick = (key) =>
  typeof images[key] === "string" && images[key].length > 0
    ? images[key]
    : PLACEHOLDER;

export const IMG = {
  HERO_TEAM: pick("HERO_TEAM"),

  SVC_PAID_SOCIAL: pick("SVC_PAID_SOCIAL"),
  SVC_UGC: pick("SVC_UGC"),
  SVC_CRO: pick("SVC_CRO"),
  SVC_EMAIL: pick("SVC_EMAIL"),
  ANALYTICS: pick("ANALYTICS"),

  PODCAST_MIC: pick("PODCAST_MIC"),
  PODCAST_STUDIO: pick("PODCAST_STUDIO"),
  PODCAST_TEAM: pick("PODCAST_TEAM"),

  BEAUTY: pick("BEAUTY"),
  FITNESS: pick("FITNESS"),
  HOME: pick("HOME"),
  ORGANICS: pick("ORGANICS"),
  RETAIL: pick("RETAIL"),

  FUNNEL: pick("FUNNEL"),
  WEBDESIGN: pick("WEBDESIGN"),
  SHOPPING: pick("SHOPPING"),
  DATA_CHART: pick("DATA_CHART"),
  DATA_REPORT: pick("DATA_REPORT"),
  DATA_SCREEN: pick("DATA_SCREEN"),
  DATA_ANALYST: pick("DATA_ANALYST"),
  DATA_MEETING: pick("DATA_MEETING"),
  SOCIAL_ADS: pick("SOCIAL_ADS"),
  SOCIAL_MEDIA: pick("SOCIAL_MEDIA"),
  MOBILE_ADS: pick("MOBILE_ADS"),
  STRATEGY: pick("STRATEGY"),
  TEAM_COLLAB: pick("TEAM_COLLAB"),
  TEAM_MEETING: pick("TEAM_MEETING"),
  CREATIVE: pick("CREATIVE"),
  TEAM_DISCUSSION: pick("TEAM_DISCUSSION"),
  TEAM_LAPTOPS: pick("TEAM_LAPTOPS"),

  AVATAR_11: pick("AVATAR_11"),
  AVATAR_12: pick("AVATAR_12"),
  AVATAR_32: pick("AVATAR_32"),
  AVATAR_47: pick("AVATAR_47"),

  LOGO_FACEBOOK: pick("LOGO_FACEBOOK"),
  LOGO_GOOGLE: pick("LOGO_GOOGLE"),
  LOGO_FORBES: pick("LOGO_FORBES"),
  LOGO_INC: pick("LOGO_INC"),
  LOGO_AMAZON: pick("LOGO_AMAZON"),
  LOGO_MICROSOFT: pick("LOGO_MICROSOFT"),
  LOGO_META: pick("LOGO_META"),
  LOGO_AIRBNB: pick("LOGO_AIRBNB"),
  LOGO_SPOTIFY: pick("LOGO_SPOTIFY"),
  LOGO_SHOPIFY: pick("LOGO_SHOPIFY"),
  LOGO_NETFLIX: pick("LOGO_NETFLIX"),
};

export default IMG;
