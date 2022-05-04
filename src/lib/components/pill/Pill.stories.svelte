<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Pill from "./Pill.svelte";
</script>

<Meta
  title="Components/Pill"
  component={Pill}
  argTypes={{
    label: { control: "text" },
    primary: { control: "boolean" },
    onClick: { action: "onClick" },
  }}
/>

<Template let:args>
  <Pill {...args} on:click={args.onClick} />
</Template>

<Story
  name="Primary"
  args={{
    primary: true,
    label: "UPLOAD",
  }}
/>

<Story
  name="Secondary"
  args={{
    label: "UPLOAD",
  }}
/>
