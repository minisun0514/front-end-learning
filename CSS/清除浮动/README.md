# 清除浮动

清除浮动主要是为了解决，父元素因为子级元素浮动引起的内部高度为0的问题

## 浮动的影响

如下，我给父盒子设置一个boder，内部放两个盒子一个big 一个small，未给big和small设置浮动，则他们会默认撑开父盒子

```html
<head>
    <style>
        .container {
            border: 1px solid #000;
        }
        .big {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            /* float: left; */
        }
        .small {
            width: 100px;
            height: 100px;
            background-color: pink;
            /* float: left; */
        }
        .box {
            height: 100px;
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="big"></div>
        <div class="small"></div>
    </div>
    <div class="box"></div>
</body>
```

当我给内部两个盒子加上float属性的时候,底部深蓝色盒子就会顶上来，然后父盒子因为没设置高度，变成一条线，big和small已经浮动了

总结一下：当父元素不给高度的时候，内部元素不浮动时会撑开。而浮动的时候，父元素变成一条线。

这时候很多人会想到新建标签clear：both和float方法，但是这两种方法并不推荐使用！

什么是clear：both

clear：both：本质就是闭合浮动， 就是让父盒子闭合出口和入口，不让子盒子出来

## 清楚浮动的方法

### 一、额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）

如果我们清除了浮动，父元素自动检测子盒子最高的高度，然后与其同高。

优点：通俗易懂，方便

缺点：添加无意义标签，语义化差

不建议使用。

### 二、父级添加overflow属性（父元素添加overflow:hidden）（不推荐）

通过触发BFC方式，实现清除浮动

```css
    .fahter{
        width: 400px;
        border: 1px solid deeppink;
        overflow: hidden;
    }
```

优点：代码简洁

缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素

不推荐使用

### 三、使用after伪元素清除浮动（推荐使用）

```html
<head>
    <style>
        .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
            content: "";
            display: block;
            height: 0;
            clear:both;
            visibility: hidden;
        }
        .clearfix{
            *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
        }
    </style>
 </head>
<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
</body>
```

优点：符合闭合浮动思想，结构语义化正确

缺点：ie6-7不支持伪元素：after，使用zoom:1触发hasLayout.

### 四、使用before和after双伪元素清除浮动

```html
<head>
    <style>
        .clearfix:after,.clearfix:before{
            content: "";
            display: table;
        }
        .clearfix:after{
            clear: both;
        }
        .clearfix{
            *zoom: 1;
        }
    </style>
 </head>
<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
</body>
```

优点：代码更简洁

缺点：用zoom:1触发hasLayout.

推荐使用
