// 海底世界
import {DataBus}from '../databus.js';
let databus = new DataBus();


export class Seabed {
  constructor(){
    this.img = wx.createImage();
    this.img.src = "images/background.png";
    this.x = 0;
    this.y = 0;
    this.w = 800;
    this.h = 600;
  }
  render(){
      databus.ctx.drawImage(this.img,this.x,this.y,this.w,this.h,0,0,databus.canvas.width,databus.canvas.height)
  }
}

