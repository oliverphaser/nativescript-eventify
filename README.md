# NativeScript Notify

Lets you programatically notify a views observer of an event _(just 'tap' for now)_.

## Installation
```javascript
//app.js
require("nativescript-notify");
```

## Usage 

```xml
// home.xml
<Page loaded="pageLoaded">
	<Label id="label" text="Tap to make me blue" tap="makeBlue" backgroundColor="green" />
	<Button id="button" text="Tap to make me red" tap="makeRed" backgroundColor="yello" />
</Page>
```

```js
// home.js
exports.pageLoaded = args => {
	const page = args.object;
	const label = page.getViewById("label");
	const button = page.getViewById("button");
	
	// Only works because of the plugin.
	label.notify({ eventName: "tap", object: label });
	
	// Would have worked regardless.
	button.notify({eventName: "tap", object: button});
}

exports.makeRed = args => args.object.backgroundColor = "red";
exports.makeBlue = args => args.object.backgroundColor = "blue";
```


## API
Use it just like you use `notify` already.
