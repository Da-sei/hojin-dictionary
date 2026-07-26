class SearchController < ApplicationController

    def disp
        @companies = Company.all
        render "search/search"
    end
end
