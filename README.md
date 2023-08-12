**关于网页分页，但是也许我们会使用Bootstarp或者easyui框架进行，导入的整个包会比较大，如果您想单独为您的站点插入一个简单的分页插件，我想这会是一个不错的选择。**
****
# 实现方法  
1:引入jscss目录下的所有css\js，包括JQ。  
2：定义一个容器  
3:在html代码中初始化，设置总个数，每页个数等。  
4:在toPage.js上设置切换页面事件，方法函数名为change_content()。  
  如果切换页面代码进行跳转：您可以通过current_page变量获取新的页面代码，并于location.href进行后续跳转。  
  如果切换页面代码进行AJAX动态加载：可以通过$(obj_box).children('.page_content').html(新的内容)定义新的页面内容。  
****
# 要点：  
1:关于location.href地址拦截和获取页面参数，可查看cuto.js中的代码  
****
# 这是效果图：  
![ ] ( demo.png )
