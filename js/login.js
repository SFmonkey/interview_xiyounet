/**
 * Created by Administrator on 2016/10/19.
 */
$(function(){
    console.log(1);
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
                console.log(3);
                judgeUser(data);
            },
            error:function(){
                console.log('get login value false');
            }
        })
    });

    var judgeUser = function(data){
        if(data==1){
            window.location.href="http://localhost/interview/written_test.html";
        }else if(data==2){
            $('#username').after('<span class="login_content_form_notice">* 你已经参与过笔试啦..</span>');
        }else if(data==3){
            $('#username').after('<span class="login_content_form_notice">* 你是来霸面的咩..</span>');
        }else{
            console.log('error');
        }
    }
});