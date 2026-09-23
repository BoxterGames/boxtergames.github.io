const translations = {
    en: {
        "nav-games": "Games",
        "nav-support": "Support",
        "nav-privacy": "Privacy",
        "home-title": "Made at Boxter",
        "home-desc": "Compact mobile games, each with its own mood. Drag the lineup, tap a cover, and open that project's page — stores, modes, and screenshots live there.",
        "solitaire-title": "Solitaire Harmony",
        "solitaire-tag": "5 classic solitaire modes in one app",
        "solitaire-desc": "5 classic solitaire games in one app, perfect for relaxing and brain training.",
        "tictactoe-title": "Tic-Tac-Toe",
        "tictactoe-tag": "Networked matches — coming soon",
        "tictactoe-desc": "A networked Tic-Tac-Toe game for endless fun — stay tuned!",
        "status-live": "Live",
        "status-soon": "Soon",
        "slide-open": "Open project",
        "slide-preview": "View page",
        "carousel-prev": "Previous project",
        "carousel-next": "Next project",
        "back-home": "All games",
        "modes-title": "Modes",
        "shots-title": "Screenshots",
        "get-title": "Get the game",
        "app-store-title": "Download on the App Store",
        "google-play-title": "Download on Google Play",
        "support-title": "Support",
        "support-desc": "Need help? Reach out to us!",
        "privacy-title": "Privacy Policy",
        "privacy-desc": "We respect your privacy. Solitaire Harmony uses Unity Analytics to collect anonymized data (e.g., gameplay events, device info) to improve the game. This data is stored for 30 days and is not linked to your identity. Your game progress is saved locally on your device, and we do not collect any personal information.",
        "form-name": "Your Name",
        "form-email": "Your Email",
        "form-message": "Your Message",
        "submit-btn": "Send",
        "form-sending": "Sending...",
        "form-success": "Message sent successfully!",
        "form-error": "Error sending message. Please try again.",
        "form-validation-error": "Message must be at least 10 characters.",
        "thank-you-title": "Thank You!",
        "thank-you-desc": "We've received your message and will get back to you soon. Thanks for reaching out!",
        "return-btn": "Close",
        "footer-copy": "© 2026 BoxterGames. All rights reserved."
    },
    ru: {
        "nav-games": "Игры",
        "nav-support": "Поддержка",
        "nav-privacy": "Приватность",
        "home-title": "Сделано в Boxter",
        "home-desc": "Небольшие мобильные игры — у каждой свой характер. Листай линейку, нажми на обложку и открой страницу проекта: сторы, режимы и скриншоты там.",
        "solitaire-title": "Solitaire Harmony",
        "solitaire-tag": "5 классических пасьянсов в одном приложении",
        "solitaire-desc": "5 классических пасьянсов в одном приложении, идеально для отдыха и тренировки мозга.",
        "tictactoe-title": "Крестики-нолики",
        "tictactoe-tag": "Сетевые матчи — скоро",
        "tictactoe-desc": "Сетевая игра в крестики-нолики для бесконечного веселья — следите за новостями!",
        "status-live": "В сторах",
        "status-soon": "Скоро",
        "slide-open": "Открыть проект",
        "slide-preview": "Смотреть страницу",
        "carousel-prev": "Предыдущий проект",
        "carousel-next": "Следующий проект",
        "back-home": "Все игры",
        "modes-title": "Режимы",
        "shots-title": "Скриншоты",
        "get-title": "Скачать",
        "app-store-title": "Скачать в App Store",
        "google-play-title": "Скачать в Google Play",
        "support-title": "Поддержка",
        "support-desc": "Нужна помощь? Свяжитесь с нами!",
        "privacy-title": "Политика конфиденциальности",
        "privacy-desc": "Мы уважаем вашу приватность. Solitaire Harmony использует Unity Analytics для сбора анонимных данных (например, игровые события, информация об устройстве) для улучшения игры. Эти данные хранятся 30 дней и не привязаны к вашей личности. Прогресс игры сохраняется локально на вашем устройстве, и мы не собираем личную информацию.",
        "form-name": "Ваше имя",
        "form-email": "Ваш email",
        "form-message": "Сообщение",
        "submit-btn": "Отправить",
        "form-sending": "Отправка...",
        "form-success": "Сообщение успешно отправлено!",
        "form-error": "Ошибка при отправке. Попробуйте снова.",
        "form-validation-error": "Сообщение должно содержать минимум 10 символов.",
        "thank-you-title": "Спасибо!",
        "thank-you-desc": "Мы получили ваше сообщение и скоро свяжемся с вами. Спасибо за обращение!",
        "return-btn": "Закрыть",
        "footer-copy": "© 2026 BoxterGames. Все права защищены."
    }
};

let currentLang = localStorage.getItem("language") || "en";

