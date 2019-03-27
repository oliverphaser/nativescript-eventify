# NativeScript Eventify
NativeScript has a method called `notify` you can use to notify an observable of changes. But you can't use it to trigger events like `tap` or `swipe`, enter NativeScript Eventify.

- Currently only supports `tap` events, [see roadmap](#roadmap)

## Installation
```
tns plugin add nativescirpt-eventify
```

## Usage 
Just require it once.
```js
//app.js
require("nativescript-eventify");
```

```js
// Assume the view already has the event listeners setup.

// simulate a tap event
view.eventify({ eventName: "tap", object: view });
```

Take a look at this [Playground](https://play.nativescript.org/?template=play-js&id=PpA1wb&v=2) for a working example.

## API

| Properties | Required | Description |
| --- | --- | --- |
| EventData | Yes | The eventName and object, just like using `notify`. |
| Info | Sometimes | Some of the events _(i.e. `swipe`)_ will need extra information |

### Info

| Event | Required | Properties | Description |
| --- | --- | --- | --- |
| tap | No | n/a | n/a |

## Roadmap
 - Add support for `doubleTap` events
 - Add support for `longPress` events
 - Add support for `swipe` events
 - Add support for `pan` events
 - Add support for `pinch` events
 - Add support for `rotate` events
 - Add support for `touch` events
