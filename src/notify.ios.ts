/**
 * User passes in  the object { eventName: string, object: View }
 */

const notify = object => (object.ios.gestureRecognizers[0].state = 1);
