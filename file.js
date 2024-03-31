var xx = [
    { aa: 25, bb: "João" },
    { aa: 30, bb: "Maria" },
    { aa: 20, bb: "Pedro" },
    { aa: 35, bb: "Ana" },
    { aa: 28, bb: "Carlos" },
    { aa: 22, bb: "Sofia" },
    { aa: 40, bb: "Rui" }
];

document.addEventListener('DOMContentLoaded', function () {
    setData();
    setProperties();
});

function setProperties() {
    document.getElementById("left_arrow").addEventListener('click', function (event) {
        event.preventDefault();
        moveForwardBackward("left_arrow");

    });
    document.getElementById("right_arrow").addEventListener('click', function (event) {
        event.preventDefault();
        moveForwardBackward("right_arrow");
    });
}
function moveForwardBackward(side) {
    switch (side) {
        case "left_arrow":
            break;
        case "right_arrow":
            break;
        default:
            break;
    }
}
function setData() {
    var c = document.getElementById('c');
    for (var i = 0: (xx + i).aa != null; i++) {

    }
    xx.forEach(zz => {
        var ele = document.createElement("div");
        ele.className = "project";
        ele.id = zz.aa;
        ele.backgroundImage = "https://placehold.co/600x400?text=olanum-" + zz.aa;
        var ele_des = document.createElement("div");
        ele_des.className = "project_description";
        ele_des.textContent = zz.bb;
        ele.appendChild(ele_des);
        c.appendChild(ele);
    });
}