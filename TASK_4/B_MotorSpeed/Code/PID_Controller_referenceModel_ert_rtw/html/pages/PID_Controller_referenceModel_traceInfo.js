function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/e_k */
	this.urlHashMap["PID_Controller_referenceModel:1"] = "PID_Controller_referenceModel.c:41,44,52,56,58,62,65&PID_Controller_referenceModel.h:41";
	/* <Root>/Add */
	this.urlHashMap["PID_Controller_referenceModel:2"] = "PID_Controller_referenceModel.c:53,57,58,59";
	/* <Root>/y_k */
	this.urlHashMap["PID_Controller_referenceModel:24"] = "PID_Controller_referenceModel.c:46,56&PID_Controller_referenceModel.h:46";
	/* <S1>/Delay One Step1 */
	this.urlHashMap["PID_Controller_referenceModel:5"] = "PID_Controller_referenceModel.c:47,57,61,64&PID_Controller_referenceModel.h:36";
	/* <S1>/Gain */
	this.urlHashMap["PID_Controller_referenceModel:6"] = "PID_Controller_referenceModel.c:49,57";
	/* <S1>/Gain3 */
	this.urlHashMap["PID_Controller_referenceModel:7"] = "PID_Controller_referenceModel.c:50,57";
	/* <S1>/Sum */
	this.urlHashMap["PID_Controller_referenceModel:8"] = "PID_Controller_referenceModel.c:54,56,57";
	/* <S2>/Add1 */
	this.urlHashMap["PID_Controller_referenceModel:13"] = "PID_Controller_referenceModel.c:37,43";
	/* <S2>/Delay One Step */
	this.urlHashMap["PID_Controller_referenceModel:14"] = "PID_Controller_referenceModel.c:38,43,48,59&PID_Controller_referenceModel.h:35";
	/* <S2>/Gain1 */
	this.urlHashMap["PID_Controller_referenceModel:15"] = "PID_Controller_referenceModel.c:39,43";
	/* <S2>/Gain2 */
	this.urlHashMap["PID_Controller_referenceModel:16"] = "PID_Controller_referenceModel.c:40,44";
	/* <S3>/Gain */
	this.urlHashMap["PID_Controller_referenceModel:21"] = "PID_Controller_referenceModel.c:51,58";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "PID_Controller_referenceModel"};
	this.sidHashMap["PID_Controller_referenceModel"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "PID_Controller_referenceModel:3"};
	this.sidHashMap["PID_Controller_referenceModel:3"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "PID_Controller_referenceModel:11"};
	this.sidHashMap["PID_Controller_referenceModel:11"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "PID_Controller_referenceModel:19"};
	this.sidHashMap["PID_Controller_referenceModel:19"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/e_k"] = {sid: "PID_Controller_referenceModel:1"};
	this.sidHashMap["PID_Controller_referenceModel:1"] = {rtwname: "<Root>/e_k"};
	this.rtwnameHashMap["<Root>/Add"] = {sid: "PID_Controller_referenceModel:2"};
	this.sidHashMap["PID_Controller_referenceModel:2"] = {rtwname: "<Root>/Add"};
	this.rtwnameHashMap["<Root>/D_Controller"] = {sid: "PID_Controller_referenceModel:3"};
	this.sidHashMap["PID_Controller_referenceModel:3"] = {rtwname: "<Root>/D_Controller"};
	this.rtwnameHashMap["<Root>/I_Controller"] = {sid: "PID_Controller_referenceModel:11"};
	this.sidHashMap["PID_Controller_referenceModel:11"] = {rtwname: "<Root>/I_Controller"};
	this.rtwnameHashMap["<Root>/P_Controller"] = {sid: "PID_Controller_referenceModel:19"};
	this.sidHashMap["PID_Controller_referenceModel:19"] = {rtwname: "<Root>/P_Controller"};
	this.rtwnameHashMap["<Root>/y_k"] = {sid: "PID_Controller_referenceModel:24"};
	this.sidHashMap["PID_Controller_referenceModel:24"] = {rtwname: "<Root>/y_k"};
	this.rtwnameHashMap["<S1>/e_k"] = {sid: "PID_Controller_referenceModel:4"};
	this.sidHashMap["PID_Controller_referenceModel:4"] = {rtwname: "<S1>/e_k"};
	this.rtwnameHashMap["<S1>/Delay One Step1"] = {sid: "PID_Controller_referenceModel:5"};
	this.sidHashMap["PID_Controller_referenceModel:5"] = {rtwname: "<S1>/Delay One Step1"};
	this.rtwnameHashMap["<S1>/Gain"] = {sid: "PID_Controller_referenceModel:6"};
	this.sidHashMap["PID_Controller_referenceModel:6"] = {rtwname: "<S1>/Gain"};
	this.rtwnameHashMap["<S1>/Gain3"] = {sid: "PID_Controller_referenceModel:7"};
	this.sidHashMap["PID_Controller_referenceModel:7"] = {rtwname: "<S1>/Gain3"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "PID_Controller_referenceModel:8"};
	this.sidHashMap["PID_Controller_referenceModel:8"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/y_d_k"] = {sid: "PID_Controller_referenceModel:9"};
	this.sidHashMap["PID_Controller_referenceModel:9"] = {rtwname: "<S1>/y_d_k"};
	this.rtwnameHashMap["<S2>/e_k"] = {sid: "PID_Controller_referenceModel:12"};
	this.sidHashMap["PID_Controller_referenceModel:12"] = {rtwname: "<S2>/e_k"};
	this.rtwnameHashMap["<S2>/Add1"] = {sid: "PID_Controller_referenceModel:13"};
	this.sidHashMap["PID_Controller_referenceModel:13"] = {rtwname: "<S2>/Add1"};
	this.rtwnameHashMap["<S2>/Delay One Step"] = {sid: "PID_Controller_referenceModel:14"};
	this.sidHashMap["PID_Controller_referenceModel:14"] = {rtwname: "<S2>/Delay One Step"};
	this.rtwnameHashMap["<S2>/Gain1"] = {sid: "PID_Controller_referenceModel:15"};
	this.sidHashMap["PID_Controller_referenceModel:15"] = {rtwname: "<S2>/Gain1"};
	this.rtwnameHashMap["<S2>/Gain2"] = {sid: "PID_Controller_referenceModel:16"};
	this.sidHashMap["PID_Controller_referenceModel:16"] = {rtwname: "<S2>/Gain2"};
	this.rtwnameHashMap["<S2>/y_i_k "] = {sid: "PID_Controller_referenceModel:17"};
	this.sidHashMap["PID_Controller_referenceModel:17"] = {rtwname: "<S2>/y_i_k "};
	this.rtwnameHashMap["<S3>/e_k"] = {sid: "PID_Controller_referenceModel:20"};
	this.sidHashMap["PID_Controller_referenceModel:20"] = {rtwname: "<S3>/e_k"};
	this.rtwnameHashMap["<S3>/Gain"] = {sid: "PID_Controller_referenceModel:21"};
	this.sidHashMap["PID_Controller_referenceModel:21"] = {rtwname: "<S3>/Gain"};
	this.rtwnameHashMap["<S3>/y_p_k"] = {sid: "PID_Controller_referenceModel:22"};
	this.sidHashMap["PID_Controller_referenceModel:22"] = {rtwname: "<S3>/y_p_k"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
