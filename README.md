## JS库简介

dd该库为一些常用的函数，采用ES6语法编写，如需适配低级浏览器，请自行babel一下。来源于各路大神的博客以及本人编写。

## 使用方法

使用script标签引入库，然后使用fun这个全局对象里封装的方法即可。

举个简单的栗子：

在html文件中导入这两个标签

```html
<script src="./fun.js"></script>
<script>
    console.log(fun.add(1,2,3))
</script>
```

如此即可使用add方法。

## API文档

**add (a, ...b)：**

​	将输入的数进行累加并返回。



