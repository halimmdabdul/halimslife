import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Post from "@/pages/Post";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug">{(params) => <Post slug={params.slug} />}</Route>
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <LanguageProvider defaultLang="bn">
          <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
