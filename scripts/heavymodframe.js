
function heavymodframe() {
    const modularframe = 5;
    const steelpipe = 15;
    const encasedindustrialbeam = 5;
    const screw = 100;
    const partinput = document.getElementById('input');
    const modularframeoutput = document.getElementById('modularframeoutput');
    const steelpipeoutput = document.getElementById('steelpipeoutput');
    const encasedindustrialbeamoutput = document.getElementById('encasedindustrialbeamoutput');
    const screwoutput = document.getElementById('screwoutput');
    const steelingotoutput = document.getElementById('steelingotoutput');
    const ironingotoutput = document.getElementById('ironingotoutput');

    let partval = parseInt(partinput.value);
    modularframeoutput.innerHTML = modularframe * partval;
    steelpipeoutput.innerHTML = steelpipe * partval;
    encasedindustrialbeamoutput.innerHTML = encasedindustrialbeam * partval;
    screwoutput.innerHTML = screw * partval;

    let screwout = parseInt(screwoutput.innerHTML);
    let steelpipeout = parseInt(steelpipeoutput.innerHTML);
    ironingotoutput.innerHTML = screwout / 4;
    steelingotoutput.innerHTML = steelpipeout / (2/3);

}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click',heavymodframe);
}