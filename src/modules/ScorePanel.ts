// 计分牌
class ScorePanel {
  // 初始化分数
  score = 0;
  level = 1;

  scroeEle: HTMLElement;
  levelEle: HTMLElement;
  // 最高等级
  maxLevel: number;
  // 升级所需的分数
  upScore: number;
  constructor(maxLevel: number = 10,upScore: number =10) {
    this.scroeEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  // 改变分数
  addScore() {
    this.scroeEle.innerHTML = ++this.score + '';
    // 升级
    if(this.score % this.upScore === 0){
      this.levelUp();
    }
  }
  // 提升等级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;