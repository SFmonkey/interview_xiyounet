<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/19
 * Time: 20:58
 */
$username = $_GET['username'];

$suNumber = $_GET['suNumber'];
if ($username == "admin" && $suNumber == 1) {
    echo 1;
} else if ($username == "lizihan" && $suNumber == '04142129') {
    echo 1;
}else{
    echo 3;
};
