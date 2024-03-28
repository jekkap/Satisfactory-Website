
function motor() {
    const partinput = document.getElementById('input');
    const rotoroutput = document.getElementById('rotoroutput');
    const statoroutput = document.getElementById('statoroutput');
    
    rotoroutput.innerHTML = 2 * partinput.value;
    statoroutput.innerHTML = 2 * partinput.value;
}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', motor);
}