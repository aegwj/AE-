// 创建主函数，接受一个参数 thisObj
function 主函数(thisObj) {
  // 创建一个新的对象 SL_Data
  var SL_Data = new Object();

  // 创建主界面函数，接受一个参数 thisObj
  function 创建主面板(thisObj) {
    // 如果 thisObj 是一个 Panel 对象，那么 pal 就被赋值为 thisObj，否则 pal 将被赋值为一个新的 Window 对象
    var pal =
      thisObj instanceof Panel
        ? thisObj
        : new Window("palette", "创建新的面板", undefined, {
            resizeable: true,
          });

    // 如果 pal 不为 null，就会向 pal 中添加一个带有一个按钮的组
    if (pal != null) {
      var res =
        "group { orientation: 'column', alignment:['left','top'], createBtn: Button { text:'创建', alignment:['fill','center'] } }";
      pal.grp = pal.add(res);

      // 当这个按钮被点击时，会调用 创建子面板 函数
      pal.grp.createBtn.onClick = function () {
        创建子面板(pal);
      };
      // 返回 pal 对象
      return pal;
    }
  }

  // 创建子界面函数
  function 创建子面板(pal) {
    // 创建一个新的窗口对象，并将其赋值给 SL_Data.newWindow
    SL_Data.newWindow = new Window("palette", "我的新面板", undefined);

    // 在窗口中添加一个 Group 对象
    var group = SL_Data.newWindow.add("group");
    group.orientation = "row"; // 设置为水平排列

    // 在 Group 对象中添加一个列表框
    var listBox = group.add("listbox", undefined, []);
    listBox.size = [150, 400]; // 设置列表框的大小

    // 在 Group 对象中添加一个新的 Group 对象，用于存放按钮
    var buttonGroup = group.add("group");
    buttonGroup.orientation = "column"; // 设置为垂直排列

    // 在 buttonGroup 对象中添加一个按钮，文本为 "创建分组"
    var createGroupButton = buttonGroup.add("button", undefined, "创建分组");
    createGroupButton.size = [60, 30]; // 设置按钮的大小

    // 在 buttonGroup 对象中添加其他按钮，并设置它们的大小
    var deleteGroupButton = buttonGroup.add("button", undefined, "删除分组");
    deleteGroupButton.size = [60, 30];
    var renameGroupButton = buttonGroup.add("button", undefined, "重命名");
    renameGroupButton.size = [60, 30];
    var moveUpButton = buttonGroup.add("button", undefined, "上移");
    moveUpButton.size = [60, 30];
    var moveDownButton = buttonGroup.add("button", undefined, "下移");
    moveDownButton.size = [60, 30];

    // 定义按钮的 onClick 事件处理器
    createGroupButton.onClick = function () {
      // 弹出一个输入框，提示用户输入分组的名称
      var groupName = prompt("请输入分组的名称：", "");

      // 将用户输入的名称添加到列表框中
      listBox.add("item", groupName);

      // 在主面板中添加一个新的按钮，文本为用户输入的名称
      pal.grp.add("button", undefined, groupName);
      pal.layout.layout(true);
    };

    // 定义"删除分组"按钮的 onClick 事件处理器
    deleteGroupButton.onClick = function () {
      // 获取列表框中选定的项目
      var selectedItem = listBox.selection;

      // 如果有选定的项目，则删除它
      if (selectedItem !== null) {
        listBox.remove(selectedItem);
      }
    };

    // 定义"重命名"按钮的 onClick 事件处理器
    renameGroupButton.onClick = function () {
      // 获取列表框中选定的项目
      var selectedItem = listBox.selection;

      // 如果有选定的项目
      if (selectedItem !== null) {
        // 弹出一个输入框，提示用户输入新的名称
        var newName = prompt("请输入新的名称：", "");

        // 将选定的项目的名称更改为用户输入的新名称
        selectedItem.text = newName;
      }
    };

    // 定义"上移"按钮的 onClick 事件处理器
    moveUpButton.onClick = function () {
      // 获取列表框中选定的项目
      var selectedItem = listBox.selection;

      // 如果有选定的项目，并且它不是列表框中的第一个项目
      if (selectedItem !== null && selectedItem.index > 0) {
        // 将选定的项目上移一位
        var temp = listBox.items[selectedItem.index - 1].text;
        listBox.items[selectedItem.index - 1].text = selectedItem.text;
        selectedItem.text = temp;
        listBox.selection = listBox.items[selectedItem.index - 1];
      }
    };

    // 定义"下移"按钮的 onClick 事件处理器
    moveDownButton.onClick = function () {
      // 获取列表框中选定的项目
      var selectedItem = listBox.selection;

      // 如果有选定的项目，并且它不是列表框中的最后一个项目
      if (
        selectedItem !== null &&
        selectedItem.index < listBox.items.length - 1
      ) {
        // 将选定的项目下移一位
        var temp = listBox.items[selectedItem.index + 1].text;
        listBox.items[selectedItem.index + 1].text = selectedItem.text;
        selectedItem.text = temp;
        listBox.selection = listBox.items[selectedItem.index + 1];
      }
    };

    // 显示这个窗口
    SL_Data.newWindow.show();
  }

  // 创建主面板
  var pal = 创建主面板(thisObj);

  // 如果 pal 不为 null，就显示 pal
  if (pal != null && pal instanceof Window) {
    pal.center();
    pal.show();
  } else if (pal != null) {
    pal.layout.layout(true);
  }
}

// 运行主函数
主函数(this);
