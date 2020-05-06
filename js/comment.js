let comment = comments();
let containers = document.getElementById("user-comments");

function addComment(name, data) {
    let com = document.createElement("div");
    com.className = "container";
    let str = "";
    str += "<p class='user-name'>Имя: <span>" + name + "</span></p>";
    str += "<p class='user-name'>Комментарий: </p>";
    str += "<p class='user-comment'>" + data + "</p>";
    com.innerHTML = str;
    containers.insertBefore(com, containers.firstChild);
}

function renderingComment() {
    containers.innerHTML = "";
    for (let i = 0; i < comment.data.length; i++) {
        addComment(comment.data[i].name, comment.data[i].comment);
    }
}

function checkComment(name, comment) {
    let reg = /\W/;
    let check ;
    check = name.match(reg) && name.match(/\S/);
    check = check && comment.match(reg) && comment.match(/\S/);
    return check;
}

function newComment() {
    let name = document.getElementById("name").value;
    let com = document.getElementById("comment").value;
    if (checkComment(name, com)) {
        addComment(name, com);
    } else {
        alert("Заполните все поля")
    }
}

renderingComment();