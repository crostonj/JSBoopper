var assert = require('chai').assert;
var order = require('../OrderQueueProcessing/index');

describe('Order', function(){

    var queueItem = {};
    var context = {};

    beforeEach(function() {
        req = {
          product: "Galaxy Note 9",
          price: "1049.00",
          email: "phoebec101@hotmail.com",
          name: "Phoebe Croston"
        };
     
      context = {
        res: {
          status: 200
        },
        log: function (str) {
          console.log(str); // eslint-disable-line no-console
        },
        done: function () {
        }
      };
      });


    it('Submit an order', function(){
        assert.equal()
    });
});