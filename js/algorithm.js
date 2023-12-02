function openCat(item) {    
    var category = document.getElementsByClassName("selectCat")[0];
    item.classList.toggle("action");
    category.classList.toggle("show");
    
}