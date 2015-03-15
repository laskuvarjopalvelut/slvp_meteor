AutoForm.hooks({
  newCustomer: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New customer added.');
      Router.go('customerPage',{_id: this.docId});
    }, 
  }
});