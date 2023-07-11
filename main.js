const userSurname = document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');

const products = {
    product1: {
        checkbox: document.getElementById('checkbox1'),
        quantityInput: document.getElementById('espresso')
    },
    product2: {
        checkbox: document.getElementById('checkbox2'),
        quantityInput: document.getElementById('americano')
    },
    product3: {
        checkbox: document.getElementById('checkbox3'),
        quantityInput: document.getElementById('latte')
    },
    product4: {
        checkbox: document.getElementById('checkbox4'),
        quantityInput: document.getElementById('cappuccino')
    },
    product5: {
        checkbox: document.getElementById('checkbox5'),
        quantityInput: document.getElementById('chocolate_muffin')
    },
    product6: {
        checkbox: document.getElementById('checkbox6'),
        quantityInput: document.getElementById('blueberry_muffin')
    },
    product7: {
        checkbox: document.getElementById('checkbox7'),
        quantityInput: document.getElementById('apple_tart')
    }
};

const btn = document.querySelector(".btn");
let resultElem = document.querySelector(".sum");
let totalAmount = 0;

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const quantityInputs = document.querySelectorAll('input[type="number"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', calcAmount);
});

quantityInputs.forEach((input) => {
    input.addEventListener('change', calcAmount);
});

function calcAmount() {
    totalAmount = 0;

    Object.values(products).forEach(product => {
        if (product.checkbox.checked) {
            totalAmount += parseInt(product.quantityInput.value) * parseInt(product.checkbox.value);
        }
    });

    resultElem.textContent = totalAmount;
}

function handleClick() {
    resultElem.textContent = totalAmount;
    alert(`${userSurname.value} ${userName.value}\nИтого: ${totalAmount}`);
}

btn.addEventListener("click", handleClick);
