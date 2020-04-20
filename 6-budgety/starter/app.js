// BUDGET CONTROLLER
var budgetController = (function () {



})();

// UI CONTROLLER
var UIController = (function () {



})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // 1. Get the filled input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget in the UI

        console.log('ctrlAddItem');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        // console.log(event);

        if (event.keyCode === 13 || event.which === 13) {
            console.log('ENTER is pressed');
        }

    });

})(budgetController, UIController);

