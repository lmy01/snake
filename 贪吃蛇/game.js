(function (window) {
  function Game() {
    this.version = 1.0;
    this.map = new Map();
    this.food = new Food(this.map);
    this.snake = new Snake(this.map);
    this.timer = null;

    this.render();

  }

  Game.prototype = {
    constructor : Game,
    //开始游戏
    gameStart:function () {
      this.conDirection();
      var that = this;
      this.timer = setInterval(function () {
        that.map.map.innerHTML = "";
        that.food.render();
        that.snake.render();
        that.impact();
        that.gameOver();

      },200)
    },
    render:function () {
      this.food.render();
      this.snake.render();

    },
    //控制snake移动方向
    conDirection : function () {
      var that = this;
      window.onkeydown = function (e) {
        var keyCode = e.keyCode;
        // console.log(keyCode);//left 37  right 39  up 38  down 40
        switch (keyCode){
          case 37:
            that.snake.direction = "left";
            break;
          case 39:
            that.snake.direction = "right";
            break;
          case 38:
            that.snake.direction = "up";
            break;
          case 40:
            that.snake.direction = "down";
            break;

        }
      }

    },

    //判断是否碰撞
    impact:function () {
      var head = this.snake.body[0];
      if (head.x==this.food.x&&head.y==this.food.y) {
        this.snake.eat();
        this.food.getPos();
      }
    },
    //判断游戏是否结束
    gameOver:function () {
      var head=this.snake.body[0]; //蛇头
      if(head.x<0||head.y<0||head.x>this.map.col-1||head.y>this.map.row-1){
        clearInterval(this.timer);//停止定时器
        alert('gameOver !');
      }
    }


  }



  window.Game = Game;
})(window)