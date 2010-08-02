// ==========================================================================
// Project:   Twitter.Tweet
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.Tweet = SC.Record.extend(
/** @scope Twitter.Tweet.prototype */ {

  primaryKey: 'id',
  
  "location": SC.Record.attr(String),
  "profile_image_url": SC.Record.attr(String),
  "created_at": SC.Record.attr(String),
  "from_user": SC.Record.attr(String),
  "metadata": SC.Record.attr(Object),
  "to_user_id": SC.Record.attr(Number),
  "text": SC.Record.attr(String),
  "from_user_id": SC.Record.attr(Number),
  // "geo": null,
  "iso_language_code": SC.Record.attr(String),
  "source": SC.Record.attr(String)

}) ;
