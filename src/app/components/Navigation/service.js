const filter = (tags, query) => {
    for (const tag of tags) {
        if (tag.toLowerCase().indexOf(query.toLowerCase()) > -1) {
            return true
        }
    }

    return false
}

const reduce = (group, query) => {
    return {
        ...group,
        items: [...group.items]
            .filter(item => filter(item.tags, query)),
    }
}

export const search = (groups = [], query = '') => {
    return query
        ? groups
            .map(group => reduce(group, query.toString()))
            .filter(group => group?.items?.length)
        : groups
}
