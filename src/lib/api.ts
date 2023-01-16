const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY; 

const config = {
    headers: {
        'apiKey': apiKey || ''
    }
}


export const getCurrentETHPrice = async () => {
    const response = await fetch(`${baseUrl}/nfpaisanos/eth-price`, config);
    const data = await response.json();
    return data;
}

export const getPopularAuctions = async () => {
    const response = await fetch(`${baseUrl}/nfpaisanos/popular`, config);
    const data = await response.json();
    return data;
}