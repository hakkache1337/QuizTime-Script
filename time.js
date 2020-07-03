var max_time = <?php echo "$examtime" ?>;
var c_seconds  = 0;
var total_seconds =60*max_time;
max_time = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
document.getElementById("quiz-time-left").innerHTML='' + max_time + ':' + c_seconds + ' Minutes restant';

function init(){
document.getElementById("quiz-time-left").innerHTML='' + max_time + ':' + c_seconds + ' Minutes restant';
setTimeout("CheckTime()",999);
}

function CheckTime(){
document.getElementById("quiz-time-left").innerHTML='' + max_time + ':' + c_seconds + ' Minutes restant' ;
if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
} else
{
total_seconds = total_seconds -1;
max_time = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",999);
}

}
init();
