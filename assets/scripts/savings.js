$("#submit").click(function(event) {
	event.preventDefault();
	var hp = $("#hp").val();
	var kwhcost = $("#kwh-cost").val();
	var hours = $("#hours").val();
	var kw = 0.746;
	var vfdratio = $("#method").find(':selected').data("vfdr");
	var methodratio = $("#method").find(':selected').data("ratio");

	console.log("vfdr: " + vfdratio);

	var kwa = hp * kw;
	var kwb = vfdratio * kwa;
	var kwc = methodratio * kwa;
	var kwd = kwc-kwb;
	
//print in table
    var annualsavings = ((kwd * hours) * kwhcost).toFixed(2);
   

	var methodcons= (kwc * hours).toFixed(2);
	

	var vfdcons = (kwd * hours).toFixed(2);
	
//---------------------------------------
	var methodcost = methodcons * kwhcost;
	var vfdcost = vfdcons * kwhcost;
//------------------------------------------
//print in table
	var percentage = (((methodcost - vfdcost)/methodcost)*100).toFixed(0);
	var cored = (kwd * 1.5).toFixed(2);
	

	$("#annual-savings").html("<b>$ " + addCommas(annualsavings) + "</b>");
	$("#current-consumption").html("<b>" + addCommas(methodcons) + " kWh</b>");
	$("#vfd-consumption").html("<b>" + addCommas(vfdcons) + " kWh</b>");
	$("#savings-percent").html("<b>" + percentage + " %</b>");
	$("#co-red").html("<b>" + addCommas(cored) + " ppm</b>");

	// $("form:input").attr('value', '');
	// return false;

	console.log(kwa);
	console.log(kwb);
	console.log(kwc);
	console.log(kwd);
	console.log(annualsavings);
	console.log(methodcons);
	console.log(vfdcons);
	console.log(percentage);



});
	


$("#enviar").click(function(event) {
	event.preventDefault();
	var hp1 = $("#hp").val();
	var kwhcost1 = $("#kwh-cost").val();
	var hours1 = $("#hours").val();
	var kw1 = 0.746;
	var vfdratio1 = $("#method").find(':selected').data("vfdr");
	var methodratio1 = $("#method").find(':selected').data("ratio");
	var method1= document.getElementById("method");

console.log("method: " + method1.value);
	// console.log("vfdr: " + vfdratio);

	var kwa1 = hp1 * kw1;
	var kwb1 = vfdratio1 * kwa1;
	var kwc1 = methodratio1 * kwa1;
	var kwd1 = kwc1-kwb1;
	
//print in table
    var annualsavings1 = ((kwd1 * hours1) * kwhcost1).toFixed(2);
   

	var methodcons1= (kwc1 * hours1).toFixed(2);
	

	var vfdcons1 = (kwd1 * hours1).toFixed(2);
	
//---------------------------------------
	var methodcost1 = methodcons1 * kwhcost1;
	var vfdcost1 = vfdcons1 * kwhcost1;
//------------------------------------------
//print in table
	var percentage1 = (((methodcost1 - vfdcost1)/methodcost1)*100).toFixed(0);
	var cored1 = (kwd1 * 1.5).toFixed(2);
	


document.getElementById("inf_custom_kwhcost").value = kwhcost1;
document.getElementById("inf_custom_motorhp").value = hp1;
document.getElementById("inf_custom_hours").value = hours1;
document.getElementById("inf_custom_method").value = method1.value;


document.getElementById("inf_custom_vfdsavings").value = annualsavings1;
document.getElementById("inf_custom_existingconsumption").value =  methodcons1;
document.getElementById("inf_custom_vfdconsumption").value = vfdcons1;

document.getElementById("inf_custom_percentage").value = percentage1;
document.getElementById("inf_custom_co2reduction").value = cored1;



	

	// $("#annual-savings").html("<b>$ " + addCommas(annualsavings) + "</b>");
	// $("#current-consumption").html("<b>" + addCommas(methodcons) + "</b>");
	// $("#vfd-consumption").html("<b>" + addCommas(vfdcons) + "</b>");
	// $("#savings-percent").html("<b>" + percentage + " %</b>");
	// $("#co-red").html("<b>" + addCommas(cored) + "</b>");

	// $("form:input").attr('value', '');
	// return false;

	// console.log(kwa);
	// console.log(kwb);
	// console.log(kwc);
	// console.log(kwd);
	// console.log(annualsavings);
	// console.log(methodcons);
	// console.log(vfdcons);
	// console.log(percentage);



});

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
