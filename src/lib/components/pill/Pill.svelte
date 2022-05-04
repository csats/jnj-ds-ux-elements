<script>
  export let primary = false;
  export let hasIcon = false;
  export let label = "UPLOAD";

  /**
   * Button click handler
   */
  const onClick = () => {
		const element = document.getElementById("tagPill");
    if(element.classList.contains('pill-selected')) {
      element.classList.remove('pill-selected');
      element.classList.add('pill-deselected');
    } else {
      element.classList.remove('pill-deselected');
      element.classList.add('pill-selected');
    }
	}
</script>

<button id="tagPill" on:click={onClick} class="case-context-button pill-deselected" value="context_tag_NephrectomyType_1">Transperitoneal</button>

<style>
  .case-context-button {
    min-width: 0;
    padding: 6px 12px;
    font-weight: normal;
    margin: 2px 4px;
    box-shadow: none;
    margin: -2px -3px 0px -3px;
    cursor: pointer;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .case-context-button.pill-deselected:hover {
    background: var(--rgba_solidgray_16,#9c9c9c);
    color: #ffffff;
  }

  .case-context-button.pill-deselected, .case-context-button.pill-deselected:active {
    background: var(--rgba_solidgray_15,#e8e8e8);
    border: 1px solid #b9b9b9;
    color: #7d7d7d;
  }

  .case-context-button.pill-selected:hover {
    background: #346376;
    color: #ffffff;
  }
  .case-context-button.pill-selected, .case-context-button.pill-selected:active, .case-context-button.pill-selected:hover {
    background: #346376;
    border: 1px solid #346376;
    color: #ffffff;
  }
</style>
