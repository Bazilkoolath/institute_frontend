export interface Iisv {
    brand_name: string,    
    rating: number,
    img: string,
    description: string,
    id: number
    org_id: number,
}

export interface Isi {
    org_id: number,
    rating: number,
    img: string,
    brand_name: string,
    description: string,
    id: number
}

export interface Iservice {
    name: string,   
    description: string,
    img: string,
    id: number
    created_date: Date,
    product_id: number
}

export interface Iproduct {
    name: string,   
    description: string,
    img: string,
    id: number
    org_id: number,
    created_date: Date,
    isv_id: number
}