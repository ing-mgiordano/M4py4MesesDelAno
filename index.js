function getMonthQuantity() {
	const monthNum = parseInt(document.getElementById('input-month').value);
	
	if(isNaN(monthNum)) {
		alert('No corresponde a un numero')
		return
	} else if (monthNum < 1 || monthNum > 12){
		alert('El numero ingresado debe ser entre 1 y 12')
		return
	}  
	const monthDayDiccionary = {
		1:{name: 'Enero', days: 31},
		2:{name: 'Febrero', days: 28},
		3:{name: 'Marzo', days: 31},
		4:{name: 'Abril', days: 30},
		5:{name: 'Mayo', days: 31},
		6:{name: 'Junio', days: 30},
		7:{name: 'Julio', days: 31},
		8:{name: 'Agosto', days: 31},
		9:{name: 'Septiembre', days: 30},
		10:{name: 'Octubre', days: 31},
		11:{name: 'Noviembre', days: 30},
		12:{name: 'Diciembre', days: 31},
	}

	document.getElementById('dayMonth').innerHTML = `El mes de ${monthDayDiccionary[monthNum].name} tiene ${monthDayDiccionary[monthNum].days} dias`
	
	
	
	
	
	
	// Este if lo podemos evitar si ponemos que input type=number  y agregamos el default para
	//el resto de los numeros al finalizar el switch


	
	/* switch (mesNum) {
		case 1:
			document.getElementById('diasmes').innerHTML = 'El mes de enero tiene 31 días';
			break;
		case 2:
			document.getElementById('diasmes').innerHTML = 'El mes de febrero tiene 28 días';
			break;
		case 3:
			document.getElementById('diasmes').innerHTML = 'El mes de marzo tiene 31 días';
			break;
		case 4:
			document.getElementById('diasmes').innerHTML = 'El mes de abril tiene 30 días';
			break;
		case 5:
			document.getElementById('diasmes').innerHTML = 'El mes de mayo tiene 31 días';
			break;
		case 6:
			document.getElementById('diasmes').innerHTML = 'El mes de junio tiene 30 días';
			break;
		case 7:
			document.getElementById('diasmes').innerHTML = 'El mes de julio tiene 31 días';
			break;
		case 8:
			document.getElementById('diasmes').innerHTML = 'El mes de agosto tiene 31 días';
			break;
		case 9:
			document.getElementById('diasmes').innerHTML = 'El mes de septiembre tiene 30 días';
			break;
		case 10:
			document.getElementById('diasmes').innerHTML = 'El mes de octubre tiene 31 días';
			break;
		case 11:
			document.getElementById('diasmes').innerHTML = 'El mes de noviembre tiene 30 días';
			break;
		case 12:
			document.getElementById('diasmes').innerHTML = 'El mes de diciembre tiene 31 días';
			break;
		
	} */

}



