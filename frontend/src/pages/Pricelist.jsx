import { useState, useEffect, useRef, useMemo } from "react";
import { FiSearch, FiPlus, FiPrinter, FiSettings, FiChevronUp, FiChevronRight, FiMoreHorizontal } from 'react-icons/fi'
import "./Pricelist.css";
import Header from "../components/pricelist/Header";
import Sidebar from "../components/pricelist/Sidebar";

export default function Pricelist({ locale: initialLocale = "en" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchArticle, setSearchArticle] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locale, setLocale] = useState(initialLocale);
  // debouncers per product:field
  const debounceRefs = useRef({});

  const STR = {
    en: {
      language: "English",
      searchArticle: "Search Article No ...",
      searchProduct: "Search Product ...",
      newProduct: "New Product",
      printList: "Print List",
      advanced: "Advanced mode",
      headers: {
        article: "Article No.",
        product: "Product/Service",
        inPrice: "In Price",
        price: "Price",
        unit: "Unit",
        inStock: "In Stock",
        description: "Description",
      },
    },
    sv: {
      language: "Svenska",
      searchArticle: "Sök artikelnummer ...",
      searchProduct: "Sök produkt ...",
      newProduct: "Ny produkt",
      printList: "Skriv ut lista",
      advanced: "Avancerat läge",
      headers: {
        article: "Artikelnummer",
        product: "Produkt/Tjänst",
        inPrice: "Inköpspris",
        price: "Pris",
        unit: "Enhet",
        inStock: "I lager",
        description: "Beskrivning",
      },
    },
  };
  const t = STR[locale];

  useEffect(() => {
    fetchProducts();
    // Allow ESC to close on small screens
    const onKey = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      // clear any pending debounced timers on unmount
      Object.values(debounceRefs.current || {}).forEach((t) => clearTimeout(t));
    };
  }, []);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002/api'

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      setProducts(data.items || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const patchProduct = async (id, field, value) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      if (!response.ok) {
        const error = await response.json();
        console.error("❌ Failed to update product:", error);
      }
    } catch (error) {
      console.error("❌ Network error updating product:", error);
    }
  };

  // Update UI immediately, debounce server PATCH for smooth typing
  const scheduleUpdate = (id, field, value) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
    const key = `${id}:${field}`;
    if (debounceRefs.current[key]) clearTimeout(debounceRefs.current[key]);
    debounceRefs.current[key] = setTimeout(() => {
      patchProduct(id, field, value);
    }, 500);
  };

  const filteredProducts = useMemo(() => {
    const a = searchArticle.toLowerCase();
    const b = searchProduct.toLowerCase();
    return products.filter((product) => {
      const matchesArticle = !a || (product.article_no || "").toLowerCase().includes(a);
      const matchesProduct = !b || (product.name || "").toLowerCase().includes(b);
      return matchesArticle && matchesProduct;
    });
  }, [products, searchArticle, searchProduct]);

  if (loading) {
    return (
      <div className="pricelist-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pricelist-app">
      <Header
        locale={locale}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        onToggleLocale={() => setLocale((l) => (l === "en" ? "sv" : "en"))}
      />

      <div className="app-layout">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          locale={locale}
        />

        <main className="main-area">
          <div className="search-controls">
            <div>
              <div className="search-group">
                <input
                  type="text"
                  placeholder={t.searchArticle}
                  value={searchArticle}
                  onChange={(e) => setSearchArticle(e.target.value)}
                  className="search-field"
                />
                <button className="search-button" aria-label="Search by article">
                  <FiSearch aria-hidden="true" />
                </button>
              </div>
              <div className="search-group">
                <input
                  type="text"
                  placeholder={t.searchProduct}
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  className="search-field"
                />
                <button className="search-button" aria-label="Search by product">
                  <FiSearch aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="toolbar">
              <button className="pill-button "><FiPlus aria-hidden="true" color="green" /> {t.newProduct}</button>
              <button className="pill-button "><FiPrinter aria-hidden="true" color="blue" />  {t.printList}</button>
              <button className="pill-button g"><FiSettings aria-hidden="true" color="blue" /> {t.advanced}</button>
            </div>

           
          </div>
          <div className="toolbar2">
              <button className="pill-button2 " aria-label="Add"><FiPlus aria-hidden="true" color="green" /></button>
              <button className="pill-button2 " aria-label="Print"><FiPrinter aria-hidden="true " color="blue" /></button>
              <button className="pill-button2 " aria-label="Settings"><FiSettings aria-hidden="true" color="blue" /></button>
            </div>

          {/* Mobile list headers (Product/Service | Price) */}
        

          <div className="table-wrapper desktop-view">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="arrow-header"></th>
                  <th>{t.headers.article} <FiChevronUp aria-hidden="true" /></th>
                  <th>{t.headers.product} <FiChevronUp aria-hidden="true" /></th>
                  <th>{t.headers.inPrice}</th>
                  <th>{t.headers.price}</th>
                  <th>{t.headers.unit}</th>
                  <th>{t.headers.inStock}</th>
                  <th>{t.headers.description}</th>
                  <th className="actions-header"></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="data-row">
                    <td className="arrow-col"><FiChevronRight aria-hidden="true" /></td>
                    <td>
                      <input
                        type="text"
                        value={product.article_no || ""}
                        onChange={(e) =>
                          scheduleUpdate(
                            product.id,
                            "article_no",
                            e.target.value
                          )
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={product.name || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "name", e.target.value)
                        }
                        className="field-input wide-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={product.in_price || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "in_price", e.target.value)
                        }
                        className="field-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={product.price || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "price", e.target.value)
                        }
                        className="field-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={product.unit || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "unit", e.target.value)
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={product.in_stock || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "in_stock", e.target.value)
                        }
                        className="field-input number-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={product.description || ""}
                        onChange={(e) =>
                          scheduleUpdate(
                            product.id,
                            "description",
                            e.target.value
                          )
                        }
                        className="field-input wide-input"
                      />
                    </td>
                    <td className="actions-col"><FiMoreHorizontal aria-hidden="true" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tablet-landscape-view">
            <table className="tablet-table">
              <thead>
                <tr>
                  <th></th>
                  <th>{t.headers.article}</th>
                  <th>{t.headers.product}</th>
                  <th>{t.headers.price}</th>
                  <th>{t.headers.inStock}</th>
                  <th>{t.headers.unit}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td><FiChevronRight aria-hidden="true" /></td>
                    <td>
                      <input
                        type="text"
                        value={product.article_no || ""}
                        onChange={(e) =>
                          scheduleUpdate(
                            product.id,
                            "article_no",
                            e.target.value
                          )
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={product.name || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "name", e.target.value)
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={product.price || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "price", e.target.value)
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={product.in_stock || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "in_stock", e.target.value)
                        }
                        className="field-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={product.unit || ""}
                        onChange={(e) =>
                          scheduleUpdate(product.id, "unit", e.target.value)
                        }
                        className="field-input"
                      />
                    </td>
                    <td><FiMoreHorizontal aria-hidden="true" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      <div className="mobile-portrait-view">
  {filteredProducts.map((product) => (
    <div key={product.id} className="mobile-card">
      <span className="arrow"><FiChevronRight aria-hidden="true" /></span>
      
      <div className="card-content">
        <div className="mobile-field">
          <input
            type="text"
            value={product.name || ""}
            onChange={(e) => scheduleUpdate(product.id, "name", e.target.value)}
            className="mobile-input"
          />
        </div>
        <div className="mobile-field price-field">
          <input
            type="number"
            value={product.price || ""}
            onChange={(e) => scheduleUpdate(product.id, "price", e.target.value)}
            className="mobile-input"
          />
        </div>
      </div>

      <span className="actions"><FiMoreHorizontal aria-hidden="true" /></span>
    </div>
  ))}
</div>

        </main>
      </div>
    </div>
  );
}
