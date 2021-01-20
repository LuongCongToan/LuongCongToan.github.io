window.__require=function t(e,o,n){function i(a,c){if(!o[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var u=o[a]={exports:{}};e[a][0].call(u.exports,function(t){return i(e[a][1][t]||t)},u,u.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({Tutorial:[function(t,e,o){"use strict";cc._RF.push(e,"07d6aowdoBPBpqBOOdM8Ssy","Tutorial");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./input-control"),c=cc._decorator,s=c.ccclass,l=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.animation=null,e.showTutorial=!1,e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){o.instance=this},e.prototype.update=function(t){o.isEnable&&(this.showTutorial&&Date.now()-a.default.instance.lastTimeInput>2e3?this.Fading(!0,t):this.Fading(!1,t))},e.prototype.Fading=function(t,e){var o=this.node.opacity+(t?1:-1)*e*255;o=cc.misc.clampf(o,0,255),this.node.opacity=o,o>=120&&!this.animation.node.active?(this.animation.node.active=!0,this.animation.play("Tutorial_0")):0==o&&this.animation.node.active&&(this.animation.stop("Tutorial_0"),this.animation.node.active=!1)},e.prototype.Hide=function(){o.isEnable=!1,this.animation.node.active&&(this.animation.stop("Tutorial_0"),this.animation.node.active=!1),this.node.opacity=0,this.node.active=!1},e.isEnable=!0,r([l(cc.Animation)],e.prototype,"animation",void 0),o=r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./input-control":"input-control"}],"game-control":[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","game-control");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./game"),c=t("./input-control"),s=t("./mesh-triangle"),l=t("./mess-effect"),u=t("./Tutorial"),p=t("./utils"),h=cc._decorator,d=h.ccclass,f=h.property,y=(h.executeInEditMode,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mesh_node=null,e.gameCamera=null,e.fMainRootScale=.18,e.RotateToTarget=function(){return cc.tween().to(.5,{rotation:e.target},{progress:function(t,o,n,i){var r=t.lerp(o,i);return e.node.setRotation(r),r}})},e.CreateTriangles=function(t){return cc.tween().call(function(){e.started=!1,o.factorRotZ=0}).delay(.01).call(function(){if(u.default.isEnable)cc.Quat.fromEuler(e.target,-50,50,0);else{var t=p.default.Random(30,150)*(Math.random()<=.5?1:-1),o=p.default.Random(160,200)*(Math.random()<=.5?1:-1),n=p.default.Random(10,80)*(Math.random()<=.5?1:-1);cc.Quat.fromEuler(e.target,t,o,n)}var i=cc.v3();cc.Vec3.random(i),i.mulSelf(360),cc.Quat.fromEuler(e.rotation,i.x,i.y,i.z),e.node.setRotation(e.rotation)}).delay(.05).call(function(){e.CreateTriangleMeshes(t),e.angleDistance=150,e.canRotate=!0})},e.rotateSpeed=45e3,e.smooth=.3,e.finishSmooth=.06,e.inertia=.05,e.started=!1,e.rotation=cc.quat(),e.target=cc.quat(),e.angleDiff=0,e.lastFrameQuaternion=cc.quat(),e.lastPos=cc.Vec3.ZERO,e.targetRotX=0,e.targetRotY=0,e._deltaX=0,e._deltaY=0,e._rotateZ=0,e.canRotate=!1,e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){o.instance=this,console.log("GameControl -> "+this.node.zIndex)},e.prototype.start=function(){this.node.setScale(this.fMainRootScale)},e.prototype.LoadNextTrack=function(t,e){var o=this;void 0===e&&(e=null),this.CreateTriangles(t).then(this.RotateToTarget().clone(this)).call(function(){o.started=!0,e&&e()}).clone(this).start()},e.prototype.FadeOut=function(){this.node.getComponentsInChildren(s.default).forEach(function(t){t.node.activeInHierarchy&&t.FadeOut()})},e.prototype.ClearTriangles=function(){for(;this.node.childrenCount>1;){var t=this.node.children[1];this.node.removeChild(t,!0)}this.started=!1,this.node.setRotation(p.default.QuatIdentity())},e.prototype.CreateTriangleMeshes=function(t){for(var e in t.json){var o=t.json[e],n=parseInt(o.amount),i=o.color.split(","),r=255*parseFloat(i[0]),a=255*parseFloat(i[1]),c=255*parseFloat(i[2]),s=cc.color(r,a,c);if(3==n){for(var l=[],u=1;u<=3;u++){var p=o.borders[u.toString()].split(",");l.push(cc.v2(parseFloat(p[0]),parseFloat(p[1])))}this.CreateTriangleMesh(l,s,e)}}},e.prototype.CreateTriangleMesh=function(t,e,o){var n=cc.v3(t[0]),i=cc.v3(t[1]),r=cc.v3(t[2]),a=n,c=i,u=r,p=a.add(c).add(u).div(3),h=this.fMainRootScale,d=this.RandomPoint(n,i,r);n=d[0],i=d[1],r=d[2];var f=n.add(i).add(r).div(3);n=n.sub(f).mul(h),i=i.sub(f).mul(h),r=r.sub(f).mul(h),a=a.sub(p).mul(h),c=c.sub(p).mul(h),u=u.sub(p).mul(h);var y=cc.instantiate(this.mesh_node);y.name="obj_"+o,y.parent=this.node,y.position=f,y.scale=5.5555;var m=y.getComponent(s.default),v=y.getComponent(l.default);this.IsClockWise(n,i,r)?(m.draw(r,i,n,e),v.SetOriginalVertices(u,c,a,p,e)):(m.draw(n,i,r,e),v.SetOriginalVertices(a,c,u,p,e)),y.active=!0},e.prototype.IsClockWise=function(t,e,o){return(e.x-t.x)*(o.y-e.y)-(e.y-t.y)*(o.x-e.x)>=0},e.prototype.CalcRatio=function(t){return(t*this.fMainRootScale+1e3)/1e3},e.prototype.RandomPoint=function(t,e,o){var n=p.default.Random(-400,300),i=n+p.default.Random(100),r=this.CalcRatio(i),a=t.mul(r).sub(cc.v3(0,0,i)),c=n+p.default.Random(100);r=this.CalcRatio(c);var s=e.mul(r).sub(cc.v3(0,0,c)),l=n+p.default.Random(100);return r=this.CalcRatio(l),[a,s,o.mul(r).sub(cc.v3(0,0,l))]},e.prototype.GetAngleDistance=function(){return this.angleDistance},e.prototype.GetAngleDistanceRatio=function(){return this.angleDistance/180},e.prototype.UpdateAngleDistance=function(){var t=cc.quat();cc.Quat.fromEuler(t,this.node.eulerAngles.x,this.node.eulerAngles.y,0);var e=p.default.QuatIdentity(),o=p.default.QuatAngle(e,t);o=cc.misc.clampf(o,0,180),this.angleDistance=Math.floor(180-o)},e.prototype.ProcessInput=function(t){var e=c.default.instance.GetData();if(null!=e){var n=p.default.QuatIdentity();Math.abs(this.rotation.x-n.x)<.02&&Math.abs(this.rotation.y-n.y)<.02&&this.angleDiff<.1&&(this.canRotate=!1);var i=e.x/cc.winSize.width*-this.rotateSpeed,r=e.y/cc.winSize.height*this.rotateSpeed;this._deltaX=p.default.Lerp(this._deltaX,i,.5,.01),this._deltaY=p.default.Lerp(this._deltaY,r,.5,.01),this._rotateZ=cc.misc.clampf(.2*(this._deltaX+this._deltaY),-90,90),o.factorRotZ=p.default.Lerp(o.factorRotZ,this._rotateZ,t,.1),this.targetRotX=cc.misc.lerp(this.targetRotX,this._deltaX,this.smooth)*t,this.targetRotY=cc.misc.lerp(this.targetRotY,this._deltaY,this.smooth)*t,this.RotateAroundAxis(cc.v3(1,0,0),this.targetRotY),this.RotateAroundAxis(cc.v3(0,1,0),this.targetRotX)}else this._deltaX=p.default.Lerp(this._deltaX,0,.4,.01),this._deltaY=p.default.Lerp(this._deltaY,0,.4,.01),this.targetRotX=cc.misc.lerp(this.targetRotX,0,this.inertia),this.targetRotY=cc.misc.lerp(this.targetRotY,0,this.inertia),this.RotateAroundAxis(cc.v3(1,0,0),this.targetRotY),this.RotateAroundAxis(cc.v3(0,1,0),this.targetRotX);u.default.isEnable&&(cc.Quat.fromEuler(this.rotation,this.node.eulerAngles.x,-this.node.eulerAngles.x,0),this.node.setRotation(this.rotation))},e.prototype.RotateAroundAxis=function(t,e){var o=cc.quat();cc.Quat.fromAxisAngle(o,t,cc.misc.degreesToRadians(e));var n=p.default.GetRotation(this.node);cc.Quat.multiply(this.rotation,o,n),this.node.setRotation(this.rotation)},e.prototype.update=function(t){if(this.started){if(this.canRotate)this.ProcessInput(t);else{var e=p.default.QuatIdentity();cc.Quat.slerp(this.rotation,this.rotation,e,this.finishSmooth),this.node.setRotation(this.rotation),p.default.QuatAngle(e,this.rotation)<1&&(cc.Quat.slerp(this.rotation,this.rotation,e,3*this.finishSmooth),this.started=!1,this.node.setRotation(e),a.default.instance.ShowResult())}this.UpdateAngleDistance(),this.angleDiff=p.default.QuatAngle(this.rotation,this.lastFrameQuaternion),this.lastFrameQuaternion=this.rotation}},e.prototype.PlaySplitEffect=function(){this.node.getComponentsInChildren(l.default).forEach(function(t){t.node.activeInHierarchy&&t.DoEffect()})},e.prototype.GetFactorRotZ=function(){return this.node.eulerAngles.z+3.6*o.factorRotZ*(1-this.GetAngleDistanceRatio())},e.factorRotZ=0,r([f(cc.Node)],e.prototype,"mesh_node",void 0),r([f(cc.Camera)],e.prototype,"gameCamera",void 0),r([f()],e.prototype,"fMainRootScale",void 0),r([f()],e.prototype,"rotateSpeed",void 0),r([f()],e.prototype,"smooth",void 0),r([f()],e.prototype,"finishSmooth",void 0),r([f()],e.prototype,"inertia",void 0),o=r([d],e)}(cc.Component));o.default=y,cc._RF.pop()},{"./Tutorial":"Tutorial","./game":"game","./input-control":"input-control","./mesh-triangle":"mesh-triangle","./mess-effect":"mess-effect","./utils":"utils"}],game:[function(t,e,o){"use strict";cc._RF.push(e,"093cdMVhGZIGpsoRlvT3Gaa","game");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0}),o.GameState=void 0;var a,c=t("./game-control"),s=t("./icon-holder"),l=t("./sound-manager"),u=t("./Tutorial"),p=cc._decorator,h=p.ccclass,d=p.property;(function(t){t[t.Load=0]="Load",t[t.Prepared=1]="Prepared",t[t.Started=2]="Started",t[t.CompleteTrack=3]="CompleteTrack",t[t.Paused=4]="Paused",t[t.Finished=5]="Finished"})(a=o.GameState||(o.GameState={}));var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameControl=null,e.amazingNode=null,e.efxFinished=null,e.gameState=a.Load,e._initializedStep={Audio:!1,JsonData:!1},e.amazingStr=["Amazing","Wonderful","Marvellous"],e.polydata={},e.onSoundLoaded=function(){l.default.instance.SetAllMusicVolume(0),e._initializedStep.Audio=!0},e.outro=null,e.retryBG=null,e.outroBtnBG=null,e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){var t=this;o.instance=this,console.log("GamePlay -> "+this.node.zIndex),cc.resources.loadDir("polyjson",cc.JsonAsset,function(e,o){o.forEach(function(e){t.polydata[e.name]=e}),t._initializedStep.JsonData=!0})},e.prototype.update=function(){if(this.gameState<a.Finished&&cc.director.getTotalTime()>3e4)return this.gameState=a.Finished,void this.OnPlayerFinish(!1);if(this.gameState==a.Load){var t=!0;for(var e in this._initializedStep)if(0==this._initializedStep[e]){t=!1;break}t&&this.InitGame()}},e.prototype.InitGame=function(){var t=this;this.gameControl.LoadNextTrack(this.polydata["1_gem"],function(){l.default.instance.PlayAllMusic(!0),l.default.instance.SetMusicVolume(0,0,1,!0),t.gameState=a.Started,u.default.instance.showTutorial=!0}),this.gameState=a.Prepared},e.prototype.ShowResult=function(){u.default.isEnable&&u.default.instance.Hide(),console.log("TODO -> firework particle !"),this.PlayEffect()},e.prototype.OnTrackCompleted=function(){switch(this.gameState=a.CompleteTrack,o.currentTrack){case 0:l.default.instance.SetVolume(1,1,!0);break;case 1:l.default.instance.SetVolume(2,1,!0);break;case 2:l.default.instance.SetVolume(0,0,!0),l.default.instance.SetVolume(1,0,!0),l.default.instance.SetVolume(2,0,!0),l.default.instance.SetVolume(3,1,!0)}},e.prototype.PlayEffect=function(){var t=this;cc.tween(this).call(function(){t.amazingNode.getComponent(cc.RichText).string=t.amazingStr[o.currentTrack].toUpperCase(),t.amazingNode.getComponent(cc.Animation).play("Amazing"),t.OnTrackCompleted()}).delay(.4).call(function(){t.PlayFinishEffect()}).delay(.1).call(function(){t.gameControl.PlaySplitEffect()}).delay(2.2).then(cc.tween(this).call(function(){t.gameControl.FadeOut()})).then(cc.tween(this).call(function(){s.default.instance.Play_Alpha(),t.gameControl.ClearTriangles()})).delay(.1).then(cc.tween(this).call(function(){s.default.instance.Play_FlyAndScale()})).delay(1.5).call(this.NextTrack.bind(this)).start()},e.prototype.PlayFinishEffect=function(){this.efxFinished.getComponentsInChildren(cc.ParticleSystem3D).forEach(function(t){t.play()}),console.log("PlayEffect -> TODO Play Particle effFinishedParticles ")},e.prototype.NextTrack=function(){var t=this;o.currentTrack+=1;var e=1==o.currentTrack?this.polydata["2_butterfly"]:this.polydata["3_guitar"];o.currentTrack<3?this.gameControl.LoadNextTrack(e,function(){t.gameState=a.Started}):this.OnPlayerFinish()},e.prototype.OnPlayerFinish=function(t){void 0===t&&(t=!0),u.default.isEnable&&u.default.instance.Hide(),t||(this.outroBtnBG.spriteFrame=this.retryBG),this.outro.active=!0},e.prototype.OnButtonOutroClicked=function(){cc.sys.openURL("https://play.google.com/store/apps/details?id=com.amanotes.jumping.man&hl=en&gl=US")},e.currentTrack=0,r([d(c.default)],e.prototype,"gameControl",void 0),r([d(cc.Node)],e.prototype,"amazingNode",void 0),r([d(cc.Node)],e.prototype,"efxFinished",void 0),r([d(cc.Node)],e.prototype,"outro",void 0),r([d(cc.SpriteFrame)],e.prototype,"retryBG",void 0),r([d(cc.Sprite)],e.prototype,"outroBtnBG",void 0),o=r([h],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./Tutorial":"Tutorial","./game-control":"game-control","./icon-holder":"icon-holder","./sound-manager":"sound-manager"}],"icon-holder":[function(t,e,o){"use strict";cc._RF.push(e,"40ea8dDljZMub9n8W9Kw8J3","icon-holder");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./game"),c=t("./icon-track"),s=cc._decorator,l=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iconTracks=[],e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){o.instance=this},e.prototype.Play_FlyAndScale=function(){this.iconTracks[a.default.currentTrack].Play_FlyAndScale()},e.prototype.Play_Alpha=function(){this.iconTracks[a.default.currentTrack].iconImage.active=!0,cc.tween(this.iconTracks[a.default.currentTrack].iconImage).call(function(){return console.log("Play_Alpha Start --\x3e")}).to(.1,{opacity:255}).call(function(){return console.log("Play_Alpha End --\x3e")}).start()},r([u({type:c.default})],e.prototype,"iconTracks",void 0),o=r([l],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./game":"game","./icon-track":"icon-track"}],"icon-track":[function(t,e,o){"use strict";cc._RF.push(e,"648d123se1Adb+3iH0xPL8d","icon-track");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,c=a.ccclass,s=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.iconImage=null,e.coverCircle=null,e.coverWhite=null,e.twIcon=null,e.twCirle=null,e.twWhite=null,e}return i(e,t),e.prototype.onLoad=function(){var t=this;this.twIcon=cc.tween().parallel(cc.tween(this.iconImage).to(1,{position:cc.v3(0,0,0)},{progress:function(t,e,o,n){return t.mul(1-n).add(e.mul(n))}}),cc.tween(this.iconImage).to(.5,{scale:.25},{progress:function(t,e,o,n){return t*(1-n)+e*n}})).delay(.8).call(function(){return console.log("spectrum --\x3e TODO")}).delay(.5).call(function(){t.iconImage.active=!1}),this.twWhite=cc.tween().delay(1.4).to(.4,{opacity:255}).to(.4,{opacity:0}),this.twCirle=cc.tween().delay(2).to(.4,{opacity:255}).then(cc.tween(this.coverCircle).by(5,{angle:-360}).repeatForever())},e.prototype.Play_FlyAndScale=function(){this.twIcon.clone(this.iconImage).start(),this.twWhite.clone(this.coverWhite).start(),this.twCirle.clone(this.coverCircle).start()},r([s(cc.Node)],e.prototype,"iconImage",void 0),r([s(cc.Node)],e.prototype,"coverCircle",void 0),r([s(cc.Node)],e.prototype,"coverWhite",void 0),r([c],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],"input-control":[function(t,e,o){"use strict";cc._RF.push(e,"b5cc3sIV5hGELkUkYPUyqHH","input-control");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./game-control"),c=cc._decorator,s=c.ccclass,l=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lastPosition=cc.Vec3.ZERO,e.actualPosition=cc.Vec3.ZERO,e.touchData=[],e.lastTimeInput=0,e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){o.instance=this,console.log(""+cc.winSize)},e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this)},e.prototype.onTouchStart=function(t){this.lastTimeInput=Date.now(),this.lastPosition=this.CorrectTouchPoint(t.getLocation()),this.actualPosition=cc.v3(this.lastPosition),a.default.instance.targetRotX=0,a.default.instance.targetRotY=0},e.prototype.onTouchMove=function(t){this.actualPosition=this.CorrectTouchPoint(t.getLocation());var e=this.actualPosition.sub(this.lastPosition);0===e.x&&0===e.y||this.touchData.push(e),this.lastPosition=this.CorrectTouchPoint(t.getLocation())},e.prototype.onTouchEnd=function(){},e.prototype.CorrectTouchPoint=function(t){return cc.v3(t.x-cc.winSize.width/2,t.y-cc.winSize.height/2,0)},e.prototype.GetData=function(){return 0==this.touchData.length?null:this.touchData.shift()},o=r([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{"./game-control":"game-control"}],"mesh-triangle":[function(t,e,o){"use strict";cc._RF.push(e,"56cfaLszqpAsbeOtlF9/UF8","mesh-triangle");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./game-control"),c=cc._decorator,s=c.ccclass,l=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.gameControl=null,e.renderer=null,e.cameraNode=null,e.step=0,e.setMeshColor=function(t){e.renderer.mesh.setVertices(cc.gfx.ATTR_COLOR,[t,t,t])},e.DOAlpha=function(t){return cc.tween().to(.1,{opacity:t},{progress:function(t,e,o,n){return cc.misc.lerp(t,e,n)}})},e}return i(e,t),e.prototype.start=function(){this.DOAlpha(255).clone(this.node).start()},e.prototype.FadeOut=function(){this.DOAlpha(0).clone(this.node).start()},e.prototype.update=function(){var t=this.node.parent.eulerAngles,e=this.gameControl.GetFactorRotZ(),o=cc.quat();cc.Quat.fromEuler(o,-t.x,-t.y,e),this.node.setRotation(o)},e.prototype.updateColor=function(t){if(this.step!=t){this.step=t;var e=.2+.8*this.step/150,o=cc.color();cc.Color.scale(o,this.color,e),this.setMeshColor(o)}},e.prototype.draw=function(t,e,o,n){var i=cc.gfx,r=new i.VertexFormat([{name:i.ATTR_POSITION,type:i.ATTR_TYPE_FLOAT32,num:3},{name:i.ATTR_COLOR,type:i.ATTR_TYPE_UINT8,num:4,normalize:!0}]),a=new cc.Mesh;a.init(r,3,!0),a.setVertices(i.ATTR_POSITION,[t,e,o]),a.setVertices(i.ATTR_COLOR,[n,n,n]),a.setIndices([0,1,2]),this.color=n,this.renderer.mesh=a},r([l(a.default)],e.prototype,"gameControl",void 0),r([l(cc.MeshRenderer)],e.prototype,"renderer",void 0),r([l(cc.Node)],e.prototype,"cameraNode",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./game-control":"game-control"}],"mess-effect":[function(t,e,o){"use strict";cc._RF.push(e,"26feeUd5kRFPLpyK+jdGp6v","mess-effect");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./mesh-triangle"),c=cc._decorator,s=c.ccclass,l=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mesh=null,e.a=cc.v3(),e.b=cc.v3(),e.c=cc.v3(),e.center=cc.v3(),e.color=cc.color(255,255,255,50),e.DOPosition=function(t,e){return cc.tween().to(e,{position:t},{easing:"quadIn"})},e.DOScale=function(t,e){return cc.tween().to(e,{scale:t},{easing:"quadIn"})},e.DOColor=function(t,o){return cc.tween().to(o,{color:t},{progress:function(t,o,n,i){var r=t.lerp(o,i);return e.mesh.setMeshColor(r),r}})},e}return i(e,t),e.prototype.SetOriginalVertices=function(t,e,o,n,i){this.a=t,this.b=e,this.c=o,this.center=n,this.color=i},e.prototype.DoEffect=function(){this.node.position=this.center,this.mesh.draw(this.a,this.b,this.c,this.color);var t=this.node.position,e=this.node.scale,o=this.color,n=cc.color(255,255,255,201),i=t.mag(),r=t.normalize(),a=.001*i;r.z=0;var c=t.add(r.mul(.74*i)),s=1.36*e;cc.tween(this.node).delay(.5-a).parallel(this.DOPosition(c,.25).clone(this.node),this.DOScale(s,.25).clone(this.node),this.DOColor(n,.15).delay(.1).clone(this)).delay(.55).parallel(this.DOPosition(t,.5).clone(this.node),this.DOScale(e,.5).clone(this.node)).delay(.25).then(this.DOColor(o,.2).clone(this)).start()},r([l(a.default)],e.prototype,"mesh",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./mesh-triangle":"mesh-triangle"}],"sound-manager":[function(t,e,o){"use strict";cc._RF.push(e,"ecfd13OKA9AQp4FwrtS/coD","sound-manager");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./game"),c=cc._decorator,s=c.ccclass,l=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fadingTime=.5,e.audioSources={},e.audioVolumes={},e}var o;return i(e,t),o=e,e.prototype.onLoad=function(){var t=this;o.instance=this,cc.resources.loadDir("sound",cc.AudioClip,function(e,o){o.forEach(function(e){var o=t.node.addComponent(cc.AudioSource);o.clip=e,o.preload=!0,o.volume=0,t.audioSources[e.name]=o,t.audioVolumes[e.name]={},t.audioVolumes[e.name].main=1,t.audioVolumes[e.name].sub=1}),a.default.instance.onSoundLoaded()})},e.prototype.update=function(){for(var t in this.audioSources){var e=this.audioSources[t];if(e.isPlaying){var o=e.clip.duration-e.getCurrentTime();this.audioVolumes[t].sub=o<1.1*this.fadingTime?0:1;var n=this.audioVolumes[t].main*this.audioVolumes[t].sub;if(e.volume!=n){var i=1/(60*this.fadingTime),r=n-e.volume,a=r/Math.abs(r);e.volume=cc.misc.clamp01(e.volume+i*a)}}}},e.prototype.PlayAllMusic=function(t){for(var e in void 0===t&&(t=!1),this.audioSources)this.audioSources[e].loop=t,this.audioSources[e].play()},e.prototype.StopAllMusics=function(t){for(var e in void 0===t&&(t=0),this.audioSources)this.StopChannel(e,t)},e.prototype.StopChannel=function(t,e){var o=this;void 0===e&&(e=0),e>0?cc.tween(this.audioVolumes[t]).to(e,{main:0}).call(function(){o.audioSources[t].stop()}).start():(this.audioVolumes[t].main=0,this.audioSources[t].stop())},e.prototype.SetVolume=function(t,e,o){void 0===o&&(o=!1);var n=(t+1).toString();this.SetChannelVolumn(n,e,o)},e.prototype.SetAllMusicVolume=function(t,e){void 0===e&&(e=!1),this.SetMusicVolume(0,3,t,e)},e.prototype.SetMusicVolume=function(t,e,o,n){void 0===n&&(n=!1);for(var i=t;i<=e;i++){var r=(1+i).toString();this.audioVolumes[r].main!=o&&this.SetChannelVolumn(r,o,n)}},e.prototype.SetChannelVolumn=function(t,e,o){o?cc.tween(this.audioVolumes[t]).to(this.fadingTime,{main:e}).start():this.audioVolumes[t].main=e},r([l()],e.prototype,"fadingTime",void 0),o=r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./game":"game"}],utils:[function(t,e,o){"use strict";cc._RF.push(e,"4e3d0mhUGNOpZCA1HS+jtc2","utils"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){}return t.Random=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=0),0==e?Math.random()*t:Math.random()*(e-t)+t},t.Lerp=function(t,e,o,n){if(0==o)return t;if(t==e)return e;var i=(e-t)*o,r=Math.abs(i),a=Math.abs(n);return r<a&&(i=a*i/r),(t-e)*(t+i-e)<0&&(i=e-t),t+i},t.QuatAngle=function(t,e){var o=cc.Quat.dot(t,e);return 114.59156*Math.acos(Math.min(Math.abs(o),1))},t.QuatIdentity=function(){var t=cc.quat();return cc.Quat.identity(t),t},t.GetRotation=function(t){var e=cc.quat();return t.getRotation(e),e},t.RotateAround=function(e,o,n){var i=t.GetRotation(e);cc.Quat.rotateAround(i,i,o,cc.misc.degreesToRadians(n)),e.setRotation(i)},t}();o.default=n,cc._RF.pop()},{}]},{},["Tutorial","game-control","game","icon-holder","icon-track","input-control","mesh-triangle","mess-effect","sound-manager","utils"]);