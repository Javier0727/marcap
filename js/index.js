    onload = function () {
        document.getElementById('bchat').scrollTop = document.getElementById('bchat').scrollHeight;
    }
    contador = 1;
    function desplazar() {
        selector = document.getElementById("despla");
        if (contador == 1) {
            selector.style.left = "0%";
            contador ++;
        }else{
            selector.style.left = "-100%";
            contador = 1;
        }
    }