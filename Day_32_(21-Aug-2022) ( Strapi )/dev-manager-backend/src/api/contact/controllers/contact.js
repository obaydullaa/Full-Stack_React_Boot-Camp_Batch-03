'use strict';

/**
 *  contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({strapi}) => ({
    async delete(ctx) {
        console.log(ctx.state.user);
        console.log(ctx.params.id);
        console.log(ctx.request.body);
        const response = super.delete(ctx);
        return response;
    },

}));
