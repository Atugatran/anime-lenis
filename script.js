const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger)


document.querySelectorAll('.animation').forEach((el) => {
    let image = el.querySelector('img')
    let tl = gsap.timeline()

    let xTransform = gsap.utils.random(-100, 100)

    tl.set(
        image, {
        transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
    }, "start"
    ).to(
        image, {
        scale: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: image,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    }, "start"
    ).to(el, {
        xPercent: xTransform,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    })
})















