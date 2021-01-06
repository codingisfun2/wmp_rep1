//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    nav1: 'My Notes',
    items: [
      'Jan 10th JG1 @ 5-6:30pm', 
      'Jan 10th BG1 @ 7:15-8:45pm', 
      'Jan 17th JG2 @ 5-6:30pm', 
      'Jan 17th BG2 @ 7:15-8:45pm'
    ]
  }, 
  buttonHandler(event) {
    wx.navigateTo({
      url: '../second/second'
    });
  }  
});
