(function(){var c=function(){var e=[].slice.call(arguments);e.push(c.options);if(e[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)){e[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm,function(h,i){var f=document;var g=f&&f.getElementById(i);e[0]=g?(g.value||g.innerHTML):h;});}if(arguments.length==1){return c.compile.apply(c,e);}if(arguments.length>=2){return c.to_html.apply(c,e);}};var d={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return d.escapehash[e];},escaping:function(e){return typeof(e)!=="string"?e:e.replace(/[&<>"]/igm,this.escapereplace);},detection:function(e){return typeof(e)==="undefined"?"":e;}};var b=function(e){if(typeof(console)!=="undefined"){if(console.warn){console.warn(e);return;}if(console.log){console.log(e);return;}}throw (e);};var a=function(h,f){h=h!==Object(h)?{}:h;if(h.__proto__){h.__proto__=f;return h;}var g=function(){};var j=Object.create?Object.create(f):new (g.prototype=f,g);for(var e in h){if(h.hasOwnProperty(e)){j[e]=h[e];}}return j;};c.__cache={};c.version="0.6.5-stable";c.settings={};c.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"};c.options={cache:true,strip:true,errorhandling:true,detection:true,_method:a({__escapehtml:d,__throw:b,__juicer:c},{})};c.tagInit=function(){var f=c.tags.operationOpen+"each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+c.tags.operationClose;var h=c.tags.operationOpen+"\\/each"+c.tags.operationClose;var i=c.tags.operationOpen+"if\\s*([^}]*?)"+c.tags.operationClose;var j=c.tags.operationOpen+"\\/if"+c.tags.operationClose;var n=c.tags.operationOpen+"else"+c.tags.operationClose;var o=c.tags.operationOpen+"else if\\s*([^}]*?)"+c.tags.operationClose;var k=c.tags.interpolateOpen+"([\\s\\S]+?)"+c.tags.interpolateClose;var l=c.tags.noneencodeOpen+"([\\s\\S]+?)"+c.tags.noneencodeClose;var m=c.tags.commentOpen+"[^}]*?"+c.tags.commentClose;var g=c.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)"+c.tags.operationClose;var e=c.tags.operationOpen+"include\\s*([^}]*?)\\s*,\\s*([^}]*?)"+c.tags.operationClose;c.settings.forstart=new RegExp(f,"igm");c.settings.forend=new RegExp(h,"igm");c.settings.ifstart=new RegExp(i,"igm");c.settings.ifend=new RegExp(j,"igm");c.settings.elsestart=new RegExp(n,"igm");c.settings.elseifstart=new RegExp(o,"igm");c.settings.interpolate=new RegExp(k,"igm");c.settings.noneencode=new RegExp(l,"igm");c.settings.inlinecomment=new RegExp(m,"igm");c.settings.rangestart=new RegExp(g,"igm");c.settings.include=new RegExp(e,"igm");};c.tagInit();c.set=function(f,j){var h=this;var e=function(i){return i.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm,function(l){return"\\"+l;});};var k=function(l,m){var i=l.match(/^tag::(.*)$/i);if(i){h.tags[i[1]]=e(m);h.tagInit();return;}h.options[l]=m;};if(arguments.length===2){k(f,j);return;}if(f===Object(f)){for(var g in f){if(f.hasOwnProperty(g)){k(g,f[g]);}}}};c.register=function(g,f){var e=this.options._method;if(e.hasOwnProperty(g)){return false;}return e[g]=f;};c.unregister=function(f){var e=this.options._method;if(e.hasOwnProperty(f)){return delete e[f];}};c.template=function(e){var f=this;this.options=e;this.__interpolate=function(g,l,i){var h=g.split("|"),k=h[0]||"",j;if(h.length>1){g=h.shift();j=h.shift().split(",");k="_method."+j.shift()+".call({}, "+[g].concat(j)+")";}return"<%= "+(l?"_method.__escapehtml.escaping":"")+"("+(!i||i.detection!==false?"_method.__escapehtml.detection":"")+"("+k+")) %>";};this.__removeShell=function(h,g){var i=0;h=h.replace(c.settings.forstart,function(n,k,m,l){var m=m||"value",l=l&&l.substr(1);var j="i"+i++;return"<% ~function() {for(var "+j+" in "+k+") {if("+k+".hasOwnProperty("+j+")) {var "+m+"="+k+"["+j+"];"+(l?("var "+l+"="+j+";"):"")+" %>";}).replace(c.settings.forend,"<% }}}(); %>").replace(c.settings.ifstart,function(j,k){return"<% if("+k+") { %>";}).replace(c.settings.ifend,"<% } %>").replace(c.settings.elsestart,function(j){return"<% } else { %>";}).replace(c.settings.elseifstart,function(j,k){return"<% } else if("+k+") { %>";}).replace(c.settings.noneencode,function(k,j){return f.__interpolate(j,false,g);}).replace(c.settings.interpolate,function(k,j){return f.__interpolate(j,true,g);}).replace(c.settings.inlinecomment,"").replace(c.settings.rangestart,function(m,l,n,k){var j="j"+i++;return"<% ~function() {for(var "+j+"="+n+";"+j+"<"+k+";"+j+"++) {{var "+l+"="+j+"; %>";}).replace(c.settings.include,function(l,j,k){return"<%= _method.__juicer("+j+", "+k+"); %>";});if(!g||g.errorhandling!==false){h="<% try { %>"+h;h+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';}return h;};this.__toNative=function(h,g){return this.__convert(h,!g||g.strip);};this.__lexicalAnalyze=function(k){var j=[];var o=[];var n="";var g=["if","each","_","_method","console","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"];var m=function(r,q){if(Array.prototype.indexOf&&r.indexOf===Array.prototype.indexOf){return r.indexOf(q);}for(var p=0;p<r.length;p++){if(r[p]===q){return p;}}return -1;};var h=function(p,i){i=i.match(/\w+/igm)[0];if(m(j,i)===-1&&m(g,i)===-1&&m(o,i)===-1){if(typeof(window)!=="undefined"&&typeof(window[i])==="function"&&window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)){return p;}if(typeof(global)!=="undefined"&&typeof(global[i])==="function"&&global[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)){return p;}if(typeof(c.options._method[i])==="function"||c.options._method.hasOwnProperty(i)){o.push(i);return p;}j.push(i);}return p;};k.replace(c.settings.forstart,h).replace(c.settings.interpolate,h).replace(c.settings.ifstart,h).replace(c.settings.elseifstart,h).replace(c.settings.include,h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/igm,h);for(var l=0;l<j.length;l++){n+="var "+j[l]+"=_."+j[l]+";";}for(var l=0;l<o.length;l++){n+="var "+o[l]+"=_method."+o[l]+";";}return"<% "+n+" %>";};this.__convert=function(h,i){var g=[].join("");g+="'use strict';";g+="var _=_||{};";g+="var _out='';_out+='";if(i!==false){g+=h.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;";return g;}g+=h.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";return g;};this.parse=function(h,g){var i=this;if(!g||g.loose!==false){h=this.__lexicalAnalyze(h)+h;}h=this.__removeShell(h,g);h=this.__toNative(h,g);this._render=new Function("_, _method",h);this.render=function(k,j){if(!j||j!==f.options._method){j=a(j,f.options._method);}return i._render.call(this,k,j);};return this;};};c.compile=function(g,f){if(!f||f!==this.options){f=a(f,this.options);}try{var h=this.__cache[g]?this.__cache[g]:new this.template(this.options).parse(g,f);if(!f||f.cache!==false){this.__cache[g]=h;}return h;}catch(i){b("Juicer Compile Exception: "+i.message);return{render:function(){}};}};c.to_html=function(f,g,e){if(!e||e!==this.options){e=a(e,this.options);}return this.compile(f,e).render(g,e._method);};typeof(module)!=="undefined"&&module.exports?module.exports=c:this.juicer=c;})();
//公用ajax
// var HOSTNAME = 'http://127.0.0.1:3334';
// var HOSTNAME = 'http://dev.admin.crm.9daye.com.cn';
// var HOSTNAME = 'http://192.168.0.177:8081/hummerServer';

var times = 1

function requestUrl(parms) {
    var _default = {
        url: '',
        dataType: 'json',
        type: 'GET',
        data: {
        },
        success: function (data) {

        },
        error: function (err) {
            if (err.responseJSON.status == 403) {
                if (err.responseJSON.data.errMsg == "没有权限.请通知管理员添加权限.") {
                    salert("", err.responseJSON.data.errMsg, "warning", false);
                } else if (err.responseJSON.data.errMsg == "用户未登录") {
                    swal({
                        title: err.responseJSON.data.errMsg,
                        text: "2秒后自动跳转。",
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setTimeout(function () {
                        location.href = './login.html';
                    }, 2000);
                }

            } else {
                salert("", err.responseJSON.data.errMsg, "warning", false);
            }
        }

    }
    $.extend(_default, parms);
    _default.data.token = window.localStorage.getItem('BUSINESS_TOKEN');
    var _host = _default.url;
    _default.url = _host;
    $.ajax(_default)
}

// 获取数据
function getData(option) {
    requestUrl({
        url: option.url,
        data: option.data,
        success: function (data) {
            if (data.errorMsg) {
                if (data.errorMsg.match('Token无效')) {
                    if (times === 1) {
                        times = 2
                        alert(data.errorMsg)
                        location.href = './login.html'
                    }
                } else {
                    alert(data.errorMsg)
                }
            } else {
                if (data.result) {
                    if (data.result.status == 200 || data.result.status == undefined) {
                        option.success(data)
                    } else {
                        alert(data.result.message)
                    }
                } else {
                    console.log('data.result 没有值')
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus || errorThrown)
        }
    })
}
var salert = function (title, text, type, isCancelButton, callback) {
    swal({
        title: title,
        text: text,
        type: type,
        showCancelButton: isCancelButton,
        confirmButtonClass: "btn-normal",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnConfirm: true,
        animation: false
    }, callback);

}


// 分页
var pagingBuilder = {
    build: function (dom, page, size, total) {
        var total = Math.ceil(total / size);
        var pagination = '';
        pagination += '<ul class="pagination J_page_box" data-max="' + total + '">';
        if (total < 7) {
            for (var i = 1; i < total + 1; i++) {
                if (i == page) {
                    pagination += '<li class="active" data-page="' + i + '"><a href="javascript:;">' + i + '</a></li>';
                    continue
                }
                pagination += '<li data-page="' + i + '"><a href="javascript:;">' + i + '</a></li>';
            }
        } else {
            if (page < 5) {
                for (var i = 1; i < 6; i++) {
                    if (i == page) {
                        pagination += '<li class="active" data-page="' + i + '"><a href="javascript:;">' + i + '</a></li>';
                        continue
                    }
                    pagination += '<li data-page="' + i + '"><a href="javascript:;">' + i + '</a></li>';
                }
                pagination += '<li><span>...</span></li>';
            } else {
                pagination += '<li data-page="1"><a href="javascript:;">1</a></li>\
                            <li><span>...</span></li>';
                var loop = total - page;
                if (total - page > 3) {
                    loop = 3;
                }
                for (var i = 0; i < (loop + 2); i++) {
                    if (i == 2) {
                        pagination += '<li class="active" data-page="' + (page - 2 + i) + '"><a href="javascript:;">' + (page - 2 + i) + '</a></li>';
                        continue
                    }
                    pagination += '<li data-page="' + (page - 2 + i) + '"><a href="javascript:;">' + (page - 2 + i) + '</a></li>'
                }
                if (total - page > 3) {
                    pagination += '<li><span>...</span></li>';
                }
            }
            if (page == total) {
                pagination += '<li class="active" data-page="' + total + '"><a href="javascript:;">' + total + '</a></li>';
            } else {
                pagination += '<li data-page="' + total + '"><a href="javascript:;">' + total + '</a></li>';
            }
        }
        pagination += '</ul>\
                    <div class="pagination-info J_page_search">\
                        <span>共' + total + '页，到第<input type="text" maxlength="3" onfocus="this.select()" value="1">页</span>\
                        <a href="javascript:;" class="btn btn-default">确认</a>\
                    </div>';
        dom && dom.html(pagination);
        dom.find('.J_page_search input').on('keyup', function () {
            this.value = this.value.replace(/[^1-9]/g, '')

            // var number = $(this).val().replace(/\D/g,'') - 0;
            // $(this).val(number);
            // if ($(this).val().length < 1) {
            //     $(this).val('1');
            //     return false
            // }
            // if ($(this).val() < 1) {
            //     $(this).val('1');
            //     return false
            // }
            // if ($(this).val() > dom.find('.J_page_box').data('max')) {
            //     $(this).val(dom.find('.J_page_box').data('max'))
            //     return false
            // }
        })
    },
    click: function (dom, fn) {
        dom.find('.J_page_box li').off().on('click', function () {
            var val = $(this).data('page');
            if (val == undefined) {
                return false
            }
            if (typeof (fn) == 'function') {
                fn(val)
            }
        })
        dom.find('.J_page_search a').off().on('click', function () {
            var n = dom.find('.J_page_search input').val();
            if (n > dom.find('.J_page_box').data('max')) {
                alert('已超过最大分页数')
                return false;
            }
            if (typeof (fn) == 'function') {
                fn(n)
            }
        })
    }
}

//上传图片

function uploadImg(fileInfo, opt) {
    getPermission(fileInfo, function (permissionData) {
        var formData = new FormData()
        var xhr = new XMLHttpRequest()

        for (var i in permissionData) {
            formData.append(i, permissionData[i])
        }
        formData.append('file', fileInfo.imgFile)

        xhr.open('POST', permissionData.host)

        xhr.onload = function () {
            if (xhr.status === 200) {
                typeof opt.loaded === 'function' && opt.loaded(JSON.parse(xhr.responseText).data)
            } else {
                typeof opt.error === 'function' && opt.error(xhr)
            }
        }

        xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
                var complete = (event.loaded / event.total * 100 | 0)
                typeof opt.loading === 'function' && opt.loading(complete)
            }
        }

        xhr.send(formData)
    })
}

function getPermission(fileInfo, callback) {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = handler
    xhr.open('GET', '/interceptor/uploadImg?' + [
        'userType=' + fileInfo.userType,
        'token=' + localStorage.getItem('BUSINESS_TOKEN'),
        'imgType=' + fileInfo.imgType,
        'fileName=' + fileInfo.imgFile.name,
        'objectType=' + fileInfo.objectType,
        'technicianId=' + fileInfo.technicianId
    ].join('&'))
    xhr.send(null)

    function handler() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                var JSONFormatedData = JSON.parse(xhr.responseText)
                callback(JSONFormatedData.result.data)
            }
        }
    }
}


