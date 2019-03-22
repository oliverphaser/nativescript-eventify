/**
 * user passes in the object { eventName: string, object: View }
 */

const notify = object => {
  object.android.dispatchTouchEvent(motionEventDown);
  object.android.dispatchTouchEvent(motionEventUp);
};

const motionEventDown = object =>
  android.view.MotionEvent.obtain(
    android.os.SystemClock.uptimeMillis(),
    android.os.SystemClock.uptimeMillis(),
    android.view.MotionEvent.ACTION_DOWN,
    object.getLocationInWindow().x - object.getActualSize().width / 2,
    object.getLocationInWindow().y - object.getActualSize().height / 2,
    0
  );

const motionEventUp = object =>
  android.view.MotionEvent.obtain(
    android.os.SystemClock.uptimeMillis(),
    android.os.SystemClock.uptimeMillis(),
    android.view.MotionEvent.ACTION_UP,
    object.getLocationInWindow().x - object.getActualSize().width / 2,
    object.getLocationInWindow().y - object.getActualSize().height / 2,
    0
  );
