/*
需求：
属性：所有对象
方法：
    游戏开始
    渲染
    用户操作
    吃食物
    游戏结束:撞到墙，撞到自己
*/

(function (window) {
  function Game() {
    this.map = new Map();
    this.food = new Food(this.map);
    this.snake = new Snake(this.map);
    this.timer = null;

    this.gameStart(); //可以直接在创建函数的时候调用

  }

  Game.prototype = {
    constructor: Game,
    gameStart: function () {
      //所有对象入场
      this.map.render();
      this.food.render();
      this.snake.render();
      this.render();
    },
    render: function () {
      var that = this;
      //开启定时器
      this.timer = setInterval(function () {
        that.map.map.innerHTML = "";
        that.food.render();
        that.snake.render();
        that.userControl();
        that.impact();
        that.gameOver();
      }, 400)

    },
    userControl: function () {
      var that = this;
      window.onkeydown = function (e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
          case 37 :
            that.snake.direction = "left";
            break;
          case 38 :
            that.snake.direction = "up";
            break;
          case 39 :
            that.snake.direction = "right";
            break;
          case 40 :
            that.snake.direction = "down";
            break;
        }
      }

    },
    impact: function () {
      var head = this.snake.body[0];
      if (head.x == this.food.x && head.y==this.food.y) {
        this.food.getPos();
        this.snake.eat();
      }
    },
    gameOver: function () {
      var head = this.snake.body[0];
      if (head.x==-1||head.y==-1||head.x==30||head.y==20) {
          clearInterval(this.timer);
          alert("游戏结束");
      }else {
        for (var i = 0; i < this.snake.body.length; i++) {
          if (i!=0&&head.x==this.snake.body[i].x&&head.y == this.snake.body[i].y) {
            clearInterval(this.timer);
            alert("游戏结束");
            break;
          }
        }
      }

    }
  }


  window.Game = Game;
})(window)


