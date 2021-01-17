console.log('Connected');

<<<<<<< HEAD
//Get input elements
const homePriceInput = document.getElementById('home-price-input');
const homePriceSliderInput = document.getElementById('home-price-slider');
const downPaymentAmountInput = document.getElementById('down-payment-amt');
const downPaymentPercentInput = document.getElementById('down-payment-pct');
const loanLengthInput = document.getElementById('length-of-loan');
const interestRateInput = document.getElementById('interest-rate');
const monthlyPaymentInput = document.getElementById('monthly-payment-input');
const monthlyPaymentSliderInput = document.getElementById('monthly-payment-slider');
const monthlyPaymentStickyInput = document.getElementById('monthly-payment-sticky-input');
const principleInterestInput = document.getElementById('principal-and-interest');
const homeownerInsuranceInput = document.getElementById('homeowners-insurance');
const propertyTaxInput = document.getElementById('property-tax');
const hoaFeeInput = document.getElementById('hoa-fees');

//Initialize derived elements
var calculatedPrinciple = 0;// = homePriceInput.value - downPaymentAmountInput.value;
var calculatedInterest = 0;// = interestRateInput.value/100/12;
var calculatedLoanLength = 0;// = loanLengthInput.value*12;
var additionalCosts = 0;// = homeownerInsuranceInput.value + propertyTaxInput.value + hoaFeeInput.value;

/**
 * Calculate and update value of down-payment-pct
 *
 * @param {number} homePrice input value of home-price-input
 * @param {number} downPaymentAmount input value of down-payment-amt
 */
