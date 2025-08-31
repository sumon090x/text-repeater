/* ======================================
   Utility & Global Variables
   ====================================== */

// Footer year auto update
document.getElementById("year").textContent = new Date().getFullYear();

// Separator dropdown and custom separator
const separatorSelect = document.getElementById("separatorSelect");
const customSepWrap = document.getElementById("customSepWrap");

/* ======================================
   Separator Selection Handling
   ====================================== */
separatorSelect.addEventListener("change", () => {
  // Show custom input only when "Custom" is selected
  customSepWrap.style.display =
    separatorSelect.value === "custom" ? "flex" : "none";
});

/* ======================================
   Copy Function
   ====================================== */
function copyText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

/* ======================================
   Elements
   ====================================== */
const generateBtn = document.getElementById("generate");
const inputText = document.getElementById("inputText");
const repeatCount = document.getElementById("repeatCount");
const addNumber = document.getElementById("addNumber");
const trimInput = document.getElementById("trimInput");
const customSeparator = document.getElementById("customSeparator");
const outputText = document.getElementById("outputText");

/* ======================================
   Generate Button Logic
   ====================================== */
generateBtn.addEventListener("click", () => {
  let text = inputText.value;

  // If "Trim" is checked → remove extra spaces from start & end
  if (trimInput.checked) text = text.trim();

  // Repeat count (limited between 1 and 10000)
  const n = Math.max(
    1,
    Math.min(10000, parseInt(repeatCount.value || "1", 10))
  );

  // Separator logic
  let sep = separatorSelect.value;
  if (sep === "custom") sep = customSeparator.value;
  else if (sep === "newline") sep = "\n";
  else if (sep === "space") sep = " "; // ✅ real space now

  // Repeat text generation
  const parts = [];
  for (let i = 1; i <= n; i++) {
    parts.push(addNumber.checked ? `${i}. ${text}` : text);
  }

  // Show result in output box
  outputText.value = parts.join(sep);
});

/* ======================================
   Copy Output Button
   ====================================== */
document.getElementById("copyOutput").addEventListener("click", () => {
  copyText(outputText.value);
});

/* ======================================
   Clear Button
   ====================================== */
document.getElementById("clearAll").addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
});
