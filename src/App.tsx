import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ListNode } from "./LinkedList";
import { calcLicensePlate } from "./logic";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [calc, setCalc] = useState([]);
  const onSubmit = (data: any) => {
    const result: false | ListNode = calcLicensePlate(data.num);
    if (result !== false) {
      const items: any = [];
      result.printTree().forEach((item) => {
        items.push(<li key={item}>{item}</li>);
      });
      setCalc(items);
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("num", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <ul>{calc}</ul>
      <input type="submit" />
    </form>
  );
}
