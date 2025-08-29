import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(private riderCoordinatesService: RiderCoordinatesService) {}

    @Get()
    getRiderCoordinates() {
        return 'Rider coordinates data';
    }

    @Post()
    async saveRiderCoordinates(
        @Body()
        CreateCoordinateDto : CreateCoordinatesDto
    ) {
        return this.riderCoordinatesService.saveRiderCoordinates(CreateCoordinateDto);
    }
}
