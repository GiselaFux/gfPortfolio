window.onload=function(){
    const slider= document.querySelector('#slider')
        const canvas= document.querySelector('#canvas')
        
  slider.addEventListener('input', handleInputSlider)
const imagenes =[]
const contexto= canvas.getContext('2d')

        for (let i= 1; i <=36; i++){
            const numero = i
            const url= `images/photo${numero}.jpg`
             const image= new Image()
             image.src = url

image.addEventListener('load',() =>{
    imagenes[i]=image
    if(i === 1){
        cargarImg(i)
    }
})
        }

        function cargarImg(index){ 
contexto.drawImage(imagenes[index],0,0, canvas.width, canvas.height  )
        }
        function handleInputSlider(){
            console.log(slider.value)
            cargarImg(slider.value)
        }
       

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
   