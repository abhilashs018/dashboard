// JavaScript Document

// Countries
var countries = new Array("INDIA","OTHERS");


// States
var states = new Array();
states[0] = "";
states[1] = "ANDAMAN AND NICOBAR ISLANDS|ANDHRA PRADESH|ARUNACHAL PRADESH|ASSAM|BIHAR|CHANDIGARH|CHHATTISGARH|DADRA AND NAGAR HAVELI|DAMAN AND DIU|DELHI|GOA|GUJARAT|HARYANA|HIMACHAL PRADESH|JAMMU AND KASHMIR|JHARKHAND|KARNATAKA|KERALA|LAKSHADWEEP|MADHYA PRADESH|MAHARASHTRA|MANIPUR|MEGHALAYA|MIZORAM|NAGALAND|ODISHA|PONDICHERRY|PUNJAB|RAJASTHAN|SIKKIM|TAMIL NADU|TELANGANA|TRIPURA|UTTAR PRADESH|UTTARANCHAL|WEST BENGAL";
states[2] = "";
function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select State *', '');
    stateElement.selectedIndex = 0;
    var state_arr = states[selectedCountryIndex].split("|");
    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    var stateElement = document.getElementById(stateElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select Country *', '');
    countryElement.selectedIndex = 0;

    stateElement.options[0] = new Option('Select State *', '');

    for (var i = 0; i < countries.length; i++) {
        countryElement.options[countryElement.length] = new Option(countries[i], countries[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}

function stringToUppercase(inputString)
{
    return inputString.toUpperCase();
}

function stringToLowercase(inputString)
{
    return inputString.toLowerCase();
}

function checkEmpty(st)
{
    if(st==null) return false;
    str = new String(st);
    var j=0;
    for(j=0;j<str.length;j++)
    {
        if(str.charAt(j)!=' ')
            break;
    }
    if(j==str.length)
        return false;
    return true;
}

function replaceQuote(st)
{
    var str = new String(st);
    var stt = new String("");
    var n1=0;
    var n2=5;
    while((n2=str.indexOf("\"",n1))>=0)
    {
        stt = stt+str.substring(n1,n2)+"\"";
        n1 = n2+1;
    }
    if(n1<str.length)
        stt = stt+str.substring(n1);
    //	alert(stt);
    return stt;
}

function changeToUpper(formName,fieldName){
    var form=document.forms[formName];
    form.elements[fieldName].value=stringToUppercase(form.elements[fieldName].value);
    return true;
}
/*Function to ensure that to date greater than from date */
function validateDate(fromDate,toDate)
{    
    var date1 = new Date(fromDate);
    var date2 = new Date(toDate);
    if(date2 < date1){
        alert("To date can not be lesser than from date");
        return false;
    } else{
        return true;
    }
}
/*Function to restrict for 3 months */
function checkDatesBetween(fromDate,toDate)
{
    var date1 = new Date(fromDate);
    var date2 = new Date(toDate);
    var diff = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));    
    if(diff > '90'){
        alert("Acceptable date range is three months");
        return false;
    } else{
        return true;
    }
}
function checkAlphabets(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].value=stringToUppercase(form.elements[fieldName].value);
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null) return true;
    var str = new String(strTemp);
    //	alert("str: "+str+", len:"+str.length);
    var j=0;
    for(j=0;j<str.length;j++)
    {
        if(( str.charAt(j)==' ' || str.charAt(j)>='a' && str.charAt(j)<='z' ||
            str.charAt(j)>='A' && str.charAt(j)<='Z')==false)
            break;
    }
    if(j==str.length)
    {
        form.elements[fieldName].value= removeExtraSpaces(strTemp, " ");
        return true;
    }
		
    alert("Only Alphabets");
    form.elements[fieldName].focus();
    return false;
	
}

function checkName(st)
{
    if(st==null) return false;
    var str = new String(st);
    //	alert("str: "+str+", len:"+str.length);
    var j=0;
    for(j=0;j<str.length;j++)
    {
        if((str.charAt(j)>='a' && str.charAt(j)<='z' ||
            str.charAt(j)>='A' && str.charAt(j)<='Z')==false)
            break;
    }
    if(j==str.length)
        return true;
    return false;
}

