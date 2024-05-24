// let containerEl = document.querySelector(".container");

// for (let i = 1; i < 50; i++) {
//     // Create a new div element for each color container
//     let colorContainerEl = document.createElement("div");
//     colorContainerEl.classList.add("color-container"); // Corrected class name from "color-conatiner" to "color-container"

//     // Create a new span element for the color code
//     let colorCodeEl = document.createElement("span");
//     colorCodeEl.classList.add("color-code");

//     // Add the color code span to the color container
//     colorContainerEl.appendChild(colorCodeEl); // Corrected this line

//     // Create a button element for copying the color code
//     let copyBtnEl = document.createElement("button");
//     copyBtnEl.innerHTML = "Copy";

//     // Add the copy button to the color container
//     colorContainerEl.appendChild(copyBtnEl);

//     // Finally, add the color container to the main container element
//     containerEl.appendChild(colorContainerEl);
// }


// function randomColor() {
//     const chars = "0123456789";
//     const colorCodeLength = 6;
//     let colorcode = "";
//     for (let i = 0; i < colorCodeLength; i++) {
//         const random = Math.floor(Math.random() * 10)
//         colorcode += chars.substring(random, random + 1)
//         return colorcode
//     }

// }
// randomColor()

// let colorContainerEls = document.querySelectorAll(".color-container");
// GeneratorColors()

// function GeneratorColors() {
//     for (let i = 0; i < colorContainerEls.length; i++) {
//         const colorContainerEl = colorContainerEls[i];
//         const newColorCode = randomColor();
//         const colorCodeEl = document.querySelector(".color-code");
//         colorContainerEl.style.backgroundColor = "#" + newColorCode;
//         colorCodeEl.innerHTML = "#" +newColorCode;

//     }




// }


let containerEl = document.querySelector(".container");

for (let i = 1; i <= 50; i++) {
    // Create a new div element for each color container
    let colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container"); // Corrected class name from "color-conatiner" to "color-container"

    // Create a new span element for the color code
    let colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");

    // Add the color code span to the color container
    colorContainerEl.appendChild(colorCodeEl); // Corrected this line

    // Create a button element for copying the color code
    let copyBtnEl = document.createElement("button");
    copyBtnEl.innerHTML = "Copy";

    // Add the copy button to the color container
    colorContainerEl.appendChild(copyBtnEl);

    // Finally, add the color container to the main container element
    containerEl.appendChild(colorContainerEl);
}

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorcode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const random = Math.floor(Math.random() * 16);
        colorcode += chars[random];
    }
    return colorcode;
}

let colorContainerEls = document.querySelectorAll(".color-container");


GeneratorColors();

function GeneratorColors() {
    for (let i = 0; i < colorContainerEls.length; i++) {
        const colorContainerEl = colorContainerEls[i];
        const newColorCode = randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code"); // Corrected to use the current color container
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorCodeEl.innerHTML = "#" + newColorCode;
    }
}


colorContainerEls.forEach((colorContainerEl) => {
    const copybutton = colorContainerEl.querySelector("button");
    const colorcodeEl = colorContainerEl.querySelector(".color-code");
    copybutton.addEventListener("click", () => {
        const colorcode = colorcodeEl.innerText;
        copyClipBoard(colorcode)


    })
})

function copyClipBoard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Copied to clipboard: ' + text);
        })
        .catch((error) => {
            console.log("Failed to copy to clipboard", error);
        });
}
