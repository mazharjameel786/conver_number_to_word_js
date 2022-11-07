import promptSync from 'prompt-sync';

const prompt = promptSync({sigint:true});
const number1 = prompt("enter a Number: ");

switch (parseInt(number1)) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
            console.log("Three");
            break;
    case 4:
            console.log("Four");
            break;
     case 5:
                console.log("Five");
                break;
     case 6:
                console.log("Six");
                break;
     case 7:
                    console.log("Seven");
                    break;
    case 8:
                    console.log("Eight");
                    break;
     case 9:
                        console.log("Nine");
                        break;
     case 10:
                        console.log("Ten");
                        break;
     case 11:
                            console.log("Eleven");
                            break;
     case 12:
                            console.log("Twelve");
                            break;

    default:
        console.log("Invalid");
        break;
}