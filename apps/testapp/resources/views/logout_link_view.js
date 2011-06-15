TestApp.LogoutLinkView = SC.TemplateView.extend({
  // Ideally, this would be a regular link to '/signout' that could get handled by a
  // route, which would forward it on to the signin state. Is that possible? or even "good?"
  
  mouseUp: function(){
    TestApp.statechart.sendEvent("tryLogout");
  }
});