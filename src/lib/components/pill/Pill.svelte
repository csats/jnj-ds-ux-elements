<script>
  export let size = 1;
  export let useHover = false;
  export let variant = "Default"
  export let label = "Static Tag";
  export let clickColor = "#7d7d7d";
  export let tagColor = "#346376";
  export let textColor = "#ffffff";
  export let hoverColor = "#9c9c9c";
  export let hasClicked = false;

  /** Change the style **/
  function overStyle(object) {
    object.style.backgroundColor = hoverColor;
    object.style.color = "#ffffff";
    // Change some other properties ...
  }

  /** Restores the style **/
  function outStyle(object) {
    if(!hasClicked) {
      object.style.backgroundColor = tagColor;
      object.style.color = textColor;
    }
    // Restore the rest ...
  }

  function onClick(object) {
    hasClicked = !hasClicked;
    if (object.style.backgroundColor === clickColor) {
      object.style.backgroundColor = tagColor;
    } else {
      object.style.backgroundColor = clickColor;
    }
  }
</script>

<button 
  id="tag-pill" 
  class={"tag-pill"}
  on:mouseover={`${useHover ? overStyle(this) : ""}`} 
  on:mouseout={`${useHover ? outStyle(this) : ""}`}
  on:click={`${useHover ? onClick(this) : ""}`}
  style={`
    color: ${textColor};
    background-color: ${tagColor}; 
    border-radius: ${20 + size * 0.4}px;
    margin: 0px ${2 + size * 0.4}px;
    padding: 0px ${6 + size * 0.2}px;
  `}
>
  {#if variant === "Expert Tag"}
    <div 
      class="star-icon" 
      id="star-icon"
      style={`
        color: ${textColor};
        font-size: ${12 + size * 0.4}px;
        margin: 0px ${3 + size * 0.1}px;
      `}
    >★</div>
    <p 
      class="tag-pill-text" 
      style={`
        font-size: ${13 + size * 0.5}px;
        margin-left: ${5 + size * 0.1}px;
        margin-right: ${5 + size * 0.1}px;
      `}
    >
      {label}
    </p>
    <div 
      class="star-icon" 
      id="star-icon"
      style={`
        font-size: ${12 + size * 0.4}px;
        margin: 0px ${3 + size * 0.1}px;
      `}
    >★</div>  
  {:else}    
    {#if variant === "Step Filter Tag"}
      <div 
        class={"filter-icon"} 
        style={`
          color: ${tagColor}; 
          filter: brightness(170%);
          margin: 0px ${3 + size * 0.1}px;
          font-size: ${13 + size * 0.4}px;
        `} 
        id="filter-icon"
      >
        ✔
      </div>
    {/if}
    <p 
      class="tag-pill-text" 
      style={`
        font-size: ${13 + size * 0.5}px;
        margin-left: ${5 + size * 0.1}px;
        margin-right: ${5 + size * 0.1}px;  
      `}
    >
      {label}
    </p>
    {#if variant === "Closeable Tag"}
      <div 
        class={"close-icon"} 
        style={`
          color: ${tagColor};
          background-color: ${textColor};
          font-size: ${18 + size * 0.5}px;
          height: ${18 + size * 0.5}px;
          width: ${18 + size * 0.5}px;
          line-height: ${(18 + size * 0.41)}px;
        `} 
        id="close-icon">
        ×
      </div>
    {/if}
  {/if}
</button>

<style>
  .tag-pill {
    border: none;
    font-weight:400;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    line-height: 0px;
  }
  div.star-icon {
    font-weight: bold;
    border: none;
  }
  div.filter-icon {
    font-weight: bold;
  }
  div.close-icon {
    cursor:pointer;
    font-weight: bold;
    display:block;
    border-radius: 50%;
    border: none;
    text-align: center;
    align-items: center;
  }
  div.close-icon:hover {
    color: #ffffff;
    background-color: red;      
  }
</style>
