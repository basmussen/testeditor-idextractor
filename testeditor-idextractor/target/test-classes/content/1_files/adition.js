if(!Adition_Environment){var Adition_Environment=function(){var _this={};var env={ref:false,os:false,browser:false,screen_res:false,flash:false,prf:false,iframe:false,cb_initialized:false};var brs=navigator.userAgent.toLowerCase();var fallback_json_parse=function(){'use strict';var at,ch,escapee={'"':'"','\\':'\\','/':'/',b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},text,error=function(m){throw{name:'SyntaxError',message:m,at:at,text:text};},next=function(c){if(c&&c!==ch)error("Expected '"+c+"' instead of '"+
ch+"'");ch=text.charAt(at);at+=1;return ch},number=function(){var number,string='';if(ch==='-'){string='-';next('-')}while(ch>='0'&&ch<='9'){string+=ch;next()}if(ch==='.'){string+='.';while(next()&&ch>='0'&&ch<='9')string+=ch}if(ch==='e'||ch==='E'){string+=ch;next();if(ch==='-'||ch==='+'){string+=ch;next()}while(ch>='0'&&ch<='9'){string+=ch;next()}}number=+string;if(!isFinite(number))error('Bad number');else return number},string=function(){var hex,i,string='',uffff;if(ch==='"')while(next())if(ch===
'"'){next();return string}else if(ch==='\\'){next();if(ch==='u'){uffff=0;for(i=0;i<4;i+=1){hex=parseInt(next(),16);if(!isFinite(hex))break;uffff=uffff*16+hex}string+=String.fromCharCode(uffff)}else if(typeof escapee[ch]==='string')string+=escapee[ch];else break}else string+=ch;error('Bad string')},white=function(){while(ch&&ch<=' ')next()},word=function(){switch(ch){case 't':next('t');next('r');next('u');next('e');return true;case 'f':next('f');next('a');next('l');next('s');next('e');return false;
case 'n':next('n');next('u');next('l');next('l');return null}error("Unexpected '"+ch+"'")},value,array=function(){var array=[];if(ch==='['){next('[');white();if(ch===']'){next(']');return array}while(ch){array.push(value());white();if(ch===']'){next(']');return array}next(',');white()}}error('Bad array')},object=function(){var key,object={};if(ch==='{'){next('{');white();if(ch==='}'){next('}');return object}while(ch){key=string();white();next(':');if(Object.hasOwnProperty.call(object,key))error('Duplicate key "'+
key+'"');object[key]=value();white();if(ch==='}'){next('}');return object}next(',');white()}}error('Bad object')};value=function(){white();switch(ch){case '{':return object();case '[':return array();case '"':return string();case '-':return number();default:return ch>='0'&&ch<='9'?number():word()}};return function(source,reviver){var result;text=source;at=0;ch=' ';result=value();white();if(ch)error('Syntax error');return typeof reviver==='function'?function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==='object')for(k in value)if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined)value[k]=v;else delete value[k]}return reviver.call(holder,key,value)}({'':result},''):result}}();_this.parseJSON=function(data){if(typeof data!=='string'||!data)return null;data=data.replace(/^\s+/,'');for(var i=data.length-1;i>=0;i--)if(/\S/.test(data.charAt(i))){data=data.substring(0,i+1);break}if(window.JSON&&window.JSON.parse)return window.JSON.parse(data);return fallback_json_parse(data)};
_this.getVersion=function(){return 3};_this.getRef=function(){if(env.ref===false)env.ref=escape(document.referrer);return env.ref};_this.getOS=function(){if(env.os===false){var os=-1;if(brs.search(/symbian/)!=-1){os=13}else if(brs.search(/android/)!=-1){os=12}else if(brs.search(/windows\snt\s6\.3/)!=-1){os=16}else if(brs.search(/windows\snt\s6\.2/)!=-1){os=15}else if(brs.search(/iphone|ipad/)!=-1){os=14}else if(brs.search(/windows\sce/)!=-1){os=11}else if(brs.search(/unix/)!=-1){os=7}else if(brs.search(/linux/)!=-1){os=6}else if(brs.search(/mac\sos\sx|macintosh|mac\x5fpowerpc/)!=-1){os=5}else if(brs.search(/windows\snt\s6\.1/)!=-1){os=10}else if(brs.search(/windows\snt\s6\.0/)!=-1){os=9}else if(brs.search(/windows\snt\s5\.2/)!=-1){os=8}else if(brs.search(/windows\snt\s5\.1/)!=-1){os=3}else if(brs.search(/windows\snt\s5\.0/)!=-1){os=2}else if(brs.search(/windows\snt\s4\.0/)!=-1){os=4}else if(brs.search(/windows\s95|windows\sme|win98|windows\s98/)!=-1){os=1};env.os=os}return env.os};_this.getBrowser=function(){if(env.browser===false){var browser=-1;if(brs.search(/trident\/(7\.0)/)!=-1){browser=14}else if(brs.search(/msie\s10/)!=-1){browser=13}else if(brs.search(/msie\s9/)!=-1){browser=12}else if(brs.search(/chrome\//)!=-1){browser=11}else if(brs.search(/msie\s8/)!=-1){browser=10}else if(brs.search(/gecko\//)!=-1){browser=6}else if(brs.search(/opera/)!=-1){browser=7}else if(brs.search(/msie\s7/)!=-1){browser=9}else if(brs.search(/konqueror|safari/)!=-1){browser=8}else if(brs.search(/msie\s6/)!=-1){browser=3}else if(brs.search(/netscape6|netscape\/(7\.\d*)/)!=-1){browser=5}else if(brs.search(/netscape4/)!=-1){browser=4}else if(brs.search(/msie\s5/)!=-1){browser=2}else if(brs.search(/msie\s4/)!=-1){browser=1};env.browser=browser}return env.browser};_this.getScreenRes=function(){if(env.screen_res===false){var screen_res=-1;var resList={"1024x576":164,"1024x600":165,"1024x768":3,"1072x600":166,"1152x768":167,"1152x864":4,"1152x870":168,"1152x900":169,"1200x800":170,"1200x900":171,"1280x1024":5,"1280x720":172,"1280x768":9,"1280x800":10,"1280x854":173,"1280x960":7,"1360x1024":179,"1360x768":174,"1366x1024":180,"1366x768":175,"1376x768":176,"1400x1050":8,"1400x900":177,"1440x900":11,"1440x960":178,"1600x1024":183,"1600x1200":6,"1600x768":181,"1600x900":182,"1680x1050":12,"1920x1080":184,"1920x1200":13,"1920x1400":185,"1920x1440":186,"2048x1152":187,"2048x1536":188,"2560x1440":190,"2560x1600":191,"2560x2048":192,"2800x2100":193,"640x480":1,"720x400":153,"768x1024":199,"800x480":154,"800x600":2,"832x624":159,"848x480":155,"852x480":156,"858x484":158,"864x480":157,"960x540":160,"960x640":162,"960x720":163,"964x544":161,"Sonstige":0,"0x0":18,"100x130":98,"101x54":139,"101x56":106,"101x64":76,"101x65":75,"101x67":97,"101x80":44,"1024x600":36,"1024x768":151,"102x80":58,"104x208":66,"106x56":111,"110x96":78,"112x112":104,"112x64":67,"1136x640":204,"120x100":121,"120x120":119,"120x160":85,"124x124":88,"126x160":54,"1280x720":200,"1280x768":206,"128x112":134,"128x120":99,"128x127":142,"128x128":23,"128x141":95,"128x143":65,"128x144":96,"128x160":17,"128x168":69,"128x220":31,"128x40":135,"128x64":37,"128x92":115,"128x96":84,"130x130":51,"132x160":133,"132x162":89,"132x176":55,"140x160":144,"150x170":147,"160x100":94,"160x120":68,"160x128":52,"160x160":83,"160x220":73,"160x240":82,"162x216":101,"167x220":25,"176x132":74,"176x144":57,"176x192":80,"176x200":60,"176x208":41,"176x220":21,"176x240":72,"176x320":137,"176x92":145,"177x220":53,"1920x1080":203,"193x196":143,"200x176":61,"208x104":81,"208x208":43,"208x320":71,"220x176":38,"220x220":45,"220x267":90,"240x160":39,"240x176":92,"240x240":35,"240x260":28,"240x270":146,"240x300":197,"240x320":16,"240x330":33,"240x400":22,"240x427":130,"240x432":24,"240x440":126,"240x480":26,"240x60":93,"256x128":109,"256x384":118,"260x240":42,"262x144":50,"320x194":124,"320x204":141,"320x240":19,"320x320":20,"320x400":127,"320x448":120,"320x480":49,"352x416":40,"360x400":150,"360x480":116,"360x640":114,"384x240":195,"384x288":138,"400x194":148,"400x240":34,"432x240":123,"448x320":122,"480x240":129,"480x272":46,"480x320":14,"480x360":117,"480x640":15,"480x800":32,"480x854":140,"490x165":132,"540x960":209,"640x200":64,"640x240":59,"640x320":79,"640x360":198,"640x480":152,"64x101":107,"720x1280":201,"720x720":205,"770x300":113,"800x345":149,"800x352":47,"800x480":27,"80x101":105,"80x40":103,"84x48":87,"84x84":102,"854x480":125,"86x64":110,"90x40":128,"94x64":100,"94x94":70,"960x540":194,"960x640":196,"96x39":29,"96x44":131,"96x48":91,"96x55":63,"96x56":108,"96x60":86,"96x64":48,"96x65":62,"96x68":30,"96x72":112,"96x86":56,"97x56":136,"98x67":77,"Sonstige":202};try{screen_res=
resList[screen.width+'x'+screen.height]}catch(e){screen_res=-1}env.screen_res=screen_res}return env.screen_res};_this.getFlashVersion=function(){if(env.flash===false){var flash='';var n=navigator;if(n.plugins&&n.plugins.length)for(var ii=0;ii<n.plugins.length;ii++){if(n.plugins[ii].name.indexOf('Shockwave Flash')!=-1){flash=n.plugins[ii].description.split('Shockwave Flash ')[1];i=flash.indexOf('.');flash=flash.substr(0,i);break}}else if(window.ActiveXObject)for(var ii=10;ii>=2;ii--)try{var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+
ii+"');");if(fl){flash=ii;break}}catch(e){}env.flash=flash}return env.flash};_this.getPrf=function(cuId){var prf='';try{prf=Adition_Prfstr(cuId)}catch(e){}return prf};_this.getIframe=function(){if(env.iframe===false){var iframe=0;try{if(window.top!==window)iframe=1}catch(e){iframe=1}env.iframe=iframe}return env.iframe};_this.getAllAsQueryString=function(wpId){var url=_this.getPrf(wpId);url+='&os='+_this.getBrowser();url+='&screen_res='+_this.getScreenRes();url+='&ref='+_this.getRef();url+='&fvers='+
_this.getFlashVersion();url+='&iframe='+_this.getIframe();return url};_this.initCB=function(uid){};var getEnv=function(key,def){return typeof env[key]!='undefined'?env[key]:typeof def!='undefined'?def:null};var setEnv=function(key,value){env[key]=value};var sendMessage=function(node,msg){switch(_this.getBrowser()){case 3:break;case 9:break;default:node.contentWindow.postMessage(msg,'*')}};_this.getYieldProbe=function(cuId){var mapped_result=adition_yieldlab[cuId];var yl_result=yl.YpResult.get(mapped_result.adslotId);
yl_result.checkId=mapped_result.checkId;return yl_result};_this.H5=function(uid){if(typeof uid!='undefined'&&getEnv('uid_ifr',false)){sendMessage(getEnv('uid_ifr'),uid);if(getEnv('uid','-1')=='-1')window.setTimeout(function(){sendMessage(getEnv('uid_ifr'),uid)},100)}if(!getEnv('uid_init_time',false))setEnv('uid_init_time',new Date);var uid_cnt=getEnv('uid_cnt',0);setEnv('uid_cnt',0);return[getEnv('uid','-1'),uid_cnt]};(function init_uid(browserId){if(browserId==3||browserId==9){setEnv('uid','-2');
setEnv('uid_cnt',1);return}if(!getEnv('uid_ifr',false)){var ifr_init=function(){try{var ifr=document.createElement('iframe');ifr.setAttribute('charset','utf-8');ifr.setAttribute('src',(window.location.protocol.match(/http/i)?window.location.protocol:'http:')+'//imagesrv.adition.com/js/acb/uid.html');if(browserId==9||document.compatMode&&document.compatMode=='BackCompat'||document.documentMode&&document.documentMode==7){ifr.setAttribute('width','0');ifr.setAttribute('height','0');ifr.setAttribute('border',
'0');ifr.style.position='absolute';ifr.style.top='-200px'}else ifr.setAttribute('style','width:0px;height:0px;border:0px;position:absolute;min-width:0px;min-height:0px');var respHandler=function(ev){if(ev.source==ifr.contentWindow){var resptime=new Date;var inittime=getEnv('uid_init_time',resptime);var uid_cnt=resptime<=inittime?1:resptime-inittime;setEnv('uid',''+ev.data);setEnv('uid_cnt',uid_cnt);removeEvent()}};function removeEvent(){if(window.removeEventListener)window.removeEventListener('message',
respHandler);else if(window.detachEvent)window.detachEvent('onmessage',respHandler)}if(window.addEventListener)window.addEventListener('message',respHandler,false);else if(window.attachEvent)window.attachEvent('onmessage',respHandler);document.body.insertBefore(ifr,document.body.firstChild);setEnv('uid_ifr',ifr)}catch(e){}};if(document.body!=null)window.setTimeout(ifr_init,1);else var uid_interval=setInterval(function(){if(document.body!=null){ifr_init();clearInterval(uid_interval)}},5)}})(_this.getBrowser());
return _this}();function Adition_OSId(){return Adition_Environment.getOS()}function Adition_BrowserId(){return Adition_Environment.getBrowser()}function Adition_ResId(){return Adition_Environment.getScreenRes()}function Adition_Referrer(){return[Adition_Environment.getIframe(),Adition_Environment.getRef()]}function Adition_Flash(){return Adition_Environment.getFlashVersion()}}
if(!Adition_Jsonp_Manager)var Adition_Jsonp_Manager=function(){var _this={};var store={};var createStoreObject=function(adUrl,callBack,params){try{var wpId=(new RegExp(/(?:sid=)([0-9]+)/)).exec(adUrl)[1]}catch(e){throw new Error('Could not match Contentunit ID');}if(typeof callBack!='function')throw new Error('Callback has to be a function');adUrl=adUrl.match(/wpt=X/i)!=null?adUrl:adUrl+'&wpt=X';if(typeof params=='object'){if(typeof params.keyword=='string')adUrl+='&keyword='+params.keyword;if(typeof params.profile==
'object')for(var key in params.profile)adUrl+='&p['+key+']='+params.profile[key];if(typeof params.data=='object')for(var key in params.data)adUrl+='&data['+key+']='+params.data[key]}if(Adition_Environment)adUrl+=Adition_Environment.getAllAsQueryString(wpId);return{'wpId':wpId,'adUrl':adUrl,'params':params,'callBack':callBack}};_this.get=function(adUrl,callBack,params){var obj=createStoreObject(adUrl,callBack,params);store[obj.wpId]=obj;var scr=document.createElement('script');scr.setAttribute('type',
'text/javascript');scr.setAttribute('src',obj.adUrl);document.getElementsByTagName('head')[0].appendChild(scr)};_this.insert=function(wpId,obj){try{store[wpId].callBack(obj)}catch(e){}};return _this}();
if(window.Adition_VT_Area===undefined){window.Adition_VT_Area=new Object;(function(exports){exports.getWindowViewportSize=function(){if(window.document.compatMode){var body=window.document.compatMode=='BackCompat'?window.document.body:window.document.documentElement;return function(){return{width:body.clientWidth,height:body.clientHeight}}}else return function(){return{width:window.innerWidth,height:window.innerHeight}}}();exports.measureVisibleAreaPercentage=function(htmlElement){var viewportSize=
exports.getWindowViewportSize();var elementRect=htmlElement.getBoundingClientRect();var elementWidth=elementRect.right-elementRect.left;var elementHeight=elementRect.bottom-elementRect.top;var visibleWidth=Math.min(Math.max(elementRect.right,0),viewportSize.width)-Math.min(Math.max(elementRect.left,0),viewportSize.width);var visibleHeight=Math.min(Math.max(elementRect.bottom,0),viewportSize.height)-Math.min(Math.max(elementRect.top,0),viewportSize.height);var elementArea=elementWidth*elementHeight;
var visibleArea=visibleWidth*visibleHeight;var percentage=100*visibleArea/elementArea;return Math.round(percentage)}})(window.Adition_VT_Area)}if(!Adition_VT_API)var Adition_VT_API={trackViewtime:function(config){Adition_VT_Manager.addObservedElement(config.nodeId,config.logId,config.networkId,config.maxViewtime,config.minChange,config.maxTrans,config.serverURI,config.preFactor||100,config.userArea,config.userTime)}};
if(!Adition_VT_Manager){var Adition_VT_Manager=function(){var _this={};var _protocolVersion=6;var _postmessageProtocolHeadVersion=parseInt('2');var _serverProtocolPrefix=(window.location.protocol.match(/http/i)?window.location.protocol:'http:')+'//';var _vtCustomKey='vt_cust';var _fallbackServerAddress='vt.adition.com/d';var STATE={'MEASUREMENT_POSSIBLE':0,'MEASUREMENT_NOT_POSSIBLE':1,'MEASUREMENT_ELEMENT_HIDDEN':2,'MEASUREMENT_ELEMENT_OUT_OF_BOUNDS':3,'ELEMENT_INVISIBLE':1,'ELEMENT_VISIBLE':2};var userActionMaxAge=
6E4;var elements=[];_this.interval=false;_this.tabActiveState=true;_this.tabActiveStateDate=new Date;_this.lastUserAction=new Date;_this.userIsActive=function(){var actionOccured=new Date-_this.lastUserAction<userActionMaxAge;if(actionOccured&&_this.tabActiveState)return true;return false};_this.setMeasureInterval=function(){if(_this.interval){window.clearInterval(_this.interval);_this.interval=false}_this.interval=window.setInterval(_this.measure,1E3)};_this.getViewportDimension=function(){if(document.compatMode){var docBody=
document.compatMode=='BackCompat'?window.document.body:window.document.documentElement;var w=docBody.clientWidth;var h=docBody.clientHeight}else{var w=window.innerWidth;var h=window.innerHeight}return{width:w,height:h}};_this.measure=function(){window.clearInterval(_this.interval);_this.interval=false;for(var i=0;i<elements.length;i++)elements[i].periodicMeasure();_this.setMeasureInterval()};_this.trackAll=function(){for(var i=0;i<elements.length;i++)elements[i].closeMeasure()};_this.checkVisibility=
function(obj){if(obj.currentStyle){if(obj.currentStyle.visibility=='hidden'||obj.currentStyle.display=='none'||(obj.currentStyle.overflowY=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&obj.currentStyle.height=='0px'||(obj.currentStyle.overflowX=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&obj.currentStyle.width=='0px')return false}else if(window.getComputedStyle(obj,null).getPropertyValue('visibility')=='hidden'||window.getComputedStyle(obj,null).getPropertyValue('display')=='none'||(window.getComputedStyle(obj,
null).getPropertyValue('overflow-y')=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&window.getComputedStyle(obj,null).getPropertyValue('height')=='0px'||(window.getComputedStyle(obj,null).getPropertyValue('overflow-x')=='hidden'||obj.nodeName.toLowerCase()=='iframe')&&window.getComputedStyle(obj,null).getPropertyValue('width')=='0px')return false;return true};_this.addObservedElement=function(domElement,logId,networkId,maxViewtime,minChange,maxTrack,serverAddress,preFactor,customSurface,customTime){customSurface=
customSurface||0;customTime=customTime||0;serverAddress=serverAddress||_fallbackServerAddress;for(var i=0;i<elements.length;i++)if(elements[i].lid==logId)return;if(typeof domElement=='string')domElement=document.getElementById(domElement);if(domElement&&domElement.nodeName){var flStr=Adition_Environment.getBrowser()==11||Adition_Environment.getBrowser()==6?'embed':'object';if(domElement.getElementsByTagName(flStr).length==1)domElement=domElement.getElementsByTagName(flStr)[0];if(!domElement.id)domElement.id=
Math.random();var measurementObject={customTime:customTime,isTracking:false,initInterval:null,initCount:0,maxvt:maxViewtime?maxViewtime:60,minc:minChange?minChange:5,maxt:maxTrack?maxTrack:5,serverAddress:serverAddress,measurementState:STATE.MEASUREMENT_POSSIBLE,dom:domElement,state:0,lid:logId,n:networkId?networkId:0,initTime:false,lastMeasureTime:new Date,vt:0,vtContainer:createVTMeasurementContainer(customSurface),ma:0,suvt:0,hpos:0,vpos:0,sfac:preFactor?preFactor/100:1,surface:0,lastTrack:{vt:0,
ma:0,suvt:0,hpos:0,vpos:0,time:new Date,count:0},periodicMeasure:function(){if(this.initTime==false)return;this.measure();var now=new Date;if(now-this.initTime>=28E4&&this.vt>this.lastTrack.vt){this.track();_this.removeElement(this)}else if(this.isTrackable()&&this.isTracking==false){this.isTracking=true;this.track()}},closeMeasure:function(){this.measure();this.track()},measure:function(){var element=document.getElementById(this.dom.id);var surface=Adition_VT_Area.measureVisibleAreaPercentage(element);
var state=surface>0?STATE.ELEMENT_VISIBLE:STATE.ELEMENT_INVISIBLE;surface=surface>100?100:surface;this.update(state,(surface>0?surface:0)*this.sfac)},update:function(state,surface){var lastMeasureTime=this.lastMeasureTime;var currentTime=new Date;var timeDeltaMilliSeconds=(currentTime-lastMeasureTime)/1E3;this.lastMeasureTime=currentTime;if(this.state===STATE.ELEMENT_VISIBLE&&_this.userIsActive()){this.vt+=timeDeltaMilliSeconds;this.vtContainer.update(surface,timeDeltaMilliSeconds);this.suvt+=timeDeltaMilliSeconds*
(this.surface/100)}this.state=state;this.surface=Math.round(surface);if(this.surface>this.ma)this.ma=this.surface},getSecondsSinceInit:function(){return Math.round((new Date-this.initTime)/1E3)},isTrackable:function(){if(this.lastTrack.count==0)return true;else if(this.vt==0||this.lastTrack.count>=this.maxt||this.lastTrack.vt>this.maxvt)return false;else if(this.lastTrack.count>1&&this.lastTrack.vt+this.minc>this.vt)return false;else if(this.vt-this.lastTrack.vt<(this.maxvt-this.lastTrack.vt)/(this.maxt-
this.lastTrack.count))return false;return true},track:function(){var trackCount=this.lastTrack.count+1;this.lastTrack={vt:this.vt,ma:this.ma,suvt:Math.round(this.suvt),hpos:this.hpos,vpos:this.vpos,time:new Date,count:trackCount};_this.track(this.lid,this.n,this.measurementState,this);this.isTracking=false},getUrl:function(){var params={n:this.n,vt:Math.ceil(this.vt),elapsed:this.getSecondsSinceInit(),ma:this.ma,suvt:Math.round(this.suvt),h:this.hpos,v:this.vpos};var vtData=this.vtContainer.getData();
vtData[_vtCustomKey]=this.customTime>0&&vtData[_vtCustomKey]>=this.customTime?1:0;for(var key in vtData)params[key]=vtData[key];var requestString='';for(var key in params)requestString+='&'+key+'='+params[key];return this.serverAddress+'?lid='+this.lid+requestString},init:function(){this.measurementState=STATE.MEASUREMENT_POSSIBLE;this.initCount++;var x=0;var y=0;var browserid=Adition_BrowserId();if(this.dom.id!=null&&this.dom!=document.getElementById(this.dom.id))this.dom=document.getElementById(this.dom.id);
if(this.dom.offsetParent){var obj=this.dom;while(obj){x+=obj.offsetLeft;y+=obj.offsetTop;obj=obj.offsetParent}}if(this.dom.parentElement){var obj=this.dom;while(obj.parentElement){if(!_this.checkVisibility(obj))this.measurementState=STATE.MEASUREMENT_ELEMENT_HIDDEN;obj=obj.parentElement}}var viewport=_this.getViewportDimension();this.hpos=Math.round(x/viewport.width*100)>9999?9999:Math.round(x/viewport.width*100);this.vpos=Math.round(y/viewport.height*100)>9999?9999:Math.round(y/viewport.height*100);
if(this.hpos<0||this.vpos<0){var viewportPosition=document.getElementById(this.dom.id).getBoundingClientRect();var elementHeight=viewportPosition.bottom-viewportPosition.top;var elementWidth=viewportPosition.right-viewportPosition.left;if(x<0)if(x+elementWidth<=0)this.measurementState=STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS;else this.hpos=0;if(y<0)if(y+elementHeight<=0)this.measurementState=STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS;else this.vpos=0;if(this.measurementState==STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS){this.hpos=
'';this.vpos=''}}if(window.top!=window||browserid==2||browserid==1){_this.trackError(this.lid,this.n,STATE.MEASUREMENT_NOT_POSSIBLE,this.serverAddress);_this.removeElement(this);return true}else if(this.measurementState!=STATE.MEASUREMENT_POSSIBLE)return false;else{this.measure();this.initTime=new Date;return true}}};elements.push(measurementObject);if(!measurementObject.init())measurementObject.initInterval=window.setInterval(function(){if(measurementObject.init()||measurementObject.initCount>50){window.clearInterval(measurementObject.initInterval);
if(measurementObject.initCount>50){_this.track(measurementObject.lid,measurementObject.n,measurementObject.measurementState,measurementObject);_this.removeElement(measurementObject)}}},100)}else _this.trackError(logId,networkId,STATE.MEASUREMENT_NOT_POSSIBLE,serverAddress)};_this.removeElement=function(measurementObject){for(var i=0;i<elements.length;i++)if(measurementObject==elements[i])elements.splice(i,1)};_this.track=function(logId,networkId,state,measurementObject){switch(state){case STATE.MEASUREMENT_ELEMENT_HIDDEN:case STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS:case STATE.MEASUREMENT_NOT_POSSIBLE:_urlRequest(measurementObject.serverAddress+
'?lid='+logId+'&f='+state+'&n='+networkId);break;case STATE.MEASUREMENT_POSSIBLE:_urlRequest(measurementObject.getUrl());break}};_this.trackError=function(logId,networkId,state,serverAddress){_urlRequest(serverAddress+'?lid='+logId+'&f='+state+'&n='+networkId)};var _urlRequest=function(url){var img=new Image;img.src=_serverProtocolPrefix+url+'&version='+_protocolVersion};_this.postMessageHandler=function(event){if(event.source===window)return;try{var json=Adition_Environment.parseJSON(event.data)}catch(e){var json=
null}if(json&&json.service&&json.service=='Adition_VT_Manager'&&json.networkId){var contentWin=_findContentWindow(event.source);if(contentWin===undefined)return;var domElement=null;var iframes=document.getElementsByTagName('iframe');for(var y=0;y<iframes.length;y++)if(iframes[y].contentWindow===contentWin){domElement=iframes[y];break}var viewtimeConfig=_createViewtimeConfigFromPostMessage(json);if(!viewtimeConfig.preFactor||viewtimeConfig.preFactor<=0)_this.trackError(viewtimeConfig.logId,viewtimeConfig.networkId,
STATE.MEASUREMENT_ELEMENT_OUT_OF_BOUNDS,viewtimeConfig.serverURI);else{json.nodeId=domElement;Adition_VT_API.trackViewtime(json)}event.source.postMessage('{"service":"Adition_VT_Manager","state":"ok","logId":"'+json.logId+'"}','*')}};var _createViewtimeConfigFromPostMessage=function(postMessage){var config;if(postMessage.version&&postMessage.version==_postmessageProtocolHeadVersion){config=postMessage;delete config.version}else{config=new Object;config.service=postMessage.service;config.networkId=
postMessage.networkId;config.logId=postMessage.logId;config.maxViewtime=postMessage.maxViewtime;config.minChange=postMessage.minChange;config.maxTrans=postMessage.maxTrack;config.preFactor=postMessage.max_surface;config.serverURI=_fallbackServerAddress}return config};function _findContentWindow(currentWindow){if(_isTopWindow(currentWindow))throw'Top window passed';while(!_isTopWindow(currentWindow.parent))currentWindow=currentWindow.parent;return currentWindow}function _isTopWindow(window){return window.top==
window}function installEventListener(event,func,eventTarget){eventTarget=eventTarget||window;if(navigator.appVersion.indexOf('MSIE')!=-1)eventTarget.attachEvent('on'+event,func);else eventTarget.addEventListener(event,func,false)}function createVTMeasurementContainer(customSurface){var container=new Adition_VT_MeasurementContainer;container.registerItem(new Adition_VT_MeasurementItem('vt_50',50));container.registerItem(new Adition_VT_MeasurementItem('vt_60',60));container.registerItem(new Adition_VT_MeasurementItem('vt_100',
100));if(customSurface>0)container.registerItem(new Adition_VT_MeasurementItem(_vtCustomKey,customSurface));return container}function init(){var ua=function(){_this.lastUserAction=new Date};installEventListener('mousemove',ua,document);installEventListener('mousedown',ua,document);installEventListener('scroll',ua);installEventListener('resize',ua);installEventListener('scroll',_this.measure);installEventListener('resize',_this.measure);installEventListener('unload',_this.trackAll);if(window.postMessage)installEventListener('message',
_this.postMessageHandler);var tabActivityEventMap={hidden:'visibilitychange',mozHidden:'mozvisibilitychange',webkitHidden:'webkitvisibilitychange',msHidden:'msvisibilitychange'};var tabEvent=function(){for(ev in tabActivityEventMap)if(tabActivityEventMap.hasOwnProperty(ev)&&ev in document)return[ev,tabActivityEventMap[ev]];return false}();var tabActivityEvents=['focus','blur','focusin','focusout'];if(tabEvent)tabActivityEvents.push(tabEvent[1]);for(var i=0;i<tabActivityEvents.length;i++)installEventListener(tabActivityEvents[i],
function(event){_this.tabActiveStateDate=new Date;if(event.type=='focus'||event.type=='focusin')_this.tabActiveState=true;else if(event.type=='blur'||event.type=='focusout')_this.tabActiveState=false;else _this.tabActiveState=document[tabEvent[0]]?false:true});_this.setMeasureInterval()}init();return _this}();Adition_VT_MeasurementContainer=function(){this.items=[]};Adition_VT_MeasurementContainer.prototype.registerItem=function(item){this.items.push(item)};Adition_VT_MeasurementContainer.prototype.update=
function(surface,timeDelta){for(var i=0,item,len=this.items.length;i<len;i++){item=this.items[i];if(item.minSurface<0)continue;if(surface>=item.minSurface)item.time+=timeDelta}};Adition_VT_MeasurementContainer.prototype.getData=function(){var params={};for(var i=0,item,len=this.items.length;i<len;i++){item=this.items[i];params[item.name]=Math.ceil(item.time)}return params};Adition_VT_MeasurementItem=function(name,minSurface){this.name=name;this.minSurface=minSurface;this.time=0}}
if(typeof Adition_Prfstr=='undefined'){function Adition_Prfstr(ADITION_CONTENTUNIT_ID){try{var ypParams=Adition_Environment.getYieldProbe(ADITION_CONTENTUNIT_ID);var yprf='&p[_yl_adslotId:'+ypParams.id+',_yl_checkId:'+ypParams.checkId+',_yl_price:'+ypParams.price+',_yl_advertiser:'+escape(ypParams.advertiser)+',_yl_curl:'+escape(ypParams.curl)+']'}catch(e){var yprf=''}return yprf}}
if(!Adition_PostMessageService)var Adition_PostMessageService=function(){var _this={};_this.handleRequest=function(requestString){try{var requestObject=JSON.parse(requestString)}catch(exception){return null}if(typeof requestObject.method=='string')if(typeof _this.serviceMethods[requestObject.method]=='function'){var resultObject=_this.serviceMethods[requestObject.method]();if(requestObject['response']){for(var i in requestObject['response'])if(requestObject['response'][i]=='#result#'){requestObject['response'][i]=
resultObject;break}var answerString=JSON.stringify(requestObject['response']);return answerString}}return null};_this.serviceMethods={getLocation:function(){var object={location:window.location.href,referrer:document.referrer};return object},turnOff:function(){Adition_PostMessageService.turnOff()}};_this.serviceListener=function(event){var whiteList=[/^http[s]?:\/\/[\w\.]*t4ft\.de$/i,/^http[s]?:\/\/[\w\.]*adition\.com$/i,/^http[s]?:\/\/dmp\.theadex\.com$/i];var validOrigin=false;if(window==event.source)return null;
for(var i=0;i<whiteList.length;i++)if(whiteList[i].test(event.origin)){validOrigin=true;break}if(validOrigin){var requestString=event.data;var answerString=_this.handleRequest(requestString);if(answerString)event.source.postMessage(answerString,event.origin)}};_this.turnOn=function(){if(window.addEventListener)window.addEventListener('message',_this.serviceListener,false);else if(window.attachEvent)window.attachEvent('onmessage',_this.serviceListener)};_this.turnOff=function(){if(window.removeEventListener)window.removeEventListener('message',
_this.serviceListener);else window.detachEvent('onmessage',_this.serviceListener)};if(window!=top)_this.turnOff();else _this.turnOn();return _this}();
