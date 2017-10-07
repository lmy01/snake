/*
需求：
设置snake的样式：身体的坐标数组
设置方法：渲染，移动，吃食物长身体

*/

(function (window) {
  function Snake(map) {
    this.size = map.size;
    this.map = map;
    this.direction = "left";
    this.body = [
      {x:18,y:4},
      {x:19,y:4},
      {x:20,y:4},
      {x:21,y:4}
      ]
  }
  Snake.prototype = {
    constructor:Snake,
    render:function () {

      this.move(); //调用move方法，每调用一次render方法，snake就会移动一步

      //将每个坐标赋值给相应的盒子
      for (var i = 0; i < this.body.length; i++) {
        var div = document.createElement("div");
        div.style.width = this.size + "px";
        div.style.height = this.size + "px";
        div.style.backgroundColor = "yellow";
        div.style.borderRadius = "50%";
        div.style.position = "absolute";
        div.style.left = (this.body[i].x)*this.size + "px";
        div.style.top = (this.body[i].y)*this.size + "px";

        if (i==0) {
          div.style.background = "url(timg.png)";
          div.style.backgroundSize = "100% 100%";
          div.style.zIndex = 1;
        }
        this.map.map.appendChild(div);
      }
    },

    move:function () {
      var head = this.body[0];

      this.body.pop();//删除this.body中最后一个元素
      switch (this.direction){
        case "left":
          this.body.unshift({x:head.x-1,y:head.y});
          break;
        case "right":
          this.body.unshift({x:head.x+1,y:head.y});
          break;
        case "up":
          this.body.unshift({x:head.x,y:head.y-1});
          break;
        case "down":
          this.body.unshift({x:head.x,y:head.y+1});
          break;

      }
    },

    eat:function () {
      //只需要给this.body添加一个元素就可以长身体
      var last = this.body[this.body.length-1]; //将最后一个元素的坐标保存下来给this.body
      this.body.push({x:last.x,y:last.y});
    }

  }


  window.Snake = Snake;
})(window)
