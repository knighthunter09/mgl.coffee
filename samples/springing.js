// Generated by CoffeeScript 1.7.1
(function() {
  var Bonus, Build, Floor, Spring, addFloors, scroll,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Config.title = ['SPRINGING'];

  window.initialize = function() {
    var i, _i, _results;
    Sound.sd(4321);
    this.drums = [];
    _results = [];
    for (i = _i = 1; _i <= 4; i = ++_i) {
      _results.push(this.drums.push(G.ns.d().dp()));
    }
    return _results;
  };

  window.begin = function() {
    var d, f, i, _i, _j, _k, _len, _ref, _results;
    _ref = this.drums;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      d = _ref[_i];
      d.pp;
    }
    if (G.ib) {
      new Spring;
    }
    for (i = _j = 1; _j <= 20; i = ++_j) {
      f = new Floor;
      f.p.xy(i * .05 - .025, 1 - .025);
    }
    this.scf = G.nf.dr(function() {
      if (this.cn <= 0) {
        return this.n;
      }
    }).d(function() {
      addFloors(this.cn);
      return this.cn += 1;
    });
    this.scf.cn = 0;
    this.asc = G.nf.dr(function() {
      if (this.cn <= 0) {
        return this.n;
      }
    }).d(function() {
      if (G.ib) {
        G.sc++;
      }
      return this.cn += .1;
    });
    this.asc.cn = .1;
    this.scy = 0;
    this.mpn = 0;
    Bonus.sc = 100;
    new Bonus;
    _results = [];
    for (i = _k = 1; _k <= 9; i = ++_k) {
      _results.push(new Build);
    }
    return _results;
  };

  window.update = function() {
    var bs;
    bs = G.df(2, 3);
    if (G.ib && M.ip) {
      if (this.mpn < 60) {
        this.scy += (.05 * bs - this.scy) * .05;
        this.mpn++;
      } else {
        this.scy += (.005 * bs - this.scy) * .1;
      }
    } else {
      this.scy += (.005 * bs - this.scy) * .1;
      if (this.mpn > 0) {
        this.mpn--;
      }
    }
    scroll(this.scy);
    if (G.ib && G.t === 0) {
      return G.nt('[CLICK / TOUCH] ACCEL').xy(.1, .1).d(250).al.so;
    }
  };

  scroll = function(scy) {
    A.sc([Floor, Bonus], -scy);
    A.sc(Build, -scy / 2, 0, -.5, 1.5);
    this.scf.cn -= scy;
    return this.asc.cn -= scy;
  };

  addFloors = function(ox) {
    var f, fn, i, j, n, spc, x, y, _i, _j, _results;
    ox += 1;
    spc = 0;
    for (i = _i = 1; _i <= 20; i = ++_i) {
      if (spc <= 0 && (1..rri(7)) === 1) {
        spc = 2..rri(4);
      }
      if (spc-- <= 0) {
        f = new Floor;
        f.p.xy(i * .05 - .025 + ox, 1 - .025);
      }
    }
    fn = 1..rri(3);
    _results = [];
    for (i = _j = 1; 1 <= fn ? _j <= fn : _j >= fn; i = 1 <= fn ? ++_j : --_j) {
      x = 1..rri(20);
      y = 10..rri(18);
      n = 3..rri(7);
      _results.push((function() {
        var _k, _results1;
        _results1 = [];
        for (j = _k = 1; 1 <= n ? _k <= n : _k >= n; j = 1 <= n ? ++_k : --_k) {
          f = new Floor;
          f.p.xy(x * .05 - .025 + ox, y * .05 - .025);
          _results1.push(x += 1);
        }
        return _results1;
      })());
    }
    return _results;
  };

  Spring = (function(_super) {
    __extends(Spring, _super);

    function Spring() {
      return Spring.__super__.constructor.apply(this, arguments);
    }

    Spring.prototype.i = function() {
      Spring.bs = this.ns.v(4).d();
      return Spring.ds = this.ns.v(7).d();
    };

    Spring.prototype.b = function() {
      this.d.c(C.y).rs(.04, .01, 0, .015).rt(360 / 3, 2);
      this.p.xy(.1, .5);
      this.sy = 1;
      return this.vsy = 0;
    };

    Spring.prototype.u = function() {
      this.v.y += .002;
      if (this.v.y > 0 && this.oc(Floor)) {
        this.spr();
      }
      this.vsy += (1 - this.sy) * .1;
      this.vsy *= .95;
      this.sy += this.vsy;
      this.d.sc(1, this.sy);
      if (this.p.y > 1) {
        Spring.ds.pn;
        this.np.w(0, 90).s(.05).sz(.05).n(20);
        this.r;
        return G.e;
      }
    };

    Spring.prototype.spr = function() {
      Spring.bs.p;
      this.v.y = -.033;
      return this.sy = .5;
    };

    return Spring;

  })(A);

  Floor = (function(_super) {
    __extends(Floor, _super);

    function Floor() {
      return Floor.__super__.constructor.apply(this, arguments);
    }

    Floor.prototype.b = function() {
      return this.d.c(C.g).r(.04);
    };

    Floor.prototype.u = function() {
      if (!this.p.x < -.025) {
        return this.r;
      }
    };

    return Floor;

  })(A);

  Bonus = (function(_super) {
    __extends(Bonus, _super);

    function Bonus() {
      return Bonus.__super__.constructor.apply(this, arguments);
    }

    Bonus.prototype.i = function() {
      return Bonus.gs = this.ns.v(4).d();
    };

    Bonus.prototype.b = function() {
      this.d.c(C.y).r(.03, .03, .04).rt(360 / 5, 4);
      return this.p.xy(1.025, .4.rr(.8));
    };

    Bonus.prototype.u = function() {
      this.w += 13;
      this.nt("+" + Bonus.sc).xy(this.p.x, this.p.y - .07);
      if (this.oc(Spring, (function(s) {
        return s.spr();
      }))) {
        Bonus.gs.p;
        this.np.c(C.y).n(5);
        this.nt("+" + Bonus.sc).xy(this.p.x, this.p.y - .07).v(0, -.1).d(60);
        G.sc += Bonus.sc;
        this.r;
        if (Bonus.sc < 1000) {
          Bonus.sc += 100;
        }
        new Bonus;
      }
      if (this.p.x < -.025) {
        this.r;
        if (Bonus.sc > 100) {
          Bonus.sc -= 100;
        }
        return new Bonus;
      }
    };

    return Bonus;

  })(A);

  Build = (function(_super) {
    __extends(Build, _super);

    function Build() {
      return Build.__super__.constructor.apply(this, arguments);
    }

    Build.prototype.i = function() {
      return this.dp(.5);
    };

    Build.prototype.b = function() {
      var h, w;
      w = .1.rr(.3);
      h = .4.rr(.8);
      this.d.r(w, .003, 0, -h).r(.003, h, -w / 2, -h / 2).mx;
      return this.p.xy((-.5).rr(1.5), 1);
    };

    return Build;

  })(A);

}).call(this);
