import { createElement } from './createElement'
import { Timeline, Animation } from './animation'
import { ease } from './cubicBezier'


export class Panel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }
    setAttribute(name, value) { //attribute
        this[name] = value
    }
    appendChild(child) {
        this.children.push(child)
    }
    addEventListener() {
        this.root.addEventListener(...arguments)
    }
    render() {
        return <div class = 'panel' > 
        <h1>{this.title}</h1>
        <div> 
        { this.children } 
        </div>
        </div>;
    }
    mountTo(parent) {
        this.render().mountTo(parent)
    }
}