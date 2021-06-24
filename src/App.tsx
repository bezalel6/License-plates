import { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { useForm } from "./hooks";
import { calcLicensePlate } from "./logic";
import MyFooter from "./MyFooter";
import DarkModeButton from "./DarkModeButton";

export default function App() {
  const [calc, setCalc] = useState<any>(false);
  const { values, onChange, onSubmit } = useForm(callback, {});
  function callback() {
    const items: any[] = [];
    const str = (values as any).body as string;
    if (isNaN(+str) || str == "" || str.length > 9) {
      setCalc(
        <ul className="list">
          <li className="ui error message">הכנס מספר תקין</li>
        </ul>
      );
      return;
    }
    let list;
    try {
      list = calcLicensePlate(str);
    } catch (err) {
      setCalc(
        <ul className="list">
          <li className="ui error message">הכנס מספר תקין</li>
        </ul>
      );
      return;
    }
    if (list) {
      list.printTree().forEach((item) => {
        items.push(<li key={item}>{item}</li>);
      });
    } else items.push(<li className="ui error message">לא ניתן לאפס</li>);

    setCalc(<ul className="list">{items}</ul>);
  }
  return (
    <>
      <DarkModeButton />

      <div
        className="form-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>אפס לוחיות רישוי</h1>
      </div>
      <div
        className="form-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form onSubmit={onSubmit} noValidate>
          <Form.Field>
            <div
              className="form-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Input
                placeholder="הכנס את מספר לוחית הרישוי"
                name="body"
                onChange={onChange}
              />
              <Button type="submit" color="teal">
                Submit
              </Button>
            </div>
          </Form.Field>
        </Form>
        {calc && <div style={{ marginBottom: 20 }}>{calc}</div>}
      </div>
      <div
        className="form-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <p>אפשרויות</p>
        <Checkbox label='' /> */}
      </div>
      <MyFooter></MyFooter>
    </>
  );
}
