//created by newStarOfFrontEnd(BreR)

'use strict';

class requestController {
    
    //var port = '';                    //string port
    
    /*this.setPort = function(value){
        port = value;
    }*/                                 //setter for port (need upgrade) 
    
   	_auth(email, password) {
           
        var data = new FormData();
        data.append('email', email);
        data.append('pass', password);
        
        if (validateAuth(email, pass)){
            var http = new XMLHttpRequest();
            var url = "/auth";
            http.open("POST", url, true);


            http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                console.log(http.responseText);
            }
        }
        http.send(data);
        } else {
            console.log('Введите корректные данные')
        }       
}
    
    _reg (email, passwordFirst, passwordSecond){
        var data = new FormData();
        data.append('email', email);
        data.append('passFst', passwordFirst);
        data.append('passScd', passwordSecond);
        if (validateReg(email, passFst, passScd)){
	        var http = new XMLHttpRequest();
	        var url = "/reg";
	        http.open("POST", url, true);


	        http.onreadystatechange = function() {
	            if(http.readyState == 4 && http.status == 200) {
	                console.log(http.responseText);
	            }
	        }
	        http.send(data);
    } else {
    	console.log('Введите корректные данные')
    }

}
};



function validateAuth(email, password) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(reg.test(email) == false || password == '') {
		alert('Введите корректные данные');
		return false
		} else {
			return true;
	}
}

function validateReg(email, passwordFirst, passwordSecond) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(reg.test(email) == false || passwordFirst == '' || passwordSecond == '') {
		alert('Введите корректные данные');
		return false;
		} else if(reg.test(email) == true && passwordFirst != passwordSecond){
			alert('Введите корректные данные');
			return false;
	} else {
		alert('Класс!!');
		return true;
	}
}

