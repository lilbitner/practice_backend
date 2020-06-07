'use strict';
// import "reflect-metadata"

const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')


const init = async () => {

    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route({
      method: 'GET',
      path: '/title/{name}',
      handler: (request, h) => {

          return 'Next World Investments'
      },
      options: {
        validate: {
            params: Joi.object({
                name: Joi.string().min(3).max(10)
            })
        }
    }
  });

    server.route({
        method: 'GET',
        path: '/advisorinfo',
        handler: (request, h) => {

            return [{total_assets: "$30.1B"},
                {ytd_return: "8% ($31M)"},
                {lifetime_return: "%14 ($4.3B)"}, 
                {average_exposure: '8%'}];
        },
        options: {
            validate: {
                headers: Joi.object({
                    'content-type': "talagentrequest"
                    // Joi.required() //or specific value
                }).options({ allowUnknown: true })
                
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/clientinfo',
        handler: (request, h) => {

            return [{client_name: "University of California"},
                {number_of_portfolios: 3},
                {assets: '$74,958'}, 
                {asset_deviation: '44% $22K'}];
        }
    });


    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return '404 Error! Page Not Found!';
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri)
}



    // exports.init = async () => {

    //     await server.initialize();
    //     return server;
    // };
    
    // exports.start = async () => {
    
    //     await server.start();
    //     console.log(`Server running at: ${server.info.uri}`);
    //     return server;
    // };

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init()



