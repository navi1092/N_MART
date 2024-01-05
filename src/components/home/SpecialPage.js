
import { useEffect,useRef,useState } from 'react';
function SpecialPage(){
   
        const [timerDays, setTimerDays] = useState('00');
        const [timerHours, setTimerHours] = useState('00');
        const [timerMinutes, setTimerMinutes] = useState('00');
        const [timerSeconds, setTimerSeconds] = useState('00');
    
        let interval = useRef();
    
        const startTimer = ()=> {
            const futureDate =new Date('12 January 2024');
    
            interval = setInterval(()=>{
                const currentDate = new Date().getTime();
                const myDate = futureDate - currentDate;
                
                const days = Math.floor(myDate / 1000 / 60 / 60 / 24);
                const hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
                const min = Math.floor(myDate / 1000 / 60) % 60;
                const sec = Math.floor(myDate / 1000) % 60;
    
                if(myDate < 0){
                    //stop timer
                    clearInterval(interval.current);
    
                }else{
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(min);
                    setTimerSeconds(sec);
                }
    
    
            },1000);
        };
    
        useEffect(()=>{
            startTimer();
            return ()=>{
              clearInterval(interval.current);
            };
        })
    
    
    

    return ( 
        <>
      {/* <!-- Special section --> */}
      <section id="special" className="special">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="headline text-center">
                    <h2 className=" pb-2 position-relative">SUMMER SALE</h2>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7 text-center text-lg-start">
                  <div className="countdown-container">
                    <h2 className="text-uppercase">Top Picks for You</h2>
                    <p className="">Hurry Up....Sale Expires soon</p>
                    <ul className="countdown-counter">
                      <li><span id="days" className="fs-1 d-block">{timerDays}</span>Days</li>
                      <li><span id="hours" className="fs-1 d-block">{timerHours}</span>Hr</li>
                      <li><span id="min"  className="fs-1 d-block">{timerMinutes}</span>Min</li>
                      <li><span id="sec"  className="fs-1 d-block">{timerSeconds}</span>Sec</li>
                    </ul>
                    <span className="countdown-price h3 d-block mb-4">$25,000.00 <del>$28,000.00</del></span>
                  <button type="button" className="btn btn-danger">ADD TO CART</button>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5">
                  <div className="special-img position-relative">
                    <span className="">Sale</span>
                    <img src="images/oppo f21 front.jpg" className="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
       
        </>
    ); 
}
export default SpecialPage;