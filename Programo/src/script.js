//addMovingAnim(selector(string), duration(num), distance(num))
/* import { movingElement } from "../src/lib.js";
import { addRotateAnim } from "../src/lib.js";
import { addFadeOut } from "../src/lib.js";

movingElement('#move', 1000, 200);
movingElement('#move2', 5000, 600);

//addRotateAnim(selector, duration)
addRotateAnim('#rotate', 2000);

//addFadeOut(selector, duration)
let fade = document.getElementById('fade');
fade.addEventListener('click', () => {
    addFadeOut('.fade', 1500);
});

let fade2 = document.getElementById('fade2');
fade2.addEventListener('click', () => {
    addFadeOut('.fade2', 1500);
}); */

import * as addAnim from "../src/lib.js";

addAnim.movingElement('#move', 1000, 200)
addAnim.movingElement('#move2', 5000, 600)

//addRotateAnim(selector, duration)
addAnim.addRotateAnim('#rotate', 2000)

//addFadeOut(selector, duration)
let fade = document.getElementById('fade');
fade.addEventListener('click', () => {
    addFadeOut('.fade', 1500)
});