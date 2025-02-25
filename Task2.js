function NumericSequence(start, end, step) {
  this.step = step;
  this.start = start;

  var numericSequence = [];

  function fillList() {
    for (let numeric = start; numeric <= end; numeric += step) {
      numericSequence.push(numeric);
    }
  }

  fillList();

  this.getNumericSequence = function () {
    return numericSequence;
  };
}

NumericSequence.prototype.isValidSequence = function (newNumeric) {
  return (newNumeric - this.start) % this.step === 0;
};

NumericSequence.prototype.isDuplicatedNumeric = function (newNumeric) {
  return this.getNumericSequence().indexOf(newNumeric) !== -1;
};

NumericSequence.prototype.append = function (appendValue) {
  if (this.isDuplicatedNumeric(appendValue))
    throw new Error("Duplicate Numeric values are not allowed.");
  if (!this.isValidSequence(appendValue))
    throw new Error("New Numeric Value does not match sequence step.");

  return this.getNumericSequence().push(appendValue);
};

NumericSequence.prototype.prepend = function (prependValue) {
  if (this.isDuplicatedNumeric(prependValue))
    throw new Error("Duplicate Numeric values are not allowed.");
  if (!this.isValidSequence(prependValue))
    throw new Error("New Numeric Value does not match sequence step.");

  return this.getNumericSequence().unshift(prependValue);
};

NumericSequence.prototype.dequeue = function () {
  return this.getNumericSequence().shift();
};

NumericSequence.prototype.pop = function () {
  return this.getNumericSequence().pop();
};
