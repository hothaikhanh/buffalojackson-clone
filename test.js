c;

window.location.href =
    "https://elearning.viettel.vn/odol-chi-tiet?id=e466bc3f-e270-4f80-a402-86e24219903d&isContinue=1";

document.querySelector(".fixbutton").click();

var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== "undefined" ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
    "keydown", // event type: keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // view: should be window
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    40, // keyCode: unsigned long - the virtual key code, else 0
    0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);
document.dispatchEvent(keyboardEvent);

let tar = document.querySelector("iframe");

tar.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keypress", {
        key: "Space",
    });
    document.body.dispatchEvent(keyEvent);
});

tar.click();

tar.dispatchEvent(
    new KeyboardEvent("keydown", {
        key: "Enter",
        keyCode: 13, // example values.
        code: "KeyEnter", // put everything you need in this object.
        which: 13,
        shiftKey: false, // you don't need to include values
        ctrlKey: false, // if you aren't going to use them.
        metaKey: false, // these are here for example's sake.
    })
);

document.querySelector("iframe").contentWindow.document.querySelector(".restart").click();
