let inputTextArea = document.querySelector("#input__textarea");
let characCount = document.querySelector("#charac__count");
let wordCount = document.querySelector("#word__count");

inputTextArea.addEventListener("input", () => {
    characCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});