const onLoad = () => {

    const htmlEditor = document.querySelector("textarea[name='html']");
    const cssEditor = document.querySelector("textarea[name='css']");
    const htmlContent = document.querySelector(".html-content");
    const printButton = document.querySelector("button[type='button'].print-button");
    const form = document.querySelector("form");
    const styleElement = document.querySelector("#custom-style");


    if (!htmlEditor) {
        return null;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log("event", event);
        console.log("form", form);

        const phone1 = document.querySelector('[name="phone-number1"]');
        const phone2 = document.querySelector('[name="phone-number2"]');
        const phone3 = document.querySelector('[name="phone-number3"]');
        const phone4 = document.querySelector('[name="phone-number4"]');

        const lomakeData = {
            editor: htmlEditor.value.trim(),
            phone1: phone1.value.trim(),
            phone2: phone2.value.trim(),
            phone3: phone3.value.trim(),
            phone4: phone4.value.trim(),
        };

        console.log("lomakedata", lomakeData);


        // apikutsu kuvitteelliseen rajapintaan
        fetch("/form.php", {
            method: "POST",
            body: new FormData(form)
        });
    });

    const handleHtmlChange = () => {
        htmlContent.innerHTML = htmlEditor.value.trim();
    };

    const handleCssChange = () => {
        styleElement.innerHTML = cssEditor.value;
    };

    cssEditor.addEventListener("keyup", handleCssChange);
    cssEditor.addEventListener("change", handleCssChange);
    cssEditor.addEventListener("input", handleCssChange);

    htmlEditor.addEventListener("keyup", handleHtmlChange);
    htmlEditor.addEventListener("change", handleHtmlChange);
    htmlEditor.addEventListener("input", handleHtmlChange);

    const handleHtmlContentReset = () => {
        htmlContent.innerHTML = "";
    };

    form.addEventListener("reset", handleHtmlContentReset);
    htmlEditor.addEventListener("reset", handleHtmlContentReset);
    cssEditor.addEventListener("reset", handleHtmlContentReset);

    printButton.addEventListener("click", () => {
        window.print();
    });

    document
        .querySelector("button.reset-form")
        .addEventListener("click", () => {
            form.reset();
        });
};


window.addEventListener("load", onLoad);

