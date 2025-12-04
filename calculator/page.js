val = 0;

function inc(){
    const p = document.getElementById("para");
    p.innerText = ++val;
}

function dec(){
    const p = document.getElementById("para");
    p.innerText = --val;
}

const arr = () => {
    const name = document.getElementById("name");
    const heading = document.createElement("h4");
    heading.innerText = name.value;
    // <h1>Guru</h1>
    const cont = document.getElementById("container");
    cont.append(heading);
}

const col = function () {
    const div = document.getElementById("container");
    div.style.backgroundColor = "black";
}