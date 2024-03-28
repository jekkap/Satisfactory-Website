function computer(){
    const partinput = document.getElementById('input');
    const circuitboardoutput = document.getElementById('circuitboardoutput');
    const cableoutput = document.getElementById('cableoutput');
    const plasticoutput = document.getElementById('plasticoutput');
    const screwoutput = document.getElementById('screwoutput');
    const copperwireoutput = document.getElementById('copperwireoutput');
    const crudeoiloutput = document.getElementById('crudeoiloutput');
    const ironingotoutput = document.getElementById('ironingotoutput');
    const copperinputoutput = document.getElementById('copperingotoutput');

    let partval = parseInt(partinput.value);
    circuitboardoutput.innerHTML = partval * 10;
    cableoutput.innerHTML = partval * 9;
    plasticoutput.innerHTML = partval * 18;
    screwoutput.innerHTML = partval * 52;

    let cableout = cableoutput.innerHTML;
    let plasticout = plasticoutput.innerHTML;
    let screwout = screwoutput.innerHTML;
    copperwireoutput.innerHTML = cableout * 2;
    crudeoiloutput.innerHTML = plasticout * 3/2;
    ironingotoutput.innerHTML = screwout * 1/4;

    let copperwireout = copperwireoutput.innerHTML;
    copperinputoutput.innerHTML = copperwireout * 1/2;

}

function main(){
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', computer);
}