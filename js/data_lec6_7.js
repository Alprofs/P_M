// Data for Lecture 6 & 7
const lec6_7_data = {
    id: "lec6_7",
    title: {
        ar: "المحاضرة 6 و 7: التوتر وأساليب التكيف",
        en: "Lec 6 & 7: Stress and Coping Styles"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "تعريف التوتر وأنواعه", en: "Stress Definition & Types" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "مفهوم التوتر", en: "Definition" },
                    content: { 
                        ar: "تجربة عاطفية سلبية ناتجة عن عدم التطابق بين تقييم الفرد للضغط وقدرته على التكيف معه.", 
                        en: "Negative emotional experience resulting from a mismatch between appraisal of stressor and ability to cope." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الضيق (Distress)", en: "Distress" },
                    content: { 
                        ar: "هو التوتر الضار والمدمر (harmful and damaging).", 
                        en: "Stress that is harmful and damaging is called 'distress'." 
                    }
                },
                {
                    type: "other",
                    nodeTitle: { ar: "أنواع الضغوطات", en: "Stressors Types" },
                    content: { 
                        ar: "كبرى (Major): مثل فقدان الوالدين لها تأثير درامي. صغرى (Minor): مثل شجار مع صديق لها تأثيرات متغيرة حسب الشخص.", 
                        en: "Major (e.g., losing a parent) and Minor (e.g., argument with a friend) which has variable effects." 
                    }
                }
            ]
        },
        {
            title: { ar: "متلازمة التكيف العامة (GAS)", en: "General Adaptation Syndrome (GAS)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "المراحل الثلاث", en: "The 3 Stages" },
                    content: { 
                        ar: "استجابة الجسم للضغوطات تحدث في 3 مراحل (Alarm, Resistance, Exhaustion).", 
                        en: "Bodily responses to stress occur in three stages." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "1. مرحلة الإنذار", en: "1- Alarm Reaction Stage" },
                    content: { 
                        ar: "الاستجابة الطارئة (Fight or Flight). يرتفع الأدرينالين والكورتيزول، ويزيد النبض وضغط الدم.", 
                        en: "Emergency response (Flight and fight). Adrenaline & cortisol elevated. Pulse and BP rise." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "2. مرحلة المقاومة", en: "2- Resistance Stage" },
                    content: { 
                        ar: "تتميز بالاستجابة الهرمونية (ACTH والكورتيزول). يغير مقاومة العدوى ويزيد الجلوكوز لتقليل الألم والالتهاب.", 
                        en: "Characterized by hormonal response (ACTH and cortisol). Alters resistance to infection, reduces pain/inflammation." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "3. مرحلة الإرهاق", en: "3- Exhaustion Stage" },
                    content: { 
                        ar: "إذا استمر التوتر طويلاً، تتأثر قدرة الجسم ويبدأ الضرر (مثل قرحة المعدة والاضطرابات النفسية الجسدية).", 
                        en: "If stress continues, ability to respond is affected. Damage starts (e.g., strokes, psychosomatic disorders)." 
                    }
                }
            ]
        },
        {
            title: { ar: "آثار التوتر (الجسدية، المزاجية، السلوكية)", en: "Effects of Stress" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "الآثار الجسدية (Body)", en: "Effects on Body" },
                    content: { 
                        ar: "الصداع، التوتر العضلي، ألم الصدر، التعب، اضطراب المعدة، مشاكل النوم.", 
                        en: "Headache, muscle tension/pain, chest pain, fatigue, stomach upset, sleep problems." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الآثار المزاجية (Mood)", en: "Effects on Mood" },
                    content: { 
                        ar: "القلق، الأرق، نقص التحفيز، الشعور بالإرهاق، الغضب، الحزن والاكتئاب.", 
                        en: "Anxiety, restlessness, lack of motivation, feeling overwhelmed, irritability/anger, sadness/depression." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الآثار السلوكية (Behavior)", en: "Effects on Behavior" },
                    content: { 
                        ar: "الإفراط أو قلة الأكل، نوبات الغضب، تعاطي المخدرات، التدخين، الانسحاب الاجتماعي.", 
                        en: "Over/undereating, angry outbursts, drug/alcohol abuse, tobacco use, social withdrawal." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة
    quiz: [
        {
            q: { 
                ar: "متلازمة التكيف العامة (GAS) تحدث استجابة للتوتر في كم مرحلة؟", 
                en: "General Adaptation Syndrome (GAS) bodily responses to stress occur in how many stages?" 
            },
            opts: {
                ar: ["مرحلتين", "ثلاث مراحل (Three stages)", "أربع مراحل", "خمس مراحل"],
                en: ["Two stages", "Three stages", "Four stages", "Five stages"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "أي مرحلة من مراحل متلازمة التكيف العامة (GAS) تعتبر الاستجابة الطارئة للجسم (Emergency response)؟", 
                en: "Which stage of GAS is the emergency response of the body?" 
            },
            opts: {
                ar: ["مرحلة الإنذار (Alarm reaction stage)", "مرحلة المقاومة (Resistance stage)", "مرحلة الإرهاق (Exhaustion stage)"],
                en: ["Alarm reaction stage", "Resistance stage", "Exhaustion stage"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أي من التالي يُعد من آثار التوتر على **السلوك (Behavior)**؟", 
                en: "Which of the following is a common effect of stress on your **behavior**?" 
            },
            opts: {
                ar: ["الصداع (Headache)", "الانسحاب الاجتماعي (Social withdrawal)", "القلق (Anxiety)", "ألم المعدة (Stomach upset)"],
                en: ["Headache", "Social withdrawal", "Anxiety", "Stomach upset"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الضغوطات الصغرى (Minor stressors) مثل الشجار مع صديق، لها نفس التأثير دائماً على جميع الأفراد.", 
                en: "A minor stressor like an argument with a friend has the exact same effect on all individuals." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: التوتر الضار والمدمر (harmful and damaging stress)؟", 
                en: "Scientific Term: Stress that is harmful and damaging." 
            },
            opts: {
                ar: ["الضيق (Distress)", "متلازمة التكيف (GAS)", "مرحلة الإرهاق", "الإشراط"],
                en: ["Distress", "GAS", "Exhaustion stage", "Conditioning"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "في مرحلة الإرهاق (Exhaustion stage)، إذا استمر التوتر لفترة طويلة، تبدأ الاضطرابات النفسية الجسدية (Psychosomatic disorders) في الظهور.", 
                en: "In the exhaustion stage, if stress continues for a long time, psychosomatic disorders may occur." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec6_7_data);
} else {
    var allLectures = [lec6_7_data];
}