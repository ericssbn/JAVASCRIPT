
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyToConvert = document.querySelector(".currency-to-convert")

function chosenCurrency() {
    let currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    let currencyValueConverted = document.querySelector(".currency-value-converted")

    let convertValue = 0;

    if (currencyValueToConvert.value === "USD")
    let dolarToday = 5.17;
    convertValue = inputCurrencyValue / dolarToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}




function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace("R$ ", "").replace(".", "").replace(",", ".")); // Valor da moeda de entrada
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Elemento para mostrar valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Elemento para mostrar valor convertido

    let convertedValue = 0;

    if (currencySelect.value === "USD") {
        const dolarToday = 5.17; // Taxa de câmbio do Dólar
        convertedValue = inputCurrencyValue / dolarToday; // Conversão para Dólar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelect.value === "EUR") {
        const euroToday = 6.20; // Taxa de câmbio do Euro
        convertedValue = inputCurrencyValue / euroToday; // Conversão para Euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    if (currencySelect.value === "BIT") {
        const bitcoinToday = 316115.89;
        convertedValue = inputCurrencyValue / bitcoinToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue);
    }

    if (currencySelect.value === "CHF") {
        const francoToday = 5.58;
        convertedValue = inputCurrencyValue / francoToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CH", {
            style: "currency",
            currency: "CHF"
        }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "USD") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "BIT") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "CHF") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImage.src = "./assets/suiça.png"
    }

}


currencyToConvert.addEventListener("change", chosenCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);