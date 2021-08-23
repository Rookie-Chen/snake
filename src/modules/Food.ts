// 定义 food 类
class Food {
  ele: HTMLElement;
  constructor() {
    // 获取页面中的 ele, 加! 代表必然存在 
    this.ele = document.getElementById("food")!;
  }
  // 获取 food X坐标
  get X() {
    return this.ele.offsetLeft;
  }
  // 获取 food Y坐标
  get Y() {
    return this.ele.offsetTop;
  }
  change() {
    // 改变 food 的坐标，有效安全坐标：最小0，最大：宽度-本身 = 290
    // 蛇一次移动一格，就是10px，所以 food 的坐标必须是 10 的倍数
    // 随机取整 * 10 必是安全的值
    // 疑问：还要排除蛇占的坐标？
    let x = Math.round(Math.random() * 29) * 10;
    let y = Math.round(Math.random() * 29) * 10;
    this.ele.style.left = x + 'px';
    this.ele.style.top = y + 'px';
  }
}

export default Food;