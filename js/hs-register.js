$(document).on('ready', function () {
    $('form#register-consumer').on('submit', function (e) {
        validateForm($(this));
        e.preventDefault();
    });
})

function validateForm(form){

    if(validateEmail($('input#inputEmail').val())
        && $('input#inputName').val() !== ''
        && $('input#inputTerms').is(':checked')) {
        var sendNews = $('input#inputTerms').is(':checked') ? 1 : 0;
        var url = 'http://cms.hotsale.com.mx/leads/'+$('input#inputName').val()+'/'+$('input#inputEmail').val()+'/' + sendNews;
        $.ajax({
            url: url,
            context: document.body
        }).done(function() {
            $('#success-message').show();
        });

        $('#success-message').show();
        $('input#inputEmail').val('');
        $('input#inputName').val('');

    }else {
        $('#error-message').show();
        $('#error-message').fadeOut(3000);
    }
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}