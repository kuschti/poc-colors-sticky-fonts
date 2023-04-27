import "./styles.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");
const container = document.querySelector(".panel-group");
const teaser = document.querySelector(".teaser");

//initalize container bg color with color from first panel
container.style.backgroundColor = getComputedStyle(container).getPropertyValue(
  `--color-${panels[0].dataset.color}-bg`
);

panels.forEach((panel) => {
  const bgColor = getComputedStyle(container).getPropertyValue(
    `--color-${panel.dataset.color}-bg`
  );
  const fontColor = getComputedStyle(container).getPropertyValue(
    `--color-${panel.dataset.color}-color`
  );

  ScrollTrigger.create({
    trigger: panel,
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
    onEnter: () => {
      container.style.backgroundColor = bgColor;
      container.style.color = fontColor;
    },
    onEnterBack: () => {
      container.style.backgroundColor = bgColor;
      container.style.color = fontColor;
    }
  });
});

ScrollTrigger.create({
  trigger: ".teaser",
  endTrigger: ".panel.last",
  start: `top +=20%`,
  end: `top top`,
  markers: true,
  pin: ".teaser"
});
