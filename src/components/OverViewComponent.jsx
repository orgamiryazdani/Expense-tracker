import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="test">
      <div className="topSection">
        <p>Balance : </p>
        <span>$ {income - expense}</span>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow && "cancel"}`}
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransAction={addTransAction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          income <span>{income} $</span>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
