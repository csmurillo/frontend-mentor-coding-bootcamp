import { FC } from "react";

import styles from './styles.module.css';

interface UserTestimonialProps {
    userName?:string,
    userProfession?:string,
    testimonial?:string,
}

const UserTestimonial: FC<UserTestimonialProps> =({userName="Somebody",userProfession="FrontEnd",testimonial="I like working!!!"}) => {
    return (
        <div className="flex flex-grow md:w-1/2">
            <div className={"px-10 md:p-0 flex justify-end md:w-full relative bg-curve-pattern bg-contain bg-bottom	bg-no-repeat"}>
                <div className={"flex flex-col pt-10 px-6 md:px-0 md:pt-14 md:absolute md:top-[35%] md:-right-44 bg-quotes-pattern bg-no-repeat "+styles.quoteBackgroundImg}>
                    <p className="text-center font-inter text-xl font-light text-darkBlue md:text-left md:w-[38rem] md:text-2xl">{testimonial}</p>
                    <div className="md:flex md:gap-2">
                        <h2 className="mt-5 text-center font-bold md:text-left">{userName}</h2>
                        <h3 className="text-center text-grayBlue font-medium md:text-left md:flex md:items-end">{userProfession}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTestimonial;


