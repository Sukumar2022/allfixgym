import React, { createContext, useContext, useState, useCallback } from "react";

// Create the Error Context
const ErrorContext = createContext();

// Error Provider Component
export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  // Add a new error
  const addError = useCallback((message, type = "general", duration = 5000) => {
    const errorId = Date.now();
    const error = {
      id: errorId,
      message,
      type, // 'api', 'validation', 'general'
      timestamp: new Date(),
    };

    setErrors((prevErrors) => [...prevErrors, error]);

    // Auto-remove error after duration (if duration > 0)
    if (duration > 0) {
      setTimeout(() => {
        removeError(errorId);
      }, duration);
    }

    return errorId;
  }, []);

  // Remove a specific error
  const removeError = useCallback((errorId) => {
    setErrors((prevErrors) =>
      prevErrors.filter((error) => error.id !== errorId)
    );
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  // Handle API errors
  const handleApiError = useCallback(
    (error, customMessage = null) => {
      let message = customMessage || "An API error occurred";

      if (error.response?.status === 404) {
        message = "Resource not found";
      } else if (error.response?.status === 401) {
        message = "Unauthorized - please login";
      } else if (error.response?.status === 403) {
        message = "Access forbidden";
      } else if (error.response?.status === 500) {
        message = "Server error - please try again later";
      } else if (error.message === "Network Error") {
        message = "Network error - check your connection";
      }

      return addError(message, "api");
    },
    [addError]
  );

  // Handle validation errors
  const handleValidationError = useCallback(
    (fieldName, errorMessage) => {
      const message = errorMessage || `${fieldName} is invalid`;
      return addError(message, "validation");
    },
    [addError]
  );

  const value = {
    errors,
    addError,
    removeError,
    clearErrors,
    handleApiError,
    handleValidationError,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
};

// Custom hook to use the Error Context
export const useError = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }

  return context;
};
