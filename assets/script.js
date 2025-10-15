window.onload = function() {
  document.querySelector('h1').classList.add('fade-in');
  setTimeout(() => {
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
      setTimeout(() => btn.classList.add('show'), i * 150);
    });
  }, 500);
};

function redirectTo(page) {
  // Hiệu ứng khi nhấn nút
  const btns = document.querySelectorAll('.nav-btn');
  btns.forEach(btn => btn.disabled = true);
  event.target.style.transform = 'scale(0.95)';
  event.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
  setTimeout(() => {
    window.location.href = page;
  }, 250);
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    themeIcon.textContent = '🌙';
  }
}

// Lưu trạng thái theme vào localStorage
function saveTheme(dark) {
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Đọc trạng thái theme từ localStorage
function getSavedTheme() {
  return localStorage.getItem('theme') === 'dark';
}

// Khởi tạo theme
setTheme(getSavedTheme());

themeToggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-theme');
  setTheme(isDark);
  saveTheme(isDark);
});

// Onload animation
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.logo')?.classList.add('loaded');
    setTimeout(() => {
      document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        setTimeout(() => btn.classList.add('loaded'), i * 120);
      });
      setTimeout(() => {
        document.querySelector('.desc-block')?.classList.add('loaded');
        setTimeout(() => {
          document.querySelectorAll('.desc-tags span').forEach((tag, i) => {
            setTimeout(() => tag.classList.add('loaded'), i * 80);
          });
          setTimeout(() => {
            document.querySelector('.search-bar')?.classList.add('loaded');
            setTimeout(() => {
              document.querySelector('.catalog-title')?.classList.add('loaded');
            }, 200);
          }, 300);
        }, 200);
      }, 400);
    }, 200);
  }, 200);
});


