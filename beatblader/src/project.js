window.__require=function t(e,o,n){function i(r,a){if(!o[r]){if(!e[r]){var c=r.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+r+"'")}}var d=o[r]={exports:{}};e[r][0].call(d.exports,function(t){return i(e[r][1][t]||t)},d,d.exports,t,e,o,n)}return o[r].exports}for(var s="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({BeatMap:[function(t,e,o){"use strict";cc._RF.push(e,"cad6etoHZ5BmIiu8s7jhgqb","BeatMap"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=(n.property,function(){function t(){this.beatNodes=new Array,this._jsonContent=null,this.needRemoveCloseBeat=!0,this.wasLoaded=!1,this.loadSongContent()}return t.prototype.getNodeAt=function(t){return t<0||t>=this.beatNodes.length?null:this.beatNodes[t]},t.prototype.init=function(t){var e=this,o=!1;t.tracks[1].notes.forEach(function(t){var n=t.time,i=t.duration,s=n+i;s>=2&&s<30&&(e.needRemoveCloseBeat?i>.2||o?(o=!1,e.beatNodes.push({time:n,duration:i})):o||(o=!0):e.beatNodes.push({time:n,duration:i}))}),this.wasLoaded=!0},t.prototype.loadSongContent=function(){var t=this;cc.loader.loadRes("song_content",cc.JsonAsset,function(e,o){t.init(o.json)})},t=__decorate([i],t)}());o.default=s,cc._RF.pop()},{}],BeatNode:[function(t,e,o){"use strict";cc._RF.push(e,"97843TnJ0NDx41uKYDQiYrz","BeatNode"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=(n.property,function(){function t(){this.timeAppear=0,this.duration=0}return t=__decorate([i],t)}());o.default=s,cc._RF.pop()},{}],BoxController:[function(t,e,o){"use strict";cc._RF.push(e,"86f4ecRY1tNUJIeguS5O4W0","BoxController"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./core/event-manager"),i=cc._decorator,s=i.ccclass,r=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.targetPos=null,e.targetPos1=null,e.tween=null,e}return __extends(e,t),e.prototype.start=function(){var t=this;n.default.instance.register("collided-with-touch",function(){var e=cc.Vec3.ZERO;t.node.getPosition(e),e.z>-858&&(n.default.instance.dispatch("splited-box",e),t.node.destroy())},this)},e.prototype.moveTo=function(t,e){var o=this;this.targetPos=t;var i=cc.Vec3.ZERO;this.node.getPosition(i),this.targetPos1=t.sub(i).mul(.2);var s=cc.tween(this.node).to(e,{position:this.targetPos}),r=cc.tween(this.node).to(.2*e,{position:this.targetPos1});this.tween=cc.tween(this.node).sequence(s,r).call(function(){n.default.instance.dispatch("missed-box")}).call(function(){o.tween=null}).start()},e.prototype.onDestroy=function(){n.default.instance.unregisterTarget(this),this.tween&&this.tween.stop()},e=__decorate([s],e)}(cc.Component));o.default=r,cc._RF.pop()},{"./core/event-manager":"event-manager"}],EnviromentManager:[function(t,e,o){"use strict";cc._RF.push(e,"c619121KDVAW7kSE81CqHbJ","EnviromentManager"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.root=null,e.env_prefabs=[],e.start_position=null,e.end_position=null,e._pools=[],e.POOL_SIZE=10,e._delayTime=.5,e._currentPoolIndex=0,e._starPos=cc.Vec3.ZERO,e._endPos=cc.Vec3.ZERO,e}return __extends(e,t),e.prototype.onLoad=function(){this.start_position.getPosition(this._starPos),this.end_position.getPosition(this._endPos),this.create_pools()},e.prototype.start=function(){this.schedule(this.spawn_enviroment_obstacle.bind(this),this._delayTime)},e.prototype.spawn_enviroment_obstacle=function(){var t=this;this._currentPoolIndex++,this._currentPoolIndex>=this.POOL_SIZE&&(this._currentPoolIndex=0);var e=this._pools[this._currentPoolIndex];e.setPosition(this._starPos),e.active=!0,cc.tween(e).to(1.5,{position:this._endPos}).call(function(){e.active=!1,e.setPosition(t._starPos)}).start()},e.prototype.create_pools=function(){for(var t=this,e=0;e<this.POOL_SIZE;e++)this.env_prefabs.forEach(function(e){var o=cc.instantiate(e);o.is3DNode=!0,o.setPosition(t._starPos),t.root.addChild(o),o.active=!1,t._pools.push(o)})},__decorate([s(cc.Node)],e.prototype,"root",void 0),__decorate([s([cc.Prefab])],e.prototype,"env_prefabs",void 0),__decorate([s(cc.Node)],e.prototype,"start_position",void 0),__decorate([s(cc.Node)],e.prototype,"end_position",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"ebf89glQ8FHrr7mHW/NMF76","Game"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./BeatMap"),i=t("./BoxController"),s=t("./core/event-manager"),r=cc._decorator,a=r.ccclass,c=r.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.trail=null,e.uiCamera=null,e.gameCamera=null,e.spawnPositionNode=null,e.targetBoxPositionNode=null,e.boxPrefab=null,e.halfBoxPrefab=null,e.firstScreen=null,e.uiEndScreen=null,e.uiHeader=null,e.uiMissed=[],e.uiLabelScore=null,e.uiLabelCombo=null,e.buttonGo2Store=null,e._beatMap=null,e._tagetBoxPosition=cc.Vec3.ZERO,e._spawnBoxPosition=cc.Vec3.ZERO,e.rayTouchPos=null,e._nboxCollected=0,e._nboxMissed=0,e._nCombo=0,e.redColor=cc.Color.RED,e._isEndGame=!1,e._isRunning=!1,e._currentBeatIndex=0,e._lastTimeSpawned=0,e._timeTravelled=0,e.beatDuration=2,e}var o;return __extends(e,t),o=e,e.prototype.onLoad=function(){this.firstScreen.active=!0,this.uiHeader.active=!1,this._isEndGame=!1},e.prototype.start=function(){var t=this;this.targetBoxPositionNode.getPosition(this._tagetBoxPosition),this.spawnPositionNode.getPosition(this._spawnBoxPosition),this._beatMap=new n.default;var e=cc.find("Canvas");e.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this),e.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),e.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),e.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCancle,this),s.default.instance.register("missed-box",function(){t._nboxMissed+=1,t._nCombo=0,t.updateScoreUI(),t._nboxMissed>0&&t._nboxMissed<=3&&(t.uiMissed[t._nboxMissed-1].color=t.redColor)},this),s.default.instance.register("splited-box",function(e){t.onSplitBox(e)})},e.prototype.onSplitBox=function(t){var e=cc.instantiate(this.halfBoxPrefab);this.node.addChild(e),e.setPosition(t),this._nboxCollected++,this._nCombo++,this.updateScoreUI()},e.prototype.onEndScreen=function(){cc.audioEngine.stopAll(),this._isEndGame=!0,this.uiHeader.active=!1,this.uiEndScreen.active=!0,this._isRunning=!1,this.buttonGo2Store.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3,1.1),cc.scaleTo(.3,1))))},e.prototype.onButtonGotoStoreClick=function(){cc.sys.openURL("https://apps.apple.com/us/app/beat-blader-3d/id1495142212?")},e.prototype.onButtonPlayClick=function(){null!=this._beatMap&&this._beatMap.wasLoaded&&(this._isEndGame||this.onGameStart())},e.prototype.onTouchBegan=function(t){var e=this.uiCamera.node.parent.convertTouchToNodeSpaceAR(t.touch);this.trail.setPosition(e),this.rayTouchPos=null},e.prototype.onGameStart=function(){this._isRunning=!0,cc.audioEngine.playMusic(this.getComponent(cc.AudioSource).clip,!1),this.firstScreen.removeFromParent(),this.uiHeader.active=!0,this.updateScoreUI()},e.prototype.onTouchEnd=function(t){this.rayTouchPos=null},e.prototype.onTouchMove=function(t){var e=this.uiCamera.node.parent.convertTouchToNodeSpaceAR(t.touch);this.trail.setPosition(e),this.rayTouchPos=t.touch.getLocation()},e.prototype.onTouchCancle=function(t){this.rayTouchPos=null},e.prototype.update=function(t){if(this._isRunning){this._timeTravelled+=t;var e=this._beatMap.getNodeAt(-1!=this._currentBeatIndex?this._currentBeatIndex+1:0);if(this._currentBeatIndex>=this._beatMap.beatNodes.length||null==e)return this.onEndScreen(),void(this._isRunning=!1);var o=e.time+e.duration-this.beatDuration;if(this._timeTravelled>o&&(this.spawnObject(),this._currentBeatIndex++),null!=this.rayTouchPos){var n=this.gameCamera.getRay(this.rayTouchPos),i=cc.geomUtils.intersect.raycast(this.node,n,null,cc.RayCastType.Closest);i.length>0&&(this.rayTouchPos=null,i.forEach(function(t){"Cube_2"==t.node.name&&s.default.instance.dispatch("collided-with-touch")}))}}},e.prototype.updateScoreUI=function(){this.uiLabelCombo.string="COMBO: "+this._nCombo.toString(),this.uiLabelScore.string="SCORE: "+this._nboxCollected.toString()},e.prototype.spawnObject=function(){this._beatMap.getNodeAt(-1!=this._currentBeatIndex?this._currentBeatIndex+1:0);var t=this.calculateObstacleOffset(0),e=cc.instantiate(this.boxPrefab);this.node.addChild(e),e.setPosition(this._spawnBoxPosition),e.active=!0,e.getComponent(i.default).moveTo(t,this.beatDuration)},e.getRandom=function(t,e){return Math.random()*(e-t)+t},e.prototype.calculateObstacleOffset=function(t){return cc.v3(o.getRandom(-300,300),this._tagetBoxPosition.y,this._tagetBoxPosition.z)},__decorate([c(cc.Node)],e.prototype,"trail",void 0),__decorate([c(cc.Camera)],e.prototype,"uiCamera",void 0),__decorate([c(cc.Camera)],e.prototype,"gameCamera",void 0),__decorate([c(cc.Node)],e.prototype,"spawnPositionNode",void 0),__decorate([c(cc.Node)],e.prototype,"targetBoxPositionNode",void 0),__decorate([c(cc.Prefab)],e.prototype,"boxPrefab",void 0),__decorate([c(cc.Prefab)],e.prototype,"halfBoxPrefab",void 0),__decorate([c(cc.Node)],e.prototype,"firstScreen",void 0),__decorate([c(cc.Node)],e.prototype,"uiEndScreen",void 0),__decorate([c(cc.Node)],e.prototype,"uiHeader",void 0),__decorate([c([cc.Node])],e.prototype,"uiMissed",void 0),__decorate([c(cc.Label)],e.prototype,"uiLabelScore",void 0),__decorate([c(cc.Label)],e.prototype,"uiLabelCombo",void 0),__decorate([c(cc.Node)],e.prototype,"buttonGo2Store",void 0),e=o=__decorate([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./BeatMap":"BeatMap","./BoxController":"BoxController","./core/event-manager":"event-manager"}],RotateZ:[function(t,e,o){"use strict";cc._RF.push(e,"4431cb0ayRAq7IMUmCPus+L","RotateZ"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.duration=1,e}return __extends(e,t),e.prototype.start=function(){cc.tween(this.node).by(this.duration,{rotation:360}).repeatForever().start()},__decorate([s],e.prototype,"duration",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],"event-manager":[function(t,e,o){"use strict";cc._RF.push(e,"2cf411jZnlCv7k4ksh1VkHl","event-manager"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.eventListenners={}}return Object.defineProperty(t,"instance",{get:function(){return null==t._instance&&(t._instance=new t),t._instance},enumerable:!0,configurable:!0}),t.prototype.register=function(t,e,o,n,i){void 0===o&&(o=null),void 0===n&&(n=0),void 0===i&&(i=!1);var s={target:o,callback:e,priority:n,excuteOnce:i};return this.eventListenners[t]?this.eventListenners[t].push(s):(this.eventListenners[t]=[],this.eventListenners[t].push(s)),this.eventListenners[t].sort(function(t,e){return e.priority-t.priority}),e},t.prototype.registerOnce=function(t,e,o,n){void 0===o&&(o=null),void 0===n&&(n=0),this.register(t,e,o,n,!0)},t.prototype.unregister=function(t,e,o){if(void 0===o&&(o=null),this.eventListenners[t]){for(var n=[],i=0;i<this.eventListenners[t].length;i++){var s=this.eventListenners[t][i];null==e?s.target==o&&n.push(i):s.target==o&&s.callback==e&&n.push(i)}this.eventListenners[t]=this.eventListenners[t].filter(function(t,e){return-1===n.indexOf(e)}),0==this.eventListenners[t].length&&delete this.eventListenners[t]}},t.prototype.unregisterTarget=function(t){var e=function(e){for(var n=[],i=0;i<o.eventListenners[e].length;i++){o.eventListenners[e][i].target==t&&n.push(i)}o.eventListenners[e]=o.eventListenners[e].filter(function(t,e){return-1===n.indexOf(e)}),0==o.eventListenners[e].length&&delete o.eventListenners[e]},o=this;for(var n in this.eventListenners)e(n)},t.prototype.remove=function(t){this.eventListenners[t]&&delete this.eventListenners[t]},t.prototype.dispatch=function(t){for(var e=this,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];if(this.eventListenners[t]){var i=[];this.eventListenners[t].forEach(function(t){t.target?t.callback.call(t.target,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],o[8],o[9]):t.callback(o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],o[8],o[9]),1==t.excuteOnce&&i.push(t)}),i.forEach(function(o){e.unregister(t,o.callback,o.target)})}},t._instance=null,t}();o.default=n,cc._RF.pop()},{}],halfbox:[function(t,e,o){"use strict";cc._RF.push(e,"77012rUI+pF5IrvGm5dX0sG","halfbox"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./Game"),i=cc._decorator,s=i.ccclass,r=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.halfBoxRight=null,e.halfBoxLeft=null,e.duration=.3,e.moveTime=0,e.startPos=cc.Vec3.ZERO,e.midPosLeft=cc.Vec3.ZERO,e.midPosRight=cc.Vec3.ZERO,e.curretleftPos=cc.Vec3.ZERO,e}var o;return __extends(e,t),o=e,e.prototype.start=function(){this.midPosLeft=cc.v3(n.default.getRandom(-82,-20),n.default.getRandom(0,90),n.default.getRandom(-20,20)),this.targetPosLeft=cc.v3(n.default.getRandom(-100,-200),n.default.getRandom(-90,-10),this.midPosLeft.z),this.midPosRight=cc.v3(n.default.getRandom(20,90),n.default.getRandom(0,90),n.default.getRandom(-20,20)),this.targetPosRight=cc.v3(n.default.getRandom(100,200),n.default.getRandom(50,70),this.midPosRight.z),cc.tween(this.halfBoxLeft).by(this.duration,{rotation:n.default.getRandom(50,160)}).start(),cc.tween(this.halfBoxRight).by(this.duration,{rotation:n.default.getRandom(-60,-160)}).start()},e.prototype.update=function(t){this.moveTime+=t,this.moveTime>this.duration&&this.node.destroy();var e=o.QuadraticBezier(cc.misc.clamp01(this.moveTime/this.duration),this.startPos,this.midPosLeft,this.targetPosLeft);this.halfBoxLeft.setPosition(e);var n=o.QuadraticBezier(cc.misc.clamp01(this.moveTime/this.duration),this.startPos,this.midPosRight,this.targetPosRight);this.halfBoxRight.setPosition(n)},e.QuadraticBezier=function(t,e,o,n){var i=e.mul((1-t)*(1-t)),s=o.mul(2*(1-t)*t),r=n.mul(t*t);return i.add(s).add(r)},__decorate([r(cc.Node)],e.prototype,"halfBoxRight",void 0),__decorate([r(cc.Node)],e.prototype,"halfBoxLeft",void 0),e=o=__decorate([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./Game":"Game"}],rotate3d:[function(t,e,o){"use strict";cc._RF.push(e,"6d850Y/q1RD8auYk46GvaFY","rotate3d"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.deltaAngle=cc.Vec3.ZERO,e}return __extends(e,t),e.prototype.start=function(){this.node.runAction(cc.repeatForever(cc.rotate3DBy(1,this.deltaAngle)))},__decorate([s(cc.Vec3)],e.prototype,"deltaAngle",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],sprite3d:[function(t,e,o){"use strict";cc._RF.push(e,"9ad4ajfq1JAgLXg/AL9sB4F","sprite3d"),cc.Class({extends:cc.Component,properties:{col:4,row:2,maxFrame:8,interVal:.2,isLoop:!0},mIsFinish:!1,onLoad:function(){this.mMaterial=this.getComponent(cc.MeshRenderer).getMaterial(0),this.getComponent(cc.MeshRenderer).setMaterial(0,this.mMaterial),this.delay=this.interVal,this.index=0,this.mMaterial.setProperty("mainTiling",cc.v2(1/this.col,1/this.row)),this.mIsFinish=!1},start:function(){},update:function(t){if(!this.mIsFinish&&(this.delay-=t,this.delay<=0)){this.delay=this.interVal;var e=this.index%this.col,o=Math.floor(this.index/this.col);this.mMaterial.setProperty("mainOffset",cc.v2(e/this.col,o/this.row)),this.index++,this.index>=this.maxFrame&&(this.index=0,this.isLoop||(this.mIsFinish=!0))}},SetMaterialDiffuseAlpha:function(t){var e=this.mMaterial._props.diffuseColor;void 0!=e&&(e.setA(t),this.mMaterial.setProperty("diffuseColor",e,!0))}}),cc._RF.pop()},{}],zoomeffect:[function(t,e,o){"use strict";cc._RF.push(e,"fc9bfZxkTRCPbqHjyGup1iy","zoomeffect"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,s=(n.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.speed=1e4,e.minScale=100,e.maxScale=8500,e.scale=0,e.scaleZ=1,e.isZoomOut=!0,e}return __extends(e,t),e.prototype.start=function(){this.scale=this.minScale},e.prototype.update=function(t){this.isZoomOut?this.scale+=this.speed*t:this.scale-=this.speed*t,this.node.setScale(cc.v3(this.scale,this.scale,this.scaleZ)),this.scale>this.maxScale&&this.isZoomOut&&(this.scale=this.minScale)},e=__decorate([i],e)}(cc.Component));o.default=s,cc._RF.pop()},{}]},{},["BeatMap","BeatNode","BoxController","EnviromentManager","Game","RotateZ","event-manager","halfbox","rotate3d","sprite3d","zoomeffect"]);