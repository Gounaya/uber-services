import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Get(':id')
  getRiderById(@Param('id') id: string) {
    return this.riderService.getRiderById(id);
  }
}
