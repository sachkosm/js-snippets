//Input Interface
export class ResizeVerticalyInput {
    constructor(props) {
        this.valid = true
        if(!props.element || !props.direction || !props.first || !props.second){ 
            console.error('ResizeVerticalyInput missing requred parameter')
            this.valid = false
        }
        this.element = props.element
        this.direction = props.direction
        this.handler = props.handler
        this.first = props.first
        this.second = props.second
    }
    get() {
        return this
    }
}

//Provides resizing ability
//Input should be an instance of ResizeVerticalyInput
export function resizeVerticaly(inputObj) {

    //Input check
    if (inputObj instanceof ResizeVerticalyInput !== true || !inputObj.valid) {
        console.error('Must pass a ResizeVerticalyInput object. Drilldown resizing will be disabled.')
        return false
    }

    const { element, direction, handler, first, second } = inputObj.get()

    // Two variables for tracking positions of the cursor
    const drag = { x: 0, y: 0 };
    const delta = { x: 0, y: 0 };
    /* if present, the handler is where you move the DIV from
       otherwise, move the DIV from anywhere inside the DIV */
    handler ? (handler.onmousedown = dragMouseDown) : (element.onmousedown = dragMouseDown);

    // function that will be called whenever the down event of the mouse is raised
    function dragMouseDown(e) {
        drag.x = e.clientX;
        drag.y = e.clientY;
        
        //Desable default mpouse poiter events
        first.style["pointer-events"] = 'none'
        second.style["pointer-events"] = 'none'
        
        document.onmousemove = onMouseMove;
        document.onmouseup = () => { 
            document.onmousemove = document.onmouseup = null; 

            //Restore mouse events
            first.style["pointer-events"] = 'auto'
            second.style["pointer-events"] = 'auto'
        }
    }

    // function that will be called whenever the up event of the mouse is raised
    function onMouseMove(e) {
        const currentX = e.clientX;
        const currentY = e.clientY;

        delta.x = currentX - drag.x;
        delta.y = currentY - drag.y;

        //const offsetLeft = element.offsetLeft;
        const offsetTop = element.offsetTop;

        // const first = document.getElementById("first");
        // const second = document.getElementById("second");

        let firstHeight = first.offsetHeight;
        let seconHeight = second.offsetHeight;

        // if (direction === "H") { // Horizontal
        //     element.style.left = offsetLeft + delta.x + "px";
        //     firstWidth += delta.x;
        //     secondWidth -= delta.x;
        // }

        if (direction === "V") { // Verticsal
            element.style.top = offsetTop + delta.y + "px";
            firstHeight += delta.y;
            seconHeight -= delta.y;
        }



        drag.x = currentX;
        drag.y = currentY;

        // first.style.width = firstWidth + "px";
        // second.style.width = secondWidth + "px";

        first.style.height = firstHeight + "px";
        second.style.height = seconHeight + "px";
    }

    return true
}
