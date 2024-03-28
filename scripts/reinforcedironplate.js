
function reinforcedironplate() {
    const ironplate = 6;
    const screw = 12;
    const ironplateratio = 3/2;
    const ironplateplaceholder = 0;
    const partinput = document.getElementById('input');
    const ironplateoutput = document.getElementById('ironplateoutput');
    const screwoutput = document.getElementById('screwoutput');
    const rodoutput = document.getElementById('rodoutput');
    const ironingotoutput = document.getElementById('ironingotoutput');
    
    let partval = parseInt(partinput.value);
    ironplateoutput.innerHTML = ironplate * partval;
    screwoutput.innerHTML = screw * partval;

    let screwout = parseInt(screwoutput.innerHTML);
    rodoutput.innerHTML = screwout / 4;

    let ironplateout = parseInt(ironplateoutput.innerHTML)
    let ironingotplate = parseInt(ironplateplaceholder)
    let rodout = parseInt(rodoutput.innerHTML)

    ironingotplate = ironplateout * ironplateratio
    ironingotoutput.innerHTML = ironingotplate + rodout

}

function main() {
    const partbutton = document.getElementById('inputbutton');
    partbutton.addEventListener('click', reinforcedironplate);
}