Customers = new Mongo.Collection('customers');

Schemas.Customer = new SimpleSchema({
    name: { // registration e.g. OH-WTF
    	type: String,
    	label: "Nimi",
    },
    businessid: { // Cessna etc
        type: String,
        label: "Y-tunnus",
        max: 200
    },
    address: { // 208 Caravan
        type: String,
        label: "Osoite"
    },
    zip: { // Maximum take off weight in kilos
      type: Number,
      label: "Postinumero",
      optional: true
    },
    city: { // Minimum jumpers to go
      type: String,
      label: "Postitoimipaikka",
      optional: true
    },
    phone: { // Max number of jumpers who can fit in
      type: String,
      label: "Puhelin",
      optional: true
    },
    private: { // Only for this user?
      label: "Piilotettu muilta",
      type: Boolean,
      optional: true
    }
});

Customers.attachSchema(Schemas.Customer);

Customers.allow({
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