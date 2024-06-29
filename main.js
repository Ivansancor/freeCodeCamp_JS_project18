const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const validateNumber = () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    } else {
        const isValid = input => {
            const regex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})(?:[-\s])?\d{3}(?:[-\s])?\d{4}$/gi;
            return regex.test(input);
        }
        resultsDiv.textContent = isValid(userInput.value) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
        resultsDiv.classList.remove("hidden");
        resultsDiv.classList.add(isValid(userInput.value) ? "success" : "failure");
        userInput.value= "";
    }
}

userInput.addEventListener("keyup", e => {
    if (e.key === "Enter") {
        validateNumber();
    }
});

checkBtn.addEventListener("click", () => {
        validateNumber();
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
    resultsDiv.classList.add("hidden");
    }
);