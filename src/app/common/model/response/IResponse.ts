export interface IResponse<T> {
    status: {
        timestamp: Date,
        code: number,
        message: string,
        apiSubErrors: ApiSubError[]
    },
    data: T
}

interface ApiSubError {}