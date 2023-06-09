import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MinuteCandleService } from './minuteCandle.service'
import {
  MinuteCandle,
  MinuteCandleSchema,
} from '@lib/schemas/minuteCandle.schema'
import { TradeRank, TradeRankSchema } from '@lib/schemas/tradeRank.schema'
import { Upbit } from '@lib/utils/upbit'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MinuteCandle.name, schema: MinuteCandleSchema },
      { name: TradeRank.name, schema: TradeRankSchema },
    ]),
  ],
  providers: [MinuteCandleService, Upbit],
  exports: [MinuteCandleService, MongooseModule],
})
export class MinuteCandleModule {}
