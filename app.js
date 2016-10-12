var ques1 = prompt(" Question # 1 \n. What is the keyword that displays a message box? \n \n 1. alert \n \n 2. confirm \n \n 3. prompt \n ", "alert, comfirm, prompt"); 
var ans1 = "alert";

// var ques2 = prompt(" Question # 2  \n alert syntex that displays hello world. \n  \n 1. alert(\"hello world\"); \n \n 2. Alert(\"hello world\"); \n");
// var ans2 = "alert(\"hello world\");";
// var ques3 = prompt(" Question # 3 \n What is the keyword that declares a variable? \n  \n 1. var \n \n 2. Var \n \n 3. variable \n" , "var, Var, variable, Variable");
// var ans3 = "var";
var ques2 = prompt(" Question # 4 \n Following is a legal variable. \n \n var $10; \n \n 1. true \n \n 2. false \n ", "true, false");
var ans2 = "true";
var ques3 = prompt(" Question # 5 \n var b = \"10\" - \"5\"; \n \"What will be print out?\" \n \n 1. NaN \n \n 2. undefined \n \n 3. 5 \n \n 4. notAString \n \n 5. 105 ", "NaN, undefined, notAString, 5, 105");
var ans3 = "5";
var ques4 = prompt("Is javascript case sensitive? \n \n 1. yes \n \n 2. no", "yes, no"); 
var ans4 = "yes";
var ques5 = prompt("&& and || are ___________ operators. \n \n 1. logical \n \n 2. comparison \n \n 3. mathematical", "logical, comarison, mathematical");
var ans5 = "logical";
var ques6 = prompt(" Question # 6 \n \"!==\" This is a ______ operator. \n \n 1. logical \n \n 2. comparison \n \n 3. mathematical ");
var ans6 = "comparison";
var ques7 = prompt(" Question # 7 \n Using the keyword pop, you can remove the last element of an array \n \n 1. true 2. \n \n false", "true, false");
var ans7 = true;
var ques8 = prompt(" Question # 8 \n Which statement is true about slice method? \n  \n 1. The second index number specifies the last element to be copeid \n \n 2. The second number specifies the index number of the element after the last element to be copied", "1, 2");
var ans8 = "2";   
var ques9 = prompt(" Question # 9 \n var x = 50; \nvar y = x++; \n \n What is the value of y? \n \n 1. 50 \n \n 2. 51", "50, 51");
var ans9 = "50";
var ques10 = prompt(" Question # 10 \n How many times will following loop run? \n for(var i = 0; i < 3; i++) { \n   for(var j = 0; j < 4; j++) { \n     } \n } \n  1. 4 \n  2. 3 \n  3. 7 \n  4. 12", "4, 3, 7, 12");
var ans10 = "12";

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

  


var avgPer = (score * 100) / 10;
document.getElementById("correct-ent").innerHTML = "Your Correct Entries = " + correctAns;
document.getElementById("score-per").innerHTML = avgPer + " %" ;