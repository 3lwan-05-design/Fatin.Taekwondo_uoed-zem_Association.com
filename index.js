// --- PRELOADER LOGIC ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.getElementById('body');
    
    // مدة 10 ثواني كما طلبت
    setTimeout(() => {
        preloader.style.opacity = '0';
        body.classList.remove('overflow-hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
            // Trigger AOS after loader is gone for better effect
            AOS.refresh(); 
        }, 500);
    }, 10000); 
});

// Init Animation
AOS.init({
    duration: 1000,
    once: true,
    offset: 50
});

// MODAL LOGIC (لنافذة التسجيل)
function submitForm() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// TRANSLATIONS (هنا توجد نصوص الترجمة)
const resources = {
    fr: {
        nav_home: "Accueil", nav_masters: "Les Maîtres", nav_team: "Champions", nav_join: "Rejoindre", nav_reviews: "Avis", nav_planning: "Tarifs",
        hero_subtitle: "L'Art du Combat", hero_desc: "Plus qu'un sport, un destin. Discipline d'élite à Oued Zem.", btn_start: "Commencer", btn_planning: "Horaires", btn_history: "Histoire TKD",
        coach_title: "NOS", coach_title_2: "MAÎTRES", coach_subtitle: "Choisissez votre Mentor",
        coach_1_role: "Grand Maître / Directeur Technique", coach_2_role: "Entraîneur Combat / Kyorugi",
        skill_tech: "Technique (Poomsae)", skill_fight: "Combat (Sparring)",
        plan_title: "OFFRES", plan_title_2: "CLUB", plan_subtitle: "Choisissez la formule qui vous correspond", btn_select: "CHOISIR",
        team_title_1: "NOS", team_title_2: "CHAMPIONS", team_subtitle: "L'Élite de Oued Zem",
        role_fighter: "Combattant",
        rev_title: "AVIS", rate_global: "Note Globale", rate_quality: "Qualité Entraînement", rate_atmos: "Ambiance Club",
        rate_based_on: "Basé sur 120 avis", rate_tech_label: "Technique", rate_disc_label: "Discipline",
        join_title: "PRÊT À <span class='text-neonBlue'>COMBATTRE ?</span>", join_subtitle: "Remplissez ce formulaire pour votre première séance.",
        form_fname: "Prénom", form_lname: "Nom", form_phone: "Tél (WhatsApp)", form_program: "Programme", form_btn: "VALIDER L'INSCRIPTION",
        prog_select: "Sélectionnez un Programme", prog_kids: "Kids (4-12 ans)", prog_elite: "Elite Competition", prog_adult: "Adultes / Fitness",
        loc_title: "LOCALISATION",
        footer_city: "Oued-Zem", footer_copy: "Copyright © 2024 FATIN TKD.", footer_dev: "Développeur :"
    },
    en: {
        nav_home: "Home", nav_masters: "Masters", nav_team: "Champions", nav_join: "Join", nav_reviews: "Reviews", nav_planning: "Pricing",
        hero_subtitle: "Art of Combat", hero_desc: "More than a sport, a destiny. Elite discipline in Oued Zem.", btn_start: "Start Now", btn_planning: "Schedule",
        coach_title: "OUR", coach_title_2: "MASTERS", coach_subtitle: "Choose your Mentor",
        coach_1_role: "Grand Master / Technical Director", coach_2_role: "Fight Coach / Kyorugi",
        skill_tech: "Technique (Poomsae)", skill_fight: "Fight (Sparring)",
        plan_title: "CLUB", plan_title_2: "PRICING", plan_subtitle: "Choose the plan that suits you", btn_select: "SELECT",
        team_title_1: "OUR", team_title_2: "CHAMPIONS", team_subtitle: "Oued Zem's Elite",
        role_fighter: "Fighter",
        rev_title: "REVIEWS", rate_global: "Global Rating", rate_quality: "Training Quality", rate_atmos: "Atmosphere",
        rate_based_on: "Based on 120 reviews", rate_tech_label: "Technique", rate_disc_label: "Discipline",
        join_title: "READY TO <span class='text-neonBlue'>FIGHT?</span>", join_subtitle: "Fill this form for your first session.",
        form_fname: "First Name", form_lname: "Last Name", form_phone: "Phone (WhatsApp)", form_program: "Program", form_btn: "CONFIRM REGISTRATION",
        prog_select: "Select a Program", prog_kids: "Kids (4-12 yrs)", prog_elite: "Elite Competition", prog_adult: "Adults / Fitness",
        loc_title: "LOCATION",
        footer_city: "Oued-Zem", footer_copy: "Copyright © 2024 FATIN TKD.", footer_dev: "Developer :"
    },
    ar: {
        nav_home: "الرئيسية", nav_masters: "الأساتذة", nav_team: "الأبطال", nav_join: "انضم إلينا", nav_reviews: "آراء", nav_planning: "الأثمنة",
        hero_subtitle: "فن القتال", hero_desc: "أكثر من مجرد رياضة، إنه مصير. انضباط النخبة في واد زم.", btn_start: "ابدأ الآن", btn_planning: "التوقيت",
        coach_title: "أساتذتنا", coach_title_2: "", coach_subtitle: "اختر معلمك",
        coach_1_role: "المدير التقني / ماستر كبير", coach_2_role: "مدرب القتال / كيروجي",
        skill_tech: "التقنية (بومسي)", skill_fight: "القتال (المبارزة)",
        plan_title: "عروض", plan_title_2: "النادي", plan_subtitle: "اختر الصيغة التي تناسبك", btn_select: "اختيار",
        team_title_1: "أبطالنا", team_title_2: "", team_subtitle: "نخبة واد زم",
        role_fighter: "مقاتل",
        rev_title: "آراء", rate_global: "التقييم العام", rate_quality: "جودة التدريب", rate_atmos: "أجواء النادي",
        rate_based_on: "بناءً على 120 رأي", rate_tech_label: "التقنية", rate_disc_label: "الانضباط",
        join_title: "مستعد <span class='text-neonBlue'>للقتال؟</span>", join_subtitle: "املأ الاستمارة لحصتك الأولى.",
        form_fname: "الاسم الأول", form_lname: "الاسم العائلي", form_phone: "الهاتف (واتساب)", form_program: "البرنامج", form_btn: "تأكيد التسجيل",
        prog_select: "اختر برنامجاً", prog_kids: "أطفال (4-12 سنة)", prog_elite: "نخبة المنافسة", prog_adult: "كبار / لياقة",
        loc_title: "الموقع",
        footer_city: "واد زم", footer_copy: "حقوق النشر © 2024 FATIN TKD.", footer_dev: "المطور :"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (resources[lang] && resources[lang][key]) {
            element.innerHTML = resources[lang][key]; 
        }
    });

    const body = document.getElementById('body');
    
    if (lang === 'ar') {
        body.setAttribute('dir', 'rtl');
        body.style.fontFamily = "'Cairo', sans-serif";
    } else {
        body.setAttribute('dir', 'ltr');
        body.style.fontFamily = "'Rajdhani', sans-serif";
    }
}