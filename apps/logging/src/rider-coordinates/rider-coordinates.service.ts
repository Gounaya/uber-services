import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class RiderCoordinatesService {
     
    constructor(
        @InjectModel(RiderCoordinate.name)
        private riderCoordinatesModel: Model<RiderCoordinate>,
        @Inject('RIDER_SERVICE') private readonly client: ClientProxy
    ){}

    async getRiderCoordinates(riderId: string) {
        try {
            const coordinates = await this.riderCoordinatesModel.find({ rider: riderId });
            const pattern = { cmd: 'get-rider' };
            const payload = { id: riderId };
            const rider = await firstValueFrom(this.client.send(pattern, payload));
            return { coordinates, rider };
        } catch (error) {
            console.error('Error connecting to microservice:', error);
            throw new Error('Error retrieving rider coordinates');
        }
    }

    async saveRiderCoordinates(CreateCoordinateDto: CreateCoordinatesDto) {
        return await this.riderCoordinatesModel.create(CreateCoordinateDto);
    }
}
