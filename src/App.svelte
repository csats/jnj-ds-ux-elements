<script>
  import Button from "./lib/components/button/Button.svelte";
  import Pill from "./lib/components/pill/Pill.svelte";
</script>

<main>
  <div class="canvas">
    <h1 class="header">Digital Solutions -Design Repository</h1>
    <p>These components have been imported from the src folder</p>
    <div class="component-container">
      <Button primary={true} hasIcon={true} text="UPLOAD" />
      <Button hasIcon={true} text="UPLOAD" />
    </div>
    <div class="component-container">
      <Button primary={false} hasIcon={false} text="UPLOAD" />
      <Button primary={true} hasIcon={false} text="UPLOAD" />
    </div>
    <div class="component-container">
      <Pill
        label="Static Tag"
        variant="Static Tag"
        tagColor="#666666"
        textColor="#ffffff"
      />

      <Pill
        label="Gender: Female"
        variant="Closeable Tag"
        tagColor="#346376"
        textColor="#ffffff"
      />

      <Pill
        label="BMI 18.5 - 24.9"
        variant="Default"
        clickColor="#346376"
        tagColor="#e8e8e8"
        textColor="#7d7d7d"
        hoverColor="#9c9c9c"
        useHover={true}
      />

      <Pill
        name="Status Tag"
        label="Status Tag"
        variant="Default"
        tagColor="#f7931e"
        textColor="#ffffff"
        size={5}
      />

      <Pill
        name="Step Filter Tag"
        label="Filter Tag"
        variant="Step Filter Tag"
        tagColor="#666666"
        textColor="#ffffff"
      />

      <Pill
        name="Expert Tag"
        label="Expert"
        variant="Expert Tag"
        tagColor="#346376"
        textColor="#ffffff"
      />
    </div>
  </div>
</main>

<style>
  .canvas {
    @apply m-12 flex-1 justify-center;
  }

  .header {
    @apply font-normal text-2xl tracking-wide;
  }

  .component-container {
    @apply m-12;
  }
</style>
