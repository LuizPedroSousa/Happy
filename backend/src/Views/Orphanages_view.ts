import Orphanage from '../Models/Orphanages';
import Images from './Images_view';
export default {
    Render (orphanage: Orphanage) {
        return {
            id: orphanage.id,
            status: orphanage.status,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            name: orphanage.name,
            about: orphanage.about,
            whatsapp: orphanage.whatsapp,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            createdAt: orphanage.createdAt,
            images: Images.RenderMany(orphanage.images, 'Orphanages')
        };
    },
    RenderMany (Orphange: Orphanage[]) {
        return Orphange.map(orphange => this.Render(orphange));
    }
};