function calculateDownPayPercent(homePrice, downPaymentAmount) {
  //check homePrice to avoid divide by zero error
  if (homePrice > 0) {
    downPaymentPercentInput.value = parseFloat((downPaymentAmount/homePrice)*100).toFixed(3);
=======
var H; //home price
var DA; //down payment amount
var DP = document.getElementById('down-payment-amt').value; //down payment percentage
var M; //monthly mortgage payment
var P; //principle / initial amount borrowed
var I = document.getElementById('interest-rate').value; //monthly interest rate
var N; //number of payments months

const monthlyPaymentStickyInput = document.getElementById('monthly-payment-sticky-input');
const principleInterestInput = document.getElementById('principal-and-interest');

//these calculations need to run when the following elements change:
// home price, down payment amount, interest rate, length of loan
function updateInputs() {
  H = parseFloat(homePriceInput.value);
  DA = parseFloat(downPaymentAmountInput.value);
  P = H-DA;
  I = parseFloat(interestRateInput.value) / 100 / 12;
  N = parseInt(loanLengthInput.value) * 12;

  //need to check H so that we do not attempt to divide by zero
  console.log(P);
  if (H > 0) {
    calcMonthlyPayment(P, N, I);
    calcDownPayPercent(H, DA);
>>>>>>> d5b603a6f02c9eb04a5303db762abe8ecb3caece
  } else {
    downPaymentPercentInput.value = 0.000;
  }
  return downPaymentPercentInput.value;
}

<<<<<<< HEAD
/**
 * Calculate and update value of principal-and-interest
 *
 * @param {number} homePrice input value of home-price-input
 * @param {number} downPaymentPercent input value of down-payment-pct
 */
function calculateDownPayAmount(homePrice, downPaymentPercent) {
  downPaymentAmountInput.value = parseFloat(homePrice*(downPaymentPercent/100)).toFixed(2);
  return downPaymentAmountInput.value;
=======
// these calculations need to run when the following elements change:
// monthly payment
function updateMP() {
    M = parseFloat(monthlyPaymentInput.value);
    if (M > 0) {
      calcHouseValue(M, N, I, DA);
      DP = calcDownPayPercent(H, DA);
    }
>>>>>>> d5b603a6f02c9eb04a5303db762abe8ecb3caece
}

/**
 * Calculate and update value of principal-and-interest
 *
 * @param {number} calcPrinciple global variable calculatedPrinciple
 * @param {number} calcLoanLength global variable calculatedLoanLength
 * @param {number} calcInterest global variable calculatedInterest
 */
function calculatePrincipleAndInterest(calcPrinciple, calcLoanLength, calcInterest) {
  if (calcInterest > 0 && calcLoanLength > 0) {
    principleInterestInput.value = parseFloat(calcPrinciple * calcInterest * (Math.pow(1 + parseFloat(calcInterest), calcLoanLength)) / (Math.pow(1 + parseFloat(calcInterest), calcLoanLength) - 1)).toFixed(2);
  } else if (calcLoanLength > 0) {
    principleInterestInput.value = parseFloat(calcPrinciple / calcLoanLength).toFixed(2);
  } else {
    principleInterestInput.value = parseFloat(calcPrinciple).toFixed(2);
  }
  return principleInterestInput.value;
}

<<<<<<< HEAD
/**
 * Calculate and update value of monthly-payment-input (including slider and sticky)
 *
 * @param {number} principleAndInterest input value of principal-and-interest
 * @param {number} addCosts global variable additionalCosts
 */
function calculateMonthlyPayment(principleAndInterest, addCosts){
  monthlyPaymentInput.value = parseFloat(parseFloat(principleAndInterest) + parseFloat(addCosts)).toFixed(2);
  monthlyPaymentSliderInput.value = monthlyPaymentInput.value
  monthlyPaymentStickyInput.value = monthlyPaymentInput.value;
  return monthlyPaymentInput.value;
=======
  monthlyPaymentInput.value  = M ?  M.toFixed(0) : 0.00;
  monthlyPaymentStickyInput.value = monthlyPaymentInput.value;
  principleInterestInput.value = M; 
>>>>>>> d5b603a6f02c9eb04a5303db762abe8ecb3caece
}

/**
 * Calculate and update value of home-price-input (including slider)
 *
 * @param {number} monthlyPayment input value of home-price-input
 * @param {number} calcLoanLength global variable calculatedLoanLength
 * @param {number} calcInterest global variable calculatedInterest
 * @param {number} downPaymentAmount input value of down-payment-amt
 */
function calculateHomePrice(monthlyPayment, calcLoanLength, calcInterest, downPaymentAmount) {
  homePriceInput.value = parseFloat((monthlyPayment / calcInterest / (Math.pow(1 + parseFloat(calcInterest), calcLoanLength))) * (Math.pow(1 + parseFloat(calcInterest), calcLoanLength) - 1) + downPaymentAmount).toFixed(2);
  homePriceSliderInput.value = homePriceInput.value;
  return homePriceInput.value;
}

/**
 * Update derived global variable with relevant user updates
 *
 * @param {number} homePrice input value of home-price-input
 * @param {number} downPaymentAmount input value of down-payment-amt
 * @param {number} interestRate input value of interest-rate
 * @param {number} loanLength input value of length-of-loan
  */
function deriveLoanVariablesAfterUpdate(homePrice, downPaymentAmount, interestRate, loanLength) {
  calculatedPrinciple = homePrice - downPaymentAmount;
  calculatedInterest = interestRate/100/12;
  calculatedLoanLength = loanLength*12;
}

/**
 * Update derived global variable with relevant user updates
 *
 * @param {number} homeInsurance input value of homeowners-insurance
 * @param {number} propertyTax input value of property-tax
 * @param {number} hoaFee input value of hoa-fees
 */
function deriveAdditionalCostsAfterUpdate(homeInsurance, propertyTax, hoaFee) {
  additionalCosts = 0;
  additionalCosts = homeInsurance ? parseFloat(homeInsurance) + parseFloat(additionalCosts) : additionalCosts;
  additionalCosts = propertyTax ? parseFloat(propertyTax) + parseFloat(additionalCosts) : additionalCosts;
  additionalCosts = hoaFee ? parseFloat(hoaFee) + parseFloat(additionalCosts) : additionalCosts;
}

/**
 * Check for NaN values due to user removing input; apply default to avoid broken calculations
 */
function checkForUndefined() {
  homePriceInput.value = homePriceInput.value ? homePriceInput.value : 0.00;
  downPaymentAmountInput.value = downPaymentAmountInput.value ? downPaymentAmountInput.value : 0.00;
  downPaymentPercentInput.value = downPaymentPercentInput.value ? downPaymentPercentInput.value : 0.00;
  //loanLengthInput.value = loanLengthInput.value ? loanLengthInput.value : 0;
  interestRateInput.value = interestRateInput.value ? interestRateInput.value : 0.000;
  monthlyPaymentInput.value = monthlyPaymentInput.value ? monthlyPaymentInput.value : 0.00;
  principleInterestInput.value = principleInterestInput.value ? principleInterestInput.value : 0.00;
  homeownerInsuranceInput.value = homeownerInsuranceInput.value ? homeownerInsuranceInput.value : 0.00;
  propertyTaxInput.value = propertyTaxInput.value ? propertyTaxInput.value : 0.00;
  hoaFeeInput.value = hoaFeeInput.value ? hoaFeeInput.value : 0.00;
}

/**
 * Enable chart display of Monthly Payment cost breakdown
 */
function chartResults() {
  //TBD
}

// Event Listeners for user input
// [key: if value changes --> return updated value(s)]

// Home Price --> Down Payment Percent; Principal+Interest; Monthly Payment
homePriceInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedHomePrice = parseFloat(homePriceInput.value).toFixed(2);
  homePriceSliderInput.value = updatedHomePrice;
  deriveLoanVariablesAfterUpdate(updatedHomePrice, downPaymentAmountInput.value, interestRateInput.value, loanLengthInput.value);
  calculateDownPayPercent(updatedHomePrice, downPaymentAmountInput.value);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});
homePriceSliderInput.addEventListener('input',function() {
  let updatedHomePrice = parseFloat(homePriceSliderInput.value).toFixed(2);
  homePriceInput.value = updatedHomePrice;
  deriveLoanVariablesAfterUpdate(updatedHomePrice, downPaymentAmountInput.value, interestRateInput.value, loanLengthInput.value);
  calculateDownPayPercent(updatedHomePrice, downPaymentAmountInput.value);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});

// Down Payment Amount --> Down Payment Percent; Principal+Interest; Monthly Payment
downPaymentAmountInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedDownPaymentAmount = parseFloat(downPaymentAmountInput.value).toFixed(2);
  deriveLoanVariablesAfterUpdate(homePriceInput.value, updatedDownPaymentAmount, interestRateInput.value, loanLengthInput.value);
  calculateDownPayPercent(homePriceInput.value, updatedDownPaymentAmount);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});

