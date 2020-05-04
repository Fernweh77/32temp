// 公共状态
let instance
export class DataBus{
  constructor(){
   if(instance){
    return instance;
   }else{
    instance = this;
    this.gameover = false;//游戏状态
    this.canvas;
    this.ctx;//上下文对象
    this.obstaclelist = [];//障碍物数组
    this.timer = null;//游戏状态
   }
  }
  // 重启游戏方法 重置数据
  reset(){
    this.gameover = false;
    this.obstaclelist = [];
    this.timer = null;
  }
}