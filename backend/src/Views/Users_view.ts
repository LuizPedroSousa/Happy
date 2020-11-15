import Users from "../Models/Users";
import Images_view from "./Images_view";

export default {
    render(users: Users) {
        return {
            id: users.id,
            status: users.status,
            name: users.name,
            surname: users.surname,
            email: users.email,
            createdAt: users.createdAt,
            image: Images_view.Render(users.image,'Users')
        }
    },
    renderMany(users: Users[]) {
        return users.map(user => this.render(user));
    }
}
