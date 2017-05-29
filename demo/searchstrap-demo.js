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

    $('#searchstrap').searchStrap({
        searchUrl: localSettings.searchUrl,
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
        resultTemplate: buildAcronymsList,
        autoReload: false
    });
});

var simpleColumnBuilder = function(item) {

    var panel = '<div class="col-sm-3">' + 
        '<h2><a href="' + item['url'] + '">' +
        item['title'] + '</a></h2>' +
        '<p>' + item['description'] + '</p>' + 
        '</div>';
    return panel;
};
