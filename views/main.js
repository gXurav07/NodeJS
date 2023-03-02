let count = 0
let countEl = document.getElementById("count-el") // documnet refers to the HTML document
console.log(countEl)
function increment() {
    console.log("The button was clicked")
    count++
    countEl.textContent=count
}
let prev = document.getElementById("prev-en")
let firstSave = true
function save(){
    console.log(count)
    if(!firstSave) prev.textContent+=", "
    else prev.textContent+=" "
    prev.textContent+=count
    count=0
    countEl.textContent=0
    firstSave=false
}


// DOM: Document Object Model

// The HTML document is of type object for JS