function jalankanPerintah() {

let teksDariUser = document.getElementById("kotakKetikan").value;

if (teksDariUser === "") {
    alert("Jangan dikosongkan!");
    return;
}

let barisBaru = document.createElement("li");

barisBaru.innerHTML = teksDariUser + '❌';

document.getElementById("tempatTugas").appendChild(barisBaru);

let semuaTugas = document.getElementById("tempatTugas").innerHTML;
localStorage.setItem("dataTugasku", semuaTugas);

document.getElementById("kotakKetikan").value = "";

}

function hapusTugas(tombolYangDiKlik) {

    tombolYangDiKlik.parentElement.remove();
    
    let semuaTugas = document.getElementById("tempatTugas").innerHTML;
    
    localStorage.setItem("dataTugasKu", semuaTugas);
}

function resetSemua() {
    
    localStorage.removeItem("dataTugasKu");

    document.getElementById("tempatTugas").innerHTML = "";
}

