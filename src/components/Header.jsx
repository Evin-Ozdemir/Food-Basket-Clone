import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const { restaurants } = useSelector((store) => store.restaurantReducer);

  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          Yemek Sepeti
        </Link>
        <div className="flex gap-5">
          <Link
            to="/"
            className="flex items-center gap-1 hover:underline cursor-pointer"
          >
            Yakınınızda {restaurants.length}{" "}
            <IoRestaurant className="text-red-500" />
            <span className="max-md:hidden"> Restoran var</span>
          </Link>

          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-100 transition rounded-full"
          >
            <BsBasket />
            <span>{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
