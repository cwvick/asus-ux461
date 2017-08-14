/*USE SGV*/
window.svgeezy=function(){return{init:function(t,i){this.avoid=t||false;this.filetype=i||"png";this.svgSupport=this.supportsSvg();if(!this.svgSupport){this.images=document.getElementsByTagName("img");this.imgL=this.images.length;this.fallbacks()}},fallbacks:function(){while(this.imgL--){if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var t=this.images[this.imgL].getAttribute("src");if(t===null){continue}if(this.getFileExt(t)=="svg"){var i=t.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",i)}}}},getFileExt:function(t){var i=t.split(".").pop();if(i.indexOf("?")!==-1){i=i.split("?")[0]}return i},hasClass:function(t,i){return(" "+t.className+" ").indexOf(" "+i+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
/*! responsiveSlides*/



(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);

//       **************   center wrap   **************
	var productName = 'box-productOverview-containter';   
	var product;
	
	var windowW, windowH ;
	
	var Main = function() {
		var init = function() {
			product = $('#' + productName);
			windowResizeInit();
		}
	
		function windowResizeInit() {
			$(window).resize(function() {
				windowW = $(window).width();
				windowH = $(window).height();

				product.css({
					width: windowW,
					marginLeft: -windowW / 2
				})
				
			}).resize();
		}
		return {
			init: init
		};
	}();


////////////////////////////////////////////////////////////////



$(document).ready(function() {
	
		//Center wrap/*----------------------------------------------------------------------------*\
		
		Main.init();
		
		//scroll top/*----------------------------------------------------------------------------*\

		$(window).scroll(function(){
			if($(window).scrollTop() >1000){
				console.log("is more");
				$("#toTop").fadeIn("slow");
			}
			else {
				console.log("is less");
				$("#toTop").fadeOut("slow");
			}
		});

		$("#toTop").click(function(){$("html, body").animate({scrollTop:0},800);});


		//SVG  /*----------------------------------------------------------------------------*\
		svgeezy.init(false, 'png');
	

	//slider

	  $("#screenmode").responsiveSlides({
        auto: true,
        speed:800,
        maxwidth: 'auto', 
        manualControls: '#screenmode-pager',
      });

	
	

});

$(window).load(function() {

	
	
//  parallax SCROLLMAGIC/*----------------------------------------------------------------*\
//		var controller;
//		
//			controller = new ScrollMagic({});
			




/*Built for All-Day People*/
//			var tween = new TimelineMax ()
//				.add([
//					TweenMax.fromTo("#trigger-object-a .box-object-a", .1,{rotation:0}, {rotation:1080, ease: Linear.easeNone}),
//				]);
//			var scene = new ScrollScene({triggerElement: ".trigger-start", duration: $(window).height()*1.2})
//							.setTween(tween)
//							.addTo(controller);
//
//			var tween = new TimelineMax ()
//				.add([
//					TweenMax.fromTo("#trigger-object-b .box-object-b", .1,{rotation:330}, {rotation:450, ease: Linear.easeNone}),
//				]);
//			var scene = new ScrollScene({triggerElement: ".trigger-start", duration: $(window).height()*1.2})
//							.setTween(tween)
//							.addTo(controller);
//			var tween = new TimelineMax ()
//				.add([
//					TweenMax.fromTo("#trigger-object-h .box-object-h", .1,{rotation:330}, {rotation:480, ease: Linear.easeNone}),
//				]);
//			var scene = new ScrollScene({triggerElement: ".trigger-start", duration: $(window).height()*1.2})
//							.setTween(tween)
//							.addTo(controller);
////
//			var tween = new TimelineMax ()
//				.add([
//					TweenMax.fromTo(".wrap-connect .wrap-connect-img .box-img-cent", .1,{top:0}, {top:-50, ease: Linear.easeNone}),
//				]);
//			var scene = new ScrollScene({triggerElement: ".wrap-connect", duration: $(window).height()*1.2})
//							.setTween(tween)
//							.addTo(controller);

		}); 

	 
				



			
