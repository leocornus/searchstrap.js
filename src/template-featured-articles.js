;(function() {

    /**
     * build the Acronyms list, which will have 6 columns
     */
    var buildFeaturedArticles = function(strap, $result, docs, currentQuery,
                         total, currentPage, totalPages, pagination) {
    
        // the function buildXColsARow is defined in file 
        // layout-x-cols-a-row.js
        // set for 2 columns a row, the size of the unit panel should
        // keep consistant with the total column.
        return buildXColsARow(strap, $result, docs, currentQuery, total,
                              currentPage, totalPages, pagination, 2,
                              articlePanel);
    };

    /**
     * builder function to build the user profile by using the 
     * Bootstrap thumbnail.
     */
    var articlePanel = function(profile) {
    
        //console.log(profile);
    
        // try to remove some wiki markups.
        var desc = profile['description'];
    
        // get ready the img tag.
        // - set the default to empty if there is no image.
        // - another choice is to use a default image.
        var imgTag = '';
        if(profile['image']) {
            // using the pull-left try to make the text wrap around the
            // image.
            imgTag = 
    '  <a class="pull-left" href="' + profile['url'] + '">' +
    '  <img src="' + profile['image'] + 
    //            '" class="img-circle" width=150 alt="' + 
                '" class="img-rounded" width=200 alt="' + 
                profile['title'] + '"/>' +
    '  </a>';
        }
    
        // get ready the modified date.
        var modifiedDate = moment(profile['creationDate']).locale('fr-ca');
    
        var panel =
    '<div>' +
    imgTag +
    '  <div>' +
    '    <h4><a href="' + profile['url'] + '">' + profile['title'] + 
    '</a></h4>' +
    '    <p>' + 
    //'    <span class="label label-default">' + 
    '    <span class="text-success"><strong>' + 
    modifiedDate.format("MMMM DD, YYYY") + '</strong></span> - ' +
         desc +'</p>' +
    '  </div>' +
    '</div>';
    
        // add the column div.
        panel = '<div class="col-sm-6">' + panel + '</div>'
    
        return panel;
    };
    
    window.buildFeaturedArticles = buildFeaturedArticles;
}());
