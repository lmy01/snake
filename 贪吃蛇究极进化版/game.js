/*
* 需求：
* 属性：每个对象
* 方法：游戏开始，渲染（开启定时器）、碰撞、用户控制、游戏结束
*
* */

(function (window) {
  function Game() {
    this.map = new Map();
    this.food = new Food(this.map);
    this.snake = new Snake(this.map);
    this.timer = null;
  }

  Game.prototype = {
    constructor: Game,
    gameStart: function () {
      this.map.render();
      this.food.render();
      this.snake.render();
      this.render();
    },
    render: function () {
      var that = this;
      this.timer = setInterval(function () {
        that.map.div.innerHTML = "";
        that.food.render();
        that.snake.render();
        that.userControl();
        that.impact();
        that.gameOver();

      }, 500)
    },
    userControl: function () {
      var that = this;
      window.onkeydown = function (e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
          case 37:
            that.snake.direction = "left";
            break;
          case 38:
            that.snake.direction = "up";
            break;
          case 39:
            that.snake.direction = "right";
            break;
          case 40:
            that.snake.direction = "down";
            break;
        }
      }
    },
    impact: function () {  //吃食物
      var head = this.snake.body[0];
      if (this.food.x == head.x && this.food.y == head.y) {
        this.snake.eat();
        this.food.getPos();
      }
    },
    gameOver: function () {
      var head = this.snake.body[0];
      if (head.x == -1 || head.x == this.map.col || head.y == -1 || head.y == this.map.row) {
        clearInterval(this.timer);
        this.create();
      } else {
        for (var i = 0; i < this.snake.body.length; i++) {
          if (i != 0 && head.x == this.snake.body[i].x && head.y == this.snake.body[i].y) {
            clearInterval(this.timer);
            this.create();
          }
        }
      }
    },
    create: function () {
      var div = document.createElement("div");
      div.innerHTML = "GAME OVER";
      div.style.width = this.map.col * this.map.size + "px";
      div.style.height = this.map.row * this.map.size + "px";
      div.style.backgroundColor = "gray";
      div.style.textAlign = "center";
      div.style.lineHeight = this.map.row * this.map.size + "px";
      div.style.opacity = 0.5;
      div.style.fontSize = "80px";
      div.style.position = "absolute";
      div.style.left = 0;
      div.style.top = 0;
      div.style.zIndex = 100;
      this.map.div.appendChild(div);
    }
  }
  window.Game = Game;
})(window)

