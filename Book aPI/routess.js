let Router= require('express').Router();
const { Route } = require('express');
var bookController=require('./bookController');

//set default api response

Router.get('/',function(req,res){
    res.json({
        status:'working',
        message:'This is /api/route!'
    });
});


//Book routes

Router.route('/books').get(bookController.index).post(bookController.new);

Router.route('/books/:books_id').get(bookController.view).patch(bookController.update).put(bookController.update).delete(bookController.delete);

//export API routes

module.exports=Router;