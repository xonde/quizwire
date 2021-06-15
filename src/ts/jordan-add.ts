import $ from "jquery"

$(function () {
 initialiseListeners()
})

function initialiseListeners() {
    $("#ml").on("click", addTwoNumbersTogether)
}


function addTwoNumbersTogether() {
   const numberOne = +($("#mp").val() || 0)
   const numberTwo = +($("#md").val() || 0)
   const result = numberOne + numberTwo
   $("#mx").text(result)
}
