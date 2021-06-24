import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useForm } from "./hooks";
import { calcLicensePlate } from "./logic";

export default function App() {
  const [calc, setCalc] = useState<any>(false);
  const { values, onChange, onSubmit } = useForm(callback, {});
  function callback() {
    const items: any[] = [];
    console.log("%cApp.tsx line:10 values", "color: #007acc;", values);
    const list = calcLicensePlate((values as any).body as string);
    if (list) {
      list.printTree().forEach((item) => {
        items.push(<li key={item}>{item}</li>);
      });
    }

    setCalc(<ul className="list">{items}</ul>);
  }
  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate>
        <Form.Field>
          <Form.Input
            placeholder="hi world!"
            name="body"
            onChange={onChange}

            // error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {calc && (
        <div style={{ marginBottom: 20 }}>
          {calc}
          {/* {
            <ul>
              {calc.forEach((element: {} | null | undefined) => {
                <li>{element}</li>;
              })}
            </ul>
          } */}
        </div>
      )}
    </div>
  );
}
