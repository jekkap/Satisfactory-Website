function stator() {
    const steelpipe = 3;
    const copperwire = 8;
    const steelingot = 2/3;
    const partinput = document.getElementById('input');
    const steelpipeoutput = document.getElementById('steelpipeoutput');
    const copperwireoutput = document.getElementById('copperwireoutput');
    const steelingotoutput = document.getElementById('steelingotoutput');
    const copperingotoutput = document.getElementById('copperingotoutput');
    const coaloreoutput = document.getElementById('coaloreoutput');
    const ironoreoutput = document.getElementById('ironoreoutput');

    let partval = parseInt(partinput.value);
    steelpipeoutput.innerHTML = steelpipe * partval;
    copperwireoutput.innerHTML = copperwire * partval;

    let steelpipeout = parseInt(steelpipeoutput.innerHTML);
    let copperwireout = parseInt(copperwireoutput.innerHTML);
    steelingotoutput.innerHTML = steelpipeout / steelingot;
    copperingotoutput.innerHTML = copperwireout / 2;

    let steelingotout = parseFloat(steelingotoutput.innerHTML);
    coaloreoutput.innerHTML = steelingotout;
    ironoreoutput.innerHTML = steelingotout;
}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', stator);
}