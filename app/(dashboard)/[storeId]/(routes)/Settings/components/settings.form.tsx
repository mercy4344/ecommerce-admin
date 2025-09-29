"use client";
import * as z from "zod";
import { Store } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form,  FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/heading";

interface SettingsFormProps {
    initialData: Store
}

const formSchema = z.object({
    name: z.string().min(1,),
});

type SettingsFormValues= z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({
    initialData
}) => {
    const [open,setOpen] = useState(false);
    const [loading,setLoading] = useState(false);


      const form = useForm<SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData

      });

    const onSubmit=async(data:SettingsFormValues)=>{
        console.log(data);
    };


    return (
        <>
        <div className="flex-col">
            <div className="flex items-center justify-between">
                <Heading
                    title="Settings"
                    description="Manage Store Preferences" 
                />
     <Button 
    size="icon"  
    onClick={() => {}}
    className="bg-red-500 hover:bg-red-600 border-red-500 "
>
    <Trash className="h-4 w-4 text-white"/>
</Button>
            </div>
        </div>
        <Separator  />
         <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)}  className="space-y-8 w-full">
                <div className="grid grid-cols-3 gap-8">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input disabled={loading} placeholder="store name" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    ) }
                    />
                </div>

<Button disabled={loading} className="ml-auto bg-black text-white hover:bg-gray-800 mt-0.1" type="submit" >
    save changes
</Button>
            </form>
         </Form>
        </>
    );
};