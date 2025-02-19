import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";
import Warning from "./Warning";
import OrderBox from "./OrderBox";

const Cart = () => {
  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} />
          ) : cart.length === 0 ? (
            <Warning />
          ) : (
            cart.map((item) => <Card key={item.id} product={item} />)
          )}
        </div>
        <OrderBox cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
