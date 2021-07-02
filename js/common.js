function onMenuBtn(doc) {
    //console.log(doc)
    var menu = doc.menuObj;
    if (menu == null) {
        menu = doc.getElementById("menu")
    }
    if (doc.isMenuShow == null) {
        doc.isMenuShow = false
    }
    doc.isMenuShow = !doc.isMenuShow
    if (doc.isMenuShow) {
        menu.style.animation = "moveDown 0.5s";
        menu.style.top = "0%"
    } else {
        menu.style.animation = "moveUp 0.5s";
        menu.style.top="-110%";
    }
    // var state = doc.isMenuShow ? 'block' : 'none'
    // menu.style.display = state;
}