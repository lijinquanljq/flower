/*
* @Author: 李金泉
* @Date:   2018-10-13 10:54:34
* @Last Modified by:   李金泉
* @Last Modified time: 2018-10-22 19:26:30
*/
  $(function () { 
  	$(window).scroll(function () { 
  		if ($(window).scrollTop() > 200) {
  			$(".jq-js-a").animate({left:'10px'}).fadeIn("fast").show();
  			$(".jq-js-b").animate({right:'10px'}).fadeIn("fast").show();
  		}

  		if ($(window).scrollTop() > 600) { 
  			$(".row_one").fadeIn(500);
  			$(".jq-js-c").animate({bottom:'50px'},1000).show();
  		} 

  		if ($(window).scrollTop() > 1100) { 
  			$(".row_two").fadeIn(500);
  			$(".jq-js-d").animate({left:'10px'},1000).fadeIn("fast").show();
  			$(".jq-js-e").animate({right:'10px'},1000).fadeIn("fast").show();
  		}

  		if ($(window).scrollTop() > 1200) { 
  			$(".jq-part2").show(500);
  			$(".txt").animate({left:'10px'},2500).fadeIn("fast").show();
  		}   

  		if ($(window).scrollTop() > 2200) { 
  			$(".row_three").fadeIn(1000);
  			$(".jq-js-f").animate({bottom:'50px'},1000).show();
  			$(".jq-js-g").animate({bottom:'50px'},1100).show();
  			$(".jq-js-h").animate({bottom:'50px'},1200).show();
  			$(".jq-js-i").animate({bottom:'50px'},1300).show();
  		}

  		if ($(window).scrollTop() > 2700) { 
  			$(".jq-js-j").animate({left:'-5px'},1000).fadeIn("fast").show();
  			$(".jq-js-k").animate({right:'-5px'},1000).fadeIn("fast").show();
  		}

  		if ($(window).scrollTop() > 3100) { 
  			$(".row_three").fadeIn(1000);
  			$(".jq-js-l").animate({bottom:'50px'},1000).show();
  			$(".jq-js-m").animate({bottom:'50px'},1100).show();
  			$(".jq-js-n").animate({bottom:'50px'},1200).show();
  			$(".jq-js-o").animate({bottom:'50px'},1300).show();
  		} 
  		if ($(window).scrollTop() > 3100) { 
  			$(".bg-foot").show();
  		} 
  	});
  }); 



var SysSecond; 
var InterValObj; 
  
$(document).ready(function() { 
  SysSecond = parseInt($("#remainSeconds").html()); //这里获取倒计时的起始时间
  SysSecond = parseInt($("#remainSeconds_a").html()); 
  InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行 
}); 

//将时间减去1秒，计算天、时、分、秒 
function SetRemainTime() { 
  if (SysSecond > 0) { 
   SysSecond = SysSecond - 1; 
   var second = Math.floor(SysSecond % 60);             // 计算秒     
   var minite = Math.floor((SysSecond / 60) % 60);      //计算分 
   var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时 
   var day = Math.floor((SysSecond / 3600) / 24);        //计算天 

   $("#remainTime").html(day + "天" + hour + "时" + minite + "分" + second + "秒"); 
   $("#remainTime_a").html(day + "天" + hour + "时" + minite + "分" + second + "秒"); 
  } else {//剩余时间小于或等于0的时候，就停止间隔函数 
   window.clearInterval(InterValObj); 
   //这里可以添加倒计时时间为0后需要执行的事件 
  } 
} 
