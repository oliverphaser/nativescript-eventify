# NativeScript Eventify
NativeScript has a method called `notify` you can use to notify an observable of changes. But you can't use it to trigger events like tap or swipe, enter NativeScript Eventify.

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

// simulate a doubleTap event
view.eventify({ eventName: "doubleTap", object: view });

// simulate a longPress event
view.eventify({ eventName: "longPress", object: view});
// or with the optional info param you can specify the duration of the press
view.eventify({ eventName: "longPress", object: view }, { duration: 1000 });

// simulate a swipe event
// must include the direction, here we trigger a left swipe event.
view.eventify({ eventName: "swipe", object: view }, { direction: "left" });
```

Take a look at this [Playground](https://play.nativescript.org/?template=play-js&id=PpA1wb) for a working example.

## API

| Properties | Required | Description |
| --- | --- | --- |
| EventData | Yes | The event name and object, just like using `notify`. |
| Info | Sometimes | Some of the events, like `swipe` need extra information. |

### Info

| Event | Required | Properties | Description |
| --- | --- | --- | --- |
| tap | No | n/a | n/a |
| doubleTap | No | n/a | n/a |
| longPress | Optional | duration: number | How long the press should last for, in milliseconds. |
| swipe | Yes | direction: string | Either "left", "up", "right", or "down" |

## What's next
 - Add support for `pan` events
 - Add support for `pinch` events
 - Add support for `rotate` events
