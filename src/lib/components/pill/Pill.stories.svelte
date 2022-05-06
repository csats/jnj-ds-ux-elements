<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Pill from "./Pill.svelte";
</script>

<Meta
  title="Components/Pill"
  component={Pill}
  argTypes={{
    color: { control: "select", options: ["primary", "secondary", "tertiary", "quaternary"] },
    label: { control: "text" },
  }}
/>

<Template let:args>
  <Pill {...args} />
</Template>

<Story
  name="Static Tag"
  args={{
    label: "Static Tag",
  }}
/>

<Story
  name="Close Icon Tag"
  args={{
    label: "Gender : Female",
    hasCloseIcon: true
  }}
/>

<Story
  name="Filter Icon Tag"
  args={{
    label: "Filter Tag",
    hasFilterIcon: true
  }}
/>

<Story
  name="Expert Tag"
  args={{
    label: "Expert",
    isExpertTag: true
  }}
/>