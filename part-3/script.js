//get modal element
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('cartBtn');
const closeBtn = document.querySelector('.closeBtn');
const clearBtn = document.getElementById('clearBtn');
const addBtn = document.querySelector('.addBtn');

//listen for click on cart button 
modalBtn.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'block';
};

//listen for click on close button 
closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
};

//listen for click on clear button 
clearBtn.addEventListener('click', clearCart);

function clearCart() {
  //remove all items in the cart 
}


//listen for click on add to cart button
addBtn.addEventListener('click', putInCart);

function putInCart() {
  
}