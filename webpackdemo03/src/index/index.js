//index.js 语法（common.js）
//const greeter = require('./greeter')
//document.querySelector('#root').appendChild(greeter())
import React from 'react'
import {render} from 'react-dom'
import GreeterComponent from './greeter'
render(<GreeterComponent/>,document.getElementById('root'))