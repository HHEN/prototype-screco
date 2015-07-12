/* soundcloud.js */

var dep = new Deps.Dependency;
Soundcloud = {
  getLikes: function() {
    dep.depend();

    //Set access token so we can query the Soundcloud API
    var user = Meteor.user();
    if(user && user.services.soundcloud){
        var accessToken = user.services.soundcloud.accessToken;
        if(accessToken){
            console.log('setting access token');
            SC.accessToken(accessToken);
        }
    }
    var id = SC.get("/me/followings", {limit: 10}, function(users){
    users[0].id;
    console.log(users[0].id);
    });

    if(typeof this.likes === 'undefined') {
      this.likes = [];

      //Call the API
      SC.get("/users/"+id+"/favorites",_.bind(function(response){
        if(response.errors){
            //TODO: Handle error
        }
        this.likes = response;
        dep.changed();
      }, this));
    }
    return this.likes;
  }


};