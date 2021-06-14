import $ from "jquery";

function double(): void {
    $("#test").text(+$("#test").text() * 2)
}

function initialise(): void {
    $("#double").on("click", () => {
        double()
    })
}

$(function () {
    initialise()
})