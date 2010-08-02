// ==========================================================================
// Project:   Twitter
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Twitter.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Twitter.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Twitter.contactsController.set('content',Twitter.contacts);
  
  console.log('Going to find Location') ;
  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('Found locations, call query') ;
    Twitter.set('location', position) ;
    Twitter.store.find(Twitter.TWITTER_QUERY) ;
  },
  function() {
    console.log("Using Test Location") ;
    // Twitter.set('location', {coords: { latitude: -27.5163535, longitude: 153.0298424 }}) ;
    var tweets = Twitter.store.find(Twitter.TWITTER_QUERY) ;
    Twitter.tweetsController.set('content', tweets) ;
  }) ;

} ;

function main() { Twitter.main(); }
