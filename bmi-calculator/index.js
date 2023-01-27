const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('bmi-result');
const rangeBmiEl = document.getElementById('weight-condition');

function calculateBMI() {
  const heightValue = document.getElementById('height').value / 100;
  const weightValue = document.getElementById('weight').value;
  const bmiValue = weightValue / heightValue ** 2;
  resultEl.value = bmiValue.toFixed(6);
  let result = '';
  if (bmiValue < 18.5) {
    result = 'underweight';
    rangeBmiEl.style.color = 'orange';
    rangeBmiEl.style.fontWeight = 'bold';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    result = 'Healthy Weight';
    rangeBmiEl.style.color = 'blue';
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    result = 'Overweight';
    rangeBmiEl.style.color = '#FF7F7F'; // light red
    rangeBmiEl.style.fontWeight = 'bold';
  } else {
    result = 'Obese';
    rangeBmiEl.style.color = 'red';
    rangeBmiEl.style.fontWeight = 'bold';
  }
  rangeBmiEl.innerText = result;
}
btnEl.addEventListener('click', calculateBMI);
