<template>
  <div class="wrapper">
    <!-- /* 图的画布容器 */ -->
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
          id:'realm',
          children:[]
      },
      gdata: {
        // 点集
        nodes: [
          {
            id: "node1", // String，该节点存在则必须，节点的唯一标识
            x: 100, // Number，可选，节点位置的 x 值
            y: 200 // Number，可选，节点位置的 y 值
          },
          {
            id: "node2", // String，该节点存在则必须，节点的唯一标识
            x: 300, // Number，可选，节点位置的 x 值
            y: 200 // Number，可选，节点位置的 y 值
          }
        ],
        // 边集
        edges: [
          {
            source: "node1", // String，必须，起始点 id
            target: "node2" // String，必须，目标点 id
          }
        ]
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
      const height = document.getElementById("mountNode").scrollHeight || 700;
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
            "zoom-canvas"
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
          type: "dendrogram",
          direction: "LR", // H / V / LR / RL / TB / BT
          nodeSep: 30,
          rankSep: 100
        }
      });
      graph.node(function(node) {
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
      
      this.fdata.children.forEach(item=>{
         this.getG6Data(item)
      })
        // console.log(this.fdata);
        
    },
    getG6Data(current){
       let set = new Set();
        if(!current.object){
            return
        }
        current['children']=[].push(current)
        // console.log(current.id.join("."));
        // if (set.has(current.object)) {
        // //    continue;
        // }

        for (let p of Object.getOwnPropertyNames(current.object)) {
          let property = Object.getOwnPropertyDescriptor(current.object, p);
          if (
            // eslint-disable-next-line no-prototype-builtins
            property.hasOwnProperty("value") &&
            property.value !== null &&
            (typeof property.value === "object" ||
              typeof property.value === "function") &&
              property.value instanceof Object
          ) {
            // queue.push({
            //   id: current.id.concat([p]),
            //   object: property.value
            // });
              this.getG6Data(current)             
          }
          if (
            // eslint-disable-next-line no-prototype-builtins
            property.hasOwnProperty("get") &&
            typeof property.value === "object"
          ) {
            // queue.push({
            //   id: current.id.concat([p]),
            //   object: property.get
            // });
           this.getG6Data(current)
          }
          if (
            // eslint-disable-next-line no-prototype-builtins
            property.hasOwnProperty("set") &&
            typeof property.value === "object"
          ) {
            // queue.push({
            //   id: current.id.concat([p]),
            //   object: property.set
            // });
             this.getG6Data(current)
          }
        }
        console.log(current);
        
          set.add(current.object);
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
