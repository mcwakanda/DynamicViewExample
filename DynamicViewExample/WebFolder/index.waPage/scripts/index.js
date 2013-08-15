
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock
var htmlContent1 = "<h1>This is a header</h1><p>This is a paragraph</p>";
var htmlContent2 = "<p>This is just a paragraph</p>";

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$('#container2>label').removeClass("label1")
		$('#container2>label').addClass("label2")
		$('#container2>input').removeClass("input1")
		$('#container2>input').addClass("input2")
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$('#container2>label').removeClass("label2")
		$('#container2>label').addClass("label1")
		$('#container2>input').removeClass("input2")
		$('#container2>input').addClass("input1")
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$("#container1").html(htmlContent2);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$("#container1").html(htmlContent1);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
