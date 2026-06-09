// Data for Lecture 8
const lec8_data = {
    id: "lec8",
    title: {
        ar: "المحاضرة 8: التطور النفسي الاجتماعي (إريكسون)",
        en: "Lec 8: Psychosocial Development (Erikson)"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "مقدمة نظرية إريكسون", en: "Erikson's Theory Intro" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "الأساسيات", en: "Basics" },
                    content: { 
                        ar: "تحدد نظرية إريك إريكسون 8 مراحل من الولادة حتى الموت.", 
                        en: "Erik Erikson's theory outlines eight stages from birth to death." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الأزمات والفضائل", en: "Crises & Virtues" },
                    content: { 
                        ar: "يواجه الأفراد أزمات تطورية تشكل شخصيتهم. النجاح يؤدي إلى فضائل (Virtues)، والفشل يؤدي لمشاعر النقص.", 
                        en: "Individuals face developmental 'crises'. Success leads to 'virtues', failure leads to inadequacy." 
                    }
                }
            ]
        },
        {
            title: { ar: "المراحل من 1 إلى 4 (الطفولة)", en: "Stages 1 to 4 (Childhood)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "1. الثقة مقابل عدم الثقة (0-1.5 سنة)", en: "1. Trust vs. Mistrust (0-1.5Y)" },
                    content: { 
                        ar: "يتعلم الرضع الثقة. الفضيلة: الأمل (Hope).", 
                        en: "Infants learn to trust caregivers. Virtue: Hope." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "2. الاستقلالية مقابل الخجل (1.5-3 سنوات)", en: "2. Autonomy vs. Shame (1.5-3Y)" },
                    content: { 
                        ar: "يكتسب الأطفال الصغار الاستقلالية. الفضيلة: الإرادة (Will).", 
                        en: "Toddlers gain independence. Virtue: Will." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "3. المبادرة مقابل الشعور بالذنب (3-5 سنوات)", en: "3. Initiative vs. Guilt (3-5Y)" },
                    content: { 
                        ar: "يبدأ الأطفال في تخطيط الأنشطة. الفضيلة: الهدف (Purpose).", 
                        en: "Preschoolers start to plan activities. Virtue: Purpose." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "4. الاجتهاد مقابل النقص (6-12 سنة)", en: "4. Industry vs. Inferiority (6-12Y)" },
                    content: { 
                        ar: "يتعلم الأطفال إتقان مهارات جديدة. الفضيلة: الكفاءة (Competence).", 
                        en: "Children learn to master new skills. Virtue: Competence." 
                    }
                }
            ]
        },
        {
            title: { ar: "المراحل من 5 إلى 8 (المراهقة والنضج)", en: "Stages 5 to 8 (Adolescence & Adulthood)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "5. الهوية مقابل ارتباك الدور (12-18 سنة)", en: "5. Identity vs. Confusion (12-18Y)" },
                    content: { 
                        ar: "يستكشف المراهقون هويتهم. الفضيلة: الإخلاص (Fidelity).", 
                        en: "Teens explore their identity. Virtue: Fidelity." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "6. الألفة مقابل العزلة (18-40 سنة)", en: "6. Intimacy vs. Isolation (18-40Y)" },
                    content: { 
                        ar: "يسعى الشباب لعلاقات حميمة. الفضيلة: الحب (Love).", 
                        en: "Young adults seek intimate relationships. Virtue: Love." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "7. الإنتاجية مقابل الركود (40-65 سنة)", en: "7. Generativity vs. Stagnation (40-65Y)" },
                    content: { 
                        ar: "يركز البالغون على ترك إرث. الفضيلة: الرعاية (Care).", 
                        en: "Mid-life adults focus on creating a lasting legacy. Virtue: Care." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "8. التكامل مقابل اليأس (65+ سنة)", en: "8. Integrity vs. Despair (65+Y)" },
                    content: { 
                        ar: "يتأمل كبار السن في حياتهم. الفضيلة: الحكمة (Wisdom).", 
                        en: "Older adults reflect on their lives. Virtue: Wisdom." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة
    quiz: [
        {
            q: { 
                ar: "تحدد نظرية إريك إريكسون للتطور النفسي الاجتماعي عدد من المراحل من الولادة حتى الموت، وهي:", 
                en: "Erik Erikson's theory of psychosocial development outlines how many stages?" 
            },
            opts: {
                ar: ["6 مراحل", "7 مراحل", "8 مراحل (Eight stages)", "5 مراحل"],
                en: ["6 stages", "7 stages", "Eight stages", "5 stages"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "في مرحلة (Trust vs. Mistrust) والتي تحدث من عمر (0-1.5 سنة)، ما هي الفضيلة (Virtue) المكتسبة؟", 
                en: "In the (Trust vs. Mistrust) stage, what is the virtue gained?" 
            },
            opts: {
                ar: ["الأمل (Hope)", "الإرادة (Will)", "الحب (Love)", "الحكمة (Wisdom)"],
                en: ["Hope", "Will", "Love", "Wisdom"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "يستكشف المراهقون في عمر (12-18 سنة) هويتهم وأدوارهم، ويؤدي الحل الناجح إلى فضيلة (Fidelity)، تسمى هذه المرحلة:", 
                en: "Teens explore their identity. Successful resolution leads to fidelity. This stage is called:" 
            },
            opts: {
                ar: ["الاستقلالية مقابل الخجل", "الألفة مقابل العزلة", "الهوية مقابل ارتباك الدور (Identity vs. Confusion)", "الاجتهاد مقابل النقص"],
                en: ["Autonomy vs. Shame", "Intimacy vs. Isolation", "Identity vs. Confusion", "Industry vs. Inferiority"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "وفقاً لنظرية إريكسون، الفضيلة الناتجة عن مرحلة الألفة مقابل العزلة (Intimacy vs. Isolation) للشباب البالغين هي الحب (Love).", 
                en: "According to Erikson's theory, the virtue for the Intimacy vs. Isolation stage is Love." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "يتأمل كبار السن (65+ سنة) في حياتهم بحثاً عن الحكمة في مرحلة تسمى:", 
                en: "Older adults reflect on their lives, seeking wisdom in a stage called:" 
            },
            opts: {
                ar: ["التكامل مقابل اليأس (Integrity vs. Despair)", "الإنتاجية مقابل الركود", "المبادرة مقابل الشعور بالذنب", "الهوية مقابل ارتباك الدور"],
                en: ["Integrity vs. Despair", "Generativity vs. Stagnation", "Initiative vs. Guilt", "Identity vs. Confusion"]
            },
            correct: 0
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec8_data);
} else {
    var allLectures = [lec8_data];
}