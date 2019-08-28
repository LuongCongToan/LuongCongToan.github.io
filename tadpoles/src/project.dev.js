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
  LabelLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b2e4HVWKBCIaBIbtjNKeSy", "LabelLocalized");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var i18n = require("i18n");
    var LabelLocalized = function(_super) {
      __extends(LabelLocalized, _super);
      function LabelLocalized() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._textKey = "TEXT_KEY";
        _this.label = null;
        _this.textProp = null;
        return _this;
      }
      Object.defineProperty(LabelLocalized.prototype, "textKey", {
        get: function() {
          return this._textKey;
        },
        set: function(value) {
          this._textKey = value;
          this.updateLabel();
        },
        enumerable: true,
        configurable: true
      });
      LabelLocalized.prototype.onLoad = function() {
        this.label = this.getComponent(cc.Label);
        this.updateLabel();
      };
      LabelLocalized.prototype.updateLabel = function() {
        null == this.label && (this.label = this.getComponent(cc.Label));
        if (this.label) {
          var keys = this.textKey.trim().split("+");
          var text = "";
          for (var i = 0; i < keys.length; ++i) text += i18n.t(keys[i], this.textProp);
          this.label.string = text;
        }
      };
      LabelLocalized.prototype.updateTextProp = function(props) {
        this.textProp = props;
        this.updateLabel();
      };
      __decorate([ property() ], LabelLocalized.prototype, "_textKey", void 0);
      __decorate([ property({
        multiline: true,
        tooltip: "Enter i18n text key"
      }) ], LabelLocalized.prototype, "textKey", null);
      LabelLocalized = __decorate([ ccclass, requireComponent(cc.Label), executeInEditMode, menu("i18n:MAIN_MENU.component.renderers/LabelLocalized") ], LabelLocalized);
      return LabelLocalized;
    }(cc.Component);
    exports.default = LabelLocalized;
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  RichTextLocalized: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7eff8OjwNOL6lnQdtt4Djg", "RichTextLocalized");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LabelLocalized_1 = require("./LabelLocalized");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var RichTextLocalized = function(_super) {
      __extends(RichTextLocalized, _super);
      function RichTextLocalized() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RichTextLocalized.prototype.onLoad = function() {
        this.label = this.getComponent(cc.RichText);
        this.updateLabel();
      };
      RichTextLocalized.prototype.updateLabel = function() {
        null == this.label && (this.label = this.getComponent(cc.RichText));
        _super.prototype.updateLabel.call(this);
      };
      RichTextLocalized = __decorate([ ccclass, requireComponent(cc.RichText), menu("i18n:MAIN_MENU.component.renderers/RichTextLocalized"), executeInEditMode ], RichTextLocalized);
      return RichTextLocalized;
    }(LabelLocalized_1.default);
    exports.default = RichTextLocalized;
    cc._RF.pop();
  }, {
    "./LabelLocalized": "LabelLocalized"
  } ],
  admob: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a5fd8qyUJGFLGeU9qdUpwe", "admob");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../core/event-manager");
    var AdmodAds = function() {
      function AdmodAds() {}
      AdmodAds.init = function() {
        if (cc.sys.isMobile) {
          sdkbox.PluginAdMob.init();
          this.listener = new AdsListener();
          sdkbox.PluginAdMob.setListener(this.listener);
        }
      };
      AdmodAds.getVersion = function() {
        if (cc.sys.isMobile) return sdkbox.PluginAdMob.getVersion();
      };
      AdmodAds.setTestDevices = function(device) {
        cc.sys.isMobile && sdkbox.PluginAdMob.setTestDevices(device);
      };
      AdmodAds.cache = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.cache(name);
      };
      AdmodAds.show = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.show(name);
      };
      AdmodAds.hide = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.hide(name);
      };
      AdmodAds.isAvailable = function(name) {
        if (cc.sys.isMobile) return sdkbox.PluginAdMob.isAvailable(name);
        return false;
      };
      AdmodAds.getCurrBannerWidth = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.getCurrBannerWidth(name);
        return -1;
      };
      AdmodAds.getCurrBannerHeight = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.getCurrBannerHeight(name);
        return -1;
      };
      AdmodAds.getCurrBannerWidthInPixel = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.getCurrBannerWidthInPixel(name);
        return -1;
      };
      AdmodAds.getCurrBannerHeightInPixel = function(name) {
        cc.sys.isMobile && sdkbox.PluginAdMob.getCurrBannerHeightInPixel(name);
        return -1;
      };
      AdmodAds.setGDPR = function(enable) {
        cc.sys.isMobile && sdkbox.PluginAdMob.setGDPR(enable);
      };
      AdmodAds.setListener = function(listener) {
        cc.sys.isMobile && sdkbox.PluginAdMob.setListener(listener);
      };
      AdmodAds.EVT_AD_REWARD = "adreward";
      return AdmodAds;
    }();
    exports.AdmodAds = AdmodAds;
    var AdsListener = function() {
      function AdsListener() {}
      AdsListener.prototype.adViewDidReceiveAd = function(name) {
        cc.log("adViewDidReceiveAd: " + name);
      };
      AdsListener.prototype.adViewDidFailToReceiveAdWithError = function(name, msg) {
        cc.log("adViewDidFailToReceiveAdWithError: " + name + " msg: " + msg);
      };
      AdsListener.prototype.adViewWillPresentScreen = function(name) {
        cc.log("adViewWillPresentScreen: " + name);
      };
      AdsListener.prototype.adViewDidDismissScreen = function(name) {
        cc.log("adViewDidDismissScreen: " + name);
      };
      AdsListener.prototype.adViewWillDismissScreen = function(name) {
        cc.log("adViewWillDismissScreen: " + name);
      };
      AdsListener.prototype.adViewWillLeaveApplication = function(name) {
        cc.log("adViewWillLeaveApplication: " + name);
      };
      AdsListener.prototype.reward = function(name, currency, amount) {
        cc.log("adReward: " + name + " currency: " + currency + " amount: " + amount);
        event_manager_1.default.instance.dispatch(AdmodAds.EVT_AD_REWARD, name, currency, amount);
      };
      return AdsListener;
    }();
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager"
  } ],
  analytics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32b05+bVdFOba6dsmQmi7Oj", "analytics");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Analytics = function() {
      function Analytics() {}
      Analytics.init = function() {
        cc.sys.isMobile && sdkbox.firebase.Analytics.init();
      };
      Analytics.getVersion = function() {
        if (cc.sys.isMobile) return sdkbox.firebase.Analytics.getVersion();
      };
      Analytics.setUserProperty = function(name, value) {
        cc.sys.isMobile && sdkbox.firebase.Analytics.setUserProperty(name, value);
      };
      Analytics.setUserID = function(userId) {
        cc.sys.isMobile && sdkbox.firebase.Analytics.setUserID(userId);
      };
      Analytics.setScreenName = function(screen, screenClass) {
        void 0 === screenClass && (screenClass = "");
        cc.sys.isMobile && sdkbox.firebase.Analytics.setScreenName(screen, screenClass);
      };
      Analytics.logEvent = function(event, params) {
        cc.sys.isMobile && sdkbox.firebase.Analytics.logEvent(event, params);
      };
      Analytics.resetAnalyticsData = function() {
        cc.sys.isMobile && sdkbox.firebase.Analytics.resetAnalyticsData();
      };
      Analytics.setAnalyticsCollectionEnabled = function(enable) {
        cc.sys.isMobile && sdkbox.firebase.Analytics.setAnalyticsCollectionEnabled(enable);
      };
      Analytics.setGDPR = function(gdpr) {
        cc.sys.isMobile && sdkbox.firebase.Analytics.setGDPR(gdpr);
      };
      return Analytics;
    }();
    exports.Analytics = Analytics;
    cc._RF.pop();
  }, {} ],
  "collider-def": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae925YujE1JUYOTtjZC0lmT", "collider-def");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CollidGroup;
    (function(CollidGroup) {
      CollidGroup[CollidGroup["TADPOLE"] = 1] = "TADPOLE";
      CollidGroup[CollidGroup["ENEMY"] = 2] = "ENEMY";
      CollidGroup[CollidGroup["CONTROL"] = 3] = "CONTROL";
    })(CollidGroup = exports.CollidGroup || (exports.CollidGroup = {}));
    var CollidTag;
    (function(CollidTag) {
      CollidTag[CollidTag["CONTROL"] = 0] = "CONTROL";
      CollidTag[CollidTag["LEAF"] = 1] = "LEAF";
    })(CollidTag = exports.CollidTag || (exports.CollidTag = {}));
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c40dbVkwulCgaxnZg5s0ilJ", "config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Config = function() {
      function Config() {}
      Config.PROJECT_ID = "raise-tadpoles";
      Config.PROJECT_VERSION = "1.0.0";
      return Config;
    }();
    exports.default = Config;
    cc._RF.pop();
  }, {} ],
  control: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d3bbTn1QpAJYi+l3dt4cHy", "control");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Control = function(_super) {
      __extends(Control, _super);
      function Control() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touchDisplay = null;
        _this.root = null;
        return _this;
      }
      Control.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouch, this);
      };
      Control.prototype.onTouch = function(event) {
        var touch = cc.instantiate(this.touchDisplay);
        var pos = this.root.convertToNodeSpaceAR(event.getLocation());
        touch.setPosition(pos);
        this.root.addChild(touch);
        this.scheduleOnce(function() {
          touch.removeFromParent();
        }, .2);
      };
      __decorate([ property(cc.Prefab) ], Control.prototype, "touchDisplay", void 0);
      __decorate([ property(cc.Node) ], Control.prototype, "root", void 0);
      Control = __decorate([ ccclass ], Control);
      return Control;
    }(cc.Component);
    exports.default = Control;
    cc._RF.pop();
  }, {} ],
  ech: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3f668k4NlFkIrzRvwrgYge", "ech");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var enemy_1 = require("./enemy");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ech = function(_super) {
      __extends(Ech, _super);
      function Ech() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Ech.prototype.init = function() {
        this.setDir(360 * Math.random());
        this.schedule(this.randomNewDirection, 4);
        this.playAnim("frog_jump", true);
        return true;
      };
      Ech.prototype.updateMove = function(dt) {
        if (this.rigidbody.linearVelocity.mag() <= 2) {
          this.node.angle = this.direction - 90;
          var rad = cc.misc.degreesToRadians(this.direction);
          var force = cc.v2(Math.cos(rad) * this.speed, Math.sin(rad) * this.speed);
          this.rigidbody.applyLinearImpulse(force, this.rigidbody.getWorldCenter(), true);
        }
      };
      Ech = __decorate([ ccclass ], Ech);
      return Ech;
    }(enemy_1.default);
    exports.default = Ech;
    cc._RF.pop();
  }, {
    "./enemy": "enemy"
  } ],
  enemy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1a21cFVUtEHrBYIivx+bnL", "enemy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var collider_def_1 = require("../collider-def");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EState;
    (function(EState) {
      EState[EState["NORMAL"] = 0] = "NORMAL";
      EState[EState["ATTACK"] = 1] = "ATTACK";
      EState[EState["FREZZE"] = 2] = "FREZZE";
    })(EState || (EState = {}));
    var Enemy = function(_super) {
      __extends(Enemy, _super);
      function Enemy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.speed = 800;
        _this.rigidbody = null;
        _this.direction = 0;
        _this.leftBound = -320;
        _this.rightBound = -320;
        _this.topBound = 640;
        _this.bottomBound = -640;
        _this.isUpdatingDirection = false;
        _this.nextDirection = -1;
        _this.rotateAcceleration = .1;
        _this.hitCount = 0;
        _this.freezeTime = 8;
        _this.freezeTimeEclapse = 0;
        _this.state = EState.NORMAL;
        _this.spineAnim = null;
        _this._prev_anim_name = null;
        return _this;
      }
      Enemy.prototype.start = function() {
        this.setState(EState.NORMAL);
        var visibleSize = cc.view.getVisibleSize();
        this.leftBound = .5 * -visibleSize.width;
        this.rightBound = .5 * visibleSize.width;
        this.topBound = .5 * visibleSize.height;
        this.bottomBound = .5 * -visibleSize.height;
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.init();
      };
      Enemy.prototype.setState = function(nextState) {
        if (nextState == this.state) return;
        this.state = nextState;
      };
      Enemy.prototype.randomNewDirection = function(dt) {
        if (this.isUpdatingDirection) return;
        this.nextDirection = 360 * Math.random();
        this.isUpdatingDirection = true;
      };
      Enemy.prototype.setDir = function(newDir) {
        this.direction = newDir;
        this.node.angle = this.direction - 90;
      };
      Enemy.prototype.update = function(dt) {
        if (this.state == EState.NORMAL) {
          this.updateDirection(dt);
          this.updateMove(dt);
          if (this.isOutOfView()) {
            this.nextDirection = this.direction + 90;
            this.isUpdatingDirection = true;
          }
          this.hitCount > 0 && (this.hitCount -= 4 * dt);
        } else this.state == EState.FREZZE && this.updateFreezeState(dt);
      };
      Enemy.prototype.updateFreezeState = function(dt) {
        this.freezeTimeEclapse -= dt;
        if (this.freezeTimeEclapse <= 0) {
          this.hitCount = 0;
          this.setState(EState.NORMAL);
        }
      };
      Enemy.prototype.isOutOfView = function() {
        var x = this.node.x;
        var y = this.node.y;
        return !(x > this.leftBound && x < this.rightBound && y > this.bottomBound && y < this.topBound);
      };
      Enemy.prototype.updateDirection = function(dt) {
        if (this.isUpdatingDirection) {
          this.direction < this.nextDirection ? this.direction += this.rotateAcceleration : this.direction -= this.rotateAcceleration;
          Math.abs(this.direction - this.nextDirection) < .2 && (this.isUpdatingDirection = false);
        }
      };
      Enemy.prototype.onBeginContact = function(contact, self, other) {
        if (other.node.groupIndex == collider_def_1.CollidGroup.TADPOLE) ; else if (other.node.groupIndex == collider_def_1.CollidGroup.CONTROL) {
          this.hitCount += 1;
          if (this.hitCount >= 5) {
            this.setState(EState.FREZZE);
            this.freezeTimeEclapse = this.freezeTime;
            this.rigidbody.linearVelocity = cc.Vec2.ZERO;
          }
        }
      };
      Enemy.prototype.playAnim = function(name, loop, timescale) {
        void 0 === timescale && (timescale = 1);
        if (name != this._prev_anim_name) {
          this._prev_anim_name = name;
          this.spineAnim.timeScale = timescale;
          this.spineAnim.setAnimation(0, name, loop);
        }
      };
      Enemy.prototype.onDestroy = function() {
        this.unscheduleAllCallbacks();
      };
      __decorate([ property(sp.Skeleton) ], Enemy.prototype, "spineAnim", void 0);
      Enemy = __decorate([ ccclass ], Enemy);
      return Enemy;
    }(cc.Component);
    exports.default = Enemy;
    cc._RF.pop();
  }, {
    "../collider-def": "collider-def"
  } ],
  "event-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f534eiXgTxDaIAsHCAjGshJ", "event-manager");
    "use strict";
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
  facebook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36005g6kjtORaYhgZESZpGk", "facebook");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FaceBook = function() {
      function FaceBook() {}
      FaceBook.init = function() {
        if (cc.sys.isMobile) {
          this.listener = new FacebookListener();
          sdkbox.PluginFacebook.setListener(this.listener);
          sdkbox.PluginFacebook.init();
        }
      };
      FaceBook.setLoginBehavior = function(behavior) {
        cc.sys.isMobile && sdkbox.PluginFacebook.setLoginBehavior(behavior);
      };
      FaceBook.login = function(permissions) {
        void 0 === permissions && (permissions = null);
        permissions ? cc.sys.isMobile && sdkbox.PluginFacebook.login(permissions) : cc.sys.isMobile && sdkbox.PluginFacebook.login();
      };
      FaceBook.logout = function() {
        cc.sys.isMobile && sdkbox.PluginFacebook.logout();
      };
      FaceBook.isLoggedIn = function() {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.isLoggedIn();
      };
      FaceBook.requestReadPermissions = function(permissions) {
        cc.sys.isMobile && sdkbox.PluginFacebook.requestReadPermissions(permissions);
      };
      FaceBook.requestPublishPermissions = function(permissions) {
        cc.sys.isMobile && sdkbox.PluginFacebook.requestPublishPermissions(permissions);
      };
      FaceBook.getPermissionList = function() {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.getPermissionList();
      };
      FaceBook.getUserID = function() {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.getUserID();
      };
      FaceBook.getAccessToken = function() {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.getAccessToken();
      };
      FaceBook.setAppId = function(appId) {
        cc.sys.isMobile && sdkbox.PluginFacebook.setAppId(appId);
      };
      FaceBook.setAppURLSchemeSuffix = function(appURLSchemeSuffix) {
        cc.sys.isMobile && sdkbox.PluginFacebook.setAppURLSchemeSuffix(appURLSchemeSuffix);
      };
      FaceBook.share = function(info) {
        cc.sys.isMobile && sdkbox.PluginFacebook.share(info);
      };
      FaceBook.dialog = function(info) {
        cc.sys.isMobile && sdkbox.PluginFacebook.dialog(info);
      };
      FaceBook.api = function(path, method, param, tag) {
        cc.sys.isMobile && sdkbox.PluginFacebook.api(path, method, param, tag);
      };
      FaceBook.getSDKVersion = function() {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.getSDKVersion();
      };
      FaceBook.fetchFriends = function() {
        cc.sys.isMobile && sdkbox.PluginFacebook.fetchFriends();
      };
      FaceBook.canPresentWithFBApp = function(info) {
        if (cc.sys.isMobile) return sdkbox.PluginFacebook.canPresentWithFBApp(info);
      };
      FaceBook.inviteFriends = function(app_link_url, preview_image_url) {
        cc.sys.isMobile && sdkbox.PluginFacebook.inviteFriends(app_link_url, preview_image_url);
      };
      FaceBook.requestGift = function(invite_ids, object_id, message, title, additional_data) {
        cc.sys.isMobile && sdkbox.PluginFacebook.requestGift(invite_ids, object_id, message, title, additional_data);
      };
      FaceBook.sendGift = function(invite_ids, object_id, title, message, additional_data) {
        cc.sys.isMobile && sdkbox.PluginFacebook.sendGift(invite_ids, object_id, title, message, additional_data);
      };
      FaceBook.logEvent = function(eventName) {
        cc.sys.isMobile && sdkbox.PluginFacebook.logEvent(eventName);
      };
      FaceBook.logPurchase = function(amount, currency) {
        cc.sys.isMobile && sdkbox.PluginFacebook.logPurchase(amount, currency);
      };
      FaceBook.setListener = function(listener) {
        cc.sys.isMobile && sdkbox.PluginFacebook.setListener(listener);
      };
      return FaceBook;
    }();
    exports.FaceBook = FaceBook;
    var FacebookListener = function() {
      function FacebookListener() {}
      FacebookListener.prototype.onLogin = function(isLogin, msg) {
        cc.log("onLogin isLogin: " + isLogin + " message: " + msg);
      };
      FacebookListener.prototype.onSharedSuccess = function(message) {
        cc.log("onSharedSuccess message: " + message);
      };
      FacebookListener.prototype.onSharedFailed = function(message) {
        cc.log("onSharedFailed message: " + message);
      };
      FacebookListener.prototype.onSharedCancel = function() {
        cc.log("onSharedCancel");
      };
      FacebookListener.prototype.onAPI = function(key, jsonData) {
        cc.log("onAPI key: " + key + " data: " + jsonData);
      };
      FacebookListener.prototype.onPermission = function(isLogin, msg) {
        cc.log("onPermission isLogin: " + isLogin + " msg: " + msg);
      };
      FacebookListener.prototype.onFetchFriends = function(ok, msg) {
        cc.log("onFetchFriends ok: " + ok + " msg: " + msg);
      };
      FacebookListener.prototype.onRequestInvitableFriends = function(friends) {
        cc.log("onRequestInvitableFriends friends: " + friends);
      };
      FacebookListener.prototype.onInviteFriendsWithInviteIdsResult = function(result, msg) {
        cc.log("onInviteFriendsWithInviteIdsResult result: " + result + " msg: " + msg);
      };
      FacebookListener.prototype.onInviteFriendsResult = function(result, msg) {
        cc.log("onInviteFriendsResult result: " + result + " msg: " + msg);
      };
      FacebookListener.prototype.onGetUserInfo = function(userInfo) {
        cc.log("onGetUserInfo result: " + userInfo);
      };
      FacebookListener.prototype.onRequestGiftResult = function(result, msg) {
        cc.log("onRequestGiftResult result: " + result + " msg: " + msg);
      };
      FacebookListener.prototype.onSendGiftResult = function(result, msg) {
        cc.log("onSendGiftResult result: " + result + " msg: " + msg);
      };
      return FacebookListener;
    }();
    cc._RF.pop();
  }, {} ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7d6cDiflJKrIlcEqSg37sF", "game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var analytics_1 = require("../sdkbox-wrapper/analytics");
    var level_1 = require("./components/level");
    var event_manager_1 = require("../core/event-manager");
    var nong_noc_1 = require("./components/nong-noc");
    var popup_1 = require("../core/popup");
    var loader_1 = require("../core/loader");
    var utils_1 = require("../utils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameRoot = null;
        _this.foodPrefab = [];
        _this.snakePrefab = null;
        _this.turtlePrefab = null;
        _this.catPrefab = null;
        _this.frogPrefab = null;
        _this.uiStars = [];
        _this.lblNongNocCollected = null;
        _this.lblScore = null;
        _this.winDlg = null;
        _this.totalNongNocDeath = 0;
        _this.totalNongNocLost = 0;
        _this.totalNongNocGoal = 0;
        return _this;
      }
      Game.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2();
      };
      Game.prototype.updateUI = function() {
        this.lblNongNocCollected.string = this.totalNongNocGoal + "/" + level_1.default.Instance.totalNongNoc;
        this.lblScore.string = "Score:" + level_1.default.Instance.addGameScore(this.totalNongNocGoal);
        for (var i = 0; i < 3; i++) this.uiStars[i].getComponent(cc.ProgressBar).progress = level_1.default.Instance.stars_progressValue[i];
      };
      Game.prototype.start = function() {
        var _this = this;
        if (!loader_1.default.loaded) return;
        var numOfStar = level_1.default.Instance.getTotalStart();
        for (var i = 0; i < 3; i++) i < numOfStar ? this.uiStars[i].getComponent(cc.ProgressBar).progress = 0 : this.uiStars[i].active = false;
        popup_1.default.instance.showInfoPopup("GET " + numOfStar + " STARS \n\nTO PLAY NEXT LEVEL", function() {
          _this.init();
        });
      };
      Game.prototype.init = function() {
        var _this = this;
        level_1.default.Instance.createMap(this.gameRoot, this.foodPrefab[Math.round(utils_1.Utils.randomRange(0, 1))], this.catPrefab, this.turtlePrefab, this.snakePrefab, this.frogPrefab);
        this.totalNongNocDeath = 0;
        this.totalNongNocLost = 0;
        this.totalNongNocGoal = 0;
        analytics_1.Analytics.setScreenName("Gameplay");
        event_manager_1.default.instance.register(nong_noc_1.default.EVT_DEATH, function() {
          _this.totalNongNocDeath++;
          _this.checkEndGame();
        });
        event_manager_1.default.instance.register(nong_noc_1.default.EVT_ESCAPE, function() {
          _this.totalNongNocLost++;
          _this.checkEndGame();
        });
        event_manager_1.default.instance.register(nong_noc_1.default.EVT_GOAL, function() {
          _this.totalNongNocGoal++;
          _this.checkEndGame();
          _this.updateUI();
        });
        this.updateUI();
      };
      Game.prototype.checkEndGame = function() {
        this.totalNongNocDeath + this.totalNongNocLost + this.totalNongNocGoal >= level_1.default.Instance.totalNongNoc && (this.totalNongNocGoal >= level_1.default.Instance.numOffTadpoles2Pass() ? popup_1.default.instance.showWinPopup(2, level_1.default.Instance.getTotalScore(), this.onClickNext.bind(this)) : popup_1.default.instance.showConfirmPopup("MUST GET " + level_1.default.Instance.getTotalStart() + " STARS \n\nTO PLAY NEXT LEVEL", "Cancle", "Again", this.onClickCancel.bind(this), this.onClickTryAgain.bind(this)));
      };
      Game.prototype.onClickNext = function() {
        level_1.default.Instance.currentLvl++;
        this.reLoadScene();
      };
      Game.prototype.onClickTryAgain = function() {
        this.reLoadScene();
      };
      Game.prototype.onClickCancel = function() {
        cc.director.loadScene("main-menu");
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_GOAL);
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_DEATH);
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_ESCAPE);
      };
      Game.prototype.reLoadScene = function() {
        cc.director.loadScene("game");
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_GOAL);
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_DEATH);
        event_manager_1.default.instance.remove(nong_noc_1.default.EVT_ESCAPE);
      };
      __decorate([ property(cc.Node) ], Game.prototype, "gameRoot", void 0);
      __decorate([ property([ cc.Prefab ]) ], Game.prototype, "foodPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "snakePrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "turtlePrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "catPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "frogPrefab", void 0);
      __decorate([ property([ cc.Node ]) ], Game.prototype, "uiStars", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "lblNongNocCollected", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "lblScore", void 0);
      __decorate([ property(sp.Skeleton) ], Game.prototype, "winDlg", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "../core/event-manager": "event-manager",
    "../core/loader": "loader",
    "../core/popup": "popup",
    "../sdkbox-wrapper/analytics": "analytics",
    "../utils": "utils",
    "./components/level": "level",
    "./components/nong-noc": "nong-noc"
  } ],
  gaumeo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "762b6xtMUZJXZpau6Go8Onm", "gaumeo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var enemy_1 = require("./enemy");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GauMeo = function(_super) {
      __extends(GauMeo, _super);
      function GauMeo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GauMeo.prototype.init = function() {
        this.speed = 15;
        this.setDir(360 * Math.random());
        this.schedule(this.randomNewDirection, 3);
        this.playAnim("catbear_swiming", true);
        return true;
      };
      GauMeo.prototype.updateMove = function(dt) {
        var rad = cc.misc.degreesToRadians(this.direction);
        var dx = Math.cos(rad) * this.speed;
        var dy = Math.sin(rad) * this.speed;
        this.node.angle = this.direction - 90;
        this.rigidbody.linearVelocity = cc.v2(dx, dy);
      };
      GauMeo = __decorate([ ccclass ], GauMeo);
      return GauMeo;
    }(enemy_1.default);
    exports.default = GauMeo;
    cc._RF.pop();
  }, {
    "./enemy": "enemy"
  } ],
  "global-var": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22818LLQ/hCwo3neiua+cIu", "global-var");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalVar = function() {
      function GlobalVar() {
        this._vars = {};
      }
      Object.defineProperty(GlobalVar, "instance", {
        get: function() {
          GlobalVar._instance || (GlobalVar._instance = new GlobalVar());
          return GlobalVar._instance;
        },
        enumerable: true,
        configurable: true
      });
      GlobalVar.prototype.set = function(varName, value) {
        this._vars[varName] = value;
      };
      GlobalVar.prototype.get = function(varName, deleteAfterRead) {
        void 0 === deleteAfterRead && (deleteAfterRead = false);
        var data = this._vars[varName];
        data && deleteAfterRead && delete this._vars[varName];
        return data;
      };
      return GlobalVar;
    }();
    exports.default = GlobalVar;
    cc._RF.pop();
  }, {} ],
  i18n: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb41b4cbx9AcpIzAaOE+6ZV", "i18n");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    var Polyglot = require("polyglot");
    var supported_languages = window.i18n.supported_languages || [];
    var saveLanguage = cc.sys.localStorage.getItem("__gamesave-language");
    var lang = "";
    if (null == saveLanguage) {
      lang = cc.sys.language;
      if (supported_languages.length > 0 && -1 == supported_languages.indexOf(lang)) {
        lang = supported_languages[0];
        true;
        cc.sys.localStorage.setItem("__gamesave-language", lang);
      }
    } else lang = saveLanguage;
    var data = window.i18n.languages[lang] || {};
    var polyglot = new Polyglot({
      phrases: data,
      allowMissing: true
    });
    module.exports = {
      init: function init(language) {
        if (!window.i18n.languages[language]) {
          console.warn("Language is not support: " + language);
          return false;
        }
        (true, window.i18n.languages[language]) && cc.sys.localStorage.setItem("__gamesave-language", language);
        lang = language;
        data = window.i18n.languages[lang] || {};
        polyglot.replace(data);
        return true;
      },
      getSaveLang: function getSaveLang() {
        return cc.sys.localStorage.getItem("__gamesave-language");
      },
      t: function t(key, opt) {
        return polyglot.t(key, opt);
      }
    };
    cc._RF.pop();
  }, {
    polyglot: "polyglot"
  } ],
  iap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd2d23erX5DoZQTcn3I9Q2m", "iap");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IAP = function() {
      function IAP() {}
      IAP.init = function(jsonConfig) {
        if (cc.sys.isMobile) {
          this.listener = new IAPListener();
          this.setListener(this.listener);
          sdkbox.IAP.init(jsonConfig);
        }
      };
      IAP.setDebug = function(debug) {
        cc.sys.isMobile && sdkbox.IAP.setDebug(debug);
      };
      IAP.purchase = function(name) {
        cc.sys.isMobile && sdkbox.IAP.purchase(name);
      };
      IAP.refresh = function() {
        cc.sys.isMobile && sdkbox.IAP.refresh();
      };
      IAP.restore = function() {
        cc.sys.isMobile && sdkbox.IAP.restore();
      };
      IAP.enableUserSideVerification = function(enable) {
        cc.sys.isMobile && sdkbox.IAP.enableUserSideVerification(enable);
      };
      IAP.isAutoFinishTransaction = function() {
        if (cc.sys.isMobile) return sdkbox.IAP.isAutoFinishTransaction();
      };
      IAP.setAutoFinishTransaction = function(enable) {
        cc.sys.isMobile && sdkbox.IAP.setAutoFinishTransaction(enable);
      };
      IAP.finishTransaction = function(productid) {
        cc.sys.isMobile && sdkbox.IAP.finishTransaction(productid);
      };
      IAP.fetchStorePromotionOrder = function() {
        cc.sys.isMobile && sdkbox.IAP.fetchStorePromotionOrder();
      };
      IAP.updateStorePromotionOrder = function(productName) {
        cc.sys.isMobile && sdkbox.IAP.updateStorePromotionOrder(productName);
      };
      IAP.fetchStorePromotionVisibility = function(productName) {
        cc.sys.isMobile && sdkbox.IAP.fetchStorePromotionVisibility(productName);
      };
      IAP.updateStorePromotionVisibility = function(productName, visibility) {
        cc.sys.isMobile && sdkbox.IAP.updateStorePromotionVisibility(productName, visibility);
      };
      IAP.getPurchaseHistory = function() {
        cc.sys.isMobile && sdkbox.IAP.getPurchaseHistory();
      };
      IAP.getInitializedErrMsg = function() {
        if (cc.sys.isMobile) return sdkbox.IAP.getInitializedErrMsg();
      };
      IAP.requestUpdateTransaction = function() {
        cc.sys.isMobile && sdkbox.IAP.requestUpdateTransaction();
      };
      IAP.setListener = function(listener) {
        cc.sys.isMobile && sdkbox.IAP.setListener(listener);
      };
      IAP.removeListener = function() {
        cc.sys.isMobile && sdkbox.IAP.removeListener();
      };
      return IAP;
    }();
    exports.IAP = IAP;
    var IAPListener = function() {
      function IAPListener() {}
      IAPListener.prototype.onInitialized = function(success) {
        cc.log("iap onInitialized: " + success);
      };
      IAPListener.prototype.onSuccess = function(product) {
        cc.log("iap success: " + product);
      };
      IAPListener.prototype.onFailure = function(product, msg) {
        cc.log("iap failed: " + product + " msg: " + msg);
        cc.log(JSON.stringify(product));
      };
      IAPListener.prototype.onCanceled = function(product) {
        cc.log("iap cancel: " + product);
      };
      IAPListener.prototype.onRestored = function(product) {
        cc.log("iap restored: " + product);
      };
      IAPListener.prototype.onProductRequestSuccess = function(products) {
        cc.log("iap product request success: " + JSON.stringify(products));
      };
      IAPListener.prototype.onProductRequestFailure = function(msg) {
        cc.log("iap product request failed: " + msg);
      };
      IAPListener.prototype.onRestoreComplete = function(ok, msg) {
        cc.log("iap restore complete: " + ok + "msg: " + msg);
      };
      IAPListener.prototype.onShouldAddStorePayment = function(productName) {
        cc.log("iap should add store payment: " + productName);
      };
      IAPListener.prototype.onFetchStorePromotionOrder = function(productName, error) {
        cc.log("iap fetch store promotion order: " + productName + " error: " + error);
      };
      IAPListener.prototype.onFetchStorePromotionVisibility = function(productName, visibility, error) {
        cc.log("iap fetch store promotion visibility: " + productName + " visibility: " + visibility + " error: " + error);
      };
      IAPListener.prototype.onUpdateStorePromotionOrder = function(error) {
        cc.log("iap update store promotion order: " + error);
      };
      IAPListener.prototype.onUpdateStorePromotionVisibility = function(error) {
        cc.log("iap update store promotion visibility: " + error);
      };
      IAPListener.prototype.onPurchaseHistory = function(purchases) {
        cc.log("iap purchase history: " + purchases);
      };
      IAPListener.prototype.onConsumed = function(product, error) {
        cc.log("iap on consumed: " + product + " error: " + error);
      };
      IAPListener.prototype.onDeferred = function(product) {
        cc.log("iap deferred: " + product);
      };
      return IAPListener;
    }();
    cc._RF.pop();
  }, {} ],
  "level-select-item": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa473S/lDFFhpZYJWaJoNO6", "level-select-item");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelSelectItem = function(_super) {
      __extends(LevelSelectItem, _super);
      function LevelSelectItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lockSprite = null;
        _this.unlockSprite = null;
        _this.star = [];
        _this.lblName = null;
        _this._levelId = 0;
        return _this;
      }
      LevelSelectItem.prototype.init = function(levelId, numofStar, unlock, onClickCallBack) {
        var _this = this;
        this._levelId = levelId;
        this.lblName.string = levelId.toString();
        var button = this.getComponent(cc.Button);
        unlock ? this.unlock(numofStar) : this.lock();
        button.node.on("click", function() {
          onClickCallBack && onClickCallBack(_this._levelId);
        });
      };
      LevelSelectItem.prototype.lock = function() {
        this.getComponent(cc.Button).interactable = false;
        this.lockSprite.active = true;
        this.unlockSprite.active = false;
        this.lblName.node.color = new cc.Color(242, 242, 242);
      };
      LevelSelectItem.prototype.unlock = function(nOStar) {
        this.getComponent(cc.Button).interactable = true;
        this.unlockSprite.active = true;
        this.lockSprite.active = false;
        nOStar > 1 && nOStar < 4 && (this.star[nOStar - 1].active = true);
        this.lblName.node.color = new cc.Color(146, 234, 64);
      };
      __decorate([ property(cc.Node) ], LevelSelectItem.prototype, "lockSprite", void 0);
      __decorate([ property(cc.Node) ], LevelSelectItem.prototype, "unlockSprite", void 0);
      __decorate([ property([ cc.Node ]) ], LevelSelectItem.prototype, "star", void 0);
      __decorate([ property(cc.Label) ], LevelSelectItem.prototype, "lblName", void 0);
      LevelSelectItem = __decorate([ ccclass ], LevelSelectItem);
      return LevelSelectItem;
    }(cc.Component);
    exports.default = LevelSelectItem;
    cc._RF.pop();
  }, {} ],
  level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdc85TTB+dDxp8e635otRq9", "level");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Level = function() {
      function Level() {
        this.currentLvl = 1;
        this.totalNongNoc = 0;
        this.stars = [];
        this.stars_progressValue = [ 0, 0, 0 ];
        this.scoresMultiply = [];
        this.lvlTotalScore = 0;
        this.currentStarIndex = 0;
      }
      Level_1 = Level;
      Object.defineProperty(Level, "Instance", {
        get: function() {
          null == Level_1._levelInstance && (Level_1._levelInstance = new Level_1());
          return Level_1._levelInstance;
        },
        enumerable: true,
        configurable: true
      });
      Level.load = function() {
        if (Level_1.isLoad) return;
        cc.loader.loadRes("maps/maps", cc.JsonAsset, function(error, assets) {
          Level_1._jsonContent = assets.json;
          Level_1.isLoad = true;
          event_manager_1.default.instance.dispatch("Level_initialized");
        });
      };
      Level.prototype.createMap = function(root, foodPrefab, catPrefab, turtlePrefab, snakePrefab, frogPrefab) {
        var _this = this;
        this.lvlTotalScore = 0;
        var level = Level_1._jsonContent["Level" + this.currentLvl];
        this.totalNongNoc = level["nongnoc"];
        this.stars = level["star"];
        this.scoresMultiply = level["score"];
        var foods = level["foods"];
        foods.length > 0 && foods.forEach(function(f) {
          _this.spawnObject(root, foodPrefab, f["x"], f["y"]);
        });
        var frogs = level["frogs"];
        frogs.length > 0 && frogs.forEach(function(f) {
          _this.spawnObject(root, frogPrefab, f["x"], f["y"]);
        });
        var snakes = level["snakes"];
        snakes.length > 0 && snakes.forEach(function(s) {
          _this.spawnObject(root, snakePrefab, s["x"], s["y"]);
        });
        var turtles = level["turtles"];
        turtles.length > 0 && snakes.forEach(function(t) {
          _this.spawnObject(root, turtlePrefab, t["x"], t["y"]);
        });
        var cats = level["cats"];
        cats.length > 0 && cats.forEach(function(c) {
          _this.spawnObject(root, catPrefab, c["x"], c["y"]);
        });
      };
      Level.prototype.spawnObject = function(gameRoot, prefabInst, x, y) {
        var node = cc.instantiate(prefabInst);
        node.setPosition(x, y);
        gameRoot.addChild(node);
      };
      Level.prototype.calculateNongNocScore = function(serial) {
        if (0 == serial) return 0;
        var totalStar = this.stars.length;
        for (var i = 0; i < totalStar; i++) if (serial <= this.stars[i]) return 10 * this.scoresMultiply[i];
        return 10 * this.scoresMultiply[this.scoresMultiply.length - 1];
      };
      Level.prototype.addGameScore = function(serial) {
        this.lvlTotalScore += this.calculateNongNocScore(serial);
        this.stars_progressValue[this.currentStarIndex] = serial / this.stars[this.currentStarIndex];
        serial > this.stars[this.currentStarIndex] && this.currentStarIndex < this.stars.length - 1 && this.currentStarIndex++;
        return this.lvlTotalScore;
      };
      Level.prototype.getTotalScore = function() {
        return this.lvlTotalScore;
      };
      Level.prototype.getTotalStart = function() {
        if (this.stars.length < 1) {
          var level = Level_1._jsonContent["Level" + this.currentLvl];
          this.stars = level["star"];
        }
        return this.stars.length;
      };
      Level.prototype.numOffTadpoles2Pass = function() {
        var r = 0;
        this.stars.forEach(function(s) {
          r += s;
        });
        return r;
      };
      var Level_1;
      Level.isLoad = false;
      Level.NumOfLevel = 0;
      Level._levelInstance = null;
      Level._jsonContent = null;
      Level = Level_1 = __decorate([ ccclass ], Level);
      return Level;
    }();
    exports.default = Level;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager"
  } ],
  "life-control": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb09eAGVCpDHpjU/l6hbEZm", "life-control");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var localstorage_1 = require("../../core/localstorage");
    var player_ref_1 = require("../../player-ref");
    var event_manager_1 = require("../../core/event-manager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LifeControl = function(_super) {
      __extends(LifeControl, _super);
      function LifeControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lifeLbl = null;
        return _this;
      }
      LifeControl_1 = LifeControl;
      LifeControl.prototype.onLoad = function() {
        var day = Math.floor(Date.now() / 864e5);
        var saveDay = parseInt(localstorage_1.default.getItem("saveDay", "0"));
        if (day > saveDay) {
          player_ref_1.default.current.life = 3;
          localstorage_1.default.setItem("saveDay", day.toString());
        }
        this.lifeLbl.string = player_ref_1.default.current.life.toString();
      };
      LifeControl.prototype.start = function() {
        event_manager_1.default.instance.register(LifeControl_1.EVT_LIFE_CHANGE, this.onLifeChanged, this);
      };
      LifeControl.prototype.onLifeChanged = function() {
        this.lifeLbl.string = player_ref_1.default.current.life.toString();
      };
      LifeControl.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      var LifeControl_1;
      LifeControl.EVT_LIFE_CHANGE = "livechange";
      __decorate([ property(cc.Label) ], LifeControl.prototype, "lifeLbl", void 0);
      LifeControl = LifeControl_1 = __decorate([ ccclass ], LifeControl);
      return LifeControl;
    }(cc.Component);
    exports.default = LifeControl;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager",
    "../../core/localstorage": "localstorage",
    "../../player-ref": "player-ref"
  } ],
  loader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9353alEtjFNbItXpbB1+rL+", "loader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var global_var_1 = require("./global-var");
    var player_ref_1 = require("../player-ref");
    var event_manager_1 = require("./event-manager");
    var sound_manager_1 = require("./sound-manager");
    var localization_1 = require("./localization");
    var analytics_1 = require("../sdkbox-wrapper/analytics");
    var admob_1 = require("../sdkbox-wrapper/admob");
    var iap_1 = require("../sdkbox-wrapper/iap");
    var level_1 = require("../game/components/level");
    var facebook_1 = require("../sdkbox-wrapper/facebook");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loader = function(_super) {
      __extends(Loader, _super);
      function Loader() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextScene = "main-menu";
        _this.targetLoad = "";
        _this._loadInstances = {
          PlayerRef: false,
          Sound: false,
          LevelInfo: false
        };
        _this._loadGame = false;
        return _this;
      }
      Loader_1 = Loader;
      Loader.prototype.onLoad = function() {
        if (false == Loader_1.loaded) if ("loader" != this.getCurrentSceneName()) {
          var nextScene = "" != this.targetLoad ? this.targetLoad : this.getCurrentSceneName();
          global_var_1.default.instance.set("loader-nextScene", nextScene);
          cc.director.loadScene("loader");
        } else {
          Loader_1.loaded = true;
          var next = global_var_1.default.instance.get("loader-nextScene", true);
          this.nextScene = null != next ? next : this.nextScene;
        }
      };
      Loader.prototype.start = function() {
        "loader" == this.getCurrentSceneName() && this.initLoader();
      };
      Loader.prototype.initLoader = function() {
        var _this = this;
        event_manager_1.default.instance.registerOnce("PlayerRef-init", function() {
          _this._loadInstances["PlayerRef"] = true;
        }, this);
        event_manager_1.default.instance.registerOnce("Sound_initialized", function() {
          _this._loadInstances["Sound"] = true;
        }, this);
        event_manager_1.default.instance.registerOnce("Level_initialized", function() {
          _this._loadInstances["LevelInfo"] = true;
          player_ref_1.default.current;
        }, this);
        level_1.default.load();
        sound_manager_1.default.instance.init();
        null == localization_1.default.getCurrentLanguage() && localization_1.default.setLanguage(cc.sys.language);
        iap_1.IAP.init();
        analytics_1.Analytics.init();
        admob_1.AdmodAds.init();
        facebook_1.FaceBook.init();
        analytics_1.Analytics.setScreenName("Loader");
      };
      Loader.prototype.update = function(dt) {
        player_ref_1.default.current.initialized && (this._loadInstances["PlayerRef"] = true);
        var allLoaded = true;
        for (var inst in this._loadInstances) if (false == this._loadInstances[inst]) {
          allLoaded = false;
          break;
        }
        if (allLoaded && !this._loadGame) {
          this._loadGame = true;
          cc.director.loadScene(this.nextScene);
        }
      };
      Loader.prototype.getCurrentSceneName = function() {
        var scene = "";
        cc.game._sceneInfos.forEach(function(element) {
          if (element.uuid == cc.director._scene._id) {
            scene = element.url;
            scene = scene.substring(scene.lastIndexOf("/") + 1).match(/[^\.]+/)[0];
          }
        });
        return scene;
      };
      var Loader_1;
      Loader.loaded = false;
      __decorate([ property ], Loader.prototype, "targetLoad", void 0);
      Loader = Loader_1 = __decorate([ ccclass ], Loader);
      return Loader;
    }(cc.Component);
    exports.default = Loader;
    cc._RF.pop();
  }, {
    "../game/components/level": "level",
    "../player-ref": "player-ref",
    "../sdkbox-wrapper/admob": "admob",
    "../sdkbox-wrapper/analytics": "analytics",
    "../sdkbox-wrapper/facebook": "facebook",
    "../sdkbox-wrapper/iap": "iap",
    "./event-manager": "event-manager",
    "./global-var": "global-var",
    "./localization": "localization",
    "./sound-manager": "sound-manager"
  } ],
  localization: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71238deafNK+p8wUFQbZvd1", "localization");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var i18n = require("i18n");
    var Localization = function() {
      function Localization() {}
      Localization.get = function(key) {
        var text = i18n.t(key);
        "" == text && (text = "N/A");
        return text;
      };
      Localization.setLanguage = function(lang) {
        if (i18n.init(lang)) {
          var rootNodes = cc.director.getScene().children;
          var allLocalizedLabels = [];
          for (var i = 0; i < rootNodes.length; ++i) {
            var labels = rootNodes[i].getComponentsInChildren("LabelLocalized");
            Array.prototype.push.apply(allLocalizedLabels, labels);
          }
          for (var i = 0; i < allLocalizedLabels.length; ++i) {
            var label = allLocalizedLabels[i];
            label.updateLabel();
          }
        }
      };
      Localization.getCurrentLanguage = function() {
        return i18n.getSaveLang();
      };
      return Localization;
    }();
    exports.default = Localization;
    cc._RF.pop();
  }, {
    i18n: "i18n"
  } ],
  localstorage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad4eaAHW+xHZqqJ75K4VCn4", "localstorage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require("../config");
    var LocalStorage = function() {
      function LocalStorage() {}
      LocalStorage.setItem = function(key, value) {
        cc.sys.localStorage.setItem(this._key(key), value);
      };
      LocalStorage.getItem = function(key, _default) {
        var val = cc.sys.localStorage.getItem(this._key(key));
        return val || _default;
      };
      LocalStorage.removeItem = function(key) {
        cc.sys.localStorage.removeItem(this._key(key));
      };
      LocalStorage._key = function(key) {
        return config_1.default.PROJECT_ID + key;
      };
      return LocalStorage;
    }();
    exports.default = LocalStorage;
    cc._RF.pop();
  }, {
    "../config": "config"
  } ],
  "main-menu": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ed0aJhOqZCxoUZ/Kdztn4n", "main-menu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var analytics_1 = require("../../sdkbox-wrapper/analytics");
    var admob_1 = require("../../sdkbox-wrapper/admob");
    var player_ref_1 = require("../../player-ref");
    var popup_1 = require("../../core/popup");
    var event_manager_1 = require("../../core/event-manager");
    var life_control_1 = require("./life-control");
    var loader_1 = require("../../core/loader");
    var level_1 = require("../components/level");
    var level_select_item_1 = require("./level-select-item");
    var iap_1 = require("../../sdkbox-wrapper/iap");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainMenu = function(_super) {
      __extends(MainMenu, _super);
      function MainMenu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.levelSelectRoot = null;
        _this.levelSelectItemPrefab = null;
        return _this;
      }
      MainMenu.prototype.start = function() {
        if (!loader_1.default.loaded) return;
        analytics_1.Analytics.setScreenName("Main Menu");
        event_manager_1.default.instance.register(admob_1.AdmodAds.EVT_AD_REWARD, this.onAdsReward, this);
        this.buildLvlSelecteBoard();
      };
      MainMenu.prototype.buildLvlSelecteBoard = function() {
        var _this = this;
        var allLevels = player_ref_1.default.current.levelAllSetting;
        allLevels.forEach(function(lvl) {
          var node = cc.instantiate(_this.levelSelectItemPrefab);
          node.getComponent(level_select_item_1.default).init(lvl.id + 1, lvl.starCollect.length, lvl.unlocked, _this.onLevelButtonClick.bind(_this));
          _this.levelSelectRoot.addChild(node);
        });
      };
      MainMenu.prototype.onLevelButtonClick = function(lvlID) {
        player_ref_1.default.current.life = 1;
        if (player_ref_1.default.current.life > 0) {
          player_ref_1.default.current.life--;
          event_manager_1.default.instance.dispatch(life_control_1.default.EVT_LIFE_CHANGE);
          level_1.default.Instance.currentLvl = lvlID;
          cc.director.loadScene("game");
        } else popup_1.default.instance.showConfirmPopup("You are out off lives, do you want some more?", "View Ad", "Buy", function() {
          cc.sys.isMobile ? admob_1.AdmodAds.show("reward") : player_ref_1.default.current.life++;
        }, function() {
          player_ref_1.default.current.life++;
        });
      };
      MainMenu.prototype.onButtonBuy = function() {
        iap_1.IAP.purchase("topup1");
      };
      MainMenu.prototype.onButtonTest = function() {};
      MainMenu.prototype.onAdsReward = function(name, currency, amount) {
        player_ref_1.default.current.life += 2;
        event_manager_1.default.instance.dispatch(life_control_1.default.EVT_LIFE_CHANGE);
      };
      MainMenu.prototype.onDestroy = function() {
        event_manager_1.default.instance.unregisterTarget(this);
      };
      __decorate([ property(cc.Node) ], MainMenu.prototype, "levelSelectRoot", void 0);
      __decorate([ property(cc.Prefab) ], MainMenu.prototype, "levelSelectItemPrefab", void 0);
      MainMenu = __decorate([ ccclass ], MainMenu);
      return MainMenu;
    }(cc.Component);
    exports.default = MainMenu;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager",
    "../../core/loader": "loader",
    "../../core/popup": "popup",
    "../../player-ref": "player-ref",
    "../../sdkbox-wrapper/admob": "admob",
    "../../sdkbox-wrapper/analytics": "analytics",
    "../../sdkbox-wrapper/iap": "iap",
    "../components/level": "level",
    "./level-select-item": "level-select-item",
    "./life-control": "life-control"
  } ],
  "nong-noc": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "033e2MRLG9Fc6RPLG52REHT", "nong-noc");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("../../core/event-manager");
    var collider_def_1 = require("../collider-def");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var State;
    (function(State) {
      State[State["NORMAL"] = 0] = "NORMAL";
      State[State["FORWARD"] = 1] = "FORWARD";
      State[State["BACKWARD"] = 2] = "BACKWARD";
      State[State["GOAL"] = 3] = "GOAL";
    })(State || (State = {}));
    var NongNoc = function(_super) {
      __extends(NongNoc, _super);
      function NongNoc() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.normalSpeed = 10;
        _this.forwardSpeed = 50;
        _this.backwardSpeed = 30;
        _this.direction = 0;
        _this.state = State.NORMAL;
        _this.speed = _this.normalSpeed;
        _this.target = null;
        _this.rigidbody = null;
        return _this;
      }
      NongNoc_1 = NongNoc;
      NongNoc.prototype.start = function() {
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.updateMove(this.direction, this.speed);
      };
      NongNoc.prototype.init = function(dir) {
        this.direction = dir;
        this.node.angle = this.direction - 90;
      };
      NongNoc.prototype.updateMove = function(direction, speed) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.direction = direction;
          _this.speed = speed;
          var rad = cc.misc.degreesToRadians(_this.direction);
          var dx = Math.cos(rad) * _this.speed;
          var dy = Math.sin(rad) * _this.speed;
          _this.node.angle = _this.direction - 90;
          _this.rigidbody.linearVelocity = cc.v2(dx, dy);
        });
      };
      NongNoc.prototype.update = function(dt) {
        if (this.state != State.GOAL) {
          var vel = this.rigidbody.linearVelocity;
          if (0 != vel.x || 0 != vel.y) {
            var dir = cc.misc.radiansToDegrees(Math.atan2(vel.y, vel.x));
            dir < 0 && (dir = 360 + dir);
            this.node.angle = dir - 90;
            this.direction = dir;
          }
          if (this.target && Math.abs(this.node.x - this.target.x) < 5 && Math.abs(this.node.y - this.target.y)) {
            this.target = null;
            this.updateMove(this.direction, this.normalSpeed);
          }
          if (this.node.x < 0 || this.node.x > 720 || this.node.y < 0 || this.node.y > 1280) {
            event_manager_1.default.instance.dispatch(NongNoc_1.EVT_ESCAPE);
            this.node.removeFromParent();
          }
        }
      };
      NongNoc.prototype.onBeginContact = function(contact, self, other) {
        var _this = this;
        if (this.state == State.GOAL) return;
        if (other.node.groupIndex == collider_def_1.CollidGroup.CONTROL) if (other.tag == collider_def_1.CollidTag.CONTROL) {
          var target = other.node.position;
          var targetVec = this.node.position.sub(target);
          var targetAngle = cc.misc.radiansToDegrees(Math.atan2(targetVec.y, targetVec.x));
          targetAngle < 0 && (targetAngle = 360 + targetAngle);
          this.target = target;
          Math.abs(this.direction - targetAngle) > 90 ? this.speed = this.backwardSpeed : this.speed = this.forwardSpeed;
          this.direction = targetAngle;
          this.updateMove(this.direction, this.speed);
        } else {
          this.state = State.GOAL;
          this.scheduleOnce(function() {
            _this.rigidbody.type = cc.RigidBodyType.Static;
            var target = other.node.position;
            var targetVec = target.sub(_this.node.position);
            var targetAngle = cc.misc.radiansToDegrees(Math.atan2(targetVec.y, targetVec.x));
            targetAngle < 0 && (targetAngle = 360 + targetAngle);
            _this.node.angle = targetAngle - 90;
          });
          this.node.runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, 360, 1200).easing(cc.easeSineOut()), cc.callFunc(function() {
            event_manager_1.default.instance.dispatch(NongNoc_1.EVT_GOAL);
            _this.node.removeFromParent();
          })));
        } else if (other.node.groupIndex == collider_def_1.CollidGroup.TADPOLE) {
          this.target = null;
          this.updateMove(this.direction, this.normalSpeed);
        } else if (other.node.groupIndex == collider_def_1.CollidGroup.ENEMY) {
          event_manager_1.default.instance.dispatch(NongNoc_1.EVT_DEATH);
          this.node.removeFromParent();
        }
      };
      var NongNoc_1;
      NongNoc.EVT_ESCAPE = "nn-escape";
      NongNoc.EVT_DEATH = "nn-death";
      NongNoc.EVT_GOAL = "nn-goal";
      __decorate([ property() ], NongNoc.prototype, "normalSpeed", void 0);
      __decorate([ property() ], NongNoc.prototype, "forwardSpeed", void 0);
      __decorate([ property() ], NongNoc.prototype, "backwardSpeed", void 0);
      NongNoc = NongNoc_1 = __decorate([ ccclass ], NongNoc);
      return NongNoc;
    }(cc.Component);
    exports.default = NongNoc;
    cc._RF.pop();
  }, {
    "../../core/event-manager": "event-manager",
    "../collider-def": "collider-def"
  } ],
  "player-ref": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a529iwQnlGbq3EfIYgrRWO", "player-ref");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_manager_1 = require("./core/event-manager");
    var localstorage_1 = require("./core/localstorage");
    var PlayerRef = function() {
      function PlayerRef() {
        this.initialized = false;
        this._levelSettings = [];
        this._firstTime = "false";
        this._id = "";
        this._name = "";
        this._life = 3;
      }
      Object.defineProperty(PlayerRef, "current", {
        get: function() {
          if (null == this._current) {
            this._current = new PlayerRef();
            this._current.init();
          }
          return this._current;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PlayerRef.prototype, "levelAllSetting", {
        get: function() {
          return this._levelSettings;
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.init = function() {
        this._firstTime = localstorage_1.default.getItem("first-time", "true");
        if ("true" == this._firstTime) {
          localstorage_1.default.setItem("first-time", "false");
          for (var i = 0; i < 16; i++) {
            var l = {
              id: i,
              unlocked: 0 == i,
              starCollect: []
            };
            this._levelSettings.push(l);
            localstorage_1.default.setItem("lvl-setting", JSON.stringify(this._levelSettings));
          }
        } else {
          var tmp = localstorage_1.default.getItem("lvl-setting", null);
          null != tmp && (this._levelSettings = JSON.parse(tmp));
        }
        this._name = localstorage_1.default.getItem("user-name", "NickName");
        this._life = parseInt(localstorage_1.default.getItem("user-life", "3"));
        cc.log("player init");
        event_manager_1.default.instance.dispatch("PlayerRef-init", "success");
        this.initialized = true;
      };
      Object.defineProperty(PlayerRef.prototype, "id", {
        get: function() {
          return this._id;
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef.prototype.setId = function(id) {
        this._id = id;
      };
      Object.defineProperty(PlayerRef.prototype, "name", {
        get: function() {
          return this._name;
        },
        set: function(name) {
          this._name = name;
          localstorage_1.default.setItem("user-name", name);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PlayerRef.prototype, "life", {
        get: function() {
          return this._life;
        },
        set: function(life) {
          this._life = life;
          localstorage_1.default.setItem("user-life", life.toString());
        },
        enumerable: true,
        configurable: true
      });
      PlayerRef._current = null;
      return PlayerRef;
    }();
    exports.default = PlayerRef;
    cc._RF.pop();
  }, {
    "./core/event-manager": "event-manager",
    "./core/localstorage": "localstorage"
  } ],
  polyglot: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "fc9daZr2NhGiIHGcSpiJP7z", "polyglot");
      "use strict";
      var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      (function(root, factory) {
        "function" === typeof define && define.amd ? define([], function() {
          return factory(root);
        }) : "object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = factory(root) : root.Polyglot = factory(root);
      })("undefined" !== typeof global ? global : void 0, function(root) {
        var replace = String.prototype.replace;
        function Polyglot(options) {
          options = options || {};
          this.phrases = {};
          this.extend(options.phrases || {});
          this.currentLocale = options.locale || "en";
          this.allowMissing = !!options.allowMissing;
          this.warn = options.warn || warn;
        }
        Polyglot.VERSION = "1.0.0";
        Polyglot.prototype.locale = function(newLocale) {
          newLocale && (this.currentLocale = newLocale);
          return this.currentLocale;
        };
        Polyglot.prototype.extend = function(morePhrases, prefix) {
          var phrase;
          for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.extend(phrase, key) : this.phrases[key] = phrase;
          }
        };
        Polyglot.prototype.unset = function(morePhrases, prefix) {
          var phrase;
          if ("string" === typeof morePhrases) delete this.phrases[morePhrases]; else for (var key in morePhrases) if (morePhrases.hasOwnProperty(key)) {
            phrase = morePhrases[key];
            prefix && (key = prefix + "." + key);
            "object" === ("undefined" === typeof phrase ? "undefined" : _typeof(phrase)) ? this.unset(phrase, key) : delete this.phrases[key];
          }
        };
        Polyglot.prototype.clear = function() {
          this.phrases = {};
        };
        Polyglot.prototype.replace = function(newPhrases) {
          this.clear();
          this.extend(newPhrases);
        };
        Polyglot.prototype.t = function(key, options) {
          var phrase, result;
          options = null == options ? {} : options;
          "number" === typeof options && (options = {
            smart_count: options
          });
          if ("string" === typeof this.phrases[key]) phrase = this.phrases[key]; else if ("string" === typeof options._) phrase = options._; else if (this.allowMissing) phrase = key; else {
            this.warn('Missing translation for key: "' + key + '"');
            result = key;
          }
          if ("string" === typeof phrase) {
            options = clone(options);
            result = choosePluralForm(phrase, this.currentLocale, options.smart_count);
            result = interpolate(result, options);
          }
          return result;
        };
        Polyglot.prototype.has = function(key) {
          return key in this.phrases;
        };
        var delimeter = "||||";
        var pluralTypes = {
          chinese: function chinese(n) {
            return 0;
          },
          german: function german(n) {
            return 1 !== n ? 1 : 0;
          },
          french: function french(n) {
            return n > 1 ? 1 : 0;
          },
          russian: function russian(n) {
            return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          czech: function czech(n) {
            return 1 === n ? 0 : n >= 2 && n <= 4 ? 1 : 2;
          },
          polish: function polish(n) {
            return 1 === n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
          },
          icelandic: function icelandic(n) {
            return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
          }
        };
        var pluralTypeToLanguages = {
          chinese: [ "fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh" ],
          german: [ "da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv" ],
          french: [ "fr", "tl", "pt-br" ],
          russian: [ "hr", "ru" ],
          czech: [ "cs", "sk" ],
          polish: [ "pl" ],
          icelandic: [ "is" ]
        };
        function langToTypeMap(mapping) {
          var type, langs, l, ret = {};
          for (type in mapping) if (mapping.hasOwnProperty(type)) {
            langs = mapping[type];
            for (l in langs) ret[langs[l]] = type;
          }
          return ret;
        }
        var trimRe = /^\s+|\s+$/g;
        function trim(str) {
          return replace.call(str, trimRe, "");
        }
        function choosePluralForm(text, locale, count) {
          var ret, texts, chosenText;
          if (null != count && text) {
            texts = text.split(delimeter);
            chosenText = texts[pluralTypeIndex(locale, count)] || texts[0];
            ret = trim(chosenText);
          } else ret = text;
          return ret;
        }
        function pluralTypeName(locale) {
          var langToPluralType = langToTypeMap(pluralTypeToLanguages);
          return langToPluralType[locale] || langToPluralType.en;
        }
        function pluralTypeIndex(locale, count) {
          return pluralTypes[pluralTypeName(locale)](count);
        }
        var dollarRegex = /\$/g;
        var dollarBillsYall = "$$$$";
        function interpolate(phrase, options) {
          for (var arg in options) if ("_" !== arg && options.hasOwnProperty(arg)) {
            var replacement = options[arg];
            "string" === typeof replacement && (replacement = replace.call(options[arg], dollarRegex, dollarBillsYall));
            phrase = replace.call(phrase, new RegExp("%\\{" + arg + "\\}", "g"), replacement);
          }
          return phrase;
        }
        function warn(message) {
          root.console && root.console.warn && root.console.warn("WARNING: " + message);
        }
        function clone(source) {
          var ret = {};
          for (var prop in source) ret[prop] = source[prop];
          return ret;
        }
        return Polyglot;
      });
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2517+l3BlDPqhUWyhQt7/S", "popup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Popup = function(_super) {
      __extends(Popup, _super);
      function Popup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dialogPopup = null;
        _this.waitingPopup = null;
        _this.winPopup = null;
        _this.waitingPopupNode = null;
        return _this;
      }
      Popup_1 = Popup;
      Object.defineProperty(Popup, "instance", {
        get: function() {
          if (this._instance) return this._instance;
          cc.error("Popup does not init yet, this need to be init in loader");
          return null;
        },
        enumerable: true,
        configurable: true
      });
      Popup.prototype.onLoad = function() {
        Popup_1._instance = this;
        cc.game.addPersistRootNode(this.node);
        this.node.zIndex = 1e3;
      };
      Popup.prototype.showInfoPopup = function(content, closeCallback) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        blockInput.top = 0;
        blockInput.bottom = 0;
        node.getChildByName("content").getComponent(cc.Label).string = content;
        node.getChildByName("positivebutton").active = false;
        node.getChildByName("negativebutton").active = false;
        var button = node.getChildByName("okbutton").getComponent(cc.Button);
        button.node.on("click", function() {
          node.removeFromParent();
          closeCallback && closeCallback();
        });
        var closeButton = node.getChildByName("closebutton").getComponent(cc.Button);
        closeButton.node.on("click", function() {
          node.removeFromParent();
          closeCallback && closeCallback();
        });
        canvas.addChild(node);
      };
      Popup.prototype.showConfirmPopup = function(content, positiveButLabel, negativeButLabel, positiveCallback, negativeCallback) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.dialogPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        blockInput.top = 0;
        blockInput.bottom = 0;
        node.getChildByName("content").getComponent(cc.Label).string = content;
        node.getChildByName("okbutton").active = false;
        node.getChildByName("positivebutton").getChildByName("Label").getComponent(cc.Label).string = positiveButLabel;
        node.getChildByName("negativebutton").getChildByName("Label").getComponent(cc.Label).string = negativeButLabel;
        var button1 = node.getChildByName("positivebutton").getComponent(cc.Button);
        button1.node.on("click", function() {
          node.removeFromParent();
          positiveCallback && positiveCallback();
        });
        var button2 = node.getChildByName("negativebutton").getComponent(cc.Button);
        button2.node.on("click", function() {
          node.removeFromParent();
          negativeCallback && negativeCallback();
        });
        var closeButton = node.getChildByName("closebutton").getComponent(cc.Button);
        closeButton.node.on("click", function() {
          node.removeFromParent();
        });
        canvas.addChild(node);
      };
      Popup.prototype.showWaitingPopup = function(content) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.waitingPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        node.getChildByName("content").getComponentInChildren(cc.Label).string = content;
        this.waitingPopupNode = node;
        canvas.addChild(node);
      };
      Popup.prototype.showWinPopup = function(star, score, playCallback) {
        var canvas = cc.find("Canvas");
        var node = cc.instantiate(this.winPopup);
        var blockInput = node.getChildByName("blockinput").getComponent(cc.Widget);
        blockInput.target = canvas;
        blockInput.left = 0;
        blockInput.right = 0;
        blockInput.top = 0;
        blockInput.bottom = 0;
        var starAnim = node.getChildByName("star_anim").getComponent(sp.Skeleton);
        node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
          starAnim.setAnimation(0, "act_star_" + star, false);
        })));
        var button1 = node.getChildByName("okbutton").getComponent(cc.Button);
        button1.node.on("click", function() {
          node.removeFromParent();
          playCallback && playCallback();
        });
        canvas.addChild(node);
      };
      Popup.prototype.hideWaitingPopup = function() {
        this.waitingPopupNode.removeFromParent();
      };
      Popup.prototype.showNotify = function(content, duration) {
        void 0 === duration && (duration = 3);
        var node = cc.instantiate(this.waitingPopup);
        node.getChildByName("blockinput").removeFromParent();
        node.getChildByName("content").getComponentInChildren(cc.Label).string = content;
        cc.find("Canvas").addChild(node);
        this.scheduleOnce(function() {
          node.removeFromParent();
        }, duration);
      };
      var Popup_1;
      Popup._instance = null;
      __decorate([ property(cc.Prefab) ], Popup.prototype, "dialogPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "waitingPopup", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "winPopup", void 0);
      Popup = Popup_1 = __decorate([ ccclass ], Popup);
      return Popup;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {} ],
  ran: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "beed4aKDypIT5rO0+UX4om8", "ran");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var enemy_1 = require("./enemy");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Ran = function(_super) {
      __extends(Ran, _super);
      function Ran() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Ran.prototype.init = function() {
        this.speed = 15;
        this.setDir(360 * Math.random());
        this.schedule(this.randomNewDirection, 3);
        this.playAnim("snake_swiming", true);
        return true;
      };
      Ran.prototype.updateMove = function(dt) {
        var rad = cc.misc.degreesToRadians(this.direction);
        var dx = Math.cos(rad) * this.speed;
        var dy = Math.sin(rad) * this.speed;
        this.node.angle = this.direction - 90;
        this.rigidbody.linearVelocity = cc.v2(dx, dy);
      };
      Ran = __decorate([ ccclass ], Ran);
      return Ran;
    }(enemy_1.default);
    exports.default = Ran;
    cc._RF.pop();
  }, {
    "./enemy": "enemy"
  } ],
  rua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ad4cHo2NFC+KpCg5CA+gBA", "rua");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var enemy_1 = require("./enemy");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Rua = function(_super) {
      __extends(Rua, _super);
      function Rua() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Rua.prototype.init = function() {
        this.speed = 15;
        this.setDir(360 * Math.random());
        this.schedule(this.randomNewDirection, 3);
        this.playAnim("turtle_swiming", true);
        return true;
      };
      Rua.prototype.updateMove = function(dt) {
        var rad = cc.misc.degreesToRadians(this.direction);
        var dx = Math.cos(rad) * this.speed;
        var dy = Math.sin(rad) * this.speed;
        this.node.angle = this.direction - 90;
        this.rigidbody.linearVelocity = cc.v2(dx, dy);
      };
      Rua = __decorate([ ccclass ], Rua);
      return Rua;
    }(enemy_1.default);
    exports.default = Rua;
    cc._RF.pop();
  }, {
    "./enemy": "enemy"
  } ],
  "sound-manager": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59e6dC1iuNE15G3c1/RKO6a", "sound-manager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
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
        this.effectEnable = true;
        this.musicEnable = true;
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
      Object.defineProperty(SoundManager.prototype, "soundEnable", {
        get: function() {
          return this.enable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setEnable = function(enable) {
        this.enable = enable;
        cc.sys.localStorage.setItem("Sound_enable", enable ? 1 : 0);
        this.setEffectEnable(enable);
        this.setMusicEnable(enable);
      };
      Object.defineProperty(SoundManager.prototype, "soundEffectEnable", {
        get: function() {
          return this.effectEnable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setEffectEnable = function(enable) {
        this.effectEnable = enable;
        cc.sys.localStorage.setItem("Sound_effect_enable", enable ? 1 : 0);
      };
      Object.defineProperty(SoundManager.prototype, "soundMusicEnable", {
        get: function() {
          return this.musicEnable;
        },
        enumerable: true,
        configurable: true
      });
      SoundManager.prototype.setMusicEnable = function(enable) {
        this.musicEnable = enable;
        cc.sys.localStorage.setItem("Sound_music_enable", enable ? 1 : 0);
      };
      SoundManager.prototype.log = function(message) {
        this.DEBUG_LOG && cc.log(message);
      };
      SoundManager.prototype.error = function(message) {
        this.DEBUG_LOG && cc.error(message);
      };
      SoundManager.prototype.init = function() {
        var _this = this;
        cc.loader.loadResDir("sounds", cc.AudioClip, function(error, assets, urls) {
          urls.length > 0 && assets.forEach(function(sound, index) {
            _this.sounds[sound.name] = sound;
          });
          _this.initialized = true;
          _this.enable = !cc.sys.localStorage.getItem("Sound_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_enable"));
          _this.effectEnable = !cc.sys.localStorage.getItem("Sound_effect_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_effect_enable"));
          _this.musicEnable = !cc.sys.localStorage.getItem("Sound_music_enable") || 1 == parseInt(cc.sys.localStorage.getItem("Sound_music_enable"));
          cc.log("sound init");
          event_manager_1.default.instance.dispatch("Sound_initialized");
        });
      };
      SoundManager.prototype.playMusic = function(clipName, loop) {
        void 0 === loop && (loop = true);
        if (!this.musicEnable || !this.initialized) return null;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play music: " + clipName);
          var id = cc.audioEngine.playMusic(this.sounds[clipName], loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playMusic - clipName: " + clipName + " not found");
        return null;
      };
      SoundManager.prototype.playEffect = function(clipName, loop) {
        void 0 === loop && (loop = false);
        if (!this.enable || !this.initialized) return null;
        clipName = clipName.toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play effect: " + clipName);
          var id = cc.audioEngine.playEffect(this.sounds[clipName], loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playEffect - clipName: " + clipName + " not found");
        return null;
      };
      SoundManager.prototype.playRandom = function(clipsName, loop, effect) {
        void 0 === loop && (loop = false);
        void 0 === effect && (effect = true);
        if (!this.enable || !this.initialized) return null;
        var idx = Math.floor(Math.random() * clipsName.length);
        var clipName = clipsName[idx].toLowerCase();
        if (this.sounds[clipName]) {
          this.log("play random: " + clipName);
          var id = null;
          id = effect ? this.playEffect(clipName, loop) : this.playMusic(clipName, loop);
          this.playingSounds[clipName] = id;
          return id;
        }
        this.error("playRandom - clipName: " + clipsName[idx] + " not found");
        return null;
      };
      SoundManager.prototype.pause = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName] && cc.audioEngine.getState(this.playingSounds[clipName]) === cc.audioEngine.AudioState.PLAYING) cc.audioEngine.pause(this.playingSounds[clipName]); else {
          this.error("Pause sound: " + clipName + " is not in playing list");
          delete this.playingSounds[clipName];
        }
      };
      SoundManager.prototype.resume = function(clipName) {
        if (!this.enable) return;
        clipName = clipName.toLowerCase();
        if (void 0 != this.playingSounds[clipName] && cc.audioEngine.getState(this.playingSounds[clipName]) === cc.audioEngine.AudioState.PAUSED) cc.audioEngine.resume(this.playingSounds[clipName]); else {
          this.error("Resume sound: " + clipName + " is not in pause list");
          delete this.playingSounds[clipName];
        }
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
      SoundManager.prototype.setMusicVolume = function(volume) {
        if (!this.musicEnable) return;
        cc.audioEngine.setMusicVolume(volume);
      };
      SoundManager.prototype.setEffectVolume = function(volume) {
        if (!this.effectEnable) return;
        cc.audioEngine.setEffectsVolume(volume);
      };
      SoundManager.prototype.getSoundId = function(clipName) {
        clipName = clipName.toLowerCase();
        return this.playingSounds[clipName];
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
  } ],
  spawner: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "535a9TEjzVJWY28Dzv4RIld", "spawner");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var nong_noc_1 = require("./components/nong-noc");
    var level_1 = require("./components/level");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Spawner = function(_super) {
      __extends(Spawner, _super);
      function Spawner() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.delayTime = 1;
        _this.nongNocPrefab = null;
        _this.gameRoot = null;
        _this.numOfNongNocWasSpawned = 0;
        return _this;
      }
      Spawner.prototype.start = function() {
        this.schedule(this.spawn.bind(this), this.delayTime);
      };
      Spawner.prototype.spawn = function() {
        if (this.numOfNongNocWasSpawned >= level_1.default.Instance.totalNongNoc) return;
        for (var i = 0; i < 5; i++) {
          var x = 20 + 680 * Math.random();
          var y = 20 + 1240 * Math.random();
          var cols = cc.director.getPhysicsManager().testAABB(cc.rect(x - 10, y - 10, 20, 20));
          if (0 == cols.length) {
            var r = 360 * Math.random();
            var node = cc.instantiate(this.nongNocPrefab);
            node.setPosition(x, y);
            node.getComponent(nong_noc_1.default).init(r);
            this.gameRoot.addChild(node);
            this.numOfNongNocWasSpawned++;
            break;
          }
        }
      };
      __decorate([ property({
        tooltip: "Dealy between 2 spawn (in second)"
      }) ], Spawner.prototype, "delayTime", void 0);
      __decorate([ property(cc.Prefab) ], Spawner.prototype, "nongNocPrefab", void 0);
      __decorate([ property(cc.Node) ], Spawner.prototype, "gameRoot", void 0);
      Spawner = __decorate([ ccclass ], Spawner);
      return Spawner;
    }(cc.Component);
    exports.default = Spawner;
    cc._RF.pop();
  }, {
    "./components/level": "level",
    "./components/nong-noc": "nong-noc"
  } ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5cfb2oIO3hIpYyXE5URmBs6", "utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RandomUnique = function() {
      function RandomUnique(length, recycle) {
        void 0 === recycle && (recycle = false);
        this.unique = [];
        this.initLength = -1;
        this.recycle = false;
        this.initLength = length;
        this.recycle = recycle;
        for (var i = 0; i < length; i++) this.unique[i] = i;
      }
      RandomUnique.prototype.random = function() {
        if (0 == this.unique.length) {
          if (!this.recycle || -1 == this.initLength) return -1;
          for (var i = 0; i < this.initLength; i++) this.unique[i] = i;
        }
        var idx = Math.floor(Math.random() * (this.unique.length - 1));
        var ret = this.unique[idx];
        this.unique.splice(idx, 1);
        return ret;
      };
      return RandomUnique;
    }();
    exports.RandomUnique = RandomUnique;
    var Constant = function() {
      function Constant() {}
      Constant.MAX_SAFE_INTEGER = 9007199254740991;
      Constant.MIN_SAFE_INTEGER = -9007199254740991;
      return Constant;
    }();
    exports.Constant = Constant;
    var Utils = function() {
      function Utils() {}
      Utils.getCurrentSceneName = function() {
        var scene = "";
        cc.game._sceneInfos.forEach(function(element) {
          if (element.uuid == cc.director._scene._id) {
            scene = element.url;
            scene = scene.substring(scene.lastIndexOf("/") + 1).match(/[^\.]+/)[0];
          }
        });
        return scene;
      };
      Utils.lerp = function(from, to, ratio) {
        ratio = ratio < 0 ? 0 : ratio;
        ratio = ratio > 1 ? 1 : ratio;
        return from + (to - from) * ratio;
      };
      Utils.genUId = function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
      };
      Utils.extend = function(obj, src) {
        if (null == src) return obj;
        null == obj && (obj = {});
        Object.keys(src).forEach(function(key) {
          obj[key] = src[key];
        });
        return obj;
      };
      Utils.randomRange = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      Utils.zeropad = function(n, d) {
        var s = n < 0 ? "-" : "";
        n < 0 && (n = -n);
        var zeroes = d - n.toString().length;
        for (var i = 0; i < zeroes; i++) s += "0";
        return s + n.toString();
      };
      return Utils;
    }();
    exports.Utils = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "config", "event-manager", "global-var", "loader", "localization", "localstorage", "popup", "sound-manager", "collider-def", "ech", "enemy", "gaumeo", "level", "nong-noc", "ran", "rua", "control", "game", "level-select-item", "life-control", "main-menu", "spawner", "player-ref", "admob", "analytics", "facebook", "iap", "utils", "LabelLocalized", "RichTextLocalized", "i18n", "polyglot" ]);