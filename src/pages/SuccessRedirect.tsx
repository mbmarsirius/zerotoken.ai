import { useEffect } from "react";

const SuccessRedirect = () => {
  useEffect(() => {
    // Redirect to /pay/success immediately
    window.location.replace('/pay/success');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime/10 via-white to-lavender/5">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-lime/30 border-t-lime rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default SuccessRedirect;