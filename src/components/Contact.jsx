import React, {useState} from 'react';
import backgroundImage from "../assets/Background-2.svg";

function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({
            ...checkedItems,
            [name]: checked,
        });
    };

    return (
        <section id={'contact'} className={'relative w-screen h-screen px-[5%] flex flex-col gap-8 lg:gap-12 justify-center items-center'}>
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className={'rotate-180 z-0 absolute top-0 left-0 right-0 border-0 w-full h-full'}
            ></div>
            <h1 className={'relative z-10 text-white font-semibold text-4xl md:text-6xl leading-tight text-center'}>
                <span className={'text-mainGreen font-bold'}>Tell</span> Us <br/>
                What You <span className={'text-mainGreen font-bold'}>Need</span>
            </h1>
            <form className={'relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-center gap-8'}>
                <input
                    placeholder="We can reach you at..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-transparent border-b-2 focus:border-mainGreen outline-none text-xl font-semibold placeholder-white/50 focus:placeholder-white focus:ring-0 transition-all duration-300 ${
                        email ? 'border-mainGreen placeholder-mainGreen' : 'border-mainGreen/50'
                    }`}
                />
                <input
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full bg-transparent border-b-2 focus:border-mainGreen outline-none text-xl font-semibold placeholder-white/50 focus:placeholder-white focus:ring-0 transition-all duration-300 ${
                        message ? 'border-mainGreen placeholder-mainGreen' : 'border-mainGreen/50'
                    }`}
                />
                <div className="mt-4 flex flex-row flex-wrap items-center justify-center h-auto gap-2 md:gap-4">
                    {['Website From Scratch', 'Update Existing Website', 'Marketing Solution', 'SEO Tuned', 'Social Presence', 'More Clicks', 'Quality Content'].map((option, index) => (
                        <label
                            key={index}
                            className={`flex items-center px-2 md:px-4 py-2 border rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-mainGreen  ${
                                checkedItems[option] ? 'bg-mainGreen border-mainGreen text-defaultDark' : 'bg-transparent text-white border-white/50'
                            }`}
                        >
                            <input
                                type="checkbox"
                                name={option}
                                checked={checkedItems[option] || false}
                                onChange={handleCheckboxChange}
                                className="appearance-none"
                            />
                            <span className={`transition-all text-[12px] md:text-base font-semibold duration-300 ${
                                checkedItems[option] ? 'text-defaultDark' : 'text-white'
                            }`}>{option}</span>
                        </label>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center h-auto gap-4">
                    <p className={'text-white font-semibold text-xl leading-tight text-center'}>
                        <span className={'text-mainGreen font-bold'}>Or </span>
                        select nothing <br/>
                        and lets have a <span className={'text-mainGreen font-bold'}>fresh start!</span>
                    </p>
                    <button
                        type="submit"
                        className="group bg-mainGreen hover:bg-green-600 px-8 py-3 rounded-[32px] flex flex-row justify-center items-center hover:scale-105 transition-all duration-300 outline-none focus:ring-0 focus:outline-none border-none"
                    >
                        <p className="text-defaultDark font-bold text-base leading-none">Submit</p>
                    </button>

                </div>
            </form>
        </section>
    )
        ;
}

export default Contact;