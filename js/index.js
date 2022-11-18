
const navMobileEl = document.querySelector('.nav-mobile')
const headerEl = document.querySelector('.header')
const heroEl = document.querySelector('.hero-section')
const backtotopEl = document.querySelector('.backtotop')
const pricingEl = document.querySelector('.pricing-item')

// click hide show nav mobile
navMobileEl.addEventListener('click', (e) => {
    headerEl.classList.toggle('nav-mobile--open')
})

//sticky
option = {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
}
function handleObs([e], observer) {
    headerEl.classList.toggle('sticky', !e.isIntersecting)
    backtotopEl.classList.toggle('btt-show', !e.isIntersecting)   
    
   
    backtotopEl.innerHTML = pricingEl.offsetWidth  + ' x ' + window.innerWidth
}
const obs = new IntersectionObserver(handleObs, option)
obs.observe(heroEl)

//scroll behavior
const allLinks = document.querySelectorAll('a:link')
// lặp qua các thẻ link đăng ký sự kiện click
// lấy ra giá trị của thuộc tính href
// get element bằng chính href đó qua ID và dùng scrollIntoView
allLinks.forEach(e => {
    e.onclick = (element) => {
        element.preventDefault()
        const href = e.getAttribute('href')
        if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' })
        if (href !== '#' && href?.startsWith('#')) document.querySelector(href).scrollIntoView({ behavior: "smooth" })
        if (e.parentElement?.parentElement?.classList.contains('nav-container')) {
            headerEl.classList.toggle('nav-mobile--open')
        }
    }

})