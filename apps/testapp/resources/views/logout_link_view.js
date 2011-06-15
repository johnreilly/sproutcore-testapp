TestApp.LogoutLinkView = SC.TemplateView.extend({
  mouseUp: function(){
    TestApp.statechart.sendEvent("tryLogout");
  }
});