import {Observable} from 'data/observable';
import {Color} from 'color';
import {TNSCircleMenu, TNSCircleButton} from 'nativescript-circle-menu';

export class HelloWorldModel extends Observable {
  private circleMenu: any;

  constructor() {
    super();

    this.circleMenu = new TNSCircleMenu();
    this.circleMenu.initMenu([
      new TNSCircleButton({
        icon: "home.png",
        color: new Color('#B3714F').ios,
        action: () => {
          console.log('home selected');
        }
      }),
      new TNSCircleButton({
        icon: "search.png",
        color: new Color('#7C3FE8').ios,
        action: () => {
          console.log('search selected');
        }
      }),
      new TNSCircleButton({
        icon: "notifications.png",
        color: new Color('#4E75E2').ios,
        action: () => {
          console.log('notifications selected');
        }
      }),
      new TNSCircleButton({
        icon: "settings.png",
        color: new Color('#528100').ios,
        action: () => {
          console.log('settings selected');
        }
      }),
      new TNSCircleButton({
        icon: "nearby.png",
        color: new Color('#85D5FE').ios,
        action: () => {
          console.log('nearby selected');
        }
      })
    ]);
  }
}