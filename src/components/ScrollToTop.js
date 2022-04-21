import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

export default function ScrollToTop() {
    const{pathname}=useLocation();
   
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

  return null;
}
