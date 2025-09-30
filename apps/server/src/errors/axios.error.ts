import { AxiosError } from "axios";
import { BadRequestError, InternalServerError } from ".";

export const handleAxiosError = (error: unknown, defaultMessage: string = 'Erro interno'): BadRequestError | InternalServerError => {
    if (error instanceof AxiosError) {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || defaultMessage;
            
            if (status === 400) {
                return new BadRequestError(message);
            } else if (status >= 500) {
                return new InternalServerError('Erro interno no serviço');
            } else {
                return new InternalServerError(message);
            }
        } else if (error.request) {
            return new InternalServerError('Não foi possível conectar ao serviço');
        } else {
            return new InternalServerError('Erro desconhecido na requisição');
        }
    } else {
        return new InternalServerError('Erro inesperado');
    }
};