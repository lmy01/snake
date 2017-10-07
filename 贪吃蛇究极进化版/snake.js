/*
* 需求：
* 属性：蛇的初始坐标
* 方法：渲染蛇身，移动，吃食物
*
* */

(function (window) {
  function Snake(map) {
    this.map = map;
    this.size = this.map.size;
    this.color = "#ccc";
    this.direction = "left";
    this.body = [
      {x:16,y:5},
      {x:17,y:5},
      {x:18,y:5},
      {x:19,y:5}
    ]

  }
  Snake.prototype = {
    constructor:Snake,
    render:function () {

      this.move();//当开启定时器时候可以连续运动

      for (var i = 0; i < this.body.length; i++) {
        var div = document.createElement("div");
        div.style.width = this.size + "px";
        div.style.height = this.size + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        div.style.left = this.body[i].x*this.size + "px";
        div.style.top = this.body[i].y*this.size + "px";
        div.style.borderRadius = "50%";
        this.map.div.appendChild(div);
        if (i==0) {
          div.style.background = "url(timg.png)";
          div.style.backgroundSize = "100% 100%";
          div.style.zIndex = 1;
        }
      }
    },
    move:function () {
      var head = this.body[0];
      this.body.pop();
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
      //保存最后一个位置，然后添加给this.body,增长蛇的身体
      var last = this.body[this.body.length-1];
      //last是一个对象，保存的是地址，所以不能直接push(last)
      this.body.push({x:last.x,y:last.y});
    }
  }
  window.Snake = Snake;
})(window)




