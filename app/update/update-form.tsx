'use client'

import { updateUser } from "#/actions/users";
import { useFormState } from "react-dom";

function AlterButton() {
    return (
        <button type="submit" >
            Alterar informações
        </button>
    );
}

export async function AlterForm() {

    const errorsState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(updateUser, errorsState)

    return (
        <div className="text-[rgb(1,14,33)]   flex justify-center">

            <div className="text-[#E7C7A1]  textarea-sm pl-12 pr-12 border-r  text-center flex-row my-auto">
            <a href="/profile"><p className="pb-7 hover:text-[#ebd5bc]" >Dados da Conta</p></a>
            <a href="/update"><p className="pb-7 hover:text-[#ebd5bc]">Alterar Perfil</p></a>
        
            </div>
            <form action={dispatch} className="text-[#010E21] ml-24 w-96">
                {/*Nome*/}
                <div className="grid gap-1 mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input
                            type="text"
                            name="name"
                            placeholder="Novo nome"
                            className="grow"
                        />
                    </label>
                    {state.errors?.name && state.errors.name.map(error => (
                        <p key={error} className="text-sm text-red-500">{error}</p>)
                    )}
                </div>

                {/*Email*/}
                <div className="grid gap-1 mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input
                            type="text"
                            name="email"
                            placeholder="Novo email"
                            className="grow"
                        />
                    </label>
                    {state.errors?.email && state.errors.email.map(error => (
                        <p key={error} className="text-sm text-red-500">{error}</p>)
                    )}
                </div>

                {/*Senha*/}
                <div className="grid gap-1 mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nova senha"
                            className="grow"
                        />
                    </label>
                    {state.errors?.password && state.errors.password.map(error => (
                        <p key={error} className="text-sm text-red-500">{error}</p>)
                    )}
                </div>

                {/*Confirmar Senha*/}
                <div className="grid gap-1 mb-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirmar senha"
                            className="grow"
                        />
                    </label>
                    {state.errors?.password2 && state.errors.password2.map(error => (
                        <p key={error} className="text-sm text-red-500">{error}</p>)
                    )}
                </div>

                {/*Telefone*/}
                <div className="grid gap-1 mb-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Novo telefone"
                            className="grow"
                        />
                    </label>
                    {state.errors?.phone && state.errors.phone.map(error => (
                        <p key={error} className="text-sm text-red-500">{error}</p>)
                    )}
                </div>
                <button className=" p-4 border w-96 border-[#E7C7A1] text-[#E7C7A1]  hover:bg-[#E7C7A1] transition-colors hover:text-[#010E21]">
                    Confirmar
                </button>
            </form>
            
        </div>

    );
}