// ==========================================================================
// Project:   Twitter.tweetsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.tweetsController = SC.ArrayController.create(
/** @scope Twitter.tweetsController.prototype */ {

  allowsMultipleSelection: NO,
  
  filterBy: '',
  
  filtered: function() {
    var objs = this.get('arrangedObjects'),
        filter = this.get('filterBy'),
        ret, text ;
        
    if (SC.empty(filter)) return objs ;
    
    ret = objs.filter(function(o) {
      text = o.get('text') ;
      if (text.indexOf(filter) >= 0) {
        return YES ;
      } else {
        return NO ;
      }
    }) ;
    
    return ret ;
    
  }.property('arrangedObjects', 'filterBy').cacheable()

}) ;
