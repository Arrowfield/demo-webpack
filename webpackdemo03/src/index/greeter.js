//greeter.js (语法common.js)
//var config = require('./config.json')
//module.exports = function(){
//  var greeter = document.createElement('div')
//  greeter.textContent = config.greetText
//  return greeter
//}
//使用es6的语法
import React,{Component} from 'react'
import config from './config.json'
export default class GreeterComponent extends Component{
  render(){
    return <div>{config.greetText}</div>
  }
}