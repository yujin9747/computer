import { PowerService } from '../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from power service.');
    this.powerService.supplyPower(20);

    return 'data!';
  }
}
