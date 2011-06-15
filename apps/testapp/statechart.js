TestApp.statechart = SC.Statechart.create({
  initialState: 'signin',
  
  signin: SC.State.extend({
    
    enterState: function(){
      console.log('ENTER STATE: signin');
      this.set('pane', SC.TemplatePane.append({
        layerId: 'test_app',
        templateName: 'sign_in'
      }));
    },
    
    exitState: function(){
      console.log('EXIT STATE: signin');
      this.get('pane').remove();
    },
    
    tryLogin: function(credentials){
      
      //attempt to log-in user.
      var user = credentials;
      TestApp.userController.set('content', user);
      
      this.gotoState('main');
    }
  }),
  
  main: SC.State.extend({
    // Assuming this app will have many states as time goes on, is there a way 
    // for all states to have some sort of before filter that would check if
    // there is a valid user set on userController? I'm thinking this would be
    // important if users can use routing to bookmark into a particular state... 
    enterState: function(){
      console.log('ENTER STATE: main');
      this.set('pane', SC.TemplatePane.append({
        layerId: 'test_app',
        templateName: 'main_app'
      }));
    },
    exitState: function(){
      console.log('EXIT STATE: main');
      this.get('pane').remove();
    }, 
    
    tryLogout: function(){
      TestApp.userController.set('content', null);
      this.gotoState('signin');
    }
  })
});