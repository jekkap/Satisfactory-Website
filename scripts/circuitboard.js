
function circuitboard() {
    const partinput = document.getElementById('input');
    const coppersheetoutput = document.getElementById('coppersheetoutput');
    const plasticoutput = document.getElementById('plasticoutput');
    const copperingotoutput = document.getElementById('copperingotoutput');
    const crudeoiloutput = document.getElementById('crudeoiloutput');

    let partval = parseInt(partinput.value);
    coppersheetoutput.innerHTML = partval * 2;
    plasticoutput.innerHTML = partval * 4;

    let coppersheetout = coppersheetoutput.innerHTML;
    let plasticout = plasticoutput.innerHTML;
    copperingotoutput.innerHTML = coppersheetout * 2;
    crudeoiloutput.innerHTML = plasticout * 3/2;
}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click',circuitboard);
}