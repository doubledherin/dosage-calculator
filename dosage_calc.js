function checkForZero(field) {
        if (field.value == 0 || field.value.length == 0) {
            alert ("This field can't be 0!");
            field.focus(); }
        else
	    calculateDosage(field.form);
    }

    function cmdCalc_Click(form) {
        if (form.weight.value == 0 || form.weight.value.length == 0) {
            alert ("The weight field can't be 0!");
            form.weight.focus(); }
        else if (form.ratioCBD.value == 0 || form.ratioCBD.value.length == 0) {
            alert ("The Interest Rate field can't be 0!");
            form.ratioCBD.focus(); }
        else if (form.potency.value == 0 || form.potency.value.length == 0) {
            alert ("The potency level can't be 0!");
            form.potency.focus(); }
        else
            calculateDosage(form);
    }

    function calculateDosage(form) {
	form.dailyConcentrate.value = ((form.potency.value * form.weight.value) / form.ratioCBD.value) * 1000;
    form.dosage.value = form.dailyConcentrate.value / form.numDoses.value;

    }