window.onload = function() {
    if (document.querySelector('body').classList.contains('tp-modal-open')) {
        document.querySelector('.tp-modal').remove()
        document.querySelector('.tp-backdrop ').remove()
        document.querySelector('body').classList.remove('tp-modal-open', 'tp-modal-slide-up')
    }
}