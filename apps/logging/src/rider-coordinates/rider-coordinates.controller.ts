import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        return 'Rider coordinates data';
    }

    @Post()
    saveRiderCoordinates(
        @Body()
        CreateCoordinateDto : CreateCoordinatesDto
    ) {
        return CreateCoordinateDto;
    }
}
