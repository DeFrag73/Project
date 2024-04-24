$(document).ready(function () {
    $("#login-form").submit(function (e) {
        e.preventDefault();

        var valid = true;

        // Очищення старих повідомлень про помилки
        $(".invalid-feedback").hide();
        $(".form-control").removeClass("is-invalid");

        var loginUsername = $("#login-username").val().trim();
        var loginPassword = $("#login-password").val();

        // Валідація обов'язкових полів
        if (loginUsername === "") {
            $("#login-username").addClass("is-invalid");
            valid = false;
        }

        if (loginPassword === "") {
            $("#login-password").addClass("is-invalid");
            valid = false;
        }

        if (valid) {
            // Якщо валідація пройшла успішно
            alert("Ви увійшли до системи!");
        } else {
            // Якщо валідація не пройшла
            $("#login-error").show();
        }
    });
});