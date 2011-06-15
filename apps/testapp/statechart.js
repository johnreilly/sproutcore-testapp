TestApp.statechart = SC.Statechart.create({
  initialState: 'loggedOut',
  
  loggedOut: SC.State.extend({
    
    enterState: function(){
      console.log('ENTER STATE: loggedOut');
      this.set('pane', SC.TemplatePane.append({
        layerId: 'test_app',
        templateName: 'sign_in'
      }));
    },
    
    exitState: function(){
      console.log('EXIT STATE: loggedOut');
      this.get('pane').remove();
    },
    
    tryLogin: function(credentials){
      
      //attempt to log-in user.
      var user = credentials;
      TestApp.userController.set('content', user);
      
      this.gotoState('loggedIn');
    }
  }),
  
  loggedIn: SC.State.extend({
    
    enterState: function(){
      console.log('ENTER STATE: loggedIn');
      this.set('pane', SC.TemplatePane.append({
        layerId: 'test_app',
        templateName: 'main_app'
      }));
    },
    exitState: function(){
      console.log('EXIT STATE: loggedIn');
      this.get('pane').remove();
    }, 
    
    tryLogout: function(){
      TestApp.userController.set('content', null);
      this.gotoState('loggedOut');
    }
  })
});