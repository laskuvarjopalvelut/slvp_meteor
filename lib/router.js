(function(){Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

// Static pages

Router.route('/', {name: 'home'});

Router.route('/about', {name: 'about'});

//Customers

Router.route('/customers', {
	name: 'listCustomers',
	waitOn: function() {
		if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		    Meteor.subscribe('customers');
		}
	}
});

Router.route('/customer/new', {name: 'newCustomer'});

Router.route('/customer/:_id/edit', {
	name: 'editCustomer',
	data: function() { return Customers.findOne(this.params._id);}
});


Router.route('/customer/:_id', {
	waitOn: function() {
				if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		Meteor.subscribe('customers');
		}
	},
	name: 'customerPage',
	data: function() { 
		return Customers.findOne(this.params._id);
	}
});

//Products

Router.route('/products', {
	name: 'listProducts',
	waitOn: function() {
		if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		    Meteor.subscribe('products');
		}
	}
});

Router.route('/product/new', {name: 'newProduct'});

Router.route('/product/:_id/edit', {
	name: 'editProduct',
	data: function() { return Products.findOne(this.params._id);}
});


Router.route('/product/:_id', {
	waitOn: function() {
				if (!Meteor.user()) { // if not logged in
            this.render('login');
        } else {
		Meteor.subscribe('products');
		}
	},
	name: 'productPage',
	data: function() { 
		return Products.findOne(this.params._id);
	}
});



// Users

Router.route('/user/:_id', {
	name: 'profileShow',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

Router.route('/user/:_id/edit', {
	name: 'profileEdit',
	data: function() { return Meteor.users.findOne(this.params._id);}
});

})();
