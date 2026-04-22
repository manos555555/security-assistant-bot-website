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
                desc: "Full support for 8 languages with easy language switching per server.",
                items: ["8 Languages", "Per-server settings", "Easy switching", "Full translation"]
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
            },
            
            streaming: {
                badge: "📺 NEW",
                title: "Stream Notifications",
                desc: "Get notified when your favorite Twitch and TikTok streamers go live! Never miss a stream again.",
                items: ["Twitch integration", "TikTok Live support", "Custom notifications", "Multi-streamer tracking", "Offline alerts"]
            }
        },
        
        // Commands Section
        commands: {
            title: "Popular Commands",
            subtitle: "Over 150+ commands across 20+ categories",
            footer: "And many more! Use !commands in Discord to see all available commands.",
            viewAll: "📚 View Complete Command List",
            
            // Categories
            cat_ai: "🤖 AI Assistant",
            cat_music: "🎵 Music",
            cat_leveling: "🎮 Leveling",
            cat_story: "📖 Story System",
            cat_security: "🛡️ Security",
            cat_images: "🖼️ Image Generation",
            cat_welcome: "👋 Welcome System",
            cat_tickets: "🎫 Tickets",
            cat_invites: "📊 Invite Tracker",
            cat_games: "🎲 Mini Games",
            cat_templates: "📝 Templates",
            cat_brain: "🧠 Community Brain",
            cat_roles: "🎭 Reaction Roles",
            cat_voice: "🎙️ Temp Voice",
            cat_food: "🍕 Food & Recipes",
            cat_streaming: "📺 Stream Notifications",
            cat_utils: "🔧 Utilities",
            
            // Command descriptions
            stream_add_desc: "Add streamer to track",
            stream_remove_desc: "Remove streamer",
            stream_list_desc: "List tracked streamers",
            stream_channel_desc: "Set notification channel",
            ask_desc: "Ask AI anything",
            agent_desc: "AI executes Discord tasks",
            admin_desc: "AI Server Assistant panel",
            setname_desc: "Set your AI name",
            play_desc: "Play from YouTube/URL",
            queue_desc: "View music queue",
            skip_desc: "Skip current song",
            pause_desc: "Control playback",
            rank_desc: "Check rank & XP",
            leaderboard_desc: "Server leaderboard",
            achievements_desc: "View achievements",
            stats_desc: "Detailed statistics",
            new_desc: "Create new story",
            roles_desc: "View character roles",
            action_desc: "Perform story action",
            autopilot_desc: "AI plays for you",
            antiraid_desc: "Anti-raid protection",
            toxicity_desc: "AI toxicity filter",
            purge_desc: "Bulk delete messages",
            lockdown_desc: "Lock all channels",
            genimage_desc: "Create AI images",
            gengif_desc: "Create animated GIFs",
            advimage_desc: "Advanced options",
            animate_desc: "Animate existing image",
            welc_setup_desc: "Set welcome channel",
            welc_msg_desc: "Custom message",
            welc_role_desc: "Auto-assign role",
            welc_ai_desc: "AI-generated welcomes",
            tick_setup_desc: "Setup ticket system",
            tick_panel_desc: "Send ticket panel",
            tick_cat_desc: "Add category",
            tick_role_desc: "Set support role",
            inv_check_desc: "Check invite count",
            inv_lead_desc: "Top inviters",
            inv_stats_desc: "Detailed stats",
            inv_bonus_desc: "Add bonus invites",
            game_trivia_desc: "Trivia questions",
            game_hangman_desc: "Word guessing",
            game_math_desc: "Math challenges",
            game_react_desc: "Reaction speed test",
            temp_create_desc: "AI creates server template",
            temp_list_desc: "View saved templates",
            temp_apply_desc: "Apply to server",
            temp_del_desc: "Delete template",
            brain_status_desc: "Brain status",
            brain_mood_desc: "Community mood",
            brain_insights_desc: "AI insights",
            brain_predict_desc: "Predictions",
            quick_role_desc: "Quick setup",
            list_roles_desc: "View all roles",
            rem_role_desc: "Remove role",
            voice_setup_desc: "Setup system",
            voice_create_desc: "Create channel",
            voice_lock_desc: "Lock channel",
            food_desc: "Food suggestions",
            recipe_desc: "Get recipe",
            help_desc: "Help menu",
            weather_desc: "Weather info",
            search_desc: "Web search",
            language_desc: "Change language"
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
                    "✓ 🎨 Reaction Roles (Full)",
                    "✓ 🎮 Levels: 8/day (Basic)",
                    "✓ 🧠 Personal Memory (facts/remember)",
                    "✓ 📊 Invite Tracker: 10/day",
                    "✓ ☁️ Weather: 3/day",
                    "✓ 🔍 Search: 5/day",
                    "✓ ❓ Help & Info",
                    "✗ 🤖 AI Assistant",
                    "✗ 🎵 Music System",
                    "✗ 👋 Welcome System",
                    "✗ 🎫 Tickets System",
                    "✗ 🛡️ Toxicity Filter",
                    "✗ 👮 Moderation & Anti-Raid",
                    "✗ 🎮 Mini Games",
                    "✗ 📺 Stream Notifications"
                ]
            },
            
            starter: {
                name: "Starter",
                btnText: "Upgrade Now",
                features: [
                    "✨ All FREE features: UNLIMITED",
                    "🤖 AI Assistant: 10/day",
                    "💬 AI Mention Replies: 20/day",
                    "🎵 Music: 10/day",
                    "🖼️ Image Gen: 3/day",
                    "🎬 GIF Gen: 2/day",
                    "🔊 TTS: 5/day",
                    "📖 Story System: 3/day",
                    "🎮 Mini Games (Basic)",
                    "✗ 🤖 AI Server Assistant",
                    "✗ 👮 Moderation & Anti-Raid",
                    "✗ 🛡️ Toxicity Filter",
                    "✗ 👋 Welcome & 🎫 Tickets",
                    "✗ 📺 Stream Notifications"
                ]
            },
            
            premium: {
                badge: "⭐ Best Value",
                name: "Premium",
                btnText: "Upgrade Now",
                features: [
                    "✨ All STARTER features",
                    "🎵 Music: UNLIMITED",
                    "🤖 AI Assistant: 30/day",
                    "🤖 AI Server Assistant: 10/day",
                    "🖼️ Image Gen: 10/day",
                    "🔊 TTS: 20/day",
                    "🍕 Food & Recipes: 10/day",
                    "📝 Templates: 5/day",
                    "🔍 Torrent Search: 20/day",
                    "👮 Full Moderation Suite",
                    "🚨 Anti-Raid Protection",
                    "🛡️ Toxicity Filter: 2000 scans/day",
                    "👋 Welcome (AI: 50/day)",
                    "🎫 Tickets System",
                    "🎙️ Temp Voice: 5 channels",
                    "📺 Stream Notifications: 3 streamers",
                    "🧠 Community Brain",
                    "🎮 Mini Games: All UNLIMITED",
                    "📊 Advanced Invite Tracker",
                    "🛠️ Admin Commands"
                ]
            },
            
            vip: {
                name: "VIP",
                btnText: "Upgrade Now",
                features: [
                    "✨ All PREMIUM features",
                    "🤖 AI Assistant: 100/day",
                    "🤖 AI Server Assistant: 25/day",
                    "🖼️ Image Gen: 30/day",
                    "🎬 GIF Gen: 15/day",
                    "🔊 TTS: UNLIMITED",
                    "🍕 Food & 📝 Templates: UNLIMITED",
                    "📖 Story System: UNLIMITED",
                    "🔍 Torrent Search: 50/day",
                    "🛡️ Toxicity Filter: 10.000 scans/day",
                    "👋 Welcome AI: 200/day",
                    "🎙️ Temp Voice: 15 channels",
                    "📺 Stream Notifications: 10 streamers",
                    "🧠 Community Brain: UNLIMITED",
                    "⚡ Priority Support",
                    "🎨 Custom Branding",
                    "🔧 Custom Commands",
                    "📊 Advanced Analytics",
                    "🚀 Beta Features / Early Access"
                ]
            },
            
            business: {
                name: "Business",
                btnText: "Contact Sales",
                features: [
                    "✨ All VIP features",
                    "🤖 AI Agent: 50/month (BUSINESS exclusive)",
                    "🤖 AI Assistant & Server: UNLIMITED",
                    "🖼️ Image & 🎬 GIF Gen: UNLIMITED",
                    "🔍 Torrent Search: UNLIMITED",
                    "🛡️ Toxicity Filter: UNLIMITED scans",
                    "👋 Welcome AI: UNLIMITED",
                    "🎙️ Temp Voice: UNLIMITED channels",
                    "📺 Stream Notifications: UNLIMITED streamers",
                    "👥 Multi-Admin Support",
                    "🔒 Enhanced Security",
                    "📞 24/7 Dedicated Support",
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
                desc: "Πλήρης υποστήριξη για 8 γλώσσες με εύκολη αλλαγή γλώσσας ανά server.",
                items: ["8 Γλώσσες", "Ρυθμίσεις ανά server", "Εύκολη αλλαγή", "Πλήρης μετάφραση"]
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
            },
            
            streaming: {
                badge: "📺 ΝΕΟ",
                title: "Ειδοποιήσεις Stream",
                desc: "Λάβε ειδοποίηση όταν οι αγαπημένοι σου Twitch και TikTok streamers ξεκινούν live! Μην χάσεις ποτέ stream.",
                items: ["Twitch integration", "TikTok Live υποστήριξη", "Προσαρμοσμένες ειδοποιήσεις", "Πολλαπλοί streamers", "Ειδοποιήσεις offline"]
            }
        },
        
        // Commands Section
        commands: {
            title: "Δημοφιλείς Εντολές",
            subtitle: "Πάνω από 150+ εντολές σε 20+ κατηγορίες",
            footer: "Και πολλές ακόμα! Χρησιμοποιήστε !commands στο Discord για όλες τις εντολές.",
            viewAll: "📚 Δείτε Όλες τις Εντολές",
            
            // Categories
            cat_ai: "🤖 AI Βοηθός",
            cat_music: "🎵 Μουσική",
            cat_leveling: "🎮 Επίπεδα",
            cat_story: "📖 Σύστημα Ιστοριών",
            cat_security: "�️ Ασφάλεια",
            cat_images: "🖼️ Δημιουργία Εικόνων",
            cat_welcome: "👋 Καλωσόρισμα",
            cat_tickets: "🎫 Tickets",
            cat_invites: "📊 Παρακολούθηση Προσκλήσεων",
            cat_games: "🎲 Mini Games",
            cat_templates: "📝 Templates",
            cat_brain: "🧠 Community Brain",
            cat_roles: "� Reaction Roles",
            cat_voice: "🎙️ Προσωρινά Κανάλια",
            cat_food: "🍕 Φαγητό & Συνταγές",
            cat_streaming: "📺 Ειδοποιήσεις Stream",
            cat_utils: "🔧 Εργαλεία",
            
            // Command descriptions
            stream_add_desc: "Πρόσθεσε streamer για παρακολούθηση",
            stream_remove_desc: "Αφαίρεσε streamer",
            stream_list_desc: "Λίστα streamers",
            stream_channel_desc: "Όρισε κανάλι ειδοποιήσεων",
            ask_desc: "Ρώτα το AI οτιδήποτε",
            agent_desc: "Το AI εκτελεί εργασίες Discord",
            admin_desc: "Πάνελ AI Server Assistant",
            setname_desc: "Όρισε το όνομά σου στο AI",
            play_desc: "Παίξε από YouTube/URL",
            queue_desc: "Δες την ουρά μουσικής",
            skip_desc: "Παράλειψη τραγουδιού",
            pause_desc: "Έλεγχος αναπαραγωγής",
            rank_desc: "Έλεγξε rank & XP",
            leaderboard_desc: "Leaderboard server",
            achievements_desc: "Δες επιτεύγματα",
            stats_desc: "Λεπτομερή στατιστικά",
            new_desc: "Δημιούργησε νέα ιστορία",
            roles_desc: "Δες ρόλους χαρακτήρων",
            action_desc: "Εκτέλεσε ενέργεια",
            autopilot_desc: "Το AI παίζει για σένα",
            antiraid_desc: "Προστασία anti-raid",
            toxicity_desc: "AI φίλτρο τοξικότητας",
            purge_desc: "Μαζική διαγραφή μηνυμάτων",
            lockdown_desc: "Κλείδωμα καναλιών",
            genimage_desc: "Δημιουργία AI εικόνων",
            gengif_desc: "Δημιουργία animated GIFs",
            advimage_desc: "Προχωρημένες επιλογές",
            animate_desc: "Κίνηση υπάρχουσας εικόνας",
            welc_setup_desc: "Όρισε κανάλι καλωσορίσματος",
            welc_msg_desc: "Προσαρμοσμένο μήνυμα",
            welc_role_desc: "Αυτόματος ρόλος",
            welc_ai_desc: "AI καλωσορίσματα",
            tick_setup_desc: "Ρύθμιση συστήματος tickets",
            tick_panel_desc: "Αποστολή πάνελ tickets",
            tick_cat_desc: "Προσθήκη κατηγορίας",
            tick_role_desc: "Ορισμός ρόλου υποστήριξης",
            inv_check_desc: "Έλεγξε προσκλήσεις",
            inv_lead_desc: "Κορυφαίοι",
            inv_stats_desc: "Λεπτομερή στατιστικά",
            inv_bonus_desc: "Bonus προσκλήσεις",
            game_trivia_desc: "Ερωτήσεις trivia",
            game_hangman_desc: "Κρεμάλα",
            game_math_desc: "Μαθηματικές προκλήσεις",
            game_react_desc: "Τεστ αντίδρασης",
            temp_create_desc: "Το AI δημιουργεί template",
            temp_list_desc: "Δες αποθηκευμένα templates",
            temp_apply_desc: "Εφαρμογή στον server",
            temp_del_desc: "Διαγραφή template",
            brain_status_desc: "Κατάσταση brain",
            brain_mood_desc: "Διάθεση κοινότητας",
            brain_insights_desc: "AI insights",
            brain_predict_desc: "Προβλέψεις",
            quick_role_desc: "Γρήγορη ρύθμιση",
            list_roles_desc: "Δες όλους τους ρόλους",
            rem_role_desc: "Αφαίρεση ρόλου",
            voice_setup_desc: "Ρύθμιση συστήματος",
            voice_create_desc: "Δημιουργία καναλιού",
            voice_lock_desc: "Κλείδωμα καναλιού",
            food_desc: "Προτάσεις φαγητού",
            recipe_desc: "Λήψη συνταγής",
            help_desc: "Μενού βοήθειας",
            weather_desc: "Πληροφορίες καιρού",
            search_desc: "Αναζήτηση web",
            language_desc: "Αλλαγή γλώσσας"
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
                    "✓ 🎨 Reaction Roles (Πλήρες)",
                    "✓ 🎮 Επίπεδα: 8/ημέρα (Βασικό)",
                    "✓ 🧠 Προσωπική Μνήμη (facts/remember)",
                    "✓ 📊 Invite Tracker: 10/ημέρα",
                    "✓ ☁️ Καιρός: 3/ημέρα",
                    "✓ 🔍 Αναζήτηση: 5/ημέρα",
                    "✓ ❓ Βοήθεια & Πληροφορίες",
                    "✗ 🤖 AI Assistant",
                    "✗ 🎵 Σύστημα Μουσικής",
                    "✗ 👋 Σύστημα Καλωσορίσματος",
                    "✗ 🎫 Σύστημα Tickets",
                    "✗ 🛡️ Φίλτρο Τοξικότητας",
                    "✗ 👮 Moderation & Anti-Raid",
                    "✗ 🎮 Mini Games",
                    "✗ 📺 Ειδοποιήσεις Stream"
                ]
            },
            
            starter: {
                name: "Starter",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "✨ Όλα τα FREE: ΑΠΕΡΙΟΡΙΣΤΑ",
                    "🤖 AI Assistant: 10/ημέρα",
                    "💬 AI Mention Replies: 20/ημέρα",
                    "🎵 Μουσική: 10/ημέρα",
                    "🖼️ Image Gen: 3/ημέρα",
                    "🎬 GIF Gen: 2/ημέρα",
                    "🔊 TTS: 5/ημέρα",
                    "📖 Σύστημα Ιστοριών: 3/ημέρα",
                    "🎮 Mini Games (Βασικό)",
                    "✗ 🤖 AI Server Assistant",
                    "✗ 👮 Moderation & Anti-Raid",
                    "✗ 🛡️ Φίλτρο Τοξικότητας",
                    "✗ 👋 Welcome & 🎫 Tickets",
                    "✗ 📺 Ειδοποιήσεις Stream"
                ]
            },
            
            premium: {
                badge: "⭐ Καλύτερη Αξία",
                name: "Premium",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "✨ Όλα τα STARTER",
                    "🎵 Μουσική: ΑΠΕΡΙΟΡΙΣΤΗ",
                    "🤖 AI Assistant: 30/ημέρα",
                    "🤖 AI Server Assistant: 10/ημέρα",
                    "🖼️ Image Gen: 10/ημέρα",
                    "🔊 TTS: 20/ημέρα",
                    "🍕 Φαγητό & Συνταγές: 10/ημέρα",
                    "📝 Templates: 5/ημέρα",
                    "🔍 Torrent Search: 20/ημέρα",
                    "👮 Πλήρες Moderation",
                    "🚨 Anti-Raid Protection",
                    "🛡️ Φίλτρο Τοξικότητας: 2000 scans/ημέρα",
                    "👋 Καλωσόρισμα (AI: 50/ημέρα)",
                    "🎫 Σύστημα Tickets",
                    "🎙️ Temp Voice: 5 κανάλια",
                    "📺 Ειδοποιήσεις Stream: 3 streamers",
                    "🧠 Community Brain",
                    "🎮 Mini Games: Όλα ΑΠΕΡΙΟΡΙΣΤΑ",
                    "📊 Advanced Invite Tracker",
                    "🛠️ Admin Commands"
                ]
            },
            
            vip: {
                name: "VIP",
                btnText: "Αναβάθμιση Τώρα",
                features: [
                    "✨ Όλα τα PREMIUM",
                    "🤖 AI Assistant: 100/ημέρα",
                    "🤖 AI Server Assistant: 25/ημέρα",
                    "🖼️ Image Gen: 30/ημέρα",
                    "🎬 GIF Gen: 15/ημέρα",
                    "🔊 TTS: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🍕 Φαγητό & 📝 Templates: ΑΠΕΡΙΟΡΙΣΤΑ",
                    "📖 Σύστημα Ιστοριών: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🔍 Torrent Search: 50/ημέρα",
                    "🛡️ Φίλτρο Τοξικότητας: 10.000 scans/ημέρα",
                    "👋 Welcome AI: 200/ημέρα",
                    "🎙️ Temp Voice: 15 κανάλια",
                    "📺 Ειδοποιήσεις Stream: 10 streamers",
                    "🧠 Community Brain: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "⚡ Priority Support",
                    "🎨 Custom Branding",
                    "🔧 Custom Commands",
                    "📊 Advanced Analytics",
                    "🚀 Beta Features / Early Access"
                ]
            },
            
            business: {
                name: "Business",
                btnText: "Επικοινωνία Πωλήσεων",
                features: [
                    "✨ Όλα τα VIP",
                    "🤖 AI Agent: 50/μήνα (BUSINESS exclusive)",
                    "🤖 AI Assistant & Server: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🖼️ Image & 🎬 GIF Gen: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🔍 Torrent Search: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🛡️ Φίλτρο Τοξικότητας: ΑΠΕΡΙΟΡΙΣΤΑ scans",
                    "👋 Welcome AI: ΑΠΕΡΙΟΡΙΣΤΟ",
                    "🎙️ Temp Voice: ΑΠΕΡΙΟΡΙΣΤΑ κανάλια",
                    "📺 Ειδοποιήσεις Stream: ΑΠΕΡΙΟΡΙΣΤΟΙ streamers",
                    "👥 Multi-Admin Support",
                    "🔒 Enhanced Security",
                    "📞 24/7 Dedicated Support",
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
    },
    de: {
            "nav": {
                    "features": "Merkmale",
                    "commands": "Befehle",
                    "pricing": "Preise",
                    "support": "Unterstützung"
            },
            "hero": {
                    "badge": "✨ Jetzt mit KI-Integration",
                    "title": "Der ultimative Discord-Bot",
                    "titleGradient": "für Ihre Community",
                    "description": "Leistungsstarke Sicherheit, intelligente Moderation, ansprechendes Levelsystem, KI-Assistent, Musikplayer und über 50 Funktionen, um Ihren Discord-Server zu optimieren.",
                    "highlight1": "🔥 KI-gestütztes Story-System",
                    "highlight2": "🚀 Automatisierter Vorlagenersteller",
                    "highlight3": "🎨 Bild- und GIF-Generierung",
                    "btnAdd": "➕ Zu Discord hinzufügen",
                    "btnLearn": "📖 Erfahren Sie mehr",
                    "stat1Number": "50+",
                    "stat1Label": "Befehle",
                    "stat2Number": "24/7",
                    "stat2Label": "Betriebszeit",
                    "stat3Number": "100 %",
                    "stat3Label": "Frei"
            },
            "features": {
                    "title": "Leistungsstarke Funktionen",
                    "subtitle": "Alles, was Sie zum Verwalten und Erweitern Ihrer Discord-Community benötigen",
                    "security": {
                            "title": "Erweiterte Sicherheit",
                            "desc": "Anti-Raid-Schutz, automatische Moderation, Verifizierungssystem und Bedrohungserkennung in Echtzeit, um die Sicherheit Ihres Servers zu gewährleisten.",
                            "items": [
                                    "Anti-Raid-System",
                                    "Automoderation",
                                    "Überprüfung der Mitglieder",
                                    "Einladungsverfolgung"
                            ]
                    },
                    "leveling": {
                            "title": "Nivelliersystem",
                            "desc": "Binden Sie Ihre Community mit XP, Levels, Erfolgen, Bestenlisten und anpassbaren Belohnungen ein.",
                            "items": [
                                    "XP- und Level-System",
                                    "Über 50 Erfolge",
                                    "Individuelle Belohnungen",
                                    "Bestenlisten"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Beliebt",
                            "title": "KI-Assistent",
                            "desc": "Unterstützt durch Google Gemini AI für intelligente Gespräche, Bildgenerierung und intelligente Unterstützung.",
                            "items": [
                                    "Natürliche Gespräche",
                                    "Bilderzeugung",
                                    "Kontextbewusstsein",
                                    "Mehrsprachig"
                            ]
                    },
                    "story": {
                            "badge": "🔥 Einzigartig",
                            "title": "Interaktives Story-System",
                            "desc": "Erstellen Sie fesselnde Rollenspielgeschichten mit KI-gestützten Erzählungen, mehreren Rollen und dynamischen Auswahlmöglichkeiten!",
                            "items": [
                                    "KI-generierte Geschichten",
                                    "Mehrere Charakterrollen",
                                    "Dynamischer Story-Fortschritt",
                                    "Rundenbasiertes Gameplay",
                                    "Story-Vorlagen"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Revolutionär",
                            "title": "AI-Vorlagen-Ersteller",
                            "desc": "Generieren Sie komplette Discord-Server-Vorlagen mit KI! Kanäle, Rollen, Berechtigungen – alles automatisiert!",
                            "items": [
                                    "KI-gestützte Generation",
                                    "Benutzerdefinierte Kategorien",
                                    "Automatische Rolleneinrichtung",
                                    "Berechtigungsvorlagen",
                                    "Bereitstellung mit einem Klick"
                            ]
                    },
                    "agent": {
                            "badge": "🆕 NEU",
                            "title": "KI-Agent",
                            "desc": "Führen Sie jede Discord-Aufgabe mit natürlicher Sprache aus! Sagen Sie der KI einfach, was Sie wollen, und sie erledigt es automatisch.",
                            "items": [
                                    "Befehle in natürlicher Sprache",
                                    "Erstellen Sie Kanäle und Rollen",
                                    "Benutzermoderation",
                                    "Komplexe Automatisierungen",
                                    "Gefängnis- und Verifizierungssysteme"
                            ]
                    },
                    "music": {
                            "title": "Musik-Player",
                            "desc": "Hochwertiges Musik-Streaming mit Playlist-Unterstützung, Audioeffekten und Warteschlangenverwaltung.",
                            "items": [
                                    "YouTube und Spotify",
                                    "Wiedergabelisten",
                                    "Audioeffekte",
                                    "Warteschlangensystem"
                            ]
                    },
                    "welcome": {
                            "title": "Willkommenssystem",
                            "desc": "Anpassbare Willkommensnachrichten, automatische Rollen und Mitgliederverfolgung zur Begrüßung neuer Mitglieder.",
                            "items": [
                                    "Benutzerdefinierte Nachrichten",
                                    "Automatische Rollen",
                                    "Willkommensbilder",
                                    "DM willkommen"
                            ]
                    },
                    "language": {
                            "title": "Mehrsprachig",
                            "desc": "Volle Unterstützung für 8 Sprachen mit einfacher Sprachumschaltung pro Server.",
                            "items": [
                                    "8 Sprachen",
                                    "Einstellungen pro Server",
                                    "Einfacher Wechsel",
                                    "Vollständige Übersetzung"
                            ]
                    },
                    "analytics": {
                            "title": "Analytik",
                            "desc": "Community-Einblicke, Aktivitätsverfolgung und detaillierte Statistiken, um Ihren Server zu verstehen.",
                            "items": [
                                    "Aktivitätsverfolgung",
                                    "Einblicke der Mitglieder",
                                    "Befehlsstatistiken",
                                    "Wachstumskennzahlen"
                            ]
                    },
                    "games": {
                            "title": "Minispiele",
                            "desc": "Unterhaltsame Spiele wie Quizspiele, Henker, Mathe-Herausforderungen und mehr zur Unterhaltung Ihrer Community.",
                            "items": [
                                    "Quizspiele",
                                    "Henker",
                                    "Mathe-Herausforderungen",
                                    "Bestenlisten"
                            ]
                    },
                    "roles": {
                            "title": "Reaktionsrollen",
                            "desc": "Einfache Rollenverwaltung mit Reaktionsrollen und benutzerdefinierten Rollenmenüs.",
                            "items": [
                                    "Reaktionsrollen",
                                    "Benutzerdefinierte Menüs",
                                    "Mehrere Rollen",
                                    "Einfache Einrichtung"
                            ]
                    },
                    "tickets": {
                            "title": "Ticketsystem",
                            "desc": "Professionelles Support-Ticketsystem mit Kategorien, Transkripten und Personalverwaltung.",
                            "items": [
                                    "Mehrere Kategorien",
                                    "Automatische Transkripte",
                                    "Mitarbeiterrollen",
                                    "Benutzerdefinierte Nachrichten"
                            ]
                    },
                    "toxicity": {
                            "title": "Toxizitätsfilter",
                            "desc": "KI-gestützte Inhaltsmoderation zur automatischen Erkennung und Filterung schädlicher Nachrichten.",
                            "items": [
                                    "KI-Erkennung",
                                    "Automatische Moderation",
                                    "Benutzerdefinierte Schwellenwerte",
                                    "Protokollierung"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 NEU",
                            "title": "Stream-Benachrichtigungen",
                            "desc": "Erhalte Benachrichtigungen, wenn deine Lieblings-Twitch- und TikTok-Streamer live gehen! Verpasse nie wieder einen Stream.",
                            "items": [
                                    "Twitch-Integration",
                                    "TikTok Live-Unterstützung",
                                    "Benutzerdefinierte Benachrichtigungen",
                                    "Multi-Streamer-Tracking",
                                    "Offline-Benachrichtigungen"
                            ]
                    }
            },
            "commands": {
                    "title": "Beliebte Befehle",
                    "subtitle": "Über 150 Befehle in über 20 Kategorien",
                    "footer": "Und viele mehr! Verwenden Sie !commands in Discord, um alle verfügbaren Befehle anzuzeigen.",
                    "viewAll": "📚 Vollständige Befehlsliste anzeigen"
            },
            "pricing": {
                    "title": "Einfache Preisgestaltung",
                    "subtitle": "Wählen Sie den Plan, der zu Ihrer Gemeinde passt",
                    "month": "/Monat",
                    "year": "/Jahr",
                    "monthly": "Monatlich",
                    "yearly": "Jährlich",
                    "saveUp": "Sparen Sie bis zu 40 %!"
            },
            "support": {
                    "title": "Brauchen Sie Hilfe?",
                    "subtitle": "Treten Sie unserem Support-Server bei, um Hilfe, Updates und Community zu erhalten",
                    "btnServer": "💬 Treten Sie dem Support-Server bei",
                    "btnEmail": "📧 E-Mail-Support"
            },
            "footer": {
                    "tagline": "Der ultimative Discord-Bot für Ihre Community",
                    "quickLinks": "Quicklinks",
                    "legal": "Legal",
                    "connect": "Verbinden",
                    "voteForUs": "⭐ Stimmen Sie für uns",
                    "privacy": "Datenschutzrichtlinie",
                    "terms": "Nutzungsbedingungen",
                    "copyright": "© 2025 Security Assistant Bot. Hergestellt mit ❤️ für Discord-Communitys"
            }
    },
    fr: {
            "nav": {
                    "features": "Caractéristiques",
                    "commands": "Commandes",
                    "pricing": "Tarifs",
                    "support": "Soutien"
            },
            "hero": {
                    "badge": "✨ Maintenant avec l'intégration de l'IA",
                    "title": "Le robot Discord ultime",
                    "titleGradient": "pour votre communauté",
                    "description": "Sécurité puissante, modération intelligente, système de mise à niveau attrayant, assistant IA, lecteur de musique et plus de 50 fonctionnalités pour dynamiser votre serveur Discord.",
                    "highlight1": "🔥 Système d'histoire alimenté par l'IA",
                    "highlight2": "🚀 Créateur de modèles automatisé",
                    "highlight3": "🎨 Génération d'images et de GIF",
                    "btnAdd": "➕ Ajouter à Discord",
                    "btnLearn": "📖 En savoir plus",
                    "stat1Number": "50+",
                    "stat1Label": "Commandes",
                    "stat2Number": "24h/24 et 7j/7",
                    "stat2Label": "Temps de disponibilité",
                    "stat3Number": "100%",
                    "stat3Label": "Gratuit"
            },
            "features": {
                    "title": "Fonctionnalités puissantes",
                    "subtitle": "Tout ce dont vous avez besoin pour gérer et développer votre communauté Discord",
                    "security": {
                            "title": "Sécurité avancée",
                            "desc": "Protection anti-raid, modération automatique, système de vérification et détection des menaces en temps réel pour assurer la sécurité de votre serveur.",
                            "items": [
                                    "Système anti-raid",
                                    "Modération automatique",
                                    "Vérification des membres",
                                    "Suivi des invitations"
                            ]
                    },
                    "leveling": {
                            "title": "Système de mise à niveau",
                            "desc": "Engagez votre communauté avec XP, niveaux, réalisations, classements et récompenses personnalisables.",
                            "items": [
                                    "Système XP et niveau",
                                    "50+ réalisations",
                                    "Récompenses personnalisées",
                                    "Classements"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Populaire",
                            "title": "Assistant IA",
                            "desc": "Propulsé par Google Gemini AI pour des conversations intelligentes, la génération d'images et une assistance intelligente.",
                            "items": [
                                    "Conversations naturelles",
                                    "Génération d'images",
                                    "Conscience du contexte",
                                    "Multilingue"
                            ]
                    },
                    "story": {
                            "badge": "🔥 Unique",
                            "title": "Système d'histoire interactif",
                            "desc": "Créez des histoires de jeu de rôle immersives avec des récits basés sur l'IA, des rôles multiples et des choix dynamiques !",
                            "items": [
                                    "Histoires générées par l'IA",
                                    "Plusieurs rôles de personnages",
                                    "Progression dynamique de l'histoire",
                                    "Un gameplay au tour par tour",
                                    "Modèles d'histoire"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Révolutionnaire",
                            "title": "Créateur de modèles d'IA",
                            "desc": "Générez des modèles de serveur Discord complets avec l'IA ! Canaux, rôles, autorisations : tout est automatisé !",
                            "items": [
                                    "Génération basée sur l'IA",
                                    "Catégories personnalisées",
                                    "Configuration automatique des rôles",
                                    "Modèles d'autorisation",
                                    "Déploiement en un clic"
                            ]
                    },
                    "agent": {
                            "badge": "🆕 NOUVEAU",
                            "title": "Agent IA",
                            "desc": "Exécutez n’importe quelle tâche Discord avec le langage naturel ! Dites simplement à l’IA ce que vous voulez et elle le fera automatiquement.",
                            "items": [
                                    "Commandes en langage naturel",
                                    "Créer des canaux et des rôles",
                                    "Modération des utilisateurs",
                                    "Automatisations complexes",
                                    "Systèmes de prison et de vérification"
                            ]
                    },
                    "music": {
                            "title": "Lecteur de musique",
                            "desc": "Diffusion de musique de haute qualité avec prise en charge des listes de lecture, effets audio et gestion des files d'attente.",
                            "items": [
                                    "YouTube et Spotify",
                                    "Listes de lecture",
                                    "Effets audio",
                                    "Système de file d'attente"
                            ]
                    },
                    "welcome": {
                            "title": "Système de bienvenue",
                            "desc": "Messages de bienvenue personnalisables, rôles automatiques et suivi des membres pour accueillir les nouveaux membres.",
                            "items": [
                                    "Messages personnalisés",
                                    "Rôles automatiques",
                                    "Images de bienvenue",
                                    "DM bienvenue"
                            ]
                    },
                    "language": {
                            "title": "Multilingue",
                            "desc": "Prise en charge complète de 8 langues avec changement de langue facile par serveur.",
                            "items": [
                                    "8 langues",
                                    "Paramètres par serveur",
                                    "Commutation facile",
                                    "Traduction complète"
                            ]
                    },
                    "analytics": {
                            "title": "Analytique",
                            "desc": "Informations sur la communauté, suivi des activités et statistiques détaillées pour comprendre votre serveur.",
                            "items": [
                                    "Suivi d'activité",
                                    "Points de vue des membres",
                                    "Statistiques de commande",
                                    "Indicateurs de croissance"
                            ]
                    },
                    "games": {
                            "title": "Mini-jeux",
                            "desc": "Des jeux amusants comprenant des quiz, du pendu, des défis mathématiques et bien plus encore pour divertir votre communauté.",
                            "items": [
                                    "Jeux-questionnaires",
                                    "Bourreau",
                                    "Défis mathématiques",
                                    "Classements"
                            ]
                    },
                    "roles": {
                            "title": "Rôles de réaction",
                            "desc": "Gestion facile des rôles avec des rôles de réaction et des menus de rôles personnalisés.",
                            "items": [
                                    "Rôles de réaction",
                                    "Menus personnalisés",
                                    "Plusieurs rôles",
                                    "Installation facile"
                            ]
                    },
                    "tickets": {
                            "title": "Système de tickets",
                            "desc": "Système de tickets d'assistance professionnel avec catégories, relevés de notes et gestion du personnel.",
                            "items": [
                                    "Plusieurs catégories",
                                    "Transcriptions automatiques",
                                    "Rôles du personnel",
                                    "Messages personnalisés"
                            ]
                    },
                    "toxicity": {
                            "title": "Filtre de toxicité",
                            "desc": "Modération de contenu basée sur l'IA pour détecter et filtrer automatiquement les messages toxiques.",
                            "items": [
                                    "Détection de l'IA",
                                    "Modération automatique",
                                    "Seuils personnalisés",
                                    "Enregistrement"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 NOUVEAU",
                            "title": "Notifications de Stream",
                            "desc": "Soyez notifié quand vos streamers Twitch et TikTok préférés passent en live ! Ne manquez plus jamais un stream.",
                            "items": [
                                    "Intégration Twitch",
                                    "Support TikTok Live",
                                    "Notifications personnalisées",
                                    "Suivi multi-streamers",
                                    "Alertes hors ligne"
                            ]
                    }
            },
            "commands": {
                    "title": "Commandes populaires",
                    "subtitle": "Plus de 150+ commandes dans plus de 20 catégories",
                    "footer": "Et bien d'autres encore ! Utilisez !commands dans Discord pour voir toutes les commandes disponibles.",
                    "viewAll": "📚 Afficher la liste complète des commandes"
            },
            "pricing": {
                    "title": "Tarification simple",
                    "subtitle": "Choisissez le plan qui convient à votre communauté",
                    "month": "/mois",
                    "year": "/année",
                    "monthly": "Mensuel",
                    "yearly": "Annuel",
                    "saveUp": "Économisez jusqu'à 40%!"
            },
            "support": {
                    "title": "Besoin d'aide ?",
                    "subtitle": "Rejoignez notre serveur d'assistance pour obtenir de l'aide, des mises à jour et la communauté",
                    "btnServer": "💬 Rejoignez le serveur d'assistance",
                    "btnEmail": "📧 Assistance par e-mail"
            },
            "footer": {
                    "tagline": "Le bot Discord ultime pour votre communauté",
                    "quickLinks": "Liens rapides",
                    "legal": "Légal",
                    "connect": "Connecter",
                    "voteForUs": "⭐ Votez pour nous",
                    "privacy": "politique de confidentialité",
                    "terms": "Conditions d'utilisation",
                    "copyright": "© 2025 Bot assistant de sécurité. Fabriqué avec ❤️ pour les communautés Discord"
            }
    },
    es: {
            "nav": {
                    "features": "Características",
                    "commands": "Comandos",
                    "pricing": "Precios",
                    "support": "Apoyo"
            },
            "hero": {
                    "badge": "✨ Ahora con integración de IA",
                    "title": "El robot de Discord definitivo",
                    "titleGradient": "para tu comunidad",
                    "description": "Potente seguridad, moderación inteligente, atractivo sistema de nivelación, asistente de inteligencia artificial, reproductor de música y más de 50 funciones para potenciar tu servidor Discord.",
                    "highlight1": "🔥 Sistema de historias impulsado por IA",
                    "highlight2": "🚀 Creador de plantillas automatizado",
                    "highlight3": "🎨 Generación de imágenes y GIF",
                    "btnAdd": "➕ Añadir a Discord",
                    "btnLearn": "📖 Más información",
                    "stat1Number": "50+",
                    "stat1Label": "Comandos",
                    "stat2Number": "24/7",
                    "stat2Label": "tiempo de actividad",
                    "stat3Number": "100%",
                    "stat3Label": "Gratis"
            },
            "features": {
                    "title": "Funciones potentes",
                    "subtitle": "Todo lo que necesitas para administrar y hacer crecer tu comunidad Discord",
                    "security": {
                            "title": "Seguridad avanzada",
                            "desc": "Protección anti-incursión, moderación automática, sistema de verificación y detección de amenazas en tiempo real para mantener su servidor seguro.",
                            "items": [
                                    "Sistema anti-incursión",
                                    "Moderación automática",
                                    "Verificación de miembro",
                                    "Seguimiento de invitaciones"
                            ]
                    },
                    "leveling": {
                            "title": "Sistema de nivelación",
                            "desc": "Involucra a tu comunidad con XP, niveles, logros, tablas de clasificación y recompensas personalizables.",
                            "items": [
                                    "XP y sistema de niveles",
                                    "Más de 50 logros",
                                    "Recompensas personalizadas",
                                    "Tablas de clasificación"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Populares",
                            "title": "Asistente de IA",
                            "desc": "Desarrollado por Google Gemini AI para conversaciones inteligentes, generación de imágenes y asistencia inteligente.",
                            "items": [
                                    "Conversaciones naturales",
                                    "Generación de imágenes",
                                    "Conciencia del contexto",
                                    "Multi-idioma"
                            ]
                    },
                    "story": {
                            "badge": "🔥 Único",
                            "title": "Sistema de historias interactivas",
                            "desc": "¡Crea historias inmersivas de juegos de rol con narrativas impulsadas por IA, múltiples roles y opciones dinámicas!",
                            "items": [
                                    "Historias generadas por IA",
                                    "Múltiples roles de personajes",
                                    "Progresión dinámica de la historia",
                                    "Juego por turnos",
                                    "Plantillas de historias"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Revolucionario",
                            "title": "Creador de plantillas de IA",
                            "desc": "¡Genera plantillas completas de servidor Discord con IA! Canales, roles, permisos: ¡todo automatizado!",
                            "items": [
                                    "Generación impulsada por IA",
                                    "Categorías personalizadas",
                                    "Configuración automática de roles",
                                    "Plantillas de permisos",
                                    "Implementación con un solo clic"
                            ]
                    },
                    "agent": {
                            "badge": "🆕 NUEVO",
                            "title": "Agente de IA",
                            "desc": "¡Ejecuta cualquier tarea de Discord con lenguaje natural! Simplemente dile a la IA lo que quieres y lo hará automáticamente.",
                            "items": [
                                    "Comandos en lenguaje natural",
                                    "Crear canales y roles",
                                    "Moderación de usuarios",
                                    "Automatizaciones complejas",
                                    "Sistemas carcelarios y de verificación"
                            ]
                    },
                    "music": {
                            "title": "Reproductor de música",
                            "desc": "Transmisión de música de alta calidad con compatibilidad con listas de reproducción, efectos de audio y gestión de colas.",
                            "items": [
                                    "YouTube y Spotify",
                                    "Listas de reproducción",
                                    "efectos de audio",
                                    "sistema de cola"
                            ]
                    },
                    "welcome": {
                            "title": "Sistema de bienvenida",
                            "desc": "Mensajes de bienvenida personalizables, roles automáticos y seguimiento de miembros para saludar a los nuevos miembros.",
                            "items": [
                                    "Mensajes personalizados",
                                    "Roles automáticos",
                                    "Imágenes de bienvenida",
                                    "DM bienvenido"
                            ]
                    },
                    "language": {
                            "title": "Varios idiomas",
                            "desc": "Soporte completo para 8 idiomas con fácil cambio de idioma por servidor.",
                            "items": [
                                    "8 idiomas",
                                    "Configuración por servidor",
                                    "Cambio fácil",
                                    "Traducción completa"
                            ]
                    },
                    "analytics": {
                            "title": "Analítica",
                            "desc": "Información de la comunidad, seguimiento de actividad y estadísticas detalladas para comprender su servidor.",
                            "items": [
                                    "Seguimiento de actividad",
                                    "Perspectivas de los miembros",
                                    "Estadísticas de comando",
                                    "Métricas de crecimiento"
                            ]
                    },
                    "games": {
                            "title": "Minijuegos",
                            "desc": "Juegos divertidos que incluyen trivia, ahorcado, desafíos matemáticos y más para entretener a tu comunidad.",
                            "items": [
                                    "Juegos de preguntas",
                                    "Verdugo",
                                    "Desafíos matemáticos",
                                    "Tablas de clasificación"
                            ]
                    },
                    "roles": {
                            "title": "Roles de reacción",
                            "desc": "Fácil gestión de roles con roles de reacción y menús de roles personalizados.",
                            "items": [
                                    "Roles de reacción",
                                    "Menús personalizados",
                                    "Múltiples roles",
                                    "Fácil configuración"
                            ]
                    },
                    "tickets": {
                            "title": "Sistema de tickets",
                            "desc": "Sistema de tickets de soporte profesional con categorías, transcripciones y gestión de personal.",
                            "items": [
                                    "Múltiples categorías",
                                    "Transcripciones automáticas",
                                    "Funciones del personal",
                                    "Mensajes personalizados"
                            ]
                    },
                    "toxicity": {
                            "title": "Filtro de toxicidad",
                            "desc": "Moderación de contenido impulsada por IA para detectar y filtrar mensajes tóxicos automáticamente.",
                            "items": [
                                    "Detección de IA",
                                    "Moderación automática",
                                    "Umbrales personalizados",
                                    "Registro"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 NUEVO",
                            "title": "Notificaciones de Stream",
                            "desc": "¡Recibe notificaciones cuando tus streamers favoritos de Twitch y TikTok estén en vivo! Nunca te pierdas un stream.",
                            "items": [
                                    "Integración con Twitch",
                                    "Soporte TikTok Live",
                                    "Notificaciones personalizadas",
                                    "Seguimiento multi-streamer",
                                    "Alertas de desconexión"
                            ]
                    }
            },
            "commands": {
                    "title": "Comandos populares",
                    "subtitle": "Más de 150 comandos en más de 20 categorías",
                    "footer": "¡Y muchos más! Utilice los comandos !en Discord para ver todos los comandos disponibles.",
                    "viewAll": "📚 Ver lista completa de comandos"
            },
            "pricing": {
                    "title": "Precios sencillos",
                    "subtitle": "Elija el plan que se adapte a su comunidad",
                    "month": "/mes",
                    "year": "/año",
                    "monthly": "Mensual",
                    "yearly": "Anual",
                    "saveUp": "¡Ahorra hasta un 40%!"
            },
            "support": {
                    "title": "¿Necesitar ayuda?",
                    "subtitle": "Únase a nuestro servidor de soporte para obtener asistencia, actualizaciones y comunidad.",
                    "btnServer": "💬 Únase al servidor de soporte",
                    "btnEmail": "📧 Soporte por correo electrónico"
            },
            "footer": {
                    "tagline": "El bot de Discord definitivo para tu comunidad",
                    "quickLinks": "Enlaces rápidos",
                    "legal": "Legal",
                    "connect": "Conectar",
                    "voteForUs": "⭐ Vota por nosotros",
                    "privacy": "política de privacidad",
                    "terms": "Términos de servicio",
                    "copyright": "© 2025 Asistente de seguridad Bot. Hecho con ❤️ para comunidades de Discord"
            }
    },
    tr: {
            "nav": {
                    "features": "Özellikler",
                    "commands": "Komutlar",
                    "pricing": "Fiyatlandırma",
                    "support": "Destek"
            },
            "hero": {
                    "badge": "✨ Artık Yapay Zeka Entegrasyonuyla",
                    "title": "Nihai Discord Botu",
                    "titleGradient": "Topluluğunuz için",
                    "description": "Güçlü güvenlik, akıllı denetleme, ilgi çekici seviyelendirme sistemi, yapay zeka asistanı, müzik çalar ve Discord sunucunuzu güçlendirecek 50'den fazla özellik.",
                    "highlight1": "🔥 Yapay Zeka Destekli Hikaye Sistemi",
                    "highlight2": "🚀 Otomatik Şablon Oluşturucu",
                    "highlight3": "🎨 Resim ve GIF Oluşturma",
                    "btnAdd": "➕ Discord'a Ekle",
                    "btnLearn": "📖 Daha Fazla Bilgi Edinin",
                    "stat1Number": "50+",
                    "stat1Label": "Komutlar",
                    "stat2Number": "7/24",
                    "stat2Label": "Çalışma süresi",
                    "stat3Number": "%100",
                    "stat3Label": "Özgür"
            },
            "features": {
                    "title": "Güçlü Özellikler",
                    "subtitle": "Discord topluluğunuzu yönetmek ve büyütmek için ihtiyacınız olan her şey",
                    "security": {
                            "title": "Gelişmiş Güvenlik",
                            "desc": "Sunucunuzu güvende tutmak için saldırı önleme koruması, otomatik denetleme, doğrulama sistemi ve gerçek zamanlı tehdit algılama.",
                            "items": [
                                    "Baskın önleme sistemi",
                                    "Otomatik denetleme",
                                    "Üye doğrulama",
                                    "Takibi davet et"
                            ]
                    },
                    "leveling": {
                            "title": "Tesviye Sistemi",
                            "desc": "XP, seviyeler, başarılar, liderlik tabloları ve özelleştirilebilir ödüllerle topluluğunuzla etkileşime geçin.",
                            "items": [
                                    "XP ve Seviye sistemi",
                                    "50+ Başarı",
                                    "Özel ödüller",
                                    "Skor tabloları"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Popüler",
                            "title": "Yapay Zeka Asistanı",
                            "desc": "Akıllı konuşmalar, görüntü oluşturma ve akıllı yardım için Google Gemini AI tarafından desteklenmektedir.",
                            "items": [
                                    "Doğal konuşmalar",
                                    "Görüntü oluşturma",
                                    "Bağlam farkındalığı",
                                    "Çoklu dil"
                            ]
                    },
                    "story": {
                            "badge": "🔥 Benzersiz",
                            "title": "İnteraktif Hikaye Sistemi",
                            "desc": "Yapay zeka destekli anlatılar, çoklu roller ve dinamik seçimlerle sürükleyici rol yapma hikayeleri yaratın!",
                            "items": [
                                    "Yapay zeka tarafından oluşturulan hikayeler",
                                    "Çoklu karakter rolleri",
                                    "Dinamik hikaye ilerlemesi",
                                    "Sıra tabanlı oyun",
                                    "Hikaye şablonları"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Devrimci",
                            "title": "AI Şablon Oluşturucu",
                            "desc": "Yapay zeka ile eksiksiz Discord sunucu şablonları oluşturun! Kanallar, roller, izinler; hepsi otomatik!",
                            "items": [
                                    "Yapay zeka destekli nesil",
                                    "Özel kategoriler",
                                    "Otomatik rol kurulumu",
                                    "İzin şablonları",
                                    "Tek tıklamayla dağıtım"
                            ]
                    },
                    "agent": {
                            "badge": "🆕 YENİ",
                            "title": "Yapay Zeka Temsilcisi",
                            "desc": "Herhangi bir Discord görevini doğal dille gerçekleştirin! Yapay zekaya ne istediğinizi söyleyin, o da bunu otomatik olarak yapsın.",
                            "items": [
                                    "Doğal dil komutları",
                                    "Kanallar ve roller oluşturun",
                                    "Kullanıcı denetimi",
                                    "Karmaşık otomasyonlar",
                                    "Hapishane ve doğrulama sistemleri"
                            ]
                    },
                    "music": {
                            "title": "Müzik Çalar",
                            "desc": "Çalma listesi desteği, ses efektleri ve kuyruk yönetimiyle yüksek kaliteli müzik akışı.",
                            "items": [
                                    "YouTube ve Spotify",
                                    "Çalma listeleri",
                                    "Ses efektleri",
                                    "Kuyruk sistemi"
                            ]
                    },
                    "welcome": {
                            "title": "Karşılama Sistemi",
                            "desc": "Yeni üyeleri karşılamak için özelleştirilebilir karşılama mesajları, otomatik roller ve üye takibi.",
                            "items": [
                                    "Özel mesajlar",
                                    "Otomatik roller",
                                    "Hoş geldiniz görselleri",
                                    "DM'ye hoş geldiniz"
                            ]
                    },
                    "language": {
                            "title": "Çoklu Dil",
                            "desc": "Sunucu başına kolay dil değiştirme özelliğiyle 8 dil için tam destek.",
                            "items": [
                                    "8 Dil",
                                    "Sunucu başına ayarlar",
                                    "Kolay geçiş",
                                    "Tam çeviri"
                            ]
                    },
                    "analytics": {
                            "title": "Analitik",
                            "desc": "Sunucunuzu anlamak için topluluk bilgileri, etkinlik takibi ve ayrıntılı istatistikler.",
                            "items": [
                                    "Etkinlik takibi",
                                    "Üye görüşleri",
                                    "Komut istatistikleri",
                                    "Büyüme metrikleri"
                            ]
                    },
                    "games": {
                            "title": "Mini Oyunlar",
                            "desc": "Topluluğunuzu eğlendirmek için trivia, cellat, matematik zorlukları ve daha fazlasını içeren eğlenceli oyunlar.",
                            "items": [
                                    "Trivia oyunları",
                                    "Cellat",
                                    "Matematik zorlukları",
                                    "Skor tabloları"
                            ]
                    },
                    "roles": {
                            "title": "Reaksiyon Rolleri",
                            "desc": "Tepki rolleri ve özel rol menüleriyle kolay rol yönetimi.",
                            "items": [
                                    "Reaksiyon rolleri",
                                    "Özel menüler",
                                    "Çoklu roller",
                                    "Kolay kurulum"
                            ]
                    },
                    "tickets": {
                            "title": "Bilet Sistemi",
                            "desc": "Kategoriler, transkriptler ve personel yönetimi ile profesyonel destek bilet sistemi.",
                            "items": [
                                    "Çoklu kategoriler",
                                    "Otomatik transkriptler",
                                    "Personel rolleri",
                                    "Özel mesajlar"
                            ]
                    },
                    "toxicity": {
                            "title": "Toksisite Filtresi",
                            "desc": "Zehirli mesajları otomatik olarak tespit etmek ve filtrelemek için yapay zeka destekli içerik denetimi.",
                            "items": [
                                    "AI tespiti",
                                    "Otomatik denetleme",
                                    "Özel eşikler",
                                    "Günlüğe kaydetme"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 YENİ",
                            "title": "Yayın Bildirimleri",
                            "desc": "Favori Twitch ve TikTok yayıncılarınız canlı yayına başladığında bildirim alın! Bir daha asla yayın kaçırmayın.",
                            "items": [
                                    "Twitch entegrasyonu",
                                    "TikTok Live desteği",
                                    "Özel bildirimler",
                                    "Çoklu yayıncı takibi",
                                    "Çevrimdışı uyarıları"
                            ]
                    }
            },
            "commands": {
                    "title": "Popüler Komutlar",
                    "subtitle": "20'den fazla kategoride 150'den fazla komut",
                    "footer": "Ve çok daha fazlası! Mevcut tüm komutları görmek için Discord'da !commands komutunu kullanın.",
                    "viewAll": "📚 Tam Komut Listesini Görüntüle"
            },
            "pricing": {
                    "title": "Basit Fiyatlandırma",
                    "subtitle": "Topluluğunuza uygun planı seçin",
                    "month": "/ay",
                    "year": "/yıl",
                    "monthly": "Aylık",
                    "yearly": "Yıllık",
                    "saveUp": "%40'a kadar tasarruf edin!"
            },
            "support": {
                    "title": "Yardıma mı ihtiyacınız var?",
                    "subtitle": "Yardım, güncellemeler ve topluluk için destek sunucumuza katılın",
                    "btnServer": "💬 Destek Sunucusuna Katılın",
                    "btnEmail": "📧 E-posta Desteği"
            },
            "footer": {
                    "tagline": "Topluluğunuz için en iyi Discord botu",
                    "quickLinks": "Hızlı Bağlantılar",
                    "legal": "Yasal",
                    "connect": "Bağlamak",
                    "voteForUs": "⭐ Bize Oy Verin",
                    "privacy": "Gizlilik Politikası",
                    "terms": "Hizmet Şartları",
                    "copyright": "© 2025 Güvenlik Asistanı Botu. Discord Toplulukları için ❤️ ile yapıldı"
            }
    },
    ru: {
            "nav": {
                    "features": "Функции",
                    "commands": "Команды",
                    "pricing": "Цены",
                    "support": "Поддерживать"
            },
            "hero": {
                    "badge": "✨ Теперь с интеграцией ИИ",
                    "title": "Лучший Discord-бот",
                    "titleGradient": "для вашего сообщества",
                    "description": "Мощная безопасность, интеллектуальная модерация, привлекательная система прокачки, AI-помощник, музыкальный проигрыватель и более 50 функций, которые расширят возможности вашего сервера Discord.",
                    "highlight1": "🔥 Система историй на базе искусственного интеллекта",
                    "highlight2": "🚀 Автоматический создатель шаблонов",
                    "highlight3": "🎨 Генерация изображений и GIF",
                    "btnAdd": "➕ Добавить в Discord",
                    "btnLearn": "📖 Узнать больше",
                    "stat1Number": "50+",
                    "stat1Label": "Команды",
                    "stat2Number": "24/7",
                    "stat2Label": "Время работы",
                    "stat3Number": "100%",
                    "stat3Label": "Бесплатно"
            },
            "features": {
                    "title": "Мощные функции",
                    "subtitle": "Все, что вам нужно для управления и развития вашего сообщества Discord",
                    "security": {
                            "title": "Расширенная безопасность",
                            "desc": "Антирейдовая защита, автоматическая модерация, система проверки и обнаружение угроз в реальном времени для обеспечения безопасности вашего сервера.",
                            "items": [
                                    "Антирейдовая система",
                                    "Автомодерация",
                                    "Проверка участника",
                                    "Отслеживание приглашений"
                            ]
                    },
                    "leveling": {
                            "title": "Система выравнивания",
                            "desc": "Привлекайте свое сообщество с помощью опыта, уровней, достижений, таблиц лидеров и настраиваемых наград.",
                            "items": [
                                    "Система опыта и уровней",
                                    "50+ достижений",
                                    "Пользовательские награды",
                                    "Таблицы лидеров"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Популярный",
                            "title": "ИИ-помощник",
                            "desc": "Работает на базе искусственного интеллекта Google Gemini для интеллектуального общения, создания изображений и интеллектуальной помощи.",
                            "items": [
                                    "Естественные разговоры",
                                    "Генерация изображений",
                                    "Осведомленность о контексте",
                                    "Многоязычный"
                            ]
                    },
                    "story": {
                            "badge": "🔥Уникальный",
                            "title": "Интерактивная система историй",
                            "desc": "Создавайте захватывающие ролевые истории с повествованием на базе искусственного интеллекта, множеством ролей и динамичным выбором!",
                            "items": [
                                    "Истории, созданные ИИ",
                                    "Несколько ролей персонажей",
                                    "Динамичное развитие сюжета",
                                    "Пошаговый геймплей",
                                    "Шаблоны историй"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Революционный",
                            "title": "Создатель шаблонов ИИ",
                            "desc": "Создавайте полные шаблоны серверов Discord с помощью ИИ! Каналы, роли, разрешения – все автоматизировано!",
                            "items": [
                                    "Поколение на основе искусственного интеллекта",
                                    "Пользовательские категории",
                                    "Автоматическая настройка роли",
                                    "Шаблоны разрешений",
                                    "Развертывание в один клик"
                            ]
                    },
                    "agent": {
                            "badge": "🆕НОВИНКА",
                            "title": "ИИ-агент",
                            "desc": "Выполняйте любую задачу Discord на естественном языке! Просто скажите ИИ, чего вы хотите, и он сделает это автоматически.",
                            "items": [
                                    "Команды естественного языка",
                                    "Создание каналов и ролей",
                                    "Пользовательская модерация",
                                    "Комплексная автоматизация",
                                    "Тюрьма и системы проверки"
                            ]
                    },
                    "music": {
                            "title": "Музыкальный плеер",
                            "desc": "Высококачественная потоковая передача музыки с поддержкой списков воспроизведения, звуковыми эффектами и управлением очередями.",
                            "items": [
                                    "YouTube и Spotify",
                                    "Плейлисты",
                                    "Аудио эффекты",
                                    "Система очередей"
                            ]
                    },
                    "welcome": {
                            "title": "Приветственная система",
                            "desc": "Настраиваемые приветственные сообщения, автоматические роли и отслеживание участников для приветствия новых участников.",
                            "items": [
                                    "Пользовательские сообщения",
                                    "Авто-роли",
                                    "Приветственные изображения",
                                    "DM, добро пожаловать"
                            ]
                    },
                    "language": {
                            "title": "Многоязычный",
                            "desc": "Полная поддержка 8 языков с простым переключением языков на сервере.",
                            "items": [
                                    "8 языков",
                                    "Настройки для каждого сервера",
                                    "Легкое переключение",
                                    "Полный перевод"
                            ]
                    },
                    "analytics": {
                            "title": "Аналитика",
                            "desc": "Информация о сообществе, отслеживание активности и подробная статистика для понимания вашего сервера.",
                            "items": [
                                    "Отслеживание активности",
                                    "Мнения участников",
                                    "Статистика команд",
                                    "Показатели роста"
                            ]
                    },
                    "games": {
                            "title": "Мини-игры",
                            "desc": "Веселые игры, включая викторины, палача, математические задачи и многое другое, чтобы развлечь ваше сообщество.",
                            "items": [
                                    "Викторины",
                                    "Палач",
                                    "Математические задачи",
                                    "Таблицы лидеров"
                            ]
                    },
                    "roles": {
                            "title": "Роли реакции",
                            "desc": "Простое управление ролями с помощью ролей реагирования и меню настраиваемых ролей.",
                            "items": [
                                    "Роли реакции",
                                    "Пользовательские меню",
                                    "Несколько ролей",
                                    "Простая настройка"
                            ]
                    },
                    "tickets": {
                            "title": "Билетная система",
                            "desc": "Система заявок профессиональной поддержки с категориями, стенограммами и управлением персоналом.",
                            "items": [
                                    "Несколько категорий",
                                    "Автоматические расшифровки",
                                    "Роли персонала",
                                    "Пользовательские сообщения"
                            ]
                    },
                    "toxicity": {
                            "title": "Фильтр токсичности",
                            "desc": "Модерация контента на базе искусственного интеллекта для автоматического обнаружения и фильтрации токсичных сообщений.",
                            "items": [
                                    "Обнаружение ИИ",
                                    "Автоматическая модерация",
                                    "Пользовательские пороги",
                                    "Ведение журнала"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 НОВОЕ",
                            "title": "Уведомления о стримах",
                            "desc": "Получайте уведомления, когда ваши любимые стримеры Twitch и TikTok выходят в эфир! Больше никогда не пропустите стрим.",
                            "items": [
                                    "Интеграция с Twitch",
                                    "Поддержка TikTok Live",
                                    "Настраиваемые уведомления",
                                    "Отслеживание нескольких стримеров",
                                    "Оповещения об офлайне"
                            ]
                    }
            },
            "commands": {
                    "title": "Популярные команды",
                    "subtitle": "Более 150+ команд в более чем 20 категориях",
                    "footer": "И многое другое! Используйте команды ! в Discord, чтобы просмотреть все доступные команды.",
                    "viewAll": "📚 Посмотреть полный список команд"
            },
            "pricing": {
                    "title": "Простое ценообразование",
                    "subtitle": "Выберите план, который подходит вашему сообществу",
                    "month": "/месяц",
                    "year": "/год",
                    "monthly": "Ежемесячно",
                    "yearly": "Ежегодно",
                    "saveUp": "Экономьте до 40%!"
            },
            "support": {
                    "title": "Нужна помощь?",
                    "subtitle": "Присоединяйтесь к нашему серверу поддержки для получения помощи, обновлений и общения с сообществом.",
                    "btnServer": "💬 Присоединяйтесь к серверу поддержки",
                    "btnEmail": "📧 Поддержка по электронной почте"
            },
            "footer": {
                    "tagline": "Лучший бот Discord для вашего сообщества",
                    "quickLinks": "Быстрые ссылки",
                    "legal": "Юридический",
                    "connect": "Соединять",
                    "voteForUs": "⭐ Голосуйте за нас",
                    "privacy": "политика конфиденциальности",
                    "terms": "Условия использования",
                    "copyright": "© 2025 Security Assistant Bot. Сделано с ❤️ для сообществ Discord"
            }
    },
    pt: {
            "nav": {
                    "features": "Características",
                    "commands": "Comandos",
                    "pricing": "Preços",
                    "support": "Apoiar"
            },
            "hero": {
                    "badge": "✨ Agora com integração de IA",
                    "title": "O bot de discórdia definitivo",
                    "titleGradient": "para sua comunidade",
                    "description": "Segurança poderosa, moderação inteligente, sistema de nivelamento envolvente, assistente de IA, reprodutor de música e mais de 50 recursos para turbinar seu servidor Discord.",
                    "highlight1": "🔥 Sistema de história baseado em IA",
                    "highlight2": "🚀 Criador de modelo automatizado",
                    "highlight3": "🎨 Geração de imagens e GIFs",
                    "btnAdd": "➕ Adicionar ao Discord",
                    "btnLearn": "📖 Saiba mais",
                    "stat1Number": "Mais de 50",
                    "stat1Label": "Comandos",
                    "stat2Number": "24 horas por dia, 7 dias por semana",
                    "stat2Label": "Tempo de atividade",
                    "stat3Number": "100%",
                    "stat3Label": "Livre"
            },
            "features": {
                    "title": "Recursos poderosos",
                    "subtitle": "Tudo que você precisa para gerenciar e expandir sua comunidade Discord",
                    "security": {
                            "title": "Segurança Avançada",
                            "desc": "Proteção anti-raid, moderação automática, sistema de verificação e detecção de ameaças em tempo real para manter seu servidor seguro.",
                            "items": [
                                    "Sistema anti-ataque",
                                    "Moderação automática",
                                    "Verificação de membro",
                                    "Rastreamento de convites"
                            ]
                    },
                    "leveling": {
                            "title": "Sistema de Nivelamento",
                            "desc": "Envolva sua comunidade com XP, níveis, conquistas, tabelas de classificação e recompensas personalizáveis.",
                            "items": [
                                    "Sistema XP e Nível",
                                    "Mais de 50 conquistas",
                                    "Recompensas personalizadas",
                                    "Tabelas de classificação"
                            ]
                    },
                    "ai": {
                            "badge": "⭐ Populares",
                            "title": "Assistente de IA",
                            "desc": "Desenvolvido com Google Gemini AI para conversas inteligentes, geração de imagens e assistência inteligente.",
                            "items": [
                                    "Conversas naturais",
                                    "Geração de imagem",
                                    "Consciência do contexto",
                                    "Multilíngue"
                            ]
                    },
                    "story": {
                            "badge": "🔥 Único",
                            "title": "Sistema de história interativa",
                            "desc": "Crie histórias envolventes de RPG com narrativas baseadas em IA, vários papéis e escolhas dinâmicas!",
                            "items": [
                                    "Histórias geradas por IA",
                                    "Vários papéis de personagens",
                                    "Progressão dinâmica da história",
                                    "Jogabilidade baseada em turnos",
                                    "Modelos de história"
                            ]
                    },
                    "template": {
                            "badge": "🚀 Revolucionário",
                            "title": "Criador de modelo de IA",
                            "desc": "Gere modelos completos de servidor Discord com IA! Canais, funções, permissões – tudo automatizado!",
                            "items": [
                                    "Geração alimentada por IA",
                                    "Categorias personalizadas",
                                    "Configuração automática de função",
                                    "Modelos de permissão",
                                    "Implantação com um clique"
                            ]
                    },
                    "agent": {
                            "badge": "🆕 NOVO",
                            "title": "Agente de IA",
                            "desc": "Execute qualquer tarefa do Discord com linguagem natural! Basta dizer à IA o que você deseja e ela fará isso automaticamente.",
                            "items": [
                                    "Comandos de linguagem natural",
                                    "Crie canais e funções",
                                    "Moderação do usuário",
                                    "Automações complexas",
                                    "Sistemas de prisão e verificação"
                            ]
                    },
                    "music": {
                            "title": "Leitor de música",
                            "desc": "Streaming de música de alta qualidade com suporte para lista de reprodução, efeitos de áudio e gerenciamento de filas.",
                            "items": [
                                    "YouTube e Spotify",
                                    "Listas de reprodução",
                                    "Efeitos de áudio",
                                    "Sistema de fila"
                            ]
                    },
                    "welcome": {
                            "title": "Sistema de boas-vindas",
                            "desc": "Mensagens de boas-vindas personalizáveis, funções automáticas e rastreamento de membros para cumprimentar novos membros.",
                            "items": [
                                    "Mensagens personalizadas",
                                    "Funções automáticas",
                                    "Imagens de boas-vindas",
                                    "DM bem-vindo"
                            ]
                    },
                    "language": {
                            "title": "Multilíngue",
                            "desc": "Suporte completo para 8 idiomas com fácil troca de idioma por servidor.",
                            "items": [
                                    "8 idiomas",
                                    "Configurações por servidor",
                                    "Troca fácil",
                                    "Tradução completa"
                            ]
                    },
                    "analytics": {
                            "title": "Análise",
                            "desc": "Insights da comunidade, rastreamento de atividades e estatísticas detalhadas para entender seu servidor.",
                            "items": [
                                    "Rastreamento de atividades",
                                    "Informações dos membros",
                                    "Estatísticas de comando",
                                    "Métricas de crescimento"
                            ]
                    },
                    "games": {
                            "title": "Minijogos",
                            "desc": "Jogos divertidos, incluindo curiosidades, carrasco, desafios matemáticos e muito mais para entreter sua comunidade.",
                            "items": [
                                    "Jogos de curiosidades",
                                    "Carrasco",
                                    "Desafios matemáticos",
                                    "Tabelas de classificação"
                            ]
                    },
                    "roles": {
                            "title": "Papéis de reação",
                            "desc": "Fácil gerenciamento de funções com funções de reação e menus de funções personalizados.",
                            "items": [
                                    "Papéis de reação",
                                    "Menus personalizados",
                                    "Múltiplas funções",
                                    "Configuração fácil"
                            ]
                    },
                    "tickets": {
                            "title": "Sistema de ingressos",
                            "desc": "Sistema de tickets de suporte profissional com categorias, transcrições e gerenciamento de equipe.",
                            "items": [
                                    "Múltiplas categorias",
                                    "Transcrições automáticas",
                                    "Funções da equipe",
                                    "Mensagens personalizadas"
                            ]
                    },
                    "toxicity": {
                            "title": "Filtro de toxicidade",
                            "desc": "Moderação de conteúdo com tecnologia de IA para detectar e filtrar mensagens tóxicas automaticamente.",
                            "items": [
                                    "Detecção de IA",
                                    "Moderação automática",
                                    "Limites personalizados",
                                    "Registro"
                            ]
                    },
                    "streaming": {
                            "badge": "📺 NOVO",
                            "title": "Notificações de Stream",
                            "desc": "Receba notificações quando seus streamers favoritos do Twitch e TikTok entrarem ao vivo! Nunca mais perca uma transmissão.",
                            "items": [
                                    "Integração com Twitch",
                                    "Suporte TikTok Live",
                                    "Notificações personalizadas",
                                    "Rastreamento multi-streamer",
                                    "Alertas de offline"
                            ]
                    }
            },
            "commands": {
                    "title": "Comandos populares",
                    "subtitle": "Mais de 150 comandos em mais de 20 categorias",
                    "footer": "E muito mais! Use !commands no Discord para ver todos os comandos disponíveis.",
                    "viewAll": "📚 Ver lista completa de comandos"
            },
            "pricing": {
                    "title": "Preço Simples",
                    "subtitle": "Escolha o plano que se adapta à sua comunidade",
                    "month": "/mês",
                    "year": "/ano",
                    "monthly": "Mensal",
                    "yearly": "Anual",
                    "saveUp": "Economize até 40%!"
            },
            "support": {
                    "title": "Precisar de ajuda?",
                    "subtitle": "Junte-se ao nosso servidor de suporte para obter assistência, atualizações e comunidade",
                    "btnServer": "💬 Junte-se ao servidor de suporte",
                    "btnEmail": "📧 Suporte por e-mail"
            },
            "footer": {
                    "tagline": "O bot Discord definitivo para sua comunidade",
                    "quickLinks": "Links rápidos",
                    "legal": "Jurídico",
                    "connect": "Conectar",
                    "voteForUs": "⭐ Vote em nós",
                    "privacy": "política de Privacidade",
                    "terms": "Termos de Serviço",
                    "copyright": "© 2025 Bot do Assistente de Segurança. Feito com ❤️ para comunidades Discord"
            }
    }

};
