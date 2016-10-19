/**
 * Created by Administrator on 2016/10/15.
 */
window.onload = function(){
    var hour,min,second;
    var timepiece = document.getElementById('timepiece');
    timer = setInterval(updateTime,1000);
    time = 0;
    function format(time){
        return time.toString().replace(/^(\d)$/,'0$1');
    }
    function updateTime(){
        if(time>=1800){
            alert("考试结束，系统将自动保存你的答案，请等待面试结果");
            clearInterval(timer);
            if($('#item_1').is(':visible')){
                var answer_1 = [];
                $('#main_test_content_0 p').each(function(){
                    answer_1.push($(this).text());
                });
                $('#main_test_content_content_0 textarea').each(function(){
                    answer_1.push($(this).val()) ;
                });
                $.ajax({
                    url:'demo_answer_1.php',
                    type:'GET',
                    cache:false,
                    async:true,
                    dataType:'json',
                    data:{
                        answer_1:answer_1
                    },
                    success:function(){
                        window.location.href="http://localhost/interview/login.html";
                    }
                })
            }else{
                var answer_2 = [];
                $('#main_test_content_1 p').each(function(){
                    answer_2.push($(this).text());
                });
                $('#main_test_content_content_1 textarea').each(function(){
                    answer_2.push($(this).val()) ;
                });
                $.ajax({
                    url:'demo_answer_2.php',
                    type:'GET',
                    cache:false,
                    async:true,
                    dataType:'json',
                    data:{
                        answer_2:answer_2
                    },
                    success:function(){
                        window.location.href="http://localhost/interview/login.html";
                    }
                })
            }
            return 0;
        }
        time++;
        hour = parseInt(time / 3600);
        min = parseInt(time % 3600 / 60);
        second = parseInt(time % 3600 % 60);
        timepiece.innerHTML = ''+format(hour) +':'+ format(min) +':'+ format(second) +'';
    }
};