function validateAlpha(cha) {
    var character = (cha.which) ? cha.which : cha.keyCode
    if ((character < 65 || character > 90) && (character < 97 || character > 123)  && character != 39  && character != 37 &&  (character != 46) && (character != 9) && character != 8 && character != 32 && character != 0) {
        return false;
    }
    var regex = new RegExp("^[%.]");
    var key = String.fromCharCode(!cha.charCode ? cha.which : cha.charCode);
    if (regex.test(key)) {
        return false;
    }
    return true;
}
function validateAlphas(cha) {
    var character = (cha.which) ? cha.which : cha.keyCode
    if ((character < 65 || character > 90) && (character < 97 || character > 123)  && character != 39  && character != 37 &&  (character != 46) && (character != 9) && character != 8 && character != 32 && character != 0 && character != 45) {
        return false;
    }
    var regex = new RegExp("^[%.]");
    var key = String.fromCharCode(!cha.charCode ? cha.which : cha.charCode);
    if (regex.test(key)) {
        return false;
    }
    return true;
}

function isMobileNumberKeySlash(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode <= 45 || charCode > 57 || charCode==46 ))
        return false;
    return true;
}

function validateEnterKey(cha) {
    var character = (cha.which) ? cha.which : cha.keyCode
    if (character == 13) return false;
    return true;
}

function checkNamePlus(st,ad)
{
    if(st==null) return false;
    var str = new String(st);
    var adr = new String(ad);
    //	alert("adr: "+adr+", len:"+adr.length);
    var j=0;
    var k=0;
    for(j=0;j<str.length;j++)
    {
        if(( str.charAt(j)==' ' || str.charAt(j)>='a' && str.charAt(j)<='z' ||
            str.charAt(j)>='A' && str.charAt(j)<='Z')==false)
            {
            for(k=0;k<adr.length;k++)

            {
                    if(str.charAt(j)==adr.charAt(k))
                        break;
                }
            if(k==adr.length)
                return false
        }
    }
    return true;
}

function checkAlphaNumPlus(st,ad)
{
    if(st==null) return false;
    var str = new String(st);
    var adr = new String(ad);
    //	alert("adr: "+adr+", len:"+adr.length);
    var j=0;
    var k=0;
    var ch='a';
    for(j=0;j<str.length;j++)
    {
        ch = str.charAt(j);
        if((ch==' '||(ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||(ch>='0'&&ch<='9'))==false)
        {
            for(k=0;k<adr.length;k++)

            {
                    if(str.charAt(j)==adr.charAt(k))
                        break;
                }
            if(k==adr.length)
                return false
        }
    }
    return true;
}

function checkAlphaNumPlusNoSp(st,ad)
{
    if(st==null) return false;
    var str = new String(st);
    var adr = new String(ad);
    //	alert("adr: "+adr+", len:"+adr.length);
    var j=0;
    var k=0;
    var ch='a';
    for(j=0;j<str.length;j++)
    {
        ch = str.charAt(j);
        if(((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')||(ch>='0'&&ch<='9'))==false)
        {
            for(k=0;k<adr.length;k++)

            {
                    if(str.charAt(j)==adr.charAt(k))
                        break;
                }
            if(k==adr.length)
                return false
        }
    }
    return true;
}

function checkPhone(formName,fieldName)
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null) return false;
    var str = new String(strTemp);
    //	alert("adr: "+adr+", len:"+adr.length);
    var j=0;
    var k=0;
    for(j=0;j<str.length;j++)
    {
        if(( str.charAt(j)=='(' || str.charAt(j)==')' || str.charAt(j)=='-' || str.charAt(j)=='#' || str.charAt(j)==' ' ||
            (str.charAt(j)>='0' && str.charAt(j)<='9') )==false)
            {
            alert("Invalid  No");
            form.elements[fieldName].focus();
            return false;
        }
	
    }
	
    return true;
}

function checkValidNumber(formName,fieldName)
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null) return false;
    for(j=0;j<strTemp.length;j++)
    {
        if((strTemp.charAt(j)>='0' && strTemp.charAt(j)<='9') == false)
        {
            alert("Invalid  No");
            form.elements[fieldName].focus();
            return false;
        }
    }
}

