import {createContext, useState} from 'react';

export const UserDataContext = createContext();

const UserDataProvider = ({children}) => {
    const [userData, setUserData] = useState();

    return (
        <UserDataContext.Provider value={[userData, setUserData]}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataProvider;
