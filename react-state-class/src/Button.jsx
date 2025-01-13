function doSomething() {
    console.log("button was clicked");
}

function handleHover() {
    console.log("hover");
}

function handleDblClick() {
    console.log(" you double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={doSomething} 
                    onMouseOver={handleHover} 
                    onDoubleClick={handleDblClick}
            >Click me!</button>
            <p onClick={printBye}>This is a paragraph</p>
        </div>
    );
}

function printBye() {
    console.log("bye!");
}