const listBtn = document.querySelector("#listen");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const resumeBtn = document.querySelector("#resume");
const selectEl = document.querySelector("select");
const speech = new SpeechSynthesisUtterance();
let voices = null;

listBtn.addEventListener("click", () => {
  const textValue = document.querySelector("textarea").value;
  speech.text = textValue;
  window.speechSynthesis.speak(speech);
});

pauseBtn.addEventListener("click", () => {
  const textValue = document.querySelector("textarea").value;
  speech.text = textValue;
  window.speechSynthesis.pause(speech);
});

stopBtn.addEventListener("click", () => {
  const textValue = document.querySelector("textarea").value;
  speech.text = textValue;
  window.speechSynthesis.paused(speech);
});

resumeBtn.addEventListener("click", () => {
  const textValue = document.querySelector("textarea").value;
  speech.text = textValue;
  window.speechSynthesis.cancel(speech);
});

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
    console.log(voices);
  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    return (selectEl.options[i] = new Option(voice.name, i));
  });
};

selectEl.addEventListener("change", () => {
  speech.voice = voices[selectEl.value];
});
