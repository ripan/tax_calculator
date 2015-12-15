
var Person = function(title, name) {
    this.title = title;
    this.name = name;
};

Person.prototype.setIncome = function(income) {
    if (income <= 0) {
        throw new Error("income must be greater then 0");
    }
    this.income = income;
};


Person.prototype.tax = function() {

    // All income up to £31,785 will be taxed at 20%
    // All income between £31,786 and £150,000 will be taxed at 40%
    // All income above £150,000 will be taxed at 45%


    taxableSalary = this.income;

    HIGHER_TAX_SLAB = 150000;
    STANDARD_TAX_SLAB = 31785;


    HIGHER_TAX_PERCENTAGE = .45;
    STANDARD_TAX_PERCENTAGE = .40;
    STARTING_TAX_PERCENTAGE = .20;


    higher_rate_taxable = 0
    standard_rate_taxable = 0
    starting_rate_taxable = 0


    if (taxableSalary > HIGHER_TAX_SLAB) {
        higher_rate_taxable = taxableSalary - HIGHER_TAX_SLAB;
        taxableSalary = taxableSalary - higher_rate_taxable;
    }

    if (taxableSalary > STANDARD_TAX_SLAB) {
        standard_rate_taxable = taxableSalary - STANDARD_TAX_SLAB;
        taxableSalary = taxableSalary - standard_rate_taxable;
    }

    if (taxableSalary <= STANDARD_TAX_SLAB) {
        starting_rate_taxable = taxableSalary;
    }

    // log = higher_rate_taxable + "---" + standard_rate_taxable + "---" + starting_rate_taxable;
    var tax = higher_rate_taxable * HIGHER_TAX_PERCENTAGE + standard_rate_taxable * STANDARD_TAX_PERCENTAGE + starting_rate_taxable * STARTING_TAX_PERCENTAGE;

    
    return tax;
};

module.exports = Person;
