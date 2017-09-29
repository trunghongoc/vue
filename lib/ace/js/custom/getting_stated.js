var editor;
$('.editor').each(function( index ) {
  editor = ace.edit(this);
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");//thiết lập ngôn ngữ
  editor.getSession().setTabSize(2);//tab size mặc định
  $(this).attr("style", "font-size: 16px;");//font chữ
  editor.session.setUseWrapMode(true);//cài đặt số từ tối đa trên 1 dòng
  editor.session.setWrapLimitRange(90);

  if($(this).hasClass("vd1"))
    editor.insert('<div id="app">\n\t{{ message }}\n</div>\n\n<script>\nvar app = new Vue({\n\tel: \'#app\',\n\tdata: {\n\t\tmessage: \'Hello Vue, I learning you :3\'\n\t}\n})\n</script>')
  else if($(this).hasClass("vd2"))
    editor.insert('<div id="app-2">\n\t<span v-bind:title="message">\n\t\tHover your mouse over me for a few seconds\n\t\tto see my dynamically bound title!\n\t</span>\n</div>\n<script>\n\tvar app2=new Vue({\n\t\tel: \'#app-2\',\n\t\tdata:{\n\t\t\tmessage: \'You loaded this page on \' + new Date().toLocaleString()\n\t\t}\n\t})\n</script>')
  else if($(this).hasClass("vd3"))
    editor.insert('<div id="app-3">\n\t<span v-if="seen">Now you see me</span>\n</div>\n<script>\n\tvar app3=new Vue({\n\t\tel: \'#app-3\',\n\t\tdata:{\n\t\t\tseen: true\n\t\t}\n\t})\n</script>')
  else if($(this).hasClass("vd4"))
    editor.insert('<div id="app-4">\n\t<ol>\n\t\t<li v-for="todo in todos">\n\t\t\t{{todo.text}}\n\t\t</li>\n\t</ol>\n</div>\n\n<script>\n\tvar app4=new Vue({\n\t\tel: \#app-4\',\n\t\tdata:{\n\t\t\ttodos: [\n\t\t\t\t{text: \'Learn JavaScript\'},\n\t\t\t\t{text: \'Learn Vue\'},\n\t\t\t\t{text: \'Build something awesome\'}\n\t\t\t]\n\t\t}\n\t})\n</script>')
  else if($(this).hasClass("vd5"))
    editor.insert('<div id="app-5">\n\t<p>{{message}}</p>\n\t<button v-on:click="reverseMessage">Reverse Message</button>\n</div>\n<script>\n\tvar app5=new Vue({\n\t\tel: \'#app-5\',\n\t\tdata:{\n\t\t\tmessage: \'Hello Vue.js!\'\n\t\t},\n\t\tmethods:{\n\t\t\treverseMessage: function (){\n\t\t\t\tthis.message=this.message.split(\'\').reverse().join(\'\')\n\t\t\t}\n\t\t}\n\t})\n</script>')
  else if($(this).hasClass("vd6"))
    editor.insert('<div id="app-6">\n\t<p>{{message}}</p>\n\t<input v-model="message">\n</div>\n\n<script>\n\tvar app6=new Vue({\n\t\tel: \'#app-6\',\n\t\tdata:{\n\t\t\tmessage: \'Hello Vue!\'\n\t\t}\n\t})\n</script>')
  else if($(this).hasClass("vd7"))
    editor.insert('<ol>\n\t<todo-item></todo-item>\n</ol>\n\n<script>\n\t/* Define a new component called todo-item */\n\tVue.component(\'todo-item\',{\n\t\ttemplate: \'<li>This is a todo</li>\'\n\t})\n</script>')
});
