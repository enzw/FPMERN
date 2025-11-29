const enzo = (param1, param3, callbacknya) => {
    console.log(param1);
    console.log(param3);
    callbacknya();
}

const sigma = (x) => {
    console.log(`${x} Saskia`)
}

enzo("Enzo", "sayang", sigma); // Enzo sayang undefined Saskia
enzo("Enzok", "suka", () => sigma("banget sama")); // Enzo suka banget sama Saskia