"use client";
import { useEffect } from "react"

import { useStoreModal } from "@/hooks/use-store-modal";

import Modal from "@/components/ui/modal";

const SetupPage = () => {
  // Fix: Use useStoreModalStore (matching your import) instead of useStoreModal
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
     onOpen(); 
    }
  },[isOpen, onOpen]);
  
  return null; 
    
    

}

export default SetupPage;
// // app/page.tsx
// 'use client'
// import { UserButton, useUser } from '@clerk/nextjs'
// import Link from 'next/link'

// export default function HomePage() {
//   const { isSignedIn, isLoaded } = useUser()

//   if (!isLoaded) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 relative">
//       {/* UserButton positioned at top right */}
//       <div className="absolute top-4 right-4 z-10">
//         <UserButton afterSignOutUrl='/' />
//       </div>
      
//       {/* Main content centered */}
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-4xl font-bold mb-8">Ecommerce Admin Dashboard</h1>
//         <p className="text-gray-600 mb-8">Manage your ecommerce store with ease</p>
        
//         {!isSignedIn && (
//           <div className="space-x-4 mb-8">
//             <Link 
//               href="/sign-in" 
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Sign In
//             </Link>
//             <Link 
//               href="/sign-up" 
//               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//             >
//               Sign Up
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }