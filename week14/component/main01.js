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
class Parent {
  constructor(config){
    this.children=[]
    this.root=document.createElement('div')
  }
  setAttribute(name,value){ //attribute
    this.root.setAttribute(name,value)
  } 
  appendChild(child){
    child.mountTo(this.root)
  }
  mountTo(){
    parent.appendChild(this.root)
  }
}
class Child {
  constructor(config){
    this.children=[]
    this.root=document.createElement('div')
  }
  setAttribute(name,value){ //attribute
    this.root.setAttribute(name,value)
  }
  appendChild(child){
    child.mountTo(this.root)
  }
  mountTo(parent){
    parent.appendChild(this.root)
  }

}
let component = < Parent id = "a"
class = "b" >
  <Child></Child>
  <Child></Child>
  <Child></Child>
  </ Parent>
    component.class='c'
component.mountTo(document.body)
console.log(component);


    /*
var component = createElement(
    Parent, 
    {
        id: "a",
        "class": "b"
    }, 
    createElement(Child, null), 
    createElement(Child, null), 
    createElement(Child, null)
);
*/