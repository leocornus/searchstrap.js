;(function() {

    /**
     * build the default pagination in French.
     */
    var defaultPaginationDotsFR = function(strap, currentPage, totalPages) {
    
        var labels = {
            'previous' : '&laquo; Précédent',
            'next' : 'Prochain &raquo;'
        };
    
        return strap.defaultPaginationDots(strap, currentPage, totalPages, 
                                           labels);
    }
    
    window.defaultPaginationDotsFR = defaultPaginationDotsFR;
}());
