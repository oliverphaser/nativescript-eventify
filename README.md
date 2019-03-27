[ios]: https://icomoon.io/icons9f9702a/13/340.svg "iOS"
[android]: https://icomoon.io/icons9f9702a/13/342.svg "Android"

# ![android] ![ios]
# NativeScript Eventify
NativeScript has a method called `notify` you can use to notify an observable of changes. But you can't use it to trigger events like `tap` or `swipe`, enter NativeScript Eventify.

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
tns plugin add nativescript-eventify
```

## Usage 
Just require it once.
```js
//app.js
require("nativescript-eventify");
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
 
