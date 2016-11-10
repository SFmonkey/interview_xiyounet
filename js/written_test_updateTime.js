/**
 * Created by Administrator on 2016/10/15.
 */
window.onload = function(){
    var hour,min,second;
    var timepiece = document.getElementById('timepiece');
    if (localStorage.startTime) {
        time = (new Date().getTime() - localStorage.startTime) / 1000;
    } else {
        time = 0;
    }
    console.log(time);
    timer = setInterval(updateTime,1000);
    function format(time){
        return time.toString().replace(/^(\d)$/,'0$1');
    }
    function updateTime(){
        if (time >= 2700) {
            alert("考试结束，系统将自动保存你的答案，请等待面试结果");
            clearInterval(timer);
            var answer_1 = [];
            var answer_2 = [];
            var data = [
                {username: localStorage.name}
            ];
            var a =1;
            var b =1;
            $('#main_test_content_0 div').each(function () {
                answer_1.push($(this).html());
            });
            $('#main_test_content_content_0 textarea').each(function () {
                answer_2.push($(this).val());
            });
            $('#main_test_content_1 div').each(function () {
                answer_1.push($(this).html());
            });
            $('#main_test_content_content_1 textarea').each(function () {
                answer_2.push($(this).val());
            });
            while (a) {
                a = answer_1.shift();
                b = answer_2.shift();
                var tran = {};
                tran[a] = b;
                data.push(tran);
            }
            $.ajax({
                url: 'demo_answer_2.php',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: {
                    answer_2: answer_2
                },
                success: function () {
                    window.location.href = "http://localhost/interview/login.html";
                    localStorage.clear();
                },
                error: function () {
                    console.log('XHR error');
                }
            })
        }
        time++;
        hour = parseInt(time / 3600);
        min = parseInt(time % 3600 / 60);
        second = parseInt(time % 3600 % 60);
        timepiece.innerHTML = ''+format(hour) +':'+ format(min) +':'+ format(second) +'';
        return 0;
    }

};