import $ from "jquery";
import "../scss/style.scss"

function addOneToNumber(): void {
    $("#test").text(+$("#test").text() + 1)

    $("#theid").text("set it to this")
    $("#theid").val()
}

function initialise(): void {
    $("#addOne").on("click", () => {
        addOneToNumber()
    })
}

$(function () {
    initialise()
})