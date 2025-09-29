import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";


 import StoreSwitcher from "@/components/store-switcher";
 

const Navbar = () => {

    return ( 
        <div className="border-b border-black/5">
            <div className="flex h-16 item-center px-4">

                
                <StoreSwitcher items={[]} />
                    
                    
                    
                
                <MainNav  className="mx-6"/>
                
                
                

                <div className="ml-auto flex item-center space-x-4">
                 <UserButton afterSignOutUrl="/" />
                </div>

            </div>
        </div>
    );
}
    export default Navbar;