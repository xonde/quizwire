import $ from "jquery";

function addNumbers(): void {
    const numberOne = +$("#numberOne").val()! || 0
    const numberTwo = +$("#numberTwo").val()! || 0
    const result = numberOne + numberTwo
    $("#result").text(`The result is ${result}!`)
}

function initialise(): void {
    $("#add").on("click", () => {
        addNumbers()
    })
}

$(function () {
    initialise()
})