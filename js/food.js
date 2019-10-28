// 定义一个构造函数
function Food() {
  // 属性
  // 食物对象记录的食物横向位置
  this.x = 0;
  // 食物对象记录的食物纵向位置
  this.y = 0;
  // 创建一个食物需要的div
  this.div = $('<div></div>').addClass('food').appendTo('.map');
}


// 食物随机位置的方法
Food.prototype.randomLocation = function () {
  // 1. 计算横向最大的格子数。  地图的宽度/20   maxXNum
  var maxXNum = $('.map').width() / 20;
  // 2. 计算纵向最大的格子数。  地图的高度/20   maxYNum
  var maxYNum = $('.map').height() / 20;
  // 横向随机的格子数范围 [0,maxXNum);
  // 纵向随机的格子数范围 [0,maxYNum);
  // 3. 横向位置：随机出一个格子数 * 20
  this.x = parseInt(Math.random() * maxXNum) * 20 ;
  // 4. 纵向位置：随机出一个格子数 * 20
  this.y = parseInt(Math.random() * maxYNum) * 20 ;
  // 5. 把记录好的位置设置给食物对应的div的样式的left 和 top
  this.div.css({
    left: this.x,
    top:this.y
  });
};