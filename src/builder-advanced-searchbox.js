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
'    <option value="None">None</option>' +
'    <option value="Benefitting Self, Spouse or Children">Benefitting Self, Spouse or Children</option>' +
'    <option value="Disclosing Confidential Information">Disclosing Confidential Information</option>' +
'    <option value="Accepting Gifts">Accepting Gifts</option>' +
'    <option value="Giving Preferential Treatment">Giving Preferential Treatment</option>' +
'    <option value="Hiring Family Members">Hiring Family Members</option>' +
'    <option value="Engaging in Business or Undertaking">Engaging in Business or Undertaking</option>' +
'    <option value="Participaing in Decision-Making">Participating in Decision-Making</option>' +
'    <option value="Post-Service - Seeking Preferential Treatment">Post Service - Seeking Preferential Treatment</option>' +
'    <option value="Post-Service - Disclosing Confidential Information">Post Service - Disclosing Confidential Information</option>' +
'    <option value="Post-Service - Restriction on Lobbying">Post Service - Restriction on Lobbying</option>' +
'    <option value="Post-Service - Restriction on Employment">Post Service - Restriction on Employment</option>' +
'    <option value="Post-Service - Switching Sides">Post Service - Switching Sides</option>' +
'    <option value="Political Activity - Specially Restricted Public Servants">Political Activity - Specially Restricted Public Servants</option>' +
'    <option value="Political Activity - All Other Public Servants">Political Activity - All Other Public Servants</option>' +
'  </select>' +
'</div>' +
'<div class="form-group">' +
'  <label class="h4" for="ethical-matter">Type of Matter</label>' +
'  <select id="ethical-matter" class="form-control">' +
'    <option value="None">None</option>' +
'    <option value="Conflict of Interest">Conflict of Interest</option>' +
'    <option value="Political Activity">Political Activity</option>' +
'    <option value="Other">Other</option>' +
'  </select>' +
'</div>' + 
'<div class="form-group">' +
'  <label class="h4" for="organization-type">Source of Decision</label>' +
'  <select id="organization-type" class="form-control">' +
'    <option value="None">None</option>' +
'    <option value="Conflict of Interest Commissioner">Conflict of Interest Commissioner</option>' +
'    <option value="Ministry">Ministry</option>' +
'    <option value="Agency">Agency</option>' +
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
    // Assume:
    // 1. AND relationship for all 3 select elements.
    // 2. default will be None.
    // 1. get filter query from url
    var queryParams = strap.getUrlVars();
    var fq = strap.settings.fqName in queryParams ?
                      queryParams[strap.settings.fqName] : '';
    fq = decodeURIComponent(fq);
    console.log(fq);
    // 2. set the option selections basecd on the filter query.
    if(fq.length > 0) {
        var theKeys = fq.split(' AND ');
        theKeys.forEach(function(key) {
            var category = key.replace('keywords:', '').replace(/\\ /g, ' ');
            console.log(category);
            var theOption = strap.$element.find('select option[value="' + 
                                                category + '"]');
            jQuery('#' + theOption.parent().attr('id')).val(category);
        });
    }

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
            selected = selected.replace(/ /g, '\\ ');
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
