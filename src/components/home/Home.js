
import ContactPage from "./ContactPage";
import HomePge from "./Homepge";
import NavigationPage from "./NavigationPage";
import ProductPage from "./ProductPage";
import SpecialPage from "./SpecialPage";



function Home(){

    return ( 
        <>
      <NavigationPage/>
      <HomePge/>
      <ProductPage/>
      <SpecialPage/>
      <ContactPage/>
 
        </>
    ); 
}
export default Home;