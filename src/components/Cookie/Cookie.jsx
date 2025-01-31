import { useState, useEffect } from "react";

const CookieButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {});

    if (!cookies.acceptedCookies) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "acceptedCookies=true; path=/; max-age=31536000";
    setVisible(false);
  };

  return (
    visible && (
      <div className="fixed left-4 bottom-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col items-start z-50">
        <p className="mb-2">Ta strona używa plików cookie. Akceptujesz?</p>
        <button
          onClick={acceptCookies}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >
          Akceptuję
        </button>
      </div>
    )
  );
};

export default CookieButton;
