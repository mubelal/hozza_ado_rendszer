<script>
  let newItem = "";
  let shoppingList = [];

  function addItem() {
    if (newItem.trim() !== "") {
      shoppingList = [...shoppingList, { 
        id: Date.now(), 
        name: newItem, 
        checked: false 
      }];
      newItem = "";
    }
  }

  function removeItem(id) {
    shoppingList = shoppingList.filter(item => item.id !== id);
  }

  function toggleItem(id) {
    shoppingList = shoppingList.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
  }
</script>

<main>
  <h1>Bevásárlólista</h1>

  <div>
    <input
      type="text"
      bind:value={newItem}
      placeholder="Add meg az új terméket"
    />
    <button on:click={addItem}>Hozzáadás</button>
  </div>

  {#if shoppingList.length > 0}
    <ul>
      {#each shoppingList as item (item.id)}
        <li>
          <input 
            type="checkbox" 
            checked={item.checked} 
            on:change={() => toggleItem(item.id)} 
          />
          <span class:checked={item.checked}>{item.name}</span>
          
          <button on:click={() => removeItem(item.id)}>Törlés</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>A lista üres!</p>
  {/if}
</main>


