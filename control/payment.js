module.exports = function(app) {
    app.get('/payment', payment_view);
    function payment_view(req,res){
        res.render('payment', {cart: req.session.cart});
    }
}
