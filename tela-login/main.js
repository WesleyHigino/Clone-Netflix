$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 13,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


function entrar() {

    var email = document.getElementById('dadoEmail');
    var password = document.getElementById('dadoPassword');

    if (email.value == "wesley@netflix.com" && password.value == "123456") {


        window.location.href = "http://127.0.0.1:5500/"

    }

}