// Data for Lecture 3
const lec3_data = {
    id: "lec3",
    title: {
        ar: "المحاضرة 3: الاحتياجات البشرية (هرم ماسلو)",
        en: "Lec 3: Human Needs (Maslow's Hierarchy)"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "أساسيات الاحتياجات البشرية", en: "Human Needs Basics" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "التعريف والغرض", en: "Definition & Purpose" },
                    content: { 
                        ar: "الاحتياجات هي الافتقار لشيء مطلوب. غرضها *تحفيز السلوك* ودفع أفعال الإنسان (motivate behavior).", 
                        en: "A lack of something required. Purpose: Needs *motivate behavior* and drive human actions." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "المفهوم الأساسي", en: "Core Concept" },
                    content: { 
                        ar: "الاحتياجات الأساسية هي الحد الأدنى للبقاء، وتشمل احتياجات *جسدية* (طعام، نوم) و*نفسية* (أمان، عاطفة).", 
                        en: "Minimum requirements for survival, including *physical* (food, sleep) and *psychological* (safety, affection)." 
                    }
                }
            ]
        },
        {
            title: { ar: "هرم ماسلو للاحتياجات", en: "Maslow's Hierarchy of Needs" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "نظرية ماسلو", en: "Maslow's Theory" },
                    content: { 
                        ar: "نظرية تحفيزية تتكون من *5 مستويات* (five-tier model). يجب تلبية الاحتياجات في الأسفل قبل الانتقال للأعلى.", 
                        en: "A motivational theory comprising a *five-tier model*. Lower needs must be satisfied first." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "1. الاحتياجات الأساسية", en: "Basic Needs" },
                    content: { 
                        ar: "تشمل: *الاحتياجات الفسيولوجية* (طعام، ماء، راحة) و*احتياجات الأمان* (الأمن والسلامة).", 
                        en: "Includes: *Physiological needs* (food, water, rest) and *Safety needs* (security, safety)." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "2. الاحتياجات النفسية", en: "Psychological Needs" },
                    content: { 
                        ar: "تشمل: *الانتماء والحب* (علاقات، أصدقاء) و*التقدير/الاحترام* (الهيبة، الشعور بالإنجاز).", 
                        en: "Includes: *Belongingness & love* (relationships, friends) and *Esteem needs* (prestige, accomplishment)." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "3. احتياجات تحقيق الذات", en: "Self-fulfillment Needs" },
                    content: { 
                        ar: "تشمل: *تحقيق الذات* (الوصول للإمكانات الكاملة والأنشطة الإبداعية).", 
                        en: "Includes: *Self-actualisation* (achieving full potential, creative activities)." 
                    }
                }
            ]
        },
        {
            title: { ar: "خصائص الاحتياجات", en: "Characteristics of Needs" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "الخصائص الأساسية", en: "Main Characteristics" },
                    content: { 
                        ar: "التشابه التقريبي للجميع، *المرونة* (تتغير الأولوية حسب الموقف)، وعواقب الحرمان (يؤدي للقلق والمرض).", 
                        en: "Approximate similarity, *Fluidity* (priority changes based on situation), and Consequences of deprivation." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "احتياجات النقص (D-needs)", en: "Deficiency Needs" },
                    content: { 
                        ar: "هي الطبقات الأربع السفلية. عدم تلبيتها يسبب التوتر والقلق. *الحرمان* هو ما يسبب النقص.", 
                        en: "The bottom 4 layers. Deprivation causes deficiency, making the individual feel anxious and tense." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة (مستخرجة من كويز 3 بالكامل)
    quiz: [
        {
            q: { 
                ar: "هرم ماسلو للاحتياجات هو نظرية تحفيزية في علم النفس تتكون من:", 
                en: "Maslow's hierarchy of needs is a motivational theory in psychology comprising:" 
            },
            opts: {
                ar: ["نموذج من 6 مستويات", "نموذج من 5 مستويات (Five-tier model)", "نموذج من 4 مستويات"],
                en: ["A sex tier model", "A five-tier model", "A four-tier model"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الاحتياجات الأساسية (Basic needs) في الاحتياجات البشرية تشمل:", 
                en: "The basic needs in human needs include:" 
            },
            opts: {
                ar: ["الانتماء والتقدير", "تحقيق الذات", "الفسيولوجية والأمان (Physiological and safety)"],
                en: ["Belongingness and esteem", "Self-actualization", "Physiological and safety"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الاحتياجات النفسية (Psychological needs) في الإنسان تشمل:", 
                en: "The psychological needs in human include:" 
            },
            opts: {
                ar: ["الانتماء والتقدير (Belongingness and esteem)", "تحقيق الذات", "الفسيولوجية والأمان"],
                en: ["Belongingness and esteem", "Self-actualization", "Physiological and safety"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الاحتياجات الفسيولوجية (Physiological needs) تشمل:", 
                en: "The physiological needs include:" 
            },
            opts: {
                ar: ["الأمان (Security)", "الشعور بالإنجاز", "الطعام والماء (Food, water)"],
                en: ["Security", "Feeling of accomplishment", "Food, water"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "هرم ماسلو للاحتياجات هو نظرية تحفيزية في علم النفس تتكون من نموذج ذو مستويين (two-tier model).", 
                en: "Maslow's hierarchy of needs is a motivational theory in psychology comprising a two-tier model of human needs." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "احتياجات الأمان (safety needs) من ضمن الاحتياجات البشرية تتضمن تحقيق الإمكانات الكاملة (achieving potential).", 
                en: "A safety need of human needs include achieving potential." 
            },
            opts: {
                ar: ["صح", "خطأ (هذا هو تحقيق الذات)"],
                en: ["True", "False (This is Self-actualization)"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: نوع من الاحتياجات البشرية يتضمن التقدير والانتماء (esteem and belongingness)؟", 
                en: "Scientific Term: One of human need include a esteem and belongingness." 
            },
            opts: {
                ar: ["الاحتياجات الفسيولوجية", "الاحتياجات النفسية (Psychological needs)", "الاحتياجات الأساسية", "احتياجات تحقيق الذات"],
                en: ["Physiological", "Psychological needs", "Basic needs", "Self-actualization"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: نوع من الاحتياجات البشرية يتضمن الأمان والاحتياجات الفسيولوجية (safety and physiological)؟", 
                en: "Scientific Term: A human need include safety and physiological." 
            },
            opts: {
                ar: ["الاحتياجات الأساسية (Basic needs)", "الاحتياجات النفسية", "احتياجات تحقيق الذات"],
                en: ["Basic needs", "Psychological needs", "Self-actualization"]
            },
            correct: 0
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec3_data);
} else {
    var allLectures = [lec3_data];
}