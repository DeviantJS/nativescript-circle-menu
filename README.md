<h3 align="center">
    <img src="https://github.com/DeviantJS/nativescript-circle-menu/blob/master/media/circle_menu_header.png" alt="NativeScript Plus Ramotion Circle Menu">
	<br>
</h3>
## Ramotion Circle Menu {N} Plugin

A plugin to bring the exceptional work of [Ramotion](https://ramotion.com/) into the {N} platform.

Circle Menu is an expanding circular menu. 

As [Ramotion](https://ramotion.com/) is as **forward thinking** as they are **super cool & talented**, they open sourced it which allows us to make it available to the {N} community.

Circle Menu Source for the [iOS Platform](https://github.com/Ramotion/circle-menu)

![Sample](media/menu.gif)

## Install

```
npm i nativescript-circle-menu --save
```

## Usage

```
import {Color} from 'color';
import {TNSCircleMenu, TNSCircleButton} from 'nativescript-circle-menu';

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
```

## Methods

```
initMenu(items: Array<TNSCircleButton>, menuImage?: string, closeImage?: string, position?: CGRect, bgColor?: string, duration?: number, distance?: number);
```

## Issues

>Flooding the native implementations repo with {N} specific implementation problems is discourteous. 
>They were kind enough open source some really great UI / UX please respect the fact it is not their responsibility to investigate or solve issues using this plugin in NativeScript.

Please create issues [here](https://github.com/DeviantJS/nativescript-circle-menu/issues) first and only after it has been properly vetted to not be an {N} specific implementation problem
should you open an issue in the [Circle Menu GitHub repo](https://github.com/Ramotion/circle-menu/issues). 

## Contributing

Please see the [CONTRIBUTING](https://github.com/DeviantJS/nativescript-circle-menu/blob/master/CONTRIBUTING.md) file for guidelines.

## License

MIT