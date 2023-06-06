var isshow = false;


function Margin() {
    var inner = document.getElementById("inner")
    var bar = document.getElementById("leftbar")
    var top = document.getElementById("top")
    if (document.documentElement.clientWidth > 1000) {
        inner.style.marginLeft = "0px";
        bar.style.visibility = "visible";
        top.style.paddingLeft = "60px";
    } else if (isshow) {
        inner.style.marginLeft = "130px";
        bar.style.visibility = "visible";
        top.style.paddingLeft = "60px";
    } else {
        inner.style.marginLeft = "10px";
        bar.style.visibility = "hidden";
        top.style.paddingLeft = "0px";
    }
}

function SideButton() {
    if (document.documentElement.clientWidth <= 1000) {
        var bar = document.getElementById("leftbar")
        var inner = document.getElementById("inner")
        var top = document.getElementById("top")
        if (isshow == false) {
            bar.style.visibility = "visible";
            inner.style.marginLeft = "130px";
            top.style.paddingLeft = "60px"
            isshow = true;
        } else {
            bar.style.visibility = "hidden";
            inner.style.marginLeft = "10px";
            top.style.paddingLeft = "0px";
            isshow = false;
        }
    }
}

function ClickOn(addr) {
    window.location = addr;
}

function Panel(PageName) {
    document.write('\
    <div class = "top" id="top">\
    <h1>\
        '+PageName+'\
    </h1>\
    </div>\
    \
    <div class="line"></div>\
    <div class="left" id="leftbar">\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/index.html\')">\
            Domů\
        </button>\
    </p>\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/recepty/index.html\')">\
            Recepty\
        </button>\
    </p>\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/projekty/index.html\')">\
            Projekty\
        </button>\
    </p>\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/studium/index.html\')">\
            Studium\
        </button>\
    </p>\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/research/index.html\')">\
            Research\
        </button>\
    </p>\
    <p>\
        <button class="link" onClick="ClickOn(\'https://chwiedziuk.cz/foto/index.html\')">\
            Foto\
        </button>\
    </p>\
    </div>\
    <button class="link" onClick="SideButton()">\
        <img class="leftobr" src="images/favicon-no-bg.png" alt="Logo">\
    </button>\
    ');
}

function Head(Title) {
    document.write('\
    <title>'+Title+'</title>\
    <meta name="description" content="My personal website"/>\
    <meta name="author" content="Ondřej Chwiedziuk"/>\
    <meta name="viewport" content="width=device-width, initial scale=1.0"/>\
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico"/>\
    <style>\
        @import url(styles/basic.css);\
        @import url(styles/buttons.css);\
        @import url(styles/pictures.css);\
        @import url(styles/other.css);\
    </style>\
    ')
}