Router.configure({layoutTemplate: 'masterLayout'});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('mylikes', {path: '/mylikes'});
});

Template._loginButtonsLoggedInDropdown.events({
  'click #soundcloud-login': function(event) {
    event.stopPropagation();
    Template._loginButtons.toggleDropdown();
    Meteor.loginWithSoundcloud(function(evt) {
        console.log("Logged in");
    });
  }
});

Template.mylikes.likes = function() {
    return Soundcloud.getLikes();
}
