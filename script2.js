document.addEventListener("DOMContentLoaded", function() {
    const sortForm = document.getElementById("sort-form");
    const numbersInput = document.getElementById("numbers");
    const outputDiv = document.getElementById("output");

    sortForm.addEventListener("submit", function(event) {
        event.preventDefault();
        outputDiv.innerHTML = ""; // Clear previous results

        const inputNumbers = numbersInput.value.trim();
        const numbersArray = inputNumbers.split(",").map(function(num) {
            return parseInt(num.trim());
        });

        if (numbersArray.length > 0) {
            const sortedNumbers = bubbleSort(numbersArray);
            displayNumbers(outputDiv, sortedNumbers);
        } else {
            outputDiv.innerHTML = "<p>Please enter a valid list of numbers.</p>";
        }
    });

    function bubbleSort(arr) {
        const n = arr.length;
        let swapped; // Declare swapped variable here

        do {
            swapped = false;

            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap arr[i] and arr[i + 1]
                    const temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;

                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    function displayNumbers(outputElement, numbers) {
        const list = document.createElement("ul");

        numbers.forEach(function(number) {
            const listItem = document.createElement("li");
            listItem.textContent = number;
            list.appendChild(listItem);
        });

        outputElement.appendChild(list);
    }
});
