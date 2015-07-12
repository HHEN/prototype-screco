if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
 

// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "soundcloud"
});
ServiceConfiguration.configurations.insert({
  service: "soundcloud",
  clientId: "350a31dbf75d477910c1b4e8d88f6070",
  secret: "36fcc22e5c37eb94299c648d7e77913b"
});


 });
}