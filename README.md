[npm]: https://img.shields.io/npm/v/@oliverphaser/nativescript-eventify.svg?color=949393
[apple]: https://img.shields.io/badge/apple-%E2%9C%93-949393.svg?logo=apple&logoColor=white
[android]: https://img.shields.io/badge/android-%E2%9C%93-949393.svg?logo=android&logoColor=white
[support]: https://img.shields.io/static/v1.svg?logo=paypal&label=Support&message=oliverphaser&style=for-the-badge&color=0c67b5&labelColor=afb0b9

[![npm]](https://www.npmjs.com/package/@oliverphaser/nativescript-eventify)
![apple]
![android]
<br/>
[![support]](https://paypal.me/oliverphaser)

# NativeScript Eventify

NativeScript has a method called `notify` you can use to notify an observable of changes. But you can't use it to trigger events like `tap` or `swipe`, enter NativeScript Eventify.

## NativeScript 8

This will work only on NativeScript 8.

## Supported Events

 - `tap`

## Roadmap

 - Add support for `doubleTap` events
 - Add support for `longPress` events
 - Add support for `swipe` events
 - Add support for `pan` events
 - Add support for `pinch` events
 - Add support for `rotate` events
 - Add support for `touch` events

## Installation

```
ns plugin add @oliverphaser/nativescript-eventify
```

## Usage 

Just require it once.
```js
//app.js
require("@oliverphaser/nativescript-eventify");
```

```js
/**
* home-page.js
*
* Assume the view already has the event listner(s) setup.
*/

// Simulates a tap event
view.eventify({ eventName: "tap", object: view });
```

Take a look at this [Playground](https://play.nativescript.org/?template=play-js&id=PpA1wb&v=6) for a working example.

## API

| Properties | Required | Description |
| --- | --- | --- |
| EventData | Yes | The eventName and object, just like using `notify`. |
| Info | Sometimes | Some of the events _(i.e. `swipe`)_ will need extra information |

### Info

| Event | Required | Properties | Description |
| --- | --- | --- | --- |
| tap | No | n/a | n/a |
 
