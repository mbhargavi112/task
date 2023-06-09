import { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export const Toast = (type,msg) =>{

    if (type) {

        toast.success(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    } else {
        toast.error(msg, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}
