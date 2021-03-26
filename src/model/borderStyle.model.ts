export class BorderHandlerStyle {
    div: HTMLDivElement;
    private applicationsByState: { [key: string]: any } = {};

    constructor(container: HTMLDivElement) {
        this.div = container;
    }

    setBorderRadius(borderPosition: string, newRadius: string) {
        this.applicationsByState = this.div.style;
        this.applicationsByState[borderPosition] = newRadius;
    }

}