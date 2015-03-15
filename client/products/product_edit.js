AutoForm.hooks({
  editProduct: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      FlashMessages.sendSuccess('Product edit successful.');
      Router.go('productPage',{_id: this.docId});
    }, 
  }
});