function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["PID_Controller_referenceMode_DW"] = {file: "F:\\Vignesh@@\\College\\Coventry University\\ClassWork\\7146 CEM_ Automotive Software Engineeering_Module 1\\CourseWork\\TASK_4\\A_CruiseControl\\Code\\PID_Controller_referenceModel_ert_rtw\\PID_Controller_referenceModel.c",
	size: 16};
	 this.metricsArray.var["PID_Controller_referenceModel_U"] = {file: "F:\\Vignesh@@\\College\\Coventry University\\ClassWork\\7146 CEM_ Automotive Software Engineeering_Module 1\\CourseWork\\TASK_4\\A_CruiseControl\\Code\\PID_Controller_referenceModel_ert_rtw\\PID_Controller_referenceModel.c",
	size: 8};
	 this.metricsArray.var["PID_Controller_referenceModel_Y"] = {file: "F:\\Vignesh@@\\College\\Coventry University\\ClassWork\\7146 CEM_ Automotive Software Engineeering_Module 1\\CourseWork\\TASK_4\\A_CruiseControl\\Code\\PID_Controller_referenceModel_ert_rtw\\PID_Controller_referenceModel.c",
	size: 8};
	 this.metricsArray.fcn["PID_Controller_referenceModel_initialize"] = {file: "F:\\Vignesh@@\\College\\Coventry University\\ClassWork\\7146 CEM_ Automotive Software Engineeering_Module 1\\CourseWork\\TASK_4\\A_CruiseControl\\Code\\PID_Controller_referenceModel_ert_rtw\\PID_Controller_referenceModel.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["PID_Controller_referenceModel_step"] = {file: "F:\\Vignesh@@\\College\\Coventry University\\ClassWork\\7146 CEM_ Automotive Software Engineeering_Module 1\\CourseWork\\TASK_4\\A_CruiseControl\\Code\\PID_Controller_referenceModel_ert_rtw\\PID_Controller_referenceModel.c",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="javascript:void(0)" onclick="return postParentWindowMessage({message:\'gotoReportPage\', pageName:\'PID_Controller_referenceModel_metrics\'});">Global Memory: 32(bytes) Maximum Stack: 0(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
