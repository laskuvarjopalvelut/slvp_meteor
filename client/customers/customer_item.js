Template.aircraftItem.helpers({ 
 customer: function(id) {
	return Customers.findOne(this.id);
	}
});