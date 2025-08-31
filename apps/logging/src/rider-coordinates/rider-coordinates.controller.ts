import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(private riderCoordinatesService: RiderCoordinatesService) {}

    @Get(":id")
    getRiderCoordinates(
        @Param() 
        params: any
    ) {
        return this.riderCoordinatesService.getRiderCoordinates(params.id);
    }

    @Post()
    async saveRiderCoordinates(
        @Body()
        CreateCoordinateDto : CreateCoordinatesDto
    ) {
        return this.riderCoordinatesService.saveRiderCoordinates(CreateCoordinateDto);
    }
}
