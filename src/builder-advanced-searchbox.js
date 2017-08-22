;(function() {

    /**
     * search box builder function to build some dropdown selections 
     * around the search box.
     */
    var searchBoxWithDropdownEN = function(strap) {
    
        // build the search box in English
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
    
        searchBoxWithDropdown(strap, searchBox);
    }
    
    /**
     * build the search box in French
     */
    var searchBoxWithDropdownFR = function(strap) {
    
        // build the search box in French 
        var searchBox = 
    '<label class="h3" for="search-input">Recherche par<br/>mot-clé:</label>' +
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
    '<label class="h3">Recherche avancée:</label>' +
    '<div class="form-group">' +
    '  <label class="h4" for="relevant-rule">Régle Pertinente</label>' +
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
    '  <label class="h4" for="ethical-matter">Type d`affaire</label>' +
    '  <select id="ethical-matter" class="form-control">' +
    '    <option value="None">None</option>' +
    '    <option value="Conflict of Interest">Conflict of Interest</option>' +
    '    <option value="Political Activity">Political Activity</option>' +
    '    <option value="Other">Other</option>' +
    '  </select>' +
    '</div>' + 
    '<div class="form-group">' +
    '  <label class="h4" for="organization-type">Source de la décision</label>' +
    '  <select id="organization-type" class="form-control">' +
    '    <option value="None">None</option>' +
    '    <option value="Conflict of Interest Commissioner">Conflict of Interest Commissioner</option>' +
    '    <option value="Ministry">Ministry</option>' +
    '    <option value="Agency">Agency</option>' +
    '  </select>' +
    '</div>' +
    '<div class="form-group">' +
    ' <button type="button" class="btn btn-primary" id="search-button">Recherche</button>' +
    '</div>';
    
        searchBoxWithDropdown(strap, searchBox);
    }
    
    /**
     * common function to build the search box.
     */
    var searchBoxWithDropdown = function(strap, searchBox) {
    
        // replace the search box.
        strap.$element.html('').append(searchBox);
        // set up the searchInput jQuery object..
        strap.$searchInput = strap.$element.find('input');
        // set up the searchButton jQuery object
        strap.$searchButton =  jQuery('#search-button');
        // set up the search summary jQuery object.
        strap.$searchSummary = jQuery('#search-info');
    
        // update the current selection states
        // Assume:
        // 1. AND relationship for all 3 select elements.
        // 2. default will be None.
        // here are the steps to refresh the select options:
        // 1. get filter query from url
        var queryParams = strap.getUrlVars();
        var fq = strap.settings.fqName in queryParams ?
                          queryParams[strap.settings.fqName] : '';
        fq = decodeURIComponent(fq);
        //console.log(fq);
        // 2. set the option selections basecd on the filter query.
        if(fq.length > 0) {
            var theKeys = fq.split(' AND ');
            theKeys.forEach(function(key) {
                // remove the keywords: prefix and 
                // remove the backward slash (\) from the category.
                // the value for option tag could not handle slash!
                var category = key.replace('keywords:', '').replace(/\\ /g, ' ');
                //console.log(category);
                var theOption = strap.$element.find('select option[value="' + 
                                                    category + '"]');
                // set the value for parent select tag
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
            jQuery(this).addClass('hidden');
            // trigger search and reload page.
            strap.handleButtonClick();
        });
    
        // hook the action for selection change.
        // update search query for any selection change.
        strap.$element.find('select').on('change', function(event) {
    
            var newKeys = [];
            jQuery("select option:selected").each(function() {
                var selected = jQuery(this).val();
                // add the backward slash (\) to escape whitespace.
                // Solr query syntax required this to perform proper search.
                selected = selected.replace(/ /g, '\\ ');
                //console.log(jQuery(this).val());
                if(selected != 'None') {
                    newKeys.push('keywords:' + selected);
                }
            });
            var filterQuery = '';
            if(newKeys.length > 0) {
               filterQuery = newKeys.join(' AND '); 
            }
    
            // update teh search query based on the filter query.
            strap.searchQuery = 
                strap.prepareSearchQuery(strap.searchQuery.term, 1, 
                                         filterQuery);
            // if we need update search result for each selection change,
            // using the updateBrowserUrl function with reload set to true
            //strap.updateBrowserUrl(strap.searchQuery, true);
            // otherwise, user has to click search button to reload.
        });
    };
    
    window.searchBoxWithDropdownEN = searchBoxWithDropdownEN;
    window.searchBoxWithDropdownFR = searchBoxWithDropdownFR;
}());
