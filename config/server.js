module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3007),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a934d4a3b13d96c1518cfc1bba647625'),
    },
  },
});
