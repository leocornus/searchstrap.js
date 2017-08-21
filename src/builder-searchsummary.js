;(function(){
    /**
     * the default search summary in French
     */
    var defaultSearchSummaryFR = function(strap, currentQuery, total,
                                          currentPage, totalPages) {
    
        var resultSummary = '';
        if(total > 0) {
            var end = currentQuery.start +
                      currentQuery.perPage - 1;
            end = end > total ? total : end;
            resultSummary =
                'Page <strong>' + currentPage + '</strong>' +
                ' Résultats [<strong>' + currentQuery.start +
                '</strong> - <strong>' + end +
                '</strong>] sur <strong>' +
                total + '</strong> résultat total';
        } else {
            // no result found
            resultSummary =
                '<strong>Aucun résultat contenant tous vos ' +
                'termes de recherche n`a été trouvé</strong>';
        }
    
        return resultSummary;
    }
    
    window.defaultSearchSummaryFR = defaultSearchSummaryFR;
}());
