import * as Common from "./eventify.common";
import { ViewBase } from "tns-core-modules/ui/core/view-base";

//@ts-ignore
ViewBase.prototype.eventify = function(data: Common.EventData): void {
  const object = data.object;
  const eventName = data.eventName;

  const getCoordinateWithAxisAndDimention = (axis: string, dimension: string) =>
    this.object.getLocationInWindow()[axis] -
    this.object.getActualSize()[dimension] / 2;

  Common.canBeHandledByNotify(data)
    ? data.object.notify(data)
    : () => {
        // Simulates a pointer touching down onto the device.
        this.object.android.dispatchTouchEvent(
          android.view.MotionEvent.obtain(
            android.os.SystemClock.uptimeMillis(),
            android.os.SystemClock.uptimeMillis(),
            android.view.MotionEvent.ACTION_DOWN,
            this.getCoordinateWithAxisAndDimention("x", "width"),
            this.getCoordinateWithAxisAndDimention("y", "height"),
            0
          )
        );

        // Simulates a ponter raising up from the device.
        this.object.android.dispatchTouchEvent(
          android.view.MotionEvent.obtain(
            android.os.SystemClock.uptimeMillis(),
            android.os.SystemClock.uptimeMillis(),
            android.view.MotionEvent.ACTION_UP,
            this.getCoordinateWithAxisAndDimention("x", "width"),
            this.getCoordinateWithAxisAndDimention("y", "height"),
            0
          )
        );
      };
};
