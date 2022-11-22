function calc() {
    var p = document.getElementById("p").value;
    p = Number(p);
    var r = document.getElementById("r").value;
    r = Number(r);
    var t = document.getElementById("t").value;
    t = Number(t);
    var m = document.getElementById("m").value;
    m = Number(m);
    var n = 12

    var rate = p * (1 + r / n) ** (n * t) - (m * [(1 + r / n) ** (n * t) - 1]) / (r / n)
    rate = rate.toFixed(2);

    var out = document.getElementById("output")
    out.innerHTML = rate + "     ";
}

function reset() {
    document.getElementById("output").innerHTML= "";
}