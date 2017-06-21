/**
 * template to build x columns in a row.
 */
var buildXColsARow = function(strap, $result, docs, currentQuery,
                     total, currentPage, totalPages, pagination,
                     cols, panelBuilder) {

    var resultSummary = '';
    if(total > 0) {
        var end = currentQuery.start +
                  currentQuery.perPage - 1;
        end = end > total ? total : end;
        resultSummary =
            'Page <strong>' + currentPage + '</strong>' +
            ' Showing [<strong>' + currentQuery.start +
            '</strong> - <strong>' + end +
            '</strong>] of <strong>' +
            total + '</strong> total results';
    } else {
        // no result found
        resultSummary =
            '<strong>No results containing ' +
            'all your search terms were found.</strong>';
    }
    $('#search-info').html(resultSummary);

    // build a 6 columns to show 
    $result.html("");

    //result.append('<div>' + pagination + '</div>');
    var colQueue =[];
    for(i = 0; i < docs.length; i++) {
        var oneDoc = docs[i];
        //var panel = acronymPanelStripper(acronym);
        //var panel = userProfilePanel(acronym);
        var panel = panelBuilder(oneDoc);
        colQueue.push(panel);
        // i count from 0
        // 6 acronyms for a row
        var ready2Row = (i + 1) % cols;
        if(ready2Row == 0) {
            $result.append('<div class="row">' +
                colQueue.join("") + '</div>');
            // reset the queue.
            colQueue = [];
        }
    }

    // check if we missed anything...
    if(colQueue.length > 0) {

        // append to the last row.
        $result.append('<div class="row">' +
            colQueue.join(" ") +
            '</div>');
    }

    // add the pagination at the bottom too.
    $result.append('<div>' + pagination + '</div>');

    return $result;
};
