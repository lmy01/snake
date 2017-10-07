(function (window) {

  function Snake(mapObj) {
    //需求：设置snake的长度
    this.size = 25,
    this.color = "hotpink",
    this.map = mapObj;
    this.body = [    //设置初始snake的身体的坐标
      {x:15,y:4},
      {x:16,y:4},
      {x:17,y:4},
      {x:18,y:4}
      ];
    this.direction = "left";

  }

  Snake.prototype = {
    constructor:Snake,
    render:function () {  //初始化snake，四个div就位

      this.move();  //先把x和y位置重新赋值

      for (var i = 0; i < this.body.length; i++) {
        var div = document.createElement("div");
        div.style.backgroundColor = "deepskyblue";
        div.style.borderRadius = "50%";
        div.style.width = this.size + "px";
        div.style.height = this.size + "px";
        div.style.position = "absolute";
        div.style.left = this.body[i].x* this.size + "px";
        div.style.top = this.body[i].y* this.size + "px";
        this.map.div.appendChild(div);

        if (i==0) {
          div.style.backgroundColor = "hotpink";
          div.style.zIndex = 1;   //提高头部的层级
        }
      }
    },
    move:function () {
      for (var i = this.body.length-1; i >0; i--) {
        this.body[i].x = this.body[i-1].x;
        this.body[i].y = this.body[i-1].y;
      }
      var head = this.body[0];
      switch (this.direction){
        case "left":
          head.x-=1;
          break;
        case "right":
          head.x+=1;
          break;
        case "up":
          head.y-=1;
          break;
        case "down":
          head.y+=1;
          break;
      }

    },
    //snake吃食物
    eat:function () {
      var last = this.body[this.body.length-1];//找到最后一个，把位置赋值给新创建的div
      var l = {
        x:last.x,
        y:last.y
      };
      this.body.push(l);
    }

  }

  window.Snake = Snake;
})(window)