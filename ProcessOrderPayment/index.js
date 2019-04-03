//var azureQueue = require('azure-queue-node');
var azure = require('azure-storage');



module.exports = function (context, req) {
    context.log('Order put into order queue');


    var order = {
        product : req.body.product,
        price : req.body.price,
        email : req.body.email,
        name : req.body.name
        
    };

    var queueSvc = azure.createQueueService();
    var queueSvc3 = azure.createQueueService();
    const QueueMessageEncoder = azure.QueueMessageEncoder;

    for(var i = 0; i++; i < 5){
        Console.log(i);
    }

    queueSvc.messageEncoder = new QueueMessageEncoder.TextBase64QueueMessageEncoder();
    queueSvc3.messageEncoder = new QueueMessageEncoder.TextBase64QueueMessageEncoder();

    var queueName = "boopperorderqueue";

    queueSvc.createQueueIfNotExists(queueName, function(error, results, response){
        if(!error){
            if(results.created){ context.log("Create boopperorderqueue queue"); }
        }
      });

    queueSvc.createMessage(queueName, JSON.stringify(order), function(error, results, response){
    if(!error){
        // Message inserted
        context.log("Added Message to queue");
    }
    });

    context.done();
};