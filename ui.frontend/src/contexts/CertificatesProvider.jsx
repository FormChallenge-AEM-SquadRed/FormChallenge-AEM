import {createContext, useState} from "react";

export const CertificatesContext = createContext();

const CertificatesProvider = ({children}) => {
    const [certificates, setCertificates] = useState([]);

    return (
        <CertificatesContext.Provider value={[certificates, setCertificates]}>
            {children}
        </CertificatesContext.Provider>
    );
};

export default CertificatesProvider;
