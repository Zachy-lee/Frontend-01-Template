function createElement(Cls, attributes,...children) {
    let o = new Cls({
     timer:{}
    });
    for (let name in attributes) {
        // o[name] = attributes[name];
        o.setAttribute(name,attributes[name])
    } 
    for (const child of children) {
      o.appendChild(child) 
    }
    return o;
}
class Div {
  constructor(config){
    this.children=[]
    this.root=document.createElement('div')
  }
  setAttribute(name,value){ //attribute
    this.root.setAttribute(name,value)
  } 
  appendChild(child){
    this.children.push(child)
  }
  mountTo(parent){
    parent.appendChild(this.root)
    for(let child of this.children){
      child.mountTo(this.root)
    }
  }
}

let component = < Div id = "a" class = "b"  style="width:100px;height:100;background:lightgreen">
  <Div></Div>
  <Div></Div>
  <Div></Div>
  </ Div>
    component.class='c'
component.mountTo(document.body)
console.log(component);