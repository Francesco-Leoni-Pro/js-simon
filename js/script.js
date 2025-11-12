document.addEventListener("DOMContentLoaded", function () {
    const timerDiv = document.getElementById("timer");
    const numeriContainer = document.getElementById("numeriContainer");
    const inputContainer = document.getElementById("inputContainer");
    const buttonContainer = document.getElementById("buttonContainer");
    const risultatoDiv = document.getElementById("risultato");
    const confermaBtn = document.getElementById("conferma"); // <--- aggiunto

    const numeri = [];

    // Genera 5 numeri casuali unici
    while (numeri.length < 5) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!numeri.includes(num)) numeri.push(num);
    }

    // Timer di 30 secondi
    let tempo = 30;
    timerDiv.textContent = tempo;
    const timerInterval = setInterval(() => {
        tempo--;
        timerDiv.textContent = tempo;
        if (tempo <= 0) {
            clearInterval(timerInterval);
            timerDiv.textContent = "Tempo scaduto!";

            // Mostra input e bottone
            inputContainer.style.display = "flex";
            buttonContainer.style.display = "block";

            // Nasconde i numeri
            for (let i = 1; i <= numeri.length; i++) {
                document.getElementById(`num${i}`).textContent = "";
            }
        }
    }, 1000);

    // Mostra numeri 1 alla volta
    let index = 0;
    const numeroInterval = setInterval(() => {
        if (index < numeri.length) {
            document.getElementById(`num${index + 1}`).textContent = numeri[index];
            index++;
        } else {
            clearInterval(numeroInterval);
        }
    }, 1000);

    // Bottone conferma
    confermaBtn.addEventListener("click", function () {
        const userInputs = [];
        for (let i = 1; i <= 5; i++) {
            const val = parseInt(document.getElementById(`input${i}`).value);
            if (!isNaN(val)) userInputs.push(val);
        }

        // Controlla quali numeri sono corretti
        const indovinati = numeri.filter(num => userInputs.includes(num));

        // Mostra il risultato
        risultatoDiv.textContent = `Hai indovinato ${indovinati.length} numero/i: (${indovinati.join(", ")})`;
    });
});