document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector('#expense-form');
   const itemName = document.querySelector('#expense-name');
   const itemAmount = document.querySelector('#expense-amount');
   const itemList = document.querySelector('#expense-list');
   const totalAmountDisplay = document.querySelector('#total-amount');

   let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
   let totalAmount =  0; 

   renderExpenses(expenses); 

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
         saveToLocalStorage(expenses); 
         updateTotalAmount(expenses);
         renderExpenses(expenses);
         //reset the both input fields.
         form.reset(); 
      }
   });

   function saveToLocalStorage(expenses){
      localStorage.setItem('expenses', JSON.stringify(expenses));
   }

   function calculateTotalAmount(expenses){  
      return expenses.reduce( 
         (total, currentExpense) => total + currentExpense.amount,0 // why did we use currentExpense.amount? our array is expenses?  Because we are iterating over the expenses array, and for each expense object the currentExpense represents the current object in the iteration. And we are accessing the amount property of that object.
      );
   }

 
   
});
