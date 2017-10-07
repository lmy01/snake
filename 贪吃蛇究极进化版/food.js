/*
* 需求：
* 属性：食物的大小，背景
* 方法：渲染食物、改变位置
*
* */

(function (window) {
  function Food(map) {
    this.map = map;
    this.size = this.map.size;
    this.color = "#ccc";
    this.x = 0;
    this.y = 0;

    this.getPos(); // 创建对象的时候调用一次随机位置方法

  }
  Food.prototype.render = function () {  //创建食物div并且设置css样式

    var div = document.createElement("div");
    div.style.width = this.size + "px";
    div.style.height = this.size + "px";
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    div.style.left = this.x*this.size + "px";
    div.style.top = this.y*this.size + "px";
    this.map.div.appendChild(div);
  };
  Food.prototype.getPos = function () {
    this.x = parseInt(Math.random()*this.map.col);
    this.y = parseInt(Math.random()*this.map.row);
  }
  window.Food = Food;
})(window)



