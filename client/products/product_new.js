AutoForm.hooks({
  newProduct: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('New product added.');
      Router.go('productPage',{_id: this.docId});
    }, 
  }
});