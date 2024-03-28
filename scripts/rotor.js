
function rotor() {
    const screw = 25;
    const rod = 5;
    const partinput = document.getElementById('input');
    const screwoutput = document.getElementById('screwoutput');
    const rodoutput = document.getElementById('rodoutput');
    const rodoutput2 = document.getElementById('rodoutput2');
    const screwtorodoutput = document.getElementById('screwtorodoutput');
    const ironingotoutput = document.getElementById('ironingotoutput');
    
    let partval = parseInt(partinput.value);
    screwoutput.innerHTML = screw * partval;
    rodoutput.innerHTML = rod * partval;
    

    let screwout = parseInt(screwoutput.innerHTML);
    screwtorodoutput.innerHTML = screwout / 6.25;
    rodoutput2.innerHTML = rod * partval;
    
    let screwtorod = parseInt(screwtorodoutput.innerHTML);
    let rod2 = parseInt(rodoutput2.innerHTML);
    ironingotoutput.innerHTML = screwtorod + rod2;
}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click',rotor);
}