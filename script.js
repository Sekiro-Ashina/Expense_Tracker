document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('expense-form');
   const itemName = document.querySelector('expense-name');
   const itemAmount = document.querySelector('expense-amount');
   const itemList = document.querySelector('expense-list');
   const totalAmountDisplay = document.querySelector('total-amount');

   let expenses = [];

   document.addEventListener('submit', (e)=>{
      e.preventDefault();
      const expenseName = itemName.value.trim();
      const expenseAmount = parseFloat(itemAmount.value.trim()) || 0; // the problem is eventhough we had set the value of the input field as number, but the value is still being read as string, so we need to convert it to number using parseFloat or Number function.
      if( expenseName !== "" && expenseAmount > 0 && !isNaN(expenseAmount)){
         const objExpense = {
            id: Date.now(),
            name: expenseName,
            amount: expenseAmount
         }
         expenses.push(objExpense);
         saveToLocalStorage(expenses); //why didn't we stored the object in local storage? why expense array? 
      }

   });
   function saveToLocalStorage(expenses){
      localStorage.setItem('expenses', JSON.stringify(expenses));
   }



});

