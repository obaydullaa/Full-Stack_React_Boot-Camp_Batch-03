module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/blog',
     handler: 'blog.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
