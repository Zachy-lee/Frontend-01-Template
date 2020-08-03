import { createElement } from './createElement'
import { Timeline, Animation } from './animation'
import { ease } from './cubicBezier'


export class TabPanel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
        this.state=Object.create(null)
    }
    setAttribute(name, value) { //attribute
        this[name] = value
    }
    getAttribute(name) {
      return  this[name];
    }
    appendChild(child) {
        this.children.push(child)
    }
    addEventListener() {
        this.root.addEventListener(...arguments)
    }

    select(i){
        for(let view of this.childViews){
            view.style.display='none';
        }
        this.childViews[i].style.display='';
 
        for(let view of this.titleViews){
            view.classList.remove('selected')
        }
        this.titleViews[i].classList.add('selected');
        // this.titleViews[i].innerText=this.children[i].title
    }
    render() {
          
    this.childViews=this.children.map(child=>
        <div style='min-height:300px;width:300px'>{child}</div>
        );    
    this.titleViews=this.children.map(child=>
            <span style='min-height:300px;width:300px'>{child.getAttribute('title') || ' '}</span>
            ); 

        setTimeout(() => this.select(0),16);

        return <div class = 'tab-panel' style = 'border:1px solid lightgreen;' >
         <h1 style = 'background-color:lightgreen;width:300px' >{this.titleViews}</h1> 
              <div> 
                {this.childViews}
              </div>
            </div>
    }
    mountTo(parent) {
        this.render().mountTo(parent)
    }
}