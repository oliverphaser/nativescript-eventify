import * as Common from "./eventify.common";
import { ViewBase } from "tns-core-modules/ui/core/view-base";

declare const UIGestureRecognizerStateEnded: number;

//@ts-ignore
ViewBase.prototype.eventify = function(data: Common.EventData): void {
  Common.canBeHandledByNotify(data)
    ? data.object.notify(data)
    : () => {
        const index = [...data.object.ios.gestureRecognizers].findIndex(
          gesture => gesture.numberOfTapsRequired
        );

        /**
       * The gesture recognizer has received touches recognized as the end of a continuous gesture. It sends its action message (or messages) at the next cycle of the run loop and resets its state to UIGestureRecognizer.State.possible.
      */
        data.object.ios.gestureRecognizers[
          index
        ].state = UIGestureRecognizerStateEnded;
      };
};
