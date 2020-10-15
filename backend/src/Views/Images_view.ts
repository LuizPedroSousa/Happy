import Image from '../Models/Images';

export default {
    Render(image: Image){
        return {
            id: image.id,
            url: `http://localhost:${process.env.PORT || 3333}/Uploads/${image.path}`
        }
    },

    RenderMany(image: Image[]){
        return image.map(image => this.Render(image));
    }
}