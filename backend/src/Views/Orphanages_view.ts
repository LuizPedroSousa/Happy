import Orphanage from '../Models/Orphanages';
import Images from './Images_view';
export default {
    Render (orphanage: Orphanage) {
        return {
            id: orphanage.id,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            name: orphanage.name,
            about: orphanage.about,
            whatsapp: orphanage.whatsapp,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: Images.RenderMany(orphanage.images, 'Orphanages')
        };
    },
    RenderMany (Orphange: Orphanage[]) {
        return Orphange.map(orphange => this.Render(orphange));
    }
};
