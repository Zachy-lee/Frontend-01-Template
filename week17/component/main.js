import { createElement } from './createElement'
import { Carousel } from './carousel'
import { Panel } from './Panel'



let component = < Carousel data = {
    [
        "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
        "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
        "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
        "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
    ]
}
/>
let panel = < Panel title = "this is my panel">
        <span>This is content</span>
     </Panel>
panel.mountTo(document.body)
// component.mountTo(document.body)