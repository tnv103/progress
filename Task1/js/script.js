$(document).ready(function(){
    $('#select-orientation').on('change', function(){
       $('.navigation').removeClass('horizontal-view vertical-view').addClass($(this).val());
    });

    $('.navigation').on('click', '.menu-item a', function(){
        var linkText = $(this).text();
        $('.clicked-link').text(linkText);
    });
});