import { useState } from "react";
import * as H from "./style"
import { useForm, SubmitHandler } from "react-hook-form";
import { sendForm } from "src/service/sendService";
interface FormProps {
    name: string;
    email: string;
    upload: File;
}
export default function Home () {
    const [statusSend, setStatusSend] = useState('Enviar');
    const [loading, setLoading] = useState(false);
    const [uploadValue, setUploadValue] = useState('');
    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<FormProps>();
    const onsubmit: SubmitHandler<FormProps > = data => {
        //console.log(data);
        sendForm(data, setLoading, setStatusSend )
        reset()
        setUploadValue('');
        setStatusSend('Enviando');
}
const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadValue(e.target.value);
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        setValue('upload', file);        
    }
};
    return(
        <H.Main>
            <H.Title>Login</H.Title>
            <H.FormContainer>
                <H.Form onSubmit={handleSubmit(onsubmit)}>
                    <H.InputContainer>
                        <H.Label>Nome</H.Label>
                        <H.Input type="text" {...register("name")}/>
                    </H.InputContainer>
                    <H.InputContainer>
                        <H.Label>Email</H.Label>
                        <H.Input type="text" {...register("email")}/>
                    </H.InputContainer>
                    <H.InputContainer>
                        <H.Label>Escolha um arquivo</H.Label>
                        <H.UploadContainer>
                            <H.btn> <H.UploadInput type="file" {...register('upload')} onChange={handleUploadClick}/> Upload</H.btn>
                        {uploadValue}
                        </H.UploadContainer>
                    </H.InputContainer>
                    <H.Input type="submit" value={statusSend}/>
                </H.Form>
            </H.FormContainer>
        </H.Main>
    )
}
