// Data for Lecture 2
const lec2_data = {
    id: "lec2",
    title: {
        ar: "المحاضرة 2: مدارس علم النفس",
        en: "Lec 2: Psychology Schools"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "البداية والمدرسة البنائية", en: "Beginnings & Structuralism" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "المدرسة البنائية (Structuralism)", en: "Structuralism" },
                    content: { 
                        ar: "تُعتبر أول مدرسة في علم النفس. أسسها فيلهلم فوندت (Wilhelm Wundt) في ألمانيا.", 
                        en: "The first school created in a Germany lab by Wilhelm Wundt. Widely regarded as the first school of thought." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الفكرة الأساسية", en: "Core Concept" },
                    content: { 
                        ar: "تركز على تقسيم العمليات العقلية إلى *مكوناتها الأساسية* (basic components).", 
                        en: "Focused on breaking down mental processes into *basic components (elements)*." 
                    }
                }
            ]
        },
        {
            title: { ar: "المدرسة الوظيفية", en: "The Functionalist School" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "المدرسة الوظيفية (Functionalism)", en: "Functionalism" },
                    content: { 
                        ar: "تأثرت بشدة بـ وليام جيمس (William James).", 
                        en: "Heavily influenced by William James." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الفكرة الأساسية", en: "Core Concept" },
                    content: { 
                        ar: "تهتم بـ *الغرض التكيفي أو وظيفة* العقل والسلوك (adaptive purpose or function).", 
                        en: "Concerned with the *adaptive purpose or function* of mind and behavior." 
                    }
                }
            ]
        },
        {
            title: { ar: "مدرسة الجشطالت والمدرسة السلوكية", en: "Gestalt & Behaviorist Schools" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "مدرسة الجشطالت (Gestalt)", en: "Gestalt School" },
                    content: { 
                        ar: "تؤمن بأن الناس يختبرون الأشياء كـ *كل موحد* (unified wholes). الكل أكبر من مجموع أجزائه (holism).", 
                        en: "People experience things as *unified wholes*. The whole is greater than the sum of its parts." 
                    }
                },
                {
                    type: "other",
                    nodeTitle: { ar: "المدرسة السلوكية (Behaviorism)", en: "Behaviorist School" },
                    content: { 
                        ar: "تركز على *السلوك الملحوظ* (observable behavior) وتفترض أن السلوك ناتج عن أسباب بيئية.", 
                        en: "Focused on *observable behavior*. Behavior is explained by environmental causes rather than internal forces." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "أنواع الإشراط (Conditioning)", en: "Conditioning Types" },
                    content: { 
                        ar: "الإشراط الكلاسيكي (ربط محفزات) والإشراط الإجرائي (مكافآت وعقوبات).", 
                        en: "Classical (associating stimuli) and Operant conditioning (rewards and punishments)." 
                    }
                }
            ]
        },
        {
            title: { ar: "مدرسة التحليل النفسي (فرويد)", en: "Psychoanalytic School" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "التحليل النفسي (Psychoanalysis)", en: "Psychoanalysis" },
                    content: { 
                        ar: "أسسها سيجموند فرويد (Sigmund Freud). تؤكد على تأثير *العقل اللاواعي* (unconscious mind).", 
                        en: "Founded by Sigmund Freud. Emphasized the influence of the *unconscious mind*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الهو (The ID)", en: "The ID" },
                    content: { 
                        ar: "يتكون من *الدوافع الغريزية الأساسية* (primal urges).", 
                        en: "Consists of *primal urges*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الأنا (The Ego)", en: "The Ego" },
                    content: { 
                        ar: "الجزء المسؤول عن *التعامل مع الواقع* (dealing with reality).", 
                        en: "Component of personality charged with *dealing with reality*." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الأنا الأعلى (The Superego)", en: "The Superego" },
                    content: { 
                        ar: "يحمل كل *المُثل والقيم* التي نكتسبها من والدينا وثقافتنا (ideals and values).", 
                        en: "Holds all the *ideals and values* we internalize from our parents and culture." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة (من امتحانات الكويزات السابقة + أسئلة متوقعة تغطي المحاضرة)
    quiz: [
        {
            q: { 
                ar: "المدرسة التي ركزت على الغرض التكيفي أو وظيفة العقل والسلوك هي:", 
                en: "The adaptive purpose or function of mind and behavior:" 
            },
            opts: {
                ar: ["المدرسة البنائية (Structuralism)", "المدرسة الوظيفية (Functionalist)", "مدرسة الجشطالت (Gestalt)", "المدرسة السلوكية (Behaviorism)"],
                en: ["Structuralism school", "Functionalist school", "Gestalt school", "Behaviorist school"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "التحليل النفسي (Psychoanalysis) هي مدرسة في علم النفس أكدت على تأثير:", 
                en: "Psychoanalysis is a school of psychology emphasized the influence of the:" 
            },
            opts: {
                ar: ["العقل الواعي (Conscious mind)", "البيئة", "العقل اللاواعي (Unconscious mind)", "المكافأة والعقاب"],
                en: ["Conscious mind", "Environment", "Unconscious mind", "Rewards and punishments"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "وفقاً لفرويد، يتكون الـ (ID) من:", 
                en: "The ID consists of:" 
            },
            opts: {
                ar: ["التعامل مع الواقع (Dealing with reality)", "الأفكار والقيم (Ideas and values)", "الدوافع الغريزية (Primal urges)"],
                en: ["Dealing with reality", "Ideas and values", "Primal urges"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "تُعتبر المدرسة البنائية (Structuralism) على نطاق واسع أول مدرسة فكرية في علم النفس.", 
                en: "Structuralism is widely regarded as the first school of thought in psychology." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "تقترح المدرسة السلوكية (Behaviorism) أن السلوك يمكن تفسيره بواسطة الأسباب البيئية بدلاً من القوى الداخلية.", 
                en: "Behaviorism suggests that all behavior can be explained by environmental causes rather than by internal forces." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: جزء من الشخصية يحمل كل المُثل والقيم التي نكتسبها من والدينا وثقافتنا؟", 
                en: "Scientific Term: A part of the personality that holds all the ideals and values we internalize from our parents and culture." 
            },
            opts: {
                ar: ["الأنا (Ego)", "الأنا الأعلى (Superego)", "الهو (ID)", "مدرسة الجشطالت"],
                en: ["Ego", "Superego", "ID", "Gestalt"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "المدرسة التي تقوم على فكرة أن الناس يختبرون الأشياء ككل موحد (unified wholes) هي:", 
                en: "The school of psychology based upon the idea that people experience things as unified wholes is:" 
            },
            opts: {
                ar: ["مدرسة الجشطالت (Gestalt)", "المدرسة السلوكية (Behaviorism)", "المدرسة البنائية (Structuralism)", "مدرسة التحليل النفسي (Psychoanalysis)"],
                en: ["Gestalt", "Behaviorism", "Structuralism", "Psychoanalysis"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "أي من أنواع التعلم يتضمن استخدام المكافآت والعقوبات (rewards and punishments) لإنشاء ارتباط مع السلوك؟", 
                en: "Which type of learning involves using rewards and punishments to create an association with the behavior?" 
            },
            opts: {
                ar: ["الإشراط الكلاسيكي (Classical conditioning)", "الإشراط الإجرائي (Operant conditioning)"],
                en: ["Classical conditioning", "Operant conditioning"]
            },
            correct: 1
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec2_data);
} else {
    var allLectures = [lec2_data];
}