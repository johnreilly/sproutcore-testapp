TestApp.SignInView = SC.TemplateView.extend({
  signIn: function(){
    var credentials = {
      username: this.$('#username').val(),
      password: this.$('#password').val()
    };    
    TestApp.statechart.sendEvent('tryLogin', credentials);
  }
});