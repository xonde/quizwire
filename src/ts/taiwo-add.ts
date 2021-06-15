import $ from "jquery";

function getNumberFromInputBox(id: string): number {
    return +$(id).val()! || 0;
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

function setResultText(result: string): void {
    $("#result").text(`This Result is ${result}!`)
}

function addNumbersInInputBox(): void {
    const numberOne = getNumberFromInputBox("#numberOne");
    const numberTwo = getNumberFromInputBox("#numberTwo");
    const result = addNumbers(numberOne, numberTwo);
    setResultText(result.toString());
}

function initialise(): void {
    $("#add").on("click", () => {
        addNumbersInInputBox()
    })
}

$(function () {
    initialise()
})