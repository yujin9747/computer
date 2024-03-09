import { PowerService } from '../power/power.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private poserService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of Power from power service.');
    this.poserService.supplyPower(10);
    return a + b;
  }
}
