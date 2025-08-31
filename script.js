document.getElementById("year").textContent = new Date().getFullYear();

const separatorSelect = document.getElementById("separatorSelect");
const customSepWrap = document.getElementById("customSepWrap");
separatorSelect.addEventListener("change", () => {
  customSepWrap.style.display =
    separatorSelect.value === "custom" ? "flex" : "none";
});

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

const generateBtn = document.getElementById("generate");
const inputText = document.getElementById("inputText");
const repeatCount = document.getElementById("repeatCount");
const addNumber = document.getElementById("addNumber");
const trimInput = document.getElementById("trimInput");
const customSeparator = document.getElementById("customSeparator");
const outputText = document.getElementById("outputText");

generateBtn.addEventListener("click", () => {
  let text = inputText.value;
  if (trimInput.checked) text = text.trim();
  const n = Math.max(
    1,
    Math.min(10000, parseInt(repeatCount.value || "1", 10))
  );
  let sep = separatorSelect.value;
  if (sep === "custom") sep = customSeparator.value;
  else if (sep === "newline") sep = "\n";
  const parts = [];
  for (let i = 1; i <= n; i++) {
    parts.push(addNumber.checked ? `${i}. ${text}` : text);
  }
  outputText.value = parts.join(sep);
});

document
  .getElementById("copyOutput")
  .addEventListener("click", () => copyText(outputText.value));
document.getElementById("clearAll").addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
});
