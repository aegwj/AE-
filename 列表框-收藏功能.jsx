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

// 创建按钮
var addButton = panel.add("button", undefined, "添加元素");
var removeButton = panel.add("button", undefined, "移除选中元素");
var favoriteButton = panel.add("button", undefined, "收藏选中元素");
var showFavoritesButton = panel.add("button", undefined, "显示收藏列表");
var showAllButton = panel.add("button", undefined, "显示所有元素");

// 存储所有元素的数组
var allItems = [];
// 存储收藏的元素的数组
var favorites = [];

// 加载设置
if (app.settings.haveSetting("ScriptExample", "AllItems")) {
  var savedAllItems = app.settings.getSetting("ScriptExample", "AllItems");
  allItems = JSON.parse(savedAllItems);
}
if (app.settings.haveSetting("ScriptExample", "Favorites")) {
  var savedFavorites = app.settings.getSetting("ScriptExample", "Favorites");
  favorites = JSON.parse(savedFavorites);
}

// 默认显示所有元素
for (var i = 0; i < allItems.length; i++) {
  listBox.add("item", allItems[i]);
}

// 点击按钮时的处理函数
// 添加元素到列表框
addButton.onClick = function () {
  var newName = prompt("请输入元素名称：", "");
  if (newName) {
    // 添加元素到列表框
    allItems.push(newName);
    listBox.add("item", newName);

    // 保存设置
    app.settings.saveSetting(
      "ScriptExample",
      "AllItems",
      JSON.stringify(allItems)
    );
  }
};

// 移除选中的元素
removeButton.onClick = function () {
  
  for (var i = listBox.items.length - 1; i >= 0; i--) {
    if (listBox.items[i].selected) {
      // 从数组中移除元素
      var index = allItems.indexOf(listBox.items[i].text);
      if (index !== -1) {
        allItems.splice(index, 1);
      }
      listBox.remove(i);
    }
  }

  // 保存设置
  app.settings.saveSetting(
    "ScriptExample",
    "AllItems",
    JSON.stringify(allItems)
  );
};

// 将选中的元素添加到收藏列表中
favoriteButton.onClick = function () {
  
  for (var i = 0; i < listBox.items.length; i++) {
    if (listBox.items[i].selected) {
      favorites.push(listBox.items[i].text);
    }
  }
  // 保存设置
  app.settings.saveSetting(
    "ScriptExample",
    "Favorites",
    JSON.stringify(favorites)
  );
};

// 显示收藏的元素
showFavoritesButton.onClick = function () {
  // 显示收藏的元素
  listBox.removeAll();
  for (var i = 0; i < favorites.length; i++) {
    listBox.add("item", favorites[i]);
  }
};

// 显示所有添加的元素
showAllButton.onClick = function () {
  listBox.removeAll();
  for (var i = 0; i < allItems.length; i++) {
    listBox.add("item", allItems[i]);
  }
};


// 显示用户界面
dialog.show();
