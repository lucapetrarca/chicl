// Función para calcular la diferencia de tiempo
function countdown(date, elementId) {
    const targetDate = new Date(date).getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // Cuando se llega a la fecha
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById(elementId).innerHTML = "¡Ya llegó el día!";
        }
    }, 1000);
}

// Configurar cuentas regresivas para las fechas que mencionaste
countdown("April 3, 2025 00:00:00", "time1");   // Aniversario de noviazgo
countdown("May 4, 2025 00:00:00", "time2");     // Aniversario de noviazgo 2
countdown("August 14, 2025 00:00:00", "time3"); // Aniversario de conocernos
countdown("September 5, 2025 00:00:00", "time4"); // Cumple de Crotto
countdown("November 5, 2025 00:00:00", "time5"); // Cumple la persona más hermosa del universo
countdown("November 9, 2024 00:00:00", "time6"); // Cumple el bostero
countdown("December 16, 2024 00:00:00", "time7"); // Aniversario de la lluvia
