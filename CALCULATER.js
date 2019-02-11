var sub1 = prompt("what is your English marks");
var marks1conv = Number(sub1);
var sub2 = prompt("what is your Math marks");
var marks2conv = Number(sub2);
var sub3 = prompt("what is your Sindhi marks");
var marks3conv= Number(sub3);
var sub4 = prompt("what is your Urdu marks");
var marks4conv = Number(sub4);
var sub5 = prompt("what is your Science marks");
var marks5conv = Number(sub5);
var sub6 = prompt("what is your Pakistan Stuide marks");
var marks6conv = Number(sub6);
var myTotalMarks = marks1conv + marks2conv + marks3conv + marks4conv + marks5conv + marks6conv ;
var totalMarks = 600;
var grade = (myTotalMarks * 100) / totalMarks;
var remarks;
var stipnded;
if (grade >= 90){

alert(" your grade is A+1" + " " + " and % is " + grade );
}

else if (grade >= 80){
alert(" your grade is 'A" + " " + "and % is " + grade);
}
else if (grade >= 70){
alert(" your grade is B" + " " + "and % is " + grade);
}
else if (grade >= 60){
alert(" your grade is C" + " " + "and % is" + grade);
}
else{
    alert("Sorry you are Failed");
}

var teacher = prompt("Give teacher remarks");
var teacher1remarks = (teacher);

 var teache = prompt("Give teacher bons");
var teache2remarks = Number (teache);

if (grade >= 90, "A+1" || grade >= 80,"A" || grade >= 70,"B" || grade >= 60,"c" || grade > 60,"fail" ) {
     
 alert ("your grad is " + grade + " teacher remarks " +  teacher1remarks + " bons " + teache2remarks );   

}





//  alert("Teacher remarks " + teacher1remarks +" Teacher bons " + teache1remarks );


