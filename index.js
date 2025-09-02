const modes = [
    { cls: "normal", text: "FAST X100" },
    { cls: "fastx100", text: "FAST X1000" },
    { cls: "fastx1000", text: "FAST X10000" },
    { cls: "fastx10000", text: "NORMAL" }
];

const main = document.querySelector("main");
const fastBtn = document.querySelector(".fast-btn");
const pauseBtn = document.querySelector(".pause-btn");

fastBtn.addEventListener("click", () => {
    // сохраняем, есть ли пауза
    const isPaused = main.classList.contains("paused");

    // текущий индекс
    let currentIndex = modes.findIndex(m => main.classList.contains(m.cls));
    if (currentIndex === -1) currentIndex = 0;

    // следующий индекс
    const nextIndex = (currentIndex + 1) % modes.length;

    // меняем класс, не убирая .paused
    main.classList.remove(modes[currentIndex].cls);
    main.classList.add(modes[nextIndex].cls);

    // обновляем текст кнопки
    fastBtn.textContent = modes[nextIndex].text;

    // если была пауза — оставляем
    if (isPaused) main.classList.add("paused");
});

pauseBtn.addEventListener("click", () => {
    main.classList.toggle("paused");
    pauseBtn.textContent = main.classList.contains("paused") ? "RESUME" : "PAUSE";
});



