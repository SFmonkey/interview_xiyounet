<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/19
 * Time: 20:58
 */
$username = $_GET['username'];
if($username=="admin"){
    echo 1;
}else if($username=="lizihan"){
    echo 2;
}else{
    echo 3;
};
