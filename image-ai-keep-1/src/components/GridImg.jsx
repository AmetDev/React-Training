import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, setCounter, setRef } from "../redux/slice/imageSlice";

const GridImg = () => {
  const imgFunc = (bool, element) => {
    window.scrollTo(0, 0);

    setSwitcher(bool);
    setCurrentElement(element);
  };
  const dispatch = useDispatch();
  const [switcher, setSwitcher] = useState(false);
  const [currentElement, setCurrentElement] = useState({});
  const { counter, images, error, isLoading, refClick } = useSelector(
    (state) => state.images,
  );
  useEffect(() => {
    const func = async () => {
      await dispatch(fetchImages({ counter }));
    };
    func();
  }, [counter]);
  const nameRef = useRef("initialstate");
  useEffect(() => {
    const handleCLick = (event) => {
      if (!event.composedPath().includes(nameRef.current)) {
        event.preventDefault();
        console.log("nameref.current", nameRef.current);
        setSwitcher(false);
      }
    };
    document.body.addEventListener("click", handleCLick);
  });
  const ImageItem = (currentElement) => {
    return (
      <div>
        <div className="bg-white flex ">
          <img src={currentElement.url} alt="" />
          <div>
            <div className="m-5">{currentElement.title}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {switcher && <ImageItem {...currentElement} />}
      {isLoading
        ? <div>загрузка...{isLoading}</div>
        : error
        ? <div>{error}</div>
        : images
        ? (
          <ul ref={nameRef} className="grid grid-cols-3 gap-4 mt-5">
            {images.map((el) => (
              <li
                onClick={() => imgFunc(true, el)}
                className="w-[454px] h-[460px] m-2"
                key={el.id}
              >
                <img className="rounded-[50px]" src={el.url} alt={el.title} />
              </li>
            ))}
          </ul>
        )
        : (
          ""
        )}

      <button
        onClick={() => dispatch(setCounter())}
        className="bg-white w-16 h-8"
        type="button"
      >
        <h1>MORE...</h1>
      </button>
    </>
  );
};

export default GridImg;
