function crystaloscillator(){
    const partinput = document.getElementById('input')
    const quartzcrystaloutput = document.getElementById('quartzcrystaloutput');
    const cableoutput = document.getElementById('cableoutput');
    const reinforcedironplateoutput = document.getElementById('reinforcedironplateoutput');
    const rawquartzoutput = document.getElementById('rawquartzoutput');
    const copperwireoutput = document.getElementById('copperwireoutput');
    const ironingotoutput = document.getElementById('ironingotoutput');
    const copperingotoutput = document.getElementById('copperingotoutput');

    let partval = parseInt(partinput.value);
    quartzcrystaloutput.innerHTML = partval * 18;
    cableoutput.innerHTML = partval * 14;
    reinforcedironplateoutput.innerHTML = partval * 2.5;

    let quartzcrystalout = parseInt(quartzcrystaloutput.innerHTML);
    let cableout = parseInt(cableoutput.innerHTML);
    let reinforcedironplateout = parseInt(reinforcedironplateoutput.innerHTML);
    rawquartzoutput.innerHTML = quartzcrystalout / (3/5);
    copperwireoutput.innerHTML = cableout / (1/2);
    ironingotoutput.innerHTML = reinforcedironplateout * 12;

    let copperwireout = parseInt(copperwireoutput.innerHTML);
    copperingotoutput.innerHTML = copperwireout / 2;
}

function main(){
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', crystaloscillator);
}