function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["PID_Controller_referenceModel:1"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:2"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:3"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:11"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:19"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:24"] = "PID_Controller_referenceModel";
    this.sidParentMap["PID_Controller_referenceModel:4"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:5"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:6"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:7"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:8"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:9"] = "PID_Controller_referenceModel:3";
    this.sidParentMap["PID_Controller_referenceModel:12"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:13"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:14"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:15"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:16"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:17"] = "PID_Controller_referenceModel:11";
    this.sidParentMap["PID_Controller_referenceModel:20"] = "PID_Controller_referenceModel:19";
    this.sidParentMap["PID_Controller_referenceModel:21"] = "PID_Controller_referenceModel:19";
    this.sidParentMap["PID_Controller_referenceModel:22"] = "PID_Controller_referenceModel:19";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
