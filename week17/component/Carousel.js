import { createElement } from './createElement'
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
        let timeline = new Timeline
        timeline.start();
        let position = 0;
        let nextPickStopHandler = null;
        let children = this.data.map((url, currentPosition) => {
            let lastPosition = (currentPosition - 1 + this.data.length) % this.data.length;
            let nextPosition = (currentPosition + 1) % this.data.length;

            let offset = 0;

            let onStart = () => {
                timeline.pause();
                clearTimeout(nextPickStopHandler);

                let currentElement = children[currentPosition]

                let currentTransfromValue = Number(currentElement.style.transform.match(/translateX\(([\s\S]+)px\)/)[1])
                offset = currentTransfromValue + 500 * currentPosition;
            }
            let onPan = event => {
                // console.log(lastPosition,currentPosition,nextPosition);
                let lastElement = children[lastPosition]
                let currentElement = children[currentPosition]
                let nextElement = children[nextPosition]

                let dx = event.clientX - event.startX
                console.log('dx', dx);

                let currentTransfromValue = -500 * currentPosition + offset + dx
                let lastTransfromValue = -500 - 500 * lastPosition + offset + dx
                let nextTransfromValue = 500 - 500 * nextPosition + offset + dx

                console.log(currentTransfromValue, lastTransfromValue, nextTransfromValue);

                lastElement.style.transform = `translateX(${lastTransfromValue}px)`
                currentElement.style.transform = `translateX(${currentTransfromValue}px)`
                nextElement.style.transform = `translateX(${nextTransfromValue}px)`

                // console.log(lastElement.style.transform, currentElement.style.transform ,nextElement.style.transform);
            }
            let onPanend = event => {
                let direction = 0;
                let dx = event.clientX - event.startX
                if (dx + offset > 250 || dx > 0 && event.isFlick) {
                    direction = 1;
                } else if (dx + offset < -250 || dx < 0 && event.isFlick) {
                    direction = -1;
                }
                timeline.reset();
                timeline.start();

                let lastElement = children[lastPosition]
                let currentElement = children[currentPosition]
                let nextElement = children[nextPosition]

                let lastAnimation = new Animation(lastElement.style, 'transform', -500 - 500 * lastPosition + offset + dx, -500 - 500 * lastPosition + direction * 500, 500, 0, ease, v => `translateX(${v}px)`);
                let currentAnimation = new Animation(currentElement.style, 'transform', -500 * currentPosition + offset + dx, -500 * currentPosition + direction * 500, 500, 0, ease, v => `translateX(${v}px)`);
                let nextAnimation = new Animation(nextElement.style, 'transform',
                    500 - 500 * nextPosition + offset + dx, 500 - 500 * nextPosition + direction * 500, 500, 0, ease, v => `translateX(${v}px)`);

                timeline.add(lastAnimation)
                timeline.add(currentAnimation)
                timeline.add(nextAnimation)

                position = (position - direction + this.data.length) % this.data.length
                nextPickStopHandler = setTimeout(nextPic, 3000);

            }
            let element = < img src = { url }
            onStart = { onStart }
            onPan = { onPan }
                // onPanend = { onPanend }
            enableGesture = { true }
            />;
            element.style.transform = 'translateX(0px)'
            element.addEventListener('dragstart', event => {
                event.preventDefault()
            })
            return element;
        })

        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length // 循环处理技巧

            let current = children[position];
            let next = children[nextPosition];

            let currentAnimation = new Animation(current.style, 'transform', -100 * position, -100 - 100 * position, 500, 0, ease, v => `translateX(${5 * v}px)`);
            let nextAnimation = new Animation(next.style, 'transform',
                100 - 100 * nextPosition, -100 * nextPosition, 500, 0, ease, v => `translateX(${5 * v}px)`);

            timeline.add(currentAnimation)
            timeline.add(nextAnimation)

            position = nextPosition;
            nextPickStopHandler = setTimeout(nextPic, 3000);
        }
        nextPickStopHandler = setTimeout(nextPic, 3000);
        return <div class = 'carousel' > { children } < /div>;
    }
    mountTo(parent) {
        this.render().mountTo(parent)
    }
}