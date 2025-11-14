// Example Coin JavaScript - Optimized and Bug-Free Version

// Main application object with organized methods
const ExampleCoin = {
    // Application state
    state: {
        userHasBeenWarned: false,
        clickCount: 0,
        currentMoonPhase: "Definitely Going to Moon Soon™",
        activeTooltip: null,
        activeModal: null,
        statsInterval: null,
        messageInterval: null,
        konamiCode: [],
        isInitialized: false
    },

    // Configuration
    config: {
        konamiSequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'],
        tooltipDuration: 3000,
        statInterval: 5000,
        messageInterval: 60000
    },

    // Initialize the application
    init() {
        if (this.state.isInitialized) return;
        
        try {
            this.logStartupMessages();
            this.createMockChart();
            this.addSarcasticInteractions();
            this.showRandomFakeStatistics();
            this.setupKeyboardShortcuts();
            this.addAnimationStyles();
            this.state.isInitialized = true;
        } catch (error) {
            console.error('Failed to initialize Example Coin:', error);
        }
    },

    // Startup console messages
    logStartupMessages() {
        console.log("🚀 Example Coin website loaded successfully!");
        console.log("📊 Tracking absolutely nothing important...");
        console.log("💰 Wallet connection status: Definitely not implemented");
        
        // Debug banner
        console.log(`
 ╔══════════════════════════════════════╗
 ║          EXAMPLE COIN DEBUG          ║
 ║                                      ║
 ║  If you're reading this, you're      ║
 ║  probably more qualified than our    ║
 ║  entire development team.            ║
 ║                                      ║
 ║  Current moon status: Still waiting  ║
 ║  Lambo status: Still dreaming        ║
 ║  Regret level: Moderate to severe    ║
 ╚══════════════════════════════════════╝
        `);
    },

    // Optimized chart creation with error handling and retina support
    createMockChart() {
        const canvas = document.getElementById('tokenChart');
        if (!canvas || !canvas.getContext) {
            console.warn('Canvas not supported or not found');
            return;
        }

        try {
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            
            // Set canvas size accounting for device pixel ratio
            const canvasWidth = 300;
            const canvasHeight = 300;
            canvas.width = canvasWidth * dpr;
            canvas.height = canvasHeight * dpr;
            canvas.style.width = canvasWidth + 'px';
            canvas.style.height = canvasHeight + 'px';
            ctx.scale(dpr, dpr);

            const centerX = canvasWidth / 2;
            const centerY = canvasHeight / 2;
            const radius = 120;

            // Chart data
            const data = [
                { label: "Liquidity", value: 69, color: "#ff6b35" },
                { label: "Marketing", value: 20, color: "#ffd23f" },
                { label: "Team", value: 10, color: "#004e89" },
                { label: "Charity", value: 1, color: "#28a745" }
            ];

            let currentAngle = -Math.PI / 2;
            ctx.imageSmoothingEnabled = true;

            // Draw slices
            data.forEach(slice => {
                const sliceAngle = (slice.value / 100) * 2 * Math.PI;

                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = slice.color;
                ctx.fill();
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 3;
                ctx.stroke();

                currentAngle += sliceAngle;
            });

            // Center text
            ctx.fillStyle = '#1a1a1a';
            ctx.font = 'bold 16px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('VERY', centerX, centerY - 10);
            ctx.fillText('OFFICIAL', centerX, centerY + 10);
        } catch (error) {
            console.error('Chart creation failed:', error);
        }
    },

    // Add interactive elements with proper event delegation
    addSarcasticInteractions() {
        this.setupBuyButton();
        this.setupWhitepaperButton();
        this.setupTeamMembers();
        this.setupSocialLinks();
        this.setupRoadmapItems();
    },

    setupBuyButton() {
        const buyButton = document.querySelector('.btn.primary');
        if (!buyButton) return;

        buyButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.state.clickCount++;

            const responses = [
                "Hold on, let me check if we actually have a token yet... 🤔",
                "Error 404: Financial responsibility not found",
                "Are you sure? Like, really sure? This is your money we're talking about.",
                "Redirecting to our definitely-not-suspicious exchange partner...",
                "Warning: May cause sudden urge to post rocket emojis on social media",
                "Token purchase failed successfully! Please try again never.",
                "Connecting to MetaMask... Just kidding, we don't have integration yet.",
                "HODL achieved! (You're now holding nothing, but with confidence!)"
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            this.showTooltip(buyButton, randomResponse);
            this.addButtonFeedback(buyButton);
        });
    },

    setupWhitepaperButton() {
        const whitepaperButton = document.querySelector('.btn.secondary');
        if (!whitepaperButton) return;

        whitepaperButton.addEventListener('click', (e) => {
            e.preventDefault();
            const content = this.generateMockWhitepaper();
            this.showModal('Our Totally Legitimate Whitepaper', content);
        });
    },

    setupTeamMembers() {
        const teamMembers = document.querySelectorAll('.team-member');
        const secrets = [
            "Real name: Kyle from Ohio. Favorite food: Ramen noodles.",
            "Actually a collective of 3 cats in a trench coat.",
            "Credentials: Watched a 30-minute YouTube video about blockchain."
        ];

        teamMembers.forEach((member, index) => {
            member.addEventListener('click', () => {
                const secret = secrets[index] || "Error: Backstory not found";
                this.showTooltip(member, secret);
            });
        });
    },

    setupSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        const messages = {
            'Twitter (We Post Daily)': "Redirecting to @ExampleCoin... Wait, that handle was taken by someone else.",
            'Discord (Echo Chamber)': "Joining Discord server... Current member count: 3 (including bots)",
            'Telegram (Pump Group)': "Welcome to our Telegram! Please ignore the previous 47 failed projects.",
            'YouTube (No Content Yet)': "Our YouTube channel is coming soon! (Definition of 'soon' may vary)"
        };

        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = link.querySelector('span:last-child').textContent;
                const message = messages[platform] || "Link leads to existential void";
                this.showTooltip(link, message);
            });
        });
    },

    setupRoadmapItems() {
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        const statuses = [
            "Status: ✅ Completed (somehow)",
            "Status: 🚧 In progress (maybe)",
            "Status: 📅 Scheduled (optimistically)",
            "Status: 🌙 Moon dependent",
            "Status: 🤷‍♂️ Probably not happening"
        ];

        roadmapItems.forEach(item => {
            item.addEventListener('click', () => {
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                this.showTooltip(item, randomStatus);
            });
        });
    },

    // Utility: Add button feedback with performance optimization
    addButtonFeedback(button) {
        button.style.transform = 'scale(0.95)';
        requestAnimationFrame(() => {
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });
    },

    // Optimized tooltip system with better positioning
    showTooltip(element, message) {
        // Remove existing tooltip efficiently
        if (this.state.activeTooltip) {
            this.state.activeTooltip.remove();
            this.state.activeTooltip = null;
        }

        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = message;
        
        // Optimized inline styles
        Object.assign(tooltip.style, {
            position: 'absolute',
            background: '#1a1a1a',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '14px',
            zIndex: '10000',
            maxWidth: '300px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
            pointerEvents: 'none',
            opacity: '0',
            transform: 'translateY(10px)',
            transition: 'all 0.3s ease',
            whiteSpace: 'pre-wrap',
            willChange: 'transform, opacity'
        });

        document.body.appendChild(tooltip);
        this.state.activeTooltip = tooltip;

        // Position tooltip with viewport boundary detection
        this.positionTooltip(tooltip, element);

        // Animate in using requestAnimationFrame
        requestAnimationFrame(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        });

        // Auto-remove with cleanup
        setTimeout(() => {
            if (tooltip && tooltip.parentNode) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (tooltip && tooltip.parentNode) {
                        tooltip.remove();
                        if (this.state.activeTooltip === tooltip) {
                            this.state.activeTooltip = null;
                        }
                    }
                }, 300);
            }
        }, this.config.tooltipDuration);
    },

    positionTooltip(tooltip, element) {
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 10;

        // Viewport boundary checks with margin
        const margin = 10;
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (left < margin) left = margin;
        if (left + tooltipRect.width > vw - margin) {
            left = vw - tooltipRect.width - margin;
        }
        if (top < margin) {
            top = rect.bottom + 10; // Show below if no room above
        }

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    },

    // Enhanced modal system with accessibility
    showModal(title, content) {
        // Remove existing modal
        if (this.state.activeModal) {
            this.state.activeModal.remove();
            this.state.activeModal = null;
        }

        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'modal-title');
        
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modal-title">${title}</h3>
                    <button class="modal-close" type="button" aria-label="Close modal">&times;</button>
                </div>
                <div class="modal-body">${content}</div>
            </div>
        `;

        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '10001',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        this.addModalStyles();
        document.body.appendChild(modal);
        this.state.activeModal = modal;

        // Setup close handlers with proper cleanup
        const closeBtn = modal.querySelector('.modal-close');
        const backdrop = modal.querySelector('.modal-backdrop');

        const closeModal = () => {
            modal.remove();
            this.state.activeModal = null;
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = ''; // Restore scroll
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);

        // Prevent body scroll and focus management
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    },

    addModalStyles() {
        if (document.querySelector('#modal-styles')) return;

        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                backdrop-filter: blur(5px);
            }
            .modal-content {
                position: relative;
                background: white;
                border-radius: 12px;
                max-width: 600px;
                max-height: 80vh;
                margin: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                overflow: hidden;
                animation: modalSlideIn 0.3s ease-out;
            }
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: scale(0.9) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
            .modal-header {
                background: linear-gradient(135deg, #ff6b35, #ffd23f);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                font-size: 1.25rem;
            }
            .modal-close {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            .modal-close:hover,
            .modal-close:focus {
                background: rgba(255,255,255,0.2);
                outline: none;
            }
            .modal-body {
                padding: 20px;
                overflow-y: auto;
                max-height: 60vh;
            }
        `;
        document.head.appendChild(style);
    },

    // Generate whitepaper content
    generateMockWhitepaper() {
        return `
            <div style="text-align: left; line-height: 1.6;">
                <h3>Example Coin: A Revolutionary Approach to Being Unoriginal</h3>
                
                <h4>Abstract</h4>
                <p>This whitepaper outlines our groundbreaking strategy of doing exactly what everyone else has done, but with more honesty about it.</p>
                
                <h4>Technology Stack</h4>
                <ul>
                    <li>Blockchain: The one everyone else uses</li>
                    <li>Smart Contracts: Copy-pasted from Stack Overflow</li>
                    <li>Consensus Mechanism: Democracy (whoever shouts loudest)</li>
                </ul>
                
                <h4>Tokenomics (The Numbers We Made Up)</h4>
                <p>Our token distribution follows the time-tested formula of "whatever seems reasonable" with a dash of "numbers that add up to 100%".</p>
                
                <h4>Roadmap to Success</h4>
                <ol>
                    <li>Phase 1: Create website ✅</li>
                    <li>Phase 2: ??? </li>
                    <li>Phase 3: Profit</li>
                </ol>
                
                <h4>Risk Disclosure</h4>
                <p><em>All investments carry risk. Our investments carry extra risk because we're making this up as we go. Past performance does not indicate future results, mostly because we don't have past performance.</em></p>
                
                <h4>Team Credentials</h4>
                <p>Our team has a combined total of 47 minutes of blockchain experience and unlimited enthusiasm for financial freedom (ours, not necessarily yours).</p>
            </div>
        `;
    },

    // Floating statistics with performance optimization
    showRandomFakeStatistics() {
        const stats = [
            { label: "People who understand our project", value: () => Math.floor(Math.random() * 5) },
            { label: "Hours until moon", value: () => Math.floor(Math.random() * 8760) },
            { label: "Lambos ordered", value: () => Math.floor(Math.random() * 3) },
            { label: "Regret percentage", value: () => Math.floor(Math.random() * 100) }
        ];

        this.state.statsInterval = setInterval(() => {
            if (Math.random() < 0.3 && document.visibilityState === 'visible') {
                const stat = stats[Math.floor(Math.random() * stats.length)];
                this.createFloatingStat(stat.label, stat.value());
            }
        }, this.config.statInterval);

        // Pause when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(this.state.statsInterval);
            } else {
                this.showRandomFakeStatistics();
            }
        });
    },

    createFloatingStat(label, value) {
        const stat = document.createElement('div');
        stat.className = 'floating-stat';
        stat.innerHTML = `<strong>${value}</strong><br><small>${label}</small>`;
        
        Object.assign(stat.style, {
            position: 'fixed',
            top: `${Math.random() * 70 + 15}%`,
            right: '-200px',
            background: 'linear-gradient(135deg, #ff6b35, #ffd23f)',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '12px',
            textAlign: 'center',
            zIndex: '9999',
            animation: 'slideAndFade 6s ease-out forwards',
            boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            willChange: 'transform'
        });

        document.body.appendChild(stat);

        // Cleanup with animation end detection
        setTimeout(() => {
            if (stat && stat.parentNode) {
                stat.remove();
            }
        }, 6000);
    },

    // Keyboard shortcuts and easter eggs
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            this.handleKonamiCode(e);
        });

        // Setup console messages
        this.state.messageInterval = setInterval(() => {
            if (Math.random() < 0.1 && document.visibilityState === 'visible') {
                const messages = [
                    "💭 Remember: This is financial advice (it's not)",
                    "🎯 Pro tip: Investing in memecoins is basically gambling with extra steps",
                    "📈 Current market sentiment: Cautiously delusional",
                    "🤔 Did you know? 73% of statistics are made up on the spot",
                    "🚀 Moon mission status: Still on the launch pad"
                ];
                console.log(messages[Math.floor(Math.random() * messages.length)]);
            }
        }, this.config.messageInterval);
    },

    handleKonamiCode(e) {
        this.state.konamiCode.push(e.code);
        this.state.konamiCode = this.state.konamiCode.slice(-10);

        if (this.state.konamiCode.join(',') === this.config.konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            document.body.style.transition = 'filter 0.5s ease';
            this.showTooltip(document.body, "🎮 Konami Code activated! Reality.exe has stopped working.");

            setTimeout(() => {
                document.body.style.filter = '';
            }, 5000);
        }
    },

    // Add required CSS animations with optimization
    addAnimationStyles() {
        if (document.querySelector('#floating-animations')) return;

        const style = document.createElement('style');
        style.id = 'floating-animations';
        style.textContent = `
            @keyframes slideAndFade {
                0% {
                    right: -200px;
                    opacity: 0;
                    transform: translateX(0);
                }
                15% {
                    right: 20px;
                    opacity: 1;
                    transform: translateX(0);
                }
                85% {
                    right: 20px;
                    opacity: 1;
                    transform: translateX(0);
                }
                100% {
                    right: -200px;
                    opacity: 0;
                    transform: translateX(0);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .floating-stat {
                    animation: none !important;
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    },

    // Cleanup method for page unload
    cleanup() {
        if (this.state.statsInterval) {
            clearInterval(this.state.statsInterval);
            this.state.statsInterval = null;
        }
        if (this.state.messageInterval) {
            clearInterval(this.state.messageInterval);
            this.state.messageInterval = null;
        }
        if (this.state.activeTooltip) {
            this.state.activeTooltip.remove();
            this.state.activeTooltip = null;
        }
        if (this.state.activeModal) {
            this.state.activeModal.remove();
            this.state.activeModal = null;
        }
        document.body.style.overflow = '';
    }
};

// Optimized initialization with error handling
function initializeExampleCoin() {
    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                ExampleCoin.init();
            });
        } else {
            // DOM already loaded
            ExampleCoin.init();
        }
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    ExampleCoin.cleanup();
});

// Performance monitoring (development only)
if (console.time && console.timeEnd) {
    console.time('ExampleCoin Load Time');
    initializeExampleCoin();
    window.addEventListener('load', () => {
        console.timeEnd('ExampleCoin Load Time');
    });
} else {
    initializeExampleCoin();
}