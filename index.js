import { txtToArray } from './utils.js'

const WORDS = txtToArray('./liste_francais.txt')
const KEYBOARD = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

/**
 * @param {string | number} code 
 * @returns {string[]} words from WORDS matching given @param code
 * complexity O(n)
 */
function findMatchingWordsFromCode(code) {
    const matchingWords = []

    if (typeof code === 'number') {
        code = String(code)
    }
    if (typeof code !== 'string') {
        throw new Error('Unexpected: param code should be a string or a number')
    }

    for (const word of WORDS) {
        if (isValidWord(code, word)) {
            matchingWords.push(word)
        }
    }

    return matchingWords
}


/**
 * @param {string} code 
 * @param {string} word 
 * @returns {boolean} stating if given @param word is matching @param code
 * complexity O(n)
 */
function isValidWord(code, word) {
    const digits = code.split('')
    const chars = word.split('')
    let lastDigit = null
    let lastChar = null

    while (digits.length) {
        const char = chars.shift()
        let digit = null

        if (char === lastChar) {
            digit = lastDigit
        } else {
            digit = digits.shift()
        }

        if (!KEYBOARD[digit].includes(char)) {
            return false
        }

        lastDigit = digit
        lastChar = char
    }

    return chars.length === 0
}

/**
 * Test code
 * Feel free to change code value to test various codes
 */
const code = 22374253
const matchingWords = findMatchingWordsFromCode(code)
console.log(matchingWords)