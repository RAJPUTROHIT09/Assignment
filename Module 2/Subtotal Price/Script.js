// Store Product
const products = [
    {
        id: 1,
        productInfo: { src: "./images/01.jpg", pname: "Capcicum" },
        price: 110,
        quantity: 1
    },
    {
        id: 2,
        productInfo: { src: "./images/02.jpg", pname: "Carrot" },
        price: 200,
        quantity: 1
    },
    {
        id: 3,
        productInfo: { src: "./images/03.jpg", pname: "Cucumber" },
        price: 500,
        quantity: 1
    },
    {
        id: 4,
        productInfo: { src: "./images/04.jpg", pname: "Brinjal" },
        price: 360,
        quantity: 1
    },
    {
        id: 5,
        productInfo: { src: "./images/05.jpg", pname: "LadyFingerS" },
        price: 600,
        quantity: 1
    }
];

// Function to calculate subtotal for a single item
function calculateSubtotal(item) {
    return item.price * item.quantity;
}

// Function to render items and their subtotals
function renderItems() {
    let itemList = document.getElementById("cart-items");
    let totalPrice = 0;

    itemList.innerHTML = ""; // Clear the list

    products.forEach(function (item, index) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.productInfo.src}"/><h4>${item.productInfo.pname}</h4></td>
            <td><input type="number" value="${item.quantity}" id="quantity${index}" onchange="updateQuantity(${index})" min="1" max="10"/></td>
            <td>${item.price}</td>
            <td id="subtotal${index}">${calculateSubtotal(item).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
          `;
        itemList.appendChild(tr);
        totalPrice += calculateSubtotal(item);
    });

    document.getElementById("total").textContent = totalPrice.toFixed(2);
}

// Function to update quantity and recalculate subtotal
function updateQuantity(index) {
    var quantityInput = document.getElementById(`quantity${index}`);
    products[index].quantity = parseInt(quantityInput.value, 10);
    document.getElementById(`subtotal${index}`).textContent = calculateSubtotal(products[index]).toFixed(2);
    renderItems();
}

// Function to remove an item from the array and update the display
function removeItem(index) {
    products.splice(index, 1);
    renderItems();
}

// Initial rendering of items
renderItems();
