/*
Copyright (c) 2017, Cian Chambliss, Eavan Chambliss

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const THREE = require("three");
const JUSTIFY_X_PLUS = 1; 
const JUSTIFY_X_MINUS = 2; 
const JUSTIFY_Y_PLUS = 4; 
const JUSTIFY_Y_MINUS = 8; 
const JUSTIFY_Z_PLUS = 16; 
const JUSTIFY_Z_MINUS = 32; 

// Get normalized scale factors
const getScale = function (def) {
    var dx = 1, dy = 1, dz = 1;
    if (def.scale) {
        if (def.scale.x) {
            dx *= def.scale.x;
        }
        if (def.scale.y) {
            dz *= def.scale.y;
        }
        if (def.scale.z) {
            dy *= def.scale.z;
        }
        if (def.scale.xy) {
            dx *= def.scale.xy;
            dz *= def.scale.xy;
        }
        if (def.scale.xyz) {
            dx *= def.scale.xyz;
            dz *= def.scale.xyz;
            dy *= def.scale.xyz;
        }
    }
    return { dx: dx, dy: dy, dz: dz };
};

class ThingyBox {
    get size() {
        return this._size|| { dx : 1, dy : 1, dz: 1};
    }
    get pos() {
        return this._pos|| { dx : 1, dy : 1, dz: 1};
    }
    constructor(__size, __pos) {
        this._size = __size ;
        this._pos = __pos;
    }
    GetCornersLow(def, zed) {
        return
    }
    GetBottomCorners(def) {
        return GetCornersLow(def, this.pos[2] - this.size[2] / 2);
    }
    GetTopCorners(def) {
        return GetCornersLow(def, this.pos[2] + this.size[2] / 2);
    }
    GetCorners(def) {
        return GetBottomCorners(def).concat(GetTopCorners(def));
    }
};

const arrangements = {
    "at-top-corners": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,dz],[-dx,dy,dz],[-dx,dy,-dz],[dx,dy,-dz]];
    },
    "at-bottom-corners": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = -(topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,dz],[-dx,dy,dz],[-dx,dy,-dz],[dx,dy,-dz]];
    },
    "at-corners": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,dz],[-dx,dy,dz],[-dx,dy,-dz],[dx,dy,-dz],[dx,-dy,dz],[-dx,-dy,dz],[-dx,-dy,-dz],[dx,-dy,-dz]];
    },
    "on-top-edges": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0],[-dx,dy,0],[0,dy,-dz],[0,dy,-dz]];
    },
    "on-bottom-edges": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = -(topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0],[-dx,dy,0],[0,dy,-dz],[0,dy,-dz]];
    },
    "on-edges": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0],[-dx,dy,0],[0,dy,-dz],[0,dy,-dz],[dx,-dy,0],[-dx,-dy,0],[0,-dy,-dz],[0,-dy,-dz]];
    },
    "above-corners": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,dz,JUSTIFY_Y_PLUS],[-dx,dy,dz,JUSTIFY_Y_PLUS],[-dx,dy,-dz,JUSTIFY_Y_PLUS],[dx,dy,-dz,JUSTIFY_Y_PLUS]];
    },
    "below-corners": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = -(topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,dz,JUSTIFY_Y_MINUS],[-dx,dy,dz,JUSTIFY_Y_MINUS],[-dx,dy,-dz,JUSTIFY_Y_MINUS],[dx,dy,-dz,JUSTIFY_Y_MINUS]];
    },
    "above-edges": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0,JUSTIFY_Y_PLUS],[-dx,dy,0,JUSTIFY_Y_PLUS],[0,dy,dz,JUSTIFY_Y_PLUS],[0,dy,-dz,JUSTIFY_Y_PLUS]];
    },
    "below-edges": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = -(topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0,JUSTIFY_Y_MINUS],[-dx,dy,0,JUSTIFY_Y_MINUS],[0,dy,dz,JUSTIFY_Y_MINUS],[0,dy,-dz,JUSTIFY_Y_MINUS]];
    },
    "above-back-edge": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[0,dy,-dz,JUSTIFY_Y_PLUS]];
    },
    "above-front-edge": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[0,dy,dz,JUSTIFY_Y_PLUS]];
    },
    "above-left-edge": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[-dx,dy,0,JUSTIFY_Y_PLUS]];
    },
    "above-right-edge": function (def, topology) {
        var dx = (topology.size.dx / 2.0);
        var dy = (topology.size.dy / 2.0);
        var dz = (topology.size.dz / 2.0);
        return [[dx,dy,0,JUSTIFY_Y_PLUS]];
    },
    "below": function (def, topology) {
        var dy = (topology.size.dy / 2.0);
        return [[0,-dy,0,JUSTIFY_Y_MINUS]];
    },
    "above": function (def, topology) {
        var dy = (topology.size.dy / 2.0);
        return [[0,dy,0,JUSTIFY_Y_PLUS]];
    },
    "behind": function (def, topology) {
        return null;
    }
};

class ThingyMesher {
    constructor() {
        this.scene = new THREE.Scene();
    }
    recurse(def, obj, topology) {
        var i , j , arrange , childtopo;
        for (i = 0; i < def.children.length; ++i) {
            if (def.children[i].prep) {
                arrange =  arrangements[def.children[i].prep];
            } else {
                arrange = null;
            }
            if( arrange ) {
                arrange = arrange(def.children[i],topology);
                if( arrange ) {
                    for( j = 0 ; j < arrange.length ; ++j ) {
                        childtopo = { pos : {  x : arrange[j][0] , y : arrange[j][1] , z :  arrange[j][2] } };
                        if( arrange[j][3] ) {
                            topology.justify = arrange[j][3];
                        }
                        this[def.children[i].shape](def.children[i], obj,childtopo);
                    }
                }
            } else {
                this[def.children[i].shape](def.children[i], obj,topology);
            }
        }
    }
    sphere(def, parent) {
        var size = getScale(def);
        var geometry = new THREE.SphereBufferGeometry(0.5, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        geometry.scale(size.dx, size.dz, size.dy);
        var sphere = new THREE.Mesh(geometry, material);
        this.scene.add(sphere);
    }
    applyTranslate(size,topology,geometry)
    {
        if( topology ) {
            var dx = 0 , dy = 0 , dz = 0;
            if( topology.pos ) {
                dx = topology.pos.x;
                dy = topology.pos.y;
                dz = topology.pos.z;
            }
            if( topology.justify ) {
                // Justify with top or bottom edge
                if( topology.justify & JUSTIFY_X_MINUS ) {
                    dx -= size.dx / 2.0;
                } else if( topology.justify & JUSTIFY_X_PLUS ) {
                    dx += size.dx / 2.0;
                }
                if( topology.justify& JUSTIFY_Y_MINUS ) {
                    dy -= size.dy / 2.0;
                } else if( topology.justify & JUSTIFY_Y_PLUS ) {
                    dy += size.dy / 2.0;
                }
                if( topology.justify& JUSTIFY_Z_MINUS ) {
                    dz -= size.dz / 2.0;
                } else if( topology.justify & JUSTIFY_Z_PLUS ) {
                    dz += size.dz / 2.0;
                }
            }
            if( dx !== 0 || dy !== 0 || dz !== 0 ) {
                geometry.translate(dx,dy,dz);
            }
        }
    }
    box(def, parent, topology) {
        var size = getScale(def);
        var geometry = new THREE.BoxBufferGeometry(size.dx, size.dy, size.dz);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        if( topology ) {
            this.applyTranslate(size,topology,geometry);
        }
        var box = new THREE.Mesh(geometry, material);
        if (parent) {
            parent.add(box);
        } else {
            this.scene.add(box);
        }
        if (def.children) {
            this.recurse(def, box, new ThingyBox(size, null ));
        }
    }
    cone(def, parent, topology) {
        var size = getScale(def);
        var geometry = new THREE.ConeBufferGeometry(0.5, 1, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        geometry.scale(size.dx, size.dy, size.dz);
        if( topology ) {
            this.applyTranslate(size,topology,geometry);
        }
        var cone = new THREE.Mesh(geometry, material);
        if (parent) {
            parent.add(cone);
        } else {
            this.scene.add(cone);
        }
        if (def.children) {
            this.recurse(def, cone, new ThingyBox(size, null ));
        }
    }
    toroid(def) {
        var size = getScale(def);
        var geometry = new THREE.TorusBufferGeometry(0.5, 0.25, 16, 16);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        geometry.scale(size.dx, size.dy, size.dz);
        var toroid = new THREE.Mesh(geometry, material);
        this.scene.add(toroid);
    }
    cylinder(def, parent, topology) {
        var size = getScale(def);
        var geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        geometry.scale(size.dx, size.dy, size.dz);
        if( topology ) {
            this.applyTranslate(size,topology,geometry);
        }
        var cylinder = new THREE.Mesh(geometry, material);
        if (parent) {
            parent.add(cylinder);
        } else {
            this.scene.add(cylinder);
        }
        if (def.children) {
            this.recurse(def, cylinder, new ThingyBox(size, null ));
        }

    }
    rope(def) {
    }
    fabric(def) {
    }
};


const generate = function (thingy) {
    var obj = {};
    var tm;
    var name, sd, i;
    for (name in thingy) {
        sd = thingy[name];
        tm = new ThingyMesher();
        for (i = 0; i < sd.shapes.length; ++i) {
            tm[sd.shapes[i].shape](sd.shapes[i]);
        }
        obj[name] = tm.scene.toJSON();
    }
    return obj;
}

const renderToObj = function(thingy,name) {
    var obj = {};
    var tm;
    var name, sd, i , camera , renderer;
    sd = thingy[name];
    tm = new ThingyMesher();
    for (i = 0; i < sd.shapes.length; ++i) {
        tm[sd.shapes[i].shape](sd.shapes[i]);
    }
    var OBJExporter = require('three-obj-exporter');
    var exporter = new OBJExporter();
    return  exporter.parse(tm.scene);
}
   


exports.generate = generate;
exports.renderToObj = renderToObj;
