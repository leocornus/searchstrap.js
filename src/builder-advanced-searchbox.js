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
'  <label class="h4" for="organization-type">Organization Type</label>' +
'  <select id="organization-type" class="form-control">' +
'    <option></option>' +
'    <option>Conflict of Interest Commissioner</option>' +
'    <option>Ministry</option>' +
'    <option>Agency</option>' +
'  </select>' +
'</div>' +
'<div class="form-group">' +
'  <label class="h4" for="ethical-matter">Type of Ethical Matter</label>' +
'  <select id="ethical-matter" class="form-control">' +
'    <option></option>' +
'    <option>Conflict of Interest</option>' +
'    <option>Political Activity</option>' +
'    <option>Other</option>' +
'  </select>' +
'</div>' + 
'<div class="form-group">' +
'  <label class="h4" for="ethical-area">Ethical Area</label>' +
'  <select id="ethical-area" class="form-control">' +
'    <option></option>' +
'    <option>Benefitting Self, Spouse or Children</option>' +
'    <option>Dislosing Confidential Information</option>' +
'    <option>Accepting Gifts</option>' +
'  </select>' +
'</div>';

    // replace the search box.
    strap.$element.html('').append(searchBox);
    // set up the searchInput jQuery object..
    strap.$searchInput = strap.$element.find('input');
    // set up the searchButton jQuery object
    strap.$searchButton = 
        strap.$element.find('#search-button');
    // set up the search summary jQuery object.
    strap.$searchSummary = $('#search-info');

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
};
