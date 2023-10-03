/*************************************
项目名称：BH pro
脚本作者：ios151



**************************************

[rewrite_local]

^https:\/\/litebhapi\.belugabh\.com\/personal_center\/(my_homepage|user_equity_status_list) url script-response-body https://raw.githubusercontent.com/Scipline/MyScripts/main/quanx/BH%20Pro.js
baby.data.role_20 = 888;//周边写字楼
baby.data.poi_open = true;//是否开通poi服务
baby.data.is_vip_remark = true
}

if ($request.url.indexOf(my) != -1){
baby.data.phone = "18888888888";
baby.data.occupation = "总经理";
baby.data.avatar = "https://avatars.githubusercontent.com/u/116791215?v=4";
baby.data.nickname = "lovebabyforever";

}

$done({body : JSON.stringify(baby)});
