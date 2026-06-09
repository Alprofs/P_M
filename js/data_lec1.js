// Data for Lecture 1
const lec1_data = {
    id: "lec1",
    title: {
        ar: "المحاضرة 1: مقدمة وفروع علم النفس",
        en: "Lec 1: Intro & Branches of Psychology"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "تعريف علم النفس", en: "What is Psychology?" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "التعريف الأساسي", en: "Basic Definition" },
                    content: { 
                        ar: "هو الدراسة العلمية لـ *العقل والسلوك* (mind and behavior).", 
                        en: "The scientific study of the *mind and behavior*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الهدف", en: "Goal" },
                    content: { 
                        ar: "يستكشف كيف *يفكر ويشعر ويتصرف* الناس (think, feel, act).", 
                        en: "Explores how people *think, feel, act*, and interact." 
                    }
                }
            ]
        },
        {
            title: { ar: "فروع علم النفس - الجزء الأول", en: "Branches of Psychology (Part 1)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "علم النفس غير الطبيعي", en: "Abnormal Psychology" },
                    content: { 
                        ar: "يركز على الأمراض النفسية و*السلوك غير الطبيعي* (abnormal behavior).", 
                        en: "Looks at psychopathology and *abnormal behavior*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "علم النفس السلوكي", en: "Behavioral Psychology" },
                    content: { 
                        ar: "يُعرف بالـ Behaviorism، ويقترح أن السلوكيات تُكتسب من خلال *الاشتراط والتعلم* (conditioning).", 
                        en: "All behaviors are acquired through *conditioning*." 
                    }
                },
                {
                    type: "other",
                    nodeTitle: { ar: "علم النفس الحيوي", en: "Biopsychology" },
                    content: { 
                        ar: "يركز على تأثير *المخ، الخلايا العصبية، والجهاز العصبي* على السلوك.", 
                        en: "How the *brain, neurons, and nervous system* influence behavior." 
                    }
                },
                {
                    type: "origin",
                    nodeTitle: { ar: "علم النفس الإكلينيكي", en: "Clinical Psychology" },
                    content: { 
                        ar: "مهتم بتقييم وعلاج *الأمراض العقلية* (mental illness).", 
                        en: "Assessment and treatment of *mental illness* and psychiatric disorders." 
                    }
                }
            ]
        },
        {
            title: { ar: "فروع علم النفس - الجزء الثاني", en: "Branches of Psychology (Part 2)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "علم النفس المعرفي", en: "Cognitive Psychology" },
                    content: { 
                        ar: "يركز على *الحالات العقلية الداخلية* (internal mental states) مثل التفكير والتعلم.", 
                        en: "Focuses on *internal mental states* (think, learn, and remember)." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "علم النفس المقارن", en: "Comparative Psychology" },
                    content: { 
                        ar: "مهتم بدراسة *سلوك الحيوان* (animal behavior).", 
                        en: "Concerned with the study of *animal behavior*." 
                    }
                },
                {
                    type: "other",
                    nodeTitle: { ar: "علم النفس الإرشادي", en: "Counseling Psychology" },
                    content: { 
                        ar: "يعالج العملاء الذين يعانون من *ضيق نفسي* (mental distress).", 
                        en: "Treating clients in *mental distress*." 
                    }
                },
                {
                    type: "origin",
                    nodeTitle: { ar: "علم النفس التنموي", en: "Developmental Psychology" },
                    content: { 
                        ar: "يركز على كيف *يتغير وينمو* الناس (change and grow) طوال الحياة.", 
                        en: "Focuses on how people *change and grow* throughout life." 
                    }
                }
            ]
        },
        {
            title: { ar: "فروع علم النفس - الجزء الثالث", en: "Branches of Psychology (Part 3)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "علم النفس التربوي", en: "Educational Psychology" },
                    content: { 
                        ar: "مهتم بـ *المدارس، التدريس* (schools, teaching) وقضايا الطلاب.", 
                        en: "Concerned with *schools, teaching* psychology, and student concerns." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "علم النفس التجريبي", en: "Experimental Psychology" },
                    content: { 
                        ar: "يستخدم *الطرق العلمية* (scientific methods) للبحث في المخ والسلوك.", 
                        en: "Utilizes *scientific methods* to research the brain and behavior." 
                    }
                },
                {
                    type: "other",
                    nodeTitle: { ar: "علم النفس الجنائي/الشرعي", en: "Forensic Psychology" },
                    content: { 
                        ar: "يتعامل مع القضايا المتعلقة بعلم النفس و*القانون* (the law).", 
                        en: "Deals with issues related to psychology and *the law*." 
                    }
                },
                {
                    type: "origin",
                    nodeTitle: { ar: "علم نفس الشخصية", en: "Personality Psychology" },
                    content: { 
                        ar: "يركز على السلوكيات التي تجعل كل فرد *فريداً/مميزاً* (unique).", 
                        en: "Study of thought patterns and behaviors that make each individual *unique*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "علم النفس الاجتماعي", en: "Social Psychology" },
                    content: { 
                        ar: "يسعى لفهم وتفسير *السلوك الاجتماعي* (social behavior) وتفاعلات المجموعات.", 
                        en: "Seeks to understand and explain *social behavior* and group interactions." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة (من امتحانات الكويزات السابقة + أسئلة متوقعة)
    quiz: [
        {
            q: { 
                ar: "علم النفس السلوكي يُعرف أيضاً باسم:", 
                en: "Behavioral psychology is also known as:" 
            },
            opts: {
                ar: ["السلوكية (Behaviorism)", "الادراكية (Cognitive)", "التحليلية (Dialectical)", "الفيسيولوجية"],
                en: ["Behaviorism", "Cognitive", "Dialectical", "Physiological"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أي فرع يركز على كيفية تأثير *المخ والخلايا العصبية* على الأفكار والمشاعر؟", 
                en: "Which branch is focused on how the *brain, neurons, and nervous system* influence thoughts?" 
            },
            opts: {
                ar: ["علم النفس المعرفي", "علم النفس الحيوي (Biopsychology)", "علم النفس الإكلينيكي", "علم النفس الشرعي"],
                en: ["Cognitive", "Biopsychology", "Clinical", "Forensic"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "فرع من علم النفس يتعامل مع القضايا المتعلقة بـ *القانون* (law):", 
                en: "A branch of psychology deals with issues related to psychology and the *law*:" 
            },
            opts: {
                ar: ["علم النفس الاجتماعي", "علم النفس التجريبي", "علم النفس الشرعي (Forensic)", "علم النفس التنموي"],
                en: ["Social", "Experimental", "Forensic", "Developmental"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "علم النفس الذي مهتم بتقييم وعلاج *الأمراض العقلية* (mental illness) هو:", 
                en: "The branch concerned with the assessment and treatment of *mental illness* is:" 
            },
            opts: {
                ar: ["علم النفس الإكلينيكي (Clinical)", "علم النفس الإرشادي", "علم النفس المقارن", "علم النفس السلوكي"],
                en: ["Clinical", "Counseling", "Comparative", "Behavioral"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أي فرع يركز على الحالات العقلية *الداخلية* (internal mental states) مثل التفكير والذاكرة؟", 
                en: "Which branch focuses on *internal mental states* like thinking and memory?" 
            },
            opts: {
                ar: ["علم النفس التنموي", "علم النفس الحيوي", "علم النفس المعرفي (Cognitive)", "علم نفس الشخصية"],
                en: ["Developmental", "Biopsychology", "Cognitive", "Personality"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الفرع الذي يسعى لفهم وشرح *السلوك الاجتماعي* (social behavior) هو علم نفس الشخصية.", 
                en: "The branch that seeks to understand *social behavior* is Personality psychology." 
            },
            opts: {
                ar: ["صح", "خطأ (إنه علم النفس الاجتماعي)"],
                en: ["True", "False (It is Social psychology)"]
            },
            correct: 1
        },
                // أسئلة إضافية من الكويزات السابقة وأهم الفروع
        {
            q: { 
                ar: "علم نفس الشخصية هو الفرع الذي يركز على دراسة أنماط التفكير والمشاعر والسلوكيات التي تجعل كل فرد فريداً.", 
                en: "Personality psychology is the branch that focuses on the study of thought patterns, feelings, and behaviors that make each individual unique." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0 // بناءً على كويز 1
        },
        {
            q: { 
                ar: "لماذا يتزايد ويتطور عدد التخصصات الفرعية في علم النفس باستمرار؟", 
                en: "Why is the number of subfields in psychology constantly growing and evolving?" 
            },
            opts: {
                ar: ["لأن السلوك البشري متنوع جداً (Because human behavior is so varied)", "بسبب التطور التكنولوجي", "لأن عدد البشر يزداد", "بسبب قلة الأبحاث"],
                en: ["Because human behavior is so varied", "Because of technology", "Because population increases", "Because of lack of research"]
            },
            correct: 0 // بناءً على كويز 1 سؤال مقالي
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: فرع يدرس السلوكيات غير الطبيعية والأمراض النفسية (psychopathology and abnormal behavior)؟", 
                en: "Scientific Term: Looks at psychopathology and *abnormal behavior*." 
            },
            opts: {
                ar: ["علم النفس السلوكي", "علم النفس غير الطبيعي (Abnormal)", "علم النفس الإكلينيكي", "علم النفس المعرفي"],
                en: ["Behavioral", "Abnormal", "Clinical", "Cognitive"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: فرع يهتم بالمدارس والتدريس وقضايا الطلاب (schools, teaching psychology, and student concerns)؟", 
                en: "Scientific Term: Concerned with *schools, teaching* psychology, and student concerns." 
            },
            opts: {
                ar: ["علم النفس التربوي (Educational)", "علم النفس الإرشادي", "علم النفس التنموي", "علم النفس الاجتماعي"],
                en: ["Educational", "Counseling", "Developmental", "Social"]
            },
            correct: 0
        },

        {
            q: { 
                ar: "دراسة *سلوك الحيوان* (animal behavior) تقع ضمن:", 
                en: "The study of *animal behavior* falls under:" 
            },
            opts: {
                ar: ["علم النفس التطوري", "علم النفس المقارن (Comparative)", "علم النفس البيئي", "علم النفس التجريبي"],
                en: ["Evolutionary", "Comparative", "Environmental", "Experimental"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "علم النفس الذي يدرس كيف *ينمو ويتغير* الناس على مدار الحياة هو:", 
                en: "The psychology that studies how people *grow and change* throughout life is:" 
            },
            opts: {
                ar: ["علم النفس التربوي", "علم النفس الاجتماعي", "علم النفس الإكلينيكي", "علم النفس التنموي (Developmental)"],
                en: ["Educational", "Social", "Clinical", "Developmental"]
            },
            correct: 3
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية (لو كان الملف منفصل، تأكد إنك بتجمعهم في ملف الـ main)
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec1_data);
} else {
    var allLectures = [lec1_data];
}
