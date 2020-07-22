export class Timeline {
    constructor() {
        this.animations = [];
        this.requestID = null
    }
    tick() {
        let t = Date.now() - this.startTime;
        console.log(t);
        this.animations = this.animations.filter(animation => !animation.finished)
        for (const animation of this.animations) {
            let { object, property, template, start, end, delay, timingFunction } = animation;
            let progression = timingFunction((t - delay) / animation.duration) // 0-1 之间的数
            if (t > animation.duration + animation.delay) {
                progression = 1;
                animation.finished = true;
            }
            let value = start + progression * (end - start)
            object[property] = template(value)
        }
        if (this.animations.length)
            this.requestID = requestAnimationFrame(() => this.tick())
    }
    pause() {
        this.pauseTime = Date.now();
        if (this.requestID)
            cancelAnimationFrame(this.requestID)
    }
    resume() {
        this.startTime += Date.now() - this.pauseTime;
        this.tick();
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
        this.delay = delay;
        this.duration = duration;
        this.timingFunction = timingFunction;
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