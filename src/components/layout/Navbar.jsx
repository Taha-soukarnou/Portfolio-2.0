import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";
import LogoShape from "../ui/LogoShape";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const header = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".nav-logo", { y: -20, opacity: 0, duration: 0.6 }).from(
        ".nav-link",
        { y: -20, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3",
      );

      gsap.to(".shape-outer", {
        rotation: 360,
        svgOrigin: "20 20",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".shape-inner", {
        rotation: -360,
        svgOrigin: "20 20",
        duration: 6,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".shape-core", {
        scale: 1.8,
        svgOrigin: "20 20",
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // constant logo animation
      gsap.to(".logo-bracket", {
        opacity: 0.3,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".logo-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    },
    { scope: header },
  );

  return (
    <header
      ref={header}
      className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="nav-logo group flex items-center gap-3 font-mono text-2xl font-bold text-fg"
        >
          <LogoShape />
          <span>
            <span className="logo-bracket inline-block text-accent transition-transform duration-300 group-hover:-translate-x-1">
              &lt;
            </span>
            TSdev
            <span className="logo-bracket inline-block text-accent transition-transform duration-300 group-hover:translate-x-1">
              /&gt;
            </span>
            <span className="logo-cursor text-accent">_</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link relative text-muted transition-colors hover:text-accent
                           after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                           after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
