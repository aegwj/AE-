// 创建一个简单的用户界面
var dialog = new Window("palette", "AE脚本列表框示例", undefined);
dialog.orientation = "row";

// 创建一个列表框
var listBox = dialog.add("listbox", undefined, [], { multiselect: true });
listBox.size = [150, 200];

// 创建一个面板，包含按钮
var panel = dialog.add("panel", undefined, "操作");
panel.orientation = "column";
panel.alignChildren = ["fill", "top"];

// 创建一个按钮
var addButton = panel.add("button", undefined, "添加元素");
var removeButton = panel.add("button", undefined, "移除选中元素");

// 点击按钮时的处理函数
addButton.onClick = function () {
  // 弹出输入框，获取用户输入的元素名称
  var newName = prompt("请输入元素名称：", "");
  if (newName) {
    // 将新元素添加到列表框
    var listItem = listBox.add("item", newName);
  }
};

removeButton.onClick = function () {
  // 移除选中的元素
  for (var i = listBox.items.length - 1; i >= 0; i--) {
    if (listBox.items[i].selected) {
      listBox.remove(i);
    }
  }
};

// 显示用户界面
dialog.show();
