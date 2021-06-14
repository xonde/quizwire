import $ from "jquery";
import "../scss/style.scss"

function addOneToNumber(): void {
    $("#test").text(+$("#test").text() + 1)
}

function initialise(): void {
    $("#addOne").on("click", () => {
        addOneToNumber()
    })
}

$(function () {
    initialise()
})