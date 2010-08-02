// ==========================================================================
// Project:   Twitter - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

// This page describes the main user interface for your application.  
Twitter.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'toolbar tweetScroller'.w(),
    
    toolbar: SC.ToolbarView.design({
      anchorLocation: SC.ANCHOR_TOP,
      
      childViews: 'filter'.w(),
      
      filter: SC.TextFieldView.design({
        layout: {centerY: 0, centerX: 0, height: 24, width: 150},
        valueBinding: 'Twitter.tweetsController.filterBy',
        hint: 'Filter These Results'
      })
    }),
    
    tweetScroller: SC.ScrollView.design({
      layout: { top: 30, right: 0, bottom: 0, left: 0 },
      contentView: SC.ListView.design({
        contentBinding: 'Twitter.tweetsController.filtered',
        rowHeight: 80,
        exampleView: Twitter.TweetView
      })
    })
  })

});
