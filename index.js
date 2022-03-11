const grabar = document.getElementById("grabar");
const parar = document.getElementById("parar");
const leer = document.getElementById("leer");
const texto = document.getElementById("texto");

let Reconocimiento = window.webkitSpeechRecognition || window.SpeechRecognition
let recognition = new Reconocimiento() 
recognition.lang = "es-ES"
recognition.continuous = true;
recognition.interimResults = false;

recognition.onstart=function(){
    console.log("el microfono funciona")
}

recognition.onresult = (event) =>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;

}

grabar.addEventListener("click",()=>{
    recognition.start()
})

parar.addEventListener("click",()=>{
    recognition.abort()
})

leer.addEventListener("click",()=>{
    leerTexto(texto.value);
});

function leerTexto(texto){
    const speech = new SpeechSynthesisUtterance();
    speech.text = texto;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}