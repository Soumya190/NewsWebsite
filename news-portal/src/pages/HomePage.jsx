import "./HomePage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NewCard from "./NewCard.jsx";
import SearchBar from "./SearchBar";
import Header from "./Header";
import CategoryDropdown from "./CategoryDropdown";
import Pagination from "./Pagination.jsx";

function HomePage() {
  const [data, setData] = useState([]);
  const [category, setcategory] = useState("business");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState("");
  const pageSize = 6;
  const maxPages = 20;

  const API_key = "f52674b6dbf74e109bdc5d4e724870a0";
  const country = "in";

  useEffect(() => {
    fetchData();
  }, [category, currentPage, searchResults]);

  const fetchData = async () => {
    try {
      let url;
      if (searchResults) {
        url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          searchResults
        )}&apiKey=${API_key}&pageSize=${pageSize}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_key}&category=${category}`;
      }
      console.log("Fetching data from URL:", url);
      const response = await axios.get(url);
      console.log("API Response:", response.data);
      setData(response.data.articles);
      // setTotalPages(Math.ceil(response.data.totalResults / pageSize));
      // setTotalPages(totalPages > maxPages ? maxPages : totalPages);
      const totalPages = Math.ceil(response.data.totalResults / pageSize);
      setTotalPages(totalPages > maxPages ? maxPages : totalPages);
      console.log(`Total Results: ${response.data.totalResults}`);
      console.log(
        `Total Pages: ${Math.ceil(response.data.totalResults / pageSize)}`
      );
    } catch (error) {
      console.error("Error occurred while fetching data: ", error);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setcategory(selectedCategory.toLowerCase());
    setCurrentPage(1);
    setSearchResults("");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (term) => {
    setSearchResults(term);
    setCurrentPage(1);
  };

  const lastPostindex = currentPage * pageSize;
  const firstPostindex = lastPostindex - pageSize;
  const displayedData = data.slice(firstPostindex, lastPostindex);

  return (
    <>
      <Header />

      <CategoryDropdown
        category={category}
        handleCategoryChange={handleCategoryChange}
      />

      <SearchBar onSearch={handleSearch} />

      {/* <div className="row">
          {displayedData.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
              <NewCard article={article} />
            </div>
          ))}
        </div> */}
        <NewCard displayedData={displayedData} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
export default HomePage;
