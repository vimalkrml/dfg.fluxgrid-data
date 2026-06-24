(function () {
    var t = localStorage.getItem('fg-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
})();

function toggleTheme() {
    var html = document.documentElement;
    var dark = html.getAttribute('data-theme') === 'dark';
    var next = dark ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('fg-theme', next);
    renderThemeIcon();
}

function renderThemeIcon() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    var el = document.getElementById('theme-icon');
    if (!el) return;
    el.innerHTML = dark
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93-7.07-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>';
}

function switchTab(btn, id) {
    var group = btn.closest('.tab-group');
    group.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('c-bg-primary-500', 'c-text-white', 'c-border-primary-500'); b.classList.add('c-text-muted', 'c-border-base'); });
    group.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
    btn.classList.remove('c-text-muted', 'c-border-base');
    btn.classList.add('c-bg-primary-500', 'c-text-white', 'c-border-primary-500');
    document.getElementById(id).classList.add('active');
}

function copyCode(btn) {
    var pre = btn.closest('.code-wrap').querySelector('pre');
    navigator.clipboard.writeText(pre.innerText).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
}

function copyText(btn, text) {
    navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const apiWraps = document.querySelectorAll('.api-wrap');

    apiWraps.forEach(wrap => {
        wrap.addEventListener('scroll', function () {
            const scrollLeft = this.scrollLeft;
            const scrollWidth = this.scrollWidth;
            const clientWidth = this.clientWidth;

            if (scrollLeft + clientWidth >= scrollWidth - 5) {
                this.classList.add('scrolled-to-end');
            } else {
                this.classList.remove('scrolled-to-end');
            }
        });

        window.addEventListener('resize', function () {
            const scrollLeft = wrap.scrollLeft;
            const scrollWidth = wrap.scrollWidth;
            const clientWidth = wrap.clientWidth;

            if (scrollLeft + clientWidth >= scrollWidth - 5) {
                wrap.classList.add('scrolled-to-end');
            } else {
                wrap.classList.remove('scrolled-to-end');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    renderThemeIcon();
});

