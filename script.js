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
  customSepWrap.style.display =
    separatorSelect.value === "custom" ? "flex" : "none";
});

/* ======================================
   Copy Function (Toast Version)
   ====================================== */
function copyText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied!");
  });
}

/* ======================================
   Toast Helper Function
   ====================================== */
function showToast(message) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 2000);
}

/* ======================================
   Elements
   ====================================== */
const generateBtn = document.getElementById("generate");
const inputText = document.getElementById("inputText");
const repeatCount = document.getElementById("repeatCount");
const addNumber = document.getElementById("addNumber");
const customSeparator = document.getElementById("customSeparator");
const outputText = document.getElementById("outputText");

/* ======================================
   Generate Button Logic
   ====================================== */
generateBtn.addEventListener("click", () => {
  let text = inputText.value;

  // Always trim
  text = text.trim();

  const n = Math.max(
    1,
    Math.min(10000, parseInt(repeatCount.value || "1", 10))
  );

  let sep = separatorSelect.value;
  if (sep === "custom") sep = customSeparator.value;
  else if (sep === "newline") sep = "\n";
  else if (sep === "space") sep = " ";

  const parts = [];
  for (let i = 1; i <= n; i++) {
    parts.push(addNumber.checked ? `${i}. ${text}` : text);
  }

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
