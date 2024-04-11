import { Inter } from "next/font/google";
import { BannerView, KFTView, KindView, NasView, ReferenceView, RehauView } from "@/views/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <BannerView />
      <NasView />
      <KFTView />
      <KindView />
      <RehauView />
      <ReferenceView />
    </>
  );
}
