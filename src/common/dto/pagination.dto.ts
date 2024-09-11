import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
    @Transform(({ value}) => parseInt(value, 10))
    @IsInt()
    @IsOptional()
    @IsPositive()
    perPage?: number;

    @Transform(({ value}) => parseInt(value, 10))
    @IsInt()
    @IsOptional()
    @IsPositive()
    page?: number;
}