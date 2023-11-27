
function changeArea (listItem) {
    var atag = listItem.parentNode;
    var parentList = atag.classList;

    var siblings = document.getElementsByClassName("codeList");
    var scriptArea = document.getElementsByClassName("codeArea");

    for (var i=0 ; i<siblings.length ; i++) {
        if (siblings[i]==atag) scriptArea[i].classList.add("select");
        else {
            siblings[i].classList.remove("click");
            scriptArea[i].classList.remove("select");
        }
    }

    if (!parentList.contains("click")) {
        parentList.add("click");
    } 
}

