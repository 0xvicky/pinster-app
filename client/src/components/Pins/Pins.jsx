import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getPinsAction} from "../../actions";
import {useDispatch} from "react-redux";

const Pins = () => {
  const {pins} = useSelector(state => state.pins);

  const dispatch = useDispatch();

  console.log(pins);
  useEffect(() => {
    dispatch(getPinsAction());
  }, [dispatch]);

  return <div>Pins</div>;
};

export default Pins;
