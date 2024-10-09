import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles

import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
export default function Signup() {
    // State variables to capture form input and handle messages
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const navigate = useNavigate();
    // Handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();

        // Prepare the signup data to send to the API
        const signupData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            // Make a POST request to the signup.php API
            const response = await axios.post('http://localhost/my-romify-app/signup.php', signupData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check the response status and show success or error message
            if (response.data.status === 'success') {
                setSuccessMessage(response.data.message);
                setErrorMessage(''); // Clear any error messages
                toast.success('User has been Created Successfully please login now!');
               
            } else {
                setErrorMessage(response.data.message);
                setSuccessMessage(''); // Clear success message if there's an error
                toast.error(response.data.message);
            }
        } catch (error) {
            setErrorMessage('Error: Unable to connect to the server.');
            setSuccessMessage(''); // Clear success message if there's a server error
            toast.error("Error: Unable to connect to the server.");
        }
    };

    return (
        <div className="flex overflow-hidden flex-col pt-9 pb-24 pl-16 bg-white max-md:pl-5">
            <ToastContainer />
            <div className="self-start text-2xl font-medium tracking-wider text-amber-600">
                Romify
            </div>
            <div className="self-end mt-5 w-full max-w-[1278px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col items-center max-w-full w-[435px]">
                                <div className="flex flex-col w-full min-h-[140px]">
                                    <div className="flex-1 text-6xl font-semibold tracking-wide text-black max-md:max-w-full max-md:text-4xl">
                                        Create account
                                    </div>
                                    <div className="flex-1 mt-5 text-lg font-medium tracking-wide text-center text-black text-opacity-70 max-md:max-w-full">
                                        Unleash your device's full potential with
                                        <br />
                                        our premium custom ROMs
                                    </div>
                                </div>
                                <div className="flex gap-2.5 justify-center items-center px-3 py-2.5 mt-5 max-w-full text-base font-medium text-black rounded-3xl border border-black border-solid min-h-[44px] w-[332px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34b8a37a06b2ae0795995b4cc8291f5d3250c383d40f970ed871ca726a43a1af?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[27px]"
                                    />
                                    <div className="self-stretch my-auto">Login with Google</div>
                                </div>
                            </div>
                            <div className="flex gap-3.5 justify-center items-center self-start mt-14 text-2xl font-medium text-black whitespace-nowrap max-md:mt-10">
                                <div className="shrink-0 self-stretch my-auto border-solid border-[3px] border-stone-300 h-[3px] w-[199px]" />
                                <div className="self-stretch my-auto">or</div>
                                <div className="shrink-0 self-stretch my-auto border-solid border-[3px] border-stone-300 h-[3px] w-[199px]" />
                            </div>

                            {/* Signup Form */}
                            <form className="flex flex-col mt-10 w-full max-md:max-w-full" onSubmit={handleSignup}>
                                <div className="mb-6">
                                    <label htmlFor="name"  className="block text-lg text-black mb-1">Name</label>
                                    <input
                                        type="text" required
                                        id="name"
                                        value={username} // Bind the input to state
                                        onChange={(e) => setUsername(e.target.value)} // Update the username state on change
                                        className="flex-1 shrink gap-3 py-3 pr-3 pl-7 max-w-full text-black-100 font-medium tracking-normal rounded-3xl border border-black border-solid min-h-[44px]    text-opacity-30 w-[471px] max-md:pl-5 max-md:max-w-full"
                                        placeholder="Jason Roy"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-lg text-black mb-1">Email</label>
                                    <input
                                        type="email" required
                                        id="email"
                                        value={email} // Bind the input to state
                                        onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                                        className="flex-1 shrink gap-3 py-3 pr-3 pl-7 mt-1 max-w-full text-base font-medium tracking-normal rounded-3xl border border-black border-solid min-h-[44px] text-black-100 text-opacity-30 w-[471px] max-md:pl-5 max-md:max-w-full"
                                        placeholder="example@email.com"
                                    />
                                </div>
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <label htmlFor="passwordInput" className="text-lg text-black">
                                        Password
                                    </label>
                                    <div className="flex relative gap-10 items-center py-3.5 pr-3 pl-7 mt-1.5 max-w-full text-base font-medium tracking-normal rounded-3xl border border-black border-solid min-h-[46px] text-black-100 text-opacity-30 w-[487px] max-md:pl-5">
                                        <input
                                            type="password" required
                                            id="passwordInput"
                                            value={password} // Bind the input to state
                                            onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                                            placeholder="Enter your password"
                                            className="z-0 self-stretch my-auto bg-transparent border-none outline-none w-full"
                                        />
                                         <button
        onClick={togglePasswordVisibility}
        className="z-10 bg-transparent border-none cursor-pointer"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
                                     {showPassword ?  <img 
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffca560a8624e052e36507150239846546664361b763d084b2afdbbe50c583dd?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                            alt=""
                                            className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[1.1] w-[21px]" />
  : <img 
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffca560a8624e052e36507150239846546664361b763d084b2afdbbe50c583dd?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5"
                                            alt=""
                                            className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[1.1] w-[21px]" />
    }</button> </div>
                                </div>
                                <div className="flex gap-3.5 mt-6 text-lg">
                                    <input type="checkbox" id="terms" required className="shrink-0 self-start mt-1.5 w-5 h-5 bg-white border border-solid border-stone-400" />
                                    <label htmlFor="terms" className="flex flex-col grow shrink-0 basis-0 w-fit">
                                        <span className="text-black">
                                            I agree to all <span className="font-medium">terms and conditions</span> of Romify.
                                        </span>
                                    </label>
                                </div>
                                <button type="submit" className="gap-3 self-center px-3 py-2.5 mt-5 max-w-full font-medium whitespace-nowrap bg-sky-600 rounded-3xl border border-black border-solid min-h-[44px] text-zinc-50 w-[332px]">
                                    Signup
                                </button>

                                {/* Display success or error messages */}
                                {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                                {/* {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} */}

                                <p className="self-end mt-2.5 mr-20 text-base text-red-600 max-md:mr-2.5">
                                    <Link to="/login">Already have an account?</Link>
                                </p>
                            </form>

                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col px-16 pt-20 pb-8 w-full rounded-3xl min-h-[846px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd87ab3f279a46922406abbc60b60f9b0d454f2f8d921efc20e4ee162c2b1393?placeholderIfAbsent=true&apiKey=f0392588affe43b6a23cab71c5f124c5&width=200 200w"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative self-center ml-3.5 text-3xl leading-9 text-center text-zinc-50">
                                Join the world of Custom Roms
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
