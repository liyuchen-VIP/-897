// 定义蛇构造函数
function Snake() {
  // 属性
  this.direction = 'right';  // left right top bottom
  // 定义一组div需要的位置数据 和  蛇头或蛇身的数据
  this.datas = [
    { x: 3, y: 0, className: 'snake-head' },
    { x: 2, y: 0, className: 'snake-body' },
    { x: 1, y: 0, className: 'snake-body' },
  ];
}

// 定义方法→绘制一条蛇
Snake.prototype.drawSnake = function () {
  // 1. 取出当前对象中的蛇节数据
  var datas = this.datas;
  // 2. 循环遍历蛇节数据
  for (var i = 0; i < datas.length; i++) {
    // 3. 取出一个数据对象
    var obj = datas[i];
    // 4. 创建一个div，并且设置div的位置以及类名，追加到地图
    $('<div></div>')
      .css({
        left: obj.x * 20,
        top: obj.y * 20
      })
      .addClass(obj.className)
      .appendTo('.map');
  }

}

// 定义方法→蛇移动
Snake.prototype.move = function () { 
  // 1. 取出蛇节数据
  var datas = this.datas;
  // 2. 循环遍历蛇节数据，倒着循环
  for (var i = datas.length - 1; i > 0; i--) {
    // 3. 设置后一节数据中x和y 为 前一节的x和y
    datas[i].x = datas[i - 1].x;
    datas[i].y = datas[i - 1].y;
  }
  // 3. 根据方向设置蛇头位置
  // 取出蛇头
  var head = datas[0];
  // 4. 判断方向
  if (this.direction == 'right') {
    head.x += 1;
  }else if (this.direction == 'left') {
    head.x -= 1;
  }else if (this.direction == 'top') {
    head.y -= 1;
  }else if (this.direction == 'bottom') {
    head.y += 1;
  }
  // 清除原有和蛇相关的所有div
  $('.snake-body,.snake-head').remove();
  // 根据数据重新绘制蛇
  this.drawSnake();

};

// 定义方法→蛇撞墙死
Snake.prototype.dead = function () {
  // 1. 获取蛇头数据
  var head = this.datas[0];
  // 2. 判断
  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= $('.map').width()/20||
    head.y >= $('.map').height()/20
  ) {
    return true;
  } else {
    return false;
  }
};

// 蛇吃食物
Snake.prototype.eat = function (a,b) {
  // 获取蛇头数据
  var head = this.datas[0];
  // 判断
  if (head.x * 20 == a && head.y * 20 == b) {
    // 增加一节
    this.datas.push({className:'snake-body'});
    return true;
  } else {
    return false;
  }
  
};