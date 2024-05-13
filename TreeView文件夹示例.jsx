// 定义资源规格字符串
var res =
  "dialog { \
    orientation: 'column', \
    alignChildren: ['fill', 'top'], \
    text: 'Folder TreeView', \
    treeview: TreeView { size: [300, 300] }, \
    sortButton: Button { text: 'Sort Items' } \
}";

// 使用资源规格字符串创建窗口
var dialog = new Window(res);

// 创建 TreeView 对象
var treeview = dialog.treeview;

// 定义一个函数来递归构建文件夹树
function buildFolderTree(folder, parentNode) {
  // 声明变量用于存储脚本的完整路径、列表项和图标文件
  var fullName, item, iconFile;
  var folderNode = parentNode.add("node", folder.name);

  // 获取文件夹中的所有文件和文件夹，并进行排序
  var filesAndFolders = folder.getFiles().sort();

  // 遍历文件夹内容
  for (var i = 0; i < filesAndFolders.length; i++) {
    var currentItem = filesAndFolders[i];
    fullName = currentItem.fsName;

    // 如果是文件夹，则递归构建子文件夹树
    if (currentItem instanceof Folder) {
      buildFolderTree(currentItem, folderNode);
    } else if (currentItem instanceof File) {
      // 检查文件扩展名是否为 jsx、jsxbin 或 js
      var fileExtension = currentItem.name.split(".").pop().toLowerCase();
      if (["jsx", "jsxbin", "js"].indexOf(fileExtension) !== -1) {
        // 如果是文件，则将文件添加到树状视图
        item = folderNode.add("item", currentItem.name);

        // 构建脚本图标文件路径
        iconFile = File(fullName.replace(/.(js|jsx|jsxbin)$/, ".png"));

        // 验证图标文件存在且是有效的图像数据
        if (iconFile.exists) {
          try {
            var icon = new File(iconFile);
            item.icon = icon;
          } catch (e) {
            // 发生错误时进行处理
            alert("Error setting icon: " + e.toString());
          }
        }
      }
    }
    // 这里可以根据需要添加其他类型的文件处理
  }
}

// 为排序按钮添加点击事件处理函数
dialog.sortButton.onClick = function () {
  // 清空TreeView
  treeview.removeAll();

  // 重新构建文件夹树，并进行排序
  buildFolderTree(selectedFolder, treeview);

  // 刷新对话框
  dialog.layout.layout(true);
};

// 让用户选择文件夹
var selectedFolder = Folder.selectDialog("Select a folder");

if (selectedFolder) {
  // 添加根文件夹
  buildFolderTree(selectedFolder, treeview);

  // 显示对话框
  dialog.show();
} else {
  alert("No folder selected. The script will now exit.");
}
