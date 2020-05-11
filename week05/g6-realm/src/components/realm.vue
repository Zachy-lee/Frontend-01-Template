<template>
  <div class="wrapper">
    <div id="mountNode"></div>
  </div>
</template>

<script>
    import G6 from "@antv/g6";
    // import fdata from "../assets/data/reaml.json";
    export default {
        name: "realm",
        data() {
            return {
                fdata: {
                    id: 'realm',
                    children: []
                },
                graph: null
            };
        },
        props: {
            msg: String
        },
        created() {
            this.getReamls()
        },
        mounted() {
            // this.mountNode();
            this.mountNode();
        },
        methods: {
            mountNode() {
                const width = document.getElementById("mountNode").scrollWidth;
                const height = document.getElementById("mountNode").scrollHeight || 1200;
                const graph = new G6.TreeGraph({
                    container: "mountNode",
                    width,
                    height,
                    modes: {
                        default: [
                            {
                                type: "collapse-expand",
                                onChange: function onChange(item, collapsed) {
                                    const data = item.get("model").data;
                                    data.collapsed = collapsed;
                                    return true;
                                }
                            },
                            "drag-canvas",
                            "zoom-canvas",
                            'drag-node',
                            'click-select'
                            
                            
                        ]
                    },
                    defaultNode: {
                        size: 26,
                        anchorPoints: [
                            [0, 0.5],
                            [1, 0.5]
                        ],
                        style: {
                            fill: "#C6E5FF",
                            stroke: "#5B8FF9"
                        }
                    },
                    defaultEdge: {
                        type: "cubic-horizontal",
                        style: {
                            stroke: "#A3B1BF"
                        }
                    },
                    layout: {
                        type: "mindmap",
                        direction: "H", // H / V / LR / RL / TB / BT
                        nodeSep: 30,
                        rankSep: 100,
                        getSide: d => {
                            if (d.children.length >0) {
                                return 'left';
                            }
                            else if (d.children.length >4) {
                                console.log(d);
                                
                                return 'right';
                            }else{
                                return 'right';
                            }
                            
                        },
                        getHGap:() => {
                        // if (d.id === 'testId') return 50;
                          return 100;
                        }
                    }
                });
                graph.node(function (node) {
                    return {
                        label: node.id,
                        labelCfg: {
                            position:
                                node.children && node.children.length > 0 ? "left" : "right",
                            offset: 5
                        }
                    };
                });

                graph.data(this.fdata);
                graph.render();
                graph.fitView();
            },
            getReamls() {
                /* eslint-disable indent */
                let globalProperties = [
                    "eval",
                    "isFinite",
                    "isNaN",
                    "parseFloat",
                    "parseInt",
                    "decodeURI",
                    "decodeURIComponent",
                    "encodeURI",
                    "encodeURIComponent",
                    "Array",
                    "Date",
                    "RegExp",
                    "Promise",
                    "Proxy",
                    "Map",
                    "WeakMap",
                    "Set",
                    "WeakSet",
                    "Function",
                    "Boolean",
                    "String",
                    "Number",
                    "Symbol",
                    "Object",
                    "Error",
                    "EvalError",
                    "RangeError",
                    "ReferenceError",
                    "SyntaxError",
                    "TypeError",
                    "URIError",
                    "ArrayBuffer",
                    "SharedArrayBuffer",
                    "DataView",
                    "Float32Array",
                    "Float64Array",
                    "Int8Array",
                    "Int16Array",
                    "Int32Array",
                    "Uint8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8ClampedArray",
                    "Atomics",
                    "JSON",
                    "Math",
                    "Reflect"
                ];

                for (let p of globalProperties) {
                    this.fdata.children.push({
                        id: p,
                        object: window[p]
                    });
                }
                this.fdata.children.forEach(item => {
                    this.getG6Data(item)
                })
                console.log(this.fdata);
            },
            getG6Data(current) {
                let set = new Set();
                if (!current.object) {
                    return
                }
                if (set.has(current.object)) {
                    return
                }

                for (let p of Object.getOwnPropertyNames(current.object)) {
                
                    if(p==='prototype') return 
                    
                    let property = Object.getOwnPropertyDescriptor(current.object, p);
                
                    if (
                        // eslint-disable-next-line no-prototype-builtins
                        property.hasOwnProperty("value") &&
                        property.value !== null &&
                        (typeof property.value === "object" ||
                            typeof property.value === "function") &&
                        property.value instanceof Object
                    ) {
                        if (!(current['children'] && typeof Array.isArray(current.children))) {
                            current['children'] = []
                        }
                        current['children'].push({
                            id: p,
                            object: property.value
                        });
                        this.getG6Data(current.object)
                    }
                    if (
                        // eslint-disable-next-line no-prototype-builtins
                        property.hasOwnProperty("get") &&
                        typeof property.value === "object"
                    ) {
                        if (!(current['children'] && typeof Array.isArray(current.children))) {
                            current['children'] = []
                        }
                        current['children'].push({
                            id: p,
                            object: property.value
                        });
                        this.getG6Data(current.object)
                    }
                    if (
                        // eslint-disable-next-line no-prototype-builtins
                        property.hasOwnProperty("set") &&
                        typeof property.value === "object"
                    ) {
                        if (!(current['children'] && typeof Array.isArray(current.children))) {
                            current['children'] = []
                        }
                        current['children'].push({
                            id: p,
                            object: property.value
                        });
                        this.getG6Data(current.object)
                    }
                }
                set.add(current.object);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
