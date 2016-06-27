import {topmost} from 'ui/frame';
import {Color} from 'color';

declare var CircleMenu, UIImage, UIControlStateNormal, UIImageRenderingModeAlwaysTemplate, UIControlStateHighlighted, CircleMenuDelegate, UIColor, CGRectMake;

export class TNSCircleButton {
  public icon: string;
  public color: any;
  public action: () => {};
  constructor(model?: any) {
    if (model) {
      for (let key in model) {
        this[key] = model[key];
      }
    }   
  }
}

export class TNSCircleMenu extends NSObject {
  public static ObjCProtocols = [CircleMenuDelegate];
  private _items: Array<TNSCircleButton>; 

  public initMenu(items: Array<TNSCircleButton>, menuImage?: string, closeImage?: string, position?: CGRect, bgColor?: string, duration?: number, distance?: number) {
    this._items = items;

    // default to center    
    position = position || CGRectMake((UIScreen.mainScreen().bounds.size.width - 50) / 2, (UIScreen.mainScreen().bounds.size.height - 50) / 2, 50, 50);
    let menu = new CircleMenu(
      position,
      menuImage || "menu.png",
      closeImage || "close.png",
      items.length,
      duration || .5,
      distance || 120);
    menu.backgroundColor = new Color(bgColor || '#fff').ios;
    menu.delegate = this;
    menu.layer.cornerRadius = menu.frame.size.width / 2.0;
    topmost().ios.controller.view.addSubview(menu);
  }

  public circleMenuWillDisplayAtIndex(menu, button, atIndex) {
    console.log(`circleMenu called...`);
    button.backgroundColor = this._items[atIndex].color;
    button.setImageForState(UIImage.imageNamed(this._items[atIndex].icon), UIControlStateNormal);

    // set highlited image
    let highlightedImage = UIImage.imageNamed(this._items[atIndex].icon).imageWithRenderingMode(UIImageRenderingModeAlwaysTemplate);
    button.setImageForState(highlightedImage, UIControlStateHighlighted);
    button.tintColor = UIColor.colorWithRedGreenBlueAlpha(0, 0, 0, .3);
  }

  public circleMenuButtonWillSelectedAtIndex(menu, button, atIndex) {
    console.log(`button selected index: ${atIndex}`);
    this._items[atIndex].action();
  }

  // This is fired after the menu animates back closed 
  // TODO: Potentially dispatch a notification event
  // public circleMenuButtonDidSelectedAtIndex(menu, button, atIndex) {
  //   console.log(`button did selected: ${atIndex}`);
  // }
}