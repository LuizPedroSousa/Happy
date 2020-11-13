import Users from "../Models/Users";

export default {
    render(users: Users) {
        return {
            id: users.id,
            status: users.status,
            name: users.name,
            surname: users.surname,
            email: users.email,
            createdAt: users.createdAt,
        }
    },
    renderMany(users: Users[]) {
        return users.map(user => this.render(user));
    }
}
