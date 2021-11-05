import fs from 'fs'

export function txtToArray(path) {
    return fs.readFileSync(path).toString().replace(/\r/g, '').split('\n')
}