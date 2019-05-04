import PropTypes from 'prop-types'

export const key = (round = 100000) => (Math.random() * round).toFixed(2)

export const ItemType = PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
})

export const GroupType = PropTypes.shape({
    key: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(ItemType).isRequired,
})

export const SchemaType = PropTypes.arrayOf(GroupType)

export default [{
    key: key(),
    items: [{
        key: key(),
        title: 'Getting Started',
        href: '/',
        tags: [
            'getting',
            'install',
            'installation',
            'intro',
            'introduction',
            'overview',
            'setup',
            'start',
            'started',
        ],
    }, {
        key: key(),
        title: 'Typings',
        href: '/typings',
        tags: [
            'font',
            'header',
            'heading',
            'type',
            'typing',
        ],
    }],
}, {
    key: key(),
    items: [{
        key: key(),
        title: 'Feather Icons',
        href: '/feather',
        tags: [
            'icons',
            'feather',
        ],
    }],
}]
