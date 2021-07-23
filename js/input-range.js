let ss = 0;
let budget = document.getElementById('budget-slider');
let budgetValues = [
    document.getElementById('budget-value-lower'),
    document.getElementById('budget-value-upper')
];

noUiSlider.create(budget, {
    start: [1000, 20000],
    connect: true,
    range: {
        'min': [200, 200],
        'max': 24000
    }
    
});
budget.noUiSlider.on('update', function (values, handle) {
    budgetValues[handle].innerHTML = "$" + values[handle];
});

let perDay = document.getElementById('perDay');
let perdayValues = [
    document.getElementById('perday-value-lower'),
    document.getElementById('perday-value-upper')
];

noUiSlider.create(perDay, {
    start: [200, 800],
    connect: true,
    range: {
        'min': [200, 10],
        'max': 800
    }
});


let days = document.getElementById('days');
let daysValues = [
    document.getElementById('days-value-lower'),
    document.getElementById('days-value-upper')
];

noUiSlider.create(days, {
    start: [5, 24],
    connect: true,
    range: {
        'min': [1,1],
        'max': 30
    }
    
});

days.noUiSlider.on('update', function (values, handle) {
    daysValues[handle].innerHTML = values[handle];
    let minCost = perDay.noUiSlider.get()
    let day = days.noUiSlider.get()
    let minD = parseInt(day[0])
    let minC = parseInt(minCost[0])
    let maxD = parseInt(day[1])
    let maxC = parseInt(minCost[1])
    budget.noUiSlider.updateOptions({
        range: {
            'min': [minD * minC, minC],
            'max': maxC * maxD
        }
    });     
});

perDay.noUiSlider.on('update', function (values, handle) {
    perdayValues[handle].innerHTML = "$" + values[handle];
    let minCost = perDay.noUiSlider.get()
    let day = days.noUiSlider.get()
    let minD = parseInt(day[0])
    let minC = parseInt(minCost[0])
    let maxD = parseInt(day[1])
    let maxC = parseInt(minCost[1])
    budget.noUiSlider.updateOptions({
        range: {
            'min': [minD * minC, minC],
            'max': maxC * maxD
        }
    });     
});
