import $ from "jquery";
import "../scss/style.scss"

type OpenTriviaResponse = {
    response_code: number,
    results: Result[]
}

type Result = {
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]
}

const dataHandler = (data: OpenTriviaResponse) => {
    const Questions = data.results.map(result => result.question)
    const Answers = data.results.map(result => result.correct_answer)
    const incorrectAnswers = data.results.map(result => result.incorrect_answers)
    let myText: string []=[]
    let allAnswers: string[]=[]
    let i: number= 0
    let QuestionNo: number= Questions.length
    i = 0
    while(i < QuestionNo){
        myText.push(`<h1>Question: <br/> ${Questions[i]}</h1>` + `<h2>Possible Answers:  <br/> ${allAnswers[i]} </h2>`)
        allAnswers.push(Answers[i] + "<br/>" + incorrectAnswers[i].join("<br/>"))      
        i++
        // myText += "Question: <br/>" + value + "<br/>"
        // Answers.forEach(function (value) {
        //     myText += "Answer: <br/>" + value + "<br/>"
        // })
    };
    i=0
    while (i < QuestionNo){
        $("#currentQues").html(Questions[i])
        i++
    };
}

$.get("https://opentdb.com/api.php?amount=10", dataHandler)
