$(document).ready(function () {
    $("#registration-form").submit(function (e) {
        e.preventDefault();
        var valid = true;

        // Очищення старих повідомлень про помилки
        $(".invalid-feedback").hide();
        $(".form-control").removeClass("is-invalid");

        var username = $("#username").val().trim();
        var password = $("#password").val();
        var confirmPassword = $("#confirm-password").val();
        var email = $("#email").val().trim();

        // Валідація обов'язкових полів
        if (username === "") {
            $("#username").addClass("is-invalid");
            valid = false;
        }

        if (password.length < 8) {
            $("#password").addClass("is-invalid");
            valid = false;
        }

        if (confirmPassword !== password) {
            $("#confirm-password").addClass("is-invalid");
            valid = false;
        }

        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
            $("#email").addClass("is-invalid");
            valid = false;
        }

        if (valid) {
            // Якщо валідація пройшла успішно
            $("#success-message").show();
            $("#error-message").hide();
        } else {
            // Якщо валідація не пройшла
            $("#success-message").hide();
            $("#error-message").show();
        }
    });
});
