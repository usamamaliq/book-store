import { useSelector, useDispatch } from 'react-redux';
import { Status } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <h1>
        {categories}
      </h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(Status());
        }}
        className="statusButton"
        type="button"
      >
        CHECK STATUS
      </button>
    </div>

  );
};

export default Categories;
