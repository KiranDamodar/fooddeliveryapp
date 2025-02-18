import { useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
import FoodItem from "../../components/Fooditem/FoodItem";
import "./search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoodList, setFilteredFoodList] = useState(food_list); // Store filtered food items

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!searchQuery.trim()) {
      setFilteredFoodList(food_list);
    } else {
      const filteredItems = food_list.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoodList(filteredItems); // Update filtered food list
    }
  };

  return (
    <div>
      <form className="input">
        <input
          type="text"
          placeholder="Search for foods..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </form>

      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((item, index) => (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <div className="not-available">Ouch! not available</div>
        )}
      </div>
    </div>
  );
};

export default Search;
