import React, { useEffect, useState } from 'react'

function Form() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmailRegistered, setIsEmailRegistered] = useState(false);
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^\S+@\S+\.\S+$/;
    //   const isEmailValid = emailRegex.test(email);

    useEffect(() => {
        // var isEmailValid = false;
        // const domains = ["@yahoo.com" , "@gmail.com"];
        // for (const dom of domains){
        //     if (email.endsWith(dom)){
        //         setIsEmail(true);
        //     }
        // }
        setIsEmail(emailRegex.test(email));
    }, [email]);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(false);
        setIsEmailRegistered(false);
        setEmailError('');
    };

    const handleNotifyClick = () => {
        var isEmailValid = false;
        const domains = ["@yahoo.com", "@gmail.com"];
        for (const dom of domains) {
            if (email.endsWith(dom)) {
                isEmailValid = true;
                break;
            }
        }
        if (isEmail && isEmailValid) {
            setIsLoading(true);
            // Simulating an API call
            setTimeout(() => {
                setIsLoading(false);
                setIsValidEmail(true);
                // Check if email is already registered
                const isAlreadyRegistered = false;
                if (isAlreadyRegistered) {
                    setIsEmailRegistered(true);
                    setEmail("");
                    setEmailError('Your email is already in our notify list. Try with another email.');
                }
            }, 2000);
        } else {
            setEmail("");
            setEmailError('Invalid email');
        }
    };
    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-center sm:gap-4 sm:items-start items-center mt-4">
                <div className="mb-4 sm:mb-0 flex flex-col justify-start'">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Please enter your email id"
                        className="px-5 py-4 w-80 sm:w-[600px] sm:h-14 border border-solid border-stone-300 text-white font-medium font-poppins bg-transparent rounded-lg"
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                {isValidEmail && !isEmailRegistered ? (
                    <button
                        type="button"
                        className="bg-white text-[#0F0F0F] sm:max-w-max sm:py-3 py-2 px-5 w-full rounded-lg flex items-center justify-center"
                        disabled
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleNotifyClick}
                        className={`rounded-lg ${isLoading
                                ? "bg-gray-500 text-white cursor-not-allowed"
                                : `${!isValidEmail &&
                                "disabled:cursor-not-allowed disabled:text-gray-400  bg-white text-[#0F0F0F] sm:max-w-max font-poppins text-3xl  leading-8 font-medium px-5 py-3 w-full"}`
                            }`}
                        disabled={isLoading || !isEmail}
                    >
                        {isLoading ? 'Loading...' : 'Notify me'}
                    </button>
                )}
            </div>
        </div>

    );
};

export default Form