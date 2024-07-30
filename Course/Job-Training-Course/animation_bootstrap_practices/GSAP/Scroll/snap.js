
gsap.registerPlugin(ScrollTrigger);

// 將所有屬性 .panel 抓取成陣列，放入變數 sections
let sections = gsap.utils.toArray(".panel");

// 往右移的距離 = -100%(panel 寬度當作單位) * 右邊剩幾個 panel ( sections.length - 1)
gsap.to(sections,{
    xPercent:-100 * (sections.length -1),
    ease:"none",
    scrollTrigger:{
        trigger:'.container',
        pin:true,
        scrub:1,
        markers:true,
        //snap 這樣的設定會自動對正 panel
        snap:1 / (sections.length -1),
        end:()=>"+="+document.querySelector(".container").offsetWidth
    }
})