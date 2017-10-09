import React, {  Component } from 'react';
import electron from 'electron'

const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')

// const newWindowBtn = document.getElementById('new-window')




class ShuffleButton extends Component {
  openWindow = (event) => {
    const modalPath = path.join('file://', __dirname, './modal.html')
    let win = new BrowserWindow({ width: 400, height: 320 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
  }

  render () {
    return (
      <div className="nav">
        <button onClick={this.openWindow}>Shuffle And Restart</button>
      </div>
    )
  }
}


export default ShuffleButton;
