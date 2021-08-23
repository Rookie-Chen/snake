class Snake {
  // 整体容器
  ele: HTMLElement;
  // 表示蛇头的元素
  head: HTMLElement;
  // 表示身体（包含蛇头）
  bodies: HTMLCollection;
  constructor() {
    this.ele = document.getElementById('snake')!;
    this.head = document.querySelector('#snake>div') as HTMLElement;
    // 直接使用querySelectorAll 返回的是 nodeList 对象，属于静态对象，顾使用下面的方法
    this.bodies = this.ele.getElementsByTagName('div');
  }
  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇头的坐标
  set X(val: number) {
    if (this.X === val) {
      return;
    }
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 水平方向禁止调头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      // 进入循环说明至少存在2个节点并且发生了调头
      if (val > this.X) { // 如果新值大于旧值，说明应该继续向左走
        val = this.X - 10;
      } else {
        val = this.X + 10;
      }
    }

    // 改变身体的位置，需要先从后面开始改变位置，最后修改蛇头的位置，不然会出现bug
    this.moveBody();
    this.head.style.left = val + 'px';
    // 检测是否碰撞本身
    this.checkCollision();

  }
  set Y(val: number) {
    if (this.Y === val) {
      return;
    }
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 垂直方向禁止调头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      // 进入循环说明至少存在2个节点并且发生了调头
      if (val > this.Y) { 
        val = this.Y - 10;
      } else {
        val = this.Y + 10;
      }
    }

    // 改变身体的位置
    this.moveBody();
    this.head.style.top = val + 'px';
    // 检测是否碰撞本身
    this.checkCollision();
  }
  // 吃到食物身体变长的方法
  changeBody() {
    this.ele.insertAdjacentHTML('beforeend', "<div></div>")
  }
  // 身体位置移动
  moveBody() {
    /* 
      从后往前移动：
          ex： 4 代替 3的位置
               3 代替 2的位置
    */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前面一个的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 设置当前一节的位置
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查自身发生碰撞
  checkCollision() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入循环代表蛇头和身体接触，抛出错误
        throw new Error('撞到自己了')
      }
    }
  }
}

export default Snake;