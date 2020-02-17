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
        _this.POOL_SIZE = 5;
        _this._delayTime = .4;
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.trail = null;
        return _this;
      }
      Game.prototype.start = function() {
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
      };
      Game.prototype.onTouchBegan = function(event) {};
      Game.prototype.onTouchEnd = function(event) {
        var pointerPos = event.getLocation();
        this.trail.setPosition(pointerPos);
      };
      Game.prototype.onTouchMove = function(event) {
        var pointerPos = event.getLocation();
        this.trail.setPosition(pointerPos);
      };
      Game.prototype.onTouchCancle = function(event) {};
      Game.prototype.update = function(dt) {};
      __decorate([ property(cc.Node) ], Game.prototype, "trail", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {} ],
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
  }, {} ]
}, {}, [ "EnviromentManager", "Game", "RotateZ", "event-manager" ]);