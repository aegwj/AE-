var palette =
  this instanceof Panel
    ? panelGlobal
    : new Window("palette", undefined, undefined, { resizeable: true });

palette.text = "Panel";
palette.orientation = "column";
palette.preferredSize.width = 500;
palette.preferredSize.height = 300;

buttomnum = 24; //按钮数量

//创建30个尺寸50x50的按钮
var btn = new Array();
for (var b = 1; b <= buttomnum; b++) {
  btn[b] = palette.add("button", undefined, undefined);
  btn[b].preferredSize.width = 50;
  btn[b].preferredSize.height = 50;
  btn[b].text = b;
}
var buttomSpace = 10; //按钮间隔
var btnX = btn[1].preferredSize.width + buttomSpace; //一个按钮摆放宽度
var btnY = btn[1].preferredSize.height + buttomSpace; //一个按钮摆放高度

palette.onResizing = palette.onResize = function () {
  var buttonsPerRow = Math.floor(palette.size.width / btnX); //计算界面宽度下一行最多可以放下的按钮数量

  if (buttonsPerRow > buttomnum) {
    buttonsPerRow = buttomnum;
  }

  // 左边多余间距(用来按钮居中)
  var letfSpace = (palette.size.width - buttonsPerRow * btnX + buttomSpace) / 2;

  for (var c = 0; c < buttomnum; c++) {
    if (buttonsPerRow < 2) {
      //判断界面大小，如果宽度小于2个按钮，则按一列排，中间无间隔
      btn[c + 1].location = [0, c * 50];
      btn[c + 1].size.width = palette.size.width;
      btn[c + 1].size.height = 50;
    } else if (buttonsPerRow >= buttomnum) {
      // 如果界面能容纳所有按钮, 则一行排列, 并且无间隔
      palette.size.height = btnY;
      btn[c + 1].location = [(palette.size.width / buttonsPerRow) * c, 0];
      btn[c + 1].size.height = 50;
      btn[c + 1].size.width = palette.size.width / buttonsPerRow;
    } else {
      // 如果界面宽度大于2个按钮,则按上述排列，按钮大小50x50
      for (var b = 1; b <= buttomnum; b++) {
        if (b * btnX <= palette.size.width) {
          //判断一行是否放满
          var myBNum = b + buttonsPerRow * c; //目前要摆放的按钮序号
          if (myBNum > buttomnum) {
            myBNum = buttomnum + 1;
            break;
          }
          btn[myBNum].size.width = btn[myBNum].preferredSize.width;
          btn[myBNum].location = [btnX * (b - 1) + letfSpace, btnY * c]; //设置按钮位置
        }
      }
    }
  }
};

palette.layout.layout(true);
palette.layout.resize();

if (palette instanceof Window) {
  palette.center();
  palette.show();
}
