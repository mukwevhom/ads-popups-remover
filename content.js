window.onload = function() {
    let currentDomain = window.location.hostname

    switch(currentDomain) {
        case 'www.businessinsider.com': {
            if (document.querySelector('body').classList.contains('tp-modal-open')) {
                document.querySelector('.tp-modal').remove()
                document.querySelector('.tp-backdrop ').remove()
                document.querySelector('body').classList.remove('tp-modal-open', 'tp-modal-slide-up')
            }
            break
        }
        case 'www.dailymail.co.uk': {
            if (document.querySelector('body').classList.contains('mol-fe-ab-dialog')) {
                document.querySelector(".trc_popover_aug_container + div").remove()
                document.querySelector('body').classList.remove('mol-fe-ab-dialog')
            }
            break
        }
        case 'www.footyheadlines.com': {
            if(document.querySelector('.fc-ab-root')) {
                document.querySelector('.fc-ab-root').remove()
                document.querySelector('body').style.overflowY = 'auto'
            }
            break
        }
        default: 
            console.log(`${currentDomain} not included`)
    }
    
}