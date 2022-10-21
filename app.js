const blurEffect = document.querySelector("#blur");
const spacing = document.querySelector("#spacing");
const base = document.querySelector("#base");
const root = document.documentElement;


blurEffect.addEventListener('change', function () {
    root.style.setProperty('--blur', blurEffect.value + "px");
})
spacing.addEventListener('change', function () {
    root.style.setProperty('--spacing', spacing.value + "px");
})
base.addEventListener('change', function () {
    root.style.setProperty('--main-color', base.value);
})