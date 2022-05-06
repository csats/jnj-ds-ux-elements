<script>
  export let isExpertTag = false;
  export let hasFilterIcon = false;
  export let hasCloseIcon = false;
  export let label = "Static Tag";
  export let color = "primary";
</script>

<button id="tagPill" class={["case-context-button", color].join(" ")}>
  {#if isExpertTag}
    <div class="star-icon" id="star-icon">★</div>
      <p class="tag-pill-text">{label}</p>
    <div class="star-icon" id="star-icon">★</div>  
  {:else}    
    {#if hasFilterIcon}
      <div class={["filter-icon", `${color}-filter`].join(" ")} id="filter-icon">✔</div>
    {/if}
    <p class="tag-pill-text">{label}</p>
    {#if hasCloseIcon}
      <div class={["close-icon", `${color}-close`].join(" ")} id="close-icon">×</div>
    {/if}
  {/if}
</button>

<style>
  .case-context-button {
    border: none;
    font-weight:400;
    cursor: pointer;
    border-radius: 20px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px 2px;
    padding: 0px 6px;
    line-height: 0px;
  }
  .tag-pill-text {
    margin-left: 5px;
    margin-right: 5px;
  }
  div.star-icon {
    font-size: 12px;
    font-weight: bold;
    border: none;
    color: #ffffff;
    margin: 0px 3px;
  }
  div.filter-icon {
    font-size: 13px;
    font-weight: bold;
    width: 18px;
  }
  div.close-icon {
    cursor:pointer;
    font-size: 20px;
    font-weight: bold;
    display:block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: none;
    background-color: #ffffff;
    text-align: center;
    align-items: center;
    line-height: 17px;
  }
  div.close-icon:hover {
    color: #ffffff;
    background-color: red;      
  }
  .primary {
    background-color: #346376;
  }
  .secondary {
    background-color: #666666;
  }
  .tertiary {
    background-color: #fd7d00;
  }
  .quaternary {
    background-color: #e1bd6f;
  }
  .primary-close {
    color: #346376;
  }
  .secondary-close {
    color: #666666;
  }
  .tertiary-close {
    color: #fd7d00;
  }
  .quaternary-close {
    color: #e1bd6f;
  }
  .primary-filter {
    color: #346376;
    filter: brightness(170%);
  }
  .secondary-filter {
    color: #666666;
    filter: brightness(170%);
  }
  .tertiary-filter {
    color: #fd7d00;
    filter: brightness(170%);
  }
  .quaternary-filter {
    color: #e1bd6f;
    filter: brightness(170%);
  }
</style>
