//Function to retrieve the user's score from the local storage
function getScore(){
    var totalScore;
    var result=document.getElementById('result');

    totalScore = localStorage.getItem('userScore');

    //check if userScore is null to see if the answered any questions yet
    if (totalScore == null){
        result.textContent='You have zero points. You need to find and answer some questions';
    }
    else{
        result.textContent='Total Score is ' + totalScore;
    }
}

//functions to link the user to question 1 if they have found it
function linkQues1(){
   
    //check if the user has visited question 1
    if (localStorage.getItem('quizQues1') == 'true'){
        document.location.href = "Question 1/Question1.html"
    }
    else{
        alert("You have not attemted that question yet. Please find it.");
    }
}