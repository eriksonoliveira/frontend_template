import { Header } from "@/components/home/Header";
import { Feed } from "@/components/home/Feed";
import { NewPostArea } from "@/components/posts/NewPostArea";
const Page = () => {
  return (
    <>
      <Header />
      <NewPostArea /> 
      <Feed /> 
    </>
  );
};

export default Page;