// Down Payment Percent --> Down Payment Amount; Principal+Interest; Monthly Payment
downPaymentPercentInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedDownPayPercent = parseFloat(downPaymentPercentInput.value).toFixed(2);
  calculateDownPayAmount(homePriceInput.value, updatedDownPayPercent);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});

<<<<<<< HEAD
// Length of Loan --> Principal+Interest; Monthly Payment
loanLengthInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedLoanLength = parseFloat(loanLengthInput.value).toFixed(2);
  deriveLoanVariablesAfterUpdate(homePriceInput.value, downPaymentAmountInput.value, interestRateInput.value, updatedLoanLength);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});
=======
// payment
const monthlyPaymentContainer = document.getElementById('monthly-payment-container');
const monthlyPaymentInputContainer = document.getElementById('monthly-payment');
const monthlyPaymentInput = document.getElementById('monthly-payment-input');
const monthlyPaymentSliderInput = document.getElementById('monthly-payment-slider');
const monthlyPaymentStickyContainer = document.getElementById('monthly-payment-sticky-container');
const monthlyPaymentSticky = document.getElementById('monthly-payment-sticky');
// const monthlyPaymentStickyInput = document.getElementById('monthly-payment-sticky-input');
>>>>>>> d5b603a6f02c9eb04a5303db762abe8ecb3caece

