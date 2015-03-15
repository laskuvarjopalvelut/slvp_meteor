Template.aircraftItem.helpers({ 
 product: function(id) {
	return Products.findOne(this.id);
	}
});