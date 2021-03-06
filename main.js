let n
initial()
let timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n += 1
}, 2000)

document.addEventListener('visibilitychange', function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend', (e) => {
                    makeEnter($(e.currentTarget))
                })
            makeCurrent(getImage(n + 1))
            n += 1
        }, 2000)
    }
})






















function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function x(n) {
    if (n > 5) {
        n = n % 5
        if (n === 0) {
            n = 5
        }
    } return n
}

function initial() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}