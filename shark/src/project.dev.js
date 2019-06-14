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
  Ball: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c3c7K5ctpOfrtonhjUazWj", "Ball");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ball = function(_super) {
      __extends(Ball, _super);
      function Ball() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Ball.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.ball;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      Ball = __decorate([ ccclass ], Ball);
      return Ball;
    }(Entity_1.default);
    exports.default = Ball;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  BathClip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3ab79ShRZOprX6MTCgOrhQ", "BathClip");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BathClip = function(_super) {
      __extends(BathClip, _super);
      function BathClip() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BathClip.prototype.start = function() {
        this.node.zIndex = Entity_1.LocalZOrder.bathClip;
      };
      BathClip = __decorate([ ccclass ], BathClip);
      return BathClip;
    }(cc.Component);
    exports.default = BathClip;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  CameraController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba8e5OOsftEhbhgsVlqlS2P", "CameraController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var InputMgr_1 = require("./InputMgr");
    var LevelMgr_1 = require("./LevelMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraController = function(_super) {
      __extends(CameraController, _super);
      function CameraController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftTopMask = null;
        _this.rightBottomMask = null;
        _this.minRatio = .2;
        _this.maxRatio = 1.3;
        _this.mCurrentRatio = 1;
        _this.ZOOM_SPEED = .02;
        _this.camera = null;
        _this.visibleSize = null;
        _this.leftBound = 0;
        _this.rightBound = 0;
        _this.topBound = 0;
        _this.bottomBound = 0;
        _this.pointerPos = null;
        _this.followX = 390;
        _this.followY = 260;
        _this.minFollowDistance = 30;
        _this.needFollow = false;
        _this.isIntroduction = false;
        _this.touches = {};
        _this.kPinchZoomCoeff = .1;
        return _this;
      }
      CameraController_1 = CameraController;
      CameraController.prototype.onLoad = function() {
        CameraController_1.Instance = this;
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        canvas.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
      };
      CameraController.prototype.start = function() {
        this.camera = this.getComponent(cc.Camera);
        this.mCurrentRatio = this.camera.zoomRatio;
        this.visibleSize = cc.view.getVisibleSize();
        this.leftBound = this.leftTopMask.x;
        this.rightBound = this.rightBottomMask.x;
        this.topBound = this.leftTopMask.y;
        this.bottomBound = this.rightBottomMask.y;
        this.initPosition = this.node.position;
        LevelMgr_1.default.Instance.showIntroduce && this.startIntroduce();
      };
      CameraController.prototype.lateUpdate = function() {
        this.updateZoom();
        this.followShark();
        this.updateBoundaries();
      };
      CameraController.prototype.updateZoom = function() {
        if (InputMgr_1.default.Instance.isKeyPressed(InputMgr_1.GAME_KEY.ZOOM_IN) || InputMgr_1.default.Instance.isKeyHeld(InputMgr_1.GAME_KEY.ZOOM_IN)) {
          this.mCurrentRatio -= this.ZOOM_SPEED;
          this.mCurrentRatio < this.minRatio && (this.mCurrentRatio = this.minRatio);
        }
        if (InputMgr_1.default.Instance.isKeyPressed(InputMgr_1.GAME_KEY.ZOOM_OUT) || InputMgr_1.default.Instance.isKeyHeld(InputMgr_1.GAME_KEY.ZOOM_OUT)) {
          this.mCurrentRatio += this.ZOOM_SPEED;
          this.mCurrentRatio > this.maxRatio && (this.mCurrentRatio = this.maxRatio);
        }
        this.camera.zoomRatio = this.mCurrentRatio;
      };
      CameraController.prototype.followShark = function() {
        if (!LevelMgr_1.default.Instance.isSharkMoving() && !LevelMgr_1.default.Instance.isSharkGrabbed()) return;
        var sharkNode = LevelMgr_1.default.Instance.getCurrentShark().node;
        var targetPos = this.node.parent.convertToNodeSpaceAR(sharkNode.parent.convertToWorldSpaceAR(sharkNode.position));
        var disX = Math.abs(targetPos.x - this.node.position.x);
        var disY = Math.abs(targetPos.y - this.node.position.y);
        (disX >= this.followX || disY >= this.followY) && (this.needFollow = true);
        if (this.needFollow) {
          this.node.position = this.node.position.lerp(targetPos, .025);
          targetPos.sub(this.node.position).mag() <= this.minFollowDistance && (this.needFollow = false);
        }
      };
      CameraController.prototype.startIntroduce = function() {
        var _this = this;
        var width = this.visibleSize.width / 2 / this.camera.zoomRatio;
        var minX = this.node.x - width;
        var maxX = this.node.x + width;
        var leftPos = cc.v2(this.leftBound + width, 0);
        var rightPos = cc.v2(this.rightBound - width, 0);
        var speed = 800;
        var moveRightAction = cc.moveTo((rightPos.x - this.node.position.x) / speed, rightPos);
        var moveLeft = cc.moveTo((rightPos.x - leftPos.x) / speed, leftPos);
        var sharkNode = LevelMgr_1.default.Instance.getCurrentShark().node;
        var sharkPos = this.node.parent.convertToNodeSpaceAR(sharkNode.parent.convertToWorldSpaceAR(sharkNode.position));
        this.node.position = sharkPos;
        var move2InitPos = cc.moveTo((this.initPosition.x - leftPos.x) / speed, this.initPosition);
        this.node.runAction(cc.sequence(cc.delayTime(1), moveRightAction, moveLeft, move2InitPos, cc.callFunc(function() {
          _this.isIntroduction = false;
          LevelMgr_1.default.Instance.setState(LevelMgr_1.LevelState.ShowInfo);
        })));
      };
      CameraController.prototype.updateBoundaries = function() {
        var width = this.visibleSize.width / 2 / this.camera.zoomRatio;
        var height = this.visibleSize.height / 2 / this.camera.zoomRatio;
        var minX = this.node.x - width;
        var maxX = this.node.x + width;
        var minY = this.node.y - height;
        var maxY = this.node.y + height;
        minX <= this.leftBound && (this.node.x = this.leftBound + width);
        minY <= this.bottomBound && (this.node.y = this.bottomBound + height);
        maxX >= this.rightBound && (this.node.x = this.rightBound - width);
        maxY >= this.topBound && (this.node.y = this.topBound - height);
      };
      CameraController.prototype.onTouchBegan = function(event) {
        var touchID = event.touch.getID();
        this.touches[touchID] = event.getLocation();
      };
      CameraController.prototype.onTouchEnd = function(event) {
        delete this.touches[event.touch.getID()];
      };
      CameraController.prototype.onTouchCancle = function(event) {
        delete this.touches[event.touch.getID()];
      };
      CameraController.prototype.onTouchMove = function(event) {
        if (LevelMgr_1.default.Instance.isSharkGrabbed() || this.isIntroduction) return;
        var length = Object.entries(this.touches).length;
        if (length > 1) this.pinchZoomWithMovedTouch(event); else {
          var prevPos = event.getPreviousLocation();
          var newPos = event.getLocation();
          var deltaMove = prevPos.sub(newPos);
          var targetPos = this.node.position.add(deltaMove);
          this.node.position = this.node.position.lerp(targetPos, .3);
        }
      };
      CameraController.prototype.pinchZoomWithMovedTouch = function(event) {
        var minDistSqr = 3e5;
        var nearestTouch = null;
        var newLocation = event.touch.getLocation();
        var id = event.touch.getID();
        for (var _i = 0, _a = Object.entries(this.touches); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (key != id) {
            var location = this.touches[key];
            var distSqr = location.sub(newLocation).mag();
            if (distSqr < minDistSqr) {
              minDistSqr = distSqr;
              nearestTouch = location;
            }
          }
        }
        if (nearestTouch) {
          var prevDistSqr = nearestTouch.sub(event.touch.getPreviousLocation()).mag();
          var pinchDiff = Math.sqrt(minDistSqr) - Math.sqrt(prevDistSqr);
          this.mCurrentRatio += pinchDiff * this.kPinchZoomCoeff;
          this.mCurrentRatio < this.minRatio && (this.mCurrentRatio = this.minRatio);
          this.mCurrentRatio > this.maxRatio && (this.mCurrentRatio = this.maxRatio);
        }
      };
      var CameraController_1;
      CameraController.Instance = null;
      __decorate([ property(cc.Node) ], CameraController.prototype, "leftTopMask", void 0);
      __decorate([ property(cc.Node) ], CameraController.prototype, "rightBottomMask", void 0);
      __decorate([ property ], CameraController.prototype, "minRatio", void 0);
      __decorate([ property ], CameraController.prototype, "maxRatio", void 0);
      CameraController = CameraController_1 = __decorate([ ccclass ], CameraController);
      return CameraController;
    }(cc.Component);
    exports.default = CameraController;
    cc._RF.pop();
  }, {
    "./InputMgr": "InputMgr",
    "./LevelMgr": "LevelMgr"
  } ],
  Chain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "877eaIlmU1AqIXPM7PlRf+X", "Chain");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Chain = function(_super) {
      __extends(Chain, _super);
      function Chain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._canCut = false;
        _this._parent = null;
        return _this;
      }
      Chain.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.chain;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      Chain.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (!this._canCut) return;
        if (otherCollider.tag == Entity_1.EntityTag.shark) {
          contact.disabled = true;
          this._parent.cutTheRope(this.node);
        }
      };
      Chain.prototype.enableCut = function(parent) {
        this._canCut = true;
        this._parent = parent;
      };
      Chain = __decorate([ ccclass ], Chain);
      return Chain;
    }(Entity_1.default);
    exports.default = Chain;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  DropLet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fe24sBH3RMk6lzRMc/1GbS", "DropLet");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DropLet = function(_super) {
      __extends(DropLet, _super);
      function DropLet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Gravity = .2;
        return _this;
      }
      DropLet.prototype.start = function() {
        this.Position = this.node.position;
      };
      DropLet.prototype.update = function(dt) {
        this.Velocity.y += this.Gravity;
        this.Position = this.Position.sub(this.Velocity);
        this.node.position = this.Position;
        var angle = cc.misc.radiansToDegrees(Math.atan2(-this.Velocity.y, this.Velocity.x)) + 90;
        this.node.rotation = angle;
        this.node.position.y < 110 && this.node.removeFromParent();
      };
      DropLet.prototype.GetAngle = function(vector) {
        return Math.atan2(vector.y, vector.x);
      };
      DropLet = __decorate([ ccclass ], DropLet);
      return DropLet;
    }(cc.Component);
    exports.default = DropLet;
    cc._RF.pop();
  }, {} ],
  Duck: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb53aXO361M5KIN9YslLKH0", "Duck");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var LevelMgr_1 = require("../LevelMgr");
    var sound_manager_1 = require("../sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DuckState;
    (function(DuckState) {
      DuckState[DuckState["DeepInWater"] = 0] = "DeepInWater";
      DuckState[DuckState["InTheAir"] = 1] = "InTheAir";
      DuckState[DuckState["Falling"] = 2] = "Falling";
      DuckState[DuckState["EnterWater"] = 3] = "EnterWater";
      DuckState[DuckState["Swimming"] = 4] = "Swimming";
    })(DuckState = exports.DuckState || (exports.DuckState = {}));
    var Duck = function(_super) {
      __extends(Duck, _super);
      function Duck() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bubble = null;
        _this.display = null;
        _this.state = DuckState.InTheAir;
        _this._isRemoving = false;
        _this.movingSpeed = 300;
        _this._actionEnterWater = null;
        return _this;
      }
      Duck.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.duck;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      Duck.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark) {
          sound_manager_1.default.instance.playEffect("sfx_duck_eaten_1");
          contact.disabled = true;
          this.node.removeFromParent();
          LevelMgr_1.default.Instance.onSharkEat(this._mTag);
        } else if (otherCollider.tag == Entity_1.EntityTag.sponge) if (this.state == DuckState.Swimming) {
          contact.disabled = true;
          this.rgbody.linearVelocity = cc.Vec2.ZERO;
          this.rgbody.awake = true;
          this.movingSpeed *= -1;
          this.movingSpeed > 0 ? this.display.scaleX = -1 : this.display.scaleX = 1;
        } else {
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          if (null != this.bubble) {
            this.state = DuckState.Falling;
            this.bubble.removeFromParent();
          }
        } else if (otherCollider.tag == Entity_1.EntityTag.duck) {
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          contact.disabled = true;
        } else if (otherCollider.tag == Entity_1.EntityTag.salt) {
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          this.rgbody.gravityScale = 10;
          contact.disabledOnce = true;
          null != this.bubble && this.bubble.removeFromParent();
          this.state = DuckState.Falling;
        } else if (otherCollider.tag == Entity_1.EntityTag.greenBlock) if (this.state == DuckState.Swimming) {
          contact.disabled = true;
          this.rgbody.linearVelocity = cc.Vec2.ZERO;
          this.movingSpeed *= -1;
          this.movingSpeed > 0 ? this.display.scaleX = -1 : this.display.scaleX = 1;
        } else {
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          this.rgbody.gravityScale = 10;
          contact.disabledOnce = true;
          contact.setFriction(10);
          contact.setRestitution(0);
          null != this.bubble && this.bubble.removeFromParent();
          this.state = DuckState.Falling;
        }
      };
      Duck.prototype.onLeaveWater = function() {
        this.state = DuckState.InTheAir;
        if (null != this._actionEnterWater) {
          this.node.stopAction(this._actionEnterWater);
          this._actionEnterWater = null;
        }
      };
      Duck.prototype.onEnterWater = function() {
        var _this = this;
        if (this.state != DuckState.EnterWater && this.state != DuckState.Swimming) {
          this.state = DuckState.EnterWater;
          null != this.bubble && this.bubble.removeFromParent();
          this._actionEnterWater = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
            _this.rgbody.fixedRotation = true;
            _this.state = DuckState.Swimming;
            _this.rgbody.linearVelocity = cc.Vec2.ZERO;
          }));
          this.node.runAction(this._actionEnterWater);
        }
      };
      Duck.prototype.applyDamge = function(mine) {
        var _this = this;
        if (this._isRemoving) return;
        this._isRemoving = true;
        this.scheduleOnce(function() {
          LevelMgr_1.default.Instance.onSharkEat(_this._mTag);
          _this.node.removeFromParent();
        });
      };
      Duck.prototype.lateUpdate = function() {
        this.state == DuckState.Swimming && this.swimmingUpdate();
      };
      Duck.prototype.swimmingUpdate = function() {
        this.rgbody.linearVelocity = cc.v2(this.movingSpeed, 0);
      };
      __decorate([ property(cc.Node) ], Duck.prototype, "bubble", void 0);
      __decorate([ property(cc.Node) ], Duck.prototype, "display", void 0);
      __decorate([ property({
        type: cc.Enum(DuckState)
      }) ], Duck.prototype, "state", void 0);
      Duck = __decorate([ ccclass ], Duck);
      return Duck;
    }(Entity_1.default);
    exports.default = Duck;
    cc._RF.pop();
  }, {
    "../LevelMgr": "LevelMgr",
    "../sound-manager": "sound-manager",
    "./Entity": "Entity"
  } ],
  DynSponge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19997OFJUBJar6dAU/stm87", "DynSponge");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DynSponge = function(_super) {
      __extends(DynSponge, _super);
      function DynSponge() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DynSponge.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.dynSponge;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      DynSponge.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.sponge || otherCollider.tag == Entity_1.EntityTag.duck) {
          contact.disabledOnce = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        }
      };
      DynSponge = __decorate([ ccclass ], DynSponge);
      return DynSponge;
    }(Entity_1.default);
    exports.default = DynSponge;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  Entity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e6feMbEdRJXqAvb7uX9gIg", "Entity");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LocalZOrder;
    (function(LocalZOrder) {
      LocalZOrder[LocalZOrder["speedFloaterBack"] = 0] = "speedFloaterBack";
      LocalZOrder[LocalZOrder["shark"] = 1] = "shark";
      LocalZOrder[LocalZOrder["speedFloaterFront"] = 2] = "speedFloaterFront";
      LocalZOrder[LocalZOrder["duck"] = 3] = "duck";
      LocalZOrder[LocalZOrder["coin"] = 4] = "coin";
      LocalZOrder[LocalZOrder["piper"] = 5] = "piper";
      LocalZOrder[LocalZOrder["inflatable"] = 6] = "inflatable";
      LocalZOrder[LocalZOrder["sponge"] = 7] = "sponge";
      LocalZOrder[LocalZOrder["greenBlock"] = 8] = "greenBlock";
      LocalZOrder[LocalZOrder["mine"] = 9] = "mine";
      LocalZOrder[LocalZOrder["salt"] = 10] = "salt";
      LocalZOrder[LocalZOrder["ball"] = 11] = "ball";
      LocalZOrder[LocalZOrder["chain"] = 12] = "chain";
      LocalZOrder[LocalZOrder["water"] = 13] = "water";
      LocalZOrder[LocalZOrder["bathClip"] = 14] = "bathClip";
    })(LocalZOrder = exports.LocalZOrder || (exports.LocalZOrder = {}));
    var EntityTag;
    (function(EntityTag) {
      EntityTag[EntityTag["shark"] = 1] = "shark";
      EntityTag[EntityTag["warter"] = 2] = "warter";
      EntityTag[EntityTag["duck"] = 3] = "duck";
      EntityTag[EntityTag["pipe_outside"] = 4] = "pipe_outside";
      EntityTag[EntityTag["pipe_wall_1"] = 5] = "pipe_wall_1";
      EntityTag[EntityTag["pipe_wall_2"] = 6] = "pipe_wall_2";
      EntityTag[EntityTag["inflatable"] = 7] = "inflatable";
      EntityTag[EntityTag["sponge"] = 8] = "sponge";
      EntityTag[EntityTag["monkey"] = 9] = "monkey";
      EntityTag[EntityTag["dynSponge"] = 10] = "dynSponge";
      EntityTag[EntityTag["speedFloater"] = 11] = "speedFloater";
      EntityTag[EntityTag["speedFloaterBound"] = 12] = "speedFloaterBound";
      EntityTag[EntityTag["speedFloater4ChangeZindex"] = 13] = "speedFloater4ChangeZindex";
      EntityTag[EntityTag["goldenCoin"] = 14] = "goldenCoin";
      EntityTag[EntityTag["greenBlock"] = 15] = "greenBlock";
      EntityTag[EntityTag["mine"] = 16] = "mine";
      EntityTag[EntityTag["mine_radius"] = 17] = "mine_radius";
      EntityTag[EntityTag["salt"] = 18] = "salt";
      EntityTag[EntityTag["ball"] = 19] = "ball";
      EntityTag[EntityTag["chain"] = 20] = "chain";
      EntityTag[EntityTag["unknown"] = 21] = "unknown";
    })(EntityTag = exports.EntityTag || (exports.EntityTag = {}));
    var Entity = function(_super) {
      __extends(Entity, _super);
      function Entity() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rgbody = null;
        _this.previewBody = null;
        _this.isInPipe = false;
        _this._mTag = EntityTag.unknown;
        _this.reduceWaterPhysicForce = 1;
        _this._currentRigidBodyType = cc.RigidBodyType.Dynamic;
        return _this;
      }
      Entity.prototype.start = function() {
        this.rgbody = this.getComponent(cc.RigidBody);
        this._currentRigidBodyType = this.rgbody.type;
        this.init();
      };
      Entity.prototype.OnPipeInTrigger = function() {
        this.isInPipe = true;
      };
      Entity.prototype.OnPipeOutTrigger = function() {
        this.isInPipe = false;
      };
      Entity.prototype.createPreviewBody = function(world) {
        var current_b2Body = this.rgbody._b2Body;
        var bodyDef = new b2.BodyDef();
        bodyDef.position = current_b2Body.GetTransform().GetPosition();
        bodyDef.type = b2.BodyType.b2_dynamicBody;
        this.previewBody = world.CreateBody(bodyDef);
        var shape = current_b2Body.GetFixtureList().GetShape();
        var fixtureDef = new b2.FixtureDef();
        fixtureDef.isSensor = false;
        fixtureDef.shape = shape;
        fixtureDef.density = current_b2Body.GetFixtureList().GetDensity();
        fixtureDef.restitution = current_b2Body.GetFixtureList().GetRestitution();
        fixtureDef.friction = current_b2Body.GetFixtureList().GetFriction();
        this.previewBody.CreateFixture(fixtureDef);
        this.previewBody.SetGravityScale(current_b2Body.m_gravityScale);
        this.previewBody.SetLinearDamping(current_b2Body.m_linearDamping);
      };
      Entity.prototype.changeRigidBodyType = function(newType) {
        var _this = this;
        if (this._currentRigidBodyType != newType) {
          this._currentRigidBodyType = newType;
          this.node.runAction(cc.callFunc(function() {
            _this.rgbody._b2Body.SetAwake(false);
            _this.rgbody.type = _this._currentRigidBodyType;
          }));
        }
      };
      Entity.prototype.applyDamge = function(mine) {};
      Entity.prototype.onEnterWater = function() {};
      Entity.prototype.onLeaveWater = function() {};
      __decorate([ property ], Entity.prototype, "reduceWaterPhysicForce", void 0);
      Entity = __decorate([ ccclass ], Entity);
      return Entity;
    }(cc.Component);
    exports.default = Entity;
    cc._RF.pop();
  }, {} ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "906502N/DRJWJ3i50n06aVq", "Global");
    cc._RF.pop();
  }, {} ],
  GoldenCoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0944hmIO5A9amHEOZKl7B4", "GoldenCoin");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var LevelMgr_1 = require("../LevelMgr");
    var sound_manager_1 = require("../sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GoldenCoin = function(_super) {
      __extends(GoldenCoin, _super);
      function GoldenCoin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.OFFSET = 50;
        _this.isGoing2Shark = false;
        _this.movingSpeed = 5;
        _this.remainingTime = .1;
        return _this;
      }
      GoldenCoin.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.goldenCoin;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.coin;
      };
      GoldenCoin.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        otherCollider.tag == Entity_1.EntityTag.shark && (this.isGoing2Shark = true);
      };
      GoldenCoin.prototype.update = function(dt) {
        this.isGoing2Shark && this.MoveToShark(dt);
      };
      GoldenCoin.prototype.MoveToShark = function(dt) {
        var sharkPos = this.node.parent.convertToNodeSpaceAR(LevelMgr_1.default.Instance.getCurrentShark().getWorkSpacePosition());
        var linealVelocityDirection = sharkPos.sub(this.node.position);
        var distance = linealVelocityDirection.mag();
        if (distance < 32 || this.remainingTime <= 0) this.onSharkEatMe(); else {
          this.remainingTime -= dt;
          var newPos = this.node.position.add(linealVelocityDirection.normalize().mul(this.movingSpeed));
          this.node.position = newPos;
          this.movingSpeed += 2 * dt;
        }
      };
      GoldenCoin.prototype.onSharkEatMe = function() {
        this.node.removeFromParent();
        LevelMgr_1.default.Instance.onSharkEat(this._mTag);
        sound_manager_1.default.instance.playEffect("sfx_coin");
      };
      GoldenCoin = __decorate([ ccclass ], GoldenCoin);
      return GoldenCoin;
    }(Entity_1.default);
    exports.default = GoldenCoin;
    cc._RF.pop();
  }, {
    "../LevelMgr": "LevelMgr",
    "../sound-manager": "sound-manager",
    "./Entity": "Entity"
  } ],
  GreenBlock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf8c9f5laxAmqZkZGL1xj5L", "GreenBlock");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GreenBlock = function(_super) {
      __extends(GreenBlock, _super);
      function GreenBlock() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.restitutionForce = 0;
        _this.frictionForce = .2;
        return _this;
      }
      GreenBlock.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.greenBlock;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.greenBlock;
      };
      GreenBlock.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark) {
          contact.setRestitution(this.restitutionForce);
          contact.setFriction(this.frictionForce);
          cc.log(this.restitutionForce, this.frictionForce);
        }
      };
      __decorate([ property ], GreenBlock.prototype, "restitutionForce", void 0);
      __decorate([ property ], GreenBlock.prototype, "frictionForce", void 0);
      GreenBlock = __decorate([ ccclass ], GreenBlock);
      return GreenBlock;
    }(Entity_1.default);
    exports.default = GreenBlock;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  Inflatable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfa43b3n8VN5YkVp14ISnUS", "Inflatable");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Inflatable = function(_super) {
      __extends(Inflatable, _super);
      function Inflatable() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Inflatable.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.inflatable;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.inflatable;
      };
      Inflatable.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        var _this = this;
        if (otherCollider.tag == Entity_1.EntityTag.shark) {
          contact.disabled = true;
          this.getComponent(cc.PhysicsCollider).sensor = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            _this.node.removeFromParent();
          })));
        } else if (otherCollider.tag == Entity_1.EntityTag.sponge) {
          contact.disabled = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        } else otherCollider.tag == Entity_1.EntityTag.salt && this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
      };
      Inflatable = __decorate([ ccclass ], Inflatable);
      return Inflatable;
    }(Entity_1.default);
    exports.default = Inflatable;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  InputMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2387QAQ6ZPj6uPsIjDz52I", "InputMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GAME_KEY;
    (function(GAME_KEY) {
      GAME_KEY[GAME_KEY["NONE"] = 1] = "NONE";
      GAME_KEY[GAME_KEY["UP"] = 2] = "UP";
      GAME_KEY[GAME_KEY["DOWN"] = 4] = "DOWN";
      GAME_KEY[GAME_KEY["LEFT"] = 8] = "LEFT";
      GAME_KEY[GAME_KEY["RIGHT"] = 16] = "RIGHT";
      GAME_KEY[GAME_KEY["FIRE"] = 32] = "FIRE";
      GAME_KEY[GAME_KEY["ZOOM_IN"] = 64] = "ZOOM_IN";
      GAME_KEY[GAME_KEY["ZOOM_OUT"] = 128] = "ZOOM_OUT";
    })(GAME_KEY = exports.GAME_KEY || (exports.GAME_KEY = {}));
    var InputMgr = function(_super) {
      __extends(InputMgr, _super);
      function InputMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pointerPos = null;
        return _this;
      }
      InputMgr_1 = InputMgr;
      Object.defineProperty(InputMgr.prototype, "pointerPosition", {
        get: function() {
          return this._pointerPos;
        },
        enumerable: true,
        configurable: true
      });
      InputMgr.prototype.start = function() {
        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      InputMgr.prototype.onLoad = function() {
        InputMgr_1.Instance = this;
      };
      InputMgr.prototype.lateUpdate = function() {
        this.updateKey();
      };
      InputMgr.prototype.onTouchBegan = function(event) {
        this._pointerPos = event.getLocation();
      };
      InputMgr.prototype.onTouchEnd = function(event) {
        this._pointerPos = null;
      };
      InputMgr.prototype.onTouchMove = function(event) {
        this._pointerPos = event.getLocation();
      };
      InputMgr.prototype.onKeyDown = function(event) {
        var keyMask = this.getKeyMask(event.keyCode);
        this._keysPress |= keyMask;
        this._keysRelease &= ~keyMask;
      };
      InputMgr.prototype.onKeyUp = function(event) {
        this._keysRelease |= this.getKeyMask(event.keyCode);
      };
      InputMgr.prototype.getKeyMask = function(keyCode) {
        cc.log(keyCode);
        switch (keyCode) {
         case cc.macro.KEY["+"]:
          return GAME_KEY.ZOOM_OUT;

         case cc.macro.KEY["-"]:
          return GAME_KEY.ZOOM_IN;

         default:
          return GAME_KEY.NONE;
        }
      };
      InputMgr.prototype.updateKey = function() {
        var keysOld = this._keysCurrent;
        this._keysCurrent &= ~this._keysRelease;
        this._keysCurrent |= this._keysPress;
        this._keysRelease &= this._keysPress;
        this._keysPress = 0;
        this._keysPressed = this._keysCurrent & ~keysOld;
        this._keysReleased = keysOld & ~this._keysCurrent;
      };
      InputMgr.prototype.isKeyPressed = function(key) {
        return 0 != (this._keysPressed & key);
      };
      InputMgr.prototype.isKeyReleased = function(key) {
        return 0 != (this._keysReleased & key);
      };
      InputMgr.prototype.isKeyHeld = function(key) {
        return 0 != (this._keysCurrent & key);
      };
      InputMgr.prototype.onDestroy = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      var InputMgr_1;
      InputMgr.Instance = null;
      InputMgr = InputMgr_1 = __decorate([ ccclass ], InputMgr);
      return InputMgr;
    }(cc.Component);
    exports.default = InputMgr;
    cc._RF.pop();
  }, {} ],
  LevelMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b00ee80q8ZAVIHuhgDm3h9O", "LevelMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SharkController_1 = require("./SharkController");
    var Entity_1 = require("./Entities/Entity");
    var sound_manager_1 = require("./sound-manager");
    var PopUpDlg_1 = require("./PopUpDlg");
    var TransportMessage_1 = require("./TransportMessage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelState;
    (function(LevelState) {
      LevelState[LevelState["Init"] = 0] = "Init";
      LevelState[LevelState["ShowInfo"] = 1] = "ShowInfo";
      LevelState[LevelState["Play"] = 2] = "Play";
      LevelState[LevelState["Pause"] = 3] = "Pause";
      LevelState[LevelState["End"] = 4] = "End";
    })(LevelState = exports.LevelState || (exports.LevelState = {}));
    var LevelMgr = function(_super) {
      __extends(LevelMgr, _super);
      function LevelMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._score = 0;
        _this._coin = 0;
        _this._levelState = LevelState.Init;
        _this.MaxStep = 3;
        _this.NumDucks = 3;
        _this.lableScore = null;
        _this.lableNewLevel = null;
        _this.lableEndLevel = null;
        _this.currentLevel = 0;
        _this.showIntroduce = false;
        _this.Step = 0;
        _this._currentTotalDuck = 0;
        _this._previewWorld = null;
        _this.myShark = null;
        return _this;
      }
      LevelMgr_1 = LevelMgr;
      Object.defineProperty(LevelMgr.prototype, "Score", {
        get: function() {
          return this._score;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LevelMgr.prototype, "previewWorld", {
        get: function() {
          return this._previewWorld;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LevelMgr.prototype, "State", {
        get: function() {
          return this._levelState;
        },
        enumerable: true,
        configurable: true
      });
      LevelMgr.prototype.setState = function(newSate) {
        if (this._levelState == newSate) return;
        this._levelState = newSate;
        this._levelState == LevelState.ShowInfo && this.onShowLevelInfo();
      };
      LevelMgr.prototype.getCurrentShark = function() {
        return this.myShark;
      };
      LevelMgr.prototype.onChangedShark = function(shark) {
        this.myShark = shark;
      };
      LevelMgr.prototype.isSharkMoving = function() {
        return this.myShark.state == SharkController_1.SharkState.k_moving;
      };
      LevelMgr.prototype.isSharkGrabbed = function() {
        return this.myShark.state == SharkController_1.SharkState.k_grabbed;
      };
      LevelMgr.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        LevelMgr_1.Instance = this;
        this.createPreviewWorld();
        this._currentTotalDuck = 0;
        this.lableEndLevel.string = "Level " + (this.currentLevel + 1) + " Clear";
        this.lableNewLevel.string = "Level " + (this.currentLevel + 1);
        this.lableEndLevel.node.active = false;
        this.lableNewLevel.node.active = false;
        this._levelState = LevelState.Init;
      };
      LevelMgr.prototype.start = function() {
        cc.director.getPhysicsManager().enabledAccumulator = false;
        cc.PhysicsManager.VELOCITY_ITERATIONS = LevelMgr_1.FIX_VELOCITY_ITERATIONS;
        cc.PhysicsManager.POSITION_ITERATIONS = LevelMgr_1.FIX_POSITION_ITERATIONS;
        cc.PhysicsManager.FIXED_TIME_STEP = LevelMgr_1.FIX_TIME_PHYSIC;
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager = cc.director.getPhysicsManager();
        var physicSpeed = .55;
        physicsManager.update = function() {
          var world = physicsManager._world;
          if (!world || !physicsManager.enabled) return;
          physicsManager.emit("before-step");
          physicsManager._steping = true;
          var timeStep = physicSpeed / cc.game.config["frameRate"];
          world.Step(timeStep, 10, 10);
          world.DrawDebugData();
          physicsManager._steping = false;
          var events = physicsManager._delayEvents;
          for (var i = 0; i < events.length; i++) {
            var event = events[i];
            event && event.target[event.func].apply(event.target, event.args);
          }
          events.length = 0;
          physicsManager._syncNode();
        };
        this.showIntroduce || this.onShowLevelInfo();
        sound_manager_1.default.instance.playMusic("m_level", true);
      };
      LevelMgr.prototype.onSharkEat = function(entityType) {
        this._score += 10;
        this.lableScore.string = this._score.toString();
        entityType == Entity_1.EntityTag.duck ? this._currentTotalDuck++ : entityType == Entity_1.EntityTag.goldenCoin && this._coin++;
        this._currentTotalDuck >= this.NumDucks && this.onEndLevel();
      };
      LevelMgr.prototype.onShowLevelInfo = function() {
        var _this = this;
        this.lableNewLevel.node.position = cc.v2(0, 480);
        this.lableNewLevel.node.active = true;
        this.lableNewLevel.node.runAction(cc.sequence(cc.moveTo(.5, cc.v2(0, 0)), cc.delayTime(.7), cc.moveTo(.5, cc.v2(-1e3, 0)), cc.callFunc(function() {
          _this.lableNewLevel.node.active = false;
          _this.setState(LevelState.Play);
        })));
      };
      LevelMgr.prototype.onEndLevel = function() {
        var _this = this;
        if (this._levelState == LevelState.End) return;
        this._levelState = LevelState.End;
        var strCoin = TransportMessage_1.default.instance.get("gameplay", "totalcoin", false);
        var totalCoin = null == strCoin ? 0 : Number.parseInt(strCoin);
        totalCoin += this._coin;
        TransportMessage_1.default.instance.send("gameplay", "totalcoin", totalCoin.toString());
        this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
          PopUpDlg_1.default.Inst.showWinDlg();
        }), cc.delayTime(2), cc.callFunc(function() {
          cc.director.loadScene("lvl_" + (_this.currentLevel + 2));
        })));
      };
      LevelMgr.prototype.onPauseClick = function() {
        PopUpDlg_1.default.Inst.showIgmDlg();
      };
      LevelMgr.prototype.onResetClick = function() {
        cc.director.loadScene("lvl_" + (this.currentLevel + 1));
      };
      LevelMgr.prototype.createPreviewWorld = function() {
        var gravity = new b2.Vec2(0, -10);
        var doSleep = true;
        this._previewWorld = new b2.World(gravity, doSleep);
      };
      var LevelMgr_1;
      LevelMgr.FIX_TIME_PHYSIC = .009;
      LevelMgr.FIX_POSITION_ITERATIONS = 2;
      LevelMgr.FIX_VELOCITY_ITERATIONS = 6;
      LevelMgr.Instance = null;
      __decorate([ property ], LevelMgr.prototype, "MaxStep", void 0);
      __decorate([ property ], LevelMgr.prototype, "NumDucks", void 0);
      __decorate([ property(cc.Label) ], LevelMgr.prototype, "lableScore", void 0);
      __decorate([ property(cc.Label) ], LevelMgr.prototype, "lableNewLevel", void 0);
      __decorate([ property(cc.Label) ], LevelMgr.prototype, "lableEndLevel", void 0);
      __decorate([ property ], LevelMgr.prototype, "currentLevel", void 0);
      __decorate([ property ], LevelMgr.prototype, "showIntroduce", void 0);
      LevelMgr = LevelMgr_1 = __decorate([ ccclass ], LevelMgr);
      return LevelMgr;
    }(cc.Component);
    exports.default = LevelMgr;
    cc._RF.pop();
  }, {
    "./Entities/Entity": "Entity",
    "./PopUpDlg": "PopUpDlg",
    "./SharkController": "SharkController",
    "./TransportMessage": "TransportMessage",
    "./sound-manager": "sound-manager"
  } ],
  LoadingManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f13cRfz5RB/IHwbU6SljaM", "LoadingManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("./event-manager");
    var sound_manager_1 = require("./sound-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingMgr = function(_super) {
      __extends(LoadingMgr, _super);
      function LoadingMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblLoading = null;
        _this.isLoadingCompleted = false;
        _this._step = 0;
        return _this;
      }
      LoadingMgr.prototype.onLoad = function() {
        var _this = this;
        event_manager_1.default.instance;
        sound_manager_1.default.instance;
        event_manager_1.default.instance.registerOnce("Sound_initialized", function() {
          _this.isLoadingCompleted = true;
          cc.director.loadScene("lvl_1");
        }, this);
      };
      LoadingMgr.prototype.start = function() {
        sound_manager_1.default.instance.init();
      };
      LoadingMgr.prototype.update = function(dt) {
        var tmp = this._step % 3;
        this.lblLoading.string = 0 == tmp ? "Loading ." : 1 == tmp ? "Loading .." : "Loading ...";
        this._step++;
      };
      __decorate([ property(cc.Label) ], LoadingMgr.prototype, "lblLoading", void 0);
      LoadingMgr = __decorate([ ccclass ], LoadingMgr);
      return LoadingMgr;
    }(cc.Component);
    exports.default = LoadingMgr;
    cc._RF.pop();
  }, {
    "./event-manager": "event-manager",
    "./sound-manager": "sound-manager"
  } ],
  Mine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "386bc1xeAxMSawmEccmJUPB", "Mine");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Mine = function(_super) {
      __extends(Mine, _super);
      function Mine() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.entitysCloseMe = [];
        _this._animation = null;
        _this.MAX_BOMB_RANGE = 100;
        _this.isExlosing = false;
        return _this;
      }
      Mine.prototype.init = function() {
        var _this = this;
        this._mTag = Entity_1.EntityTag.mine;
        var cols = this.getComponents(cc.PhysicsCircleCollider);
        if (cols[0].radius < cols[1].radius) {
          cols[0].tag = Entity_1.EntityTag.mine;
          cols[1].tag = Entity_1.EntityTag.mine_radius;
        } else {
          cols[1].tag = Entity_1.EntityTag.mine;
          cols[0].tag = Entity_1.EntityTag.mine_radius;
        }
        this.node.zIndex = Entity_1.LocalZOrder.mine;
        this._animation = this.getComponent(cc.Animation);
        this._animation.once("finished", function() {
          _this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
            _this.node.removeFromParent();
          })));
        });
      };
      Mine.prototype.onExplode = function() {
        if (!this.isExlosing) {
          this.isExlosing = true;
          this.rgbody.awake = true;
          this.rgbody.linearVelocity = cc.Vec2.ZERO;
          this.rgbody.gravityScale = 0;
          this._animation.play("exp");
          var length = this.entitysCloseMe.length;
          for (var i = 0; i < length; i++) {
            var e = this.entitysCloseMe[i];
            var distance = this.node.position.sub(e.position).mag();
            distance < this.MAX_BOMB_RANGE && e.getComponent(Entity_1.default).applyDamge(this);
          }
        }
      };
      Mine.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (selfCollider.tag == Entity_1.EntityTag.mine_radius && (otherCollider.tag == Entity_1.EntityTag.mine_radius || otherCollider.tag == Entity_1.EntityTag.salt || otherCollider.tag == Entity_1.EntityTag.duck)) {
          contact.disabled = true;
          var index = this.entitysCloseMe.indexOf(otherCollider.node);
          index < 0 && this.entitysCloseMe.push(otherCollider.node);
        }
        if (selfCollider.tag == Entity_1.EntityTag.mine) if (otherCollider.tag == Entity_1.EntityTag.mine || otherCollider.tag == Entity_1.EntityTag.ball || otherCollider.tag == Entity_1.EntityTag.shark) this.onExplode(); else if (otherCollider.tag == Entity_1.EntityTag.sponge) this.changeRigidBodyType(cc.RigidBodyType.Dynamic); else if (otherCollider.tag == Entity_1.EntityTag.salt) this.onExplode(); else if (otherCollider.tag == Entity_1.EntityTag.greenBlock || otherCollider.tag == Entity_1.EntityTag.monkey) {
          contact.disabled = true;
          this.onExplode();
        }
      };
      Mine.prototype.applyDamge = function(mine) {
        this.isExlosing || this.onExplode();
      };
      Mine.prototype.onEndContact = function(contact, selfCollider, otherCollider) {
        if (selfCollider.tag == Entity_1.EntityTag.mine_radius && (otherCollider.tag == Entity_1.EntityTag.mine_radius || otherCollider.tag == Entity_1.EntityTag.salt || otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.mine_radius)) {
          var index = this.entitysCloseMe.indexOf(otherCollider.node);
          index >= 0 && this.entitysCloseMe.splice(index, 1);
        }
      };
      Mine.prototype.update = function(dt) {
        this.isExlosing && (this.rgbody.linearVelocity = cc.Vec2.ZERO);
      };
      Mine = __decorate([ ccclass ], Mine);
      return Mine;
    }(Entity_1.default);
    exports.default = Mine;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  Monkey: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73e61CquvlD8rdhTclJiomr", "Monkey");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Monkey = function(_super) {
      __extends(Monkey, _super);
      function Monkey() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Monkey.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.monkey;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.sponge;
      };
      Monkey.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        otherCollider.tag == Entity_1.EntityTag.shark && this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
      };
      Monkey = __decorate([ ccclass ], Monkey);
      return Monkey;
    }(Entity_1.default);
    exports.default = Monkey;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  ParallaxLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "017aeJZqsdGK7HGH3CnPFCo", "ParallaxLayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ParallaxLayer = function(_super) {
      __extends(ParallaxLayer, _super);
      function ParallaxLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_camera = null;
        _this.parallaxRatio = cc.Vec2.ZERO;
        _this.first_camPos = null;
        _this.current_camPos = cc.Vec2.ZERO;
        return _this;
      }
      ParallaxLayer.prototype.start = function() {
        this.first_camPos = this.m_camera.node.getPosition();
      };
      ParallaxLayer.prototype.lateUpdate = function() {
        this.current_camPos = this.m_camera.node.getPosition();
        var dx = (this.current_camPos.x - this.first_camPos.x) * this.m_camera.zoomRatio;
        var dy = (this.current_camPos.y - this.first_camPos.y) * this.m_camera.zoomRatio;
        var pos = this.node.getPosition();
        this.node.position = new cc.Vec2(-pos.x + pos.x * this.parallaxRatio.x + dx, -pos.y + pos.y * this.parallaxRatio.y + dy);
      };
      __decorate([ property(cc.Camera) ], ParallaxLayer.prototype, "m_camera", void 0);
      __decorate([ property(cc.Vec2) ], ParallaxLayer.prototype, "parallaxRatio", void 0);
      ParallaxLayer = __decorate([ ccclass ], ParallaxLayer);
      return ParallaxLayer;
    }(cc.Component);
    exports.default = ParallaxLayer;
    cc._RF.pop();
  }, {} ],
  PipeWall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46c16ZVDSNAf6LA+EOpiCZC", "PipeWall");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var Pipe_1 = require("./Pipe");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PipeWall = function(_super) {
      __extends(PipeWall, _super);
      function PipeWall() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isInvert = false;
        return _this;
      }
      PipeWall.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.pipe_wall_1;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      PipeWall.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.duck || otherCollider.tag == Entity_1.EntityTag.mine) {
          var entity = otherCollider.getComponent(Entity_1.default);
          if (entity.isInPipe) {
            var v = otherCollider.body.linearVelocity;
            0 == v.x && 0 == v.y || entity.OnPipeOutTrigger();
          } else {
            var v = otherCollider.body.linearVelocity;
            0 == v.x && 0 == v.y || this.node.parent.getComponent(Pipe_1.default).OnInPipe(selfCollider, otherCollider, this.isInvert);
          }
        }
      };
      __decorate([ property ], PipeWall.prototype, "isInvert", void 0);
      PipeWall = __decorate([ ccclass ], PipeWall);
      return PipeWall;
    }(Entity_1.default);
    exports.default = PipeWall;
    cc._RF.pop();
  }, {
    "./Entity": "Entity",
    "./Pipe": "Pipe"
  } ],
  Pipe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b7ed1t91pBxqg3WFDgjxHz", "Pipe");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Pipe = function(_super) {
      __extends(Pipe, _super);
      function Pipe() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pipeNodes = [];
        _this.entitiesInPipe = [];
        _this.nodeDirs = [];
        _this.MAX_SPEED = 1e3;
        _this.ForceOutScale = 7500;
        _this.FORCE_OUT_PIPE_SCALE_DUCK = 3900;
        return _this;
      }
      Pipe.prototype.onLoad = function() {
        for (var i = 0; i < this.pipeNodes.length; i++) this.nodeDirs.push(this.node.convertToWorldSpaceAR(this.pipeNodes[i].position));
      };
      Pipe.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.pipe_outside;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
      };
      Pipe.prototype.createMoveTo = function(A, B, Speed) {
        var distance = A.sub(B).mag();
        var dt = distance / Speed;
        var move = cc.moveTo(dt, B);
        return move;
      };
      Pipe.prototype.OnInPipe = function(selfCollider, otherCollider, isInvert) {
        var entity = otherCollider.node.getComponent(Entity_1.default);
        entity.OnPipeInTrigger();
        entity.rgbody.linearVelocity = cc.Vec2.ZERO;
        var actionArray = [];
        actionArray.push(cc.callFunc(function() {
          if (entity.rgbody.type == cc.RigidBodyType.Dynamic) {
            entity.rgbody.type = cc.RigidBodyType.Kinematic;
            entity.rgbody.gravityScale = 0;
            entity.rgbody.linearVelocity = cc.Vec2.ZERO;
          }
        }));
        for (var i = 0; i < this.nodeDirs.length; i++) {
          var pos = entity.node.parent.convertToNodeSpaceAR(this.nodeDirs[isInvert ? this.nodeDirs.length - i - 1 : i]);
          actionArray.push(this.createMoveTo(entity.node.position, pos, this.MAX_SPEED));
        }
        actionArray.push(cc.callFunc(this.OnEndPipe.bind(this, entity, isInvert)));
        entity.node.runAction(cc.sequence(actionArray));
      };
      Pipe.prototype.OnEndPipe = function(entity, isInvert) {
        entity.rgbody.type = cc.RigidBodyType.Dynamic;
        entity.rgbody.gravityScale = 10;
        var forceDir;
        forceDir = isInvert ? this.nodeDirs[0].sub(this.nodeDirs[1]).normalize() : this.nodeDirs[this.nodeDirs.length - 1].sub(this.nodeDirs[this.nodeDirs.length - 2]).normalize();
        entity.rgbody.linearVelocity = cc.Vec2.ZERO;
        entity._mTag != Entity_1.EntityTag.duck ? entity.rgbody._b2Body.ApplyForce(forceDir.mul(this.ForceOutScale), entity.rgbody._b2Body.GetPosition()) : entity.rgbody._b2Body.ApplyForce(forceDir.mul(this.FORCE_OUT_PIPE_SCALE_DUCK), entity.rgbody._b2Body.GetPosition());
      };
      __decorate([ property([ cc.Node ]) ], Pipe.prototype, "pipeNodes", void 0);
      __decorate([ property ], Pipe.prototype, "ForceOutScale", void 0);
      Pipe = __decorate([ ccclass ], Pipe);
      return Pipe;
    }(Entity_1.default);
    exports.default = Pipe;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  PopUpDlg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ed1eW4IuJP3ZedKxFGdFmH", "PopUpDlg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LevelMgr_1 = require("./LevelMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopUpDlg = function(_super) {
      __extends(PopUpDlg, _super);
      function PopUpDlg() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.winDlg = null;
        _this.loseDlg = null;
        _this.igmDlg = null;
        _this.lblWinMessage = null;
        _this.lblWinScore = null;
        _this.lblLoseTotalLvlCleared = null;
        _this.lblLoseScore = null;
        _this.lblIgmLevelInfo = null;
        _this.lblIgmRule = null;
        return _this;
      }
      PopUpDlg_1 = PopUpDlg;
      PopUpDlg.prototype.onLoad = function() {
        this.winDlg.active = false;
        this.loseDlg.active = false;
        PopUpDlg_1.Inst = this;
      };
      PopUpDlg.prototype.start = function() {};
      PopUpDlg.prototype.showWinDlg = function() {
        this.winDlg.active = true;
        this.lblWinMessage.string = "Level " + (LevelMgr_1.default.Instance.currentLevel + 1) + " cleared";
        this.lblWinScore.string = "Score: " + LevelMgr_1.default.Instance.Score;
      };
      PopUpDlg.prototype.showIgmDlg = function() {
        this.igmDlg.active = true;
      };
      PopUpDlg.prototype.showLoseDlg = function() {
        this.loseDlg.active = true;
      };
      PopUpDlg.prototype.onIgmHomeClick = function() {};
      PopUpDlg.prototype.onIgmResumeClick = function() {
        this.igmDlg.active = false;
      };
      var PopUpDlg_1;
      PopUpDlg.Inst = null;
      __decorate([ property(cc.Node) ], PopUpDlg.prototype, "winDlg", void 0);
      __decorate([ property(cc.Node) ], PopUpDlg.prototype, "loseDlg", void 0);
      __decorate([ property(cc.Node) ], PopUpDlg.prototype, "igmDlg", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblWinMessage", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblWinScore", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblLoseTotalLvlCleared", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblLoseScore", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblIgmLevelInfo", void 0);
      __decorate([ property(cc.Label) ], PopUpDlg.prototype, "lblIgmRule", void 0);
      PopUpDlg = PopUpDlg_1 = __decorate([ ccclass ], PopUpDlg);
      return PopUpDlg;
    }(cc.Component);
    exports.default = PopUpDlg;
    cc._RF.pop();
  }, {
    "./LevelMgr": "LevelMgr"
  } ],
  Rope: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53a310KVdJP0abceCWPqNYl", "Rope");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Chain_1 = require("./Chain");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rope = function(_super) {
      __extends(Rope, _super);
      function Rope() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.beginChainPrefab = null;
        _this.endPositionMask = null;
        _this.chainPrefab = null;
        _this.entity = null;
        _this.NumChain = 0;
        _this.canCut = false;
        _this._chains = [];
        _this._isCutting = false;
        return _this;
      }
      Rope.prototype.start = function() {
        var chainSize = 10;
        var distance = this.endPositionMask.position.mag();
        this.NumChain = Math.round(distance / chainSize) - 1;
        var dir = cc.v2(this.endPositionMask.position.x / distance, this.endPositionMask.position.y / distance);
        var pieceSpace = chainSize;
        this.createRope(this.NumChain, dir, pieceSpace);
        this.entity.zIndex = 10;
      };
      Rope.prototype.createRope = function(numChain, dir, pieceSpace) {
        var preChain = cc.instantiate(this.beginChainPrefab);
        preChain.parent = this.node;
        var oldPos = preChain.position;
        for (var i = 0; i < numChain; i++) {
          var pos = oldPos.add(dir.mul(pieceSpace));
          var chain = cc.instantiate(this.chainPrefab);
          var chainComp = chain.getComponent(Chain_1.default);
          this.canCut && null != chainComp && chainComp.enableCut(this);
          var connectAnchor = cc.v2(0, 0 == i ? preChain.getContentSize().height / 2 : pieceSpace);
          preChain.getComponent(cc.RevoluteJoint).connectedAnchor = connectAnchor;
          chain.parent = this.node;
          chain.position = pos;
          preChain.getComponent(cc.RevoluteJoint).connectedBody = chain.getComponent(cc.RigidBody);
          preChain = chain;
          oldPos = oldPos.add(dir.mul(pieceSpace));
          this._chains.push(chain);
        }
        if (null != this.entity) {
          var connectAnchor = this.entity.convertToNodeSpaceAR(this.endPositionMask.parent.convertToWorldSpaceAR(this.endPositionMask.position));
          preChain.getComponent(cc.RevoluteJoint).connectedAnchor = connectAnchor;
          preChain.getComponent(cc.RevoluteJoint).connectedBody = this.entity.getComponent(cc.RigidBody);
        }
      };
      Rope.prototype.cutTheRope = function(startChain) {
        if (this._isCutting) return;
        this._isCutting = true;
        var index = this._chains.indexOf(startChain);
        if (index >= 0) for (var i = this._chains.length - 1; i >= index; i--) this._chains[i].removeFromParent();
      };
      __decorate([ property(cc.Prefab) ], Rope.prototype, "beginChainPrefab", void 0);
      __decorate([ property(cc.Node) ], Rope.prototype, "endPositionMask", void 0);
      __decorate([ property(cc.Prefab) ], Rope.prototype, "chainPrefab", void 0);
      __decorate([ property(cc.Node) ], Rope.prototype, "entity", void 0);
      __decorate([ property ], Rope.prototype, "canCut", void 0);
      Rope = __decorate([ ccclass ], Rope);
      return Rope;
    }(cc.Component);
    exports.default = Rope;
    cc._RF.pop();
  }, {
    "./Chain": "Chain"
  } ],
  Salt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3fa43Tb3rlJp4M93RsIzDC5", "Salt");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Salt = function(_super) {
      __extends(Salt, _super);
      function Salt() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Salt.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.salt;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.salt;
      };
      Salt.prototype.applyDamge = function(mine) {
        var mass = this.rgbody.getMass();
        var forceDir = mine.node.position.sub(this.node.position);
        this.rgbody._b2Body.ApplyForce(forceDir.mul(2700 * mass), this.rgbody._b2Body.GetPosition());
      };
      Salt.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        var _this = this;
        otherCollider.tag != Entity_1.EntityTag.mine && otherCollider.tag != Entity_1.EntityTag.mine_radius && otherCollider.tag != Entity_1.EntityTag.duck || this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        if (otherCollider.tag == Entity_1.EntityTag.warter) this.node.runAction(cc.callFunc(function() {
          _this.node.removeFromParent();
        })); else if (otherCollider.tag == Entity_1.EntityTag.shark) {
          contact.setRestitution(0);
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        }
      };
      Salt = __decorate([ ccclass ], Salt);
      return Salt;
    }(Entity_1.default);
    exports.default = Salt;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  SharkAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "019e0Z76LJHWrsZJwyDElRF", "SharkAnimation");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SharkAnim;
    (function(SharkAnim) {
      SharkAnim[SharkAnim["idle"] = 0] = "idle";
      SharkAnim[SharkAnim["strech"] = 1] = "strech";
    })(SharkAnim = exports.SharkAnim || (exports.SharkAnim = {}));
    var SharkAnimation = function(_super) {
      __extends(SharkAnimation, _super);
      function SharkAnimation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._animation = null;
        _this.MaxStrechClips = 51;
        _this.MaxDistance = 1e4;
        _this.MixDistance = 1550;
        _this._currentStrectAnimId = 0;
        return _this;
      }
      SharkAnimation.prototype.start = function() {
        this._animation = this.getComponent(cc.Animation);
      };
      SharkAnimation.prototype.playPipeAnim = function() {
        this._animation.play("rotate_in_pipe");
      };
      SharkAnimation.prototype.playIdleAnim = function() {
        this._animation.play("idle");
        this.node.setAnchorPoint(.5, .5);
      };
      SharkAnimation.prototype.playStrechAnim = function(forceLength) {
        this._currentStrectAnimId = Math.round((forceLength - this.MixDistance) * this.MaxStrechClips / this.MaxDistance);
        this._playStrectAnim(this._currentStrectAnimId);
      };
      SharkAnimation.prototype._playStrectAnim = function(id) {
        if (id < 1) return;
        id > this.MaxStrechClips && (id = this.MaxStrechClips);
        var animName = "strech_001";
        animName = id < 10 ? "strech_00" + id : "strech_0" + id;
        this._animation.play(animName);
        this.node.setAnchorPoint(.9, .5);
      };
      SharkAnimation = __decorate([ ccclass ], SharkAnimation);
      return SharkAnimation;
    }(cc.Component);
    exports.default = SharkAnimation;
    cc._RF.pop();
  }, {} ],
  SharkController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a14b0nes9OeJJ3Nis9k6J6", "SharkController");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CameraController_1 = require("./CameraController");
    var Entity_1 = require("./Entities/Entity");
    var LevelMgr_1 = require("./LevelMgr");
    var SharkAnimation_1 = require("./SharkAnimation");
    var PopUpDlg_1 = require("./PopUpDlg");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SharkState;
    (function(SharkState) {
      SharkState[SharkState["k_inactive"] = 0] = "k_inactive";
      SharkState[SharkState["k_standing"] = 1] = "k_standing";
      SharkState[SharkState["k_idle"] = 2] = "k_idle";
      SharkState[SharkState["k_moving"] = 3] = "k_moving";
      SharkState[SharkState["k_grabbed"] = 4] = "k_grabbed";
      SharkState[SharkState["k_released"] = 5] = "k_released";
      SharkState[SharkState["k_exploded"] = 6] = "k_exploded";
      SharkState[SharkState["k_outWater"] = 7] = "k_outWater";
      SharkState[SharkState["k_stuck"] = 8] = "k_stuck";
      SharkState[SharkState["k_dead"] = 9] = "k_dead";
      SharkState[SharkState["k_none"] = 10] = "k_none";
    })(SharkState = exports.SharkState || (exports.SharkState = {}));
    var SharkController = function(_super) {
      __extends(SharkController, _super);
      function SharkController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.previewPoint = null;
        _this.display = null;
        _this.touchInput = null;
        _this.isActive = true;
        _this.id = 0;
        _this.RADIUS = 60;
        _this.MIN_DISTANCE_FORCE = 20;
        _this.MAX_DISTANCE_FORCE = 320;
        _this.m_state = SharkState.k_inactive;
        _this.needUpdatePreviewPoint = false;
        _this.previewPointArray = [];
        _this.previewPointSprite = [];
        _this.prev_velocity = cc.Vec2.ZERO;
        _this.k_sharkForceFactor = 1.8;
        return _this;
      }
      Object.defineProperty(SharkController.prototype, "state", {
        get: function() {
          return this.m_state;
        },
        enumerable: true,
        configurable: true
      });
      SharkController.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.shark;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.shark;
      };
      SharkController.prototype.OnPipeTrigger = function() {
        this.isInPipe = true;
        this.display.getComponent(SharkAnimation_1.default).playPipeAnim();
      };
      SharkController.prototype.onLoad = function() {
        this.m_state = SharkState.k_idle;
      };
      SharkController.prototype.setState = function(state, forceLength) {
        if (this.m_state == state) return;
        this.m_state = state;
        switch (this.m_state) {
         case SharkState.k_idle:
          this.display.getComponent(SharkAnimation_1.default).playIdleAnim();
          break;

         case SharkState.k_grabbed:
          LevelMgr_1.default.Instance.onChangedShark(this);
          this.display.getComponent(SharkAnimation_1.default).playStrechAnim(forceLength);
          break;

         case SharkState.k_moving:
         default:
          this.display.getComponent(SharkAnimation_1.default).playIdleAnim();
        }
      };
      SharkController.prototype.start = function() {
        var _this = this;
        _super.prototype.start.call(this);
        this.isActive && LevelMgr_1.default.Instance.onChangedShark(this);
        for (var i = 0; i < 10; i++) {
          var dot = cc.instantiate(this.previewPoint);
          dot.parent = this.node.parent;
          this.previewPointSprite.push(dot);
          dot.active = false;
        }
        this.touchInput.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.touchInput.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchInput.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchInput.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        this.node.runAction(cc.callFunc(function() {
          _this.createPreviewBody(LevelMgr_1.default.Instance.previewWorld);
        }));
      };
      SharkController.prototype.ApplyAbsoluteForce = function(body, force) {
        body._b2Body.ApplyForce(new b2.Vec2(force.x, force.y), body._b2Body.GetTransform().GetPosition());
      };
      SharkController.prototype.hidePreviewPath = function() {
        this.previewPointArray.length = 0;
        for (var i = 0; i < this.previewPointSprite.length; i++) this.previewPointSprite[i].active = false;
      };
      SharkController.prototype.onTouchCancle = function(event) {
        this.hidePreviewPath();
      };
      SharkController.prototype.onTouchBegan = function(event) {
        if (LevelMgr_1.default.Instance.State != LevelMgr_1.LevelState.Play) return;
        var touchPos = this.node.convertToNodeSpaceAR(CameraController_1.default.Instance.camera.getCameraToWorldPoint(event.getLocation(), null));
        var distance = touchPos.mag();
        distance < this.RADIUS && this.setState(SharkState.k_grabbed, 0);
      };
      SharkController.prototype.onTouchEnd = function(event) {
        if (LevelMgr_1.default.Instance.State != LevelMgr_1.LevelState.Play) return;
        this.rgbody.active = true;
        if (this.m_state == SharkState.k_grabbed) {
          var endPoint = this.node.parent.convertToNodeSpaceAR(CameraController_1.default.Instance.camera.getCameraToWorldPoint(event.getLocation(), null));
          this.ApplyAbsoluteForce(this.rgbody, this.getForce(endPoint, false));
          this.setState(SharkState.k_moving, 0);
        }
        this.hidePreviewPath();
      };
      SharkController.prototype.updateDisplayAngleFollowGrabbbForce = function(force) {
        var angle = cc.misc.radiansToDegrees(force.angle(cc.v2(1, 0)));
        force.y < 0 && (angle = 360 - angle);
        angle < 90 ? this.display.setScale(1, 1) : angle < 270 ? this.display.setScale(1, -1) : this.display.setScale(1, 1);
        this.display.setRotation(360 - angle);
      };
      SharkController.prototype.updateDisplayAngleFollowVelocity = function() {
        if (this.m_state == SharkState.k_grabbed) return;
        var velocity = this.rgbody.linearVelocity;
        if (Math.abs(velocity.y) < 350) this.display.setRotation(this.display.scaleY > 0 ? 0 : 180); else {
          var angle = cc.misc.radiansToDegrees(Math.atan2(-velocity.y, velocity.x));
          this.display.setRotation(angle);
        }
      };
      SharkController.prototype.onTouchMove = function(event) {
        if (LevelMgr_1.default.Instance.State != LevelMgr_1.LevelState.Play) return;
        if (this.m_state == SharkState.k_grabbed) {
          this.rgbody.active = false;
          var prevPos = event.getPreviousLocation();
          var newPos = event.getLocation();
          var deltaMove = prevPos.sub(newPos);
          var endPoint = this.node.parent.convertToNodeSpaceAR(CameraController_1.default.Instance.camera.getCameraToWorldPoint(event.getLocation(), null));
          var tranform = this.rgbody._b2Body.GetTransform();
          this.previewBody.SetTransform(tranform);
          var force = this.getForce(endPoint, false);
          this.updateDisplayAngleFollowGrabbbForce(force);
          this.display.getComponent(SharkAnimation_1.default).playStrechAnim(force.mag());
          this.previewBody.SetAwake(false);
          this.previewBody.SetLinearVelocity(new b2.Vec2(0, 0));
          this.previewBody.ApplyForce(new b2.Vec2(force.x, force.y), tranform.GetPosition());
          this.previewPointArray.length = 0;
          for (var i = 0; i < 20; ++i) {
            var LevelMgrIns = LevelMgr_1.default.Instance;
            LevelMgrIns.previewWorld.Step(LevelMgr_1.default.FIX_TIME_PHYSIC, LevelMgr_1.default.FIX_VELOCITY_ITERATIONS, LevelMgr_1.default.FIX_POSITION_ITERATIONS);
            var b2WorldPos = this.previewBody.GetPosition();
            var displayPos = this.node.parent.convertToNodeSpaceAR(cc.v2(32 * b2WorldPos.x, 32 * b2WorldPos.y));
            this.previewPointArray.push(displayPos);
          }
        }
      };
      SharkController.prototype.getForce = function(grabbedPosition, useWaterResistance) {
        var mass = this.rgbody.getMass();
        var myPos = this.node.position;
        var diff = myPos.sub(grabbedPosition).mag();
        diff > 345 && (diff = 345);
        var accel = Math.sqrt(diff);
        var dir = myPos.sub(grabbedPosition);
        dir = dir.normalizeSelf();
        cc.log(dir, diff);
        var force = dir.mul(accel * mass * diff * this.k_sharkForceFactor);
        if (grabbedPosition.y > myPos.y) {
          var yDiff = grabbedPosition.y - myPos.y;
          force = force.mul(2.1);
        }
        return force;
      };
      SharkController.prototype.lateUpdate = function() {
        var scale = 1;
        for (var i = 0; i < this.previewPointArray.length; i += 2) {
          var index = i / 2;
          if (index < this.previewPointSprite.length) {
            this.previewPointSprite[index].active = true;
            this.previewPointSprite[index].position = this.previewPointArray[i];
            this.previewPointSprite[index].scale = scale - .02 * i;
          }
        }
        this.prev_velocity = this.rgbody.linearVelocity;
        this.updateDisplayAngleFollowVelocity();
        var velocity = this.rgbody.linearVelocity;
        this.m_state == SharkState.k_moving && velocity.mag() < 100 && this.setState(SharkState.k_idle, 0);
        if (this.node.y < -300 && SharkState.k_dead != this.m_state) {
          this.setState(SharkState.k_dead, 0);
          PopUpDlg_1.default.Inst.showLoseDlg();
        }
      };
      SharkController.prototype.getWorkSpacePosition = function() {
        return this.node.parent.convertToWorldSpaceAR(this.node.position);
      };
      __decorate([ property(cc.Prefab) ], SharkController.prototype, "previewPoint", void 0);
      __decorate([ property(cc.Node) ], SharkController.prototype, "display", void 0);
      __decorate([ property(cc.Node) ], SharkController.prototype, "touchInput", void 0);
      __decorate([ property ], SharkController.prototype, "isActive", void 0);
      __decorate([ property ], SharkController.prototype, "id", void 0);
      SharkController = __decorate([ ccclass ], SharkController);
      return SharkController;
    }(Entity_1.default);
    exports.default = SharkController;
    cc._RF.pop();
  }, {
    "./CameraController": "CameraController",
    "./Entities/Entity": "Entity",
    "./LevelMgr": "LevelMgr",
    "./PopUpDlg": "PopUpDlg",
    "./SharkAnimation": "SharkAnimation"
  } ],
  SpeedFloater: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13cb2M2S0BLvKQel12GaYXu", "SpeedFloater");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SpeedFloater = function(_super) {
      __extends(SpeedFloater, _super);
      function SpeedFloater() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.frontDisplay = null;
        _this.scaleForce = 9e3;
        _this.entityParent = null;
        return _this;
      }
      SpeedFloater.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.speedFloater;
        var cols = this.getComponents(cc.PhysicsCircleCollider);
        cols.forEach(function(c) {
          c.tag = Entity_1.EntityTag.speedFloaterBound;
        });
        var chainCol = this.getComponent(cc.PhysicsChainCollider);
        chainCol ? chainCol.tag = this._mTag : this.getComponent(cc.PhysicsBoxCollider).tag = this._mTag;
        var polCol = this.getComponent(cc.PhysicsPolygonCollider);
        polCol && (polCol.tag = Entity_1.EntityTag.speedFloater4ChangeZindex);
        this.node.zIndex = Entity_1.LocalZOrder.speedFloaterBack;
      };
      SpeedFloater.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        selfCollider.tag == Entity_1.EntityTag.speedFloaterBound && (otherCollider.tag != Entity_1.EntityTag.sponge && otherCollider.tag != Entity_1.EntityTag.shark || this.changeRigidBodyType(cc.RigidBodyType.Dynamic));
        if (selfCollider.tag == Entity_1.EntityTag.speedFloater && (otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.duck)) {
          var entity_1 = otherCollider.node.getComponent(Entity_1.default);
          var thownAngle = selfCollider.body._b2Body.GetAngle();
          var throwDir = cc.v2(Math.cos(thownAngle), Math.sin(thownAngle));
          var otherVelocity = otherCollider.body.linearVelocity;
          var module = otherVelocity.dot(throwDir);
          var force_1 = cc.Vec2.ZERO;
          if (0 != module) {
            force_1 = throwDir.mul(module);
            force_1 = force_1.normalizeSelf();
            force_1 = force_1.mul(otherCollider.body.getMass() * this.scaleForce);
          }
          this.node.runAction(cc.callFunc(function() {
            otherCollider.body._b2Body.SetPosition(selfCollider.body._b2Body.GetPosition());
            entity_1.rgbody._b2Body.SetAwake(false);
            entity_1.rgbody._b2Body.ApplyForce(force_1, entity_1.rgbody._b2Body.GetPosition());
          }));
        }
        if (selfCollider.tag == Entity_1.EntityTag.speedFloater4ChangeZindex && otherCollider.tag == Entity_1.EntityTag.shark) {
          this.entityParent = otherCollider.node.parent;
          otherCollider.node.parent = this.frontDisplay.parent;
          this.frontDisplay.zIndex = cc.macro.MAX_ZINDEX;
        }
      };
      SpeedFloater.prototype.onEndContact = function(contact, selfCollider, otherCollider) {
        selfCollider.tag == Entity_1.EntityTag.speedFloater4ChangeZindex && otherCollider.tag == Entity_1.EntityTag.shark && (otherCollider.node.parent = this.entityParent);
      };
      __decorate([ property(cc.Node) ], SpeedFloater.prototype, "frontDisplay", void 0);
      __decorate([ property ], SpeedFloater.prototype, "scaleForce", void 0);
      SpeedFloater = __decorate([ ccclass ], SpeedFloater);
      return SpeedFloater;
    }(Entity_1.default);
    exports.default = SpeedFloater;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  Sphere: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abe44W6HYxJtIQXcQTbjFwh", "Sphere");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Sphere = function(_super) {
      __extends(Sphere, _super);
      function Sphere() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Sphere.prototype.onLoad = function() {};
      Sphere = __decorate([ ccclass ], Sphere);
      return Sphere;
    }(cc.Component);
    exports.default = Sphere;
    cc._RF.pop();
  }, {} ],
  Sponge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f640Yu+A1CYZPrlrOqmpPC", "Sponge");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Entity_1 = require("./Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Sponge = function(_super) {
      __extends(Sponge, _super);
      function Sponge() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Sponge.prototype.init = function() {
        this._mTag = Entity_1.EntityTag.sponge;
        this.getComponent(cc.PhysicsCollider).tag = this._mTag;
        this.node.zIndex = Entity_1.LocalZOrder.sponge;
      };
      Sponge.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.dynSponge || otherCollider.tag == Entity_1.EntityTag.duck || otherCollider.tag == Entity_1.EntityTag.inflatable) {
          contact.disabledOnce = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
          contact.setFriction(0);
          otherCollider.tag == Entity_1.EntityTag.shark ? contact.setRestitution(.4) : contact.setRestitution(0);
        } else if (otherCollider.tag == Entity_1.EntityTag.sponge) {
          contact.disabledOnce = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        } else if (otherCollider.tag == Entity_1.EntityTag.greenBlock) {
          contact.disabledOnce = true;
          this.changeRigidBodyType(cc.RigidBodyType.Dynamic);
        }
      };
      Sponge = __decorate([ ccclass ], Sponge);
      return Sponge;
    }(Entity_1.default);
    exports.default = Sponge;
    cc._RF.pop();
  }, {
    "./Entity": "Entity"
  } ],
  TouchManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f98fC8extKnZvBi1kKnV/N", "TouchManager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchManager = function(_super) {
      __extends(TouchManager, _super);
      function TouchManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TouchManager.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
      };
      TouchManager.prototype.onTouchCancle = function(event) {
        cc.log("--cancle---");
      };
      TouchManager.prototype.onTouchBegan = function(event) {};
      TouchManager.prototype.onTouchEnd = function(event) {
        cc.log("--onTouchEnd---");
      };
      TouchManager.prototype.onTouchMove = function(event) {};
      TouchManager = __decorate([ ccclass ], TouchManager);
      return TouchManager;
    }(cc.Component);
    exports.default = TouchManager;
    cc._RF.pop();
  }, {} ],
  TransportMessage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c858zTJnVAA5spxkxysQoi", "TransportMessage");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TransportMessage = function() {
      function TransportMessage() {
        this._messages = {};
      }
      Object.defineProperty(TransportMessage, "instance", {
        get: function() {
          null == this._instance && (this._instance = new TransportMessage());
          return this._instance;
        },
        enumerable: true,
        configurable: true
      });
      TransportMessage.prototype.send = function(to, message, content) {
        void 0 === content && (content = "");
        this._messages[to] || (this._messages[to] = {});
        this._messages[to][message] = content;
      };
      TransportMessage.prototype.get = function(name, message, deleteAfterRead) {
        void 0 === deleteAfterRead && (deleteAfterRead = true);
        if (this._messages[name] && null != this._messages[name][message]) return this._messages[name][message];
        return null;
      };
      TransportMessage._instance = null;
      return TransportMessage;
    }();
    exports.default = TransportMessage;
    cc._RF.pop();
  }, {} ],
  WaterColumn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df4faA/ERxNML3ZAUb0VkDp", "WaterColumn");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WaterColumn = function() {
      function WaterColumn(height, targetHeight, speed) {
        this.displayNode = null;
        this.Height = height;
        this.TargetHeight = targetHeight;
        this.Speed = speed;
      }
      WaterColumn.prototype.Update = function(dampening, tension, overlapSine) {
        var x = this.TargetHeight - this.Height;
        this.Speed += tension * x - this.Speed * dampening;
        this.Height += this.Speed;
        this.displayNode.height = this.Height + overlapSine;
      };
      return WaterColumn;
    }();
    exports.default = WaterColumn;
    cc._RF.pop();
  }, {} ],
  WaterPhysic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81f29zD/EBOTI95uiVPxf7c", "WaterPhysic");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var b2ShapeExternd_1 = require("./b2ShapeExternd");
    var WaterSurface_1 = require("./WaterSurface");
    var Entity_1 = require("./Entities/Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WaterPhysic = function(_super) {
      __extends(WaterPhysic, _super);
      function WaterPhysic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_bodyList = [];
        _this.gravity = new b2.Vec2(0, 320);
        _this.normal = new b2.Vec2(0, 1);
        _this.offset = 256;
        _this.velocity = new b2.Vec2(0, 0);
        _this.useDensity = false;
        return _this;
      }
      WaterPhysic.prototype.start = function() {
        this.offset = b2ShapeExternd_1.default.ptm(this.getComponent(cc.PhysicsBoxCollider).size.height + this.node.position.y) + 3;
        cc.log(this.offset);
        this.gravity = cc.v2(cc.director.getPhysicsManager().gravity.x, -cc.director.getPhysicsManager().gravity.y);
        this.getComponent(cc.PhysicsCollider).tag = Entity_1.EntityTag.warter;
      };
      WaterPhysic.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        if (otherCollider.tag == Entity_1.EntityTag.shark || otherCollider.tag == Entity_1.EntityTag.sponge || otherCollider.tag == Entity_1.EntityTag.dynSponge || otherCollider.tag == Entity_1.EntityTag.speedFloaterBound || otherCollider.tag == Entity_1.EntityTag.monkey || otherCollider.tag == Entity_1.EntityTag.greenBlock || otherCollider.tag == Entity_1.EntityTag.ball || otherCollider.tag == Entity_1.EntityTag.inflatable || otherCollider.tag == Entity_1.EntityTag.duck) {
          var bodyB = otherCollider.body._b2Body;
          this.m_bodyList.push(bodyB);
          contact.disabled = true;
          this.getComponent(WaterSurface_1.default).Splash(otherCollider.body.node.position, otherCollider.body.linearVelocity.y / 10);
          var entity = otherCollider.node.getComponent(Entity_1.default);
          entity.onEnterWater();
        }
      };
      WaterPhysic.prototype.onEndContact = function(contact, selfCollider, otherCollider) {
        var bodyB = otherCollider.body._b2Body;
        var index = this.m_bodyList.indexOf(bodyB);
        index >= 0 && this.m_bodyList.splice(index, 1);
        contact.disabled = true;
        var entity = otherCollider.node.getComponent(Entity_1.default);
        entity.onLeaveWater();
      };
      WaterPhysic.prototype.Step = function(dt) {
        if (!this.m_bodyList || this.m_bodyList.length < 1) return;
        var density = 2;
        var linearDrag = 7;
        var angularDrag = 10;
        var length = this.m_bodyList.length;
        for (var i = 0; i < length; i++) {
          var areac = new b2.Vec2(0, 0);
          var massc = new b2.Vec2(0, 0);
          var area = 0;
          var mass = 0;
          var body = this.m_bodyList[i];
          if (false == body.IsAwake()) continue;
          var entityTag = body.body.node.getComponent(Entity_1.default)._mTag;
          for (var fixture = body.GetFixtureList(); fixture; fixture = fixture.GetNext()) {
            if (entityTag == Entity_1.EntityTag.speedFloater && 2 == fixture.GetShape().GetType()) continue;
            var sc = new b2.Vec2(0, 0);
            var sarea = 0;
            sarea = fixture.GetShape().ComputeSubmergedArea(this.normal, this.offset, body.GetTransform(), sc);
            var reduceForce = body.body.node.getComponent(Entity_1.default).reduceWaterPhysicForce;
            sarea /= reduceForce;
            area += sarea;
            areac.x += sarea * sc.x;
            areac.y += sarea * sc.y;
            var shapeDensity;
            shapeDensity = this.useDensity ? fixture.GetDensity() : 1;
            mass += sarea * shapeDensity;
            massc.x += sarea * sc.x * shapeDensity;
            massc.y += sarea * sc.y * shapeDensity;
          }
          if (area < Number.MIN_VALUE) continue;
          areac.x /= area;
          areac.y /= area;
          massc.x /= mass;
          massc.y /= mass;
          if (entityTag == Entity_1.EntityTag.shark) {
            density = 2;
            linearDrag = 22;
          }
          var buoyancyForce = new b2.Vec2(0, 320);
          buoyancyForce.SelfMul(density * area);
          body.ApplyForce(buoyancyForce, areac);
          var dragForce = new b2.Vec2();
          body.GetLinearVelocityFromWorldPoint(areac, dragForce);
          dragForce = dragForce.SelfSub(this.velocity);
          dragForce = dragForce.SelfMul(-linearDrag * area);
          body.ApplyForce(dragForce, areac);
          body.ApplyTorque(-body.GetInertia() / body.GetMass() * area * body.GetAngularVelocity() * angularDrag);
        }
      };
      WaterPhysic.prototype.update = function(dt) {
        this.Step(dt);
      };
      WaterPhysic = __decorate([ ccclass ], WaterPhysic);
      return WaterPhysic;
    }(cc.Component);
    exports.default = WaterPhysic;
    cc._RF.pop();
  }, {
    "./Entities/Entity": "Entity",
    "./WaterSurface": "WaterSurface",
    "./b2ShapeExternd": "b2ShapeExternd"
  } ],
  WaterSurface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba7a2JtFIhA7YF8XvgaivJX", "WaterSurface");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WaterColumn_1 = require("./WaterColumn");
    var DropLet_1 = require("./Entities/DropLet");
    var Entity_1 = require("./Entities/Entity");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WaterSurface = function(_super) {
      __extends(WaterSurface, _super);
      function WaterSurface() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.leftNode = null;
        _this.rightNode = null;
        _this.waterPrefab = null;
        _this.dropletPrefab = null;
        _this.Width = 0;
        _this.columns = null;
        _this.NUM_COLUMNS = 240;
        _this.NUM_BACKGROUND_WAVES = 3;
        _this.BACKGROUND_WAVE_MAX_HEIGHT = 3;
        _this.BACKGROUND_WAVE_COMPRESSION = .1;
        _this.Tension = .025;
        _this.Dampening = .025;
        _this.Spread = .25;
        _this.offset = 0;
        _this.sineOffsets = [];
        _this.sineAmplitudes = [];
        _this.sineStretches = [];
        _this.offsetStretches = [];
        _this.dropLets = [];
        return _this;
      }
      WaterSurface.prototype.onLoad = function() {
        this.Width = this.rightNode.position.x - this.leftNode.position.x;
        for (var i = 0; i < this.NUM_BACKGROUND_WAVES; i++) {
          var sinoffset = -Math.PI + 2 * Math.PI * Math.random();
          this.sineOffsets.push(sinoffset);
          var sinAmplitude = Math.random() * this.BACKGROUND_WAVE_MAX_HEIGHT;
          this.sineAmplitudes.push(sinAmplitude);
          var sineStretche = Math.random() * this.BACKGROUND_WAVE_COMPRESSION;
          this.sineStretches.push(sineStretche);
          var offsetStretche = Math.random() * this.BACKGROUND_WAVE_COMPRESSION;
          this.offsetStretches.push(offsetStretche);
        }
      };
      WaterSurface.prototype.start = function() {
        this.columns = this.makeWaveColumns();
        this.node.zIndex = Entity_1.LocalZOrder.water;
      };
      WaterSurface.prototype.makeWaveColumns = function() {
        var temp = [];
        var x = this.leftNode.position.x;
        var offsetX = this.Width / this.NUM_COLUMNS;
        for (var i = 0; i < this.NUM_COLUMNS; i++) {
          var wc = new WaterColumn_1.default(256, 256, 0);
          wc.displayNode = cc.instantiate(this.waterPrefab);
          wc.displayNode.parent = this.node;
          wc.displayNode.position = cc.v2(x, -128);
          wc.displayNode.width = offsetX;
          temp.push(wc);
          x += offsetX;
        }
        return temp;
      };
      WaterSurface.prototype.overlapSines = function(x) {
        var result = 0;
        for (var i = 0; i < this.NUM_BACKGROUND_WAVES; i++) result = result + this.sineOffsets[i] + this.sineAmplitudes[i] * Math.sin(x * this.sineStretches[i] + this.offset * this.offsetStretches[i]);
        return result;
      };
      WaterSurface.prototype.Splash = function(otherPosition, speed) {
        var x = otherPosition.x;
        var index = Math.round((x - this.leftNode.x) * this.NUM_COLUMNS / this.Width);
        index >= this.NUM_COLUMNS && (index = this.NUM_COLUMNS);
        for (var i = Math.max(0, index - 0); i < Math.min(this.NUM_COLUMNS - 1, index + 1); i++) this.columns[index].Speed = speed;
        this.CreateSplashParticles(otherPosition, speed);
      };
      WaterSurface.prototype.CreateSplashParticles = function(otherPosition, speed) {
        var y = 160;
        var tempSpeed = Math.abs(speed);
        if (speed < -50) {
          var numDropLet = Math.round(tempSpeed / 8);
          for (var i = 0; i < numDropLet; i++) {
            var pos = cc.v2(otherPosition.x, y).add(this.GetRandomVector2(40));
            var vel = this.FromPolar(cc.misc.degreesToRadians(this.GetRandomFloat(-150, -30)), this.GetRandomFloat(0, .5 * Math.sqrt(tempSpeed)));
            var dl = cc.instantiate(this.dropletPrefab);
            dl.getComponent(DropLet_1.default).Velocity = vel;
            dl.parent = this.node;
            dl.position = pos;
          }
        }
      };
      WaterSurface.prototype.GetAngle = function(vector) {
        return Math.atan2(-vector.y, vector.x);
      };
      WaterSurface.prototype.GetRandomVector2 = function(maxLength) {
        return this.FromPolar(this.GetRandomFloat(-Math.PI, Math.PI), this.GetRandomFloat(0, maxLength));
      };
      WaterSurface.prototype.FromPolar = function(angle, magnitude) {
        var v2 = cc.v2(Math.cos(angle), Math.sin(angle));
        return v2.mul(magnitude);
      };
      WaterSurface.prototype.GetRandomFloat = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      WaterSurface.prototype.update = function(dt) {
        this.offset = this.offset + 1;
        for (var idx = 0; idx < this.NUM_COLUMNS; idx++) this.columns[idx].Update(this.Dampening, this.Tension, this.overlapSines(idx));
        var lDeltas = new Array(this.NUM_COLUMNS);
        var rDeltas = new Array(this.NUM_COLUMNS);
        for (var j = 0; j < 8; j++) {
          for (var i = 0; i < this.NUM_COLUMNS; i++) {
            if (i > 0) {
              lDeltas[i] = this.Spread * (this.columns[i].Height - this.columns[i - 1].Height);
              this.columns[i - 1].Speed += lDeltas[i];
            }
            if (i < this.NUM_COLUMNS - 1) {
              rDeltas[i] = this.Spread * (this.columns[i].Height - this.columns[i + 1].Height);
              this.columns[i + 1].Speed += rDeltas[i];
            }
          }
          for (var i = 0; i < this.NUM_COLUMNS; i++) {
            i > 0 && (this.columns[i - 1].Height += lDeltas[i]);
            i < this.NUM_COLUMNS - 1 && (this.columns[i + 1].Height += rDeltas[i]);
          }
        }
      };
      __decorate([ property(cc.Node) ], WaterSurface.prototype, "leftNode", void 0);
      __decorate([ property(cc.Node) ], WaterSurface.prototype, "rightNode", void 0);
      __decorate([ property(cc.Prefab) ], WaterSurface.prototype, "waterPrefab", void 0);
      __decorate([ property(cc.Prefab) ], WaterSurface.prototype, "dropletPrefab", void 0);
      WaterSurface = __decorate([ ccclass ], WaterSurface);
      return WaterSurface;
    }(cc.Component);
    exports.default = WaterSurface;
    cc._RF.pop();
  }, {
    "./Entities/DropLet": "DropLet",
    "./Entities/Entity": "Entity",
    "./WaterColumn": "WaterColumn"
  } ],
  b2ShapeExternd: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32155sXpdtA+7JTuGFTKN7q", "b2ShapeExternd");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var b2ShapeExternd = function() {
      function b2ShapeExternd() {}
      b2ShapeExternd_1 = b2ShapeExternd;
      b2ShapeExternd.ptm = function(d) {
        return d / this.PTM_RATIO;
      };
      b2ShapeExternd.mtp = function(d) {
        return d * this.PTM_RATIO;
      };
      b2ShapeExternd.Cricle_ComputeSubmergedArea = function(circle, normal, offset, xf, c) {
        var p = b2.Mul_t_v2(xf, circle.m_p);
        var l = -(b2.Dot_v2_v2(normal, p) - offset);
        if (l < -circle.m_radius + b2.epsilon) return 0;
        if (l > circle.m_radius) {
          c.Set(p.x, p.y);
          return Math.PI * circle.m_radius * circle.m_radius;
        }
        var r2 = circle.m_radius * circle.m_radius;
        var l2 = l * l;
        var area = r2 * (Math.asin(l / circle.m_radius) + Math.PI / 2) + l * Math.sqrt(r2 - l2);
        var com = -2 / 3 * Math.pow(r2 - l2, 1.5) / area;
        c.x = p.x + normal.x * com;
        c.y = p.y + normal.y * com;
        return area;
      };
      var b2ShapeExternd_1;
      b2ShapeExternd.PTM_RATIO = 32;
      b2ShapeExternd.b2MathMulMV = function(A, v) {
        var u = new b2.Vec2(A.col1.x * v.x + A.col2.x * v.y, A.col1.y * v.x + A.col2.y * v.y);
        return u;
      };
      b2ShapeExternd.b2MathMulX = function(T, v) {
        var a = b2ShapeExternd_1.b2MathMulMV(T.R, v);
        a.x += T.position.x;
        a.y += T.position.y;
        return a;
      };
      b2ShapeExternd = b2ShapeExternd_1 = __decorate([ ccclass ], b2ShapeExternd);
      return b2ShapeExternd;
    }();
    exports.default = b2ShapeExternd;
    cc._RF.pop();
  }, {} ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dee9enMOBJDb5U/ReanrJm", "event-manager");
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
  "sound-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f9677o9utP35iKZQQo+tXn", "sound-manager");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var event_manager_1 = require("./event-manager");
    var SoundManager = function() {
      function SoundManager() {
        this.sounds = {};
        this.playingSounds = {};
        this.initialized = false;
        this.enable = true;
        this.DEBUG_LOG = true;
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
            event_manager_1.default.instance.dispatch("Sound_initialized");
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
        var idx = Math.floor(cc.random0To1() * clipsName.length);
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
    "./event-manager": "event-manager"
  } ]
}, {}, [ "CameraController", "Ball", "BathClip", "Chain", "DropLet", "Duck", "DynSponge", "Entity", "GoldenCoin", "GreenBlock", "Inflatable", "Mine", "Monkey", "Pipe", "PipeWall", "Rope", "Salt", "SpeedFloater", "Sponge", "Global", "InputMgr", "LevelMgr", "LoadingManager", "ParallaxLayer", "PopUpDlg", "SharkAnimation", "SharkController", "Sphere", "TouchManager", "TransportMessage", "WaterColumn", "WaterPhysic", "WaterSurface", "b2ShapeExternd", "event-manager", "sound-manager" ]);
//# sourceMappingURL=project.dev.js.map