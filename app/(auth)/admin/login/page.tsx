"use client";
import Image from "next/image"
import Button from "@/app/(landing)/components/ui/button";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { push }  = useRouter();
    return (
        <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-18">
                <div className="py-8 px-14 border-b border-gray-200">
                    <Image src="/images/logo-admin.svg" alt="logo admin"
                        width={314} height={51}
                        className="mx-auto mb-4" />

                    <p className="opacity-50 text-xs text-center mb-6">
                        Enter your credentials to access the dashboard
                    </p>

                    <div className="input-group-admin mb-5">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="Please type your email"
                            className="rounded-lg!" />

                    </div>
                    <div className="input-group-admin mb-5">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Please enter your password"
                            className="rounded-lg!" />
                    </div>
                </div>
                <Button className="w-full rounded-lg! mb-8" onClick={() => push("/admin/products")}> 
                    Sign In</Button>
            </div>
        </main>
    );
};

export default LoginPage;