module.exports = (app) => {
    const users = require('../regControler/adminControler.js');
  
   
    app.post('/users', users.create);
    app.get('/users', users.findAll);
    app.get('/users/:id', users.findOne);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);
  }