import $ from "jquery";

type APIResponse = {
    response_code: number,
    results: Question[]
}

type Question = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

let apiResponse: APIResponse;
let currentQuestionNumber: number = 1;

const categoryId: number = 9 // +(sessionStorage.getItem("categoryId") || 0)
const difficulty: string = "easy" // sessionStorage.getItem("difficulty") || ""
const numberOfQuestions: number = 5 // +(sessionStorage.getItem("numberOfQuestions") || 0)

const loadQuestions = () => {
    const apiUrl = buildApiUrl(categoryId, difficulty, numberOfQuestions)

    $.get(apiUrl, handleApiResponse)
}

const buildApiUrl = (categoryId: number, difficulty: string, numberOfQuestions: number): string => {
    return `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryId}&difficulty=${difficulty}`
}

const handleApiResponse = (data: APIResponse) => {
    apiResponse = data
    displayQuestion(currentQuestionNumber)
}

const goToNextQuestion = () => {
    currentQuestionNumber++;
    displayQuestion(currentQuestionNumber);

    if (currentQuestionNumber === numberOfQuestions) {
        hideNextQuestionButton()
    }
}

const hideNextQuestionButton = () => {
    $("#nextQuestion").hide()
}

const displayQuestion = (questionNumber: number) => {
    const questionData = apiResponse.results[questionNumber - 1]
    $("#questionTitle").html(questionData.question)

    const allAnswers =  questionData.incorrect_answers.concat(questionData.correct_answer).sort()
    const allAnswersHtmlList = allAnswers.map(answer => `<li>${answer}</li>`)
    const allAnswersHtmlText = allAnswersHtmlList.join("")

    $("#answers").html(`<ul>${allAnswersHtmlText}</ul>`)
}

const initialiseListeners = () => {
    $("#nextQuestion").on("click", goToNextQuestion)
}

const initialise = () => {
    loadQuestions()
    initialiseListeners()
}

$(initialise)