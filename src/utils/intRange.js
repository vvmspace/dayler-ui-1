export default (at, to = at) => {
    const length = { length: to - (at - 1) }

    return Array.from(length, (_, index) => index + at)
}
