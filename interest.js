const principalInput = document.querySelector("#principal");
const aprSlider = document.querySelector("#apr");
const aprText = document.querySelector("#aprText");
const compoundInput = document.querySelector("#times");
const totalYearsInput = document.querySelector("#perYear");
const interestAccum = document.querySelector("#accumulated");
const amountOutput = document.querySelector("#answer");

aprSlider.addEventListener("input", () => {
  aprText.textContent = aprSlider.value;
  calculateAmount();
});

principalInput.addEventListener("input", calculateAmount);
compoundInput.addEventListener("input", calculateAmount);
totalYearsInput.addEventListener("input", calculateAmount);

function calculateAmount() {
  const principal = Number(principalInput.value);
  const interest = Number(aprSlider.value);
  const compound = Number(compoundInput.value);
  const totalYears = Number(totalYearsInput.value);

  if (principal > 0 && interest >= 0 && compound > 0 && totalYears > 0) {
    const accuredAmount =
      principal * (1 + interest / 100 / compound) ** (compound * totalYears);

    const interestAmount = accuredAmount - principal;
    interestAccum.textContent = `$${interestAmount.toFixed(2)}`;
    amountOutput.textContent = `$${accuredAmount.toFixed(2)}`;
  }
}
