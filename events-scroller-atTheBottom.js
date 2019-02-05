

    scrollerIsAtTheBottom(domElements) {
    
        //If this is a horizontal scroll return false
        if (this.lastScrollTop === domElements.scrollTop) { return false }
        
        //Remember last scroll position
        this.lastScrollTop = domElements.scrollTop

        let scrollHeight = domElements.scrollHeight
        let scrollTop = domElements.scrollTop
        let clientHeight = domElements.clientHeight
        let pixAdvance = 20
        // console.warn('input', scrollHeight, scrollTop, clientHeight)
        // console.warn('input left', (scrollHeight - scrollTop) - pixAdvance)
        // console.warn('input right', clientHeight)
        if ((scrollHeight - scrollTop) - pixAdvance <= clientHeight) {
            return true
        } else {
            return false
        }
    }
