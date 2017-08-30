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

    /**
     * This search summary will have a brief message before the actual 
     * search result summary.
     */
    var preSearchSummaryEN = function(strap, currentQuery, total,
                                   currentPage, totalPages) {
        //
        var resultSummary =
           '<div class="h4">' +
           'The anonymized summaries below are from selected decisions of ethics executives. They are provided to promote consistency in the interpretation and application of the conflict of interest and political activity rules.' +
           '</div>';
        if(total > 0) {
            var end = currentQuery.start +
                      currentQuery.perPage - 1;
            end = end > total ? total : end;
            resultSummary = resultSummary +
                'Page <strong>' + currentPage + '</strong>' +
                ' Showing [<strong>' + currentQuery.start +
                '</strong> - <strong>' + end +
                '</strong>] of <strong>' +
                total + '</strong> total results';
        } else {
            // no result found
            resultSummary = resultSummary +
                '<strong>No results containing ' +
                'all your search terms were found.</strong>';
        }

        return resultSummary;
    }

    /**
     * This search summary will have a brief message before the actual 
     * search result summary, in French.
     */
    var preSearchSummaryFR = function(strap, currentQuery, total,
                                   currentPage, totalPages) {
        //
        var resultSummary =
           '<div class="h4">' +
           'Les documents anonymisés ci-dessous résument certaines décisions de responsables de l’éthique. Ils sont fournis pour favoriser la cohérence dans l’interprétation et l’application des règles relatives aux conflits d’intérêts et à l’activité politique.' +
           '</div>';

        if(total > 0) {
            var end = currentQuery.start +
                      currentQuery.perPage - 1;
            end = end > total ? total : end;
            resultSummary = resultSummary +
                'Page <strong>' + currentPage + '</strong>' +
                ' Résultats [<strong>' + currentQuery.start +
                '</strong> - <strong>' + end +
                '</strong>] sur <strong>' +
                total + '</strong> résultat total';
        } else {
            // no result found
            resultSummary = resultSummary +
                '<strong>Aucun résultat contenant tous vos ' +
                'termes de recherche n`a été trouvé</strong>';
        }

        return resultSummary;
    }
    
    window.defaultSearchSummaryFR = defaultSearchSummaryFR;
    window.preSearchSummaryEN = preSearchSummaryEN;
    window.preSearchSummaryFR = preSearchSummaryFR;
}());
