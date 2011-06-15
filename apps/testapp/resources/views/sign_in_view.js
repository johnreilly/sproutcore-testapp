TestApp.SignInView = SC.TemplateView.extend({
  signIn: function(){
    
    var credentials = {
      // This seems pretty weird, is this the right way to pull out "form" values?
      // Is there a better way to do this via some bindings, or to have a collection
      // of some sort to get all of the values at once?
      username: this.$('#username').val(),
      password: this.$('#password').val()
    };
        
    TestApp.statechart.sendEvent('tryLogin', credentials);
  }
});