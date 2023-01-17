import {getCurrentETHPrice} from '../../lib/api'

export default async function handler(req: any, res: any) {
    const currencies = await getCurrentETHPrice()
    res.status(200).json({eth: currencies.usd.replace(',', '')})
}

