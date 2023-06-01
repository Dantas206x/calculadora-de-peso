

//função
//gerar valores
//calcular
//saida

// formula -   Peso  /  altura² * 703

function calculateBMI() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 703)

    document.getElementById('heading').innerHTML = 'Sua resposta é :'
    document.getElementById('bmi-output').innerHTML = bmi 

    if (bmi <=24.9) {
        document.getElementById('message').innerHTML = 'Você está abaixo do peso'
    } else if (bmi >= 25 && bmi <=29.9) {
        document.getElementById('message').innerHTML = 'você está no peso certo'
    } else{
        document.getElementById('message').innerHTML = 'você está com sobre peso'
    }
}

function reload() {
    window.location.reload()
}