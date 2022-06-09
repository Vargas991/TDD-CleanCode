import { UrlLogin, UrlUser } from "../protocols/protocols-http"

describe('protocols http en Querys', () => {
    test('Url login', () => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login')
        
        expect(parseUrl.href).toBe('http://localhost:3000/login')
        expect(parseUrl.port).toBe('3000')
    })

    test('Response Query',() => {
        const parseUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
        
        const expectAuth = {
            user: 'user',
            password: 'password'
        }
        expect(parseUrl.query).toEqual(expectAuth)
    })

    test('Url User', () => {
        const parseUrl = UrlUser.parseUrl('http://localhost:3000/user')

        expect(parseUrl.href).toBe('http://localhost:3000/user')
    })
    test('Reponse Query User', () => {
        const parseUrl = UrlUser.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
        const expectUser = {
            user: 'user',
            password: 'password',
            name: 'name',
            lastname: 'lastname'
        }
        
        expect(parseUrl.query).toEqual(expectUser)
    })
})