module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  settings: {
    cors: {
      enabled: true,
      origin: ["*"], // ❗ In production, replace "*" with your frontend domain
    },
  },
];