function checkValidNumber(formName,fieldName, msg )
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null) return false;
    for(j=0;j<strTemp.length;j++)
    {
        if((strTemp.charAt(j)>='0' && strTemp.charAt(j)<='9') == false)
        {
            alert("Invalid "+msg);
            form.elements[fieldName].focus();
            return false;
        }
    }
}

function clearForm(formName)
{
    var form=document.forms[formName];
    for(i=0; i<form.elements.length;i++)
    {
        if (form.elements[i].type=="text" || form.elements[i].type=="textarea" )
            form.elements[i].value="";
    }
    return true;
}

function replaceCharacters(conversionString,inChar,outChar)
{
    var convertedString = conversionString.split(inChar);
    convertedString = convertedString.join(outChar);
    return convertedString;
}

function removeExtraSpaces(string, delimiter)
{
    var returnString = "";
    var splitstring = string.split(delimiter);
    for(var i = 0; i < splitstring.length; i++)
    {
        if (splitstring[i]!="") returnString += splitstring[i] + delimiter;
    }
	
    return trim(returnString, " ");
}

//Remove extra space between two words

function removeSpace(text) {
    text.value = text.value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    var CharArray = text.value.split(" ");
    if (CharArray.length > 2) return false;
    return true;
}

function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
	
function stringToLowercase(inputString)
{
    return inputString.toLowerCase();
}

function checkForOnlyNumber(formName,fieldName)
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(isNaN(strTemp))
    {
        alert("Invalid Number");
        form.elements[fieldName].focus();
        return false;
    }

    return true;


}

function disableDateOnUncheck(formName,checkBox,DD,MMM,YYYY)
{
    if(document.forms[formName].elements[checkBox].checked==false)
    {
        document.forms[formName].elements[DD].value="-1";
        document.forms[formName].elements[MMM].value="-1";
        document.forms[formName].elements[YYYY].value="-1";
        document.forms[formName].elements[DD].disabled=true;
        document.forms[formName].elements[MMM].disabled=true;
        document.forms[formName].elements[YYYY].disabled=true;
    }
    else
    {
        document.forms[formName].elements[DD].disabled=false;
        document.forms[formName].elements[MMM].disabled=false;
        document.forms[formName].elements[YYYY].disabled=false;
    }
    return;
}

function checkEMail(formName,fieldName) {
    var form=document.forms[formName];
    var varemail = form.elements[fieldName].value ;
    if(varemail==null || !checkEmpty(varemail)) return true;
    form.elements[fieldName].value=stringToLowercase(form.elements[fieldName].value);
    varemail = trim(varemail);                        // value of field with whitespace trimmed off
    var emailFilter =  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
    if (!emailFilter.test(varemail)) 
    {           
        alert("Invalid E-Mail ID");
        form.elements[fieldName].focus();
        return false;
    } else if (varemail.match(illegalChars)) {
        alert("Invalid E-Mail ID, illegal characters");
        form.elements[fieldName].focus();
        return false;
    }
    return true;
}

function checkValidDate(dd,mm,yy)
{	
    if(dd<1 || dd>31 || mm<1 || mm>12 || yy<1) return false;
    switch(mm)
    {
        case  1: case 3: case 5: case 7: case 8: case 10:
        case 12: return true;
        case  4: case 6: case 9:
        case 11: if(dd<31) return true;
        case  2: if(yy%400==0 ||(yy%4==0&&yy%100!=0))
        {
            if(dd<30) return true;
        }
        else if(dd<29) return true;
    }
    return false;
}

function removeSpaces(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].value=stringToUppercase(form.elements[fieldName].value);
    form.elements[fieldName].value=removeExtraSpaces(form.elements[fieldName].value," ");
    checkAlphabets(formName,fieldName);

    return true;
}

