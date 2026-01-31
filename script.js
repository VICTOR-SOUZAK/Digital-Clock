const hora = document.getElementById('hours');
const minutos = document.getElementById('minutes');
const segundos = document.getElementById('seconds');

(setInterval(function () {

    const agora = new Date();

    let hr = agora.getHours();
    let min = agora.getMinutes();
    let sg = agora.getSeconds();

    agora.hrTexto = hr < 10 ? "0" + hr : hr;
    agora.minTexto = min < 10 ? "0" + min : min;
    agora.sgTexto = sg < 10 ? "0" + sg : sg;

    hora.textContent = agora.hrTexto 
    minutos.textContent = agora.minTexto 
    segundos.textContent = agora.sgTexto


    console.log(`${hr}: ${min}: ${sg}`);
}
))
