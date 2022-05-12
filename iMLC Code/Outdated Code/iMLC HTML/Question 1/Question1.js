//Function to check the answer to the question and output appropriate response
function check(){
    var score = 0;
    var totalScore;
    var q1=document.Question1.question1.value;
    var result=document.getElementById('result');
    var question1=document.getElementById('Question1');

    //Check if the user's answer is correct, iterate the score if it is, then output appropriate message
    if (q1 == "red/green"){
        score++;
        //document.write("Correct!");
    }
    //Check if the user has alreadt attempted this question return if they have
    if(localStorage.getItem('quizQues1') == 'true'){
        //result.textContent='You have already answered this question and cannot earn any more points.';
        alert("You have already answered this question and cannot earn any more points from it.")
        return;
    }

    //Record that the user has attempted the question
    localStorage.setItem('quizQues1', 'true');

    //store the users score into local storage
    totalScore = localStorage.getItem('userScore');
    //document.write(totalScore);

    //check if userScore is null meaning this is their first question
    if (totalScore == null){
        localStorage.setItem('userScore', score);
    }
    else{
        //add the previous score to the new score then put it into local storage
        for (let i = 0; i < score; i++){
            totalScore++;
        }
        localStorage.setItem('userScore', totalScore);
    }
    
    //clear the question away to display the results
    question1.style.display = "none";

    //Tell user if the got question correct
    if (score > 0){
        result.textContent='Correct! You Earned 1 Point!';
    }
    else{
        result.textContent='Incorrect. The correct answer is Red/Green';
    }
    return;
}