// 创建一个新的可调整大小的窗口
var myWindow = new Window("palette", "My Window", undefined, {
  resizeable: true,
});

// 设置要显示的图像文件的路径
var myImageFile = File(Folder.desktop.fullName + "/132.png");

// 创建一个新的图片控件，并设置它的图像为我们的文件
var myImage = myWindow.add("image", undefined, myImageFile);

// 设置图片控件的大小
myImage.size = [200, 200]; // 这里的200, 200是图片的宽度和高度，你可以根据需要调整这些值

// 显示窗口
myWindow.layout.layout(true); // 强制窗口重新计算并应用其布局。
myWindow.layout.resize(); // 窗口的大小将被调整为刚好能够显示所有内容的大小
myWindow.onResizing = myWindow.onResize = function () {
  this.layout.resize();
}; // 窗口的大小都会被调整为刚好能够显示所有内容的大小。
myWindow.show();
