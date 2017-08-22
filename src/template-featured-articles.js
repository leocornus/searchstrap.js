;(function() {

    /**
     * build featured Article list in English, the default language.
     */
    var buildFeaturedArticles = function(strap, $result, docs, currentQuery,
                         total, currentPage, totalPages, pagination) {

        // the function buildXColsARow is defined in file
        // layout-x-cols-a-row.js
        // set for 2 columns a row, the size of the unit panel should
        // keep consistant with the total column.
        return buildXColsARow(strap, $result, docs, currentQuery, total,
                              currentPage, totalPages, pagination, 2,
                              articlePanelEN);
    };

    /**
     * build featured article list in French.
     */
    var buildFeaturedArticlesFR = function(strap, $result, docs, currentQuery,
                         total, currentPage, totalPages, pagination) {

        // the function buildXColsARow is defined in file
        // layout-x-cols-a-row.js
        // set for 2 columns a row, the size of the unit panel should
        // keep consistant with the total column.
        return buildXColsARow(strap, $result, docs, currentQuery, total,
                              currentPage, totalPages, pagination, 2,
                              articlePanelFR);
    };

    /**
     * English panel.
     */
    var articlePanelEN = function(profile) {

        return articlePanel(profile, 'en');
    };

    /**
     * french panel.
     */
    var articlePanelFR = function(profile) {

        return articlePanel(profile, 'fr-ca');
    };

    /**
     * builder function to build the user profile by using the 
     * Bootstrap thumbnail.
     */
    var articlePanel = function(profile, i18n) {
    
        //console.log(profile);
        var i18n = typeof i18n !== 'undefined' ? i18n: 'en';
    
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
        var modifiedDate = moment(profile['creationDate']).locale(i18n);
    
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
    window.buildFeaturedArticlesFR = buildFeaturedArticlesFR;
}());
