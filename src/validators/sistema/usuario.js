import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { ref } from "vue";

const userRef = ref({});

const obrigatorio = helpers.withMessage("Campo Obrigatório", required);

const rules = {
  nome: { obrigatorio },
};

function useValidator(user) {
  userRef.value = user;
  return useVuelidate(rules, userRef);
}

export default useValidator;
