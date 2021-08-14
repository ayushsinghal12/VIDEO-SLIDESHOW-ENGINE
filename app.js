var videos = [
    '1.mp4',
    '2.mp4',
    '3.mp4'
]
var i = 0
var ref = document.getElementById('video')
ref.src = videos[i]

function slideshow() {
    ref.style.animationName = 'animate'
    setTimeout(condition, 2000)

    function condition() {
        if (i < videos.length - 1) {
            i++
        } else {
            document.getElementById('videocontainer').innerHTML = ''
            ref.style.animationName = 'invalid'
        }
        ref.src = videos[i]
    }
}

function onplay_animation() {
    ref.style.animationName = 'invalid'
}