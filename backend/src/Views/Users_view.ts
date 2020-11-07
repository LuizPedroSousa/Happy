import Users from "../Models/Users";

export default {
    render(users: Users) {
        return {
            id: users.id,
            name: users.name,
            surname: users.surname,
            email: users.email,
            password: users.password,
        }
    }
}