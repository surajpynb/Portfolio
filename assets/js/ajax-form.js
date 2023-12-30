(function ($) {
    'use strict';
    var form = $('.contact-form'),
        message1 = $('.messenger-box-contact__msg'),
        form_data;

    const submit = document.getElementById("submit-form");
    
    submit.addEventListener("click", validate);

    function validate(e) {
        const message1 = document.getElementById('required-msg');

        const fullName = document.getElementById("full-name");
        const email = document.getElementById("email");
        const subject1 = document.getElementById("subject");
        let valid = true;

        if (!fullName.value || !email.value || !subject1.value) {
            message1.classList.add('show');
            fullName.classList.add("invalid");
        } else {
            message1.classList.remove('show');
        }
        
        return valid;
    }


    // Success function
    function done_func(response) {
        message1.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message1.text(response);
        setTimeout(function () {
            message1.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message1.fadeIn().removeClass('alert-success').addClass('alert-success');
        message1.text(data.responseText);
        setTimeout(function () {
            message1.fadeOut();
        }, 3000);
    }

    function sendemail(fullname, email, subject1, message1) {
        emailjs.send("service_znkp1eg", "template_683eaxa", {
            from_name: email,
            to_name: fullname,
            subject: subject1,
            message: message1
        });
    };

    function success() {
    swal({
        title: "Email sent successfully",
        text: "Thanks, will reply within 24 hrs",
        icon: "success"
    });
};
    
    form.submit(function (e) {
        e.preventDefault();

        
        const message1 = document.getElementById('message');

        const fullName = document.getElementById("full-name");
        const email = document.getElementById("email");
        const subject1 = document.getElementById("subject");

        if (!fullName.value || !email.value) {
            message1.classList.add('show');
            fullName.classList.add("invalid");
            console.log('false');
            return false
        }
        else {
                sendemail(fullName.value, email.value, subject1.value, message1.value);
                // success();
            }
        message1.classList.remove('show');

        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);
