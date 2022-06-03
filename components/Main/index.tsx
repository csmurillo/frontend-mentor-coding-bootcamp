import { FC, useState,useEffect } from "react";
import UserImage from "./UserImage";
import UserTestimonial from "./UserTestimonial";
import UserData from './user.json';

const Main: FC = ()=>{

    const [listOfBootCampUsers,setListOfBootCampUsers]=useState(UserData);
    const [currentBootCampUserSwitch,setCurrentBootCampUserSwitch]=useState(false);
    const [currentBootCampUserIndex,setCurrentBootCampUserIndex]=useState(0);
    const [currentBootCampUser,setCurrentBootCampUser]=useState({
            userName:"",
            userProfession:"",
            userImage:"",
            testimonial:"",
    });
    const {userName,userProfession,userImage,testimonial}=currentBootCampUser;

    useEffect(()=>{
        // console.log(currentBootCampUserIndex);
        let currentUser=listOfBootCampUsers[currentBootCampUserIndex];
        // console.log(currentUser);
        let newCurrentBootCampUser={...currentBootCampUser};
        newCurrentBootCampUser.userName=currentUser.userName;
        newCurrentBootCampUser.userProfession=currentUser.userProfession;
        newCurrentBootCampUser.userImage=currentUser.userImage;
        newCurrentBootCampUser.testimonial=currentUser.userTestimonial;
        setCurrentBootCampUser(newCurrentBootCampUser);
        setCurrentBootCampUserSwitch(true);
        setTimeout(()=>{
            setCurrentBootCampUserSwitch(false);
        },200);
        return ()=>{};
    },[currentBootCampUserIndex]);

    const changeCurrentUser = (changeDirection:string)=>{
        // right change
        if(changeDirection=='r'){
            const nextCurrentBootCampUserIndex=currentBootCampUserIndex+1;
            if(nextCurrentBootCampUserIndex>listOfBootCampUsers.length-1){
                setCurrentBootCampUserIndex(0);
            }
            else{
                setCurrentBootCampUserIndex(currentBootCampUserIndex=>currentBootCampUserIndex+1);
            }
        }
        // left change
        else if(changeDirection=='l'){
            console.log('button left clicked');
            const nextCurrentBootCampUserIndex=currentBootCampUserIndex-1;
            if(nextCurrentBootCampUserIndex<0){
                setCurrentBootCampUserIndex(listOfBootCampUsers.length-1);
            }
            else{
                setCurrentBootCampUserIndex(currentBootCampUserIndex=>currentBootCampUserIndex-1);
            }
        }
    }

    return (
        <main className="flex flex-col h-full md:flex-row-reverse">
            <UserImage userImage={userImage} changeCurrentUser={changeCurrentUser} currentBootCampUserSwitch={currentBootCampUserSwitch}/>
            <UserTestimonial userName={userName} userProfession={userProfession} testimonial={testimonial}/>
        </main>
    );
};

export default Main;


