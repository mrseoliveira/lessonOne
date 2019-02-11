var Hapi = require('hapi');

var server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});


server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      return('Hello world from hapi');
    }
  }
]);

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();