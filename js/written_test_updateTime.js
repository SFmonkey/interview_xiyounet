/**
 * Created by Administrator on 2016/10/15.
 */
window.onload = function(){
    var hour,min,second;
    var timepiece = document.getElementById('timepiece');
    if (sessionStorage.startTime) {
        time = (new Date().getTime() - sessionStorage.startTime) / 1000;
    } else {
        time = 0;
    }
    timer = setInterval(updateTime,1000);
    function format(time){
        return time.toString().replace(/^(\d)$/,'0$1');
    }
    function updateTime(){
        if (time >= 3600) {
            alert("考试结束，系统将自动保存你的答案，请等待面试结果");
            clearInterval(timer);
            var answer_1 = [];
            var answer_2 = [];
            var data = [
                getUrlParams()
            ];
            var a =1;
            var b =1;
            if($('#item_1').is(':visible')){
                $('#main_test_content_0 p').each(function(){
                    answer_1.push($(this).text());
                });
                $('#main_test_content_content_0 textarea').each(function(){
                    answer_2.push($(this).val()) ;
                });
            }else{
                $('#main_test_content_0 p').each(function(){
                    answer_1.push($(this).text());
                });
                $('#main_test_content_content_0 textarea').each(function(){
                    answer_2.push($(this).val()) ;
                });
                $('#main_test_content_1 p').each(function(){
                    answer_1.push($(this).text());
                });
                $('#main_test_content_content_1 textarea').each(function(){
                    answer_2.push($(this).val()) ;
                });
                while(a){
                    a = answer_1.shift();
                    b = answer_2.shift();
                    var tran={};
                    tran[a]=b;
                    data.push(tran);
                }
                $.ajax({
                    url:'demo_answer_2.php',
                    type:'GET',
                    cache:false,
                    async:true,
                    dataType: 'post',
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