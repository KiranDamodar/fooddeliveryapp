import { menu_list } from "../../assets/frontend_assets/assets"
import PropTypes from 'prop-types';
import "./ExploreMenu.css"

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id="explore-menu" className="explore-menu">
     <h1>Explore Menu</h1>
     <p className="explore-menu-test">A menu full of delicious options—pick your next bite, and let the flavors melt in your mouth!</p>
     <div className="explore-menu-list">
      {menu_list.map((item,index)=>{
       return(
       <div onClick={()=> setCategory(prev=> prev===item.menu_name? "All" : item.menu_name)} key={index} className="explore-menu-list-items">
        <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt={item.menu_name}/>
        <p>{item.menu_name}</p>
       </div>
       );
      })}
     </div>
     <hr/>
    </div>
    
  )
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, 
  setCategory: PropTypes.func.isRequired 
}
export default ExploreMenu;
