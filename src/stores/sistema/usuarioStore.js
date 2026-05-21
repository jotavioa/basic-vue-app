import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUsuarioStore = defineStore("usuario", () => {
  const usuario = ref({});
  const lista = ref([]);

  const filtro = ref("");

  const loadingbusca = ref(false);
  const loadingmodal = ref(false);

  const busca = computed(() => {
    return lista.value.filter((item) =>
      item.nome.includes(filtro.value),
    );
  });

  function carregar() {
    console.warn("TODO: Implantar a busca na API");

    loadingbusca.value = true;
    setTimeout(() => {
      lista.value = [
        { codigo: 1, nome: "Teste 1" },
        { codigo: 2, nome: "Teste 2" },
        { codigo: 3, nome: "Teste 3" },
      ];
      loadingbusca.value = false;
    }, 1000);
  }

  function buscarPorCodigo(codigo) {
    loadingmodal.value = true;

    console.warn("TODO: Implantar a busca por código na API");
    usuario.value = lista.value.find((item) => item.codigo === codigo);

    loadingmodal.value = false;
  }

  function limpar() {
    usuario.value = {};
    filtro.value = "";
  }

  function salvar() {
    console.warn("TODO: Implantar a Insert/Update na API");
  }


  return {
    usuario,
    lista,
    filtro,
    loadingbusca,
    loadingmodal,
    busca,
    carregar,
    buscarPorCodigo,
    limpar,
    salvar
  };
});
