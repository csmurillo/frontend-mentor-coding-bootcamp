import Image from "next/image";
import { FC, useEffect,useState } from "react";
import styles from './style.module.css';

interface UserImageProps{
    userImage:string,
    changeCurrentUser:Function,
    currentBootCampUserSwitch:boolean
}

const UserImage: FC<UserImageProps>= ({userImage,changeCurrentUser,currentBootCampUserSwitch}) => {
    return (
        <div className="flex items-center md:w-1/2 py-4">
            <div className="relative flex justify-center items-center w-full h-[24rem] bg-center bg-no-repeat bg-hero-pattern bg-contain
                md:w-[36rem] md:h-[30rem] md:items-center">
                <div className={'relative w-9/12 h-80 shadow-2xl shadow-grayBlue ' }>
                        <Image className="rounded-lg" src={userImage?userImage+'':'/'} alt="User Image" layout="fill"/>
                </div>
                {/* toggle user */}
                <div className="bg-white rounded-3xl flex w-28 py-4 absolute bottom-5 md:left-0 md:bottom-0">
                    <div className="w-1/2 flex justify-center">
                        <button className="relative w-5 h-5" onClick={()=>{changeCurrentUser('l');}} disabled={currentBootCampUserSwitch}>
                            <Image src="/images/icon-prev.svg" layout="fill"/>
                        </button>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <button className="relative w-5 h-5" onClick={()=>{changeCurrentUser('r')}} disabled={currentBootCampUserSwitch}>
                            <Image src="/images/icon-next.svg" layout="fill"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserImage;