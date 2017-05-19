/**
 * some templates with 2 columns:
 *  - item list column
 *  - filter column
 */

/**
 * build the 2 column search result list, which will have
 *   - col-8 column for current search result, using panel.
 *   - col-4 column for search filters, unsing panel.
 *
 * The current search panel will include:
 *   - current search with field query list, panel-heading
 *   - sorting dropdown, panel-body
 *   - summary of search result: total pages, current pages, 
 *     total items
 *   - list of items in list-group > list-group-item > media
 *   - pagination, panel-footer
 *
 * The search filter panel will include:
 *   - search filters
 *   - facets label and facets values in tag cloud.
 */
function build2ColumnResult($result, docs, currentQuery, total, 
                  currentPage, totalPages, pagination) {

    // build the current search panel, which will include
    //  - infomaiont bar
    //  - list of items.
    //  - pagination
    var $currentSearch = 
        buildCurrentSearchPanel(docs, currentQuery, 
                total, currentPage, totalPages, pagination);
    // build the search filter panel.
    var $searchFilter = buildSearchFilterPanel();

    // the left column.
    var $leftCol = $('<div class="col-md-8"></div>');
    $leftCol.append($currentSearch);
    // the right column
    var $rightCol = $('<div class="col-md-4"></div>');
    $rightCol.append($searchFilter);

    $result.html('').append($leftCol).append($rightCol);

    return $result;
}

/**
 * build the current search panel.
 */
function buildCurrentSearchPanel(docs, currentQuery,
    total, currentPage, totalPages, pagination) {

    // panel heading...
    var heading = 
        '<div class="panel-heading">' +
        '  <strong>Current Search:</strong><br/>' +
        currentQuery.term + '<br/>' +
        '<span>' +
        '  <strong>Order by:</strong>' +
        '  <select class="success" id="order">' +
        '    <option value="relevance">Relevance</option>' +
        '    <option value="changetime">Last Modified Date</option>' +
        '  </select>' +
        '</span>' +
        '</div>';

    // panel body
    var end = currentQuery.start + currentQuery.perPage - 1;
    end = end > total ? total : end;
    var body = 
        '<div class="panel-body bg-info-custom">' +
        'Page <strong>' + currentPage + '</strong>' +
        ' Showing [<strong>' + currentQuery.start + 
        '</strong> - <strong>' + end + 
        '</strong>] of <strong>' +
        total + '</strong> total results' +
        '</div>';

    // using list group for search result.
    var $ul = $('<ul class="list-group"></ul>');
    $.each(docs, function(index, item) {
        // present each item as a list group item.
        var liHtml = buildMediaItemHtml(item);
        $ul.append(liHtml);
    });

    // panel footer, pagination nav bar.
    var footer = 
        '<div class="panel-footer panel-footer-custom">' +
        pagination +
        '</div>';

    var $panel = $('<div class="panel panel-info' +
                   '            panel-custom"></div>');

    // append everything together.
    $panel.append(heading).append(body)
          .append($ul).append(footer);

    return $panel;
}

/**
 * build the HTML for each item using media object.
 *
 * @param item object of each item
 */
function buildMediaItemHtml(item) {

    var itemHtml = 
      '<li class="list-group-item">' +
      '<div class="media">' +
      '  <div class="media-left">' + 
      '    <span class="text-warning fa-stack fa-lg">' +
      '      <i class="fa fa-circle fa-stack-2x"></i>' +
      '      <i class="fa fa-file-text-o fa-stack-1x fa-inverse"></i>' +
      '    </span>' +
      '  </div>' + 
      '  <div class="media-body">' +
      '    <h4 class="media-heading">' +
             '<a href="' + item.url + 
                 '" style="padding: 0;">' + item.title + 
             '</a>' +
      '    </h4>' +
      '    <small class="text-muted">' + 
             item.site + '</small>' +
      '    <p class="media-description">' + 
             item.description + 
      '    </p>' + 
      '  </div>' +
      '</div>' + 
      '</li>';

    return itemHtml;
}

/**
 * build the search filter panel.
 */
function buildSearchFilterPanel() {

    // panel heading...
    var heading = 
        '<div class="panel-heading">' +
        '  <strong>Search Filters</strong>' +
        '</div>';

    var body = 
        '<div class="panel-body">' +
        '  LIST OF FILTERS.' +
        '  <p></p>' +
        '  In Tag Cloud' +
        '</div>';
    // filter for sites
    // filter for keywords
    // filter for authors.

    var $panel = $('<div class="panel panel-success' +
                   '            panel-custom"></div>');

    // append everything together.
    $panel.append(heading).append(body);

    return $panel;
}
