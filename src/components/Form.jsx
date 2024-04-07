import React, { useEffect, useState } from 'react'

function Form() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmailRegistered, setIsEmailRegistered] = useState(false);
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^\S+@\S+\.\S+$/;

    useEffect(() => {

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
            {
                isValidEmail && !isEmailRegistered ? (
                    <p className='text-center font-poppins mt-2 text-sm text-content1'>
                        You're all set! You'll be the first to know when we're live.
                    </p>
                )
                :
                (
                    <p className='text-center font-poppins mt-2 text-sm text-content1'>
                    Be the first to know! Share your email and We'll notify you when it's live
                    </p>
                )
            }
            <div className="flex flex-col sm:flex-row justify-center sm:gap-4 sm:items-start items-center mt-4">
                <div className="mb-4 sm:mb-0 flex flex-col justify-start'">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Please enter your email id"
                        className="px-5 py-4 w-80 sm:w-[600px] sm:h-14 border border-solid border-content2 text-content1 font-medium font-poppins bg-transparent rounded-lg outline-none focus:outline-none"
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                {isValidEmail && !isEmailRegistered ? (
                    <button
                        type="button"
                        className="bg-content1 text-background sm:max-w-max sm:py-3 py-2 px-5 w-full rounded-lg flex items-center justify-center"
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
                                ? "bg-content1 text-background cursor-not-allowed"
                                : `${!isValidEmail &&
                                "disabled:cursor-not-allowed disabled:text-gray-400 bg-content1 text-background sm:max-w-max font-poppins text-3xl  leading-8 font-medium px-5 py-3 w-full"}`
                            }`}
                        disabled={isLoading || !isEmail}
                    >
                        {isLoading ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="block bg-transparent stroke-background" width="50" height="50" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="50" cy="50" fill="none" stroke-width="7" r="30" stroke-dasharray="164.93361431346415 56.97787143782138">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
</circle><g></g></g></svg> : 'Notify me'}
                    </button>
                )}
            </div>
        </div>

    );
};

export default Form