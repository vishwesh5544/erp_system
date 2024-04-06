export default interface ServiceResult<T = any> {
    success: boolean;
    data?: T;
    error?: Error;
}
