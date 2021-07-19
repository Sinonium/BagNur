let ss = 0;
let budget = document.getElementById('budget-slider');
let budgetValues = [
    document.getElementById('budget-value-lower'),
    document.getElementById('budget-value-upper')
];

noUiSlider.create(budget, {
    start: [260, 40000],
    connect: true,  
    range: {
        'min': [260, 100],
        'max': 90000
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
    start: [260, 800],
    connect: true,
    range: {
        'min': [260, 5],
        'max': 1000
    }
});
perDay.noUiSlider.on('update', function (values, handle) {
    perdayValues[handle].innerHTML = "$" + values[handle];
    let minCost = perDay.noUiSlider.get()
    let ss = parseInt(minCost[0])
    budget.noUiSlider.updateOptions({
        range: {
            'min': ss,
            'max': 90000
        }
    });     
});

let days = document.getElementById('days');
let daysValues = [
    document.getElementById('days-value-lower'),
    document.getElementById('days-value-upper')
];

noUiSlider.create(days, {
    start: [16, 60],
    connect: true,
    range: {
        'min': [1,1],
        'max': 90
    }
});
days.noUiSlider.on('update', function (values, handle) {
    daysValues[handle].innerHTML = values[handle];
});

