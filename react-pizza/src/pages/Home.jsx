import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCaterId, setFilters } from "../components/redux/slices/filterSlice";
import Catagories from "../components/Catagories.jsx";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/index.jsx";
import Sort, { objName } from "../components/Sort.jsx";
import Pagination from "../components/pagination/index.jsx";
import { SearchContext } from "../App.js";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categoryId, sort, currentPage } = useSelector((state) =>
    state.filter
  );
  const sortType = sort;
  const categoriesId = categoryId;

  const onClickCategory = (id) => {
    dispatch(setCaterId(id));
  };

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  //const [currentPage, setCurrentPage] = React.useState(1)
  const fakeArr = [
    [undefined],
    [undefined],
    [undefined],
    [undefined],
    [undefined],
  ];
  //Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortPropety: sortType.orderProperty,
        categoriesId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriesId, sortType.orderProperty, currentPage]);
  //Если был первый рендер, то проверяем URL параметры и сохраняем в редаксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = objName.find((obj) =>
        obj.propertyObjName === params.propertyObjName
      );

      dispatch(setFilters({
        ...params,
        sort,
      }));
      isSearch.current = true;
    }
  }, []);

  
 //Если был первый рендер, то запрашиваем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoriesId, sort.orderProperty, searchValue, currentPage]);

  const searchsValue = searchValue ? `&search=${searchValue}` : "";
  const fetchPizzas = () => {
    setIsLoading(true);
    axios.get(
      "https://64c4f551c853c26efada564f.mockapi.io/items?" +
        `${categoriesId === 0 ? "" : `category=${categoriesId}`}` +
        `&page=${currentPage}&limit=4` +
        `&sortBy=${sortType.propertyObjName}&order=${sortType.orderProperty}` +
        searchsValue,
    )
      .then((response) => {
        return response.data;
      })
      .then((arr) => {
        setPizza(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  };

  const pizzasFilter = pizzas.filter((obj) => {
    return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  
  pizzasFilter.map((obj) => {
    return <PizzaBlock key={obj.id} {...obj} />;
  });

  return (
    <>
      <div className="container">
        {" "}
        <div className="content__top">
          <Catagories
            value={categoriesId}
            onClickCategory={(i) => onClickCategory(i)}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? fakeArr.map((obj) => {
              return <PizzaSkeleton key={obj.id} {...obj} />;
            })
            : pizzasFilter
            ? pizzasFilter.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })
            : pizzas.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default Home;
