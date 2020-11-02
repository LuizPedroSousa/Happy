import Image from '../Models/Images';

export default {
    Render(image: Image){
        return {
            id: image.id,
            url: `http://192.168.15.10:${process.env.PORT || 3333}/Uploads/${image.path}`
        }
    },

    RenderMany(image: Image[]){
        return image.map(image => this.Render(image));
    }
}