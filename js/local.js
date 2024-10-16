console.log("hello")


const addProduct = () => {
    const productfiled  = document.getElementById('product-name');
    const product = productfiled.value;
    const quantityfiled  = document.getElementById('product-quantity');
    const quantity = quantityfiled.value;
    productfiled.value = '';
    quantityfiled.value = '';
    console.log(product, quantity);
    localStorage.setItem(product, quantity);
    displayProduct(product, quantity)
}

const displayProduct = (product, quantity) => {
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    container.appendChild(li);
    console.log('hello')
}

// const hi = localStorage.getItem("mehedi")
// console.log(hi)

// const by = localStorage.setItem('hasan', 'khan')
