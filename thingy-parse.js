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
const reservedWords = [
    ["sphere", "shape"],
    ["cube", "shape"],
    ["cone", "shape"],
    ["toroid", "shape"],
    ["cylinder", "shape"],
    ["rope", "shape"],
    ["fabric", "shape"],
    //----------------
    ["taller", ">", ["by", "#"], "z"],
    ["shorter", "<", ["by", "#"], "z"],
    ["thinner", "<", ["by", "#"], "xy"],
    ["fatter", ">", ["by", "#"], "xy"],
    ["narrower", "<", ["by", "#"], "x"],
    ["wider", ">", ["by", "#"], "x"],
    ["shallower", "<", ["by", "#"], "y"],
    ["deeper", ">", ["by", "#"], "y"],
    //---------- relation
    ["at", "prep", ["top", "corners"], "at-top-corners"],
    ["at", "prep", ["bottom", "corners"], "at-bottom-corners"],
    ["at", "prep", ["corners"], "at-corners"],
    ["on", "prep", ["top", "edges"], "on-top-edges"],
    ["on", "prep", ["bottom", "edges"], "on-bottom-edges"],
    ["on", "prep", ["edges"], "on-edges"],
    ["above", "prep", ["corners"], "above-corners"],
    ["below", "prep", ["corners"], "below-corners"],
    ["above", "prep", ["edges"], "above-edges"],
    ["below", "prep", ["edges"], "below-edges"],
    ["below", "prep"],
    ["above", "prep"],
    ["behind", "prep"],
    ["left", "prep", ["of"], "left-of"],
    ["right", "prep", ["of"], "right-of"],
    ["around", "prep", ["every"], "around-every"],
    ["around", "prep"],
    ["inside", "prep"],
    ["mirror", "prep"],
    //-----
    ["at", "mod", ["normal"], "normal"],
    ["embed", "mod", ["by", "#"], "dr"],
    ["lower", "mod", ["by", "#"], "dz"],
    ["higher", "mod", ["by", "#"], "dz"],
    ["pad", "mod", ["by", "#"], "dr"],
    //-------
    ["aliceblue", "color"],
    ["antiquewhite", "color"],
    ["aqua", "color"],
    ["aquamarine", "color"],
    ["azure", "color"],
    ["beige", "color"],
    ["bisque", "color"],
    ["black", "color"],
    ["blanchedalmond", "color"],
    ["blue", "color"],
    ["blueviolet", "color"],
    ["brown", "color"],
    ["burlywood", "color"],
    ["cadetblue", "color"],
    ["chartreuse", "color"],
    ["chocolate", "color"],
    ["coral", "color"],
    ["cornflowerblue", "color"],
    ["cornsilk", "color"],
    ["crimson", "color"],
    ["cyan", "color"],
    ["darkblue", "color"],
    ["darkcyan", "color"],
    ["darkgoldenrod", "color"],
    ["darkgray", "color"],
    ["darkgrey", "color"],
    ["darkgreen", "color"],
    ["darkkhaki", "color"],
    ["darkmagenta", "color"],
    ["darkolivegreen", "color"],
    ["darkorange", "color"],
    ["darkorchid", "color"],
    ["darkred", "color"],
    ["darksalmon", "color"],
    ["darkseagreen", "color"],
    ["darkslateblue", "color"],
    ["darkslategray", "color"],
    ["darkslategrey", "color"],
    ["darkturquoise", "color"],
    ["darkviolet", "color"],
    ["deeppink", "color"],
    ["deepskyblue", "color"],
    ["dimgray", "color"],
    ["dimgrey", "color"],
    ["dodgerblue", "color"],
    ["firebrick", "color"],
    ["floralwhite", "color"],
    ["forestgreen", "color"],
    ["fuchsia", "color"],
    ["gainsboro", "color"],
    ["ghostwhite", "color"],
    ["gold", "color"],
    ["goldenrod", "color"],
    ["gray", "color"],
    ["grey", "color"],
    ["green", "color"],
    ["greenyellow", "color"],
    ["honeydew", "color"],
    ["hotpink", "color"],
    ["indianred ", "color"],
    ["indigo ", "color"],
    ["ivory", "color"],
    ["khaki", "color"],
    ["lavender", "color"],
    ["lavenderblush", "color"],
    ["lawngreen", "color"],
    ["lemonchiffon", "color"],
    ["lightblue", "color"],
    ["lightcoral", "color"],
    ["lightcyan", "color"],
    ["lightgoldenrodyellow", "color"],
    ["lightgray", "color"],
    ["lightgrey", "color"],
    ["lightgreen", "color"],
    ["lightpink", "color"],
    ["lightsalmon", "color"],
    ["lightseagreen", "color"],
    ["lightskyblue", "color"],
    ["lightslategray", "color"],
    ["lightslategrey", "color"],
    ["lightsteelblue", "color"],
    ["lightyellow", "color"],
    ["lime", "color"],
    ["limegreen", "color"],
    ["linen", "color"],
    ["magenta", "color"],
    ["maroon", "color"],
    ["mediumaquamarine", "color"],
    ["mediumblue", "color"],
    ["mediumorchid", "color"],
    ["mediumpurple", "color"],
    ["mediumseagreen", "color"],
    ["mediumslateblue", "color"],
    ["mediumspringgreen", "color"],
    ["mediumturquoise", "color"],
    ["mediumvioletred", "color"],
    ["midnightblue", "color"],
    ["mintcream", "color"],
    ["mistyrose", "color"],
    ["moccasin", "color"],
    ["navajowhite", "color"],
    ["navy", "color"],
    ["oldlace", "color"],
    ["olive", "color"],
    ["olivedrab", "color"],
    ["orange", "color"],
    ["orangered", "color"],
    ["orchid", "color"],
    ["palegoldenrod", "color"],
    ["palegreen", "color"],
    ["paleturquoise", "color"],
    ["palevioletred", "color"],
    ["papayawhip", "color"],
    ["peachpuff", "color"],
    ["peru", "color"],
    ["pink", "color"],
    ["plum", "color"],
    ["powderblue", "color"],
    ["purple", "color"],
    ["rebeccapurple", "color"],
    ["red", "color"],
    ["rosybrown", "color"],
    ["royalblue", "color"],
    ["saddlebrown", "color"],
    ["salmon", "color"],
    ["sandybrown", "color"],
    ["seagreen", "color"],
    ["seashell", "color"],
    ["sienna", "color"],
    ["silver", "color"],
    ["skyblue", "color"],
    ["slateblue", "color"],
    ["slategray", "color"],
    ["slategrey", "color"],
    ["snow", "color"],
    ["springgreen", "color"],
    ["steelblue", "color"],
    ["tan", "color"],
    ["teal", "color"],
    ["thistle", "color"],
    ["tomato", "color"],
    ["turquoise", "color"],
    ["violet", "color"],
    ["wheat", "color"],
    ["white", "color"],
    ["whitesmoke", "color"],
    ["yellow", "color"],
    ["yellowgreen", "color"],
];

