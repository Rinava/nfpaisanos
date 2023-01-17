const baseApiUrl = process.env.BASE_API_URL;
const apiKey = process.env.API_KEY; 

const config = {
    headers: {
        'apiKey': apiKey || ''
    }
}


export const getCurrentETHPrice = async () => {
    const response = await fetch(`${baseApiUrl}/nfpaisanos/eth-price`, config);
    const data = await response.json();
    return data;
}

export const getPopularAuctions = async () => {
    const response = await fetch(`${baseApiUrl}/nfpaisanos/popular`, config);
    const data = await response.json();
    return data;
}

export const getAuctions = async () => {
    const response = await fetch(`${baseApiUrl}/nfpaisanos/aunctions`, config);
    const data = await response.json();
    return data;
}