import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
// import LazyVoxelDog from "@/components/Voxel_dog"
import VoxelDogLoader from "@/components/Voxeldogloader"
const inter = Inter({ subsets: ["latin"] });

const LazyVoxelDog = dynamic(() => import("@/components/Voxeldog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});




const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-[#202023] pt-24 pb-4 w-full flex justify-center min-h-[calc(100vh-48px)]">
          <div className="w-full md:w-[600px] p-4">
            {/* <Suspense fallback={<VoxelDogLoader />}>
            <LazyVoxelDog />
            </Suspense> */}
            <LazyVoxelDog />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
