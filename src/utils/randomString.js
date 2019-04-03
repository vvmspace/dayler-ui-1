import { default as crypt } from 'crypto-js'

export default (length = 64) => {
    return crypt.lib.WordArray.random(length / 2).toString()
}