// 全局执行
$(function () {
    var url = location.pathname;
    var target = $('.business-frame-aside').find('a[href="' + url + '"]');
    target.removeClass('collapsed');
    target.parents('li').addClass('active').siblings().removeClass('active');
    target.parents('.collapse').addClass('in').siblings('a').removeClass('collapsed');
})


    // juicer 辅助函数
    ; (function () {

        // 订单管理状态映射
        juicer.register('order_map_status', function (data) {
            return ['待付款', '已付款', '已派单', '交易完成', '交易关闭', '已取消', '已过期'][data - 1] || ''
        });

        juicer.register('order_pay_type', function (data) {
            return ['支付宝', '微信'][data - 1] || ''
        })

        //订单管理服务状态映射
        juicer.register('orderservice_map_status', function (data) {
            if (data == -1) {
                return '已过期'
            }
            else {
                return ['待支付', '待分配', '待施工', '施工中', '施工完成', '服务完成', '已取消', '分配失败'][data] || ''
            }
        });

        //非空验证
        juicer.register('isNull', function (data) {
            if (data == null) {
                return ''
            } else {
                return data
            }
        })

    }());

// 导航栏
; (function () {
    // 页面初始化
    function init() {

        // 用户名
        $('span[data-id="username"]').html(localStorage.getItem('BUSINESS_USERNAME'))

        // 登出时清空 localStorage 存储的 BUSINESS_TOKEN，然后转到 login.html
        $('a[data-id="logout"]').on('click', function () {
            localStorage.removeItem('BUSINESS_TOKEN')
            localStorage.removeItem('BUSINESS_USERNAME')
            requestUrl({
                url: '/authentication/account/logout.do',
                data: 'GET',
                success: function (res) {
                    console.log(res);
                    location.href = './login.html'
                },
                error: function (err) {
                    console.log(err)
                }
            })
        })
    }

    init()
}());



