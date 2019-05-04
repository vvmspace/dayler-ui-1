const filter = (tags, query) => {
    for (const tag of tags) {
        if (tag.toLowerCase().indexOf(query.toLowerCase()) > -1) {
            return true
        }
    }

    return false
}

export const search = (icons = [], query = '') => {
    return query
        ? icons.filter(icon => filter(icon.tags, query))
        : icons
}
