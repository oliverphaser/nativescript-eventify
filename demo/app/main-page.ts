import { notify } from "nativescirpt-notify";

export const indirect = args => {
  const button = args.object;
  const label = button.parent.getViewById("fake-button");
  label.notify({ eventName: "tap", object: label });
};

export const direct = args => {
  const label = args.object;
  const heading = label.parent.getViewById("title");
  label
    .animate({
      backgroundColor: /0a0a0a/.test(label) ? "#dc9400" : "#0a0a0a",
      duration: 320
    })
    .then(() =>
      heading.text
        .split("")
        .reverse()
        .join("")
    );
};
