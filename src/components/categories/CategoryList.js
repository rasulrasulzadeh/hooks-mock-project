import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import * as actionTypes from "../../redux/actions/actionTypes"

const CategoryList = () => {
  const currentCategory = useSelector((state) => state.changeCategoryReducer);
  const categories = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: actionTypes.GET_CATEGORIES_REQUESTED});
  }, []);

  const selectCategory = (category) => {
    dispatch(categoryActions.changeCategory(category));
    dispatch({type: actionTypes.GET_PRODUCTS_REQUESTED, payload: category});
  };

  function showAllProducts() {
    dispatch(categoryActions.changeCategory(""));
    dispatch({type: actionTypes.GET_PRODUCTS_REQUESTED});
  }

  return (
    <div>
      <h1>
        <Badge color="warning" onClick={showAllProducts}>
          Categories
        </Badge>
      </h1>
      <ListGroup>
        {categories.map((elem) => (
          <ListGroupItem
            active={elem.id === currentCategory.id}
            onClick={() => selectCategory(elem)}
            key={elem.id}
          >
            {elem.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
