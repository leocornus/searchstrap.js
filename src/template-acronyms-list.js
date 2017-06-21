/**
 * build the Acronyms list, which will have 6 columns
 */
var buildAcronymsList = function(strap, $result, docs, currentQuery,
                     total, currentPage, totalPages, pagination) {

    return buildXColsARow(strap, $result, docs, currentQuery, total,
                          currentPage, totalPages, pagination, 4,
                          acronymPanelStripper);
};

/**
 * builder function to strip out all wiki syntax.
 */
var acronymPanelStripper = function(acronym) {

    // try to remove some wiki markups.
    var desc = acronym['description'];
    // replace wiki syntax.
    var text = desc
       .replace(/.*may refer to:/g, '')
       .replace(/\[http.*/g, '')
       .replace(/\[\[Category:.*/g, '')
       .replace(/[\]\[\']/g, '')
       .replace(/\*/, '<li class="list-group-item">')
       .replace(/\*/g, '</li><li class="list-group-item">');

    var panel = '<div class="col-sm-3">' + 
        '<h2 class="text-center">' +
        '<a href="' + acronym['url'] + '">' +
        acronym['title'] + '</a></h2>' +
        '<p><ul class="list-group">' + text + '</li></ul></p>' + 
        '</div>';
    return panel;
};
