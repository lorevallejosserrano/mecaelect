/*==============================================================*/
// Elkevent Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactFormIndex").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Por favor, completa todo el formulario");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var phone_number = $("#phone_number").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "assets/php/form-process-index.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactFormIndex")[0].reset();
        submitMSG(true, "¡Mensaje enviado!")
    }

    function formError(){
        $("#contactFormIndex").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-left tada animated text-success";
        } else {
            var msgClasses = "h4 text-left text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict