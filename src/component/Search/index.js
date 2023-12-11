import styles from "./styles.module.css";

const Search = ({ setSearch, sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };
  return (
    <>
    <div className={styles.container}>
    <div className={styles.searchbar}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search"
        onChange={({ currentTarget: input }) => setSearch(input.value)}
      />
      <select
        onChange={onSelectChange}
        className={styles.select}
        defaultValue="all"

      >
	   <option value="all">All</option>
        <option value="free">Free</option>
        <option value="Trial">Trial</option>
        <option value="paid">Paid</option>
      </select>
    </div>
    </div>
    </>
    
  );
};

export default Search;
