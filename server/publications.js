Meteor.publish('products', function() {
	return Products.find();
});

Meteor.publish('customers', function() {
	return Customers.find();
});

Meteor.publish('invoices', function() {
	var currentUserId = this.userId;
	return Invoices.find({createdBy: currentUserId});
});

Meteor.publish('users', function(userIds) {
  usersfetched = Meteor.users.find({_id: {$in: userIds}}, {fields: {emails: 1, profile: 1}});
  return usersfetched;
});
