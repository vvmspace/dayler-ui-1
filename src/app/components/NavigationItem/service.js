export const isActive = (match, location) =>
    match && match.url === '/' + location.pathname.split('/')[1]
