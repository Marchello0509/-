const htmlEl = {
    forbl: document.querySelector('#forbl'),
    forbl2: document.querySelector('#forbl2'),
    btnAdd: document.querySelector('#btnAdd'),
    btnDel: document.querySelector('#btnDel'),
    inpName: document.querySelector('#inpName'),
    inpSum: document.querySelector('#inpSum'),
    sumEl: document.querySelector('#sumEl')
}

console.log(htmlEl)
let totalSum = 0
let noteCounter = 0
let noteCounter2 = 0
const addBtnsDelete = () => { 
    let btnsDelete =  document.querySelectorAll('.btnDelete')
    console.log(btnsDelete) 
    btnsDelete.forEach(btn => { 
        btn.addEventListener('click', () => { 
            let cardId = btn.getAttribute("cardId")
            let delBtn = document.querySelector(`#card${cardId}`)
            delBtn.remove()
        })
    })
}


htmlEl.btnAdd.addEventListener('click', () => {
    const newId = `${Math.round(Math.random()*(1000-500)+500)}-${Math.round(Math.random()*(500-300)+500)}`
    console.log(newId)
    const inpName = htmlEl.inpName.value
    const inpSum = parseFloat(htmlEl.inpSum.value)

    const newBlock = document.createElement('div')
    newBlock.className = 'main_block2_forb_forbl_bl'

    newBlock.innerHTML = `
        <div id="card${newId}" class="main_block2_forb_forbl_bl">
        <button cardId="${newId}" class="btnDelete main_block2_forb_forbl_bl_svg">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 1L19 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 19L19 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
        </button>  
        <p class="main_block2_forb_forbl_bl_p1">Name list:</p>        
        <p class="main_block2_forb_forbl_bl_p2">${inpName}</p>  
        <p class="main_block2_forb_forbl_bl_p3">Sum:</p>  
        <p class="main_block2_forb_forbl_bl_p4">${inpSum}</p> 
        </div>            
    `

    htmlEl.forbl.appendChild(newBlock)

    addBtnsDelete()

    totalSum += inpSum
    htmlEl.sumEl.innerHTML = `${totalSum}`

    noteCounter++
    if (noteCounter === 2) {
        htmlEl.btnAdd.disabled = true; 
        htmlEl.btnAdd.style.backgroundColor = 'red'
        htmlEl.btnAdd.style.color = 'white'
        htmlEl.btnAdd.style.cursor = 'not-allowed'
    }
})

htmlEl.btnDel.addEventListener('click', () => {
    const inpName = htmlEl.inpName.value
    const inpSum = parseFloat(htmlEl.inpSum.value)

    const newBlock = document.createElement('div')
    newBlock.className = 'main_block2_forb2_forbl_bl'

    newBlock.innerHTML = `
        <div class="main_block2_forb2_forbl_bl">
        <button class="main_block2_forb2_forbl_bl_svg">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 1L19 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 19L19 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
        </button>  
        <p class="main_block2_forb2_forbl_bl_p1">Name list:</p>        
        <p class="main_block2_forb2_forbl_bl_p2">${inpName}</p>  
        <p class="main_block2_forb2_forbl_bl_p3">Sum:</p>  
        <p class="main_block2_forb2_forbl_bl_p4">${inpSum}</p> 
        </div>            
    `

    htmlEl.forbl2.appendChild(newBlock)

    totalSum -= inpSum
    htmlEl.sumEl.innerHTML = `${totalSum}`

    noteCounter2++
    if (noteCounter2 === 2) {
        htmlEl.btnDel.disabled = true; 
        htmlEl.btnDel.style.backgroundColor = 'red'
        htmlEl.btnDel.style.color = 'white'
        htmlEl.btnDel.style.cursor = 'not-allowed'
    }
})
