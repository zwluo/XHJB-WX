// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    title: "",
    content: [],
    narrator: "",
    recorder: ""
  },
  onLoad(options) {
    var story = wx.getStorageSync(options.id);

    var taleClass = "tale-content";
    if ("2" == options.type) {
      taleClass = "tale-content ballad";
    } else if ("1502" == options.id) {
      taleClass = "tale-content stastics";
    }

    var showWorker = "showWorker";
    if ("3" == options.type || "4" == options.type) {
      showWorker = "hideWorker";
    }

    this.setData({
      title: story.title,
      content: story.content,
      narrator: story.narrator,
      recorder: story.recorder,
      taleClass: taleClass,
      showWorker: showWorker
    })
  }
})
