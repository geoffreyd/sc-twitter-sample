// ==========================================================================
// Project:   Twitter.TweetView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Twitter.TweetView = SC.View.extend(
/** @scope Twitter.TweetView.prototype */ {
  
  classNames: ["tweet"],
  
  // layout: {height: 100},

  childViews: "text image name".w(),
  
  image: SC.ImageView.extend({
    layout: {left: 2, top: 2, height: 50, width: 50},
    classNames: ['tweet-image'],
    valueBinding: '.owner*content.profile_image_url'
  }),
  
  name: SC.LabelView.extend({
    layout: {left: 70, top: 6, height: 20, right: 10},
    classNames: ['tweet-name'],
    valueBinding: '.owner*content.from_user',
    fontWeight: SC.BOLD_WEIGHT
  }),
  
  text: SC.LabelView.extend({
    layout: {left: 60, top: 2, bottom: 15, right: 10},
    classNames: ['tweet-text'],
    valueBinding: '.owner*content.text'
  })

});
