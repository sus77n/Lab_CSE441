import { Alert } from "react-native";

export default function sumOfDigit(num) {
    return num.toString().split("")
        .reduce((sum, digit) =>
            sum + parseInt(digit), 0);
}

