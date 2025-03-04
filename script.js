const availableTables = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Número aleatorio
const randomNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1; // Número aleatorio

function checkAvailability (requiredTables) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (requiredTables <= availableTables) {
                resolve('Hay suficientes mesas disponibles.');
            } else {
                reject('No hay suficientes mesas disponibles.');
            }
        }, 2000);
    })
}

function sendConfirmation (clientName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() <0.5;    
            if (!error) {
                resolve(`Confirmación enviada a ${clientName}.`);
            } else {
                reject(`La confirmación para ${clientName} no pudo ser enviada. Por favor intenta de nuevo.`);
            }
        }, 1500);
    })
}

//Código con async/await:
async function reserveTableAsyncAwait (clientName, requiredTables) {
    try {
        console.log('Verificando disponibilidad de mesas.');
        const availability = await checkAvailability(requiredTables);
        console.log(availability);
        console.log('Gestionando reserva.');
        const emailSent = await sendConfirmation (clientName);
        console.log(emailSent);
    } catch (reject) {
        console.error('Error (Versión "async/await"): ', reject);
    }
}

//Código con .then:
function reserveTableThen (clientName, requiredTables) {
    console.log('Verificando disponibilidad de mesas.');
    checkAvailability(requiredTables)
    .then(resolve =>{
        console.log(resolve);
        console.log('Gestionando reserva.');
        return sendConfirmation(clientName);
        
    })
    .then(resolve =>{
        console.log(resolve);
    })
    .catch(reject => {
        console.error('Error (Versión "then"): ', reject);
    })
}

console.log(`(Mesas disponibles: ${availableTables})`);
console.log(`(Mesas solicitadas: ${randomNumber})`);
reserveTableAsyncAwait("Juan Pérez", randomNumber);
reserveTableThen("Carlos García", randomNumber);