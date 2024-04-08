const uppercaseAlphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercaseAlphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

/**
 * Encodes a given text using the Caesar cipher algorithm.
 * @param text The text to encode.
 * @param shift The number of positions to shift each character.
 * @returns The encoded text.
 */
export const encode = (text: string, shift: number): string => {
    if (isNaN(shift)) {
        throw new Error("Invalid shift value. Shift must be a number.");
    }
    if (/[^A-Za-z]/.test(text)) {
        throw new Error("Invalid text. Text must only contain alphabetical characters.");
    }

    return text.split("").map((char) => {
        if (char.match(/[A-Z]/)) { // Check if the character is an uppercase letter
            const index = uppercaseAlphabet.indexOf(char);
            const shiftedIndex = (index + shift) % 26; // Use modulo to handle wrap-around
            return uppercaseAlphabet[shiftedIndex];
        } else if (char.match(/[a-z]/)) { // Check if the character is a lowercase letter
            const index = lowercaseAlphabet.indexOf(char);
            const shiftedIndex = (index + shift) % 26; // Use modulo to handle wrap-around
            return lowercaseAlphabet[shiftedIndex];
        }
        return char; // Non-alphabetic characters are returned unchanged
    }).join("");
};

/**
 * Decodes a given text using the Caesar cipher algorithm.
 * @param text The text to decode.
 * @param shift The number of positions to shift each character back.
 * @returns The decoded text.
 */
export const decode = (text: string, shift: number): string => {
    // Decoding is just encoding with the shift in the opposite direction
    return encode(text, 26 - (shift % 26));
};
