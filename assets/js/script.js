const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var selectionGroup = $$(".selection-item");

selectionGroup.forEach(function (selection) {
    console.log(selection);
    selection.onclick = function () {
        var activeItem = $(".selection-item.active");
        if (activeItem != this) {
            activeItem.classList.remove("active");
            this.classList.add("active");
        }
    };
});
