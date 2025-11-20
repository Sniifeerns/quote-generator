const quotes = [
    "La vida es lo que pasa mientras estás ocupado haciendo otrosplanes. - John Lennon",
    "El único modo de hacer un gran trabajo es amar lo que haces.- Steve Jobs",
    "La innovación distingue a un líder de un seguidor. - SteveJobs"
    ];
    function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() *
    quotes.length);
    return quotes[randomIndex];
    }
    export { quotes, getRandomQuote };