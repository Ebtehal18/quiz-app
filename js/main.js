import { Question } from "./question.js"
import { Qiuz } from "./quiz.js"
const startBtn=document.querySelector(".btn-start")
let categoryMenu=document.getElementById('categoryMenu')
let difficultyLevel=document.getElementById("difficultyOptions")
let numberOfQuestions=document.getElementById('questionsNumber')
export let  allQuestions;
export let quizObj



startBtn.addEventListener("click",async function(e){
    e.preventDefault()
let cateory=categoryMenu.value
let difficukty=difficultyLevel.value
let questionNumbers=numberOfQuestions.value
 quizObj=new Qiuz(cateory,difficukty,questionNumbers) //creating insttance from the data of the form
 allQuestions= await quizObj.fetchDataQuestions()

let question =new Question(0)
question.displayQuestion()
document.getElementById('form-info').classList.replace("d-block",'d-none')
document.getElementById('questions').classList.replace("d-none",'d-block')

})
 
