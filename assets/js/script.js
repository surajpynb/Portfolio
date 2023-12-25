// Email JS
function validate() {
    let name = document.getElementById("full-name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let msg = document.getElementById('required-msg');
    let sendBtn = document.querySelector(".send-btn")

    
    // const name = document.getElementById("full-name");
    // const email = document.getElementById("email");
    // const subject = document.getElementById("subject");
    // const message = document.getElementById('required-msg');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            // emptyerror();
        }
        else {
            sendemail(name.value, email.value, msg.value);
            success();
        }
    })
};
validate();

function sendemail(name, email, msg) {
    emailjs.send("service_znkp1eg", "template_683eaxa", {
        from_name: email,
        to_name: name,
        // subject: subject,
        message: msg,
    });
};

// function emptyerror() {
//     swal({
//         title: "Oops!",
//         text: "Fields cannot be empty!",
//         icon: "error"
//     });
// };

function success() {
    swal({
        title: "Email sent successfully",
        text: "Thanks, will reply within 24 hrs",
        icon: "success"
    });
};