export class Timeline {
    constructor() {
        this.animations = [];
    }
    tick() {
        let t = Date.now() - this.startTime;
        // console.log(t);
        for (const animation of this.animations) {
            if (t > animation.duration + animation.delay)
                continue;
            let { object, property, template, start, end, timingFunction, delay } = animation;
            object[property] = template(timingFunction(start, end)(t - delay))
        }
        requestAnimationFrame(() => this.tick())
    }
    start() {
        this.startTime = Date.now()
        this.tick();
    }
    add(animation) {
        this.animations.push(animation);
    }
}
export class Animation {
    constructor(object, property, template, start, end, duration, delay, timingFunction) {
        this.object = object;
        this.template = template;
        this.property = property;
        this.start = start;
        this.end = end;
        this.delay = delay || 0;
        this.duration = duration;
        this.timingFunction = timingFunction || ((start, end) => {
            return t => { start + (t / duration) * (end - start) }
        })
    }

}

/**
let animation = new Animation(object,property,start,end,duration,delay,timingFunction); // 属性动画

let animation2 = new Animation(object,property,start,end,duration,delay,timingFunction);

let timeline= new Timeline;

timeline.add(animation);
timeline.add(animation2);

timeline.start()
timeline.pause()
timeline.resume()
timeline.stop()

setTimeout
setInterval
requestAnimationFrame


*/