/*
.image-track 元素的 transform:translate 從 0% -> -100%。
img 元素的 object-position: 從 0% -> -100%。
*/
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

gsap.to('img',
    {objectPosition:"0% 50%",
    scrollTrigger:{
        trigger:'img',
        scurb:1,
        pin:true,
        horizontal:true,
        markers:true,
    }
})