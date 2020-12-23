import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { FaFilter, FaSpinner, FaTimes, FaTimesCircle } from "react-icons/fa";
import Facets from "./Facets";
import Modal from "./Modal";
import Nav from "./Nav";
import ProductGrid from "./ProductGrid";
import ProductOverlayCard from "./ProductOverlayCard";
import ResultsSummary from "./ResultsSummary";
import { useAnswersStore } from "./store/useAnswersStore";
import { Product } from "./types";
import { useCart } from "./useCart";

function App() {
  const [quickLookProduct, setQuickLookProduct] = useState<Product | null>(
    null
  );
  const [showingMobileFilters, setShowingMobileFilters] = useState(false);

  const { shoppingCart, addProductToCart } = useCart();
  const {
    state: { verticalresults, query, loading },
    actions: { runSearch },
  } = useAnswersStore();
  useEffect(() => {
    runSearch();
  }, []);

  return (
    <div className="mb-12 relative">
      <Nav shoppingCart={shoppingCart} />
      <div className="flex items-start">
        <div className="w-64 xl:w-72 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block">
          {query.length > 0 && (
            <div className="px-4 mt-5 flex items-center group">
              <div className="font-medium">{query} </div>

              {!loading && (
                <>
                  <div className="ml-1">
                    ({verticalresults?.resultsCount.toLocaleString()})
                  </div>
                  <div className="flex-grow"></div>
                  <div>
                    <FaTimesCircle
                      className="opacity-0 group-hover:opacity-100 text-gray-500 cursor-pointer hover:text-gray-600 bg-gray-100"
                      onClick={() => {
                        runSearch("");
                      }}
                    />
                  </div>
                </>
              )}
              {loading && (
                <>
                  <div className="flex-grow"></div>
                  <div className="ml-1">
                    <FaSpinner className="animate-spin text-gray-500" />
                  </div>
                </>
              )}
            </div>
          )}
          <Facets />
        </div>
        {verticalresults && (
          <div className="p-4 flex-grow">
            <ResultsSummary
              onToggleFilters={() => setShowingMobileFilters((e) => !e)}
            />
            <ProductGrid
              onAddToCart={addProductToCart}
              onQuickLook={(p) => setQuickLookProduct(p)}
            />
          </div>
        )}
      </div>
      {showingMobileFilters && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-50 flex flex-col">
          <div className="pt-4 px-4 text-lg font-light flex items-center">
            <FaFilter className="text-gray-600 mr-2" />
            Filters
            <div className="flex-grow"></div>
            <button
              className="p-4 text-gray-400 -m-4"
              onClick={() => setShowingMobileFilters(false)}
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <Facets />
          </div>
          <button
            className="m-2 bg-gray-800 text-white p-4 text-center"
            onClick={() => setShowingMobileFilters(false)}
          >
            Show {verticalresults?.resultsCount} Glasses
          </button>
        </div>
      )}
      {quickLookProduct && (
        <Modal>
          <ProductOverlayCard
            addToCart={() => {
              addProductToCart(quickLookProduct);
              setQuickLookProduct(null);
            }}
            product={quickLookProduct}
            onClose={() => setQuickLookProduct(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
