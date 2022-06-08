import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");

  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    } else {
      const filtered = transactions.filter((t) =>
        t.desc.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTnx(filtered);
    }
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length) return <p style={{marginTop:"15px"}}>add some tnx</p>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for tnx..."
        className="search"
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {parseFloat(t.amount)}</span>
            </div>
          ))
        : "no item matchs !"}
    </section>
  );
};

export default TransActionComponent;
