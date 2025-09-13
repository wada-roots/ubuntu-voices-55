import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AuthorsDashboard from "./pages/AuthorsDashboard";
import Stories from "./pages/Stories";
import UbuntuVoices from "./pages/UbuntuVoices";
import Poetry from "./pages/Poetry";
import MedicinalPlants from "./pages/MedicinalPlants";
import HeritageMap from "./pages/HeritageMap";
import Heroes from "./pages/Heroes";
import LearningHub from "./pages/LearningHub";
import NotFound from "./pages/NotFound";
import Kikuyu from "./pages/tribes/Kikuyu";
import Luo from "./pages/tribes/Luo";
import Luhya from "./pages/tribes/Luhya";
import Kalenjin from "./pages/tribes/Kalenjin";
import Maasai from "./pages/tribes/Maasai";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/authors-dashboard" element={<AuthorsDashboard />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/ubuntu-voices" element={<UbuntuVoices />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/medicinal-plants" element={<MedicinalPlants />} />
          <Route path="/heritage-map" element={<HeritageMap />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/tribes/kikuyu" element={<Kikuyu />} />
          <Route path="/tribes/luo" element={<Luo />} />
          <Route path="/tribes/luhya" element={<Luhya />} />
          <Route path="/tribes/kalenjin" element={<Kalenjin />} />
          <Route path="/tribes/maasai" element={<Maasai />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
