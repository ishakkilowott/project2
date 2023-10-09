// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the HTML elements we need
    const sortForm = document.getElementById("sort-form"); // The form element
    const numbersInput = document.getElementById("numbers"); // The input field
    const resultDiv = document.getElementById("result"); // The div to display results

    // Add an event listener to the form for when it's submitted
    sortForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        resultDiv.innerHTML = ""; // Clear previous results

        // Get the input numbers as a string and remove leading/trailing whitespace
        const inputNumbers = numbersInput.value.trim();

        // Split the string into an array and convert each element to an integer
        const numbersArray = inputNumbers.split(",").map(function(num) {
            return parseInt(num.trim());
        });

        // Check if there are valid numbers in the array
        if (numbersArray.length > 0) {
            // Sort the numbers using the selectionSort function
            const sortedNumbers = selectionSort(numbersArray);

            // Display the sorted numbers in the resultDiv
            displaySortedNumbers(resultDiv, sortedNumbers);
        } else {
            // Display an error message if no valid numbers were entered
            resultDiv.innerHTML = "<p>Please enter a valid list of numbers.</p>";
        }
    });

    // Selection Sort function to sort an array of numbers
    function selectionSort(arr) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                // Swap arr[i] and arr[minIndex]
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }

        return arr;
    }

    // Function to display the sorted numbers in the result element
    function displaySortedNumbers(outputElement, numbers) {
        const resultParagraph = document.createElement("p");
        resultParagraph.textContent = "Sorted numbers: " + numbers.join(", ");
        outputElement.appendChild(resultParagraph);
    }
});
