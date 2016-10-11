var ques1 = prompt(" Question # 1 \n. What is the keyword that displays a message box? \n \n 1. alert \n \n 2. confirm \n \n 3. prompt \n ", "alert, comfirm, prompt"); 
var ans1 = "alert";
var ques2 = prompt(" Question # 2  \n alert syntex that displays hello world. \n  \n 1. alert(\"hello world\"); \n \n 2. Alert(\"hello world\"); \n");
var ans2 = "alert(\"hello world\");";
var ques3 = prompt(" Question # 3 \n What is the keyword that declares a variable? \n  \n 1. var \n \n 2. Var \n \n 3. variable \n" , "var, Var, variable, Variable");
var ans3 = "var";
var ques4 = prompt(" Question # 4 \n Following is a legal variable. \n var $10; \n 1. true \n \n 2. false \n ", "true or false");
var ans4 = "true";
var ques5 = prompt(" Question # 5 \n var b = \"10\" - \"5\"; \n \"What will be print out?\" \n 1. NaN \n 2. undefined \n 3. 5 \n 4. notAString \n 5. 105 ", "NaN, undefined, notAString, 5, 105");
var ans5 = "5";
var ques6 = prompt(" Question # 6 \n \"!==\" This is a ______ operator. \n \n 1. logical \n 2. comparison \n 3. mathematical ");
var ans6 = "comparison";
var ques7 = prompt(" Question # 7 \n Using the keyword pop, you can remove the last element of an array \n \n 1. true 2. false", "true, false");
var ans7 = true;
var ques8 = prompt(" Question # 8 \n Which statement is true about slice method? \n  \n 1. The second index number specifies the last element to be copeid \n \n 2. The second number specifies the index number of the element after the last element to be copied", "1, 2");
var ans8 = 2;   
var ques9 = prompt(" Question # 9 \n var x = 50; \nvar y = x++; \n \n What is the value of y? \n 1. 50 \n 2. 51", "50, 51");
var ans9 = 50;
var ques10 = prompt(" Question # 10 \n How many times will following loop run? \nfor(var i = 0; i < 3; i++) { \n  for(var j = 0; j < 4; j++) { \n     } \n } \n  1. 4 \n  2. 3 \n  3. 7 \n  4. 12", "4, 3, 7, 12");
var ans10 = "12";

var score = 0;
var correctAns = 0;
var a = "muneeb";

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
document.getElementById("score").innerHTML = score;
document.getElementById("correct_ans").innerHTML = correctAns;
