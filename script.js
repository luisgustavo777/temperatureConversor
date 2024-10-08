document.getElementById('toCelsius').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(temperature)) {
        const celsius = (temperature - 32) * (5 / 9);
        document.getElementById('result').innerText = `${temperature} °F é igual a ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
    }
});

document.getElementById('toFahrenheit').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(temperature)) {
        const fahrenheit = (temperature * (9 / 5)) + 32;
        document.getElementById('result').innerText = `${temperature} °C é igual a ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
    }
});
