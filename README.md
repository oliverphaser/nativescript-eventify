# NativeScript Eventify
NativeScript has a method called `notify` you can use to notify an observable of changes. But you can't use it to trigger events like tap, swipe etc... 

Enter eventify. Now you can call `tap`, `doubelTap`, `longPress`, and `swipe` events programmatically. With `pan`, `pinch`, and `rotate` coming.

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
#### tap example
```xml
// home-page.xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd">
	<StackLayout>
		<Label id="title" class="title" text="Eventify"/>
		<Button id="button" class="button" text="Eventify Tap" tap="buttonTap" />
		<Label id="label" class="label" text="Eventify Tap" tap="toggleLabelColor" />
	</StackLayout>
</Page>
```

```js
// home-page.js

exports.buttonTap = args => {
	const button = args.object;
	const label = button.parent.getChildById("label");
	
	// Will trigger the tap event.
	label.eventify({ eventName: "tap", object: label });
};

exports.toggleLabelColor = args => {
	const label = args.object;
	const title = label.parent.getChildById("title");
	
	label.animate({
		backgroundColor: /FF0000/.test(label.backgroundColor) ? "blue" : "red",
		duration: 320
	}).then(() => title.text.split("").reverse().join(""));
}
```

## API

| Properties | required | Description |
| --- | --- | --- |
| EventData | Yes | The event name and object, just like using `notify`. |
| Info | Sometimes | Some of the events, like `swipe` need extra information. |

### Info

| Event | Required | Description |
| --- | --- | --- |
| tap | No | - |
| doubleTap | No | - |
| longPress | Optional | Can provide a number for the press duration |
| swipe | Yes | The swipe direction. Either "left", "up", "right", or "down" |
