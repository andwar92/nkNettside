function initAssignmentInputs() {
  const inputs = document.querySelectorAll('.autoExpand');
  const cap = 200;

  inputs.forEach(input => {
    function autosize() {
      input.style.height = 'auto';
      const newHeight = Math.min(input.scrollHeight, cap);
      input.style.height = newHeight + 'px';
      input.style.overflowY = input.scrollHeight > cap ? 'auto' : 'hidden';
    }

    autosize();
    input.addEventListener('input', autosize);
    input.addEventListener('paste', () => setTimeout(autosize, 0));
  });
}

document.addEventListener('DOMContentLoaded', initAssignmentInputs);