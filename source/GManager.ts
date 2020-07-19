require
import {Handle} from "./Handle";
export  class GManager {
    constructor(type:string)
    {
        console.log("constructor");

    }
    Activate() {

        console.log("Activate");
        const elements = document.querySelectorAll("canvas.graphicCanvas");
        for (let c =0;c < elements.length;c++)
        {
            let item = <HTMLCanvasElement> elements[c];
            console.log(" item:" + item);
            let handle:Handle = new Handle(item);
            handle.drawBorder();
            handle.activate();
        }

    }
};
console.log("any canvases found?");
