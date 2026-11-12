document.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('imobi-saved') || '[]');
  document.querySelectorAll('[data-property]').forEach((button) => {
    const id = button.dataset.property;
    const update = () => button.classList.toggle('active', saved.includes(id));
    update();
    button.addEventListener('click', () => {
      const index = saved.indexOf(id);
      if (index >= 0) saved.splice(index, 1); else saved.push(id);
      localStorage.setItem('imobi-saved', JSON.stringify(saved));
      update();
    });
  });

  const galleryMain = document.querySelector('[data-gallery-main]');
  document.querySelectorAll('[data-gallery-thumb]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      if (galleryMain) galleryMain.src = thumb.src;
      document.querySelectorAll('[data-gallery-thumb]').forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  document.querySelectorAll('[data-search-form]').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'buscar-imoveis.html';
  }));

  const chatForm = document.querySelector('[data-chat-form]');
  if (chatForm) chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = chatForm.querySelector('input');
    if (!input.value.trim()) return;
    const message = document.createElement('div');
    message.className = 'message mine';
    message.innerHTML = `${input.value.trim()}<time>agora</time>`;
    document.querySelector('.chat-body').appendChild(message);
    input.value = '';
  });

  document.querySelectorAll('[data-demo-alert]').forEach((button) => button.addEventListener('click', () => {
    const text = button.dataset.demoAlert || 'Pronto! A ação foi registrada nesta demonstração.';
    window.alert(text);
  }));
});
