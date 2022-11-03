const user = {
    sex: '',
    age: 24,
    height: 170,
    weight: 110,
    kcal: 0
}

$(document).ready(() => {
    $("#form").on('change', () => {
        user.sex = $('#Sex').val();
        user.age = $('#Age').val();
        user.height = $('#Height').val();
        user.weight = $('#Weight').val();
        if ((user.age < 130 && user.age > 1) && (user.height < 240 && user.height > 100) && (user.weight >= 20 && user.weight < 200)) {
            (user.sex == 'Female') ? resultFemale(user) : resultMale(user);
        }
    })
})

const resultFemale = user => {
    user.kcal = (9.5634 * user.weight) + (1.8496 * user.height) - (4.6756 * user.age) + 655.0955
    $('#result').text(Math.round(user.kcal) + 'kcal')
}

const resultMale = user => {
    user.kcal = (13.7516 * user.weight) + (5.0033 * user.height) - (6.7550 * user.age) + 66.473
    $('#result').text(Math.round(user.kcal) + ' kCal')
}

const consumption = [
    fruit = {
        name: "fruit",
        kcal: 100
    },
    drink = {
        name: "drink",
        kcal: 10
    },
    food = {
        name: "food",
        kcal: 400
    },
    dessert = {
        name: "dessert",
        kcal: 1000
    }
]

consumption.forEach(element => {
    $(`#${element.name}`).on('click', () => {
        if (user.kcal > 0 || $('#result').text() > 0) {
            user.kcal -= element.kcal
            $('#result').text(Math.round(user.kcal) + ' kCal')
        }
    })
})

