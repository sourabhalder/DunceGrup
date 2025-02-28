function check() {
    var input = document.getElementById('fname');
    if (input.value !== "") {
        ecertificate();

    }
    else {
        alert("Input field is empty.");
    }
}
function ecertificate() {
    var x = document.getElementById("main");
    x.style.display = "block";
    var name = document.getElementById('fname').value;
    var details = document.getElementById('fdetails').value;
    var oname = document.getElementById('forganisername').value;
    document.getElementsByTagName('h3')[0].innerHTML = name;
    document.getElementsByTagName('h4')[0].innerHTML = details;
    document.getElementsByTagName('h5')[0].innerHTML = oname;

}
function dcheck() {
    var input = document.getElementById('fname');
    if (input.value !== "") {
        download();

    }
    else {
        alert("Input field is empty.");
    }
}
    function download() {

        var body = document.getElementById('body').innerHTML;
        var main = document.getElementById('main').innerHTML;
        document.getElementById('body').innerHTML = main;
        window.print();
        document.getElementById('body').innerHTML = body;

    }
