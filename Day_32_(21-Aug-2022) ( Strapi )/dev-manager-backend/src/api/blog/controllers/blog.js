'use strict';

const {entityService} = require("@strapi/strapi").factories

/**
 * A set of functions called "actions" for `blog`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const data = await strapi.entityService.findMany("api::contact.contact", {
        fields: ["id", "firstName", "lastName", "bio"]
      })
      // ctx.body = 'Hello Blod World';


      return data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
