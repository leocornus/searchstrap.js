jQuery(document).ready(function($) {

//// check if localSettings are exist.
// FIXME: THIS NOT WORKING!
//if((typeof localSettings) == "undefined") {
//
//    var localSettings = {
//        // the default search URL.
//        searchUrl: "/advancedsearch"
//    };
//}

    $('.has-clear input[type="text"]').on('input propertychange', function() {
      var $this = $(this);
      // any input will make the visible has value: true
      var visible = Boolean($this.val());
      $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
    }).trigger('propertychange');

    $('.form-control-clear').click(function() {
      $(this).siblings('input[type="text"]').val('')
        .trigger('propertychange').focus();
    });

    // get cookie.
    var theCookie = document.cookie;
    if(theCookie) {
        theCookie = theCookie.replace(/; /g, '","');
        theCookie = theCookie.replace(/=/g, '":"');
        theCookie = '{"' + theCookie + '"}';
        console.log(theCookie);
        var cookie = JSON.parse(theCookie);
    } else {
        var cookie = {};
    }
    if(cookie.hasOwnProperty('template')) {
        $('.dropdown-menu').find('li.active').removeClass("active");
        var selected = cookie['template'];
        console.log('template=' + selected);
        $('.dropdown-menu').find('li:contains(' + selected + ')')
                           .addClass('active');
    }

    // check the template.
    //var template = buildAcronymsList;
    var template = $('.dropdown-menu').find('li.active').text();

    // update the template label.
    $('#template-label').html('Templates - <strong>' + template
                              + '</strong>');

    // load the searchStrap plugin.
    loadSearchStrap('#searchstrap', localSettings.searchUrl,
                    templates[template]);

    // only for the not active items.
    //$(".dropdown-menu > li:not(.active)").
    $(".dropdown-menu > li").
        on('click', function(){

        // do nothing if it is active.
        if($(this).hasClass("active")) return;

        var selected = $(this).text();
        document.cookie="template=" + selected;
        // load the searchStrap plugin.
        window.location.reload();
        //loadSearchStrap('#searchstrap', localSettings.searchUrl,
        //                templates[selected]);
        //$(".dropdown-menu > li.active").removeClass('active');
        //$(this).addClass('active');
    });
});

var templates = {
    'buildAcronymsList': buildAcronymsList,
//    'buildProfilesList': buildProfilesList,
    'buildAcronymsCircles': buildAcronymsCircles
};

/**
 * the utility function to load the searchStrap plugin.
 */
var loadSearchStrap = function(selector, url, template) {

    $(selector).searchStrap({
        searchUrl: url,
        placeholder: "This is search box place holder",
        // magic numbers: 3, 7, 19, 37
        itemsPerPage: 16,
        sort: 'lastModifiedDate desc',
        // we don't need search button here.
        //fq: 'site: revenue AND keywords: "Staffing Announcements"',
        //fq: 'site: wiki AND keywords: Acronyms',
        fq: 'keywords: "User Profile"',
        //searchButton: 'sizing-addon',
        facet: {
            facetField: ['authors']
        },
        resultSelector: '#result-list',
        //resultTemplate: buildAcronymsCircles,
        resultTemplate: template,
        autoReload: false
    });
};

/**
 * the simplest result template.
 */
var simpleColumnBuilder = function(item) {

    var panel = '<div class="col-sm-3">' + 
        '<h2><a href="' + item['url'] + '">' +
        item['title'] + '</a></h2>' +
        '<p>' + item['description'] + '</p>' + 
        '</div>';
    return panel;
};
