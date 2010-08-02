// ==========================================================================
// Project:   Twitter.tweetController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.tweetController = SC.ObjectController.create(
/** @scope Twitter.tweetController.prototype */ {

  contentBinding: 'Twitter.tweetsController.selection',
  contentBindingDefault: SC.Binding.single()

}) ;
