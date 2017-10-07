/*
需求：
设置地图的样式：大小，颜色
设置方法：渲染

*/

(function (window) {
  function Map() {

    this.row = 20;  //行数
    this.col = 30;  //列数
    this.size = 25; //行宽和列宽
    this.color = "green"; //地图颜色
    this.map = null;
  }

  Map.prototype.render = function () {
    var div  = document.createElement("div");
    this.map = div;
    div.style.backgroundColor = this.color;
    div.style.width = this.col*this.size + "px";
    div.style.height = this.row*this.size + "px";
    div.style.position = "relative";   //将地图盒子设为相对定位，因为后面的食物和蛇都要绝对定位
    document.body.appendChild(div);
  }


  window.Map = Map;

})(window)


