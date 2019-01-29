    onload = function () {
        document.getElementById('bchat').scrollTop = document.getElementById('bchat').scrollHeight;
    }
    function desplazar() {
        var contador = 1;
        selector = document.getElementById("despla");
        if (contador == 1) {
            selector.style.left = "0%";
            contador ++;
        }else{
            selector.style.left = "-100%";
            contador = 1;
        }
    }