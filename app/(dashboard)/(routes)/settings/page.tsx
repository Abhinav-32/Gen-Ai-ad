import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const SettingsPage= async()=>{
    const isPro = await checkSubscription();
    return(
        <div>
            <Heading
                tittle="Settings"
                description="Mange account settings."
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10" 
                icon={Settings}           
                 />
                 <div className="px- lg:px-8 space-y-4">
                    <div className="text-muted-foreground text-sm">
                  {isPro? "You are currently on a pro Plan.":"You are currently on a free Plan."}
                    </div>
                    <SubscriptionButton isPro={isPro}/>
                 </div>
        </div>
    );
}
export default SettingsPage;
