import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('sidemenu', () => {
  const visible = ref(false)

  function toggle(){
    console.log("Toggling menu visibility:", !visible.value);
    visible.value = !visible.value
  }

  return { visible, toggle }
})