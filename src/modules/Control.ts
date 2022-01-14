// 控制器
import Snake from './snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class Control {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = '';
  // 游戏是否结束
  isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  // 初始化
  init() {
    // 监听键盘事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.food.change();
    this.run();
  }
  // 键盘响应函数
  keydownHandler(event: KeyboardEvent) {
    /* 
      ArrowDown,ArrowUp,ArrowRight,ArrowLeft
    */
    // 赋值前判断是否为安全值
    if((event.key).indexOf('Arrow') != -1){
      this.direction = event.key;
    }else{
      return;
    }
    
  }
  // 蛇移动的方法
  run() {
    // 调用的是 get 方法
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 根据 direction 改变坐标
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
    }

    // 吃到食物
    this.checkEat(X, Y);

    // 修改坐标
    try {
      // 这里是 set
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error:any) { // 统一处理碰撞等信息结束游戏
      alert(error.message + 'Game Over');
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  // 判断是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物的位置需要更新
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇的长度+1
      this.snake.changeBody();
    }
  }
}

export default Control;