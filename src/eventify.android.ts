import * as Common from "./eventify.common";
import { ViewBase } from "@nativescript/core/ui/core/view-base";

/**
 * Simulates a pointer touching down onto the device.
 */
const touchDown = view => {
  const origin = Common.getObjectXYRelativeToPage(view);
  view.android.dispatchTouchEvent(
    android.view.MotionEvent.obtain(
      android.os.SystemClock.uptimeMillis(),
      android.os.SystemClock.uptimeMillis(),
      android.view.MotionEvent.ACTION_DOWN,
      origin.x + view.getActualSize().width / 2,
      origin.y + view.getActualSize().height / 2,
      0
    )
  );
};

/**
 * Simulates a pointer raising up from the device.
 */
const touchUp = veiw => {
  const origin = Common.getObjectXYRelativeToPage(veiw);
  veiw.android.dispatchTouchEvent(
    android.view.MotionEvent.obtain(
      android.os.SystemClock.uptimeMillis(),
      android.os.SystemClock.uptimeMillis(),
      android.view.MotionEvent.ACTION_UP,
      origin.x + veiw.getActualSize().width / 2,
      origin.y + veiw.getActualSize().height / 2,
      0
    )
  );
};

/**
 * Simulates a tap event.
 * 
 * @param view - The object to be touched
 */
const tap = view => {
  touchDown(view);
  touchUp(view);
};

/**
 * Add the eventify method to the ViewBase prototype chain so it's available to everything that extends from it.
 * 
 * @param data - The `eventName` and `object` that would otherwise have been passed to `notify(...)`.
 * @param info - The additional information needed to execute the event.
 * 
 * @returns void
 */
//@ts-ignore
ViewBase.prototype.eventify = function(
  data: Common.EventData,
  info: Common.EventInfo
): void {
  Common.canBeHandledByNotify(this, data.eventName)
    ? this.notify(data)
    : (() => {
        switch (data.eventName) {
          case "tap":
            tap(this);
            break;
        }
      })();
};
