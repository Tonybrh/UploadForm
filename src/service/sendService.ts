import { SetStateAction } from 'react';
export const sendForm = async (
    data: {
        name: string;
        email: string;
        upload: File;
    },
    setLoading: {
        (value: SetStateAction<boolean>): void;
        (arg0: boolean): void;
    },

    setStatusSend: {
        (value: SetStateAction<string>): void;
        (arg0: string): void;
    }
) => {
    try {
        setTimeout(async () => {
           const formData = new FormData();
           formData.append('name', data.name);
           formData.append('email', data.email);
           formData.append('upload', data.upload);
           const response = await fetch('/api/send', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });
            if (response.ok) {
                setStatusSend('Enviado');            
            } else {
                setStatusSend('Não enviado');
            }
            setTimeout(() => {
                setStatusSend('Enviar');
            }, 5000);
        }, 3000);
    } catch (e) {
        console.log(e);
    }
    setLoading(false);
};