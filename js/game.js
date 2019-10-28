// 定义构造函数
function Game() {
  // 游戏中需要一个蛇对象
  this.snake = new Snake();
  // 游戏中需要一个食物对象
  this.food = new Food();
  // 调用食物随机位置方法
  this.food.randomLocation();
  // 调用蛇对象的绘制蛇的方法
  this.snake.drawSnake();
  // 游戏中的分数
  this.scroe = 0;
}

// 给游戏扩展方法-开始游戏
var flag;
Game.prototype.start = function () {
  // 定时器外部的this表示游戏对象
  var that = this;
  // 开启定时器，不断的调用蛇移动
  flag = setInterval(function () {
    // 调用游戏中蛇对象移动的方法
    that.snake.move();
    // 检测蛇是否死亡
    var isDead = that.snake.dead();
    // 判断
    if (isDead) {
      // 停止游戏
      that.stop();
      // 显示游戏结束
      $('.dead').slideDown(500);
      // 按钮失去焦点
      $('#btn1').blur();
      // 有一个对应的获取焦点事件  focus
    }
    // 检测蛇是否吃了食物
    // that.food.x  , that.food.y
    var isEat = that.snake.eat(that.food.x, that.food.y);
    // 判断
    if (isEat) {
      // 增加分数
      that.scroe += 100
      // 设置给输入框
      $('input').val('分数：' + that.scroe);
      // 随机食物位置
      that.food.randomLocation();
    }
  }, 100);

  // 实现按键控制蛇移动方向
  $(document).keydown(function (e) {
    // 获取键码值
    var num = e.keyCode;
    // 判断
    if (num == 37) {
      if (that.snake.direction != 'right') {

        that.snake.direction = 'left';
      }
    } else if (num == 38) {
      if (that.snake.direction != 'bottom') {

        that.snake.direction = 'top';
      }
    } else if (num == 39) {
      if (that.snake.direction != 'left') {

        that.snake.direction = 'right';
      }
    } else if (num == 40) {
      if (that.snake.direction != 'top') {

        that.snake.direction = 'bottom';
      }
    }
  });
}

// 给游戏扩展方法-停止游戏
Game.prototype.stop = function () {
  clearInterval(flag);
}

// 给游戏扩展方法-重新开始游戏
Game.prototype.reset = function () {
  location.reload();
}