import * as React from 'react';

import {auth, createUserProfileDocument} from '../utilities/firebase';


// type CurrentUserType = {
//     uid: string;
//     email: string;
//     displayName: string;
//     photoURL: string;
//     emailVerified:boolean;
// }

type CurrentUserType = {
    [key: string]:string;   
}

export const useCurrentUser = ()=>{
    const [currentUser, setCurrentUser]= React.useState<CurrentUserType | null>(null);

    React.useEffect(()=>{
        let unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            console.log('userAuth', userAuth);
            
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef?.onSnapshot((snapshot)=>{
                    const currentUser = {uid: snapshot.id, ...snapshot.data()}
                    setCurrentUser(currentUser)
                })
                
            } else {
                setCurrentUser(null)
            }
        })

        return ()=> unsubscribe()
    },[])

    return {currentUser, setCurrentUser}
}