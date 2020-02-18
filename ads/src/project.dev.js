window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BeatMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cad6etoHZ5BmIiu8s7jhgqb", "BeatMap");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BeatMap = function() {
      function BeatMap() {
        this.beatNodes = new Array({
          timeAppear: 2.42916679,
          duration: 2
        }, {
          timeAppear: 3.00000024,
          duration: 2
        }, {
          timeAppear: 3.57083344,
          duration: 2
        }, {
          timeAppear: 4.142709,
          duration: 2
        }, {
          timeAppear: 4.713542,
          duration: 2
        }, {
          timeAppear: 5.28645849,
          duration: 2
        }, {
          timeAppear: 5.857292,
          duration: 2
        }, {
          timeAppear: 6.429167,
          duration: 2
        }, {
          timeAppear: 7.00000048,
          duration: 2
        }, {
          timeAppear: 7.57083368,
          duration: 2
        }, {
          timeAppear: 8.139584,
          duration: 2
        }, {
          timeAppear: 8.713542,
          duration: 2
        }, {
          timeAppear: 9.857292,
          duration: 2
        }, {
          timeAppear: 10.4291668,
          duration: 2
        }, {
          timeAppear: 11.000001,
          duration: 2
        }, {
          timeAppear: 11.5708342,
          duration: 2
        }, {
          timeAppear: 12.1427088,
          duration: 2
        }, {
          timeAppear: 12.713542,
          duration: 2
        }, {
          timeAppear: 13.286459,
          duration: 2
        }, {
          timeAppear: 14.4291677,
          duration: 2
        }, {
          timeAppear: 15.000001,
          duration: 2
        }, {
          timeAppear: 15.5708342,
          duration: 2
        }, {
          timeAppear: 16.14271,
          duration: 2
        }, {
          timeAppear: 16.7135429,
          duration: 2
        }, {
          timeAppear: 17,
          duration: 2
        }, {
          timeAppear: 17.286459,
          duration: 2
        }, {
          timeAppear: 17.5770836,
          duration: 2
        }, {
          timeAppear: 17.8572922,
          duration: 2
        }, {
          timeAppear: 19.0000019,
          duration: 2
        }, {
          timeAppear: 19.5718765,
          duration: 2
        }, {
          timeAppear: 20.14271,
          duration: 2
        }, {
          timeAppear: 20.7145844,
          duration: 2
        }, {
          timeAppear: 21.286459,
          duration: 2
        }, {
          timeAppear: 21.8572922,
          duration: 2
        }, {
          timeAppear: 22.4291687,
          duration: 2
        }, {
          timeAppear: 23.0000019,
          duration: 2
        }, {
          timeAppear: 23.5718765,
          duration: 2
        }, {
          timeAppear: 24.14271,
          duration: 2
        }, {
          timeAppear: 24.7135429,
          duration: 2
        }, {
          timeAppear: 25.286459,
          duration: 2
        }, {
          timeAppear: 25.8572922,
          duration: 2
        }, {
          timeAppear: 26.4291687,
          duration: 2
        }, {
          timeAppear: 27.0000019,
          duration: 2
        }, {
          timeAppear: 27.5708351,
          duration: 2
        }, {
          timeAppear: 28.14271,
          duration: 2
        }, {
          timeAppear: 28.7135429,
          duration: 2
        }, {
          timeAppear: 29.286459,
          duration: 2
        }, {
          timeAppear: 29.8572941,
          duration: 2
        }, {
          timeAppear: 30.4291687,
          duration: 2
        });
      }
      BeatMap.prototype.getNodeAt = function(index) {
        return this.beatNodes[index];
      };
      BeatMap = __decorate([ ccclass ], BeatMap);
      return BeatMap;
    }();
    exports.default = BeatMap;
    cc._RF.pop();
  }, {} ],
  BeatNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97843TnJ0NDx41uKYDQiYrz", "BeatNode");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BeatNode = function() {
      function BeatNode() {
        this.timeAppear = 0;
        this.duration = 0;
      }
      BeatNode = __decorate([ ccclass ], BeatNode);
      return BeatNode;
    }();
    exports.default = BeatNode;
    cc._RF.pop();
  }, {} ],
  BoxController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86f4ecRY1tNUJIeguS5O4W0", "BoxController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("./core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BoxController = function(_super) {
      __extends(BoxController, _super);
      function BoxController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.targetPos = null;
        _this.targetPos1 = null;
        _this.tween = null;
        return _this;
      }
      BoxController.prototype.start = function() {
        var _this = this;
        event_manager_1.default.instance.register("collided-with-touch", function() {
          var currentPos = cc.Vec3.ZERO;
          _this.node.getPosition(currentPos);
          currentPos.z > -858 && currentPos.z < -50 && _this.node.destroy();
        }, this);
      };
      BoxController.prototype.moveTo = function(targetPos, duration) {
        var _this = this;
        this.targetPos = targetPos;
        var currentPos = cc.Vec3.ZERO;
        this.node.getPosition(currentPos);
        this.targetPos1 = targetPos.sub(currentPos).mul(2);
        var twMoveTo1 = cc.tween(this.node).to(duration, {
          position: this.targetPos
        });
        var twMoveTo2 = cc.tween(this.node).to(duration, {
          position: this.targetPos1
        });
        this.tween = cc.tween(this.node).sequence(twMoveTo1, twMoveTo2).call(function() {
          _this.node.destroy();
        }).call(function() {
          _this.tween = null;
        }).start();
      };
      BoxController.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
        this.tween && this.tween.stop();
      };
      BoxController = __decorate([ ccclass ], BoxController);
      return BoxController;
    }(cc.Component);
    exports.default = BoxController;
    cc._RF.pop();
  }, {
    "./core/event-manager": "event-manager"
  } ],
  EnviromentManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c619121KDVAW7kSE81CqHbJ", "EnviromentManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnviromentManager = function(_super) {
      __extends(EnviromentManager, _super);
      function EnviromentManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.root = null;
        _this.env_prefabs = [];
        _this.start_position = null;
        _this.end_position = null;
        _this._pools = [];
        _this.POOL_SIZE = 10;
        _this._delayTime = .5;
        _this._currentPoolIndex = 0;
        _this._starPos = cc.Vec3.ZERO;
        _this._endPos = cc.Vec3.ZERO;
        return _this;
      }
      EnviromentManager.prototype.onLoad = function() {
        this.start_position.getPosition(this._starPos);
        this.end_position.getPosition(this._endPos);
        this.create_pools();
      };
      EnviromentManager.prototype.start = function() {
        this.schedule(this.spawn_enviroment_obstacle.bind(this), this._delayTime);
      };
      EnviromentManager.prototype.spawn_enviroment_obstacle = function() {
        var _this = this;
        this._currentPoolIndex++;
        this._currentPoolIndex >= this.POOL_SIZE && (this._currentPoolIndex = 0);
        var tempNode = this._pools[this._currentPoolIndex];
        tempNode.setPosition(this._starPos);
        tempNode.active = true;
        cc.tween(tempNode).to(1.5, {
          position: this._endPos
        }).call(function() {
          tempNode.active = false;
          tempNode.setPosition(_this._starPos);
        }).start();
      };
      EnviromentManager.prototype.create_pools = function() {
        var _this = this;
        for (var i = 0; i < this.POOL_SIZE; i++) this.env_prefabs.forEach(function(pref) {
          var node = cc.instantiate(pref);
          node.is3DNode = true;
          node.setPosition(_this._starPos);
          _this.root.addChild(node);
          node.active = false;
          _this._pools.push(node);
        });
      };
      __decorate([ property(cc.Node) ], EnviromentManager.prototype, "root", void 0);
      __decorate([ property([ cc.Prefab ]) ], EnviromentManager.prototype, "env_prefabs", void 0);
      __decorate([ property(cc.Node) ], EnviromentManager.prototype, "start_position", void 0);
      __decorate([ property(cc.Node) ], EnviromentManager.prototype, "end_position", void 0);
      EnviromentManager = __decorate([ ccclass ], EnviromentManager);
      return EnviromentManager;
    }(cc.Component);
    exports.default = EnviromentManager;
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebf89glQ8FHrr7mHW/NMF76", "Game");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BeatMap_1 = require("./BeatMap");
    var BoxController_1 = require("./BoxController");
    var event_manager_1 = require("./core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.trail = null;
        _this.uiCamera = null;
        _this.gameCamera = null;
        _this.spawnPositionNode = null;
        _this.targetBoxPositionNode = null;
        _this.boxPrefab = null;
        _this._beatMap = null;
        _this._tagetBoxPosition = cc.Vec3.ZERO;
        _this._spawnBoxPosition = cc.Vec3.ZERO;
        _this.rayTouchPos = null;
        _this._isRunning = false;
        _this._currentBeatIndex = 0;
        _this._lastTimeSpawned = 0;
        _this._timeTravelled = 0;
        _this.beatDuration = 2;
        return _this;
      }
      Game.prototype.start = function() {
        this.targetBoxPositionNode.getPosition(this._tagetBoxPosition);
        this.spawnPositionNode.getPosition(this._spawnBoxPosition);
        this._beatMap = new BeatMap_1.default();
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        this._isRunning = true;
        cc.audioEngine.playMusic(this.getComponent(cc.AudioSource).clip, false);
      };
      Game.prototype.onTouchBegan = function(event) {
        var touchPos = this.uiCamera.node.parent.convertTouchToNodeSpaceAR(event.touch);
        this.trail.setPosition(touchPos);
        this.rayTouchPos = null;
      };
      Game.prototype.onTouchEnd = function(event) {
        this.rayTouchPos = null;
      };
      Game.prototype.onTouchMove = function(event) {
        var touchPos = this.uiCamera.node.parent.convertTouchToNodeSpaceAR(event.touch);
        this.trail.setPosition(touchPos);
        this.rayTouchPos = event.touch.getLocation();
      };
      Game.prototype.onTouchCancle = function(event) {
        this.rayTouchPos = null;
      };
      Game.prototype.update = function(dt) {
        if (!this._isRunning) return;
        this._timeTravelled += dt;
        var currentNode = this._beatMap.getNodeAt(-1 != this._currentBeatIndex ? this._currentBeatIndex + 1 : 0);
        var realTimeAppear = currentNode.timeAppear - this.beatDuration;
        if (this._timeTravelled > realTimeAppear) {
          this.spawnObject();
          this._currentBeatIndex++;
          if (this._currentBeatIndex >= this._beatMap.beatNodes.length) {
            cc.audioEngine.stopAll();
            this._isRunning = false;
          }
        }
        if (null != this.rayTouchPos) {
          var ray = this.gameCamera.getRay(this.rayTouchPos);
          var results = cc.geomUtils.intersect.raycast(this.node, ray, null, cc.RayCastType.Closest);
          if (results.length > 0) {
            this.rayTouchPos = null;
            results.forEach(function(element) {
              cc.log(element.node.name);
              "Cube_2" == element.node.name && event_manager_1.default.instance.dispatch("collided-with-touch");
            });
          }
        }
      };
      Game.prototype.spawnObject = function() {
        var beatNode = this._beatMap.getNodeAt(-1 != this._currentBeatIndex ? this._currentBeatIndex + 1 : 0);
        var target_offset = this.calculateObstacleOffset(0);
        var box = cc.instantiate(this.boxPrefab);
        this.node.addChild(box);
        box.setPosition(this._spawnBoxPosition);
        box.active = true;
        box.getComponent(BoxController_1.default).moveTo(target_offset, this.beatDuration);
      };
      Game.prototype.getRandom = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      Game.prototype.calculateObstacleOffset = function(timeAppear) {
        return cc.v3(this.getRandom(-300, 300), this._tagetBoxPosition.y, this._tagetBoxPosition.z);
      };
      __decorate([ property(cc.Node) ], Game.prototype, "trail", void 0);
      __decorate([ property(cc.Camera) ], Game.prototype, "uiCamera", void 0);
      __decorate([ property(cc.Camera) ], Game.prototype, "gameCamera", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "spawnPositionNode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "targetBoxPositionNode", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "boxPrefab", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./BeatMap": "BeatMap",
    "./BoxController": "BoxController",
    "./core/event-manager": "event-manager"
  } ],
  RotateZ: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4431cb0ayRAq7IMUmCPus+L", "RotateZ");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RotateZ = function(_super) {
      __extends(RotateZ, _super);
      function RotateZ() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.duration = 1;
        return _this;
      }
      RotateZ.prototype.start = function() {
        cc.tween(this.node).by(this.duration, {
          rotation: 360
        }).repeatForever().start();
      };
      __decorate([ property ], RotateZ.prototype, "duration", void 0);
      RotateZ = __decorate([ ccclass ], RotateZ);
      return RotateZ;
    }(cc.Component);
    exports.default = RotateZ;
    cc._RF.pop();
  }, {} ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2cf411jZnlCv7k4ksh1VkHl", "event-manager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Listenner = function() {
      function Listenner() {
        this.target = null;
        this.callback = null;
        this.priority = 0;
        this.excuteOnce = false;
      }
      return Listenner;
    }();
    var EventManager = function() {
      function EventManager() {
        this.eventListenners = {};
      }
      Object.defineProperty(EventManager, "instance", {
        get: function() {
          null == EventManager._instance && (EventManager._instance = new EventManager());
          return EventManager._instance;
        },
        enumerable: true,
        configurable: true
      });
      EventManager.prototype.register = function(event, callback, target, priority, excuteOnce) {
        void 0 === target && (target = null);
        void 0 === priority && (priority = 0);
        void 0 === excuteOnce && (excuteOnce = false);
        var listenner = {
          target: target,
          callback: callback,
          priority: priority,
          excuteOnce: excuteOnce
        };
        if (this.eventListenners[event]) this.eventListenners[event].push(listenner); else {
          this.eventListenners[event] = [];
          this.eventListenners[event].push(listenner);
        }
        this.eventListenners[event].sort(function(a, b) {
          return b.priority - a.priority;
        });
        return callback;
      };
      EventManager.prototype.registerOnce = function(event, callback, target, priority) {
        void 0 === target && (target = null);
        void 0 === priority && (priority = 0);
        this.register(event, callback, target, priority, true);
      };
      EventManager.prototype.unregister = function(event, callback, target) {
        void 0 === target && (target = null);
        if (this.eventListenners[event]) {
          var toRemove_1 = [];
          for (var i = 0; i < this.eventListenners[event].length; i++) {
            var listenner = this.eventListenners[event][i];
            null == callback ? listenner.target == target && toRemove_1.push(i) : listenner.target == target && listenner.callback == callback && toRemove_1.push(i);
          }
          this.eventListenners[event] = this.eventListenners[event].filter(function(val, id) {
            return -1 === toRemove_1.indexOf(id);
          });
          0 == this.eventListenners[event].length && delete this.eventListenners[event];
        }
      };
      EventManager.prototype.unregisterTarget = function(target) {
        var _loop_1 = function(event) {
          var toRemove = [];
          for (var i = 0; i < this_1.eventListenners[event].length; i++) {
            var listenner = this_1.eventListenners[event][i];
            listenner.target == target && toRemove.push(i);
          }
          this_1.eventListenners[event] = this_1.eventListenners[event].filter(function(val, id) {
            return -1 === toRemove.indexOf(id);
          });
          0 == this_1.eventListenners[event].length && delete this_1.eventListenners[event];
        };
        var this_1 = this;
        for (var event in this.eventListenners) _loop_1(event);
      };
      EventManager.prototype.remove = function(event) {
        this.eventListenners[event] && delete this.eventListenners[event];
      };
      EventManager.prototype.dispatch = function(event) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        if (this.eventListenners[event]) {
          var excuteOnce_1 = [];
          this.eventListenners[event].forEach(function(listenner) {
            listenner.target ? listenner.callback.call(listenner.target, params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]) : listenner.callback(params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]);
            true == listenner.excuteOnce && excuteOnce_1.push(listenner);
          });
          excuteOnce_1.forEach(function(listenner) {
            _this.unregister(event, listenner.callback, listenner.target);
          });
        }
      };
      EventManager._instance = null;
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {} ],
  sprite3d: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ad4ajfq1JAgLXg/AL9sB4F", "sprite3d");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        col: 4,
        row: 2,
        maxFrame: 8,
        interVal: .2,
        isLoop: true
      },
      mIsFinish: false,
      onLoad: function onLoad() {
        this.mMaterial = this.getComponent(cc.MeshRenderer).getMaterial(0);
        this.getComponent(cc.MeshRenderer).setMaterial(0, this.mMaterial);
        this.delay = this.interVal;
        this.index = 0;
        this.mMaterial.setProperty("mainTiling", cc.v2(1 / this.col, 1 / this.row));
        this.mIsFinish = false;
      },
      start: function start() {},
      update: function update(dt) {
        if (!this.mIsFinish) {
          this.delay -= dt;
          if (this.delay <= 0) {
            this.delay = this.interVal;
            var col = this.index % this.col;
            var row = Math.floor(this.index / this.col);
            this.mMaterial.setProperty("mainOffset", cc.v2(col / this.col, row / this.row));
            this.index++;
            if (this.index >= this.maxFrame) {
              this.index = 0;
              this.isLoop || (this.mIsFinish = true);
            }
          }
        }
      },
      SetMaterialDiffuseAlpha: function SetMaterialDiffuseAlpha(alpha) {
        var newDiffuseColor = this.mMaterial._props.diffuseColor;
        if (void 0 != newDiffuseColor) {
          newDiffuseColor.setA(alpha);
          this.mMaterial.setProperty("diffuseColor", newDiffuseColor, true);
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "BeatMap", "BeatNode", "BoxController", "EnviromentManager", "Game", "RotateZ", "event-manager", "sprite3d" ]);