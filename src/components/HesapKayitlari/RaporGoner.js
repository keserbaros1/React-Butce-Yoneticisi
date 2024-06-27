import React from "react"; 
import { message , Button} from 'antd';

function mailGonder(kayitlar) {
    
    const Ilet = () => {
        message.success('Mail başarıyla gönderildi!');
    };
        
    return(
            <Button onClick={Ilet}>Rapor Al</Button>
    );
}
    
    
export default mailGonder;