import { User } from '../models/User';

test('it should be ok', () => {
    const user = new User();

    user.name = "Ricardo"
    user.email = "ricardoandre.pessoa@gmail.com"

    expect(user.name).toEqual('Ricardo')
    expect(user.email).toEqual('ricardoandre.pessoa@gmail.com')
})