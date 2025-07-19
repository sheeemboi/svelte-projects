<script>
  import { Checkbox, Input, Label, Button } from "flowbite-svelte";
  import { Heading, P, Hr } from "flowbite-svelte";
  import {
    addItem,
    deleteItem,
    editItem,
    saveEdit,
    completeItem,
  } from "./lib/utils";

  let newText = $state("");
  let todos = $state([]);

  $inspect(todos);
</script>

<main class="w-md mx-auto outline-1 p-4 rounded-lg mt-16">
  <Heading tag="h1">To-Do List</Heading>
  <P>Made in <strong class="text-orange-600">Svelte</strong> + <strong class="text-blue-700">Flowbite</strong></P>
  <Hr class="my-4" />
  <div>
    {#each todos as todo (todo.id)}
      <div class="flex items-center py-2">
        <Checkbox
          disabled={todo.isDisabled}
          id={todo.id}
          onclick={() => completeItem(todo)}
        />
        {#if todo.isEditable}
          <Input
            type="text"
            bind:value={todo.text}
            onblur={(e) => saveEdit(todo, e)}
            class="mr-2"
          />
        {:else}
          <Label
            for={todo.id}
            class="flex-1 rounded-md p-2 mr-2 text-md  hover:bg-zinc-200 {todo.completed
              ? 'line-through'
              : ''}">{todo.text}</Label
          >
        {/if}
        <Button class="ml-auto mr-2" color="cyan" onclick={() => editItem(todo)}
          >{todo.isEditable ? "Cancel" : "Edit"}</Button
        >
        <Button
          color="rose"
          onclick={() => (todos = deleteItem(todos, todo.id))}>Delete</Button
        >
      </div>
    {/each}
  </div>
  <form
    onsubmit={(e) => {
      addItem(todos, newText, e);
      newText = "";
    }}
  >
    <Label for="to_do">Add what to do:</Label>
    <div class="flex gap-1">
      <Input
        type="text"
        id="to_do"
        placeholder="Buy eggs."
        required
        bind:value={newText}
      />
      <Button type="submit" color="gray">Add</Button>
    </div>
  </form>
</main>
