import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const categories = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (search) => {
    setSearch(search);
    const filteredItems = categories.filter((item) =>
      item.item.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filteredItems);

    if (search && filteredItems.length === 0) {
      Swal.fire({
        title: "SORRY!",
        icon: "You clicked the button!",
        text: "Nothing Found",
      });
    }
  };

  return (
    <div>
      <div className="">
        <Banner onSearch={handleSearch}></Banner>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-24">
        <Categories
          categories={search ? filteredItems : categories}
        ></Categories>
      </div>
    </div>
  );
};

export default Home;
