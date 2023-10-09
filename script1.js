document.addEventListener("DOMContentLoaded", function() {
    var output = document.getElementById("output");

    for (var i = 1; i <= 30; i++) {
        var result = "";
        if (i % 3 === 0) {
            result += "FIZZ";
        }
        if (i % 5 === 0) {
            result += "BUZZ";
        }
        if (result === "") {
            result = i;
        }

        var item = document.createElement("div");
        item.textContent = result;
        item.className = "item";
        output.appendChild(item);
    }
});
