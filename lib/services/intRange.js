export default (at, to = at) =>
    Array.from({ length: to - (at - 1) }, (_, index) => index + at);
