import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stories from "./pages/Stories";
import UbuntuVoices from "./pages/UbuntuVoices";
import Poetry from "./pages/Poetry";
import MedicinalPlants from "./pages/MedicinalPlants";
import HeritageMap from "./pages/HeritageMap";
import Heroes from "./pages/Heroes";
import LearningHub from "./pages/LearningHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/ubuntu-voices" element={<UbuntuVoices />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/medicinal-plants" element={<MedicinalPlants />} />
          <Route path="/heritage-map" element={<HeritageMap />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