const parseShapes = function (def) {
    var lines = def.split("\n"), line, i, j, k;
    var shapes = {}, name = null, shape = null, words, index, match;
    var word, node, attribs, position, type;
    var primitive, color, prep, value, addLevel, stack = [];
    for (i = 0; i < lines.length; ++i) {
        line = lines[i].trim();
        if (line !== "") {
            if (name) {
                // Parse shape(s)
                if (line == "]") {
                    name = null;
                } else if (line == ")") {
                    stack.pop();
                } else {
                    line = line.split("\t").join(" ");
                    while (line.indexOf("  ") >= 0) {
                        line = line.split("  ").join(" ");
                    }
                    if (line.charAt(line.length - 1) == '(') {
                        line = line.substr(0, line.length - 1).trim();
                        addLevel = true;
                    } else {
                        addLevel = false;
                    }
                    words = line.trim().split(" ");
                    primitive = undefined;
                    color = undefined;
                    prep = undefined;
                    scale = {};
                    for (j = 0; j < words.length; ++j) {
                        word = words[j];
                        index = reservedWords.findIndex(function (shape) {
                            if (shape[0] === word) {
                                if( shape[2] ) {
                                    if ((j + 1) < words.length) {
                                        if (words[j + 1] === shape[2][0]) {
                                            return true;
                                        }
                                    }
                                } else {
                                    return true;
                                }
                            }
                            return false;
                        });
                        if (index < 0) {
                            return { error: "Unknown symbol " + word, line: (i + 1) };
                        }
                        type = reservedWords[index][1];
                        match = reservedWords[index][2];
                        if (match) {
                            for (k = 0; k < match.length; ++k) {
                                ++j;
                                if (match[k] === '#') {
                                    value = parseInt(words[j]);
                                } else if (match[k] !== words[j]) {
                                    return { error: "Expected " + match[k], line: (i + 1) };
                                }
                            }
                        }
                        if (type === "shape") {
                            primitive = word;
                        } else if (type === "prep") {
                            prep = word;
                        } else if (type === "color") {
                            color = word;
                        } else {
                            if (type === ">") {
                                scale[reservedWords[index][3]] = value;
                            } else if (type === "<") {
                                scale[reservedWords[index][3]] = 1 / value;
                            }
                        }
                    }
                    node = { shape: primitive, scale: scale, color: color, prep: prep };
                    if (stack.length) {
                        stack[stack.length - 1].children.push(node);
                    } else {
                        shape.shapes.push(node);
                    }
                    if (addLevel) {
                        node.children = [];
                        stack.push(node);
                    }
                    //words[0]
                }
            } else {
                name = line.split("=");
                if (name.length !== 2 || name[1].trim() != '[') {
                    return { error: "Expected <name> = [", line: (i + 1) };
                }
                name = name[0].trim();
                shape = { shapes: [] };
                shapes[name] = shape;
            }
        }
    }
    return shapes;
};
exports.parse = parseShapes;
