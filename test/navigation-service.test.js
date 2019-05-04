import * as service from '../src/app/components/Navigation/service'

const mock = [{
    title: 'group 1',
    items: [{
        tags: ['item 11', 'foo', 'Bar'],
        title: 'item 11',
    }, {
        tags: ['item 12', 'azz', 'xyy'],
        title: 'item 12',
    }],
}, {
    title: 'group 2',
    items: [{
        tags: ['item 21', 'qww', 'err'],
        title: 'item 21',
    }, {
        tags: ['item 22', 'opp', 'kll'],
        title: 'item 22',
    }],
}]

describe('Navigation component service', () => {
    test('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('service.search method', () => {
        test('should be defined', () => {
            expect(service.search).toBeDefined()
        })

        test('should be same with mock', () => {
            const equal = [{
                title: 'group 1',
                items: [{
                    tags: ['item 11', 'foo', 'Bar'],
                    title: 'item 11',
                }, {
                    tags: ['item 12', 'azz', 'xyy'],
                    title: 'item 12',
                }],
            }, {
                title: 'group 2',
                items: [{
                    tags: ['item 21', 'qww', 'err'],
                    title: 'item 21',
                }, {
                    tags: ['item 22', 'opp', 'kll'],
                    title: 'item 22',
                }],
            }]

            const filter = ''

            expect(service.search(mock, filter)).toEqual(equal)
        })

        test('should be empty', () => {
            const filter = Math.random()

            expect(service.search(mock, filter)).toEqual([])
        })

        test('should be empty w/o arguments', () => {
            expect(service.search()).toEqual([])
        })

        test('should be equal #1', () => {
            const equal = [{
                title: 'group 1',
                items: [{
                    tags: ['item 11', 'foo', 'Bar'],
                    title: 'item 11',
                }],
            }]

            const filter = 'foo'

            expect(service.search(mock, filter)).toEqual(equal)
        })

        test('should be equal #2', () => {
            const equal = [{
                title: 'group 2',
                items: [{
                    tags: ['item 21', 'qww', 'err'],
                    title: 'item 21',
                }, {
                    tags: ['item 22', 'opp', 'kll'],
                    title: 'item 22',
                }],
            }]

            const filter = 'item 2'

            expect(service.search(mock, filter)).toEqual(equal)
        })

        test('should be equal #3', () => {
            const equal = [{
                title: 'group 2',
                items: [{
                    tags: ['item 21', 'qww', 'err'],
                    title: 'item 21',
                }],
            }]

            const filter = 'ErR'

            expect(service.search(mock, filter)).toEqual(equal)
        })
    })
})
