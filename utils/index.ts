/*const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c7d67d5eemshf6c0cae16a89f9cp1b77e5jsn6187dc5df110',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

*/


export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '9c7d67d5eemshf6c0cae16a89f9cp1b77e5jsn6187dc5df110',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json()
    return result;
}