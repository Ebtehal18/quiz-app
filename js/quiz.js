import { allQuestions } from "./main.js";
export class Qiuz{
    constructor(category,difficulty,numberOfQuestions){
this.category=category,
this.difficulty=difficulty,
this.numberOfQuestions=numberOfQuestions,
this.score=0

    }
// get data of the category
   async fetchDataQuestions(){
try{
    const res=await fetch(`https://opentdb.com/api.php?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch questions. Status: ${res.status}`);
    }
const data=await res.json()
return data.results
}catch(error){
    console.log("Error fetching data:", error);
    alert("Something went wrong while fetching the questions. Please try again later.");
}

    }
// display the total score
    displayScore(){
        let cart=`<div class="col-lg-8 mx-auto">
        <div class="shadow-lg p-4 rounded-3 d-flex flex-column gap-3 bg-white">
        <h2 class="mb-0 text-center">
        ${this.score===allQuestions.length?`Congratulations 🤩🥳  You answered ${this.score} out of ${allQuestions.length} questions!`
            :`Better luck next time 😓😭, You answered ${this.score} out of ${allQuestions.length} questions!`}    
            </h2>
            <button class="again btn btn-primary rounded-pill "><i class="bi bi-arrow-repeat"></i> Try Again</button>
        </div>
</div>`
document.getElementById("result").innerHTML=cart
document.getElementById('questions').classList.replace("d-block",'d-none')
document.getElementById('result').classList.replace("d-none",'d-block')
document.querySelector(".again").addEventListener("click",function(){
    window.location.reload()
})
    }

}