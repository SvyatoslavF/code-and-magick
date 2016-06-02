function getMessage(a, b) {
	if (typeof a === 'boolean') {
			if (a) {
				return 'Я попал в ' + b;
			}
		return 'Я никуда не попал';
	}

	if (typeof a === 'number') {
		return 'Я прыгнул на ' + a * 100 + ' сантиметров';
	}

	if (Array.isArray(a)) {
		if (Array.isArray(b)) {
			var distance = 0;
				for (var i = 0; i < a.length; i++) {
					distance = distance + a[i] * b[i];	
				}
			return 'Я прошёл ' + distance + ' метров';
		}

		var sum = 0;
			for (var i = 0; i < a.length; i++) {
				sum = sum + a[i];
			}
		return 'Я прошёл ' + sum + ' шагов';
	}
}

getMessage();