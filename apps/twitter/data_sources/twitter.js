// ==========================================================================
// Project:   Twitter.Twitter
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Twitter.TWITTER_SEARCH_URL = "/search.json" ;
Twitter.TWITTER_QUERY = "q=%@" ;
Twitter.TWITTER_GEO = "geocode=%@,%@,%@" ;

Twitter.TWITTER_QUERY = SC.Query.remote(Twitter.Tweet) ;

Twitter.TwitterDataSource = SC.DataSource.extend(
/** @scope Twitter.Twitter.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    if (query == Twitter.TWITTER_QUERY) {
      var location = Twitter.get('location'),
          search = Twitter.searchQuery,
          url = Twitter.TWITTER_SEARCH_URL ;
      
      if (!SC.empty(search)) {
        url += "?"+Twitter.TWITTER_QUERY.fmt(search) ;
      } else if(location.coords) {
        url += "?"+Twitter.TWITTER_GEO.fmt(
          location.coords.latitude,
          location.coords.longitude,
          "10km"
        ) ;
      }
          
      SC.Request.getUrl(url).json(YES).notify(this, this.didFetch, {
        store: store, query: query
      }).send() ;
      
      return YES ;
    } else {
      return NO ;
    }
  },
  
  didFetch: function(request, params) {
    var store     = params.store,
        response  = request.get('response'),
        query     = params.query,
        results, status ;
    if (SC.ok(response) && SC.ok(results = response.results)) {
      status = request.get('status') ;
      this._refresh_url = response.refresh_url ;
      this._next_page   = response.next_page ;
      store.loadRecords(Twitter.Tweet, results) ;
      store.dataSourceDidFetchQuery(query) ;
    } else {
      store.dataSourceDidErrorQuery(query) ;
    }
  },
  
  _refresh_url: null,
  _next_page: null,

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
