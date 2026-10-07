let products = [
    'apple',
    'banana',
    'orange',
    'mango',
    'pineapple',
    'strawberry',
    'watermelon',
    'grape',
    'potato',
    'stuff',
    'keyboard',
    'mouse',
    'laptop',
    'water',
    'grapefruit',
    'allergens',
    'arm',
    'blade',
    'wash',
    'brocolli'
]
const resultsbox = document.getElementById("results")
const search = document.getElementById('searchinput')

search.onkeyup = function(){
    let filteredresults = []
    let input = search.value.trim("")
    if(input.length){
        filteredresults = products.filter((item)=>{
            return item.toLowerCase().includes(input.toLowerCase())
        })
    }
    display(filteredresults)
    
    
    if(!filteredresults.length){
        resultsbox.innerHTML = ''
    }
}

function display(filteredresult){
    const content = filteredresult.map((item)=>{
        return "<li onclick='selectinput(this)'>" + item + "</li>"
    })

    resultsbox.innerHTML = "<ul>" + content.join("") + "</ul>"
}

function selectinput(li){
    search.value = li.textContent
    resultsbox.innerHTML = ''
}