关于网页分页，或许我们会使用Bootstarp或者easyui框架去做，但是导入的整个包会比较大，如果您想单独为您的站点插入一个简单的分页插件，我想这会是一个不错的选择。
实现方法:
1:引入jscss目录下的所有css\js，包括JQ。
2:定义一个容器
3:在html代码中初始化，设置总数目，每页数目等。
4:在toPage.js上设置切换页面事件,方法函数名为change_content()。
  如果切换页码进行跳转：您可以通过current_page变量得到新的页码，并于location.href进行组装后跳转。
  如果切换页码进行AJAX动态加载：可以通过$(obj_box).children('.page_content').html(新的内容)定义新的页面内容。
要点：
1:关于location.href地址拦截和获取page参数，可参见cuto.js中的代码
这是效果图:
![](demo.png)
