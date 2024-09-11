export class BadRequestException extends Error {
    public statusCode: number;
    
    constructor(message: string | null) {
        super();
        this.message = message ? message : 'BadRequestException';
        this.statusCode = 400;
    }
}