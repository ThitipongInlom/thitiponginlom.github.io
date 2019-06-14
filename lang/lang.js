$(document).ready(function () {
    // use function
    switch_lang(null);
});

// Switch Translate
var switch_translate = function switch_translate(words) {
    $("[keylang]").each(function (num) {
        var key = $(this).attr("keylang");
        var Data = words[key];
        $(this).text(Data);
    });
}

// Switch Lang
var switch_lang = function switch_lang(lang) {

    // IF lang == null  Show en
    if(lang == null) 
        var langCode = 'en';
    else
        var langCode = lang;
    
    // Get Json Flie
    $.getJSON('lang/' + langCode + '.json', switch_translate); 
    
    // Hide navbar for switch lang
    $("#navbarSupportedContent").collapse('hide');
}