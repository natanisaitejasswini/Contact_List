console.log('routes');
var contacts = require('../controllers/contacts');

module.exports = function(app){
  app.get('/contacts', contacts.index);
  app.get('/contacts/:id', contacts.show);
  app.post('/contacts', contacts.create);
  app.put('/contacts/:id', contacts.update);
  app.delete('/contacts/:id', contacts.delete);
}
  