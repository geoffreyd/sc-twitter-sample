# ===========================================================================
# Project:   Twitter
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore, :theme => 'sproutcore/ace'

# proxy '/search', :to => 'search.twitter.com'
proxy '/search', :to => 'localhost:8880'

