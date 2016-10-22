/**
 * Created by Administrator on 2016/10/17.
 */
$(function(){
    var num = 0;
    var num_1 = 0;
    var answer_1 = [];
    var answer_2 = [];
    function getUrlParams(url) {
        if (!url) {
            url = window.location.href;
        }
        var arrUrl = url.split('?');
        if (typeof(arrUrl[1]) == 'string') {
            var u = arrUrl[1].split('&');
            var get = {};
            for (var i in u) {
                var j = u[i].split('=');
                get[decodeURIComponent(j[0])] = decodeURIComponent(j[1]);
            }
            return get;
        } else {
            return {};
        }
    }
    var item =[[4,2,2],['填空题','为了提高数据库的性能，需要针对系统设计基准测试进行压力测试，那么进行压力测试时需要考虑什么指标',1],
     ['填空题','A，B，C三位同学都是很聪明的同学，面试官给他们背上依次贴上了数字2，4，8，他们都能看见别人的数字但无法看见自己的数字，现在面试官告诉他们这些数字都是自然数并且构成一个等比数列，让A、B、C同学依次循环回答是否确定自己的数字是多少，每位同学的回答算作一次，经过____次有同学能准确说出自己的数字',2],
     ['填空题','给定一个整数sum，从有N个无序元素的数组中寻找元素a、b、c、d，使得 a+b+c+d =sum，最快的平均时间复杂度是____。',2],
     ['填空题','已知int a[]={1,2,3,4,5}；int*p[]={a,a+1,a+2,a+3}；int **q=p；表达式*(p[0]+1)+**(q+2)的值是____。',3],
     ['简答题','设二叉树结点的先根序列、中根序列和后根序列中，所有叶子结点的先后顺序',2],
     ['简答题','有8只球队,采用抽签的方式随机配对,组成4场比赛。假设其中有4只强队,那么出现强强对话 (任意两只强队相遇)的概率',3],
     ['编程题','给定一个长度为n的整数数组a，元素均不相同，问数组是否存在这样一个片段，只将该片段翻转就可以使整个数组升序排列。其中数组片段[l,r]表示序列a[l], a[l+1], ..., a[r]。原始数组为a[1], a[2], ..., a[l-2], a[l-1], a[l], a[l+1], ..., a[r-1], a[r], a[r+1], a[r+2], ..., a[n-1], a[n]，将片段[l,r]反序后的数组是a[1], a[2], ..., a[l-2], a[l-1], a[r], a[r-1], ..., a[l+1], a[l], a[r+1], a[r+2], ..., a[n-1], a[n]。',2],
     ['编程题','V先生有一天工作到很晚，回家的时候要穿过一条长l的笔直的街道，这条街道上有n个路灯。假设这条街起点为0，终点为l，第i个路灯坐标为ai。路灯发光能力以正数d来衡量，其中d表示路灯能够照亮的街道上的点与路灯的最远距离，所有路灯发光能力相同。为了让V先生看清回家的路，路灯必须照亮整条街道，又为了节省电力希望找到最小的d是多少？',3]];
    for(var i=0;i<item[0][0]+item[0][1];i++){
        $('#main_test_content_title_0').append('<h2 id="main_test_content_title_name_'+i+'">'+(i+1)+'.'+item[i+1][0]+'</h2>');
        $('#main_test_content_0').append('<p id="main_test_content_item_'+i+'">'+item[i+1][1]+'</p>');
        $('#main_test_content_content_0').append('<textarea class="main_test_content_explain" id="main_test_content_explain_'+i+'" placeholder="写出你的答案和思路٩(◦`꒳´◦)۶"></textarea>');
        $('#main_menu_0').append('<p id="main_menu_grade_'+i+'"><span>试题难度 :</span> <span class="stnandu"></span></p>');
        $('#main_menu_item_list_0').append('<span id="main_menu_item_list_id_0">'+(i+1)+'</span>');
    }
    $('main_menu_item_list_id_0').addClass('item_2');
    for(var i=0;i<item[0][2];i++){
        $('#main_test_content_title_1').append('<h2 id="main_test_content_title_name_1_'+i+'">'+(i+1)+'.'+item[i+7][0]+'</h2>');
        $('#main_test_content_1').append('<p id="main_test_content_item_1_'+i+'">'+item[i+7][1]+'</p>');
        $('#main_test_content_content_1').append('<textarea class="main_test_content_explain" id="main_test_content_explain_1_'+i+'" placeholder="写出你的答案和思路٩(◦`꒳´◦)۶"></textarea>');
        $('#main_menu_1').append('<p id="main_menu_grade_1_'+i+'"><span>试题难度 :</span> <span class="stnandu"></span></p>');
        $('#main_menu_item_list_1').append('<span id="main_menu_item_list_id_0">'+(i+1)+'</span>');
    }
    $('main_menu_item_list_id_1').addClass('item_2');
    for(var i=0;i<item[0][0]+item[0][1];i++){
        for(var j=0;j<item[i+1][2];j++){
            $('#main_menu_grade_'+i+' .stnandu').append('<img src="images/star-on.png" alt="grade">');
        }
    }
    for(var i=0;i<item[0][2];i++){
        for(var j=0;j<item[i+7][2];j++){
            $('#main_menu_grade_1_'+i+' .stnandu').append('<img src="images/star-on.png" alt="grade">');
        }
    }
    $('#item_2').hide();
    $('#aside_2').hide();
    for(var i=1;i<6;i++){
        $('#main_test_content_title_name_'+i+'').hide();
        $('#main_test_content_item_'+i+'').hide();
        $('#main_test_content_explain_'+i+'').hide();
        $('#main_menu_grade_'+i+'').hide();
    }
    //submit
    $('#submit_1').click(function(){
        var result = confirm("你确定提交第一部分吗？");
        if(result==false){
            return ;
        }
        $('#item_1').hide();
        $('#aside_1').hide();
        $('#item_2').show();
        $('#aside_2').show();
        for(var i=1;i<2;i++){
            $('#main_test_content_title_name_1_'+i+'').hide();
            $('#main_test_content_item_1_'+i+'').hide();
            $('#main_test_content_explain_1_'+i+'').hide();
            $('#main_menu_grade_1_'+i+'').hide();
        }
        $('#main_test_content_0 p').each(function(){
            answer_1.push($(this).text());
        });
        $('#main_test_content_content_0 textarea').each(function(){
           answer_2.push($(this).val()) ;
        });
    });
    //next_0
    $('#nextItem_1').click(function(){
        if(++num < 6) {
            $('#main_test_content_title_name_'+num+'').prev().hide();//set next title of easyAnswer
            $('#main_test_content_title_name_'+num+'').show();
            $('#main_test_content_item_'+num+'').prev().hide();//set next content of easyAnswer
            $('#main_test_content_item_'+num+'').show();
            $('#main_test_content_explain_'+num+'').prev().hide();//set next value of easyAnswer
            $('#main_test_content_explain_'+num+'').show();
            $('#main_menu_grade_'+num+'').prev().hide();//set grade of easyAnswer
            $('#main_menu_grade_'+num+'').show();
            $('#main_test_content_content_0 textarea').each(function(){  //checked textArea value
                $(this).val()&&$('#main_menu_item_list_0 span').eq($(this).index()).addClass('item_1');
            });
            $('#main_menu_item_list_0 span').removeClass('item_2');
            $($('#main_menu_item_list_0 span')[num]).addClass('item_2');//set menu of easyAnswer
        }
    });
    //next_1
    $('#nextItem_2').click(function(){
        if(++num_1 < 2) {
            $('#main_test_content_title_name_1_'+num_1+'').prev().hide();//set next title of easyAnswer
            $('#main_test_content_title_name_1_'+num_1+'').show();
            $('#main_test_content_item_1_'+num_1+'').prev().hide();//set next content of easyAnswer
            $('#main_test_content_item_1_'+num_1+'').show();
            $('#main_test_content_explain_1_'+num_1+'').prev().hide();//set next value of easyAnswer
            $('#main_test_content_explain_1_'+num_1+'').show();
            $('#main_menu_grade_1_'+num_1+'').prev().hide();//set grade of easyAnswer
            $('#main_menu_grade_1_'+num_1+'').show();
            $('#main_test_content_content_1 textarea').each(function(){  //checked textArea value
                $(this).val()&&$('#main_menu_item_list_1 span').eq($(this).index()).addClass('item_1');
            });
            $('#main_menu_item_list_1 span').removeClass('item_2');
            $($('#main_menu_item_list_1 span')[num_1]).addClass('item_2');//set menu of easyAnswer
        }
    });
    //menu_0
        $('#main_menu_item_list_0 span').click(function(){
            $('#main_test_content_content_0 textarea').each(function(){ //checked textArea value
                $(this).val()&&$('#main_menu_item_list_0 span').eq($(this).index()).addClass('item_1');
            });
            $('#main_menu_item_list_0 span').removeClass('item_2');
            $(this).addClass('item_2');
            $('#main_test_content_title_0 h2').hide();
            $('#main_test_content_title_0 h2').eq($(this).index()).show();
            $('#main_test_content_0 p').hide();
            $('#main_test_content_0 p').eq($(this).index()).show();
            $('#main_test_content_content_0 textarea').hide();
            $('#main_test_content_content_0 textarea').eq($(this).index()).show();
            $('#main_menu_0 p').hide();
            $('#main_menu_0 p').eq($(this).index()).show();
            num = $(this).index();
        });
    //menu_1
    $('#main_menu_item_list_1 span').click(function(){
        $('#main_test_content_content_1 textarea').each(function(){ //checked textArea value
            $(this).val()&&$('#main_menu_item_list_1 span').eq($(this).index()).addClass('item_1');
        });
        $('#main_menu_item_list_1 span').removeClass('item_2');
        $(this).addClass('item_2');
        $('#main_test_content_title_1 h2').hide();
        $('#main_test_content_title_1 h2').eq($(this).index()).show();
        $('#main_test_content_1 p').hide();
        $('#main_test_content_1 p').eq($(this).index()).show();
        $('#main_test_content_content_1 textarea').hide();
        $('#main_test_content_content_1 textarea').eq($(this).index()).show();
        $('#main_menu_1 p').hide();
        $('#main_menu_1 p').eq($(this).index()).show();
        num_1 = $(this).index();
    });
    $('#submit_2').click(function(){
        var data = [
            getUrlParams()
        ];
        $('#main_test_content_1 p').each(function(){
            answer_1.push($(this).text());
        });
        $('#main_test_content_content_1 textarea').each(function(){
            answer_2.push($(this).val()) ;
        });
        while(1){
            var a = answer_1.shift();
            if(a==undefined){
                break;
            }
            var b = answer_2.shift();
            var tran={
                topic : '',
                answer : ''
            };
            tran.topic=a;
            tran.answer = b;
            data.push(tran);
        }
        $.ajax({
            url:'demo_answer_2.php',
            type:'GET',
            cache:false,
            async:true,
            dataType:'json',
            data:{
                answer:data
            },
            success:function(){
                alert("考试结束!");
                window.location.href="http://localhost/interview/login.html";
            }
        })
    });
    if (window.console && window.console.log) {
        console.log("不要偷看 (╯‵□′)╯︵┴─┴");
    }
});