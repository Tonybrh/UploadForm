import styled from "styled-components";

export const Main = styled.main`
    //width: 100%;
    height: 100vh;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h1`
    color: white;
`
export const FormContainer = styled.div`
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 5px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const InputContainer = styled.div`
    display: flex;
    gap: 30px;
`
export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
`
export const Input = styled.input`
    width: 200px;
`
export const btn= styled.label`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    background-color: #888;
`
export const UploadInput = styled.input`
    display: none;
`
export const Label = styled.label``