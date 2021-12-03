String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); }


const palabras = ['finn', 'jake', 'grumosa', 'marceline'];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let guiones = palabra.replace(/./g, "_ ");
let fallos = 0;

document.querySelector('#output').innerHTML = guiones;
document.querySelector('#calificar').addEventListener('click', () =>{
    const letra = document.querySelector('#letra').value;
    let error = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            guiones = guiones.replaceAt(i*2, letra);
            error = false;
        }
    }

    if(error){
        fallos++;
        document.querySelector('#imagen').style.backgroundPosition = -(383*fallos) + 'px 0';
        if(fallos == 6){
        location.href = "Gameover.html";
        //document.querySelector('.botonjugar').click();
        //alert('Perdiste')
        }
    }
    else{
            if(guiones.indexOf('_') <0){
                location.href = "felicidades.html";
                //alert('ganaste');
                //document.querySelector('#ganador').style.display = 'flex';
            }
        
    }

    document.querySelector('#output').innerHTML = guiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});