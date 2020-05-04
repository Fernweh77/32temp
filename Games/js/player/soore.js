import {DataBus}from '../databus.js';
let databus = new DataBus();

export class Score{
  constructor(){
    this.text = "integral:0";
    this.x = 30;
    this.y = 100;
  }
  render(){
    console.log(databus.ctx)
    databus.ctx.fillStyle = "#00ff00"
    databus.ctx.font = "28px cursive"
    databus.ctx.fillText(this.text,this.x,this.y)
  }
}