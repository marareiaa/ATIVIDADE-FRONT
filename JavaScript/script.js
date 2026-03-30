const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");

const estados = {
    normal: "raposio.png",
    clicado: "raposio comeno.png",
    alimentado: "raposio full.png",
    fome30: "raposio brabo.png",
    fome60: "raposio morto.png"
}

let contador = 0;
let intervalo = null;
let time_Click = null;
let time_Out = null;

function init_cont (){
    if(intervalo) clearInterval (intervalo)
        intervalo = setInterval(()=>{
            contador++;
            console.log("Tempo: ", contador);
            
            if(contador == 30){
                bicho.src = estados.fome30
            }

            if(contador == 60){
                bicho.src = estados.fome60
            }
        }, 1000);
}

function alimentar (){
    bicho.src = estados.alimentado;
    contador = 0;
    console.log("alimentado");

    if(time_Click) clearInterval (time_Click)

            time_Click = setTimeout(()=>{
                bicho.src = estados.alimentado;
                
                time_Click = setTimeout(()=>{
                bicho.src = estados.normal;
            }, 2000);
            }, 1000);

            

}

init_cont();