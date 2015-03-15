Products = new Mongo.Collection('products');

Schemas.Product = new SimpleSchema({
    name: { // registration e.g. OH-WTF
    	type: String,
    	label: "Nimi",
    },
    vat: { // Cessna etc
        type: String,
        label: "ALV%",
        allowedValues: ['14', '24', '0'],
        max: 200
    },
    price: { // 208 Caravan
        type: Number,
        decimal: true,
        label: "Hinta €"
    },   
    private: { // Only for me
      label: "Piilotettu muilta",
      type: Boolean,
      optional: true
    }
});

Products.attachSchema(Schemas.Product);

Products.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
  });