(function (window) {


  function Food(mapObj) {
    //需求：食物的大小，位置随机
    //将map对象传入，以便将食物div添加到map盒子里，并且限制食物div的随机位置，不能超出map大盒子
    this.x = 1;
    this.y = 1;
    this.size = 25;
    this.color = "yellow";
    this.map = mapObj;

    this.getPos();//首先随机获取位置，给this.x和this.y重新赋值


  }
  Food.prototype = {
    constructor:Food,
    render:function () {
      var div = document.createElement("div");
      div.style.backgroundColor = this.color;
      div.style.width = this.size + "px";
      div.style.height = this.size + "px";
      div.style.position = "absolute";
      div.style.left = this.x*this.size + "px"; //随机生成left值
      div.style.top = this.y*this.size + "px";

      //将食物div添加道map大盒子里
      this.map.div.appendChild(div);
    },
    getPos:function () {  //渲染食物，获取随机位置
      this.x = parseInt(Math.random()*this.map.col); //随机生成x
      this.y = parseInt(Math.random()*this.map.row); //随机生成y

    }
  }

  window.Food = Food;
})(window)