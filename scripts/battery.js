
function battery(){
    const partinput = document.getElementById('input');
    const sulfuricacidoutput = document.getElementById('sulfuricacidoutput');
    const aluminumcasingoutput = document.getElementById('aluminumcasingoutput');
    const alumsolutionoutput = document.getElementById('alumsolutionoutput');
    const sulfuroutput = document.getElementById('sulfuroutput');
    const wateroutput = document.getElementById('wateroutput');
    const aluminumingotoutput = document.getElementById('aluminumingotoutput');
    const wateroutput2 = document.getElementById('wateroutput2');
    const bauxiteoutput = document.getElementById('bauxiteoutput');

    let partval = parseInt(partinput.value);
    sulfuricacidoutput.innerHTML = partval * 2.5;
    aluminumcasingoutput.innerHTML = partval;
    alumsolutionoutput.innerHTML = partval * 2;

    let sulfuricacidout = parseFloat(sulfuricacidoutput.innerHTML);
    let aluminumcasingout = parseFloat(aluminumcasingoutput.innerHTML);
    let alumsolutionout = parseFloat(alumsolutionoutput.innerHTML);
    sulfuroutput.innerHTML = sulfuricacidout;
    wateroutput.innerHTML = sulfuricacidout;
    aluminumingotoutput.innerHTML = aluminumcasingout / (2/3);
    wateroutput2.innerHTML = alumsolutionout / (2/3);
    bauxiteoutput.innerHTML = alumsolutionout;

}

function main(){
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', battery);
}