/* global $, moment, requestUrl, pagingBuilder, juicer */

$(function () {
    var $starttimeOn = $('input[data-id="starttimeOn"]');
    var $endtimeOn = $('input[data-id="endtimeOn"]');
    var $starttimeStop = $('input[data-id="starttimeStop"]');
    var $endtimeStop = $('input[data-id="endtimeStop"]');
    var $searchOn = $('span[data-id="searchOn"]');
    var $searchStop = $('span[data-id="searchStop"]');

    var _storeTpl = $('#J_tpl_storeOn').html();
    var _storeStopTpl = $('#J_tpl_storeStop').html();
    $endtimeOn.val('')
    //搜索条件暂存

    var str_starttimeOn = ''
    var str_endtimeOn = ''
    var str_typeOn = ''
    var str_storeTpl = ''
    
    var str_starttimeStop = ''
    var str_endtimeStop = ''
    var str_typeStop = ''
    var str_storeStopTpl = ''
    //登录时间

    $.fn.datepicker.dates["zh-CN"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        today: "今日",
        clear: "清除",
        format: "yyyy年mm月dd日",
        titleFormat: "yyyy年mm月",
        weekStart: 1
        }
        // init the datepicker
        $('.date-picker').datepicker({
        format: 'yyyy-mm-dd',
        language: 'zh-CN',
        orientation: 'bottom'
        });
    // $starttimeOn.daterangepicker({
    //     singleDatePicker: true,
    //     autoApply: true,
    //     locale : {  
    //         format: 'YYYY-MM-DD',
    //         applyLabel : '确定',  
    //         cancelLabel : '取消',  
    //         fromLabel : '起始时间',  
    //         toLabel : '结束时间',  
    //         customRangeLabel : '自定义',  
    //         daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
    //         monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',  
    //                 '七月', '八月', '九月', '十月', '十一月', '十二月' ],  
    //         // firstDay : 1  
    //     },
    //     maxDate: moment().add(-1,'days'),
    //     // startDate: moment().add(-1, 'day')
    // });

    // $endtimeOn.daterangepicker({
    //     singleDatePicker: true,
    //     locale : {  
    //         format: 'YYYY-MM-DD',
    //         applyLabel : '确定',  
    //         cancelLabel : '取消',  
    //         fromLabel : '起始时间',  
    //         toLabel : '结束时间',  
    //         customRangeLabel : '自定义',  
    //         daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
    //         monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',  
    //                 '七月', '八月', '九月', '十月', '十一月', '十二月' ],  
    //         // firstDay : 1  
    //     },  
    //     maxDate: moment()
    // });

    //  //禁用时间
    //  $starttimeStop.daterangepicker({
    //     singleDatePicker: true,
    //     locale : {  
    //         format: 'YYYY-MM-DD',
    //         applyLabel : '确定',  
    //         cancelLabel : '取消',  
    //         fromLabel : '起始时间',  
    //         toLabel : '结束时间',  
    //         customRangeLabel : '自定义',  
    //         daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
    //         monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',  
    //                 '七月', '八月', '九月', '十月', '十一月', '十二月' ],  
    //         firstDay : 1  
    //     },
    //     maxDate: moment().add(-1,'days'),
    //     startDate: moment().add(-1, 'day')
    // });

    // $endtimeStop.daterangepicker({
    //     singleDatePicker: true,
    //     locale : {  
    //         format: 'YYYY-MM-DD',
    //         applyLabel : '确定',  
    //         cancelLabel : '取消',  
    //         fromLabel : '起始时间',  
    //         toLabel : '结束时间',  
    //         customRangeLabel : '自定义',  
    //         daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],  
    //         monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',  
    //                 '七月', '八月', '九月', '十月', '十一月', '十二月' ],  
    //         firstDay : 1  
    //     },  
    //     maxDate: moment()
    // });

    // function changTime(time) {
    //     var thisTime = new Date(time)
    //     return thisTime.getTime() / 1000
    // }

    //授权门店 查询
    $searchOn.on('click', function () {
            var options = $('.time-type-on option:selected');
            str_starttimeOn = $('input[data-id="starttimeOn"]').val()
            str_endtimeOn = $('input[data-id="endtimeOn"]').val()
            str_storeTpl = $('#searchInputAccountOn').val()
            str_typeOn = options.val()
            getStoreInfoOn({
                account: $('#searchInputAccountOn').val(),
                start_time: $('input[data-id="starttimeOn"]').val(),
                end_time: $('input[data-id="endtimeOn"]').val(),
                type: options.val()
            });
        });

    function getStoreInfoOn(params) {
        var _default = {
            page_num: 1,
            count_per_page: 10,
            start_time: str_starttimeOn,
            end_time: str_endtimeOn,
            account: str_storeTpl,
            type: str_typeOn
        };

        $.extend(_default, params);

        requestUrl({
            url: '/store/get/get-accredit-all.do',
            data: _default,
            success: function (res) {
                if (res.status == 17056) {
                    salert("", res.data.errMsg, "warning", false);
                }
                var data = res.data;
                var num = data.total_count;

                if (num == null) {
                    num = 1
                }

                $('#J_store_box').html(juicer(_storeTpl, data.getaccreditall))
                pagingBuilder.build($('#J_pageOn_box'), _default.page_num, _default.count_per_page, num)
                pagingBuilder.click($('#J_pageOn_box'), function (page) {
                    getStoreInfoOn({page_num: page})
                })
            }
        });
    }

    getStoreInfoOn()

    //禁用
    $('#J_store_box').on('click', '.stop', function () {
        var store_id = $(this).attr('data-id')
        $('.stop-confirm').attr('data-id', store_id)
        $('#comment').val('')
    })

    $('.stop-confirm').on('click', function () {
        var store_id = $(this).attr('data-id')
        requestUrl({
            url: '/store/modify/forbid.do',
            type: 'POST',
            data: {
                id: store_id,
                comment: $('#comment').val()
            },
            success: function (res) {
                $('#comment_container').modal('hide')
                getStoreInfoOn()
                getStoreStopInfo()

            },
            error: function (err) {
                salert("", err.responseJSON.data.errMsg, "warning", false);
                $('#comment_container').modal('hide')
            }
        })
    })

    // 禁用门店 授权门店 查询
    $searchStop.on('click', function () {
        var options = $('.time-type-stop option:selected')
        str_starttimeStop = $('input[data-id="starttimeStop"]').val()
        str_endtimeStop = $('input[data-id="endtimeStop"]').val()
        str_typeStop = options.val()
        str_storeStopTpl = $('#searchInputAccountStop').val()

        getStoreStopInfo({
            account: $('#searchInputAccountStop').val(),
            start_time: $('input[data-id="starttimeStop"]').val(),
            end_time: $('input[data-id="endtimeStop"]').val(),
            type: options.val()
        })
    })

    // $('.search-account-stop').on('click', function () {
    //     getStoreStopInfo({
    //         account: $('#searchInputAccountOn').val()
    //     })
    // })

    function getStoreStopInfo(params) {
        var _default = {
            page_num: 1,
            count_per_page: 10,
            start_time: str_starttimeStop,
            end_time: str_endtimeStop,
            account: str_storeStopTpl,
            type: str_typeStop
        }
        $.extend(_default, params)
        requestUrl({
            url: '/store/get/get-forbidden-all.do',
            data: _default,
            success: function (res) {
                if (res.status == 17056) {
                    salert("", res.data.errMsg, "warning", false);
                }
                var data = res.data.getforbiddenall
                var Stopnum = res.data.total_count
                if (Stopnum == null) {
                    Stopnum = 1
                }
                $('#J_storeStop_box').html(juicer(_storeStopTpl, data))
                pagingBuilder.build($('#J_pageStop_box'), _default.page_num, _default.count_per_page, Stopnum)
                pagingBuilder.click($('#J_pageStop_box'), function (page) {
                    getStoreStopInfo({page_num: page})
                })
            }
        })
    }

    getStoreStopInfo()

    //启用
    $('#J_storeStop_box').on('click', '.re-using', function () {
        var data_id = $(this).attr('data-id')
        $('.on-confirm').attr('data-id',data_id)
    })

    $('.on-confirm').on('click', function () {
        requestUrl({
            url: '/store/modify/using.do',
            type: 'POST',
            data: {
                id: $(this).attr('data-id')
            },
            success: function () {
                $('#on_container').modal('hide')
                getStoreStopInfo()
                getStoreInfoOn()
            },
            error: function (err) {
                salert("", err.responseJSON.data.errMsg, "warning", false);
                $('#on_container').modal('hide')
            }
        })
    })


    //tab切换刷新数据

    $('a[data-toggle="tab"]').on('click', function () { 
        str_starttimeOn = ''
        str_endtimeOn = ''
        str_typeOn = ''
        str_storeTpl = ''
        
        str_starttimeStop = ''
        str_endtimeStop = ''
        str_typeStop = ''
        str_storeStopTpl = ''
        $('input[data-id="starttimeOn"]').val('')
        $('input[data-id="endtimeOn"]').val('');
        $('input[data-id="starttimeStop"]').val('')
        $('input[data-id="endtimeStop"]').val('')
        $('#searchInputAccountStop').val('')
        $('#searchInputAccountOn').val('')
        $('select').val('')
        if ($(this).text() == '授权门店') {
            getStoreInfoOn()
        } else {
            getStoreStopInfo()
        }
     })
});
