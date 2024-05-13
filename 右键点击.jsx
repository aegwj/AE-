// 创建一个新的窗口对象
var myWindow = new Window("palette", "我的脚本", undefined);

// 创建一个面板，用于演示鼠标点击事件
var myPanel = myWindow.add("panel", undefined, "点击我");
myPanel.size = [200, 100];

// 添加一个文本框
var myText = myPanel.add("statictext", undefined, "右键点击这里");

// 添加鼠标点击事件处理器
myPanel.addEventListener("click", function (event) {
  // 判断是否是鼠标右键点击
  if (event.button === 2) {
    alert("检测到鼠标右键点击！");
  }
});

// 显示窗口
myWindow.show();
