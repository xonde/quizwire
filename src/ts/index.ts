import $ from "jquery";
import "../scss/style.scss"

type OpenTriviaResponse = {
    response_code: number,
    results: Result[]
}
type Category = {
    id:number,
    name:string
}
type TriviaData = {
    trivia_categories: Category[]
}

type Result = {
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}
// declare var url: string
const dataHandler = (data: OpenTriviaResponse) => {
    console.log(data)
    let url = "https://opentdb.com/api.php?"
    const questions = data.results.map(result => result.question)
    const answers = data.results.map(result => result.correct_answer)
    const incorrectAnswers = data.results.map(result => result.incorrect_answers)
    let myText: string []=[]
    let allAnswers: string[]=[]
    let i: number= 0
    let QuestionNo: number= questions.length
    i = 0
    $("#category").html(data.results[i].category)
    
    // while (i < Number($("#questionAmount"))){
    //     // var clicked = false
    //     var categoryChosen = "&category="
    //     var questionAmount = "amount="
    //     var difficultyChosen = "&difficulty="
    //     var typeAuto = "&type=multiple"
    //     document.getElementById('button').addEventListener("click", function() {
    //         clicked = true
    //      }​);​
    //     if (clicked =  true){
    //         categoryChosen += String($("#categorySelect"))
    //         questionAmount += String($("#questionAmount"))
    //         difficultyChosen = String($("#difficultySelect"))
    //         url += questionAmount +difficultyChosen 
    //         //https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple
    //         return url
    //     }
    // return url
    // }
}
let categoryData: TriviaData;
const triviaDataHandler = (triviaData: TriviaData) => {
    categoryData = triviaData
    $("#chooseCategory").html(triviaData.trivia_categories.map(category => `<option value="${category.id}">${category.name}</option>`).join(""))
    console.log(triviaData)
}

$(()=>{
    $.get("https://opentdb.com/api_category.php", triviaDataHandler)
})

$.get("https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple", dataHandler)
