//Generated:2014-08-22 08:57:54


//1-220

//1-218
(function() {
  var p = "934877",
    n = [],
    w = window,
    f = function(s) {
      var r = w[s + "_" + p],
        i = n.length;
      if (!r) {
        r = "";
        while (i--) {
          if (w[s + "_" + n[i]]) {
            r = w[s + "_" + n[i]];
            break;
          }
        }
      }
      return r;
    },
    d = function(a, b) {
      if (b && !~w[q].indexOf(a + "=")) {
        b = (~b.indexOf("&")) ? encodeURIComponent(b) : b;
        w[q] += "&" + a + "=" + b;
      }
    },
    q = "ftParams_" + p,
    e = "ftExpTrack";
  d(e, f(e));
  d("click", f("ftClick"));
})();

var ft934877 = {
	params:window.ftParams_934877||"",
	guid:window.ftGUID_934877||"",
	confID:window.ftConfID_934877||"",
	ftId:'',
	exttrack:[],
	extscript:[""],
	utilityURL:"http://cdn.flashtalking.com/atlas/1/suite.swf",
	atSiteAlias:"",
	atAdTagID:"",
	aID:"1",
	pID:"934877",
	cID:"34010",
	creativeID:"804240",
	campaignID: "37943",
	width:200,
	height:600,
	expWidth:0||200,
	expHeight:0||600,
	indentAcross:0,
	indentDown:0,
	contractLeft:0,
	contractRight:200+0,
	contractUp:0,
	contractDown:600+0,
	serveDom:"http://cdn.flashtalking.com",
	setFileSize:"30.677734375",
	statBaseURL:"http://stat.flashtalking.com/reportV3/ft.stat?39850581-",
	linkMode:"0",
	linkID:"0",
	mvt:false,
	jsurl:"http://cdn.flashtalking.com/xre/93/934877/804240/js/j-934877-804240.js",
	swf:"http://cdn.flashtalking.com/xre/93/934877/804240/swf/image_xx_xx_sa_200x600.swf",
	altimg:"http://servedby.flashtalking.com/imp/2/37943;934877;204;gif;SpiegelDE;v0102FIXhomepage26082014imagedynamicsitebarxxnachrichtenportale/?",
	viewableImpressionURL: "http://servedby.flashtalking.com/imp/2/37943;934877;202;pixel;SpiegelDE;v0102FIXhomepage26082014imagedynamicsitebarxxnachrichtenportale/?",
	storeGUID:/iP(ad|hone|od)/.test(navigator.appVersion),
	servedby:location.href.indexOf("http://servedby.flashtalking.com")>-1,
	cdn:location.href.indexOf("http://cdn.flashtalking.com")>-1,
	cdnSrc:"http://cdn.flashtalking.com/frameworks/js/frame/?g=",
	cdnGUID:"http://cdn.flashtalking.com/frameworks/js/ftGUID.html?g=",
	iDeviceImp:"http://servedby.flashtalking.com/imp/2/37943;934877;207;guid;SpiegelDE;v0102FIXhomepage26082014imagedynamicsitebarxxnachrichtenportale/?ft_guid=",
	clickTags:["http://servedby.flashtalking.com/click/2/37943;934877;804240;211;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=200&ft_height=600&url=https://www.postbank.de/home?kid=image-2014-cb.spiegel.homepage.dynamic-sitebar.nachrichtenportale"],
	altimghref:"http://servedby.flashtalking.com/click/2/37943;934877;804240;210;[FT_CONFID]/?g=[FT_GUID]&random=[FT_RANDOM]&ft_width=200&ft_height=600&url=https://www.postbank.de/home?kid=image-2014-cb.spiegel.homepage.dynamic-sitebar.nachrichtenportale",
	switchArray:["swf","serveDom", "statBaseURL", "utilityURL", "altimg", "altimghref", "viewableImpressionURL"],
	divID:"ftdiv934877",
	inDivID:"ftin934877",
	swfID:"ftswf934877",
	phdivID:"ftpos934877",
	altimgID:"ftalt934877",
	alttext:"Click here",
	altimgtarget:"_blank",
	altimgborder:"0",
	minflashversion:9,
	centreAd:false,
	wtype:"transparent",
	loadMethod:"full load",
	politeload:(false)?"1":"0",
	streamMode:(false)?"1":"0",
	customVars:"",
	ftlocal:"flashtalking/ftlocal.html",
	attachtobody:true,
	zIndex:77000,
	adVis: true ? 1 : 0,
	method: (9>7)?"external":"Fscommand",
	hideiframe:false,
	hideapplet:false,
	hideselect:false,
	hideobject:false,
	nosafari:false,
	nofirefox:false,
	nochrome:false,
	noopera:false,
	noBreakout:false,
	baggyFrameLimit:parseInt("15000",10)||15,
	w:window,
	iframe:false,
	loadFired:false,
	adDisplayed:false,
	expandTracked:false,
	customPos:false,
	customPosFunc:function(){},
	backupshown:false,
	lowerzIndex:1,
	coObjects:[],
	eventListeners:{},
	flashVarList:{},
	safeFrame: window.$sf && window.$sf.ext || false,
	secure:location.protocol=="https:",
	scriptLocation: document.getElementById("ftscript_m934877"),
	qsVars:[
		["ftguid","ftGUID_934877"],
		["ftcfid","ftConfID_934877"],
		["ftcustom","ftCustom_934877"],
		["fttime","ftTimestamp_934877"],
		["ftsection","ftSection_934877"]
	],
	flashVarHolder:[
		["adVis", "adVis"],
		["divID","divID"],
		["ftfuncid","pID"],
		["creativeID","creativeID"],
		["cID","cID"],
		["ftPlacementID","pID"],
		["aID","aID"],
		["ftMethod", "method"],
		["ftSetFileSize","setFileSize"],
		["ftStatBaseURL","statBaseURL"],
		["ftMVT","mvt"],
		["ftServeDom","serveDom"],
		["ftLinkMode","linkMode"],
		["ftLinkID","linkID"],
		["ftPL","politeload"],
		["ftStreamMode","streamMode"]
	],
	gFlashVarList:[
		["ftGUID","ftGUID_"],
		["ftConfID","ftConfID_"],
		["ftKeyword","ftKeyword_"],
		["ftSegment","ftSegment_"]
	],
	$:function(el){
		var o=this,
		x = el||o.divID,
		p={o:o};
		p.y=typeof x=="string"?o.w.document.getElementById(x):x;
		return new this.$Base(p);
	},
	flashVar:function x(){
		var o=this,
		a = [],
		fv = o.flashVarList;
		switch(arguments.length){
			case 1:
				a = arguments[0].replace(/[&=]/g,"-__-").split("-__-");
				if(a.length>1){
					for(var i=0,j=a.length;i<j;i+=2){
						x.call(o, a[i],a[i+1]);
					}
				}
			break;
			case 2:
				fv[arguments[0]]=arguments[1];
			break;
			default:
				for(var i in fv){
					a.push(i+"="+encodeURIComponent(fv[i]));
				}
			return a.join("&");
		}
	},
	bver:function(b, p){
		p = p||"appVersion";
		return (navigator[p].toLowerCase().indexOf(b.toLowerCase())>=0);
	},
	decode: function(s) {
		try {
			return decodeURIComponent(s);
		} catch(e) {
			return unescape(s);
		}
	},
	fver:function(){
		var axo,
		s = "Shockwave",
		f = "Flash",
		sf = s+" "+f;
		if(this.bver("MSIE")){
			//hardcode values - ie issue
			for(var i = 10; i>=3; i--){
				try {
					axo = new ActiveXObject(s+f+"."+s+f+"."+i);
					return parseFloat(axo.GetVariable("$version").match(/\b\d+\b/g).join("."));
				} catch (e) {}
			}
		}else{
			if (typeof navigator.plugins[sf] != "undefined")
		        return parseFloat(navigator.plugins[sf].description.substring(sf.length));
		}
	},
	macSaf:function(){
		var o=this;
		return (o.bver("Mac")&&o.bver("Safari")&&!o.bver("Chrome"));
	},
	setupQS:function(query){
		var o = this,
			a = query.split('&'),
			q = {},
			i = a.length,
			fn = function(ref, def){
				return q[ref]||def;
			},
			f = function(s){
				return o.decode(s).split('+').join(' ');
			},
			x;

			while(i--){
				x = a[i].split('=');
				x[1] = x.slice(1).join('=');
				q[f(x[0])] = f(x[1]);
			}
			if(window.qs && typeof qs.get==='function') {
				return qs.get;
			} else {
				return fn;
			}
	},
	addEventListener:function(type,func){
		if(typeof this.eventListeners[type]=="undefined")
			this.eventListeners[type]=[];
		if(typeof func=="function")
			this.eventListeners[type].push(func);
		if(type=="load"&&this.loadFired)
			func.call(this);
		if((type=="adonpage"||type=="adready")&&this.adDisplayed)
			func.call(this);
	},
	once:function(type, func) {
		var o = this;
		var newFunc = function(e) {
			var i = o.eventListeners[type].length;
			func(e);
			while(i--) {
				if(o.eventListeners[type][i] === newFunc) {
					o.eventListeners[type].splice(i,1);
				}
			}
		};
		o.addEventListener(type, newFunc);
	},
	dispatchEvent:function(type, msg){
		if(typeof this.eventListeners[type]!="undefined"){
			for(var i=0;i<this.eventListeners[type].length;i++){
				this.eventListeners[type][i].call(this, msg);
			}
		}
		if(type=="load"){
			this.loadFired = true;
		}
		if(type=="adonpage"||type==="backup"){
			this.adDisplayed = true;
		}
	},
	init:function(){
		var o=this,
		frameWidth=window.innerWidth||document.documentElement.offsetWidth,
		frameHeight=window.innerHeight||document.documentElement.offsetHeight,
		flash=false,
		addScripts = function() {
			var i = o.extscript.length;
			while(i--){
				if(o.extscript[i]!=="") {
					o.appendScriptToHead(o.replaceMacros(o.extscript[i]));
				}
			}
		};
		o.qs = o.setupQS(o.params);
		if(o.fver()>=o.minflashversion){
			flash=true;
		}
		if((o.nosafari&&o.bver("Saf")&&!o.bver("Chr"))||(o.nofirefox&&o.bver("fox"))||(o.noopera&&o.bver("Ope", "appName"))||(o.nochrome&&o.bver("Chr"))){
			flash=false;
		}
		if(!flash){
			o.attachtobody=false;
		}
		if(flash&&o.qs("ftiniframe","")!="false"&&!o.noBreakout&&window!=top&&!o.safeFrame&&frameWidth<=(o.width+o.baggyFrameLimit)&&frameHeight<=(o.height+o.baggyFrameLimit)){
			o.iframe = true;
			o.w = parent;
			if(o.breakout())
				return;
		}

		o.setup();

		if(!flash&&o.storeGUID&&!o.servedby&&!o.cdn){
			o.cdnSrc += o.guid+"&p="+encodeURIComponent(o.params);
			o.cdnSrc += "&c="+o.confID;
			o.cdnSrc += "&pID="+o.pID+"&xx="+String(o.pID).substr(0,2);
			o.cdnSrc += "&creativeID="+o.creativeID;
			o.insertParam(o.altimghref, {param:"ft_guid", value:o.guid});
			o.dispatchEvent("start");
			o.getBackup = o.getFrame;
			o.outputDiv(false);
		}else{
			o.outputExternals();
			o.dispatchEvent("start");
			if(o.storeGUID){
				delete o.qs.ftx;
				delete o.qs.fty;
			}
			o.outputDiv(flash);
			o.outputGlobals();
			if(o.storeGUID){
				o.output207(o.guid);
			}
		}

		if(o.adDisplayed) {
			addScripts();
		} else {
			o.addEventListener('load', addScripts);
		}
		
		o.addEventListener('visibleAd', function(bool){
			try{
				o.flashObject().ftAdVisible(bool ? 'visible' : 'undetectable');
			} catch(e) {}
		});
		o.dispatchEvent("end");	
	},
	breakout:function(){
		var o=this,
		d = o.getDomain(document.referrer),
		qString = "?ifsrc=",
		r="";
		this.setupExtraQS();
		if(o.iframe&&d!==location.host&&d!==""){
			if(self.location.href.indexOf(o.ftlocal)>-1){
				o.qs = function(a,b){
					return qs.get(a, b);
				};
			}else{
				if(o.secure)
					o.jsurl = o.jsurl.replace(/\bhttp:\/\/(cdn(?=\.flash)|video(?=\.flash)|stat(?=\.flash)|a(?=\.flash))/, "https://secure");
				qString+=encodeURIComponent(o.jsurl+"&"+o.params+o.wrapVars());
				r ="//"+d+"/"+o.ftlocal+qString;

				document.location.replace(r);
				return true;
			}
		}
		if(self.location.href.indexOf(o.ftlocal)>-1){
			o.qs = function(a,b){
				return qs.get(a, b);
			};
		}
		return false;
	},
	setup:function(){
		var o = this,
		w = window,
		p = o.pID,
		q = o.qs,
		qslist = o.qsVars,
		fvarList = o.flashVarHolder,
		gfvl = o.gFlashVarList,
		switchArray = o.switchArray,
		fv = {},
		t,i;
		if(typeof w["ftGUID_"+p]=="undefined"){
			for(var i = qslist.length; i--; ){
				w[qslist[i][1]]=q(qslist[i][0]);
			}
		}
		if(o.secure){
			for(i=switchArray.length;i--;){
				t = o[switchArray[i]];
				t = t.replace(/\bhttp:\/\/(cdn(?=\.flash)|video(?=\.flash)|stat(?=\.flash)|a(?=\.flash))/, "https://secure");
				o[switchArray[i]] = t.replace("http:", "https:");
			}
			for(i=o.clickTags.length;i--;){
				if(o.clickTags[i]){
					o.clickTags[i]=o.clickTags[i].replace("http:","https:");
				}
			}
		}
		for(var i = fvarList.length; i--; ){
			fv[fvarList[i][0]]=o[fvarList[i][1]];
		}
		for(var i = gfvl.length; i--; ){
			fv[gfvl[i][0]]=w[gfvl[i][1]+p];
		}
		if(typeof w["ftGeoC2_"+p] != "undefined"){
			fv.ftGeoCountry=w["ftGeoC2_"+p];
			fv.ftGeoState=w["ftGeoState_"+p];
			fv.ftGeoCity=w["ftGeoCity_"+p];
			fv.ftGeoISP=w["ftISP_"+p];
			fv.ftGeoSpeed=w["ftSpeed_"+p];
			fv.ftDMA=w["ftDMA_"+p];
			fv.ftLong=w["ftLong_"+p];
			fv.ftLat=w["ftLat_"+p];
			fv.ftPostal=w["ftPostal_"+p];	
		}
		o.guid = w["ftGUID_"+p];
		o.confID = w["ftConfID_"+p];
		o.ftId = window["ftId_"+o.pID] = window["ftId_"+o.pID]||o.qs("ft_id","");
		o.setupClickTags();
		o.setupBackupImp();
		for(var i in fv){
			o.flashVar(i, fv[i]);
		}
		o.flashVar(o.customVars);
		if (!(o.atSiteAlias === "" && o.atAdTagID === "")) {
			o.flashVar("utilityURL", o.utilityURL);
			o.flashVar("atSiteAlias", o.atSiteAlias);
			o.flashVar("atAdTagID", o.atAdTagID);
		}
		if(q("ftx","")!== ""||q("fty","")!==""){
			o.qs.ftx=q("ftx","0");
			o.qs.fty=q("fty","0");
		}
		o.setupLoadListener();
		o.setupResizeListener();
		if(o.bver("Macintosh")&&o.bver("Chrome")){
			o.addEventListener("adonpage",o.webkitTransform);
		}
		if(o.safeFrame) {
			o.safeFrame.register(o.width, o.height);
		}
	},
	outputDiv:function(flash){
		var o=this,
		divholder = new o.Node("div", o.w),
		posStyle = 'relative',
		left = "",
		top = "",
		ph = new o.Node("div", o.w),
		innerDiv = new o.Node("div", o.w),
		end = function(){
			o.dispatchEvent(flash?"adonpage":"backup");
			o.dispatchEvent("adready");
			o.getCrossOvers();
		},
		getZIndex = function(el){
			var x = o.$(el),
			y = o.$(el).getStyle("zIndex"),
			z = o.lowerzIndex;
			if(y&&!isNaN(y)){
				y++;
				return Math.max(y, z);
			} else {
				if(x.parent()!==x){
					return getZIndex(x.parent());
				}else{
					return z;
				}
			}
		};
		innerDiv.id = o.inDivID;
		if(o.qs("ftadz","")!==""){
			o.lowerzIndex=o.qs("ftadz",o.lowerzIndex);
			o.zIndex=o.qs("ftadz",o.zIndex);
		}
		innerDiv.setStyle("position","absolute").setStyle("height",o.macSaf()?o.height:(o.expHeight+"px")).setStyle("width",o.macSaf()?o.width:o.expWidth+"px");
		innerDiv.setStyle("left",(0-o.contractLeft)+"px").setStyle("top",(0-o.contractUp)+"px").setStyle("clip","rect("+o.contractUp+"px "+o.contractRight+"px "+o.contractDown+"px "+o.contractLeft+"px)");
		innerDiv.innerHTML = o.getSwf();

		if(o.qs.ftx||o.qs.fty){
			left = o.qs.ftx + "px";
			top = o.qs.fty + "px";
			posStyle = 'absolute';
		}
		if(o.attachtobody)
			posStyle = 'absolute';

		divholder.id=o.divID;
		divholder.setStyle('position',posStyle).setStyle('width',o.width+'px').setStyle('height',o.height+'px').setStyle("z-index", o.lowerzIndex);
		if(o.centreAd)
			divholder.setStyle('margin','0 auto');
		if(left!=="")
			divholder.setStyle('left', left).setStyle('top', top);
	
		if(o.customPos&&flash){
			o.addEventListener("load",function(){
				divholder.innerHTML = innerDiv.outerHTML();
				if(o.bver("MSIE")||o.bver("Trident")){
					o.w.document.body.insertAdjacentHTML("afterBegin", divholder.outerHTML());
				} else{
					o.w.document.body.appendChild(divholder.div());							
				}
				o.webkitFix();
				o.customPosFunc();
				o.addEventListener("resize", o.customPosFunc);
				end();
			});
		}else if(!flash||(!o.attachtobody&&!o.iframe)){
			if(flash) {
				divholder.innerHTML = innerDiv.outerHTML();
			} else {
				divholder.innerHTML=o.getBackup();
			}
			if(window.ftImp934877 && window.ftImp934877.jsAppend) {
				o.scriptLocation.parentNode.insertBefore(divholder.div(), o.scriptLocation.nextSibling);
			} else {
				document.write(divholder.outerHTML());
			}
			end();
		}else{
			if(o.iframe)
				frameElement.style.display = "none";
			if(o.attachtobody){
				ph.id = o.phdivID;
				ph.setStyle("width",o.width+"px").setStyle("height",o.height+"px");
				if(left!=="")
					ph.setStyle("left", left).setStyle("top", top).setStyle("position", posStyle);
				if(o.centreAd)
					ph.setStyle('margin','0 auto');
				if(!o.iframe){
					if(window.ftImp934877 && window.ftImp934877.jsAppend) {
						o.scriptLocation.parentNode.insertBefore(ph.div(), o.scriptLocation.nextSibling);
					} else {
							document.write(ph.outerHTML());
					}
					o.addEventListener("load",function(){
						var ph = o.$(o.phdivID);
						o.lowerzIndex = getZIndex(ph);
						divholder.innerHTML = innerDiv.outerHTML();
						if(o.bver("MSIE")||o.bver("Trident")){
							o.w.document.body.insertAdjacentHTML("afterBegin", divholder.outerHTML());
						} else{
							o.w.document.body.appendChild(divholder.div());							
						}
						o.webkitFix();
						o.$().alignTo(ph);
						o.$().style.zIndex = o.lowerzIndex;
						o.addEventListener("resize",function(){
							o.$().alignTo(ph);
						});
						end();
					});
				}else{
					ph = ph.div();
					divholder = divholder.div();
					frameElement.parentNode.insertBefore(ph,frameElement);
					o.lowerzIndex = getZIndex(ph);
					if(o.bver("MSIE")||o.bver("Trident")){
						o.w.document.body.appendChild(divholder);
						divholder.insertAdjacentHTML("afterBegin", innerDiv.outerHTML());							
					} else{
						divholder.innerHTML = innerDiv.outerHTML();
						o.w.document.body.appendChild(divholder);							
					}
					o.$().alignTo(ph);
					o.$().style.zIndex = o.lowerzIndex;
					o.addEventListener("resize",function(){o.$().alignTo(ph);});
					end();
				}
			}else{
				divholder = divholder.div();
				if(o.bver("MSIE")||o.bver("Trident")){
					frameElement.parentNode.insertBefore(divholder,frameElement);
					divholder.insertAdjacentHTML("afterBegin", innerDiv.outerHTML());
				}else{
					divholder.innerHTML = innerDiv.outerHTML();
					frameElement.parentNode.insertBefore(divholder,frameElement);
				}
				end();
			}
		}
		o.webkitFix();
		if(o.politeload==="1"&&flash&&o.minflashversion>7){
			o.addEventListener("load", function(){
				try{
					o.flashObject().politeReady();
				}catch(e){}
			});	
		}
	},
	getSwf:function(){
		var o=this,
		geostr="",
		div="";
		div += '<OBJECT '+(o.bver("MSIE")?'classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'data="'+o.swf+'" type="application/x-shockwave-flash"')+' ID="'+o.swfID+'" name="'+o.swfID+'" width="'+o.expWidth+'" height="'+o.expHeight+'">';
		div += '<PARAM NAME=movie VALUE="'+o.swf+'"/>';
		div += '<PARAM NAME=FlashVars VALUE="'+o.flashVar()+'"/>';
		div += '<PARAM NAME=quality VALUE="autohigh"/>';
		div += '<PARAM NAME=wmode VALUE="'+o.wtype+'"/>';
		div += '<PARAM NAME="allowScriptAccess" value="always"/>';
		div += '<PARAM NAME="allowFullScreen" value="true"/>';
		div += '</OBJECT>';
		if (o.method == "Fscommand"&&(o.bver("MSIE")||o.bver("Trident"))) {
			div += '<script id="fscom_' + o.pID + '" event="FSCommand(command,args)" for="' + o.swfID + '">';
			div += o.swfID + '_DoFSCommand(command,args);';
			div += '</script>';
		}
		return div;
	},
	getBackup:function(){
		var o=this,
		href = o.decode(o.addVClick(o.altimghref));
		o.backupshown = true;
		return '<a id="fta'+o.altimgID+'" href="'+href+'" target="'+o.altimgtarget+'"><img id="'+o.altimgID+'" sr'+'c="'+o.altimg+'?'+o.random()+'" alt="'+o.alttext+'" style="width:'+o.width+'px; height:'+o.height+'px; border:'+o.altimgborder+'px"/></a>';
	},
	getFrame:function(){
		var o = this;
		return '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="'+o.width+'" height="'+o.height+'" src="'+o.cdnSrc+'"></iframe>';
	},
	output207:function(guid){
		var o = this,
			fr = document.createElement("iframe"),
			cdnFr;
		fr.style.display = "none";
		if(o.servedby){
			cdnFr = fr.cloneNode();
			cdnFr.src = o.cdnGUID+guid;
			document.body.appendChild(cdnFr);
		}

		o.iDeviceImp = o.iDeviceImp+guid;
		o.iDeviceImp = o.insertParam(o.iDeviceImp, {param: "ft_creative", value:o.creativeID});
		o.iDeviceImp = o.insertParam(o.iDeviceImp, {param: "ft_configuration", value:window["ftConfID_"+o.pID]});
		fr.src = o.iDeviceImp+"&cachebuster="+o.random();
		document.body.appendChild(fr);
	},
	customPosition:function(posFunc){
		var o = this;
		o.customPos = true;
		o.customPosFunc = posFunc;
	},
	setupClickTags:function(){
		var o=this,
		i;
		o.modifyClicks();
		o.flashVar('clickTag',o.addVClick(o.clickTags[0]));
		for(i=o.clickTags.length;i--;){
			if(o.clickTags[i])
				o.flashVar('clickTag'+(i+1), o.addVClick(o.clickTags[i]));
		}
	},
	modifyClicks:function(){
		var o = this,
			insert = [
				{param:"ft_custom", value:window["ftCustom_"+o.pID]||""},
				{param: "ft_section",value: window["ftSection_" + o.pID] || ""},
				{param: "ft_id",value: o.ftId ? o.ftId : ""}
			], i, j;
		for(i=o.clickTags.length; i--; ){
			if(o.clickTags[i]) {
				j = insert.length;
				while(j--) {
					o.clickTags[i] = o.insertParam(o.clickTags[i], insert[j]);
				}
				o.clickTags[i]=o.replaceMacros(o.clickTags[i], true);
			}
		}
		j = insert.length;
		while(j--) {
			o.altimghref = o.insertParam(o.altimghref, insert[j]);
		}
		o.altimghref = o.replaceMacros(o.altimghref, true);
	},
	setupBackupImp:function(){
		var o = this;
		o.altimg = o.insertParam(o.altimg, {param: "ft_creative", value:o.creativeID});
		o.altimg = o.insertParam(o.altimg, {param: "ft_configuration", value:window["ftConfID_"+o.pID]});
	},
	insertParam:function(str, insert) {
		if (typeof str === "string" && insert.value !== "") {
			str = str.replace("/?", "/?" + insert.param + "=" + insert.value + "&");
		}
		return str;
	},
	addVClick: function(ct){
		return this.decode(this.qs("click",""))+ct;
	},
	getDomain:function(url){
		var d = url.match(/(?:.*\:\/\/)?([\w\.\-]+).*/),
		r = "";
		if(d!=null&&d.length>1)
			r = d[1];
		return r;
	},
	setupExtraQS:function(){
		var o = this,
		p = o.pID;
		if(typeof window["ftGeoC2_"+p]!=="undefined"){
			this.qsVars.push(["ftgc","ftGeoC2_"+p],
				["ftgs","ftGeoState_"+p],
				["ftgs","ftGeoState_"+p],
				["ftgcit","ftGeoCity_"+p],
				["ftgi","ftISP_"+p],
				["ftgsp","ftSpeed_"+p],
				["ftdma","ftDMA_"+p],
				["ftlg","ftLong_"+p],
				["ftlt","ftLat_"+p],
				["ftpst","ftPostal_"+p]);
		}
		if(typeof window["ftKeyword_"+p]!=="undefined"){
			this.qsVars.push(["ftkw", "ftKeyword_"+p]);
		}
		
		if(typeof window["ftClick_"+p]!=="undefined"&&o.params.indexOf("click")==-1){
			this.qsVars.push(["click", "ftClick_"+p]);
		}
	},
	wrapVars:function(){
		function makestr(n,v){
			return "&"+n+"="+encodeURIComponent(v);
		}
		var str = "",
		v = this.qsVars;
		for(var i = v.length; i--; ){
			str+=makestr(v[i][0],window[v[i][1]]);
		}
		return str;
	},
	setupLoadListener:function(){
		var o = this,
		f = function(){
			o.dispatchEvent("load");
		},
		isDOMReady = function() {
		    if( document && document.getElementsByTagName && document.getElementById && document.body ) {
				f();
		    }else{
				setTimeout(isDOMReady, 13);
		    }
		};
		if(o.loadMethod==="quickload"){
			isDOMReady();
		}else if(o.w.addEventListener){
			o.w.addEventListener(o.loadMethod==="DOMLoaded"?"DOMContentLoaded":"load",f,false);
		}else{
			if(o.loadMethod==="DOMLoaded") {
				o.w.document.attachEvent("onreadystatechange",function(){if(document.readyState=="complete")f();});
			} else {
				o.w.attachEvent("onload",f);
			}
		}
	},
	setupResizeListener:function(){
		var o = this,
		f = function(){
			o.dispatchEvent("resize");
		};
		if(o.w.addEventListener){
			o.w.addEventListener("resize",f,false);
		}else{
			o.w.attachEvent("onresize",f);
		}
	},
	outputExternals:function(){
		var o=this,
		i;
		function outputPixel(p){
			if(p) {
				new Image().src = o.replaceMacros(p);
			}
		}
		for(i=o.exttrack.length;i--;){
				outputPixel(o.exttrack[i]);
		}
	},
	replaceMacros:function(str, cb){
	var o = this,
	macro = /(\[|%5B|%255B)FT_RANDOM(\]|%5D|%255D)/g,
	conf = /(\[|%5B|%255B)FT_CONFID(\]|%5D|%255D)/g,
	guid = /(\[|%5B|%255B)FT_GUID(\]|%5D|%255D)/g,
	noCache = /(\[|%5B|%255B)noCachebuster(\]|%5D|%255D)/,
	tStamp = /(\[|%5B|%255B)FT_TIMESTAMP(\]|%5D|%255D)/g,
	r = o.random(),
	c = window["ftConfID_"+o.pID],
	g = window["ftGUID_"+o.pID],
	t = window["ftTimestamp_"+o.pID];
	if(noCache.test(str)){
		str = str.replace(noCache,"");
		return str.replace(conf, c);
	}
	str = str.replace(guid, g);
	str = str.replace(tStamp, t);
	str = !macro.test(str)&&!cb?str+'?'+r:str.replace(macro, r);
	return str.replace(conf, c);
},
	appendScriptToHead:function(scr){
		var div = this.$().target,
		newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.src = scr;
		div.appendChild(newScript);
	},
	getAbsLeft:function(id){
		var objLeft=id.offsetLeft,
		objParent;
		while(id.offsetParent!=null){
			objParent=id.offsetParent;			
			objLeft+=objParent.offsetLeft;
			id=objParent;
		}
		return objLeft;
	},
	getAbsTop:function(id){
		var objTop=id.offsetTop,
		objParent;
		while(id.offsetParent!=null){
			objParent=id.offsetParent;
			objTop+=objParent.offsetTop;
			id=objParent;
		}
		return objTop;
	},
	getCrossOvers:function(){
		var types = ["iframe","object","applet","select","embed"],
		o = this,
		adDiv = o.$(o.inDivID).target,
		i,
		objArray,
		j,
		obj1,
		obj2;
		o.coObjects = [];
		for(i=types.length; i--;){
			if(o["hide"+types[i]]){
				if(types[i]=="object") o.hideembed=true;
				objArray = o.w.document.getElementsByTagName(types[i]);
				for(j=objArray.length; j--;){
					obj1 = {y:o.$(adDiv).y(),x:o.$(adDiv).x(),w:adDiv.firstChild.offsetWidth,h:adDiv.firstChild.offsetHeight};
					obj2 = {y:o.$(objArray[j]).y(),x:o.$(objArray[j]).x(),w:objArray[j].offsetWidth,h:objArray[j].offsetHeight};
					if(o.checkCrossOver(obj1,obj2) && adDiv != objArray[j].parentNode){
						o.coObjects.push(objArray[j]);
					}
				}
			}
		}
	},
	checkCrossOver:function(obj1, obj2){
		return ((obj1.y <= (obj2.x + obj2.h)) && ((obj1.y + obj1.h) >= obj2.y) && (obj1.x <= (obj2.x + obj2.w)) && ((obj1.x + obj1.w) >= obj2.x));
	},
	expand:function(){
		var o = this,
		push = false,
		adDiv = o.$(o.inDivID),
		i;
		adDiv.style.clip="rect(0px "+o.expWidth+"px "+o.expHeight+"px 0px)";
		adDiv.style.zIndex = o.zIndex;
		if(o.safeFrame) {
			adDiv.style.left = "0";
			adDiv.style.top = "0";
		}
		o.$().style.zIndex = o.zIndex;
		if(o.macSaf()){
			adDiv.style.width = o.expWidth + "px";
			adDiv.style.height = o.expHeight + "px";
		}
		for(i=o.coObjects.length;i--;){
			o.coObjects[i].style.visibility = "hidden";
		}
		o.webkitFix();
		if(o.safeFrame) {
			if(o.pushdown) {
				push = o.safeFrame.supports('exp_push');
			} else {
				push = false;
			}
			o.safeFrame.expand({t: o.indentDown, l: o.indentAcross, r: o.expWidth, b: o.expHeight, push: push});
		}
		o.outputExtExpTrack();
		o.dispatchEvent("expand");
	},
	contract:function(){
		var o = this,
		adDiv = o.$(o.inDivID),
		i;
		adDiv.style.clip="rect("+o.contractUp+"px "+o.contractRight+"px "+o.contractDown+"px "+o.contractLeft+"px)";
		adDiv.style.zIndex = o.lowerzIndex;
		if(o.safeFrame) {
			adDiv.style.left = "-" + o.contractLeft + "px";
			adDiv.style.top = "-" + o.contractUp + "px";
		}
		o.$().style.zIndex = o.lowerzIndex;
		if(o.macSaf()){
			adDiv.style.width=o.width+"px";
			adDiv.style.height=o.height+"px";
		}	
		for(i=o.coObjects.length;i--;){
			o.coObjects[i].style.visibility = "visible";
		}		
		o.webkitFix();
		if(o.safeFrame) {
			o.safeFrame.collapse();
		}
		o.dispatchEvent("contract");
	},
	outputExtExpTrack: function() {
		var o = this,
		et = o.decode(this.qs("ftExpTrack", ""));
		if (et && !o.expandTracked) {
			new Image().src = o.replaceMacros(et);
			o.expandTracked = true;
		}
	},
	webkitFix:function(){
		try{
			this.$(this.swfID).style.webkitTransform='scale(1)';
		}catch(e){}
	},
	outputGlobals:function(){
		var o = this;
		o.fscommandFunc = function(command, args){
			if(command=="ftExpand_"+o.pID){
				o.expand();
			}
			if(command=="ftContract_"+o.pID){
				o.contract();
			}
		};
		o.w["ftExpand_"+o.pID]=function(){o.expand();};
		o.w["ftContract_"+o.pID]=function(){o.contract();};
		if(o.method=="Fscommand")
			o.w[o.swfID+"_DoFSCommand"]=o.fscommandFunc;
		
	},
	flashObject:function(m){
		return this.$(this.swfID).target;
	},
	random:function(x){
		var x = x||1000000000;
		return Math.floor(Math.random()*x);
	},
	Node:function(type, w){
		this.id = "";
		this.innerHTML = "";
		this.style = {};
		this.setStyle = function(style, value){
			this.style[style] = value;
			return this;
		};
		this.getStyle = function(){
			var s = "";
			for(var i in this.style){
				s += i + ":"+this.style[i]+"; ";
			}
			return s;
		};
		this.outerHTML = function(){
			return "<"+type+" id='"+this.id+"' style='"+this.getStyle()+"'>"+this.innerHTML+"</"+type+">";
		};
		this.div = function(){
			var d = w.document.createElement(type);
			d.id = this.id;
			d.style.cssText = this.getStyle();
			d.innerHTML = this.innerHTML;
			return d;
		};
	},
	$Base:function(p){
		var o = this;
		o.$=true;
		o.o = p.o;
		if(!p.y)
			p.y = {};
		o.target=p.y.$?p.y.target:p.y;
		o.style=p.y.style||{};
		o.parent=function(){
			if(o.target.parentNode&&o.target.parentNode!==p.o.w.document)
				return p.o.$(o.target.parentNode);
			else
				return o;
		};
		o.alignTo=function(ob){
			if(ob.$&&ob.target)
				ob=ob.target;
			p.y.style.left=p.o.$(ob).x()+"px";
			p.y.style.top=p.o.$(ob).y()+"px";
			return o;
		};
		o.x=function(){
			return p.o.getAbsLeft(o.target);
		};
		o.y=function(){
			return p.o.getAbsTop(o.target);
		};
		o.getStyle=function(style){
			var x = window.getComputedStyle?window.getComputedStyle(o.target,""):o.target.currentStyle;
			if(x !== null){
				try{
					return x[style];
				}catch(e){
					return "auto";
				}
			}else {
				return x;
			}
		};
	},
	webkitTransform:function(){
		var o = this,
		swf = null,
		set = false,
		refreshSwf = function(){
			swf.style.webkitTransform=set?"scale(1)":"";
			set = !set;
			setTimeout(refreshSwf,50);
		};
		try {
			swf = o.$(o.swfID);
			refreshSwf();
		} catch(e) {}
	}
};

//--start extensions


//405-5
ft934877.iab_hide = function(){
	var o = ft934877;
	var ad = o.$();
	ad.parent().target.removeChild(ad.target);
}
try{
	iab_hide = ft934877.iab_hide;
	window.parent.iab_hide = iab_hide;
}catch(e){};


//144-26
(function(o){
	o.sitebar = {
		pageHeight:0,
		pageWidth:0,
		windowWidth:0,
		windowHeight:0,
		minWidth:parseInt(o.width),
		minHeight:parseInt(o.height),
		firstRun:true,
		noVScale:false,
		getBrowserSize: function(){
			var p = o.sitebar;
			if (o.w.self.innerHeight) {	
				p.windowWidth = o.w.self.innerWidth;
				p.windowHeight = o.w.self.innerHeight;
					} else if (o.w.document.documentElement && o.w.document.documentElement.clientHeight) { 
						p.windowWidth = o.w.document.documentElement.clientWidth;
						p.windowHeight = o.w.document.documentElement.clientHeight;
							} else if (o.w.document.body) {
								p.windowWidth =o.w.document.body.clientWidth;
								p.windowHeight = o.w.document.body.clientHeight;				
							}		
			p.pageHeight = p.windowHeight;
			p.pageWidth = p.windowWidth;	
		},	
		calculateSize:function (){
			var p = o.sitebar;
			o.sitebar.getBrowserSize();
			if (o.fver()>=8){
				var leftPos = o.$().x();
				var topPos = o.$().y();
				if(o.bver("MSIE")){
					var newAdWidht = (p.pageWidth - leftPos)-20;
					var newAdHeight = (p.pageHeight - topPos)-10;
				}else{
					var newAdWidht = (p.pageWidth - leftPos)-20;
					var newAdHeight = (p.pageHeight - topPos)-10;
				}
				if(newAdWidht <=(p.minWidth)+30){
					o.$(o.divID).style.width=p.minWidth+'px';
					o.$(o.inDivID).style.width=p.minWidth+'px';
				}else{
					o.$(o.divID).style.width=Math.abs(parseInt(newAdWidht))+'px';
					o.$(o.inDivID).style.width=Math.abs(parseInt(newAdWidht))+'px';
				}
				if((newAdHeight <=(p.minHeight)+30) || (p.noVScale == true)){
					o.$(o.divID).style.height=p.minHeight+'px';
					o.$(o.inDivID).style.height=p.minHeight+'px';
				}else{
					o.$(o.divID).style.height=Math.abs(parseInt(newAdHeight))+'px';
					o.$(o.inDivID).style.height=Math.abs(parseInt(newAdHeight))+'px';
				}
			}
		},
		init:function(){
			var p = this,
			domain = o.w.location.hostname;
			o.addEventListener("adonpage", function(){
					if(o.$(o.phdivID).x() == 0){
						o.$().style.display = "none";
				}
				o.$(o.swfID).target.width = "100%";
				o.$(o.swfID).target.height = "100%";
				o.$(o.inDivID).style.clip="rect(auto auto auto auto)";
				o.sitebar.calculateSize();
				if(domain=="www.flashtalking.net"){
					o.$(o.divID).style.position="absolute";
				}else{
					o.$(o.divID).style.position="fixed";
				}
			});
			o.addEventListener("start", function(){
				if(o.qs.ftx || o.qs.fty || o.qs.ftscw){
					o.customPos = true;
				}
			});
			o.addEventListener("resize", function(){	
				o.sitebar.calculateSize();
				setTimeout("ft934877.sitebar.calculateSize()",200);
			;});	
		}()	
	}
	o.customPosFunc = function(){
			var q = o.qs
			p = o.sitebar;
	
			o.sitebar.getBrowserSize();
	
			if(q("ftscw","")!== ""){
				o.qs.ftscw=q("ftscw","0");
			}else{ o.qs.ftscw=""; }
	
				if(q("ftx","")== ""){ o.qs.ftx="0"; }
				
				if(q("fty","")== ""){ o.qs.fty="0"; }
				
			if(o.qs.ftscw !==""){	
		
				var newLeft = ((p.pageWidth - parseInt(o.qs.ftscw))/2) + parseInt(o.qs.ftscw) + ((o.qs.ftx== "")? 0:parseInt(o.qs.ftx)) + "px";
				if(parseInt(newLeft) >= (parseInt(o.qs.ftscw) + ((o.qs.ftx== "")? 0:parseInt(o.qs.ftx)))){
					o.$().style.left = newLeft;
				}else{
					o.$().style.left = parseInt(o.qs.ftscw) + ((o.qs.ftx== "")? 0:parseInt(o.qs.ftx)) + "px";
				}
			}else{
			if(p.firstRun){
					o.$().style.left = o.qs.ftx + "px";
					p.firstRun = false;
				}
			}
			o.$().style.top = o.qs.fty + "px";
}
})(ft934877);





//--end extensions

ft934877.init();

(function(ft){

    var externalURL = (location.protocol==="https:"?"https://secure":"http://cdn") +
            ".flashtalking.com/pageFold/ftpagefold_v3.0.16.js",
        extScript = null,
        adIsVisible = false;

    ft.viewableImpression = "http://servedby.flashtalking.com/imp/2/37943;934877;202;pixel;SpiegelDE;v0102FIXhomepage26082014imagedynamicsitebarxxnachrichtenportale/?ft_creative=804240&ft_configuration=";
    ft.viewableConversion = "false"==="true";
    ft.viewableImpressionThreshold = parseFloat("0.5",10);
    ft.viewableImpressionTime = parseInt("1000", 10);
    ft.customDefinition = ("true" === "true");

    function startPageFold(){

        window.ftPageFold_v3(ft);
        ft.addEventListener('adready',function(){
          ft.addEventListener('advisibility', onAdVisibility);
        });
    }

    function checkForLoad(){
        if(typeof window.ftPageFold_v3 === "undefined"){
            setTimeout(checkForLoad, 100);
        }else{
            startPageFold();
        }
    }

    function onAdVisibility(vis){
        if(!adIsVisible){
            if(vis >= ft.viewableImpressionThreshold){
                adIsVisible = true;
                ft.dispatchEvent('visibleAd', true);
            } else if (vis === false) {
                ft.dispatchEvent('visibleAd', false);
            }
        }
    }

    if(typeof window.ftPageFold_v3 === "undefined"){

        extScript = document.createElement("script");
        extScript.src = externalURL;

        if(typeof extScript.addEventListener === "undefined"){
            checkForLoad();
        }else{

            extScript.onload = startPageFold;
        }

        document.getElementsByTagName("head")[0].appendChild(extScript);
    }else{

        startPageFold();
    }

}(window["ft934877"]));
(function(){
	var o = ft934877,
	blocked = false,
	frameWidth=window.innerWidth||document.documentElement.offsetWidth,
	frameHeight=window.innerHeight||document.documentElement.offsetHeight,
	location = "",
	referrer = (o.qs("ft_referrer", "") != (""||'undefined'||null))?encodeURIComponent(o.qs("ft_referrer", "")):encodeURIComponent(window.document.referrer),
	frame = false,
	random = Math.floor(Math.random()*10000);

	if(o.qs("ftiniframe","")!="false"&&window!=top&&frameWidth<(o.width+10)&&frameHeight<(o.height+10)){
		frame = true;
		location = encodeURIComponent(window.document.referrer);
	}else{
		location = encodeURIComponent(window.top.location.href);
	}
	if (window.location.protocol != "https:") {
		var url = "http://t4ft.de/tp/?t="+random+"&aid=1265&fpid=934877&fcid=37943&b="+blocked+"&l="+location+"&f="+frame+"&r="+referrer;
   		}else{
    		var url = "https://t4ft.de/tp/?t="+random+"&aid=1265&fpid=934877&fcid=37943&b="+blocked+"&l="+location+"&f="+frame+"&r="+referrer;
    	}
	new Image().src = url;
})();//Scriptblock for batch media ad visibility measurement
var bm=document.createElement("script")
if (window.location.protocol != "https:") {bm.src="http://t4ft.de/c/ftg_vis.min.js"}
else{bm.src="https://t4ft.de/c/ftg_vis.min.js"}
bm.id="bmav"
document.body.appendChild(bm);

function csl(){if (document.getElementById("bmav") && typeof ftgVis != 'undefined'){
ftgVis.init({aid: 1265,fcid: 37943,fpid: 934877,elements: {1: "ftdiv934877"}});}else{setTimeout("csl()",100)}};
csl();