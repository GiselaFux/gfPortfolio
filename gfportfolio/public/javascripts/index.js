$(document).ready(main);

var contador = 1;
function main() {
    $('.menu_bar').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            })
        }
    });
  }
window.onload=function(){
        //escritura letra a letra
        const typed = new Typed(".typed", {
            strings: [
              "Hola! Mi nombre es Gisela Fux.",
              ],
            typeSpeed: 80,
            //backDelay : 90,
            //backSpeed: 90,
            loop: false,
          });
          const typed2 = new Typed(".typed2", {
            strings: [
              "Soy una apasionada",
              "Desarrolladora Full Stack"
              ],
            typeSpeed: 100,
            backDelay : 350,
            backSpeed: 180,
            loop: true,
          });
    }

   