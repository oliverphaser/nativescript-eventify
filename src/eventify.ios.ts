import * as Common from "./eventify.common";
import { ViewBase } from "@nativescript/core/ui/core/view-base";

declare const UIGestureRecognizerStateEnded: number;

/**
 * Simulates a tap event.
 * 
 * @param viewBase - The object to be touched
 * 
 * @returns void
 */
const tap = viewBase => {
  try {
    viewBase.ios.gestureRecognizers.enumerateObjectsUsingBlock(function(
      item,
      index,
      stop
    ) {
      if (item.numberOfTapsRequired && item.numberOfTapsRequired === 1) {
        /**
         * Sets the gestureRecognizers state to `3` which will trigger the tap event and then set its state back to `0` (possible).
         */
        viewBase.ios.gestureRecognizers[
          index
        ].state = UIGestureRecognizerStateEnded;
      }
    });
  } catch (error) {
    console.log(error);
  }
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
