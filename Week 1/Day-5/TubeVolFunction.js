// tube with return

function TubeVol(r, h) {
    let BaseA = Math.PI * r * r;
    let TubeVol = BaseA * h;
    return TubeVol;
}

var Tube1 = TubeVol(5, 10);
console.log(Tube1);


