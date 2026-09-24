const form = document.querySelector('#login-form');
const feedback = document.querySelector('#feedback');

function painelParaEmail(email) {
  const endereco = email.trim().toLowerCase();

  if (endereco.endsWith('@adm')) return 'adm.html';
  if (endereco.endsWith('@corretor')) return 'corretor.html';

  return null;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    feedback.className = 'feedback';
    feedback.textContent = 'Preencha todos os campos corretamente.';
    form.reportValidity();
    return;
  }

  const destino = painelParaEmail(form.email.value);
  if (!destino) {
    feedback.className = 'feedback';
    feedback.textContent = 'Use um e-mail terminado em @adm ou @corretor para acessar o painel correto.';
    return;
  }

  feedback.className = 'feedback success';
  feedback.textContent = 'Acesso validado. Redirecionando para o seu painel...';
  window.location.href = destino;
});
