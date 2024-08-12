// function HtmlElement() {
//     this.click = function () {
//         console.log("click");
//     }
// }
// HtmlElement.prototype.focus = function () {
//     console.log("Focus");
// }
function HtmlSelectElement(items = []) {

    this.items = items;
    this.addItems = function (item) {
        this.items.push(item);
    }
    // this.removeItems = function (item) {
    //     this.items.splice(item , 1);
    // }
}


const e = new HtmlSelectElement();
console.log(e);