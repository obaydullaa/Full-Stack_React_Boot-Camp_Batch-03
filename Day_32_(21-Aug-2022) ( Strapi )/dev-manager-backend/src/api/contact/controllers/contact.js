'use strict';

/**
 *  contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({strapi}) => ({
    async delete(ctx) {
        // console.log(ctx.state.user);
        // console.log(ctx.params.id);
        // console.log(ctx.request.body);
        // console.log(id, typeof id);

        const {id} = ctx.params;
        const {id: authId} = ctx.state.user
        const contact = await strapi.entityService.findOne(
            "api::contact.contact", 
            +id,
            {
            populate: "author"
        }
        );

        if(!contact) return ctx.notFound('contact is not found to be deleted')
        if(contact.author.id !== authId) 
            return ctx.unauthorized('Your are not the owner of the contact')

        const response = super.delete(ctx);
        return response;
    },

}));
