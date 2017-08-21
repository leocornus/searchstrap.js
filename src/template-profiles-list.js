;(function() {

    /**
     * build the Acronyms list, which will have 6 columns
     */
    var buildProfilesList = function(strap, $result, docs, currentQuery,
                         total, currentPage, totalPages, pagination) {
    
        // the function buildXColsARow is defined in file 
        // layout-x-cols-a-row.js
        return buildXColsARow(strap, $result, docs, currentQuery, total,
                              currentPage, totalPages, pagination, 4,
                              userProfilePanel);
    };
    
    /**
     * builder function to build the user profile by using the 
     * Bootstrap thumbnail.
     */
    var userProfilePanel = function(profile) {
    
       console.log(profile);
    
        // try to remove some wiki markups.
        var desc = profile['content'];
    
        // thumbnail panel
        var panel =
    '<div class="thumbnail" style="border: 0px">' +
    '  <a href="' + profile['url'] + '">' +
    '  <img src="' + profile['image'] + 
                '" class="img-circle" width=100% alt="' + 
                profile['title'] + '"/>' +
    '  </a>' +
    '  <div class="caption">' +
    '    <h3><a href="' + profile['url'] + '">' + profile['title'] + 
    '</a></h3>' +
    '    <p>' + desc +'</p>' +
    '  </div>' +
    '</div>';
    
        // using the pull-left try to make the text wrap around the
        // image.
        panel =
    '<div>' +
    '  <a class="pull-left" href="' + profile['url'] + '">' +
    '  <img src="' + profile['image'] + 
                '" class="img-circle" width=86 alt="' + 
                profile['title'] + '"/>' +
    '  </a>' +
    '  <div>' +
    '    <h4><a href="' + profile['url'] + '">' + profile['title'] + 
    '</a></h4>' +
    '    <p>' + desc +'</p>' +
    '  </div>' +
    '</div>';
    
        // add the column div.
        panel = '<div class="col-sm-3">' + panel + '</div>'
    
        return panel;
    };
    
    window.buildProfilesList = buildProfilesList;
}());
