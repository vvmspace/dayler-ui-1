import * as service from '../src/app/components/NavigationItem/service'

describe('NavigationItem component service', () => {
    test('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('service.isActive method', () => {
        test('should be defined', () => {
            expect(service.isActive).toBeDefined()
        })

        test('should be true #1', () => {
            const match = {
                url: '/',
            }

            const location = {
                pathname: '/',
            }

            expect(service.isActive(match, location)).toBeTruthy()
        })

        test('should be true #2', () => {
            const match = {
                url: '/link',
            }

            const location = {
                pathname: '/link',
            }

            expect(service.isActive(match, location)).toBeTruthy()
        })

        test('should be true #3', () => {
            const match = {
                url: '/link',
            }

            const location = {
                pathname: '/link/sublink',
            }

            expect(service.isActive(match, location)).toBeTruthy()
        })

        test('should be false #1', () => {
            const match = {
                url: '/link',
            }

            const location = {
                pathname: '/anotherlink',
            }

            expect(service.isActive(match, location)).toBeFalsy()
        })

        test('should be false #2', () => {
            const match = {
                url: '/',
            }

            const location = {
                pathname: '/anotherlink',
            }

            expect(service.isActive(match, location)).toBeFalsy()
        })

        test('should be false #3', () => {
            const match = {
                url: '/link',
            }

            const location = {
                pathname: '/anotherlink/sublink',
            }

            expect(service.isActive(match, location)).toBeFalsy()
        })

        test('should be false #4', () => {
            const match = {
                url: '/link',
            }

            const location = {
                pathname: '/',
            }

            expect(service.isActive(match, location)).toBeFalsy()
        })
    })
})
