import Users from "../Models/Users";

export default {
    render(users: Users) {
        return {
            id: users.id,
            status: users.status || 0,
            name: users.name,
            surname: users.surname,
            email: users.email,
            password: undefined,
        }
    },
    renderMany(users: Users[]) {
        return users.map(user => this.render(user));
    }
}