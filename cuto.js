//通过js得到地址栏的page参数，同时替换为新的current_page页码后进行跳转。
//代码语法：js
    function change_content() {
        

        var oldpage=getUrlParms("page");
        var url=location.href;
        var lab="";
        if(url.indexOf("?")!=-1){lab="&";}else{lab="?";}    
        
        if(oldpage==null){
           url=url+lab+"page="+current_page;
        }else{
           url=url.replace("page="+oldpage,"page="+current_page);
        }
        if(oldpage==current_page){
            return;
        }else{
            //alert(url);
            location.href=url;
        }
  
	  return;
    }

function getUrlParms(name){
   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)
   return unescape(r[2]);
   return null;
   }
