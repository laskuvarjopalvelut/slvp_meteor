AutoForm.hooks({
  editCustomer: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('Customer edit successful.');
      Router.go('customerPage',{_id: this.docId});
    }, 
  }
});