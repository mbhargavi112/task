import { ThreeDots  } from 'react-loader-spinner'

export const progres = ()=>{
    return(
        <ThreeDots 
    height="40" 
    width="40" 
    radius="9"
    color="#FFF" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
    )
}