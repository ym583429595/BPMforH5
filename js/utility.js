function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

//var RoutePrefix = "http://180.97.80.232:8899/WorkflowService.asmx/";
var RoutePrefix = "http://218.75.72.105:8899/WorkflowService.asmx/";

function GetUserId()
{
    if (mui.os.ios || mui.os.android) {
        //return GLH5Proto.nativeUserId();
        return 'yue.lou'
    } else
    {
        return 'yue.lou'
    }
}

function Request(apiname,type,data,fnsuccess,fnerror)
{
    mui.ajax(RoutePrefix + apiname, {
        data: data,
        //dataType: 'json',//服务器返回json格式数据
        type: type,//HTTP请求类型
        timeout: 10000,//超时时间设置为10秒；
        //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (data) {
            fnsuccess(data);
        },
        error: function (xhr, type, errorThrown) {
            //异常处理；
            fnerror(xhr, type, errorThrown);
        }
    });
}

function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        if (str.indexOf("&") != -1) {
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        else {
            var key = str.substring(0, str.indexOf("="));
            var value = str.substr(str.indexOf("=") + 1);
            theRequest[key] = decodeURI(value);
        }
    }
    return theRequest;
}