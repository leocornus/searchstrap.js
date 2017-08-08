/**
 * the default builder to build search input box
 * this will depend on Bootstrap
 */
var searchBoxWithDropdown = function(strap) {

    // build the search box.
    var searchBox = 
'<label class="h3" for="search-input">Keyword Search:</label>' +
'<div class="input-group input-group-lg"' +
'     role="group" aria-label="...">' +
'  <div class="form-group form-group-lg has-feedback has-clear">' +
'    <input type="text" class="form-control"' +
'           placeholder="' + strap.settings.placeholder + '"' +
'           id="search-input"' +
'           aria-describedby="sizing-addon"/>' +
'    <span class="form-control-clear text-danger' +
'                 glyphicon glyphicon-remove' +
'                 form-control-feedback hidden"></span>' +
'  </div>' +
'</div>' +
'<label class="h3">Advanced Search:</label>' +
'<div class="form-group">' +
'  <label class="h4" for="relevant-rule">Relevant Rule</label>' +
'  <select id="ethical-area" class="form-control">' +
'    <option>None</option>' +
'    <option>Benefitting Self, Spouse or Children</option>' +
'    <option>Dislosing Confidential Information</option>' +
'    <option>Accepting Gifts</option>' +
'    <option>Giving Preferential Treatment</option>' +
'    <option>Hiring Family Members</option>' +
'    <option>Engaging in Business or Undertaking</option>' +
'    <option>Participating in Decision-making</option>' +
'    <option>Post Service - Seeking Preferential Treatment</option>' +
'    <option>Post Service - Disclosing Confidential Information</option>' +
'    <option>Post Service - Restriction on Lobbying</option>' +
'    <option>Post Service - Restriction on Employment</option>' +
'    <option>Post Service - Switching Sides</option>' +
'    <option>Political Activity - Specially Restricted Public Servants</option>' +
'    <option>Political Activity - Other Public Servants</option>' +
'  </select>' +
'</div>' +
'<div class="form-group">' +
'  <label class="h4" for="ethical-matter">Type of Matter</label>' +
'  <select id="ethical-matter" class="form-control">' +
'    <option>None</option>' +
'    <option>Conflict of Interest</option>' +
'    <option>Political Activity</option>' +
'    <option>Other</option>' +
'  </select>' +
'</div>' + 
'<div class="form-group">' +
'  <label class="h4" for="organization-type">Source of Decision</label>' +
'  <select id="organization-type" class="form-control">' +
'    <option>None</option>' +
'    <option>Conflict of Interest Commissioner</option>' +
'    <option>Ministry</option>' +
'    <option>Agency</option>' +
'  </select>' +
'</div>' +
'<div class="form-group">' +
' <button type="button" class="btn btn-primary" id="search-button">Search</button>' +
'</div>';

    // replace the search box.
    strap.$element.html('').append(searchBox);
    // set up the searchInput jQuery object..
    strap.$searchInput = strap.$element.find('input');
    // set up the searchButton jQuery object
    strap.$searchButton =  $('#search-button');
    // set up the search summary jQuery object.
    strap.$searchSummary = $('#search-info');

    // TODO: update the current selection states
    // 1. get filter query from url
    // 2. set the option selections basecd on the filter query.
    // Assume:
    // 1. AND relationship for all 3 select elements.
    // 2. default will be None.

    /**
     * hook the clik event on the remove icon.
     * It will need the following styles to work fine on IE
     *
     * ::-ms-clear {
     *   display: none;
     * }
     *
     * .form-control-clear {
     *   z-index: 10;
     *   pointer-events: auto;
     *   cursor: pointer;
     * }
     */
    strap.$element.find('.glyphicon-remove')
        .on('click', function(event) {

        // clean the search term in the input box.
        strap.$searchInput.val('');
        // hide the remove icon.
        $(this).addClass('hidden');
        // trigger search and reload page.
        strap.handleButtonClick();
    });

    // hook the action for selection change.
    // update search query for any selection change.
    strap.$element.find('select').on('change', function(event) {

        var newKeys = [];
        $("select option:selected").each(function() {
            var selected = $(this).val();
            //console.log($(this).val());
            if(selected != 'None') {
                newKeys.push('keywords:' + selected);
            }
        });
        var filterQuery = '';
        if(newKeys.length > 0) {
           filterQuery = newKeys.join(' AND '); 
        }

        strap.searchQuery = 
            strap.prepareSearchQuery(strap.searchQuery.term, 1, 
                                     filterQuery);
        strap.updateBrowserUrl(strap.searchQuery, true);
    });

};
