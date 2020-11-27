import OrpImageType from '../Models/Orphanage_Images';
import UserImageType from '../Models/Users_Images';

type Image = OrpImageType | UserImageType;

export default {
    Render (image:Image, path: string) {
        return {
            id: image.id && image.id,
            url: `http://${process.env.ADDRESS}:${process.env.PORT || 3333}/Uploads/${path}/${image.path}`
        };
    },

    RenderMany (image: Image[], path: string) {
        return image.map(img => this.Render(img, path));
    }
};