function checkAmount(formName,fieldName,msg)
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null) return true;
    var str = new String(strTemp);
    var j=0;
    var k=0;
    for(j=0;j<str.length;j++)
    {
        if(( str.charAt(j)=='.' || (str.charAt(j)>='0' && str.charAt(j)<='9') )==false)
        {
            alert("Invalid " + msg);
            form.elements[fieldName].focus();
            return false;
        }
	
    }
	
    return true;
}

function checkCurrentDate(dd1, mm1, yy1, dtCurr, strMsg, strMsg2)
{
    var strTemp = ""+yy1;
    if(mm1>9)
        strTemp = strTemp + mm1;
    else
        strTemp = strTemp + "0" + mm1;
    if(dd1>9)
        strTemp = strTemp + dd1;
    else
        strTemp = strTemp + "0" + dd1;
    var selDate = new Number(strTemp).valueOf();
	
    if( selDate < dtCurr)
    {
        alert( strMsg + " cannot be less than "+ strMsg2);
        return true;
    }
    return false;

}

function checkGreaterDate(dd1, mm1, yy1, dtCurr, strMsg, strMsg2)
{
    var strTemp = ""+yy1;
    if(mm1>9)
        strTemp = strTemp + mm1;
    else
        strTemp = strTemp + "0" + mm1;
    if(dd1>9)
        strTemp = strTemp + dd1;
    else
        strTemp = strTemp + "0" + dd1;
    var selDate = new Number(strTemp).valueOf();
	
    if( selDate > dtCurr)
    {
        alert( strMsg + " cannot be Greater than "+ strMsg2);
        return true;
    }
    return false;

}

function appendComma(formName,fieldName)
{
    var form=document.forms[formName];
    var strTemp = form.elements[fieldName].value ;
    if(strTemp==null || strTemp == "") return true;
    var iTemp = strTemp.length;
    var charTemp = strTemp.charAt(iTemp-1);
    if(charTemp != "," && iTemp != 0 )
    {
        form.elements[fieldName].value = form.elements[fieldName].value + "," ;
    }
    form.elements[fieldName].value=stringToUppercase(form.elements[fieldName].value);
    removeSpaces(formName,fieldName);
    return true;
} 

function checkGreaterCurrentDate(dd1, mm1, yy1, dtCurr, strMsg)
{
    var strTemp = ""+yy1;
    if(mm1>9)
        strTemp = strTemp + mm1;
    else
        strTemp = strTemp + "0" + mm1;
    if(dd1>9)
        strTemp = strTemp + dd1;
    else
        strTemp = strTemp + "0" + dd1;
    var selDate = new Number(strTemp).valueOf();
	
    if( selDate > dtCurr)
    {
        alert( strMsg + " can not greater then current date ");
        return true;
    }
    return false;

}

function checkLessCurrentDate(dd1, mm1, yy1, dtCurr, strMsg)
{
    var strTemp = ""+yy1;
    if(mm1>9)
        strTemp = strTemp + mm1;
    else
        strTemp = strTemp + "0" + mm1;
    if(dd1>9)
        strTemp = strTemp + dd1;
    else
        strTemp = strTemp + "0" + dd1;
    var selDate = new Number(strTemp).valueOf();
	
    if( selDate < dtCurr)
    {
        alert( strMsg + " can not less then current date ");
        return true;
    }
    return false;

}

function disableOnSubmit(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].disabled=true;
    form.submit();
    return true;
}

function quitpage(formName,pageName,target)
{
    var form=document.forms[formName];
    form.action=pageName;
    form.target=target;
    document.forms[formName].submit();
}

function selectCheckBox(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].checked=true;
    return true;
}

function fieldToUpperCase(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].value=form.elements[fieldName].value.toUpperCase();
    return true;
}

function fieldToLowerCase(formName,fieldName)
{
    var form=document.forms[formName];
    form.elements[fieldName].value=form.elements[fieldName].value.toLowerCase();
    return true;
}

function stopprocess()
{
    var arr = document.getElementById("Layer")
    arr.style.display ='none';
    var arr1 = document.getElementById("info")
    arr1.style.display ='block';
}

function startprocess(formName,fieldName)
{
    disableOnSubmit(formName,fieldName)
    var arr1 = document.getElementById("info")
    arr1.style.display ='none';
    var arr = document.getElementById("Layer")
    arr.style.display ='block';

}

