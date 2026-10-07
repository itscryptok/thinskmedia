import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import AiNews from "@/pages/ai-news";
import EmailListsGuide from "@/pages/email-lists-guide";
import RepurposeAiNews from "@/pages/repurpose-ai-news";
import Blog from "@/pages/blog";
import FriscoAiMarketing from "@/pages/frisco-ai-marketing";
import PlanoAiMarketing from "@/pages/plano-ai-marketing";
import MckinneyAiMarketing from "@/pages/mckinney-ai-marketing";
import AllenAiMarketing from "@/pages/allen-ai-marketing";
import DallasAiMarketing from "@/pages/dallas-ai-marketing";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/ai-news" component={AiNews} />
      <Route path="/email-lists-guide" component={EmailListsGuide} />
      <Route path="/repurpose-ai-news" component={RepurposeAiNews} />
      <Route path="/blog" component={Blog} />
      <Route path="/frisco-ai-marketing" component={FriscoAiMarketing} />
      <Route path="/plano-ai-marketing" component={PlanoAiMarketing} />
      <Route path="/mckinney-ai-marketing" component={MckinneyAiMarketing} />
      <Route path="/allen-ai-marketing" component={AllenAiMarketing} />
      <Route path="/dallas-ai-marketing" component={DallasAiMarketing} />
      <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
