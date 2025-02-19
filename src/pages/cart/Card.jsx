import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  const handleDelete = () => {
    product.amount > 1
      ? dispatch(updateItem(product.id, product.amount - 1))
      : dispatch(deleteItem(product.id));
  };

  return (
    <div className="mb-10 p-4 border rounded flex gap-4">
      <img src={product.photo} className="size-[100px] rounded-lg" />

      <div className="w-full flex felx-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{product.title}</h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}$</p>

          <div className="flex items-center border text-xl rounded-lg">
            <button className="basket-btn" onClick={handleDelete}>
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>

            <p className="min-w-[30px] text-center">{product.amount}</p>
            <button className="basket-btn" onClick={handleAdd}>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
