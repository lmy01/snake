(function (window) {
  function Map() {

    //需求：创建地图，并且渲染到页面
    this.row = 20;
    this.col = 30;
    this.size = 25;
    this.color = "cyan";
    this.map = null;

    this.render();
  }

  Map.prototype = {
    construstor:Map,
    render:function () { //渲染页面
      //根据行列和宽度，创建背景大盒子div，并且设置背景色和宽高
      var div = document.createElement("div");
      this.map = div;
      div.style.backgroundColor = this.color;
      div.style.width = this.col*this.size + "px";
      div.style.height = this.row*this.size + "px";
      div.style.position = "relative"; //设置绝对定位，因为食物和蛇都要在这个背景上

      //将设置好的div添加到页面上
      document.body.appendChild(div);
      this.div = document.querySelector("div");
    }
  }

  window.Map = Map;
})(window)