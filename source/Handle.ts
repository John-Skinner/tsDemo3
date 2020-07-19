

enum CurrentInteractionState {
    Inactive = 0,
    Changing = 1
}

export class Handle {
    Canvas: HTMLCanvasElement;
    HandleRadius:number;
    X:number;
    Y:number;
    EventState: CurrentInteractionState;
    constructor(canvas:HTMLCanvasElement)
    {
        this.Canvas = canvas;
        this.HandleRadius = 20;
    }

    drawBorder()
    {
        const ctx:CanvasRenderingContext2D = <CanvasRenderingContext2D>this.Canvas.getContext("2d");
        ctx.strokeStyle='rgb(255.0,0,128.0)';
        ctx.strokeRect(0,0,this.Canvas.width,this.Canvas.height);
    }
    drawHandle()
    {
        const ctx:CanvasRenderingContext2D = <CanvasRenderingContext2D>this.Canvas.getContext("2d");
        ctx.strokeStyle='rgb(0,255,128)';
        ctx.strokeRect(this.X-this.HandleRadius,this.Y-this.HandleRadius,this.HandleRadius*2,this.HandleRadius*2);
    }
    handleCoreMouseDown(event:Event)
    {
        let me:MouseEvent = <MouseEvent> event;
        me.clientX;
        this.X=me.clientX;
        this.Y=me.clientY;
        this.drawHandle();

    }
    handleCoreMouseUp(event:Event)
    {
        let me:MouseEvent = <MouseEvent> event;
        me.clientX;
        this.X=me.clientX;
        this.Y=me.clientY;
        this.EventState = CurrentInteractionState.Inactive;
        this.drawHandle();

    }
    handleCoreMouseMove(event:Event)
    {
        let me:MouseEvent = <MouseEvent> event;
        me.clientX;
        this.X=me.clientX;
        this.Y=me.clientY;
        this.drawHandle();

    }
    activate()
    {
        var instance = this;
        this.Canvas.addEventListener('mousedown',e=> {
            this.handleCoreMouseDown(e);
        },true);
        window.addEventListener('mouseup', e => {
            this.handleCoreMouseUp(e);
        },true);
        this.Canvas.addEventListener('mousemove', e => {
            this.handleCoreMouseMove(e);
        },true);
    }

}
