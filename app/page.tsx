import Hero from "@/components/hero";
import ProjectGrid from "@/components/projectgrid";
import Experience from "@/components/experience";
import ContactForm from "@/components/contactform";
import About from "@/components/about";
//import Testimonials from "@/components/testimonials";
//import GithubStats from "@/components/github-stats";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <Hero />
      <About />
      <ProjectGrid />
      <Experience />
      {/*
      <Testimonials />
      <GithubStats /> */}
      <ContactForm />
      
      {/* Footer Simple */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>Built and Designed by Akinola Emmanuel © {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  );
}