(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 116,
	height: 84,
	fps: 51,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.w3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#728C9D").s().p("AILBsQjnizkkAAQkjAAjnCzQgGAEgHAAQgJAAgHgIQgFgGACgIQABgIAGgFQDyi8ExAAQEyAADwC8QAQAMgMAPQgFAGgIACIgDAAQgFAAgGgEg");
	this.shape.setTransform(55.6,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.2,22.5);


(lib.w2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#728C9D").s().p("AEJA/Qh1hbiUAAQiTAAh2BbQgEAEgHAAQgJAAgHgIQgFgHACgHQABgIAGgFQB/hiChAAQCiAACABhQAMAMgKAQQgGAIgIAAQgGAAgHgEg");
	this.shape.setTransform(29.7,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.5,13.6);


(lib.w1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#728C9D").s().p("AB2AlQg1gnhBAAQhCAAg0AnQgEAEgIAAQgJAAgGgHQgFgHABgHQABgIAHgFQBAgwBNAAQBNAABAAwQAPALgLAQQgGAIgIAAQgGAAgHgFg");
	this.shape.setTransform(15.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,8.6);


(lib.w0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#728C9D").s().p("AgiAjQgGgFgDgFQgHgMAAgNQAAgMAHgKQADgHAGgGQAPgPATAAQAVAAAPAPQAOAQAAATQAAAWgOANQgPAQgVAAQgTAAgPgQg");
	this.shape.setTransform(5.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,10.3);


// stage content:
(lib.wifi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// w3
	this.instance = new lib.w3();
	this.instance.parent = this;
	this.instance.setTransform(58.1,19.6,1,1,0,0,0,55.6,11.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,y:14.5,alpha:1},26,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04,y:11.7,alpha:0},25,cjs.Ease.get(1)).to({_off:true},1).wait(32));

	// w2
	this.instance_1 = new lib.w2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.1,38.9,1,1,0,0,0,29.7,6.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regX:29.8,scaleX:1.16,scaleY:1.16,x:58.2,y:33.9,alpha:1},26,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27,y:32.9,alpha:0},25,cjs.Ease.get(1)).to({_off:true},1).wait(47));

	// w1
	this.instance_2 = new lib.w1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.2,58.5,1,1,0,0,0,15.1,4.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:4.2,scaleX:1.12,scaleY:1.12,y:56.8,alpha:1},26,cjs.Ease.get(-1)).to({scaleX:1.3,scaleY:1.3,y:54.9,alpha:0},25,cjs.Ease.get(1)).to({_off:true},1).wait(58));

	// w0
	this.instance_3 = new lib.w0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.1,77.2,1,1,0,0,0,5.1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.1,96.2,30.1,28.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;