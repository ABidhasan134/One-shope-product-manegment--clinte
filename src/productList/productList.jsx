import React, { useContext, useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { AuthContext } from "../context/AuthProvider";
import useProduct from "../hook/useProduct";
import useAxiosSequer from "../hook/useSequer";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [result,setresult]=useState([]);
  const { setLoading } = useContext(AuthContext);
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  // const [currentResult, setCurrentResult] = useState([])
  const {
    products,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useProduct();

  const axiosSequer = useAxiosSequer();

  // Refetch products when currentPage changes and there are no search results
  // useEffect(() => {
  //   // console.log(searchResults);
  //   if (searchResults.length === 0) {
  //     refetch();
  //   }
  // }, [currentPage, refetch]);

  useEffect(()=>{
    console.log(result);
  },[searchResults,result])

  // Handle search operation try catch use when but I didn't get data in to searchResult
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const search = e.target.search.value;

    try {
      const res = await axiosSequer.get("/searchproducts", {
        params: { product_name: search },
      });
      // response working but my result is not set in the state
      console.log("API search Response:", res.data.result);
      setSearchResults(res.data.result);
      setresult(res.data.result);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handelShort = (type) => {
    if (type === "Price") {
      console.log("Price");
      const sortProduct=[...products].sort((a,b)=>{
        return a.Price-b.Price
      })
      setSearchResults(sortProduct);
    } else if (type === "Date_Added") {
      console.log("Date_Added");
      const sortProduct=[...products].sort((a,b)=>{
        return new Date(a.Date_Added)-new Date(b.Date_Added)
      }
    )
    setSearchResults(sortProduct);
    console.log("sort data",searchResults);
    }
  };

  // Fetch products based on filters
  const fetchFilteredProducts = async () => {
    setLoading(true);
    try {
      const res = await axiosSequer.get("/searchCatagory", {
        params: {
          brand_name: brandFilter,
          category_name: categoryFilter,
          price_range: priceRangeFilter,
        },
      });
      const result = res.data;
      // response working but my result is not set in the state 
      console.log("Api fillter respons", result);
      // setSearchResults(result);
    } catch (error) {
      console.error("Failed to fetch filtered products", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(searchResults);
  // Determine which products to display: search results or all products
  const displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <div>
      {/* fillter apply */}
      <div className="filters grid md:flex  gap-1 lg:gap3 mb-4">
        <input
          type="text"
          placeholder="Brand Name"
          className="input input-bordered"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category Name"
          className="input input-bordered"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price Range"
          className="input input-bordered"
          value={priceRangeFilter}
          onChange={(e) => setPriceRangeFilter(e.target.value)}
        />
        <button
          onClick={fetchFilteredProducts}
          className="btn bg-sky-300 hover:bg-sky-500 font-semibold"
        >
          Apply Filters
        </button>
      </div>
      {/* search bar  */}
      <form onSubmit={handleSearch} className="flex gap-1 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Enter Food name"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-sky-300 hover:bg-sky-500 font-semibold">
          Search
        </button>
      </form>
      {/* sort  */}
      <div>
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 hover:bg-green-600">
            sort by<IoChevronDown></IoChevronDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handelShort("Price")}>Price</a>
            </li>
            <li>
              <a onClick={() => handelShort("Date_Added")}>Date Added</a>
            </li>
          </ul>
        </details>
      </div>
      {/* card show case */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4">
        {displayProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {searchResults.length === 0 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="btn btn-primary"
          >
            Previous Page
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="btn btn-primary"
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
