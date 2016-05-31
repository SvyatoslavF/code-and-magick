var message = "Svyat";
var a = [1,2,3,4,5], b = [1,2,3,4,5];

function getMessage(a, b){
	if(tipeof(a)=="boolean"){
		if(a==true){
			message = "Я попал в [b]";
		};
		else if(a==false){
			message = "Я никуда не попал";
		};
	};

	else if(tipeof(a)=="number"){
		message = "Я прыгнул на [a] * 100 сантиметров";
	};

	if(Array.isArray(a) && Array.isArray(b)){
		var distance = 0;
		for (var i = 0; (i <= a[i].length) || (i <= b[i].length); i++) {
			distance = distance + (a[i] * b[i]);	
		}; 
		message = "Я прошёл [distance] метров";
	};

	else if(Array.isArray(a)){
		var sum = 0;
		for (var i = 0; i <= a[i].length; i++){
			sum = sum + a[i];
		};
		message = "Я прошёл [sum] шагов";
	};
};


getMessage();