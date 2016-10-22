/**
 * Created by Administrator on 2016/10/19.
 */
$(function(){
    $('#username').focus(function(){
        $('.login_content_form span').remove();
    });
    $('#btn').click(function(){
        $('.login_content_form span').remove();
        var username = $('#username').val();
        $.ajax({
            url:'demo_login.php',
            type:'GET',
            cache:false,
            async:true,
            dataType:'json',
            data:{
              username:username
            },
            success:function(data){
                judgeUser(data);
            },
            error:function(){
                console.log('get login value false');
            }
        })
    });

    /*
    *传给后端username 接受1,2,3 
    * 1为报名未参加面试
    * 2为报名已参加面试
    * 3为霸面
    * */
    var judgeUser = function(data){
        if(data==1){
            var username = $('#username').val();
            var url = 'http://localhost/interview/written_test.html?username='+ username ;
            window.location.href=url;
        }else if(data==2){
            $('#username').after('<span class="login_content_form_notice">* 你已经参与过笔试啦..</span>');
        }else if(data==3){
            $('#username').after('<span class="login_content_form_notice">* 你是来霸面的咩..</span>');
        }else{
            console.log('error');
        }
    }
});