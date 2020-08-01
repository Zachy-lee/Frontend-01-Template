import { createElement, Text, Wrapper } from './createElement'
import { Timeline, Animation } from './animation'
import { ease } from './cubicBezier'
export class Carousel {
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
        let children = this.data.map(url => {
            let element = < img src = { url } onStart={()=>{console.log('timeline',timeline);timeline.pause()}} enableGesture={true}/>;
            element.addEventListener('dragstart', event => {
                event.preventDefault()
            })
            return element;
        })
        let root = <div class = 'carousel' > { children } </div>
        let position = 0;
        let timeline = new Timeline
        window.xtimeline = timeline;
        timeline.start();
        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length // 循环处理技巧

            let current = children[position];
            let next = children[nextPosition];

            let currentAnimation = new Animation(current.style, 'transform', -100 * position, 100 - 100 * position, 500, 0, ease, v => `translateX(${v}%)`);
            let nextAnimation = new Animation(next.style, 'transform', -100 - 100 * position, -100 * nextPosition, 500, 0, ease, v => `translateX(${v}%)`);
            timeline.add(currentAnimation)
            timeline.add(nextAnimation)

            position = nextPosition;
            window.xstopHandler = setTimeout(nextPic, 3000);
        }
        setTimeout(nextPic, 3000);

        // 鼠标拖拽
        root.addEventListener('mousedown', event => {
            let startX = event.clientX,
                startY = event.clientY;

            let lastPosition = (position - 1 + this.data.length) % this.data.length
            let nextPosition = (position + 1) % this.data.length

            let current = children[position]
            let last = children[lastPosition]
            let next = children[nextPosition]

            current.style.transition = 'ease 0s'
            last.style.transition = 'ease 0s'
            next.style.transition = 'ease 0s'

            current.style.transform = `translateX(${ -500 * position}px)`
            last.style.transform = `translateX(${-500 -500 * lastPosition}px)`
            next.style.transform = `translateX(${500 -500 * nextPosition}px)`
            let move = event => {

                current.style.transform = `translateX(${event.clientX - startX -500 * position}px)`
                last.style.transform = `translateX(${event.clientX - startX - 500 - 500 * lastPosition}px)`
                next.style.transform = `translateX(${event.clientX - startX + 500 - 500 * nextPosition}px)`
            }
            let up = event => {
                let offset = 0;
                if (event.clientX - startX > 250) {
                    offset = 1;
                } else if (event.clientX - startX < -250) {
                    offset = -1;
                }

                current.style.transition = '' // means use css rulue
                last.style.transition = ''
                next.style.transition = ''


                current.style.transform = `translateX(${offset*500-  500 * position}px)`
                last.style.transform = `translateX(${offset* 500 - 500 - 500 * lastPosition}px)`
                next.style.transform = `translateX(${offset* 500+ 500 - 500 * nextPosition}px)`

                position = (position - offset + this.data.length) % this.data.length

                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', up)
        })
        return root
    }
    mountTo(parent) {
        this.render().mountTo(parent)
    }
}