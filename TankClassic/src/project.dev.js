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
  BornEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3d87UmdKhGRqdGfg0oSEZb", "BornEffect");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BornEffect = function(_super) {
      __extends(BornEffect, _super);
      function BornEffect() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BornEffect.prototype.start = function() {
        var _this = this;
        this.node.runAction(cc.sequence(cc.spawn(cc.rotateBy(.5, 720), cc.scaleBy(.5, .1, .1)), cc.callFunc(function() {
          _this.node.removeFromParent();
        })));
      };
      BornEffect = __decorate([ ccclass ], BornEffect);
      return BornEffect;
    }(cc.Component);
    exports.default = BornEffect;
    cc._RF.pop();
  }, {} ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1f42hyM8tCfr+xcxS0csxl", "Bullet");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundManager_1 = require("./core/SoundManager");
    var Tank_1 = require("./Tank");
    var EventManager_1 = require("./core/EventManager");
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bullet = function(_super) {
      __extends(Bullet, _super);
      function Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.explosion = null;
        _this.BulletFrames = [];
        _this._owner = null;
        return _this;
      }
      Bullet.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.CollisionTag.Bullet) this._owner.collisionTag == Entity_1.CollisionTag.EnemyTank && (contact.disabled = true); else if (otherCollider.tag == Entity_1.CollisionTag.Brick) {
          this.onBulletExplosion();
          otherCollider.node.removeFromParent();
        } else if (otherCollider.tag == Entity_1.CollisionTag.Rock) this.onBulletExplosion(); else if (otherCollider.tag == Entity_1.CollisionTag.Eagle) {
          this.onBulletExplosion();
          EventManager_1.default.instance.dispatch("death-eagle");
        } else if (this._owner.collisionTag == Entity_1.CollisionTag.EnemyTank) {
          if (otherCollider.tag == Entity_1.CollisionTag.EnemyTank) contact.disabled = true; else if (otherCollider.tag == Entity_1.CollisionTag.PlayerTank) {
            otherCollider.node.getComponent(Tank_1.default).onDamage(1);
            this.onBulletExplosion();
          }
        } else if (this._owner.collisionTag == Entity_1.CollisionTag.PlayerTank && otherCollider.tag == Entity_1.CollisionTag.EnemyTank) {
          otherCollider.node.getComponent(Tank_1.default).onDamage(1);
          this.onBulletExplosion();
        }
      };
      Bullet.prototype.onBulletExplosion = function() {
        var expl = cc.instantiate(this.explosion);
        expl.parent = this.node.parent;
        expl.position = this.node.position;
        expl.getComponent(cc.Animation).once("finished", function() {
          expl.removeFromParent();
        });
        this.node.removeFromParent();
        SoundManager_1.default.instance.playEffect("sfx_explosion");
      };
      Bullet.prototype.excute = function(owner) {
        this.state = Entity_1.EState.Move;
        this._owner = owner;
        this.speed = 2 * owner.speed;
        this.dir = owner.dir;
      };
      Bullet.prototype.update = function(dt) {
        this.updateMove();
      };
      __decorate([ property(cc.Prefab) ], Bullet.prototype, "explosion", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], Bullet.prototype, "BulletFrames", void 0);
      Bullet = __decorate([ ccclass ], Bullet);
      return Bullet;
    }(Entity_1.default);
    exports.default = Bullet;
    cc._RF.pop();
  }, {
    "./Entity": "Entity",
    "./Tank": "Tank",
    "./core/EventManager": "EventManager",
    "./core/SoundManager": "SoundManager"
  } ],
  CameraController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fb78xz8sNPd4K2ECcbEuxG", "CameraController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraController = function(_super) {
      __extends(CameraController, _super);
      function CameraController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._followTarget = null;
        _this._ratio = 1;
        _this._visibleSize = cc.Size.ZERO;
        _this._leftBound = 0;
        _this._rightBound = 0;
        _this._topBound = 0;
        _this._bottomBound = 0;
        return _this;
      }
      CameraController.prototype.onLoad = function() {
        this._ratio = this.getComponent(cc.Camera).zoomRatio;
        this._visibleSize = cc.view.getVisibleSize();
      };
      CameraController.prototype.setFollowNode = function(target, size) {
        this._followTarget = target;
        this._leftBound = .5 * (-size.width * this._ratio + this._visibleSize.width);
        this._rightBound = -this._leftBound;
        this._topBound = .5 * (size.height * this._ratio - this._visibleSize.height);
        this._bottomBound = -this._topBound;
      };
      CameraController.prototype.lateUpdate = function() {
        if (null == this._followTarget) return;
        var targetPos = this._followTarget.parent.convertToWorldSpaceAR(this._followTarget.position);
        var newPosition = this.node.parent.convertToNodeSpaceAR(targetPos);
        var x, y;
        x = this._leftBound > this._rightBound ? 0 : cc.misc.clampf(newPosition.x, this._leftBound, this._rightBound);
        y = cc.misc.clampf(newPosition.y, this._bottomBound, this._topBound);
        this.node.position = cc.v2(x, y);
      };
      CameraController = __decorate([ ccclass ], CameraController);
      return CameraController;
    }(cc.Component);
    exports.default = CameraController;
    cc._RF.pop();
  }, {} ],
  EndScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a968bh2JLxFLoXE9KTdgWrn", "EndScreen");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./core/EventManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EndScreen = function(_super) {
      __extends(EndScreen, _super);
      function EndScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dlgEndScreen = null;
        return _this;
      }
      EndScreen.prototype.onLoad = function() {
        this.dlgEndScreen.active = false;
      };
      EndScreen.prototype.start = function() {
        var _this = this;
        EventManager_1.default.instance.register("show-end-screen", function() {
          _this.dlgEndScreen.active = true;
        });
      };
      EndScreen.prototype.onTryAgain = function() {
        this.dlgEndScreen.active = false;
        cc.director.loadScene("lvl1");
      };
      EndScreen.prototype.onNextLevel = function() {
        this.dlgEndScreen.active = false;
      };
      __decorate([ property(cc.Node) ], EndScreen.prototype, "dlgEndScreen", void 0);
      EndScreen = __decorate([ ccclass ], EndScreen);
      return EndScreen;
    }(cc.Component);
    exports.default = EndScreen;
    cc._RF.pop();
  }, {
    "./core/EventManager": "EventManager"
  } ],
  EnemyTank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4513EhyXlCPLNOv9am6X/7", "EnemyTank");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tank_1 = require("./Tank");
    var Utils_1 = require("./core/Utils");
    var Entity_1 = require("./Entity");
    var EventManager_1 = require("./core/EventManager");
    var Item_1 = require("./Item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnemyTank = function(_super) {
      __extends(EnemyTank, _super);
      function EnemyTank() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bringItem = false;
        _this._isLocked = false;
        return _this;
      }
      EnemyTank.prototype.start = function() {
        var _this = this;
        _super.prototype.start.call(this);
        this.state = Entity_1.EState.Move;
        this.dir = Entity_1.EDir.Down;
        this.schedule(this.RandomDir, 2);
        Utils_1.default.getRandomInt(0, 100) > 90 && (this.bringItem = true);
        EventManager_1.default.instance.register("player-eat-item", function(itemType) {
          if (itemType == Item_1.EItemType.Bomb) _this.onDamage(1); else if (itemType == Item_1.EItemType.Lock) {
            _this._isLocked = true;
            _this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
              _this._isLocked = false;
            })));
          }
        });
      };
      EnemyTank.prototype.onDamage = function(damage) {
        _super.prototype.onDamage.call(this, damage);
        this.bringItem && EventManager_1.default.instance.dispatch("spawn-item", this.node.position);
      };
      EnemyTank.prototype.setLevel = function(level) {
        _super.prototype.setLevel.call(this, level);
        if (0 == level) {
          this.speed = 120;
          this.shootingInterval = 1;
        } else if (1 == level) {
          this.speed = 100;
          this.shootingInterval = 1.2;
        }
        this.unschedule(this.onShoot);
        this.schedule(this.onShoot, this.shootingInterval);
      };
      EnemyTank.prototype.onShoot = function() {
        var _this = this;
        var currentCanon = this.getCanonNode();
        var anim = currentCanon.getComponent(cc.Animation);
        anim.play("enemy_canon" + (this.currentLevel + 1) + "_shoot");
        anim.once("finished", function() {
          anim.play("enemy_canon" + (_this.currentLevel + 1) + "_idle");
        });
        _super.prototype.onShoot.call(this);
      };
      EnemyTank.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        otherCollider.tag == Entity_1.CollisionTag.EnemyTank && (contact.disabled = true);
        this.RandomDir();
      };
      EnemyTank.prototype.RandomDir = function() {
        this.dir = Utils_1.default.getRandomInt(Entity_1.EDir.Up, Entity_1.EDir.Right);
      };
      EnemyTank = __decorate([ ccclass ], EnemyTank);
      return EnemyTank;
    }(Tank_1.default);
    exports.default = EnemyTank;
    cc._RF.pop();
  }, {
    "./Entity": "Entity",
    "./Item": "Item",
    "./Tank": "Tank",
    "./core/EventManager": "EventManager",
    "./core/Utils": "Utils"
  } ],
  Entity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46eecKrH1pMwYf8i7os6vQI", "Entity");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EState;
    (function(EState) {
      EState[EState["Idle"] = 0] = "Idle";
      EState[EState["Move"] = 1] = "Move";
      EState[EState["Death"] = 2] = "Death";
    })(EState = exports.EState || (exports.EState = {}));
    var EDir;
    (function(EDir) {
      EDir[EDir["Up"] = 0] = "Up";
      EDir[EDir["Down"] = 1] = "Down";
      EDir[EDir["Left"] = 2] = "Left";
      EDir[EDir["Right"] = 3] = "Right";
    })(EDir = exports.EDir || (exports.EDir = {}));
    var CollisionTag;
    (function(CollisionTag) {
      CollisionTag[CollisionTag["Default"] = 0] = "Default";
      CollisionTag[CollisionTag["PlayerTank"] = 1] = "PlayerTank";
      CollisionTag[CollisionTag["EnemyTank"] = 2] = "EnemyTank";
      CollisionTag[CollisionTag["Bullet"] = 3] = "Bullet";
      CollisionTag[CollisionTag["Brick"] = 4] = "Brick";
      CollisionTag[CollisionTag["Rock"] = 5] = "Rock";
      CollisionTag[CollisionTag["Eagle"] = 6] = "Eagle";
      CollisionTag[CollisionTag["Item"] = 7] = "Item";
    })(CollisionTag = exports.CollisionTag || (exports.CollisionTag = {}));
    var Entity = function(_super) {
      __extends(Entity, _super);
      function Entity() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.displayNode = null;
        _this.collisionTag = CollisionTag.Default;
        _this.state = EState.Idle;
        _this.dir = EDir.Up;
        _this.level = 0;
        _this.velocity = cc.Vec2.ZERO;
        _this.rigitBody = null;
        _this.speed = 0;
        return _this;
      }
      Entity.prototype.start = function() {
        this.rigitBody = this.getComponent(cc.RigidBody);
        this.getComponent(cc.PhysicsCollider).tag = this.collisionTag;
      };
      Entity.prototype.updateMove = function() {
        this.state == EState.Death || this.state == EState.Idle ? this.velocity = cc.Vec2.ZERO : this.updateDir();
        this.rigitBody.linearVelocity = this.velocity;
      };
      Entity.prototype.updateDir = function() {
        if (this.dir == EDir.Left) {
          this.velocity = cc.v2(-this.speed, 0);
          this.displayNode.scaleY = 1;
          this.displayNode.rotation = -90;
        } else if (this.dir == EDir.Right) {
          this.velocity = cc.v2(this.speed, 0);
          this.displayNode.scaleY = 1;
          this.displayNode.rotation = 90;
        } else if (this.dir == EDir.Up) {
          this.velocity = cc.v2(0, this.speed);
          this.displayNode.scaleY = 1;
          this.displayNode.rotation = 0;
        } else if (this.dir == EDir.Down) {
          this.velocity = cc.v2(0, -this.speed);
          this.displayNode.scaleY = -1;
          this.displayNode.rotation = 0;
        }
      };
      __decorate([ property(cc.Node) ], Entity.prototype, "displayNode", void 0);
      __decorate([ property({
        type: cc.Enum(CollisionTag)
      }) ], Entity.prototype, "collisionTag", void 0);
      Entity = __decorate([ ccclass ], Entity);
      return Entity;
    }(cc.Component);
    exports.default = Entity;
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49875xjqF9H97XOdysLwPvx", "EventManager");
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
  GamePlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2a76aWdbFDq6Mcas5/zfWg", "GamePlay");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CameraController_1 = require("./CameraController");
    var Entity_1 = require("./Entity");
    var SoundManager_1 = require("./core/SoundManager");
    var EventManager_1 = require("./core/EventManager");
    var MapInfo_1 = require("./MapInfo");
    var KeyInput_1 = require("./core/KeyInput");
    var EnemyTank_1 = require("./EnemyTank");
    var Item_1 = require("./Item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GamePlay = function(_super) {
      __extends(GamePlay, _super);
      function GamePlay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mainCam = null;
        _this.tmxNode = null;
        _this.eaglePrefab = null;
        _this.playerTankPrefab = null;
        _this.enemyTankPrefab = null;
        _this.wall = null;
        _this.rock = null;
        _this.itemPrefab = null;
        _this.lblPlayerLife = null;
        _this.lblEnemyLife = null;
        _this._maxTankAtTheSameTime = 7;
        _this._currentEnemyTankOnScreen = 0;
        _this._numberOfEnemyTank = 0;
        _this._playerTank = null;
        _this._mapInfo = null;
        _this._spawnEnemyInterval = 3;
        _this._eagleHouse = [];
        _this._life = 3;
        return _this;
      }
      GamePlay.prototype.onLoad = function() {
        var _this = this;
        KeyInput_1.KeyInput.instance;
        this._life = 3;
        SoundManager_1.default.instance;
        SoundManager_1.default.instance.init();
        cc.director.getPhysicsManager().enabled = true;
        this.loadTmx("tmx/lvl1");
        EventManager_1.default.instance.registerOnce("Sound_initialized", function() {
          SoundManager_1.default.instance.playMusic("begin", false);
        }, this);
        this._mapInfo = new MapInfo_1.default();
        EventManager_1.default.instance.register("tank-death", function(tag) {
          _this.onTankDeath(tag);
        });
        EventManager_1.default.instance.registerOnce("death-eagle", this.gameOver);
        EventManager_1.default.instance.register("spawn-item", function(pos) {
          _this.spawnItem(pos);
        });
        this.lblPlayerLife.string = this._life.toString();
        this.lblEnemyLife.string = this._numberOfEnemyTank.toString();
      };
      GamePlay.prototype.update = function(dt) {
        KeyInput_1.KeyInput.instance.update();
      };
      GamePlay.prototype.start = function() {
        var _this = this;
        KeyInput_1.KeyInput.instance;
        this.schedule(this.spawnEnemyInterval, this._spawnEnemyInterval);
        EventManager_1.default.instance.register("player-eat-item", function(itemType) {
          itemType == Item_1.EItemType.Life ? _this._life += 1 : itemType == Item_1.EItemType.Shovel;
        });
      };
      GamePlay.prototype.onHShvelChange = function(isShovel) {
        this._eagleHouse.forEach(function(wall) {});
      };
      GamePlay.prototype.gameOver = function() {
        EventManager_1.default.instance.dispatch("show-end-screen");
      };
      GamePlay.prototype.onTankDeath = function(tag) {
        if (tag == Entity_1.CollisionTag.PlayerTank) {
          this._life--;
          this.mainCam.getComponent(CameraController_1.default).setFollowNode(null, this._mapPixelSize);
          this._playerTank.removeFromParent();
          this.lblPlayerLife.string = this._life.toString();
          if (this._life <= 0) this.gameOver(); else {
            this.spawnPlayerTank(this.tmxNode, this._mapInfo.player1_Position);
            this.mainCam.getComponent(CameraController_1.default).setFollowNode(this._playerTank, this._mapPixelSize);
          }
        } else {
          this._currentEnemyTankOnScreen--;
          this.lblEnemyLife.string = this._currentEnemyTankOnScreen.toString();
          this.checkSpawnEnemy();
        }
      };
      GamePlay.prototype.spawnEnemyInterval = function() {
        this.checkSpawnEnemy();
      };
      GamePlay.prototype.checkSpawnEnemy = function() {
        this._numberOfEnemyTank > 0 && this._currentEnemyTankOnScreen < this._maxTankAtTheSameTime && this.spawnEnemy(this._mapInfo.getRandomSpawnPos());
      };
      GamePlay.prototype.spawnEnemy = function(pos) {
        var tank = cc.instantiate(this.enemyTankPrefab);
        tank.parent = this.tmxNode;
        tank.position = pos;
        this._currentEnemyTankOnScreen++;
        this._numberOfEnemyTank--;
        this.lblEnemyLife.string = this._numberOfEnemyTank.toString();
        5 == this._currentEnemyTankOnScreen || 10 == this._currentEnemyTankOnScreen || 15 == this._currentEnemyTankOnScreen ? tank.getComponent(EnemyTank_1.default).setLevel(1) : tank.getComponent(EnemyTank_1.default).setLevel(0);
      };
      GamePlay.prototype.loadTmx = function(name) {
        var _this = this;
        var theMap = this.tmxNode.getComponent(cc.TiledMap);
        cc.loader.loadRes(name, function(err, map) {
          theMap.tmxAsset = map;
          _this.preprecessTitledMap();
        });
      };
      GamePlay.prototype.preprecessTitledMap = function() {
        var _this = this;
        var theMap = this.tmxNode.getComponent(cc.TiledMap);
        this._numberOfEnemyTank = parseInt(theMap.getProperty("MaxEnemy"));
        this._maxTankAtTheSameTime = parseInt(theMap.getProperty("EnemyAtTheSameTime"));
        this.preprocessTiledId(theMap);
        this.preprocessObjsLayer(theMap);
        this.mainCam.getComponent(CameraController_1.default).setFollowNode(this._playerTank, this._mapPixelSize);
        var border = this.tmxNode.addComponent(cc.PhysicsChainCollider);
        border.loop = true;
        border.points = [];
        border.points.push(cc.v2(.5 * -this._mapPixelSize.width, .5 * -this._mapPixelSize.height));
        border.points.push(cc.v2(.5 * -this._mapPixelSize.width, .5 * this._mapPixelSize.height));
        border.points.push(cc.v2(.5 * this._mapPixelSize.width, .5 * this._mapPixelSize.height));
        border.points.push(cc.v2(.5 * this._mapPixelSize.width, .5 * -this._mapPixelSize.height));
        border.tag = Entity_1.CollisionTag.Rock;
        border.apply();
        this._mapInfo.enemySpawnPosition.forEach(function(pos) {
          _this.spawnEnemy(pos);
        });
      };
      GamePlay.prototype.preprocessTiledId = function(theMap) {
        var tileLayer = theMap.getLayer("Tile Layer 1");
        this._mapPixelSize = tileLayer.node.getContentSize();
        var height = tileLayer.getLayerSize().height;
        var width = tileLayer.getLayerSize().width;
        for (var w = 0; w < width; w++) for (var h = 0; h < height; h++) if (1 == tileLayer.getTileGIDAt(h, w)) {
          var wall = cc.instantiate(this.wall);
          wall.parent = this.tmxNode;
          var pos = tileLayer.getPositionAt(h, w);
          wall.position = cc.v2(pos.x - this._mapPixelSize.width * tileLayer.node.anchorX + .5 * wall.width, pos.y - this._mapPixelSize.height * tileLayer.node.anchorY + .5 * wall.height);
        } else if (2 == tileLayer.getTileGIDAt(h, w)) {
          var rock = cc.instantiate(this.rock);
          rock.parent = this.tmxNode;
          var pos = tileLayer.getPositionAt(h, w);
          rock.position = cc.v2(pos.x - this._mapPixelSize.width * tileLayer.node.anchorX + .5 * rock.width, pos.y - this._mapPixelSize.height * tileLayer.node.anchorY + .5 * rock.height);
        } else if (7 == tileLayer.getTileGIDAt(h, w)) {
          var wall = cc.instantiate(this.wall);
          wall.parent = this.tmxNode;
          var pos = tileLayer.getPositionAt(h, w);
          wall.position = cc.v2(pos.x - this._mapPixelSize.width * tileLayer.node.anchorX + .5 * wall.width, pos.y - this._mapPixelSize.height * tileLayer.node.anchorY + .5 * wall.height);
          this._eagleHouse.push(wall);
        }
        tileLayer.setTileSet(0);
      };
      GamePlay.prototype.preprocessObjsLayer = function(theMap) {
        var _this = this;
        var objectLayer = theMap.getObjectGroup("spawn_points");
        var objs = objectLayer.getObjects();
        objs.forEach(function(obj) {
          if ("enemy_spawn" == obj.name) _this._mapInfo.enemySpawnPosition.push(cc.v2(obj.x - .5 * _this._mapPixelSize.width, obj.y - .5 * _this._mapPixelSize.height)); else if ("player2_spawn" == obj.name) ; else if ("player1_spawn" == obj.name) {
            _this._mapInfo.player1_Position = cc.v2(obj.x - .5 * _this._mapPixelSize.width, obj.y - .5 * _this._mapPixelSize.height);
            _this.spawnPlayerTank(_this.tmxNode, _this._mapInfo.player1_Position);
          } else if ("eagle_spawn" == obj.name) {
            var eagle = cc.instantiate(_this.eaglePrefab);
            eagle.parent = _this.tmxNode;
            eagle.position = cc.v2(obj.x - .5 * _this._mapPixelSize.width, obj.y - .5 * _this._mapPixelSize.height);
          }
        });
      };
      GamePlay.prototype.spawnPlayerTank = function(parentNode, pos) {
        this._playerTank = cc.instantiate(this.playerTankPrefab);
        this._playerTank.parent = parentNode;
        this._playerTank.position = pos;
      };
      GamePlay.prototype.spawnItem = function(pos) {
        var item = cc.instantiate(this.itemPrefab);
        item.parent = this.tmxNode;
        item.position = pos;
      };
      __decorate([ property(cc.Node) ], GamePlay.prototype, "mainCam", void 0);
      __decorate([ property(cc.Node) ], GamePlay.prototype, "tmxNode", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "eaglePrefab", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "playerTankPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "enemyTankPrefab", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "wall", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "rock", void 0);
      __decorate([ property(cc.Prefab) ], GamePlay.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Label) ], GamePlay.prototype, "lblPlayerLife", void 0);
      __decorate([ property(cc.Label) ], GamePlay.prototype, "lblEnemyLife", void 0);
      GamePlay = __decorate([ ccclass ], GamePlay);
      return GamePlay;
    }(cc.Component);
    exports.default = GamePlay;
    cc._RF.pop();
  }, {
    "./CameraController": "CameraController",
    "./EnemyTank": "EnemyTank",
    "./Entity": "Entity",
    "./Item": "Item",
    "./MapInfo": "MapInfo",
    "./core/EventManager": "EventManager",
    "./core/KeyInput": "KeyInput",
    "./core/SoundManager": "SoundManager"
  } ],
  GuardEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ac63TVzYJIp68QNy02H3lk", "GuardEffect");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuardEffect = function(_super) {
      __extends(GuardEffect, _super);
      function GuardEffect() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GuardEffect.prototype.start = function() {
        this.node.runAction(cc.repeatForever(cc.rotateBy(2, 360)));
      };
      GuardEffect = __decorate([ ccclass ], GuardEffect);
      return GuardEffect;
    }(cc.Component);
    exports.default = GuardEffect;
    cc._RF.pop();
  }, {} ],
  Item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "80b9dock7ZDTbM+m9kAx6pS", "Item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var Utils_1 = require("./core/Utils");
    var EventManager_1 = require("./core/EventManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EItemType;
    (function(EItemType) {
      EItemType[EItemType["Star"] = 0] = "Star";
      EItemType[EItemType["Lock"] = 1] = "Lock";
      EItemType[EItemType["Life"] = 2] = "Life";
      EItemType[EItemType["Bomb"] = 3] = "Bomb";
      EItemType[EItemType["Guard"] = 4] = "Guard";
      EItemType[EItemType["Shovel"] = 5] = "Shovel";
    })(EItemType = exports.EItemType || (exports.EItemType = {}));
    var Item = function(_super) {
      __extends(Item, _super);
      function Item() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.SpriteFrames = [];
        _this.lifeTime = 60;
        return _this;
      }
      Object.defineProperty(Item.prototype, "Type", {
        get: function() {
          return this._type;
        },
        enumerable: true,
        configurable: true
      });
      Item.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.CollisionTag.PlayerTank) {
          contact.disabled = true;
          EventManager_1.default.instance.dispatch("collide-with-item", this);
        }
      };
      Item.prototype.start = function() {
        this._type = Utils_1.default.getRandomInt(0, EItemType.Shovel);
        this.getComponent(cc.Sprite).spriteFrame = this.SpriteFrames[this._type];
      };
      Item.prototype.update = function(dt) {
        this.lifeTime -= dt;
        this.lifeTime <= 0 && this.node.removeFromParent();
      };
      __decorate([ property([ cc.SpriteFrame ]) ], Item.prototype, "SpriteFrames", void 0);
      Item = __decorate([ ccclass ], Item);
      return Item;
    }(Entity_1.default);
    exports.default = Item;
    cc._RF.pop();
  }, {
    "./Entity": "Entity",
    "./core/EventManager": "EventManager",
    "./core/Utils": "Utils"
  } ],
  KeyInput: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "780eea1OWxLToRP9QgOzlLW", "KeyInput");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GAME_KEY;
    (function(GAME_KEY) {
      GAME_KEY[GAME_KEY["NONE"] = 1] = "NONE";
      GAME_KEY[GAME_KEY["UP"] = 2] = "UP";
      GAME_KEY[GAME_KEY["DOWN"] = 4] = "DOWN";
      GAME_KEY[GAME_KEY["LEFT"] = 8] = "LEFT";
      GAME_KEY[GAME_KEY["RIGHT"] = 16] = "RIGHT";
      GAME_KEY[GAME_KEY["FIRE"] = 32] = "FIRE";
    })(GAME_KEY = exports.GAME_KEY || (exports.GAME_KEY = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KeyInput = function() {
      function KeyInput() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      }
      KeyInput_1 = KeyInput;
      Object.defineProperty(KeyInput, "instance", {
        get: function() {
          null == KeyInput_1._instance && (KeyInput_1._instance = new KeyInput_1());
          return KeyInput_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      KeyInput.prototype.onKeyUp = function(event) {
        this._keysRelease |= this.getKeyMask(event.keyCode);
      };
      KeyInput.prototype.onKeyDown = function(event) {
        var keyMask = this.getKeyMask(event.keyCode);
        this._keysPress |= keyMask;
        this._keysRelease &= ~keyMask;
      };
      KeyInput.prototype.getKeyMask = function(keyCode) {
        switch (keyCode) {
         case cc.macro.KEY.a:
         case cc.macro.KEY.left:
         case cc.macro.KEY.num4:
          return GAME_KEY.LEFT;

         case cc.macro.KEY.d:
         case cc.macro.KEY.right:
         case cc.macro.KEY.num6:
          return GAME_KEY.RIGHT;

         case cc.macro.KEY.w:
         case cc.macro.KEY.up:
         case cc.macro.KEY.num8:
          return GAME_KEY.UP;

         case cc.macro.KEY.s:
         case cc.macro.KEY.down:
         case cc.macro.KEY.num2:
          return GAME_KEY.DOWN;

         case cc.macro.KEY.space:
          return GAME_KEY.FIRE;

         default:
          return GAME_KEY.NONE;
        }
      };
      KeyInput.prototype.update = function() {
        var keysOld = this._keysCurrent;
        this._keysCurrent &= ~this._keysRelease;
        this._keysCurrent |= this._keysPress;
        this._keysRelease &= this._keysPress;
        this._keysPress = 0;
        this._keysPressed = this._keysCurrent & ~keysOld;
        this._keysReleased = keysOld & ~this._keysCurrent;
      };
      KeyInput.prototype.isKeyPressed = function(key) {
        return 0 != (this._keysPressed & key);
      };
      KeyInput.prototype.isKeyReleased = function(key) {
        return 0 != (this._keysReleased & key);
      };
      KeyInput.prototype.isKeyHeld = function(key) {
        return 0 != (this._keysCurrent & key);
      };
      var KeyInput_1;
      KeyInput._instance = null;
      KeyInput = KeyInput_1 = __decorate([ ccclass ], KeyInput);
      return KeyInput;
    }();
    exports.KeyInput = KeyInput;
    cc._RF.pop();
  }, {} ],
  MapInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7f51kVq+VGLa+5aRbtBt7D", "MapInfo");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("./core/Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MapInfo = function() {
      function MapInfo() {
        this.toTalTEnemyLvl1 = 0;
        this.toTalTEnemyLvl2 = 0;
        this.toTalTEnemyLvl3 = 0;
        this.player1_Position = cc.Vec2.ZERO;
        this.player2_Position = cc.Vec2.ZERO;
        this.enemySpawnPosition = [];
      }
      Object.defineProperty(MapInfo.prototype, "totalEnemy", {
        get: function() {
          return this.toTalTEnemyLvl1 + this.toTalTEnemyLvl2 + this.toTalTEnemyLvl3;
        },
        enumerable: true,
        configurable: true
      });
      MapInfo.prototype.getRandomSpawnPos = function() {
        return this.enemySpawnPosition[Utils_1.default.getRandomInt(0, this.enemySpawnPosition.length - 1)];
      };
      MapInfo = __decorate([ ccclass ], MapInfo);
      return MapInfo;
    }();
    exports.default = MapInfo;
    cc._RF.pop();
  }, {
    "./core/Utils": "Utils"
  } ],
  PlayerTank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b76c8ajYZPR78zNIo7aAgD", "PlayerTank");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tank_1 = require("./Tank");
    var KeyInput_1 = require("./core/KeyInput");
    var Entity_1 = require("./Entity");
    var Item_1 = require("./Item");
    var EventManager_1 = require("./core/EventManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerTank = function(_super) {
      __extends(PlayerTank, _super);
      function PlayerTank() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bornEffect = null;
        _this.prefabGuradEffect = null;
        _this.keyMask = 0;
        _this.guardTimer = 0;
        _this.guardEffect = null;
        return _this;
      }
      PlayerTank.prototype.start = function() {
        var _this = this;
        this.speed = 120;
        this.shootingInterval = 1;
        this.guardTimer = 0;
        _super.prototype.start.call(this);
        this.rigitBody = this.getComponent(cc.RigidBody);
        var effect = cc.instantiate(this.bornEffect);
        effect.parent = this.node;
        this.setLevel(0);
        EventManager_1.default.instance.register("collide-with-item", function(item) {
          _this.onCollideWithItem(item);
        });
      };
      PlayerTank.prototype.onCollideWithItem = function(item) {
        var itemType = item.Type;
        switch (itemType) {
         case Item_1.EItemType.Star:
          this.setLevel(this.currentLevel + 1);
          item.node.removeFromParent();
          break;

         case Item_1.EItemType.Guard:
          item.node.removeFromParent();
          this.guardTimer = 60;
          if (null == this.guardTimer) {
            this.guardEffect = cc.instantiate(this.prefabGuradEffect);
            this.guardEffect.parent = this.node;
            this.guardEffect.position = cc.Vec2.ZERO;
          }
          break;

         case Item_1.EItemType.Life:
          EventManager_1.default.instance.dispatch("player-eat-item", itemType);
          item.node.removeFromParent();

         case Item_1.EItemType.Bomb:
          EventManager_1.default.instance.dispatch("player-eat-item", itemType);
          item.node.removeFromParent();

         case Item_1.EItemType.Lock:
          EventManager_1.default.instance.dispatch("player-eat-item", itemType);
          item.node.removeFromParent();

         case Item_1.EItemType.Shovel:
          EventManager_1.default.instance.dispatch("player-eat-item", itemType);
          item.node.removeFromParent();
        }
      };
      PlayerTank.prototype.onShoot = function() {
        var _this = this;
        var currentCanon = this.getCanonNode();
        var anim = currentCanon.getComponent(cc.Animation);
        anim.play("player_canon_" + (this.currentLevel + 1) + "_shoot");
        anim.once("finished", function() {
          anim.play("player_canon_" + (_this.currentLevel + 1) + "_idle");
        });
        _super.prototype.onShoot.call(this);
      };
      PlayerTank.prototype.updateGuardTimer = function(dt) {
        if (this.guardTimer <= 0) {
          null != this.guardEffect && this.guardEffect.removeFromParent();
          return;
        }
        this.guardTimer -= dt;
      };
      PlayerTank.prototype.update = function(dt) {
        this.state = Entity_1.EState.Idle;
        if (KeyInput_1.KeyInput.instance.isKeyPressed(KeyInput_1.GAME_KEY.LEFT) || KeyInput_1.KeyInput.instance.isKeyHeld(KeyInput_1.GAME_KEY.LEFT)) {
          this.state = Entity_1.EState.Move;
          this.dir = Entity_1.EDir.Left;
        } else if (KeyInput_1.KeyInput.instance.isKeyPressed(KeyInput_1.GAME_KEY.RIGHT) || KeyInput_1.KeyInput.instance.isKeyHeld(KeyInput_1.GAME_KEY.RIGHT)) {
          this.state = Entity_1.EState.Move;
          this.dir = Entity_1.EDir.Right;
        } else if (KeyInput_1.KeyInput.instance.isKeyPressed(KeyInput_1.GAME_KEY.UP) || KeyInput_1.KeyInput.instance.isKeyHeld(KeyInput_1.GAME_KEY.UP)) {
          this.state = Entity_1.EState.Move;
          this.dir = Entity_1.EDir.Up;
        } else if (KeyInput_1.KeyInput.instance.isKeyPressed(KeyInput_1.GAME_KEY.DOWN) || KeyInput_1.KeyInput.instance.isKeyHeld(KeyInput_1.GAME_KEY.DOWN)) {
          this.state = Entity_1.EState.Move;
          this.dir = Entity_1.EDir.Down;
        }
        _super.prototype.update.call(this, dt);
        KeyInput_1.KeyInput.instance.isKeyPressed(KeyInput_1.GAME_KEY.FIRE) && this.onShoot();
        this.updateGuardTimer(dt);
      };
      __decorate([ property(cc.Prefab) ], PlayerTank.prototype, "bornEffect", void 0);
      __decorate([ property(cc.Prefab) ], PlayerTank.prototype, "prefabGuradEffect", void 0);
      PlayerTank = __decorate([ ccclass ], PlayerTank);
      return PlayerTank;
    }(Tank_1.default);
    exports.default = PlayerTank;
    cc._RF.pop();
  }, {
    "./Entity": "Entity",
    "./Item": "Item",
    "./Tank": "Tank",
    "./core/EventManager": "EventManager",
    "./core/KeyInput": "KeyInput"
  } ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97e72MGFwVPCJjZ3iufXQ9m", "SoundManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./EventManager");
    var Utils_1 = require("./Utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SoundManager = function() {
      function SoundManager() {
        this.sounds = {};
        this.playingSounds = {};
        this.initialized = false;
        this.enable = true;
        this.DEBUG_LOG = false;
      }
      SoundManager_1 = SoundManager;
      Object.defineProperty(SoundManager, "instance", {
        get: function() {
          null == SoundManager_1._instance && (SoundManager_1._instance = new SoundManager_1());
          return SoundManager_1._instance;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setEnable = function(enable) {
        cc.sys.localStorage.setItem("Sound_enable", enable ? 1 : 0);
      };
      SoundManager.prototype.log = function(message) {
        this.DEBUG_LOG && cc.log(message);
      };
      SoundManager.prototype.error = function(message) {
        this.DEBUG_LOG && cc.error(message);
      };
      SoundManager.prototype.init = function() {
        var _this = this;
        cc.loader.loadResDir("sounds", function(error, assets, urls) {
          if (urls.length > 0) {
            assets.forEach(function(sound, index) {
              -1 != urls[index].indexOf("sounds") && (_this.sounds[sound.name] = sound);
            });
            _this.initialized = true;
            _this.enable = !cc.sys.localStorage.getItem("Sound_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_enable"));
            cc.log("sound init");
            EventManager_1.default.instance.dispatch("Sound_initialized");
          }
        });
      };
      SoundManager.prototype.playMusic = function(clipName, loop, volume) {
        void 0 === loop && (loop = true);
        void 0 === volume && (volume = 1);
        if (!this.enable || !this.initialized) return;
        clipName = clipName.toLowerCase();
        if (this.isPlaying(clipName)) {
          this.log("clipName: " + clipName + " already played");
          return;
        }
        if (this.sounds[clipName]) {
          this.log("play music: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else this.error("playMusic - clipName: " + clipName + " not found");
      };
      SoundManager.prototype.playEffect = function(clipName, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        if (!this.enable || !this.initialized) return;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play effect: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else this.error("playEffect - clipName: " + clipName + " not found");
      };
      SoundManager.prototype.playRandom = function(clipsName, loop, volume) {
        void 0 === loop && (loop = false);
        void 0 === volume && (volume = 1);
        if (!this.enable || !this.initialized) return;
        var idx = Utils_1.default.getRandomInt(0, clipsName.length - 1);
        var clipName = clipsName[idx].toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play random: " + clipName);
          var id = cc.audioEngine.play(this.sounds[clipName], loop, volume);
          this.playingSounds[clipName] = id;
        } else this.error("playRandom - clipName: " + clipsName[idx] + " not found");
      };
      SoundManager.prototype.pause = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        void 0 != this.playingSounds[clipName] ? cc.audioEngine.pause(this.playingSounds[clipName]) : this.error("Pause sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.resume = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        void 0 != this.playingSounds[clipName] ? cc.audioEngine.resume(this.playingSounds[clipName]) : this.error("Resume sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.stop = function(clipName) {
        if (!this.enable) return;
        this.log("stop sound: " + clipName);
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName]) {
          cc.audioEngine.stop(this.playingSounds[clipName]);
          delete this.playingSounds[clipName];
        } else this.error("Stop sound: " + clipName + " is not in playing list");
      };
      SoundManager.prototype.isPlaying = function(clipName) {
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName]) {
          var state = cc.audioEngine.getState(this.playingSounds[clipName]);
          return state == cc.audioEngine.AudioState.PLAYING;
        }
        return false;
      };
      SoundManager.prototype.pauseAll = function() {
        cc.audioEngine.pauseAll();
      };
      SoundManager.prototype.resumeAll = function() {
        if (!this.enable) return;
        cc.audioEngine.resumeAll();
      };
      SoundManager.prototype.stopAll = function() {
        if (!this.enable) return;
        cc.audioEngine.stopAll();
      };
      var SoundManager_1;
      SoundManager._instance = null;
      SoundManager = SoundManager_1 = __decorate([ ccclass ], SoundManager);
      return SoundManager;
    }();
    exports.default = SoundManager;
    cc._RF.pop();
  }, {
    "./EventManager": "EventManager",
    "./Utils": "Utils"
  } ],
  Tank: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68e78nCRXdCr50fuE+i8/jo", "Tank");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Bullet_1 = require("./Bullet");
    var SoundManager_1 = require("./core/SoundManager");
    var EventManager_1 = require("./core/EventManager");
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tank = function(_super) {
      __extends(Tank, _super);
      function Tank() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bulletStartPos = null;
        _this.bulletPrefab = null;
        _this.canonLevels = [];
        _this.shootingInterval = .5;
        _this._canShoot = true;
        _this._HP = 1;
        _this.currentLevel = 0;
        return _this;
      }
      Tank.prototype.start = function() {
        _super.prototype.start.call(this);
        this.schedule(this.canShoot, this.shootingInterval);
      };
      Tank.prototype.update = function(dt) {
        this.updateMove();
      };
      Tank.prototype.setLevel = function(level) {
        level > 2 && (level = 2);
        this.currentLevel = level;
        for (var i = 0; i < this.canonLevels.length; i++) this.canonLevels[i].active = i == level;
      };
      Tank.prototype.onShoot = function() {
        if (!this._canShoot) return;
        if (2 == this.currentLevel) {
          var p1 = void 0;
          var p2 = void 0;
          var offset = 7;
          p1 = cc.v2(this.bulletStartPos.position.x - offset, this.bulletStartPos.position.y);
          p2 = cc.v2(this.bulletStartPos.position.x + offset, this.bulletStartPos.position.y);
          this.spawnBullet(p1);
          this.spawnBullet(p2);
        } else this.spawnBullet(this.bulletStartPos.position);
        SoundManager_1.default.instance.playEffect("fire");
        this._canShoot = false;
      };
      Tank.prototype.spawnBullet = function(position) {
        var bullet = cc.instantiate(this.bulletPrefab);
        bullet.parent = this.node.parent;
        bullet.position = this.node.parent.convertToNodeSpaceAR(this.bulletStartPos.parent.convertToWorldSpaceAR(position));
        bullet.getComponent(Bullet_1.default).excute(this);
      };
      Tank.prototype.canShoot = function() {
        this.state != Entity_1.EState.Death && (this._canShoot = true);
      };
      Tank.prototype.onDestroy = function() {
        this.unschedule(this.canShoot);
      };
      Tank.prototype.onDamage = function(damage) {
        var _this = this;
        this._HP -= damage;
        if (this._HP <= 0) {
          this.state = Entity_1.EState.Death;
          EventManager_1.default.instance.dispatch("tank-death", this.collisionTag);
          if (this.collisionTag == Entity_1.CollisionTag.EnemyTank) {
            this.node.removeComponent(cc.PhysicsCircleCollider);
            this.node.runAction(cc.sequence(cc.blink(.2, 3), cc.callFunc(function() {
              _this.node.removeFromParent();
            })));
          }
        }
      };
      Tank.prototype.getCanonNode = function() {
        return this.canonLevels[this.currentLevel];
      };
      Tank.prototype.isDeath = function() {
        return this._HP <= 0;
      };
      __decorate([ property(cc.Node) ], Tank.prototype, "bulletStartPos", void 0);
      __decorate([ property(cc.Prefab) ], Tank.prototype, "bulletPrefab", void 0);
      __decorate([ property([ cc.Node ]) ], Tank.prototype, "canonLevels", void 0);
      Tank = __decorate([ ccclass ], Tank);
      return Tank;
    }(Entity_1.default);
    exports.default = Tank;
    cc._RF.pop();
  }, {
    "./Bullet": "Bullet",
    "./Entity": "Entity",
    "./core/EventManager": "EventManager",
    "./core/SoundManager": "SoundManager"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "371bcgM67BIV5/t9Q+gu+1N", "Utils");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Utils = function() {
      function Utils() {}
      Utils.getRandom = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      Utils.getRandomInt = function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      };
      Utils = __decorate([ ccclass ], Utils);
      return Utils;
    }();
    exports.default = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "BornEffect", "Bullet", "CameraController", "EndScreen", "EnemyTank", "Entity", "GamePlay", "GuardEffect", "Item", "MapInfo", "PlayerTank", "Tank", "EventManager", "KeyInput", "SoundManager", "Utils" ]);