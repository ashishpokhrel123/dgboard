import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ResetPasswordPage from "./components/ui/ResetPasswordPage";
import ResetPinModal from "./components/ui/ResetPinModal";
import Adminpage from "./admin/page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resetPassword" element={<ResetPasswordPage />} />
          <Route
            path="/verifyPin"
            element={
              <ResetPinModal
                onClose={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          {/* ADMIN ROUTE MUST COME BEFORE CATCH-ALL */}
          <Route path="/admin" element={<Adminpage />} />
          {/* CATCH-ALL ROUTE SHOULD BE LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
