export class BaseResponseDto<T,K=any>{
    data!: T;
    metaData!: K;
}