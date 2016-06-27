export declare class TNSCircleButton {
    icon: string;
    color: any;
    action: () => {};
    constructor(model?: any);
}
export declare class TNSCircleMenu extends NSObject {
    static ObjCProtocols: any[];
    private _items;
    initMenu(items: Array<TNSCircleButton>, menuImage?: string, closeImage?: string, position?: CGRect, bgColor?: string, duration?: number, distance?: number): void;
    circleMenuWillDisplayAtIndex(menu: any, button: any, atIndex: any): void;
    circleMenuButtonWillSelectedAtIndex(menu: any, button: any, atIndex: any): void;
}
