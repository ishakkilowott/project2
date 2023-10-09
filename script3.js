document.addEventListener("DOMContentLoaded", function() {
    const fibonacciForm = document.getElementById("fibonacci-form");
    const termsInput = document.getElementById("terms");
    const fibonacciOutput = document.getElementById("fibonacci-output");
    const randomNumberOutput = document.getElementById("random-number-output");

    fibonacciForm.addEventListener("submit", function(event) {
        event.preventDefault();
        fibonacciOutput.innerHTML = ""; // Clear previous results

        const terms = parseInt(termsInput.value);

        if (terms <= 0) {
            fibonacciOutput.innerHTML = "<p>Please enter a valid positive number of terms.</p>";
        } else {
            const fibonacciSeries = generateFibonacciSeries(terms);
            displayFibonacciSeries(fibonacciOutput, fibonacciSeries);
        }
    });

    function generateFibonacciSeries(terms) {
        const fibonacciSeries = [0, 1];

        for (let i = 2; i < terms; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }

        return fibonacciSeries;
    }

    function displayFibonacciSeries(outputElement, series) {
        const resultString = `Fibonacci series with ${series.length} terms: ${series.join(", ")}`;
        const paragraph = document.createElement("p");
        paragraph.textContent = resultString;
        outputElement.appendChild(paragraph);
    }

   
});
