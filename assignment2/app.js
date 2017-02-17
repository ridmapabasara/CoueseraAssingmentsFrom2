(function(){

var application=angular.module('ShoppingListCheckOff',[]);
application.controller('ToBuyController',ToBuyController);
application.controller('AlreadyBoughtController',AlreadyBoughtController);
application.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


//tobuy controller
ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var tobuy=this;
tobuy.tobuylist=ShoppingListCheckOffService.Gettobuyitems();
tobuy.bought= function(index){
ShoppingListCheckOffService.MarkAsBought(index);
};

};


//allready boughtcontroller
AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
var bought=this;
bought.boughtlist=ShoppingListCheckOffService.Getboughtitems();
};



//service as a singleton
function ShoppingListCheckOffService(){

var service=this;
var tobuyitems=[{name: "cookies", quantity:8 },{ name: "buns", quantity: 10 },{ name: "cupcakes", quantity: 10 },{ name: "pancakes", quantity: 10 },{ name: "brownies", quantity: 10 },{ name: "pudding", quantity: 10 }];
var boughtitems=[];

service.MarkAsBought=function(index){
  var dummyitem=tobuyitems[index];
  tobuyitems.splice(index,1);
  boughtitems.push(dummyitem);
};


service.Gettobuyitems=function(){

  return tobuyitems;
};
service.Getboughtitems=function(){

return boughtitems;

};





};








})();
