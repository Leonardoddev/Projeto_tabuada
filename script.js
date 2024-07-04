function tabuada () {
    let num = Number(document.getElementById('txtn').value)
    let tab = document.getElementById ('seltab')

    if (isNaN(num)) {
       window.alert('Digite um número!')
    } else {
        tab.innerHTML = '';

        for( let c=1 ; c<=10 ; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
        
}