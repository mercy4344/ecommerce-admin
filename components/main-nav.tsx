"use client";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

import { useParams, usePathname } from "next/navigation";
import  Link from "next/link";
import { use } from "react";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathName = usePathname();
    const params = useParams();

    const routes = [
        {

            href:'/${params.storeId}/settings',
            Label: 'Settings',
            active: pathName === '/${params.storeId}/settings',
        }
    ];

    return (

        <nav className={cn("flex items-center space-x-4 lg:space-x-6, className")}>
            {routes.map((routes) => (

           <Link
            key={routes.href}
            href={routes.href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                routes.active ? "text-black dark:text-white" : "text-muted-foreground"
            )}
            >

                {routes.Label}
           </Link>
            ))}

        </nav>
    )
};
