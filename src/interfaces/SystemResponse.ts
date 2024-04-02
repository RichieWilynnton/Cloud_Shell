import { ErrorType } from "@/enums/ErrorType";

// Response object for all system commands, used in FileSystemTree
export interface SystemResponse<T> {
    success: boolean;
    data: T;
    error?: ErrorType;
}