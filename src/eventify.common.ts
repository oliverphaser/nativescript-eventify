import { View } from "tns-core-modules/ui/core/view";
import { getBaseClasses } from "tns-core-modules/utils/types";

export interface EventData {
  eventName: string;
  object: View;
}

/**
 * Checks if we need to manually trigger the event notification or if the objects own notify method can do it. Returns a boolean.
 * 
 * Right now we only deal with tap events so if the eventName is not "tap" or it is but the object is a Button then we return true and the object notify method will handle it.
 * 
 * @param data - the eventName and object handed to notify(...);
 * 
 */
export const canBeHandledByNotify = (data: EventData) =>
  data.eventName !== "tap" || getBaseClasses(data.object)[0] === "Button";
