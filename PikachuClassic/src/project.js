window.__require=function t(e,i,r){function n(s,a){if(!i[s]){if(!e[s]){var c=s.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!a&&l)return l(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+s+"'")}}var h=i[s]={exports:{}};e[s][0].call(h.exports,function(t){return n(e[s][1][t]||t)},h,h.exports,t,e,i,r)}return i[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<r.length;s++)n(r[s]);return n}({Board:[function(t,e,i){"use strict";cc._RF.push(e,"c06f9+/n1dAKp51/+0b7pzL","Board"),Object.defineProperty(i,"__esModule",{value:!0});var r,n=t("./Core/Utils"),o=t("./Cell"),s=t("./Core/EventManager");(function(t){t[t.None=0]="None",t[t.Top2Bottom=1]="Top2Bottom",t[t.Bottom2Top=2]="Bottom2Top",t[t.Left2Right=3]="Left2Right",t[t.Right2Left=4]="Right2Left",t[t.VerticalZoomOut=5]="VerticalZoomOut",t[t.HorizontalZoomOut=6]="HorizontalZoomOut",t[t.VerticalZoomIn=7]="VerticalZoomIn",t[t.HorizontalZoomIn=8]="HorizontalZoomIn",t[t.Count=9]="Count"})(r=i.FixType||(i.FixType={}));var a=cc._decorator,c=a.ccclass,l=(a.property,function(){function t(t,e,i,n,s,a){void 0===i&&(i=null),void 0===n&&(n=1),void 0===s&&(s=18),this.ROWS=11,this.COLUMNS=18,this._array=null,this._numOfCell=0,this._numOfCouple=0,this._arrayCell=null,this._rootNode=null,this._cellWidth=0,this._cellHeight=0,this._startX=0,this._startY=0,this.fourNeighbors=[cc.v2(0,1),cc.v2(0,-1),cc.v2(1,0),cc.v2(-1,0)],this._totalCellWasClear=0,this._fixBoardType=r.None,this._parentNode=null,this._cellPrefab=null,this.CELL_OFFSET=5,this.ROWS=n,this.COLUMNS=s,this._cellHeight=550/this.ROWS;var c=this._cellHeight/278;this._cellWidth=225*c,this._parentNode=t,this._cellPrefab=e,this._fixBoardType=a,this._totalCellWasClear=0,this._rootNode=t,this._numOfCell=(this.ROWS-2)*(this.COLUMNS-2),this._numOfCouple=Math.round(this._numOfCell/4),this._array=[],this._arrayCell=[],this._startX=-this.COLUMNS*this._cellWidth*.5+.5*this._cellWidth,this._startY=-this.ROWS*this._cellHeight*.5+.5*this._cellHeight-50;for(var l=0;l<this.ROWS;l++){this._array[l]=[],this._arrayCell[l]=[];for(var h=0;h<this.COLUMNS;h++){this._array[l][h]=0;var u=cc.instantiate(e);u.width=this._cellWidth,u.height=this._cellHeight,u.parent=t,u.position=cc.v2(this._startX+h*(this._cellWidth+this.CELL_OFFSET),this._startY+l*(this._cellHeight+this.CELL_OFFSET)),u.getComponent(o.default).setType(-1),this._arrayCell[l][h]=u.getComponent(o.default)}}null==i?this.generateNewBoard(t,e):this.initWithArray(t,e,i)}return t.prototype.initWithArray=function(t,e,i){for(var r=1;r<this.ROWS-1;r++){this._array[r]=[];for(var n=1;n<this.COLUMNS-1;n++)this._array[r][n]=i[r-1][n-1],this._arrayCell[r][n].setType(this._array[r][n])}},t.prototype.generateNewBoard=function(t,e){for(var i=0,r=!1,o=this._numOfCell,s=1;s<=this._numOfCouple;s++)for(var a=1;a<=4;a++){i=n.default.getRandomInt(1,o--),r=!1;for(var c=1;c<this.COLUMNS-1&&!r;c++)for(var l=1;l<this.ROWS-1;l++)if(0==this._array[l][c]&&0==--i){r=!0,this._array[l][c]=s,this._arrayCell[l][c].setType(s-1);break}}},t.prototype.findCellFocus=function(t){var e=this._rootNode.convertToNodeSpaceAR(t),i=Math.round((e.x-this._startX)/(this._cellWidth+this.CELL_OFFSET)),r=Math.round((e.y-this._startY)/(this._cellHeight+this.CELL_OFFSET));return i>0&&i<this.COLUMNS-1&&r>0&&r<this.ROWS-1&&this._arrayCell[r][i].getType()>=0?(this._arrayCell[r][i].r=r,this._arrayCell[r][i].c=i,this._arrayCell[r][i]):null},t.prototype.checkPath=function(t,e,i,r){var n=0,o=0,s=0,a=0,c=0,l=[],h=[];h.push(cc.v2(e,t));for(var u=[],p=0;p<this.ROWS;p++){u[p]=[],l[p]=[];for(var _=0;_<this.COLUMNS;_++)u[p][_]=cc.v2(-1,-1),l[p][_]=0}u[t][e].x=-2;for(var d=[],f=[],y=[];n<=o;){for(a=h[n].x,s=h[n].y,n++,c=0;c<4;c++)d[c]=!0,f[c]=a,y[c]=s;do{for(c=0;c<4;c++)if(d[c]){if(f[c]+=this.fourNeighbors[c].x,y[c]+=this.fourNeighbors[c].y,!this.myInside(y[c],f[c])){d[c]=!1;continue}if(y[c]==i&&f[c]==r)return u[y[c]][f[c]].x=a,u[y[c]][f[c]].y=s,this.createArrayList(u,i,r);if(this._array[y[c]][f[c]]>0){d[c]=!1;continue}if(-1!=u[y[c]][f[c]].x)continue;if(2==l[s][a])continue;h[++o]=cc.v2(f[c],y[c]),u[y[c]][f[c]].x=a,u[y[c]][f[c]].y=s,l[y[c]][f[c]]=l[s][a]+1}}while(d[0]||d[1]||d[2]||d[3])}return null},t.prototype.myInside=function(t,e){return e>=0&&e<this.COLUMNS&&t>=0&&t<this.ROWS},t.prototype.createArrayList=function(t,e,i){var r,n=[];do{n.push(this._arrayCell[e][i].node.position),r=t[e][i].x,e=t[e][i].y,i=r}while(-2!=i);return n},t.prototype.clearCoupleCell=function(t,e,i,r){this._totalCellWasClear+=2,this._array[t][e]=0,this._array[i][r]=0,this._arrayCell[t][e].setType(-1),this._arrayCell[i][r].setType(-1),this._totalCellWasClear!=this._numOfCell?(this.fixMatrix(this._fixBoardType),this.findCouple()||this.repairMaxtrix()):s.default.instance.dispatch("boar-clear")},t.prototype.repairMaxtrix=function(){for(var t=[],e=1;e<this.ROWS-1;e++)for(var i=1;i<this.COLUMNS-1;i++)this._array[e][i]>0&&(this._arrayCell[e][i].setType(-1),t.push(this._array[e][i]));for(e=1;e<this.ROWS-1;e++)for(i=1;i<this.COLUMNS-1;i++)if(this._array[e][i]>0){var r=n.default.getRandomInt(0,t.length-1),o=t[r];this._array[e][i]=o,this._arrayCell[e][i].setType(o-1),t.splice(r,1)}},t.prototype.findCouple=function(){for(var t=[],e=1;e<this.ROWS-1;e++)for(var i=1;i<this.COLUMNS-1;i++)0!=this._array[e][i]&&(this._arrayCell[e][i].r=e,this._arrayCell[e][i].c=i,t.push(this._arrayCell[e][i]));for(var r=t.length,n=0;n<r-1;n++)for(var o=n+1;o<r;o++){if(t[n].getType()==t[o].getType())if(null!=this.checkPath(t[n].r,t[n].c,t[o].r,t[o].c))return t[n].onHint(),t[o].onHint(),!0}return!1},t.prototype.fixMatrix=function(t){switch(t){case r.Left2Right:this.fixZone(1,this.ROWS-1,1,this.COLUMNS-1,cc.v2(1,0));break;case r.Right2Left:this.fixZone(1,this.ROWS-1,1,this.COLUMNS-1,cc.v2(-1,0));break;case r.Bottom2Top:this.fixZone(1,this.ROWS-1,1,this.COLUMNS-1,cc.v2(0,1));break;case r.Top2Bottom:this.fixZone(1,this.ROWS-1,1,this.COLUMNS-1,cc.v2(0,-1));break;case r.VerticalZoomOut:var e=Math.round(this.ROWS/2);this.fixZone(1,e,1,this.COLUMNS-1,cc.v2(0,-1)),this.fixZone(e,this.ROWS-1,1,this.COLUMNS-1,cc.v2(0,1));break;case r.VerticalZoomIn:e=Math.round(this.ROWS/2);this.fixZone(1,e,1,this.COLUMNS-1,cc.v2(0,1)),this.fixZone(e,this.ROWS-1,1,this.COLUMNS-1,cc.v2(0,-1));case r.HorizontalZoomOut:var i=Math.round(this.COLUMNS/2);this.fixZone(1,this.ROWS-1,1,i,cc.v2(-1,0)),this.fixZone(1,this.ROWS-1,i,this.COLUMNS-1,cc.v2(1,0));break;case r.HorizontalZoomIn:i=Math.round(this.COLUMNS/2);this.fixZone(1,this.ROWS-1,1,i,cc.v2(1,0)),this.fixZone(1,this.ROWS-1,i,this.COLUMNS-1,cc.v2(-1,0))}},t.prototype.fixZone=function(t,e,i,r,n){var o,s,a,c,l=!1;do{for(l=!0,o=t;o<e;o++)for(s=i;s<r;s++)this._array[o][s]>0&&(a=s+n.x,c=o+n.y,a>=1&&a<=this.COLUMNS-2&&c>=1&&c<=this.ROWS-2&&0==this._array[c][a]&&(this._array[c][a]=this._array[o][s],this._arrayCell[o][s].setType(-1),this._arrayCell[c][a].setType(this._array[o][s]-1),this._array[o][s]=0,l=!1))}while(!l)},t=__decorate([c],t)}());i.default=l,cc._RF.pop()},{"./Cell":"Cell","./Core/EventManager":"EventManager","./Core/Utils":"Utils"}],Cell:[function(t,e,i){"use strict";cc._RF.push(e,"c5d57d+MjxJbKOBBpOpPjx4","Cell"),Object.defineProperty(i,"__esModule",{value:!0});var r,n=cc._decorator,o=n.ccclass,s=n.property;(function(t){t[t.Empty=0]="Empty",t[t.Idle=1]="Idle",t[t.Focus=2]="Focus",t[t.Selected=3]="Selected"})(r=i.CellState||(i.CellState={}));var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.highLightPrefab=null,e.SpriteFrames=[],e._type=0,e._key=0,e._state=r.Empty,e.r=0,e.c=0,e._highLightNode=null,e}return __extends(e,t),Object.defineProperty(e.prototype,"Key",{get:function(){return this._key},set:function(t){this._key=t},enumerable:!0,configurable:!0}),e.prototype.setType=function(t){if(this._type=t,t<0)return this.getComponent(cc.Sprite).spriteFrame=null,void this.hideHighLight();this.getComponent(cc.Sprite).spriteFrame=this.SpriteFrames[t],this.setState(r.Idle)},e.prototype.getType=function(){return this._type},e.prototype.getState=function(){return this._state},e.prototype.showHighLight=function(){this._highLightNode=cc.instantiate(this.highLightPrefab),this._highLightNode.parent=this.node.parent,this._highLightNode.position=this.node.position,this._highLightNode.width=this.node.width+35,this._highLightNode.height=this.node.height+35},e.prototype.hideHighLight=function(){null!=this._highLightNode&&this._highLightNode.removeFromParent()},e.prototype.setState=function(t){this._state=t,t==r.Focus||t==r.Selected?this.showHighLight():this.hideHighLight()},e.prototype.onHint=function(){this.node.runAction(cc.sequence(cc.rotateTo(.3,50),cc.rotateTo(.3,0)))},__decorate([s(cc.Prefab)],e.prototype,"highLightPrefab",void 0),__decorate([s([cc.SpriteFrame])],e.prototype,"SpriteFrames",void 0),e=__decorate([o],e)}(cc.Component);i.default=a,cc._RF.pop()},{}],EventManager:[function(t,e,i){"use strict";cc._RF.push(e,"6e5cbf71X1CzoryyYCMXj4B","EventManager"),Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(){this.eventListenners={}}return Object.defineProperty(t,"instance",{get:function(){return null==t._instance&&(t._instance=new t),t._instance},enumerable:!0,configurable:!0}),t.prototype.register=function(t,e,i,r,n){void 0===i&&(i=null),void 0===r&&(r=0),void 0===n&&(n=!1);var o={target:i,callback:e,priority:r,excuteOnce:n};return this.eventListenners[t]?this.eventListenners[t].push(o):(this.eventListenners[t]=[],this.eventListenners[t].push(o)),this.eventListenners[t].sort(function(t,e){return e.priority-t.priority}),e},t.prototype.registerOnce=function(t,e,i,r){void 0===i&&(i=null),void 0===r&&(r=0),this.register(t,e,i,r,!0)},t.prototype.unregister=function(t,e,i){if(void 0===i&&(i=null),this.eventListenners[t]){for(var r=[],n=0;n<this.eventListenners[t].length;n++){var o=this.eventListenners[t][n];null==e?o.target==i&&r.push(n):o.target==i&&o.callback==e&&r.push(n)}this.eventListenners[t]=this.eventListenners[t].filter(function(t,e){return-1===r.indexOf(e)}),0==this.eventListenners[t].length&&delete this.eventListenners[t]}},t.prototype.unregisterTarget=function(t){var e=function(e){for(var r=[],n=0;n<i.eventListenners[e].length;n++){i.eventListenners[e][n].target==t&&r.push(n)}i.eventListenners[e]=i.eventListenners[e].filter(function(t,e){return-1===r.indexOf(e)}),0==i.eventListenners[e].length&&delete i.eventListenners[e]},i=this;for(var r in this.eventListenners)e(r)},t.prototype.remove=function(t){this.eventListenners[t]&&delete this.eventListenners[t]},t.prototype.dispatch=function(t){for(var e=this,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];if(this.eventListenners[t]){var n=[];this.eventListenners[t].forEach(function(t){t.target?t.callback.call(t.target,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]):t.callback(i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]),1==t.excuteOnce&&n.push(t)}),n.forEach(function(i){e.unregister(t,i.callback,i.target)})}},t._instance=null,t}();i.default=r,cc._RF.pop()},{}],GameLevel:[function(t,e,i){"use strict";cc._RF.push(e,"a2b98B8JTlDNL/mXjWfL23W","GameLevel"),Object.defineProperty(i,"__esModule",{value:!0});var r=t("./Board"),n=t("./Player"),o=t("./Core/EventManager"),s=t("./TouchInput"),a=t("./Core/transport-message"),c=cc._decorator,l=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cellPrefab=null,e.progressBarTimer=null,e.dialogWin=null,e.dialogLose=null,e._board=null,e._playerLocal=null,e._playerRemote=null,e._localInput=null,e.MAX_TIME_PER_LEVEL=300,e._remainingTime=e.MAX_TIME_PER_LEVEL,e._Rows=6,e._Cols=6,e._currentLevel=r.FixType.None,e._isGamePaused=!1,e}return __extends(e,t),e.prototype.onLoad=function(){var t=this;this._playerLocal=new n.default("Toan",n.PlayerType.LOCAL,!0),this._localInput=new s.default(this._playerLocal),o.default.instance.register("",function(){t.onBoardClear()})},e.prototype.start=function(){var t=this,e=a.default.instance.get("game","board-size");if(null!=e){var i=e.indexOf("x");this._Rows=Number(e.substr(0,i))+2,this._Cols=Number(e.substr(i+1,e.length))+2}o.default.instance.register("boar-clear",function(){t.onBoardClear()}),this.onNewLevel()},e.prototype.onNewLevel=function(){this.dialogLose.active=!1,this.dialogWin.active=!1,this._board=new r.default(this.node,this.cellPrefab,null,this._Rows,this._Cols,this._currentLevel),this._playerLocal.board=this._board,this._remainingTime=this.MAX_TIME_PER_LEVEL,this._isGamePaused=!1},e.prototype.onBoardClear=function(){this.dialogWin.active=!0,this._isGamePaused=!0},e.prototype.onFindCouple=function(){this._board.findCouple()},e.prototype.testRepairMatrix=function(){this._board.repairMaxtrix()},e.prototype.update=function(t){this._isGamePaused||(this._remainingTime<0&&(this._remainingTime=0,this.onLose()),this.progressBarTimer.progress=this._remainingTime/this.MAX_TIME_PER_LEVEL,this._remainingTime-=t)},e.prototype.onLose=function(){this._isGamePaused=!0,this.dialogLose.active=!0},e.prototype.onButtonMMClick=function(){cc.director.loadScene("MainMenu")},e.prototype.onButtonNextClick=function(){this._currentLevel+=1,this.onNewLevel()},e.prototype.onButtonTryAgainClick=function(){this.dialogLose.active=!1,this.onNewLevel()},__decorate([h(cc.Prefab)],e.prototype,"cellPrefab",void 0),__decorate([h(cc.ProgressBar)],e.prototype,"progressBarTimer",void 0),__decorate([h(cc.Node)],e.prototype,"dialogWin",void 0),__decorate([h(cc.Node)],e.prototype,"dialogLose",void 0),e=__decorate([l],e)}(cc.Component);i.default=u,cc._RF.pop()},{"./Board":"Board","./Core/EventManager":"EventManager","./Core/transport-message":"transport-message","./Player":"Player","./TouchInput":"TouchInput"}],MainMenu:[function(t,e,i){"use strict";cc._RF.push(e,"39503Sb7jlGZ7yZDLnewCZZ","MainMenu"),Object.defineProperty(i,"__esModule",{value:!0});var r=t("./Core/transport-message"),n=cc._decorator,o=n.ccclass,s=n.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.buttons=[],e}return __extends(e,t),e.prototype.start=function(){var t=this;this.buttons.forEach(function(e){e.node.on("click",t.onButtonClick.bind(t,e.node.name))})},e.prototype.onButtonClick=function(t){var e=t.substr(3,t.length);r.default.instance.send("game","board-size",e),cc.director.loadScene("Game")},__decorate([s([cc.Button])],e.prototype,"buttons",void 0),e=__decorate([o],e)}(cc.Component);i.default=a,cc._RF.pop()},{"./Core/transport-message":"transport-message"}],PathLine:[function(t,e,i){"use strict";cc._RF.push(e,"b6c35Vz/oxMk6sRvaukFXRU","PathLine"),Object.defineProperty(i,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,o=(r.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.liveTime=.2,e}return __extends(e,t),e.prototype.start=function(){var t=this;this.node.runAction(cc.sequence(cc.delayTime(this.liveTime),cc.callFunc(function(){t.node.removeFromParent()})))},e=__decorate([n],e)}(cc.Component));i.default=o,cc._RF.pop()},{}],Path:[function(t,e,i){"use strict";cc._RF.push(e,"23370ELx/pEc5YpKWyyIDfX","Path"),Object.defineProperty(i,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,o=r.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.line=null,e.thickness=10,e}var i;return __extends(e,t),i=e,e.prototype.onLoad=function(){i.instance=this},e.prototype.createPath=function(t,e){for(var i,r=e[0],n=1;n<e.length;n++){i=e[n];var o=cc.instantiate(this.line);o.parent=t,r.y==i.y?(o.height=this.thickness,o.width=Math.abs(r.x-i.x),o.position=cc.v2(.5*o.width+(r.x<i.x?r.x:i.x),r.y)):r.x==i.x&&(o.width=this.thickness,o.height=Math.abs(r.y-i.y),o.position=cc.v2(r.x,(r.y>i.y?r.y:i.y)-.5*o.height)),r=i}},e.instance=null,__decorate([o(cc.Prefab)],e.prototype,"line",void 0),__decorate([o],e.prototype,"thickness",void 0),e=i=__decorate([n],e)}(cc.Component);i.default=s,cc._RF.pop()},{}],Player:[function(t,e,i){"use strict";cc._RF.push(e,"b6880tXV2dAjrT+QWlaFvKJ","Player"),Object.defineProperty(i,"__esModule",{value:!0});var r=t("./Cell"),n=t("./Path"),o=cc._decorator,s=o.ccclass;o.property;(function(t){t[t.LOCAL=0]="LOCAL",t[t.REMOTE=1]="REMOTE",t[t.BOSS=2]="BOSS"})(i.PlayerType||(i.PlayerType={}));var a=function(){function t(t,e,i){this._board=null,this.cellFirst=null,this.cellSecond=null,this._name=t,this._type=e,this._isLocal=i}return Object.defineProperty(t.prototype,"board",{set:function(t){this._board=t},enumerable:!0,configurable:!0}),t.prototype.onMouseStart=function(t){var e=this._board.findCellFocus(t);if(null!=e&&(null==this.cellFirst?(e.setState(r.CellState.Focus),this.cellFirst=e):e.uuid==this.cellFirst.uuid?(e.setState(r.CellState.Idle),this.cellFirst=null):e.getType()!=this.cellFirst.getType()?(e.setState(r.CellState.Idle),this.cellFirst.setState(r.CellState.Idle),this.cellFirst=null):(e.setState(r.CellState.Focus),this.cellSecond=e)),null!=this.cellSecond){var i=this._board.checkPath(this.cellFirst.r,this.cellFirst.c,this.cellSecond.r,this.cellSecond.c);null==i?(cc.log("not found"),this.cellFirst.setState(r.CellState.Idle),this.cellSecond.setState(r.CellState.Idle),this.cellFirst=null,this.cellSecond=null):(n.default.instance.createPath(this.cellFirst.node.parent,i),this._board.clearCoupleCell(this.cellFirst.r,this.cellFirst.c,this.cellSecond.r,this.cellSecond.c),this.cellFirst=null,this.cellSecond=null)}},t=__decorate([s],t)}();i.default=a,cc._RF.pop()},{"./Cell":"Cell","./Path":"Path"}],TouchInput:[function(t,e,i){"use strict";cc._RF.push(e,"58addzlq7dO6I4JB1pzuRpX","TouchInput"),Object.defineProperty(i,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,o=(r.property,function(){function t(t){this._rootNode=null,this._player=null,this._player=t,this._rootNode=cc.find("Canvas"),this._rootNode.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this)}return t.prototype.onTouchBegan=function(t){this._player.onMouseStart(t.getLocation())},t=__decorate([n],t)}());i.default=o,cc._RF.pop()},{}],Utils:[function(t,e,i){"use strict";cc._RF.push(e,"a1cb44uJ/pBvqU7eRI6AD0H","Utils"),Object.defineProperty(i,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,o=(r.property,function(){function t(){}return t.getRandom=function(t,e){return Math.random()*(e-t)+t},t.getRandomInt=function(t,e){return Math.round(Math.random()*(e-t)+t)},t=__decorate([n],t)}());i.default=o,cc._RF.pop()},{}],"transport-message":[function(t,e,i){"use strict";cc._RF.push(e,"d90ee4rMXhAQqRhJTprGp0y","transport-message"),Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(){this._messages={}}return Object.defineProperty(t,"instance",{get:function(){return null==this._instance&&(this._instance=new t),this._instance},enumerable:!0,configurable:!0}),t.prototype.send=function(t,e,i){void 0===i&&(i=""),this._messages[t]||(this._messages[t]={}),this._messages[t][e]=i},t.prototype.get=function(t,e,i){return void 0===i&&(i=!0),this._messages[t]&&null!=this._messages[t][e]?this._messages[t][e]:null},t._instance=null,t}();i.default=r,cc._RF.pop()},{}]},{},["Board","Cell","EventManager","Utils","transport-message","GameLevel","MainMenu","Path","PathLine","Player","TouchInput"]);