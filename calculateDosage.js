    function calculateDosage(form) {
        princ = form.weight.value - form.numDoses.value;
        intRate = (form.percentCBD.value/100) / 12;
        months = form.potency.value * 12;
        form.pmt.value = Math.floor((princ*intRate)/(1-Math.pow(1+intRate,(-1*months)))*100)/100;
  	form.dosage.value = princ;
	form.dailyDosage.value = months;