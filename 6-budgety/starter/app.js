// BUDGET CONTROLLER
var budgetController = (function () {



})();

// UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

    return {
        domStrings: DOMStrings,
        getinput: function () {
            return {
                type: document.querySelector(this.domStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(this.domStrings.inputDescription).value,
                value: document.querySelector(this.domStrings.inputValue).value
            };
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.domStrings;
    var ctrlAddItem = function () {

        // 1. Get the filled input data
        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget in the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        // console.log(event);

        if (event.keyCode === 13 || event.which === 13) {

            // console.log('ENTER is pressed');

            ctrlAddItem();

        }

    });

})(budgetController, UIController);

