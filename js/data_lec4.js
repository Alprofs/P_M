// Data for Lecture 4
const lec4_data = {
    id: "lec4",
    title: {
        ar: "المحاضرة 4: النظريات النفسية",
        en: "Lec 4: Psychological Theories"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "مفهوم وأهمية النظريات", en: "Concept & Importance of Theories" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "التعريف", en: "Definition" },
                    content: { 
                        ar: "هي أنظمة من الأفكار تشرح جوانب معينة من الأفكار، السلوكيات، والمشاعر البشرية.", 
                        en: "Systems of ideas that can explain certain aspects of human thoughts, behaviors and emotions." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الهدف منها", en: "Purpose" },
                    content: { 
                        ar: "يصنعها الباحثون لوضع *تنبؤات* (predictions) للسلوكيات البشرية المستقبلية.", 
                        en: "Created to make *predictions* for future human behaviors." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الأهمية في العمل", en: "Importance in Workplace" },
                    content: { 
                        ar: "مفيدة أثناء تنفيذ التغييرات وتقييم الحاجة للتحسينات في بيئة العمل.", 
                        en: "Helpful while implementing shifts and evaluating the need for improvements in a work environment." 
                    }
                }
            ]
        },
        {
            title: { ar: "أنواع النظريات النفسية", en: "Forms of Psychological Theories" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "1. النظريات الكبرى", en: "Grand Theories" },
                    content: { 
                        ar: "تعالج *نموذجاً أساسياً* لفهم السلوك البشري. تشمل: علم النفس البيولوجي، التنموي، التطوري، المعرفي، وغيرها.", 
                        en: "Address a *basic model* of understanding human behavior. Include: Biological, Developmental, Evolutionary, Cognitive, etc." 
                    }
                },
                {
                    type: "origin",
                    nodeTitle: { ar: "2. النظريات المصغرة", en: "Mini Theories" },
                    content: { 
                        ar: "مفيدة بشكل أساسي لوصف *سلوك أو نتيجة محددة*. تشمل: الشخصية (Personality)، الإقناع، التحفيز، والرضا.", 
                        en: "Primarily useful to describe a *specific behavior or outcome*. Include: Personality, Persuasion, Motivation, Satisfaction." 
                    }
                },
                {
                    type: "origin",
                    nodeTitle: { ar: "3. النظريات الناشئة", en: "Emergent Theories" },
                    content: { 
                        ar: "غالباً ما *تدمج النظريات المصغرة* لتطوير البحث والأفكار. تستكشف السلوكيات في إعدادات المجموعة.", 
                        en: "Often *integrate mini-theories* to develop research and ideas. Explore behaviors in group settings." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة (من امتحانات الكويزات السابقة وأسئلة متوقعة)
    quiz: [
        {
            q: { 
                ar: "النظريات النفسية هي أنظمة من الأفكار يمكن أن تشرح جوانب معينة من:", 
                en: "Psychological theories are systems of ideas that can explain certain aspects of:" 
            },
            opts: {
                ar: ["أفكار الإنسان", "السلوكيات والمشاعر", "كل ما سبق"],
                en: ["Human thoughts", "Behaviors and emotions", "Both of them"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "يصنع باحثو علم النفس نظريات نفسية لوضع تنبؤات لـ:", 
                en: "Psychology researchers create psychological theories to make predictions for:" 
            },
            opts: {
                ar: ["سلوكيات الإنسان المستقبلية (Future human behaviors)", "سلوكيات الإنسان الماضية", "كل ما سبق"],
                en: ["Future human behaviors", "Past human behaviors", "Both of them"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تقدم النظريات النفسية الكبرى (Grand theories) معلومات حول مواضيع واسعة النطاق، بما في ذلك:", 
                en: "Grand psychological theories provide information on wide-ranging topics, including:" 
            },
            opts: {
                ar: ["علم النفس البيولوجي والتنموي والمعرفي", "علم نفس الشخصية", "علم نفس التحفيز"],
                en: ["Biological, developmental cognitive, psychology", "Personality psychology", "Motivation psychology"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "النظريات النفسية يمكن أن تكون مفيدة أثناء تنفيذ التحولات وتقييم الحاجة للتحسينات في بيئة العمل.", 
                en: "Psychological theories can be helpful while implementing shifts and evaluating the need for improvements in a work environment." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تشمل النظريات المصغرة (Mini theories) الشخصية، والإقناع، والتحفيز، والرضا.", 
                en: "A mini theories of psychology include Personality, persuasions, motivation, and satisfaction." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تدمج النظريات الناشئة (Emergent theories) النظريات المصغرة لتطوير البحث والأفكار.", 
                en: "Emergent theories integrate mini-theories to develop research and ideas." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: نظريات تتضمن نموذجاً أساسياً لفهم السلوك البشري؟", 
                en: "Scientific Term: A theories include a basic model of understanding human behavior." 
            },
            opts: {
                ar: ["النظريات المصغرة", "النظريات الناشئة", "النظريات الكبرى (Grand theories)"],
                en: ["Mini theories", "Emergent theories", "Grand theories"]
            },
            correct: 2
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec4_data);
} else {
    var allLectures = [lec4_data];
}