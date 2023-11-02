    window.addEventListener("load", ()=> {

        const editor = document.querySelector("textarea");
        const htmlContent = document.querySelector(".html-content");
        const printButton = document.querySelector("button[type='button'].print-button");
        const form = document.querySelector("form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            console.log("event", event);
            console.log("form", form);

            const phone1 = document.querySelector('[name="phone-number1"]');
            const phone2 = document.querySelector('[name="phone-number2"]');
            const phone3 = document.querySelector('[name="phone-number3"]');
            const phone4 = document.querySelector('[name="phone-number4"]');

            const lomakeData = {
                editor: editor.value.trim(),
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

        const handleChange = () => {
            htmlContent.innerHTML = editor.value.trim();
        };


        editor.addEventListener("keyup", handleChange);
        editor.addEventListener("change", handleChange);
        editor.addEventListener("input", handleChange);
        form.addEventListener("reset", () => {
            htmlContent.innerHTML = "";
        });

        printButton.addEventListener("click", () => {
            window.print();
        });

        document
            .querySelector("button.reset-form")
            .addEventListener("click", () => {
                document.querySelector("form").reset();
            });

    });

