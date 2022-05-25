import "./tailwind.css";
import App from "./App.svelte";
import Button from ".components/button/Button.svelte";
import Pill from ".components/pill/Pill.svelte";

const app = new App({
  target: document.body,
});

export { app as default, Button, Pill };
