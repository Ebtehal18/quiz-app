import { allQuestions,quizObj } from "./main.js";

export class  Question{
    constructor(index)
    {
this.index=index,
this.question=allQuestions[index].question,
this.correctAnswer=allQuestions[index].correct_answer,
this.incorrectAnswers=allQuestions[index].incorrect_answers,
this.category=allQuestions[index].category,
this.allAnswers=this.getAllAnswers()
this.check=false
}

getAllAnswers(){
    this.allAnswers=[this.correctAnswer,...this.incorrectAnswers]
    this.allAnswers.sort()
    return this.allAnswers
}



// display the question=======================
displayQuestion(){
        let cart=`<div class="col-lg-6 animate__animated animate__bounceIn mx-auto ">
        <div class=" bg-white d-flex flex-column gap-3 justify-content-center align-items-center p-4">
        <div class="d-flex justify-content-between w-100 btns">
    <span class="btn btn-category">${this.category}</span>
    <span class="btn btn-questions"> ${this.index+1} of ${allQuestions.length} Questions</span>
</div>
<h2 class="text-capitalize h4 text-center">${this.question}</h2>
<ul class="choices list-unstyled d-flex flex-wrap w-100 gap-2 text-center m-0">
${this.allAnswers.map((answer)=>{
  return  ` <li class="animate__animated" >${answer}</li>`
}).join(' ')}
   
</ul>
<h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score:${quizObj.score}</h2>
        </div>

        </div> `
            
 document.getElementById("questions").innerHTML=cart
const lis=document.querySelectorAll("#questions ul li")
lis.forEach(li=>{
li.addEventListener("click",()=>{

this.checkAnswer(li)
})
})
    }

// check the answer=============
checkAnswer(li){
        if(!this.check){
           this.check=true
        if(li.innerHTML===this.correctAnswer){
            quizObj.score++
            li.classList.add("correct")
            li.classList.add("animate__bounceIn")
        }else{
            li.classList.add("animate__shakeX")
            li.classList.add("wrong")
        }
        this.nextQuestion()
    }
    }

// next question
nextQuestion() {
 
    if (this.index < allQuestions.length - 1) {
        this.index ++;
        setTimeout(() => {
            let nextQuestion = new Question(this.index);
            nextQuestion.displayQuestion();
        }, 2000);
    } else {
     setTimeout(()=>{
        quizObj.displayScore()
     },2000); 
    }
}

}
