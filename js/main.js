function toast ({
  title = "",
  message = "",
  type = "info",
  duration = 3000
}) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div'); // tao the div cha

    // Auto remove toast
    const autoRemoveId = setTimeout (function () {
      main.removeChild(toast);
    }, duration + 1000);

    //Remove by clicked close-icon
    toast.onclick = function (e) {
      main.removeChild(toast);
      clearTimeout(autoRemoveId);
    }

    const icons = {
      success: 'fa-solid fa-check',
      info: 'fa-solid fa-exclamation',
      warning: 'fa-solid fa-triangle-exclamation',
      error: 'fa-solid fa-circle-exclamation'
    };

    const icon = icons[type];

    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast-${type}`); //add class & class modifier
    toast.style.animation = `slideInLeft ease-in 0.4s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = //truyen noi dung vao html
          `
          <div class="toast-icon">
            <i class="${icon}"></i>
          </div>

          <div class="toast-body">
            <h3 class="toast-title">${title}</h3>
            <p class="toast-msg">${message}</p>
          </div>

          <div class="toast-close">
            <i class="fa-sharp fa-regular fa-circle-xmark"></i>
          </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
  toast({
    title: 'Success!',
    message: 'Signed up successfully in F8!',
    type: 'success',
    duration: 5000
  });
}

function showErrorToast() {
  toast({
    title: 'Fail!',
    message: 'Error, please contact to admin!',
    type: 'error',
    duration: 5000
  });
}
