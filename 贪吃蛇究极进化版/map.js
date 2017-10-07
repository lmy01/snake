/*
* 需求：
* 属性：地图的列宽，大小，背景
* 方法：渲染地图
*
* */

(function (window) {
  function Map() {
    this.row = 20;
    this.col = 30;
    this.size = 25;
    this.color = "black";
  }
  Map.prototype.render = function () {  //创建div并且添加到页面上
    var div = document.createElement("div");
    this.div = div;
    div.style.width = this.col*this.size + "px";
    div.style.height = this.row*this.size + "px";
    div.style.backgroundColor = this.color;
    div.style.position = "relative";
    document.body.appendChild(div);

  }
  window.Map = Map;
})(window)

