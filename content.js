window.onload = function() {
    let currentDomain = window.location.hostname
    console.log("Ads PopUp", currentDomain)
    switch(currentDomain) {
        case 'www.businessinsider.com': {
            if (document.querySelector('body').classList.contains('tp-modal-open')) {
                document.querySelector('.tp-modal').remove()
                document.querySelector('.tp-backdrop ').remove()
                document.querySelector('body').classList.remove('tp-modal-open', 'tp-modal-slide-up')
            }
            break
        }
        case 'www.dailymail.co.uk':
        case 'www.foxnews.com':
        case 'www.footyheadlines.com':
        case 'www.marca.com': {
            console.log("test")
            if(document.querySelector('.fc-ab-root')) {
                console.log("test")
                document.querySelector('.fc-ab-root').remove()
                document.querySelector('body').style.overflowY = 'auto'
            }
            break
        }
        case 'www.makeuseof.com': {
            console.log(document.querySelector('.fEy1Z2XT'))
            if(document.querySelector('.fEy1Z2XT')) {
                console.log("test: www.makeuseof.com")
                document.querySelector('.fEy1Z2XT').remove()
                document.querySelector('body').style.overflow = 'auto'
                document.querySelector('html').style.overflow = 'auto'
            }
            break
        }
        default: 
            console.log(`${currentDomain} not included`)
    }
    
}