function t(key) {
    return translations[currentLang][key] || translations.en[key] || key;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[currentLang][key]) {
            el.setAttribute("placeholder", translations[currentLang][key]);
        }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        if (translations[currentLang][key]) {
            el.setAttribute("aria-label", translations[currentLang][key]);
        }
    });
    const appStoreBtn = document.querySelector('.store-btn[href*="apps.apple.com"]');
    const googlePlayBtn = document.querySelector('.store-btn[href*="play.google.com"]');
    if (appStoreBtn) appStoreBtn.setAttribute("title", t("app-store-title"));
    if (googlePlayBtn) googlePlayBtn.setAttribute("title", t("google-play-title"));
}

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ru" : "en";
    localStorage.setItem("language", currentLang);
    applyTranslations();
}

function openModal(src) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("image-modal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

function openThankYouModal() {
    const modal = document.getElementById("thank-you-modal");
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeThankYouModal() {
    const modal = document.getElementById("thank-you-modal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

function initCarousel() {
    const viewport = document.querySelector(".carousel-viewport");
    if (!viewport) return;

    const slides = [...viewport.querySelectorAll(".carousel-slide")];
    const dotsWrap = document.querySelector(".carousel-dots");
    const prev = document.querySelector(".carousel-arrow.prev");
    const next = document.querySelector(".carousel-arrow.next");
    let index = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Go to project ${i + 1}`);
        dot.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    const dots = [...dotsWrap.querySelectorAll("button")];

    function setActive(nextIndex) {
        index = nextIndex;
        slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    }

    let animFrame = 0;

    function animateScrollTo(targetLeft, duration) {
        cancelAnimationFrame(animFrame);
        const start = viewport.scrollLeft;
        const delta = targetLeft - start;
        if (Math.abs(delta) < 1) return;
        const startTime = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 3);

        function frame(now) {
            const t = Math.min(1, (now - startTime) / duration);
            viewport.scrollLeft = start + delta * ease(t);
            if (t < 1) animFrame = requestAnimationFrame(frame);
        }

        animFrame = requestAnimationFrame(frame);
    }

    function goTo(i, instant) {
        const clamped = Math.max(0, Math.min(slides.length - 1, i));
        const slide = slides[clamped];
        const left = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
        if (instant) {
            cancelAnimationFrame(animFrame);
            viewport.scrollLeft = left;
        } else {
            animateScrollTo(left, 620);
        }
        setActive(clamped);
    }

    function nearestIndex() {
        const center = viewport.scrollLeft + viewport.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const dist = Math.abs(slideCenter - center);
            if (dist < bestDist) {
                bestDist = dist;
                best = i;
            }
        });
        return best;
    }

    viewport.addEventListener("scroll", () => setActive(nearestIndex()));
    viewport.addEventListener("dragstart", (e) => e.preventDefault());

    let pointerId = null;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    let suppressClick = false;

    viewport.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        pointerId = e.pointerId;
        startX = e.clientX;
        startScroll = viewport.scrollLeft;
        dragging = false;
        cancelAnimationFrame(animFrame);
    });

    viewport.addEventListener("pointermove", (e) => {
        if (pointerId !== e.pointerId) return;
        const dx = e.clientX - startX;
        if (!dragging) {
            if (Math.abs(dx) < 14) return;
            dragging = true;
            suppressClick = true;
            viewport.classList.add("is-dragging");
            viewport.setPointerCapture(e.pointerId);
        }
        viewport.scrollLeft = startScroll - dx;
    });

    function endPointer(e) {
        if (pointerId !== e.pointerId) return;
        pointerId = null;
        viewport.classList.remove("is-dragging");
        if (dragging) goTo(nearestIndex());
        dragging = false;
    }

    viewport.addEventListener("pointerup", endPointer);
    viewport.addEventListener("pointercancel", endPointer);
    viewport.addEventListener("click", (e) => {
        if (!suppressClick) return;
        e.preventDefault();
        e.stopPropagation();
        suppressClick = false;
    }, true);

    prev?.addEventListener("click", () => goTo(index - 1));
    next?.addEventListener("click", () => goTo(index + 1));

    document.addEventListener("keydown", (e) => {
        if (e.target.closest("input, textarea")) return;
        if (e.key === "ArrowLeft") goTo(index - 1);
        if (e.key === "ArrowRight") goTo(index + 1);
    });

    goTo(0, true);
}

function initForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const formMessage = document.getElementById("form-message");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const message = form.querySelector('textarea[name="message"]').value;
        if (message.length < 10) {
            formMessage.textContent = t("form-validation-error");
            formMessage.className = "form-message error";
            return;
        }

        submitBtn.disabled = true;
        formMessage.textContent = t("form-sending");
        formMessage.className = "form-message";

        try {
            const response = await fetch(form.getAttribute("action"), {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (!response.ok) throw new Error("Failed to send message");
            formMessage.textContent = t("form-success");
            formMessage.className = "form-message success";
            form.reset();
            openThankYouModal();
        } catch (error) {
            formMessage.textContent = t("form-error");
            formMessage.className = "form-message error";
        } finally {
            submitBtn.disabled = false;
        }
    });
}

function initModal() {
    const imageModal = document.getElementById("image-modal");
    imageModal?.addEventListener("click", (event) => {
        if (event.target === imageModal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
            closeThankYouModal();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    initCarousel();
    initForm();
    initModal();
});
