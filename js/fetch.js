const block = document.getElementById('booking-block')
const section = document.getElementById('booking')

const fetchData = async () => {
    try{
        const response = await fetch('../json/data.json');
        const json = await response.json();
        return json
    }
    catch(err){
        console.log(err)
        return err
    }   
}
fetchData().then(json => {
    if (!json.data) {
        section.style.display = 'none';
        return
    }
    json.data.map(item=>{
        const div = document.createElement('div')
        div.classList.add('booking__block__data-item')
        console.log(item.name)
        div.innerHTML = 
        `
            <h3>${item.name}</h3>
            <div><span>Destinations: </span> ${item.destination}</div>
            <div><span>Starts/Ends: </span> ${item.startsEnds}</div>
            <div><span>Age Range: </span> ${item.ageRange}</div>
            <div class="booking__block__data-item-img"><img src="${item.img}" alt="">
                <span class="cost">${item.price}$ / ${item.days} Days</span>
            </div>
        `
    block.append(div)
    })
})