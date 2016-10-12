alert("After taking Quiz please read this carefully. \n \n 1. There is just one correct answer. \n \n 2. Write your answers in input field. \n \n 3. Don't use capital letters.")

var ques1 = prompt(" Question # 1 \n What is the keyword that displays a message box? \n \n 1. alert \n \n 2. confirm \n \n 3. prompt \n "); 
var ans1 = "alert";
var ques2 = prompt(" Question # 2  \n Write alert syntax that displays hello world. \n  \n 1. alert(\"hello world\"); \n \n 2. Alert(\"hello world\");");
var ans2 = "alert(\"hello world\");";
var ques3 = prompt(" Question # 3 \n What is the keyword that declares a variable? \n  \n 1. var \n \n 2. Var \n \n 3. variable ");
var ans3 = "var";
var ques4 = prompt(" Question # 4 \n Following is a legal variable. \n var $10; \n \n 1. true \n \n 2. false \n ");
var ans4 = "true";
var ques5 = prompt(" Question # 5 \n var b = \"10\" - \"5\"; \n \"What is the value of b?\" \n \n 1. NaN \n \n 2. undefined \n \n 3. 5 \n \n 4. notAString \n \n 5. 105 ");
var ans5 = "5";
var ques6 = prompt("Question # 6 \n Is javascript case sensitive? \n \n 1. yes \n \n 2. no"); 
var ans6 = "yes";
var ques7 = prompt("Question # 7 \n && and || are ___________ operators. \n \n 1. logical \n \n 2. comparison \n \n 3. mathematical");
var ans7 = "logical";
var ques8 = prompt(" Question # 8 \n \"!==\" is a ______ operator. \n \n 1. logical \n \n 2. comparison \n \n 3. mathematical ");
var ans8 = "comparison";
var ques9 = prompt(" Question # 9 \n Using the pop method, you can remove the last element of an array. \n \n 1. true  \n \n 2. false");
var ans9 = "true";
var ques10 = prompt(" Question # 10 \n Which statement is true about slice method? \n  \n 1. The second index number specifies the last element to be copeid. \n \n 2. The second number specifies the index number of the element after the last element to be copied.");
var ans10 = "2";   
var ques11 = prompt(" Question # 11 \n var x = 50; \n var y = x++; \n \n What is the value of y? \n \n 1. 50 \n \n 2. 51");
var ans11 = "50";
var ques12 = prompt(" Question # 12 \n How many times will following loop run? \n for(var i = 0; i < 3; i++) { \n   for(var j = 0; j < 4; j++) { \n    console.log(i + j); \n     } \n } \n \n 1. 4 \n  2. 3 \n  3. 7 \n  4. 12");
var ans12 = "12";
var ques13 = prompt(" Question # 13 \n For getting input from user which one of the following we use? \n \n 1. Prompt \n \n 2. prompt.window \n \n 3. prompt \n \n 4. user.input");
var ans13 = "prompt";
var ques14 = prompt(" Question # 14 \n var fruits = [\"apple\", \"banana\", \"orange\", \"mango\"]; \n How we can find the length of above array? \n \n 1. length.fruits \n \n 2. array.length \n \n 2.fruits.length");
var ans14 = "fruits.length";
var ques15 = prompt(" Question # 15 \n Which statement is true about splice method. \n \n 1. Using splice method you can insert and copy one or more element in an array. \n \n 2. Use the splice method to insert one or more elements anywhere in an array. \n \n 3. Using splice method you can just remove elemets from anywhere in an array \n \n (give your answer in a number)");
var ans15 = "2";

var score = 0;
var correctAns = 0;


function checkQues(ques, ans) {
    if(ques == ans) {
        score = ++score;
        correctAns = ++correctAns;
    }
    else {
        
    }
}

checkQues(ques1, ans1);
checkQues(ques2, ans2);
checkQues(ques3, ans3);
checkQues(ques4, ans4);
checkQues(ques5, ans5);
checkQues(ques6, ans6);
checkQues(ques7, ans7);
checkQues(ques8, ans8);
checkQues(ques9, ans9);
checkQues(ques10, ans10);
checkQues(ques11, ans11);
checkQues(ques12, ans12);
checkQues(ques13, ans13);
checkQues(ques14, ans14);
checkQues(ques15, ans15);
  


var avgPer = (score * 100) / 15;
document.getElementById("correct-ent").innerHTML = "Your Correct Entries = " + correctAns;
document.getElementById("score-per").innerHTML = avgPer + " %" ;