// Interest Rate -->  Principal+Interest; Monthly Payment
interestRateInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedInterestRate = parseFloat(interestRateInput.value).toFixed(6);
  deriveLoanVariablesAfterUpdate(homePriceInput.value, downPaymentAmountInput.value, updatedInterestRate, loanLengthInput.value);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});

<<<<<<< HEAD
// Monthly Payment --> Home Price; Down Payment Percent; Principal+Interest; Property Tax
monthlyPaymentInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedMonthlyPayment = parseFloat(monthlyPaymentInput.value).toFixed(2);
  monthlyPaymentSliderInput.value = updatedMonthlyPayment;
  monthlyPaymentStickyInput.value = updatedMonthlyPayment;
  calculateHomePrice(updatedMonthlyPayment, calculatedLoanLength, calculatedInterest, downPaymentAmountInput.value);
  deriveLoanVariablesAfterUpdate(homePriceInput.value, downPaymentAmountInput.value, interestRateInput.value, loanLengthInput.value);
  calculateDownPayPercent(homePriceInput.value, downPaymentAmountInput.value);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  //TBD: calculatePropertyTax();
});
monthlyPaymentSliderInput.addEventListener('input',function() {
  let updatedMonthlyPayment = parseFloat(monthlyPaymentSliderInput.value).toFixed(2);
  monthlyPaymentInput.value = updatedMonthlyPayment;
  monthlyPaymentStickyInput.value = updatedMonthlyPayment;
  calculateHomePrice(updatedMonthlyPayment, calculatedLoanLength, calculatedInterest, downPaymentAmountInput.value);
  deriveLoanVariablesAfterUpdate(homePriceInput.value, downPaymentAmountInput.value, interestRateInput.value, loanLengthInput.value);
  calculateDownPayPercent(homePriceInput.value, downPaymentAmountInput.value);
  calculatePrincipleAndInterest(calculatedPrinciple, calculatedLoanLength, calculatedInterest);
  //TBD: calculatePropertyTax();
});

// Insurance, Taxes, or HOA --> Monthly Payment
homeownerInsuranceInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedHomeInsurance = parseFloat(homeownerInsuranceInput.value).toFixed(2);
  deriveAdditionalCostsAfterUpdate(updatedHomeInsurance, propertyTaxInput.value, hoaFeeInput.value)
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});
propertyTaxInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedPropertyTax = parseFloat(propertyTaxInput.value).toFixed(2);
  deriveAdditionalCostsAfterUpdate(homeownerInsuranceInput.value, updatedPropertyTax, hoaFeeInput.value)
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});
hoaFeeInput.addEventListener('input',function() {
  checkForUndefined();
  let updatedHoaFee = parseFloat(hoaFeeInput.value).toFixed(2);
  deriveAdditionalCostsAfterUpdate(homeownerInsuranceInput.value, propertyTaxInput.value, updatedHoaFee)
  calculateMonthlyPayment(principleInterestInput.value, additionalCosts);
});
=======
//
// const principleInterestInput = document.getElementById('principal-and-interest');
const homeownerInsuranceInput = document.getElementById('homeowners-insurance');
const propertyTaxInput = document.getElementById('property-tax');
const hoaFeeInput = document.getElementById('hoa-fees');

principleInterestInput.addEventListener('change', eventHandler);
homeownerInsuranceInput.addEventListener('change', function() {
  updateMP();
});
propertyTaxInput.addEventListener('change',eventHandler);
propertyTaxInput.addEventListener('change',eventHandler);
hoaFeeInput.addEventListener('change',eventHandler);
>>>>>>> d5b603a6f02c9eb04a5303db762abe8ecb3caece

//The following elements should not allow user edits:
//monthlyPaymentStickyInput.addEventListener('input',updateMP);
//principleInterestInput.addEventListener('input',updateInputs);

// event handler to test input return value
function eventHandler(event) {
      console.log(event.target.value);
}
