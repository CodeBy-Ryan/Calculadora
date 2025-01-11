// Variável para armazenar o conteúdo da tela da calculadora
let displayValue = ""; // Inicializa a variável com uma string vazia. Ela armazena o que é exibido no display.

// Função para atualizar o display da calculadora
function updateDisplay() {
  // Seleciona o elemento HTML com o id "display" onde o conteúdo será mostrado
  const display = document.getElementById("display");

  // Verifica se 'displayValue' está vazio. Se estiver, exibe "0", caso contrário, exibe o valor atual.
  display.textContent = displayValue || "0"; // Se 'displayValue' estiver vazio, exibe "0", caso contrário, mostra o valor armazenado.
}

// Função para adicionar um valor ao display
function appendValue(value) {
  // Adiciona o valor (número ou operador) à variável 'displayValue'
  displayValue += value;

  // Chama a função updateDisplay() para atualizar o conteúdo do display após a adição do valor
  updateDisplay();
}

// Função para limpar o display
function clearDisplay() {
  // Limpa a variável 'displayValue' (deixa ela vazia)
  displayValue = "";

  // Chama a função updateDisplay() para atualizar o display, mostrando "0"
  updateDisplay();
}

// Função para apagar o último caractere do display
function deleteLast() {
  // Remove o último caractere da variável 'displayValue'
  displayValue = displayValue.slice(0, -1);

  // Chama a função updateDisplay() para atualizar o display com a nova string
  updateDisplay();
}

// Função para calcular o resultado da expressão no display
function calculateResult() {
  try {
    // 'eval' executa a expressão matemática contida em 'displayValue'
    // Exemplo: se 'displayValue' for '2+2', 'eval' calculará '4'
    displayValue = eval(displayValue).toString(); // Converte o resultado de volta para string
  } catch {
    // Se ocorrer um erro (exemplo: expressão inválida), exibe "Erro" no display
    displayValue = "Erro";
  }

  // Atualiza o display com o resultado ou "Erro"
  updateDisplay();
}
