import { useEffect, useState } from "react";
import axios from "axios";

import "./Crypto.css";
import Search from "../../component/Search";
import Table from "../../component/Table";
import Genre from "../../component/Genre";


function Crypto() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "varient", order: "desc" });
	const [filterGenre, setFilterGenre] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllMovies = async () => {
			try {
			  const url = `https://aitool-8j7h.onrender.com/AITools?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;
			  const { data } = await axios.get(url);
			  setObj(data);
			} catch (err) {
			  console.log(err);
			}finally {
				setLoading(false); // Set loading to false regardless of success or failure
			  }
		  };
		
		  getAllMovies();
	}, [sort, filterGenre, page, search]);

	if (loading) {
		return <p>Loading...</p>;
	  }

	return (
    <>
    <div className="Top">
    <Search setSearch={setSearch} sort={sort} setSort={setSort} />
    </div>
    <div className="filter_container">
						
						<Genre
							filterGenre={filterGenre}
							genres={obj.response.genres || []}
							setFilterGenre={setFilterGenre}
						/>
					</div>
					<div>
					
					<Table movies={obj.response.tools || []} />
						
					</div>
					
			
    </>
	);
}

export default Crypto;