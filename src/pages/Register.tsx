import { useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signUp({
            email,
            password
        });

        if (error) alert(error.message);
        else alert("Barvo!Check your email to verify your account");
    }

    return (
        <>
            <div className="container w-full mx-auto flex justify-center">
                <div className="w-[400px] flex flex-col gap-5 justify-between p-7 border border-zinc-800 rounded bg-zinc-950">
                    <h2 className="text-white text-xl font-semibold capitalize">hey there! <span className="block">lets register here</span></h2>
                    <hr />
                        <form onSubmit={handleRegister} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-base font-medium leading-relaxed">your name :</label>
                                <input type="text" placeholder="jhon doe" className="border border-zinc-800 py-2 px-3 w-full"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-base font-medium leading-relaxed">your email :</label>
                                <input 
                                    type="email" 
                                    placeholder="example@mail.com" 
                                    className="border border-zinc-800 py-2 px-3 w-full"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-base font-medium leading-relaxed">password :</label>
                                <input 
                                    type="password" 
                                    placeholder="*****" 
                                    className="border border-zinc-800 py-2 px-3 w-full"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="w-full bg-white text-zinc-950 text-base font-medium leading-relaxed py-2">submit</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        </>
    )
}