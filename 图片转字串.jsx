// 貌似用PY做也不错
// 图片转码(编码)成Base64字符串在线工具   这个不支持


function fileToBinaryString() {
    var input = File.openDialog ("选择一个文件");
    if(input === null) return;
    
    input.encoding = "BINARY";
    input.open ("r");
    var content = input.read ();
    //content = strfun (content, "\n", "")
    //content = strfun (content, "\r", "")
    input.close();
    
    var c = content
    var c = content.toSource();
    var v = input.name.replace (/\W/g, "").replace (/^\d+/, "");
    c = c.substring (13, c.length-3)
    
    var o = new File(input.fsName + ".txt");
    o.open("w");
    o.write (c);
    o.close();
    }

fileToBinaryString ()

function strfun(str,keyword,key)
{
   if(str.indexOf(keyword)>-1)
   {
       return str.split (keyword).join (key);
    }
    else
    {
        return str;
     }
 }