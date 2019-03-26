import { topmost } from "tns-core-modules/ui/frame";
import { getBaseClasses } from "tns-core-modules/utils/types";

// Add supported event names here.
const eventify_events = ["tap"];

export interface EventData {
  eventName: string;
  object: object;
}

export interface EventInfo {
  press?: number;
  direction?: "left" | "up" | "right" | "down";
}

/**
 * Checks if we need to manually trigger the event notification or if the objects own notify method can do it. Returns a boolean.
 * 
 * Right now we only deal with tap events so if the eventName is not "tap" or it is but the object is a Button then we return true and the object notify method will handle it.
 * 
 * @param viewBase - The ViewBase raising the event in question.
 * @param eventName - The name of the requested event.
 * 
 * @returns boolean
 */
export const canBeHandledByNotify = (viewBase, eventName) => {
  if (
    !eventify_events.includes(eventName) ||
    getBaseClasses(viewBase).includes("Button")
  ) {
    return true;
  }

  return false;
};

/**
 * Returns the x and y origin values for the view relative to the current page.
 * 
 * @param view - The View we want the location of.
 * 
 * @returns { x: number, y: number }
 */
export const getObjectXYRelativeToPage = view =>
  view.getLocationRelativeTo(topmost().currentPage);
