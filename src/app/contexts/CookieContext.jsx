"use client"; // ระบุว่าคอมโพเนนท์นี้เป็น Client Component

import { createContext, useState, useEffect } from "react";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookiesPreferences, setCookiesPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(
      localStorage.getItem("cookiePreferences")
    );
    if (savedPreferences) {
      setCookiesPreferences(savedPreferences);
      setCookiesAccepted(true);
    }
  }, []);

  const acceptAllCookies = () => {
    setCookiesAccepted(true);
    setCookiesPreferences({
      analytics: true,
      marketing: true,
    });
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        analytics: true,
        marketing: true,
      })
    );
  };

  const saveCookiePreferences = (preferences) => {
    setCookiesPreferences(preferences);
    setCookiesAccepted(true);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  };

  return (
    <CookieContext.Provider
      value={{
        cookiesAccepted,
        cookiesPreferences,
        acceptAllCookies,
        saveCookiePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};
