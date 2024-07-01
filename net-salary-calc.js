function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Invalid input! Please enter valid numbers for salary and benefits.");
        return;
    }

    const grossSalary = basicSalary + benefits;

    // NSSF deduction (assuming Tier I and Tier II contributions, up to a maximum of Ksh 1,080)
    const nssfDeduction = Math.min(grossSalary * 0.06, 1080);

    // NHIF deduction
    const nhifDeduction = getNhifDeduction(grossSalary);

    // PAYE calculation
    const paye = calculatePAYE(grossSalary - nssfDeduction);

    const netSalary = grossSalary - nssfDeduction - nhifDeduction - paye;

    alert(`
        Gross Salary: Ksh ${grossSalary.toFixed(2)}
        NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}
        NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}
        PAYE (Tax): Ksh ${paye.toFixed(2)}
        Net Salary: Ksh ${netSalary.toFixed(2)}
    `);
}

function getNhifDeduction(grossSalary) {
    // NHIF deduction rates based on provided link
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // grossSalary >= 100000
}

function calculatePAYE(taxableIncome) {
    // PAYE rates based on provided link
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        paye = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }

    // Personal relief of Ksh 2,400 per month
    const personalRelief = 2400;
    paye = Math.max(0, paye - personalRelief);

    return paye;
}

calculateNetSalary();