function mobileNumber(formName,fieldName)
{
    var mobile =  document.forms[formName].elements[fieldName].value
    
    if(mobile.length == 10){
        mobile = '0'+ mobile ;
    }
    if(mobile != "" && mobile.indexOf("0") != 0){
        jAlert("Invalid Mobile Number");
        return false;
    }
    if(mobile != ""){
        var phoneno = /^\d{11}$/;
        if(!mobile.match(phoneno)){
            jAlert("Invalid Mobile Number");
            return false;
        }else{
            document.forms[formName].elements[fieldName].value = mobile;
        }

    }return true;  

}

function isAlpKey(){
    if ((event.keyCode > 64 && event.keyCode < 91) || event.keyCode == 8 || event.keyCode == 32 || event.keyCode == 9)
        return true;
    else
    {
        return false;
    }

}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 45 || charCode > 57 || charCode == 47))
        return false;
    return true;
}

function isMobileNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode <= 45 || charCode > 57 || charCode==47 || charCode==46 ))
        return false;
    return true;
}
function checkValidMobile() {
    if (document.memberForm.mobileNumber.value !== "") {
        var inputtxt = document.memberForm.mobileNumber.value;
        if (inputtxt.length == 11) {
            var frstNo = inputtxt.substr(0, 1);
            if (frstNo === '0')
            {
                inputtxt = inputtxt.substr(1, inputtxt.length);
            } else {
                alert("Invalid Mobile Number");
                document.memberForm.mobileNumber.focus();
                return false;
            }
        }        
        var phoneno = /^\d{10}$/;
        if (!inputtxt.match(phoneno)) {
            alert("Invalid Mobile Number");
            document.memberForm.mobileNumber.focus();
            return false;
        }
    }
    return true;
}

function checkValidMobileAJ(mobileNo) {
    if (mobileNo !== "") {
        var inputtxt = mobileNo;
        if (inputtxt.length == 11) {
            var frstNo = inputtxt.substr(0, 1);
            if (frstNo === '0')
            {
                inputtxt = inputtxt.substr(1, inputtxt.length);
            } else {
                //alert("Invalid Mobile Number");
                
                return false;
            }
        }
        var phoneno = /^\d{10}$/;
        if (!inputtxt.match(phoneno)) {
            // alert("Invalid Mobile Number");
            //document.memberForm.mobileNumber.focus();
            return false;
        }
    }
    return true;
}

//Email Validation



function checkEMailAJ(mailId) {
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(\-[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,4}$/;
    if(!pattern.test(mailId)) return false;
    return true;
}

function loadComboKeyValue(formName, fieldName, dataList){
    var form=document.forms[formName];
    var con = form.elements[fieldName].length;
    for (var count = 1; count < con; count++)
    {
        form.elements[fieldName].remove(1);
    }
    var m = 1;
    for (var count = 0; count < dataList.length; count++) {
        var option0 = new Option(dataList[count][1], dataList[count][0]);
        eval("form.elements[fieldName].options[m]=option" + 0);
        m++;
    }
}

function loadComboValue(formName, fieldName, dataList){
    var form=document.forms[formName];
    var con = form.elements[fieldName].length;
    for (var count = 1; count < con; count++)
    {
        form.elements[fieldName].remove(1);
    }
    var m = 1;
    for (var count = 0; count < dataList.length; count++) {
        var option0 = new Option(dataList[count], dataList[count]);
        eval("form.elements[fieldName].options[m]=option" + 0);
        m++;
    }
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function removeExtraSpace(text) {
	text.value = text.value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
	var CharArray = text.value.split(" ");
	if (CharArray.length > 2) return false;
	return true;
}

function properCase(text) {
	textValue = text.value.split(' ');
	newValue = '';
	for (var i = 0; i < textValue.length; i++) {
		newValue += textValue[i].substring(0,1).toUpperCase() +
		textValue[i].substring(1,textValue[i].length) + ' ';
	}
	text.value = newValue;
}

function validateDontAllowSpace(cha) {
    var character = (cha.which) ? cha.which : cha.keyCode
    if (character == 32) return false;
    return true;
}
