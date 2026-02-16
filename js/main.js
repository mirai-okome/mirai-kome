// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-title, .product-intro-content, .tip-card, .benefit-card, .feature-box');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
// ヘッダーのスクロール時の影調整
let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop;
});
// 画像の遅延読み込み
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}
// CTAボタンのクリック追跡（オプション）
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA Button clicked:', button.textContent);
        // ここにアナリティクス追跡コードを追加可能
    });
});
// ページ読み込み完了時の処理
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // ヒーローセクションのアニメーション
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
});
// フェードインアップアニメーションのキーフレームを追加
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);


* ===================================
   カラーパレット
   =================================== */
:root {
    /* メインカラー */
    --main-color: #4DBABF;
    --sub-color-1: #8FD6D2;
    --sub-color-2: #2F8F94;
    
    /* ベースカラー */
    --base-color: #F5F2EB;
    
    /* CTAカラー */
    --cta-rice: #CFAE70;
    --cta-salt: #C97A3A;
    --cta-text: #F9F9F6;
    
    /* テキストカラー */
    --text-color: #333333;
    --light-bg: #f9f9f9;
    
    /* フォント */
    --font-main: 'Noto Sans JP', sans-serif;
    --font-accent: 'Zen Maru Gothic', sans-serif;
}
/* ===================================
   リセット & ベーススタイル
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: var(--font-main);
    color: var(--text-color);
    line-height: 1.8;
    background-color: #ffffff;
    overflow-x: hidden;
}
img {
    max-width: 100%;
    height: auto;
    display: block;
}
a {
    text-decoration: none;
    color: inherit;
}
/* ===================================
   コンテナ
   =================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
/* ===================================
   ヘッダー
   =================================== */
.header {
    background-color: #ffffff;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
}
.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo img {
    height: 50px;
    width: auto;
}
/* ===================================
   CTAボタン
   =================================== */
.cta-button {
    display: inline-block;
    background: linear-gradient(135deg, var(--cta-rice), #d4b87a);
    color: var(--cta-text);
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(207, 174, 112, 0.3);
    text-align: center;
}
.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(207, 174, 112, 0.4);
}
.cta-button-header {
    padding: 12px 28px;
    font-size: 15px;
