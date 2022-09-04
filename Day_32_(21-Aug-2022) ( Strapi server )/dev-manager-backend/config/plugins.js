module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY'), // Required
        domain: env('MAILGUN_DOMAIN'), // Required
      },
      settings: {
        defaultFrom: 'cr7obaydul1@gmail.com',
        defaultReplyTo: 'cr7obaydul1@gmail.com',
      },
    },
  },
  // ...
});