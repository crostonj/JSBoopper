var mongoose = require('mongoose');

var Order = require('../Models/Order');

module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);

    var username = process.env.dbuser;
    var password = process.env.dbpassword;
    var host = process.env.dbhost;
    var port = process.env.dbport;

    mongoose.connect('mongodb://' + host + ':' + port +'/boopper?ssl=true',
    {
        auth: {
            user: username,
            password: password
        }
    }).then(() => {
        var order = new Order({
            product: myQueueItem.product,
            price: myQueueItem.price,
            email: myQueueItem.email,
            name: myQueueItem.name
        });
        
        order.save(function(err, result) {
            if (err) {
                context.log("Error saving order");
                context.log(err);
            }
            context.log("Order saved to database"); 
            context.res = {
                status: 200,
                body: "Successfully processed order for " + order.name
            }
        });


    }).catch((err) => {
        console.log(err);

        context.res = {
            status : 500,
            body : err
        }
    });
}
