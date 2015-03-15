Template.listCustomers.helpers({
  customer: function() {
   return Customers.find();
  }
});