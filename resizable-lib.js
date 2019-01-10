export default function znResizeable(resizer, drawer, report, config) {
    //Small library to make the ReportDrawer resizable

    if (!resizer) { console.error('Resizer element is not provided!'); return }
    if (!drawer) { console.error('Drawer element is not provided!'); return }

    var drawerStartWidth;
    var newDrawerWidth;
    var reportStartWidth;
    var newReportWidth;
    var resizerWidth = 9
    var borderDrawerToReport = 0
    var minSizeLimit = 200
    var maxSizeLimit = 1000
    var initialized = false

    if (config) {
        resizerWidth = config.resizerWidth ? config.resizerWidth : resizerWidth
        borderDrawerToReport = config.borderDrawerToReport ? config.borderDrawerToReport : borderDrawerToReport
        minSizeLimit = config.minSizeLimit ? config.minSizeLimit : minSizeLimit
        maxSizeLimit = config.maxSizeLimit ? config.maxSizeLimit : maxSizeLimit
    }

    let gripStyle = `flex: 0 0 auto;
        width: ` + resizerWidth + `px;
        float: right;
        cursor: col-resize;
        height: 100%;
        background: url(public_libs/resources/vsizegrip.png) no-repeat center center #ffffff;
        min-height: 200px
    `

    function getDrawerStartWidth() {
        return drawerStartWidth
    }

    function setReport(newReport) {
        report = newReport
        initResize()
    }

    function setNewReportWidthBasedOnDrawer() {
        let bodyWidth = document.getElementsByTagName('body')[0].clientWidth || console.error('Can not get element body!')
        let drawerCurrenttWidth = parseInt(document.defaultView.getComputedStyle(drawer).width, 10) || console.error('Can not get drawer element!')
        let reportComputedSetWidth = (bodyWidth - (drawerCurrenttWidth + borderDrawerToReport))
        report ? report.style.width = reportComputedSetWidth + 'px' : null
    }

    function setNewDrawerWidth() {
        drawerStartWidth = newDrawerWidth
        drawer.style.width = newDrawerWidth
    }

    function initResize() {
        //If the resiable has been already initilized
        if (initialized) {
            setNewDrawerWidth()
            setNewReportWidthBasedOnDrawer()
        }
        else {
            //Initialization of the initial width - should happen only when the component is created
            newDrawerWidth = drawerStartWidth = parseInt(document.defaultView.getComputedStyle(drawer).width, 10) || console.error('Can not get drawer element!')
            setNewReportWidthBasedOnDrawer()
            initialized = true
        }

        if (report) {
            //If there is a style already - we need to add the new one to the existing one
            let st = report.getAttribute("style")
            if (st) {
                report.setAttribute("style", st + "float: right;")
            }
            else {
                report.setAttribute("style", "float: right;")
            }
        }

        //Init draging 
        function initDrag(e) {
            e.preventDefault();
            window.startX = e.clientX;
            drawerStartWidth = parseInt(document.defaultView.getComputedStyle(drawer).width, 10);
            report ? reportStartWidth = parseInt(document.defaultView.getComputedStyle(report).width, 10) : 0;
            window.addEventListener('mousemove', doDrag, false);
            window.addEventListener('mouseup', stopDrag, false);
            document.body.style['pointer-events'] = 'none'; //prevent pointers events when entering tableau report
        }

        //calculate and apply new width according to the mouse movement
        function doDrag(e) {
            e.preventDefault();
            let pxMoved = e.clientX - window.startX
            if ((drawerStartWidth + pxMoved) > minSizeLimit && (drawerStartWidth + pxMoved) < maxSizeLimit) {
                newDrawerWidth = (drawerStartWidth + pxMoved);
                newReportWidth = (reportStartWidth - pxMoved);
                drawer.style.width = newDrawerWidth + 'px'
                if (report) {
                    report.style.width = newReportWidth + 'px'
                }
            }
        }
        //Remove the events that track the mouse movements and update golden layout
        function stopDrag(e) {
            e.preventDefault();
            document.body.style['pointer-events'] = 'auto'; //restore pointers events
            window.removeEventListener('mousemove', doDrag, false);
            window.removeEventListener('mouseup', stopDrag, false);
            drawer.style.width = newDrawerWidth + 'px'
            if (report) {
                report.style.width = newReportWidth + 'px'
            }
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 0)
            var event = new Event('znResizeableStopDrag');
            // Dispatch the event.
            window.dispatchEvent(event);
        }

        //Init
        function init() {
            if (report) {
                if (!report.hasAttribute("class", "resizable")) {
                    report.className = report.className + ' resizable';
                }
            }
            if (!resizer.hasAttribute("class", "resizable")) {
                resizer.setAttribute("style", gripStyle)
                resizer.className = resizer.className + ' resizable';
            }
            resizer.removeEventListener('mousedown', initDrag, false);
            resizer.addEventListener('mousedown', initDrag, false);
        }

        //Initialize
        init()
    }

    function removeResizing() {
        resizer.removeEventListener('mousedown', initResize.initDrag, false);
        report ? report.removeAttribute("style", "float: right") : null
        resizer.removeAttribute("style", gripStyle)
        initialized = false
    }

    function isInitialized() {
        return initialized
    }

    function reportIsSet() {
        return report ? true : false
    }

    return {
        initResize: initResize,
        removeResizing: removeResizing,
        setReport: setReport,
        getDrawerStartWidth: getDrawerStartWidth,
        setNewReportWidthBasedOnDrawer: setNewReportWidthBasedOnDrawer,
        isInitialized: isInitialized,
        reportIsSet: reportIsSet
    }

}
