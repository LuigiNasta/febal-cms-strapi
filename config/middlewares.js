module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'https://centroarredamentiflligaeta-6idyfae57-luigis-projects-c44fd8d7.vercel.app',
        'https://febal-cms-strapi-production.up.railway.app',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'X-Frame-Options', 'strapi'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  {
    resolve: 'strapi::query',
  },
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];