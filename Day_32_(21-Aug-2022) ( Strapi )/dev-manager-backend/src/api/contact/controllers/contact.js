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
        try{
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
    
            const response = await super.delete(ctx);
            return response;
        }catch(err){
            ctx.internalServerError('Unknown arrow')
        }
    },

    async create(ctx) {
        try{
            const {id} = ctx.state.user;
        ctx.request.body.data.author = id;
        const response = await super.create(ctx);
         return response;
        }catch(err) {
            ctx.internalServerError('Unknown arrow')
        }
    },


    async updated(ctx) {
        const {id: authId} = ctx.state.user
        const {id} = ctx.params;

        try {
            const contact = await strapi.entityService.findOne(
                "api::contact.contact", 
                +id,
                {
                populate: "author"
            }
            );
            if(!contact) return ctx.notFound('contact is not found to be Updated')
            if(contact.author.id !== authId) 
                return ctx.unauthorized('Your are not the owner of the contact the contact')
    
            const response = await super.update(ctx);
            return response;

        }catch(err) {
            ctx.internalServerError('Unknown arrow')
        }
    } 

}));
