document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    const validateBusinessName = () => {
        const business_nameField = document.getElementById("business_name");
        const business_nameError = document.getElementById("business_name-error");

        // Reset previous error messages
        business_nameError.textContent = "";

        // Validate Name
        if (!business_nameField.value.trim()) {
            business_nameError.textContent = "Business Name is required";
            business_nameField.style.border = "1px solid red";
        } else {
            business_nameField.style.border = "";
        }
    };

    const validateEmail = () => {
        const emailField = document.getElementById("email");
        const emailError = document.getElementById("email-error");

        // Reset previous error messages
        emailError.textContent = "";

        // Validate Age
//        const email = emailField.value.trim();
        if (!emailField.value.trim()) {
            emailError.textContent = "Please enter a valid email";
            emailField.style.border = "1px solid red";
        } else {
            emailField.style.border = "";
        }
    };

    const validatePhone = () => {
        const phone_numberField = document.getElementById("phone_number");
        const phone_numberError = document.getElementById("phone_number-error");

        // Reset previous error messages
        phone_numberError.textContent = "";

        // Validate Weight
        const phone_number = phone_numberField.value.trim();
        if (isNaN(phone_number)) {
            phone_numberError.textContent = "Please enter a valid phone number";
            phone_numberField.style.border = "1px solid red";
        } else {
            phone_numberField.style.border = "";
        }
    };

    const validateEmployees = () => {
        const no_of_employeesField = document.getElementById("no_of_employees");
        const no_of_employeesError = document.getElementById("no_of_employees-error");

        // Reset previous error messages
        no_of_employeesError.textContent = "";

        // Validate Weight
        const no_of_employees = parseInt(no_of_employeesField.value);
        if (no_of_employees<0) {
            no_of_employeesError.textContent = "Please enter a valid number of employees";
            phone_numberField.style.border = "1px solid red";
        } else {
            phone_numberField.style.border = "";
        }
    };

    const validateVaccineReceived = () => {
        const vaccine_recieved_boolField = document.getElementById("vaccine_recieved_bool");
        const vaccine_recieved_boolError = document.getElementById("vaccine_recieved_bool-error");

        // Reset previous error messages
        vaccine_recieved_boolError.textContent = "";

        // Validate Weight
//        const vaccine_recieved = vaccine_recieved_boolField.value;
        if (!vaccine_recieved_boolField.value.trim()) {
            vaccine_recieved_boolError.textContent = "Please enter Yes or No";
            vaccine_recieved_boolField.style.border = "1px solid red";
        } else {
            vaccine_recieved_boolField.style.border = "";
        }
    };

    const validateInventory = () => {
        const items_in_inventoryField = document.getElementById("items_in_inventory");
        const items_in_inventoryError = document.getElementById("items_in_inventory-error");

        // Reset previous error messages
        items_in_inventoryError.textContent = "";

        // Validate Weight
        const items = parseInt(items_in_inventoryField.value);
        if (isNaN(items) || items<0) {
            items_in_inventoryError.textContent = "Please enter a valid value";
            items_in_inventoryField.style.border = "1px solid red";
        } else {
            items_in_inventoryField.style.border = "";
        }
    };

    const validateVaccinePref = () => {
        const vaccine_prefField = document.getElementById("vaccine_pref");
        const vaccine_prefError = document.getElementById("vaccine_pref-error");

        // Reset previous error messages
        vaccine_prefError.textContent = "";

        // Validate Weight
//        const vaccine = vaccine_prefField.value.trim();
        if (!vaccine_prefField.value.trim()) {
            vaccine_prefError.textContent = "Please enter a valid value";
            vaccine_prefField.style.border = "1px solid red";
        } else {
            vaccine_prefField.style.border = "";
        }
    };

    const validateAccessibilityBool = () => {
        const accessibility_boolField = document.getElementById("accessibility_bool");
        const accessibility_boolError = document.getElementById("accessibility_bool-error");

        // Reset previous error messages
        accessibility_boolError.textContent = "";

        // Validate Weight
        const accessibility = accessibility_boolField.value.trim();
        if (!accessibility_boolField.value.trim()) {
            accessibility_boolError.textContent = "Please enter a Yes or No";
            accessibility_boolField.style.border = "1px solid red";
        } else {
            accessibility_boolField.style.border = "";
        }
    };

    // Add live validation on input
    form.addEventListener("input", function (event) {
        if (event.target.id === "business_name") {
            validateBusinessName();
        } else if (event.target.id === "email") {
            validateEmail();
        } else if (event.target.id === "phone_number") {
            validatePhone();
        } else if (event.target.id === "no_of_employees") {
            validateEmployees();
        } else if (event.target.id === "vaccine_recieved_bool") {
            validateVaccineReceived();
        } else if (event.target.id === "items_in_inventory") {
            validateInventory();
        } else if (event.target.id === "vaccine_pref") {
            validateVaccinePref();
        } else if (event.target.id === "accessibility_bool") {
            validateAccessibilityBool();
        }
    });

    // Add final validation on form submission
    form.addEventListener("submit", function (event) {
        validateBusinessName();
        validateEmail();
        validatePhone();
        validateEmployees();
        validateVaccineReceived();
        validateInventory();
        validateVaccinePref();
        validateAccessibilityBool();
        // Check if there are any error messages
        const errorMessages = form.querySelectorAll(".error-message");
        for (const errorMessage of errorMessages) {
            if (errorMessage.textContent !== "") {
                event.preventDefault();
                return;
            }
        }
    });
});
