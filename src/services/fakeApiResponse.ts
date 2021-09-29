import { FakeAPIReponse } from 'types';
import Monitor from '../assets/images/monitor.png'

export const response: FakeAPIReponse = {
  data: {
    products: [
      {
        productTitle: "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
        productImageUrl: Monitor,
        productOnSalePriceCents: 259900,
        productOldPriceCents: 281399,
        availableInstallmentsWithoutInterest: 10,
        installmentsWithoutInterestPriceCents: 25990
      },
      {
        productTitle: "Monitor LED 27'' Gamer Curvo Samsung 2560 x 1440 QHD 260 Hz HDMI, DP, Gsync Série CRG50",
        productImageUrl: Monitor,
        productOnSalePriceCents: 239900,
        productOldPriceCents: 300000,
        availableInstallmentsWithoutInterest: 12,
        installmentsWithoutInterestPriceCents: 19991
      },
      {
        productTitle: "Monitor LED 27'' Gamer Curvo Samsung 2560 x 1440 QHD 260 Hz HDMI, DP, Gsync Série CRG50",
        productImageUrl: Monitor,
        productOnSalePriceCents: 239900,
        productOldPriceCents: 300000,
        availableInstallmentsWithoutInterest: 12,
        installmentsWithoutInterestPriceCents: 19991
      }
    ]
  }
}