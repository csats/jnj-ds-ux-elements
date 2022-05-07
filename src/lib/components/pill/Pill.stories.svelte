<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Pill from "./Pill.svelte";
</script>

<Meta
  title="Components/Pill"
  component={Pill}
  argTypes={{
    label: { control: "text" },
    tagColor: { control: { type: 'color', presetColors: ['#346376', '#666666']} },
    textColor: { control: { type: 'color', presetColors: ['#346376', '#666666']} },
    size: { control: { type: 'range', min: 1, max: 100 } },
    variant: { options: ["Static Tag", "Expert Tag", "Step Filter Tag", "Closeable Tag"], control: { type: 'radio' }, },
    useHover: { control: 'boolean' },
    clickColor: { control: { type: 'color', presetColors: ['#346376', '#666666']} },
    hoverColor: { control: { type: 'color', presetColors: ['#346376', '#666666']} },
    onClickColor: { control: { type: 'color', presetColors: ['#346376', '#666666']} },
  }}
/>

<Template let:args>
  <Pill {...args} />
</Template>

<Story
  name="Static Tag"
  args={{
    label: "Static Tag",
    variant: "Static Tag",
    tagColor: "#666666",
    textColor: "#ffffff"
  }}
/>

<Story
  name="Closeable Tag"
  args={{
    label: "Gender : Female",
    variant: "Closeable Tag",
    tagColor: "#346376",
    textColor: "#ffffff"
  }}
/>

<Story
  name="Case Context Tag"
  args={{
    label: "BMI 18.5 - 24.9",
    variant: "Default",
    clickColor: "#346376",
    tagColor: "#e8e8e8",
    textColor: "#7d7d7d",
    hoverColor: "#9c9c9c",
    useHover: true,
  }}
/>

<Story
  name="Status Tag"
  args={{
    label: "Status Tag",
    variant: "Default",
    tagColor: "#f7931e",
    textColor: "#ffffff",
    size: 5,
  }}
/>

<Story
  name="Step Filter Tag"
  args={{
    label: "Filter Tag",
    variant: "Step Filter Tag",
    tagColor: "#666666",
    textColor: "#ffffff"
  }}
/>

<Story
  name="Expert Tag"
  args={{
    label: "Expert",
    variant: "Expert Tag",
    tagColor: "#346376",
    textColor: "#ffffff"
  }}
/>