// Website Translations
const translations = {
    en: {
        // Navigation
        nav: {
            features: "Features",
            commands: "Commands",
            pricing: "Pricing",
            support: "Support"
        },
        
        // Hero Section
        hero: {
            badge: "✨ Now with AI Integration",
            title: "The Ultimate Discord Bot",
            titleGradient: "for Your Community",
            description: "Powerful security, intelligent moderation, engaging leveling system, AI assistant, music player, and 50+ features to supercharge your Discord server.",
            highlight1: "🔥 AI-Powered Story System",
            highlight2: "🚀 Automated Template Creator",
            highlight3: "🎨 Image & GIF Generation",
            btnAdd: "➕ Add to Discord",
            btnLearn: "📖 Learn More",
            stat1Number: "50+",
            stat1Label: "Commands",
            stat2Number: "24/7",
            stat2Label: "Uptime",
            stat3Number: "100%",
            stat3Label: "Free"
        },
        
        // Features Section
        features: {
            title: "Powerful Features",
            subtitle: "Everything you need to manage and grow your Discord community",
            
            security: {
                title: "Advanced Security",
                desc: "Anti-raid protection, auto-moderation, verification system, and real-time threat detection to keep your server safe.",
                items: ["Anti-raid system", "Auto-moderation", "Member verification", "Invite tracking"]
            },
            
            leveling: {
                title: "Leveling System",
                desc: "Engage your community with XP, levels, achievements, leaderboards, and customizable rewards.",
                items: ["XP & Level system", "50+ Achievements", "Custom rewards", "Leaderboards"]
            },
            
            ai: {
                badge: "⭐ Popular",
                title: "AI Assistant",
                desc: "Powered by Google Gemini AI for intelligent conversations, image generation, and smart assistance.",
                items: ["Natural conversations", "Image generation", "Context awareness", "Multi-language"]
            },
            
            story: {
                badge: "🔥 Unique",
                title: "Interactive Story System",
                desc: "Create immersive role-playing stories with AI-powered narratives, multiple roles, and dynamic choices!",
                items: ["AI-generated stories", "Multiple character roles", "Dynamic story progression", "Turn-based gameplay", "Story templates"]
            },
            
            template: {
                badge: "🚀 Revolutionary",
                title: "AI Template Creator",
                desc: "Generate complete Discord server templates with AI! Channels, roles, permissions - all automated!",
                items: ["AI-powered generation", "Custom categories", "Auto role setup", "Permission templates", "One-click deployment"]
            },
            
            agent: {
                badge: "🆕 NEW",
                title: "AI Agent",
                desc: "Execute any Discord task with natural language! Just tell the AI what you want and it does it automatically.",
                items: ["Natural language commands", "Create channels & roles", "User moderation", "Complex automations", "Jail & verification systems"]
            },
            
            music: {
                title: "Music Player",
                desc: "High-quality music streaming with playlist support, audio effects, and queue management.",
                items: ["YouTube & Spotify", "Playlists", "Audio effects", "Queue system"]
            },
            
            welcome: {
                title: "Welcome System",
                desc: "Customizable welcome messages, auto-roles, and member tracking to greet new members.",
                items: ["Custom messages", "Auto-roles", "Welcome images", "DM welcome"]
            },
            
            language: {
                title: "Multi-Language",
                desc: "Full support for English and Greek with easy language switching per server.",
                items: ["English & Greek", "Per-server settings", "Easy switching", "Full translation"]
            },
            
            analytics: {
                title: "Analytics",
                desc: "Community insights, activity tracking, and detailed statistics to understand your server.",
                items: ["Activity tracking", "Member insights", "Command stats", "Growth metrics"]
            },
            
            games: {
                title: "Mini Games",
                desc: "Fun games including trivia, hangman, math challenges, and more to entertain your community.",
                items: ["Trivia games", "Hangman", "Math challenges", "Leaderboards"]
            },
            
            roles: {
                title: "Reaction Roles",
                desc: "Easy role management with reaction roles and custom role menus.",
                items: ["Reaction roles", "Custom menus", "Multiple roles", "Easy setup"]
            },
            
            tickets: {
                title: "Ticket System",
                desc: "Professional support ticket system with categories, transcripts, and staff management.",
                items: ["Multiple categories", "Auto transcripts", "Staff roles", "Custom messages"]
            },
            
            toxicity: {
                title: "Toxicity Filter",
                desc: "AI-powered content moderation to detect and filter toxic messages automatically.",
                items: ["AI detection", "Auto moderation", "Custom thresholds", "Logging"]
            }
        },
        
        // Commands Section
        commands: {
            title: "Popular Commands",
            subtitle: "Just a few of the 50+ commands available",
            footer: "And 40+ more commands! Use !commands to see all commands.",
            
            security: "🔒 Security",
            leveling: "🎮 Leveling",
            ai: "🤖 AI",
            music: "🎵 Music"
        },
        
        // Pricing Section
        pricing: {
            title: "Simple Pricing",
            subtitle: "Choose the plan that fits your community",
            month: "/month",
            year: "/year",
            monthly: "Monthly",
            yearly: "Yearly",
            saveUp: "Save up to 40%!",
            
            free: {
                name: "Free",
                btnText: "Get Started",
                features: [
                    "✓ Basic Commands",
                    "✓ Reaction Roles (Full)",
                    "✓ 👋 Welcome System",
                    "✓ 🎫 Ticket System",
                    "✓ 📊 Invite Tracker",
                    "✓ 🛡️ Toxicity Filter",
                    "✓ Help & Info",
                    "✓ Weather (3/day)",
                    "✓ Search (5/day)",
                    "✓ Basic Memory (15/day)",
                    "✗ Music System",
                    "✗ AI Assistant",
                    "✗ Moderation",
                    "✗ Anti-Raid",
                    "✗ Mini Games"
                ]
            },
            
            starter: {
                name: "Starter",
                btnText: "Upgrade Now",
                features: [
                    "🎵 Music: 10 songs/day",
                    "🤖 AI Assistant: 10/day",
                    "🤖 AI Server: 5/day",
                    "📖 Story System: 5/day",
                    "🧠 Memory: 10/day",
                    "🖼️ Image Gen: 3/day",
                    "🎬 GIF Gen: 2/day",
                    "🎮 Mini Games: Basic",
                    "✨ All FREE features: UNLIMITED",
                    "✗ Moderation Tools",
                    "✗ Anti-Raid",
                    "✗ Levels System"
                ]
            },
            
            premium: {
                badge: "⭐ Best Value",
                name: "Premium",
                btnText: "Upgrade Now",
                features: [
                    "🎵 Music: UNLIMITED",
                    "🤖 AI Assistant: 30/day",
                    "🤖 AI Server: 10/day",
                    "📖 Story: UNLIMITED",
                    "🧠 Memory: UNLIMITED",
                    "🖼️ Image Gen: 10/day",
                    "🎬 GIF Gen: 5/day",
                    "🔍 Torrent: 20/day",
                    "🛡️ Anti-Raid",
                    "👮 Moderation",
                    "🎮 Levels System",
                    "🧠 Community Brain",
                    "📝 Templates: 5/day",
                    "🍕 Food: 10/day",
                    "🔊 TTS: 20/day",
                    "🎙️ Temp Voice: 3 ch",
                    "🎮 Mini Games: All",
                    "🛠️ Admin Commands"
                ]
            },
            
            vip: {
                name: "VIP",
                btnText: "Upgrade Now",
                features: [
                    "✨ All Premium Features",
                    "🤖 AI: UNLIMITED",
                    "🖼️ Image Gen: UNLIMITED",
                    "🎬 GIF Gen: UNLIMITED",
                    "🔍 Torrent: UNLIMITED",
                    "🍕 Food: UNLIMITED",
                    "📝 Templates: UNLIMITED",
                    "🔊 TTS: UNLIMITED",
                    "🎙️ Temp Voice: UNLIMITED",
                    "⚡ Priority Support",
                    "🎨 Custom Branding",
                    "🔧 Custom Commands",
                    "📊 Advanced Analytics",
                    "🚀 Early Access"
                ]
            },
            
            business: {
                name: "Business",
                btnText: "Contact Sales",
                features: [
                    "✨ All VIP Features",
                    "🤖 AI Agent: 50/month",
                    "🤖 AI: UNLIMITED for all",
                    "👥 Multi-Admin Support",
                    "📊 Advanced Analytics",
                    "🔒 Enhanced Security",
                    "📞 24/7 Priority Support",
                    "🎯 Account Manager",
                    "📈 Business Reports",
                    "⏱️ SLA Guarantee (99.9%)",
                    "🚀 Priority Queue",
                    "* Custom Integrations & Development",
                    "  Contact support for custom solutions"
                ]
            }
        },
        
        // Support Section
        support: {
            title: "Need Help?",
            subtitle: "Join our support server for assistance, updates, and community",
            btnServer: "💬 Join Support Server",
            btnEmail: "📧 Email Support"
        },
        
        // Footer
        footer: {
            tagline: "The ultimate Discord bot for your community",
            quickLinks: "Quick Links",
            legal: "Legal",
            connect: "Connect",
            voteForUs: "⭐ Vote for Us",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            copyright: "© 2025 Security Assistant Bot. Made with ❤️ for Discord Communities"
        }
    },
    
    el: {
        // Navigation
        nav: {
            features: "Χαρακτηριστικά",
            commands: "Εντολές",
            pricing: "Τιμές",
            support: "Υποστήριξη"
        },
        
        // Hero Section
        hero: {
            badge: "✨ Τώρα με AI Integration",
            title: "Το Απόλυτο Discord Bot",
            titleGradient: "για την Κοινότητά σας",
            description: "Ισχυρή ασφάλεια, έξυπνη διαχείριση, συναρπαστικό σύστημα επιπέδων, AI βοηθός, music player, και 50+ χαρακτηριστικά για να ενισχύσετε τον Discord server σας.",
            highlight1: "🔥 AI Σύστημα Ιστοριών",
            highlight2: "🚀 Αυτόματος Δημιουργός Templates",
            highlight3: "🎨 Δημιουργία Εικόνων & GIF",
            btnAdd: "➕ Προσθήκη στο Discord",
            btnLearn: "📖 Μάθετε Περισσότερα",
            stat1Number: "50+",
            stat1Label: "Εντολές",
            stat2Number: "24/7",
            stat2Label: "Διαθεσιμότητα",
            stat3Number: "100%",
            stat3Label: "Δωρεάν"
        },
        
        // Features Section
        features: {
            title: "Ισχυρά Χαρακτηριστικά",
            subtitle: "Όλα όσα χρειάζεστε για να διαχειριστείτε και να αναπτύξετε την Discord κοινότητά σας",
            
            security: {
                title: "Προηγμένη Ασφάλεια",
                desc: "Προστασία anti-raid, αυτόματη διαχείριση, σύστημα επαλήθευσης και ανίχνευση απειλών σε πραγματικό χρόνο.",
                items: ["Σύστημα anti-raid", "Αυτόματη διαχείριση", "Επαλήθευση μελών", "Παρακολούθηση προσκλήσεων"]
            },
            
            leveling: {
                title: "Σύστημα Επιπέδων",
                desc: "Εμπλέξτε την κοινότητά σας με XP, επίπεδα, επιτεύγματα, leaderboards και προσαρμόσιμες ανταμοιβές.",
                items: ["Σύστημα XP & Επιπέδων", "50+ Επιτεύγματα", "Προσαρμοσμένες ανταμοιβές", "Leaderboards"]
            },
            
            ai: {
                badge: "⭐ Δημοφιλές",
                title: "AI Βοηθός",
                desc: "Τροφοδοτείται από Google Gemini AI για έξυπνες συνομιλίες, δημιουργία εικόνων και έξυπνη βοήθεια.",
                items: ["Φυσικές συνομιλίες", "Δημιουργία εικόνων", "Συνειδητοποίηση πλαισίου", "Πολυγλωσσικό"]
            },
            
            story: {
                badge: "🔥 Μοναδικό",
                title: "Διαδραστικό Σύστημα Ιστοριών",
                desc: "Δημιουργήστε καθηλωτικές ιστορίες role-playing με AI αφηγήσεις, πολλαπλούς ρόλους και δυναμικές επιλογές!",
                items: ["AI ιστορίες", "Πολλαπλοί ρόλοι χαρακτήρων", "Δυναμική εξέλιξη ιστορίας", "Turn-based gameplay", "Story templates"]
            },
            
            template: {
                badge: "🚀 Επαναστατικό",
                title: "AI Δημιουργός Templates",
                desc: "Δημιουργήστε πλήρη Discord server templates με AI! Κανάλια, ρόλοι, δικαιώματα - όλα αυτόματα!",
                items: ["AI δημιουργία", "Προσαρμοσμένες κατηγορίες", "Αυτόματη ρύθμιση ρόλων", "Permission templates", "Εγκατάσταση με ένα κλικ"]
            },
            
            agent: {
                badge: "🆕 ΝΕΟ",
                title: "AI Agent",
                desc: "Εκτέλεσε οποιαδήποτε εργασία στο Discord με φυσική γλώσσα! Απλά πες στο AI τι θέλεις και το κάνει αυτόματα.",
                items: ["Εντολές φυσικής γλώσσας", "Δημιουργία καναλιών & ρόλων", "Διαχείριση χρηστών", "Σύνθετες αυτοματοποιήσεις", "Συστήματα φυλακής & επαλήθευσης"]
            },
            
            music: {
                title: "Music Player",
                desc: "Υψηλής ποιότητας streaming μουσικής με υποστήριξη playlists, ηχητικά εφέ και διαχείριση ουράς.",
                items: ["YouTube & Spotify", "Playlists", "Ηχητικά εφέ", "Σύστημα ουράς"]
            },
            
            welcome: {
                title: "Σύστημα Καλωσορίσματος",
                desc: "Προσαρμόσιμα μηνύματα καλωσορίσματος, αυτόματοι ρόλοι και παρακολούθηση μελών.",
                items: ["Προσαρμοσμένα μηνύματα", "Αυτόματοι ρόλοι", "Εικόνες καλωσορίσματος", "DM καλωσόρισμα"]
            },
            
            language: {
                title: "Πολυγλωσσικό",
                desc: "Πλήρης υποστήριξη για Αγγλικά και Ελληνικά με εύκολη αλλαγή γλώσσας ανά server.",
                items: ["Αγγλικά & Ελληνικά", "Ρυθμίσεις ανά server", "Εύκολη αλλαγή", "Πλήρης μετάφραση"]
            },
            
            analytics: {
                title: "Αναλυτικά",
                desc: "Insights κοινότητας, παρακολούθηση δραστηριότητας και λεπτομερή στατιστικά.",
                items: ["Παρακολούθηση δραστηριότητας", "Insights μελών", "Στατιστικά εντολών", "Μετρήσεις ανάπτυξης"]
            },
            
            games: {
                title: "Mini Games",
                desc: "Διασκεδαστικά παιχνίδια όπως trivia, hangman, math challenges και άλλα.",
                items: ["Trivia games", "Hangman", "Math challenges", "Leaderboards"]
            },
            
            roles: {
                title: "Reaction Roles",
                desc: "Εύκολη διαχείριση ρόλων με reaction roles και προσαρμοσμένα μενού ρόλων.",
                items: ["Reaction roles", "Προσαρμοσμένα μενού", "Πολλαπλοί ρόλοι", "Εύκολη ρύθμιση"]
            },
            
            tickets: {
                title: "Σύστημα Tickets",
                desc: "Επαγγελματικό σύστημα υποστήριξης με κατηγορίες, transcripts και διαχείριση προσωπικού.",
                items: ["Πολλαπλές κατηγορίες", "Αυτόματα transcripts", "Ρόλοι προσωπικού", "Προσαρμοσμένα μηνύματα"]
            },
            
            toxicity: {
                title: "Φίλτρο Τοξικότητας",
                desc: "AI-powered διαχείριση περιεχομένου για ανίχνευση και φιλτράρισμα τοξικών μηνυμάτων αυτόματα.",
                items: ["AI ανίχνευση", "Αυτόματη διαχείριση", "Προσαρμοσμένα όρια", "Καταγραφή"]
            }
        },
        
        // Commands Section
        commands: {
            title: "Δημοφιλείς Εντολές",
            subtitle: "Μερικές από τις 50+ διαθέσιμες εντολές",
            footer: "Και 40+ ακόμα εντολές! Χρησιμοποιήστε !commands για να δείτε όλες τις εντολές.",
            
            security: "🔒 Ασφάλεια",
            leveling: "🎮 Επίπεδα",
            ai: "🤖 AI",
            music: "🎵 Μουσική"
        },
        
        // Pricing Section
        pricing: {
            title: "Απλές Τιμές",
            subtitle: "Επιλέξτε το πλάνο που ταιριάζει στην κοινότητά σας",
            month: "/μήνα",
            year: "/έτος",
            monthly: "Μηνιαία",
            yearly: "Ετήσια",
            saveUp: "Εξοικονομήστε έως 40%!",
            
            free: {
                name: "Δωρεάν",
                btnText: "Ξεκινήστε",
                features: [
                    "✓ Βασικές Εντολές",
                    "✓ Reaction Roles (Πλήρες)",
                    "✓ 👋 Σύστημα Καλωσορίσματος",
                    "✓ 🎫 Σύστημα Tickets",
                    "✓ 📊 Invite Tracker",
                    "✓ 🛡️ Φίλτρο Τοξικότητας",
                    "✓ Βοήθεια & Πληροφορίες",
                    "✓ Καιρός (3/ημέρα)",
                    "✓ Αναζήτηση (5/ημέρα)",
                    "✓ Βασική Μνήμη (15/ημέρα)",
                    "✗ Σύστημα Μουσικής",
                    "✗ AI Assistant",
                    "✗ Moderation",
                    "✗ Anti-Raid",
                    "✗ Mini Games"
                ]
            },
            
            starter: {
                name: "Starter",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "🎵 Music: 10 τραγούδια/ημέρα",
                    "🤖 AI Assistant: 10/ημέρα",
                    "🤖 AI Server: 5/ημέρα",
                    "📖 Story System: 5/ημέρα",
                    "🧠 Memory: 10/ημέρα",
                    "🖼️ Image Gen: 3/ημέρα",
                    "🎬 GIF Gen: 2/ημέρα",
                    "🎮 Mini Games: Basic",
                    "✨ Όλα τα FREE: ΑΠΕΡΙΟΡΙΣΤΑ",
                    "✗ Moderation Tools",
                    "✗ Anti-Raid",
                    "✗ Σύστημα Επιπέδων"
                ]
            },
            
            premium: {
                badge: "⭐ Καλύτερη Αξία",
                name: "Premium",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "🎵 Music: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🤖 AI Assistant: 30/ημέρα",
                    "🤖 AI Server: 10/ημέρα",
                    "📖 Story: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🧠 Memory: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🖼️ Image Gen: 10/ημέρα",
                    "🎬 GIF Gen: 5/ημέρα",
                    "🔍 Torrent: 20/ημέρα",
                    "🛡️ Anti-Raid",
                    "👮 Moderation",
                    "🎮 Σύστημα Επιπέδων",
                    "🧠 Community Brain",
                    "📝 Templates: 5/ημέρα",
                    "🍕 Food: 10/ημέρα",
                    "🔊 TTS: 20/ημέρα",
                    "🎙️ Temp Voice: 3 ch",
                    "🎮 Mini Games: Όλα",
                    "🛠️ Admin Commands"
                ]
            },
            
            vip: {
                name: "VIP",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "✨ Όλα τα Premium",
                    "🤖 AI: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🖼️ Image Gen: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🎬 GIF Gen: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🔍 Torrent: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🍕 Food: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "📝 Templates: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🔊 TTS: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🎙️ Temp Voice: ΑΠΕΡΙΟΡΙΣΤΑ",
                    "⚡ Priority Support",
                    "🎨 Custom Branding",
                    "🔧 Custom Commands",
                    "📊 Advanced Analytics",
                    "🚀 Early Access"
                ]
            },
            
            business: {
                name: "Business",
                btnText: "Επικοινωνία Πωλήσεων",
                features: [
                    "✨ Όλα τα VIP",
                    "🤖 AI Agent: 50/μήνα",
                    "🤖 AI: ΑΠΕΡΙΟΡΙΣΤΟ για όλους",
                    "👥 Multi-Admin Support",
                    "📊 Advanced Analytics",
                    "🔒 Enhanced Security",
                    "📞 24/7 Priority Support",
                    "🎯 Account Manager",
                    "📈 Business Reports",
                    "⏱️ SLA Guarantee (99.9%)",
                    "🚀 Priority Queue",
                    "* Custom Integrations & Development",
                    "  Επικοινωνία για custom λύσεις"
                ]
            }
        },
        
        // Support Section
        support: {
            title: "Χρειάζεστε Βοήθεια;",
            subtitle: "Μπείτε στον support server μας για βοήθεια, ενημερώσεις και κοινότητα",
            btnServer: "💬 Μπείτε στον Support Server",
            btnEmail: "📧 Email Υποστήριξη"
        },
        
        // Footer
        footer: {
            tagline: "Το απόλυτο Discord bot για την κοινότητά σας",
            quickLinks: "Γρήγοροι Σύνδεσμοι",
            legal: "Νομικά",
            connect: "Σύνδεση",
            voteForUs: "⭐ Ψηφίστε μας",
            privacy: "Πολιτική Απορρήτου",
            terms: "Όροι Χρήσης",
            copyright: "© 2025 Security Assistant Bot. Φτιαγμένο με ❤️ για Discord Κοινότητες"
        }
    }
};
