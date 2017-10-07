/*
需求：
设置食物的样式：大小，颜色
设置方法：渲染、随机生成位置(不可写在一个方法里，因为后期定时器要用到渲染，不必再随机位置）

*/

(function (window) {
  function Food(map) {
  this.map = map;
  this.size = this.map.size;
  this.color = "yellow";
  this.x = 0;  //生成随机left位置
  this.y = 0;  //生成随机top位置

  this.getPos();
  //不能写在render方法里，因为定时器每循环一次都要重新渲染food，如果写在一起，每次都会重新随机位置


  }
  Food.prototype.render = function () {
    var div = document.createElement("div");
    div.style.backgroundColor = this.color;
    div.style.width = this.size + "px";
    div.style.height = this.size + "px";
    div.style.position = "absolute";
    div.style.left = this.x*this.size + "px";
    div.style.top = this.y*this.size + "px";
    this.map.map.appendChild(div);
  }
  Food.prototype.getPos = function () {
    this.x = parseInt(Math.random()*this.map.col);
    this.y = parseInt(Math.random()*this.map.row);
  }

  window.Food = Food;
})(window)