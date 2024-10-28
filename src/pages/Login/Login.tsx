import { Avatar } from "../../components/Avatar";

const Login = () => {
    console.log("login page");
    
    return (
        <div className="relative w-screen h-screen">
            <img className="object-cover w-full h-screen" src="../../../src/assets/Background_LogSign.png"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 w-1/3 h-3/4 flex flex-col items-center">
                <div className="flex flex-col items-center mt-10">
                    <Avatar size="w-12 h-12 "/>
                    <h1 className="text-3xl mt-3">Log In</h1>
                    <span className="text-lg">
                        Don't have an account?
                        <a className="underline" href="">Sign Up</a>
                    </span>
                </div>

                <button className="bg-white w-5/6 rounded-full h-16 mt-10">
                    <span className="flex justify-center w-full">
                        <img className="mr-3" src="../../../src/assets/SocialMedia/Google.png"/>
                        Log in with Google
                    </span>
                </button>

                <h1>Or</h1>

                <div className="w-5/6">
                    <div className="">
                        <h1>Your email:</h1>
                        <input className="w-full h-full" type="email" name="" id="" />
                    </div>
                    
                    <div>
                        <h1>Your password:</h1>
                        <input type="password" name="" id="" />
                        <a className="block" href="http://">Forget your password</a>
                    </div>
                </div>

                <button>Log In</button>
                <img className="absolute top-2 right-2 w-8 h-8" src="../../../src/assets/XIcon.png"/>
            </div>
        </div>
    )
}

export default Login