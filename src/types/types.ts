type levelType = 'easy' | 'moderate' | 'difficult'

export interface ITrip {
    id: string,
    title: string,
    description: string,
    level: levelType,
    duration: number,
    price: number,
    image: string,
    createdAt: string
}

export interface IBookedTrip {
    id: string,
    userId: string,
    tripId: string,
    guests: number,
    date: string,
    trip: {
        title: string,
        duration: number,
        price: number
    },
    totalPrice: number,
    createdAt: string
}

export interface IError {
    error: string
    statusCode: number,
    message: string
}