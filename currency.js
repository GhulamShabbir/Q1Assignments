import inquirer from "inquirer";
async function tittle() {
    let tittle = '........Currency Converter........';
    console.log(tittle);
}
tittle();
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "currency1",
        message: "Select currency to convert: ",
        choices: ['PKR', 'INR', 'USD', 'SR', 'AED']
    },
    {
        type: "list",
        name: "currency2",
        message: "Select currency to be converted: ",
        choices: ['PKR', 'INR', 'USD', 'SR', 'AED']
    },
]);
if (answer.currency1 == 'PKR') {
    let PKR = 1;
    if (answer.currency2 == 'PKR') {
        let PKR = 1;
        console.log(`1 PKR = ${PKR * PKR} PKR `);
    }
    else if (answer.currency2 == 'INR') {
        let INR = 3.36;
        console.log(`1 INR = ${PKR * INR} PKR `);
    }
    else if (answer.currency2 == 'USD') {
        let USD = 275.58;
        console.log(`1 USD = ${PKR * USD} PKR `);
    }
    else if (answer.currency2 == 'SR') {
        let SR = 73.48;
        console.log(`1 SR = ${PKR * SR} PKR `);
    }
    else if (answer.currency2 == 'AED') {
        let AED = 75.03;
        console.log(`1 AED = ${PKR * AED} PKR `);
    }
}
else if (answer.currency1 == 'INR') {
    let INR = 1;
    if (answer.currency2 == 'PKR') {
        let PKR = 0.30;
        console.log(`1 PKR = ${INR * PKR} INR `);
    }
    else if (answer.currency2 == 'INR') {
        let INR = 1;
        console.log(`1 INR = ${INR * INR} INR `);
    }
    else if (answer.currency2 == 'USD') {
        let USD = 82.05;
        console.log(`1 USD = ${INR * USD} INR `);
    }
    else if (answer.currency2 == 'SR') {
        let SR = 21.86;
        console.log(`1 SR = ${INR * SR} INR `);
    }
    else if (answer.currency2 == 'AED') {
        let AED = 22.34;
        console.log(`1 AED = ${INR * AED} INR `);
    }
}
else if (answer.currency1 == 'USD') {
    let USD = 1;
    if (answer.currency2 == 'PKR') {
        let PKR = 0.0036;
        console.log(`1 PKR = ${USD * PKR} USD `);
    }
    else if (answer.currency2 == 'INR') {
        let INR = 0.012;
        console.log(`1 INR = ${USD * INR} USD `);
    }
    else if (answer.currency2 == 'USD') {
        let USD = 1;
        console.log(`1 USD = ${USD * USD} USD `);
    }
    else if (answer.currency2 == 'SR') {
        let SR = 0.27;
        console.log(`1 SR = ${USD * SR} USD `);
    }
    else if (answer.currency2 == 'AED') {
        let AED = 0.27;
        console.log(`1 AED = ${USD * AED} USD `);
    }
}
else if (answer.currency1 == 'SR') {
    let SR = 1;
    if (answer.currency2 == 'PKR') {
        let PKR = 0.014;
        console.log(`1 PKR = ${SR * PKR} SR `);
    }
    else if (answer.currency2 == 'INR') {
        let INR = 0.046;
        console.log(`1 INR = ${SR * INR} SR `);
    }
    else if (answer.currency2 == 'USD') {
        let USD = 3.75;
        console.log(`1 USD = ${SR * USD} SR `);
    }
    else if (answer.currency2 == 'SR') {
        let SR = 1;
        console.log(`1 SR = ${SR * SR} SR `);
    }
    else if (answer.currency2 == 'AED') {
        let AED = 1.02;
        console.log(`1 AED = ${SR * AED} SR `);
    }
}
else if (answer.currency1 == 'AED') {
    let AED = 1;
    if (answer.currency2 == 'PKR') {
        let PKR = 0.013;
        console.log(`1 PKR = ${AED * PKR} AED `);
    }
    else if (answer.currency2 == 'INR') {
        let INR = 0.045;
        console.log(`1 INR = ${AED * INR} AED `);
    }
    else if (answer.currency2 == 'USD') {
        let USD = 3.76;
        console.log(`1 USD = ${AED * USD} AED `);
    }
    else if (answer.currency2 == 'SR') {
        let SR = 0.98;
        console.log(`1 SR = ${AED * SR} AED `);
    }
    else if (answer.currency2 == 'AED') {
        let AED = 1;
        console.log(`1 AED = ${AED * AED} AED `);
    }
}
async function Thanks() {
    let Thanks = '........Thanks for using Currency Converter........';
    console.log(Thanks);
}
Thanks();
