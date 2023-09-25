import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const categories = useLoaderData();
    

    return (
        <div>
            <div className="">
            <Banner></Banner>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-24"><Categories categories={categories}></Categories></div>
        </div>
    );
};

export default Home;