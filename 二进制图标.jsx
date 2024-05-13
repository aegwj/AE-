// all floating window elements
var logoBinary =
  "\x89PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00.#\x00\x00.#\x01x\u00A5?v\x00\x00\x01\u00A5IDATH\u0089\u00BD\u0096=K\x1DA\x14\u0086\x1F\u00C3U\f\u0082\u0085\u0098\u00D8\u008A\x10\x11\u00D1 \x18\f\u0081`kc'$XYX\u00F8',\u0094X\tb\u0093\u00C6^\u00FC\x05)\u0082\x18H\x11\u0092\u0080\u00DFE\x1A\u00C1\u00D2 \u00E2G!xE\u0094'\u00C5\u009D\x0B\u00C3\u00B2w?\u00C4\u009B\x17\u0086\u009D\u00D9}\u00CF\u00BC\u00E7\u00EC9sv[T\u009A\u008DgMW\x00*\x19\u00CF>\x00S@?\u00D0\rT\u0081c\u00E0'\u00B0\x02\u00DC\x14VQ\u0093\u00A3O\u00DD2\x1B\x7F\u00D5\u00E9\x14\u00DB\u00D4\u00D1\u0092\u00C8\u00C9\x10\u00B0\r\u00B4\u0087\u00F5\x19\u00F0\x1B8\x01:\u0080\x11\u00E0u\u00C4_\x00\x16\u00CBDRQ\u00CF#o?\u00AB\x1D)\u009E}T\u00AB\x11o\"/\u0092x\u00B1\x14\x19\u00CE\u00E7\x18\x0E\u00AAw\u0081{VF\u00E4&\x18m\x17|\u00D7s\u0091SSEE\u00EA\u0098,\u009A\u00D0\x10\u0085\u00EAz\x16/\u00ED\u009C\u00EC\x15.\u00CDZQ\x00\u00F4e\u0091\u00D2D\u00EEK\u0088T\u00C3\u00B5\u00B5\u00ACHo\t\u0091z9\u009F\u0096\x15\u0099-(0\f\f\u0084\u00F9\u008FLf\u0094\u00A0\u00CD(\u00F9#\x05\u0092\u00BE\x1B\u00F1{\u008AV\u00D7\u00AB\u00C8\u00E8\u00DA\u00C6\u0087\u00EC\u0085\u00FA%\u00F0\x1E\u00D4\u0099<\x87\u00B2j_u\u00C3Z\u008Fz\x1FD?\u00A9\u0097\t\u00CE\u009B\u00B2\"\u00A8\u00B3\u00EA\u0085\u00F9XS\x0F\u00C2|G}YF\x04\u00B5K]U\u00AFR6\u00FF\u00AE\u008E\x07\u00DErt\u00FFD}\u009E\u00B6_\u00B2\x0B'\u00D1I\u00AD3\u00F7\x00\u00B7\u00C0\x11\u00B5oJ\x1D\u00DD\u00C0W`4\u00AC\x0F\u00811\u00E0\u00AEQu=vT\u00D4_QD\u00FB&\u00BA\u00F7S\u0088\u00D4\u00C7N$\u00F4Gmk\u0086H2\u00A2s\u00F5\u00AD\r\x1A\u00E4cq\x0F\u00BC\x03\u00BE\x01\u00D7\u00E1^;\u0090\u009B\u00F8'\u00C1\x7F\u00F9%\u00FA\x07\u00E1gH\u00F02\u00F2@W\x00\x00\x00\x00IEND\u00AEB`\u0082";

function myScript(thisObj) {
  function myScript_buildUI(thisObj) {
    var myPanel =
      thisObj instanceof Panel
        ? thisObj
        : new Window("palette", "Dockable Elements", undefined, {
            resizeable: true,
          });

    res =
      "group{orientation:'row',\
            tabbedPanel: Panel{type:'tabbedpanel',\
                tabOne: Panel{type:'tab', text:'Tab 1',\
                    logo: Image{},\
                    logoBtn: IconButton {},\
                    tempText: StaticText{text:'Static Text'},\
                    checkbox: Checkbox{text:'Checkbox'},\
                    radio: RadioButton{text:'My Radio'},\
              },\
          },\
       }";

    myPanel.grp = myPanel.add(res);

    //Defaults
    myPanel.grp.tabbedPanel.tabOne.logo.image = logoBinary;
    myPanel.grp.tabbedPanel.tabOne.logoBtn.iconbutton = logoBinary;

    myPanel.layout.layout(true);

    return myPanel;
  }

  var myScriptPal = myScript_buildUI(thisObj);

  if (myScriptPal != null && myScriptPal instanceof Window) {
    myScriptPal.center();
    myScriptPal.show();
  }
}
myScript(this);






// 非规格字符串

// 创建主窗口
var mainWindow = new Window("palette", "", undefined);
mainWindow.orientation = "column";


var logo = mainWindow.add("iconbutton", undefined, logoBinary);
var logo = mainWindow.add("image", undefined, logoBinary);



// 居中显示主窗口
mainWindow.center();
mainWindow.show();
