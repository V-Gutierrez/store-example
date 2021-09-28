export interface Product {
  productTitle: string
  productImageUrl: string
  productOnSalePriceCents: number
  productOldPriceCents: number
  availableInstallmentsWithoutInterest: number
  installmentsWithoutInterestPriceCents: number
}

export interface Data {
  products: Product[],
}

export interface FakeAPIReponse {
  data: Data
}