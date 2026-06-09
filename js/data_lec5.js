// Data for Lecture 5
const lec5_data = {
    id: "lec5",
    title: {
        ar: "المحاضرة 5: النموذج البيولوجي النفسي الاجتماعي",
        en: "Lec 5: The Biopsychosocial Model"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "علم النفس والصحة", en: "Psychology & Health" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "تعريف الصحة", en: "Definition of Health" },
                    content: { 
                        ar: "الصحة هي نتاج التفاعلات بين علم الأحياء، الجينات، السلوك، العلاقات، الثقافة، والبيئات.", 
                        en: "Health is a product of the interactions between biology, genetics, behavior, relationships, culture, and the environments." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "مسارات التأثير", en: "Pathways" },
                    content: { 
                        ar: "مسار مباشر (مثل: التوتر يسبب قرحة المعدة) ومسار غير مباشر (مثل: تبني سلوكيات غير صحية كالتدخين بسبب التوتر).", 
                        en: "Direct pathway (e.g., stress causes stomach ulcers) and Indirect pathway (e.g., unhealthy lifestyle behaviors like smoking)." 
                    }
                }
            ]
        },
        {
            title: { ar: "النموذج البيولوجي النفسي الاجتماعي", en: "The Biopsychosocial Model" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "مفهوم النموذج", en: "Model Concept" },
                    content: { 
                        ar: "طوره إنجل (1977)، ويؤكد على أهمية فهم صحة الإنسان ومرضه في سياقها الكامل.", 
                        en: "Developed by Engel (1977), emphasizes understanding human health and illness in their fullest contexts." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الجانب البيولوجي (Bio)", en: "Biological Factors" },
                    content: { 
                        ar: "يشمل: الجينات، الفيروسات، البكتيريا، والعيوب الهيكلية.", 
                        en: "Includes genetics, viruses, bacteria and structural defects." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الجانب النفسي (Psycho)", en: "Psychological Factors" },
                    content: { 
                        ar: "يشمل: الإدراك (توقعات الصحة)، المشاعر (الخوف من العلاج)، والسلوكيات (التدخين، النظام الغذائي).", 
                        en: "Includes cognitions, emotions and behaviors." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الجانب الاجتماعي (Social)", en: "Social Factors" },
                    content: { 
                        ar: "يشمل: الأعراف الاجتماعية، ضغوط الأقران، الطبقة الاجتماعية، والعرق.", 
                        en: "Includes social norms of behavior, peer group expectations, social class and ethnicity." 
                    }
                }
            ]
        },
        {
            title: { ar: "الأساس البيولوجي للسلوك", en: "Biological Basis of Behavior" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "الخلايا العصبية والدماغ", en: "Neurons & Brain" },
                    content: { 
                        ar: "يحتوي دماغ الإنسان على حوالي 100 مليار خلية عصبية (Neurons) وهي الوحدة الوظيفية والهيكلية للدماغ.", 
                        en: "The human brain contains around 100 billion nerve cells (neurons). The neuron is the functional and structural unit." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة (من الكويزات السابقة + متوقعة للفاينال)
    quiz: [
        {
            q: { 
                ar: "يؤكد النهج البيولوجي النفسي الاجتماعي على أهمية فهم صحة الإنسان ومرضه في سياقاتها الكاملة:", 
                en: "The bio psychosocial approach emphasizes the importance of understanding human health and illness in their fullest contexts:" 
            },
            opts: {
                ar: ["البيولوجية", "النفسية والاجتماعية", "كل ما سبق"],
                en: ["Biological", "Psychological and social", "Both of them"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "الصحة هي نتاج التفاعلات بين علم الأحياء والجينات والسلوك والعلاقات والثقافة والبيئات.", 
                en: "Health is a product of the interactions between biology, genetics, behavior, relationships, culture, and the environments." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الحالة البيولوجية والصحة البدنية للفرد تؤثر بالتأكيد على سلوكه في معظم الأوقات وعلى الجانب الآخر (العكس صحيح).", 
                en: "The biological state and physical health of an individual certainly influences his behavior most of the time and on the opposite side." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: نموذج للسلوك الصحي يشمل الجوانب البيولوجية والنفسية والاجتماعية؟", 
                en: "Scientific Term: A model of health behavior include biological, psychological and social." 
            },
            opts: {
                ar: ["النموذج الطبي الحيوي (Biomedical model)", "النموذج البيولوجي النفسي الاجتماعي (Biopsychosocial Model)", "علم النفس المعرفي"],
                en: ["Biomedical model", "Biopsychosocial Model", "Cognitive psychology"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "وفقاً للنموذج البيولوجي النفسي الاجتماعي، العوامل البيولوجية (Bio contributing factors) تشمل:", 
                en: "According to the bio-psychosocial model, bio contributing factors include:" 
            },
            opts: {
                ar: ["الإدراك والمشاعر", "الأعراف الاجتماعية وتوقعات الأقران", "الجينات والفيروسات والبكتيريا والعيوب الهيكلية"],
                en: ["Cognitions and emotions", "Social norms and peer expectations", "Genetics, viruses, bacteria and structural defects"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "وفقاً للنموذج البيولوجي النفسي الاجتماعي، العوامل النفسية (Psycho aspects) تشمل:", 
                en: "According to the bio-psychosocial model, psycho aspects of health and illness are described in terms of:" 
            },
            opts: {
                ar: ["الإدراك والمشاعر والسلوكيات", "الطبقة الاجتماعية والعرق", "الفيروسات والبكتيريا"],
                en: ["Cognitions, emotions and behaviors", "Social class and ethnicity", "Viruses and bacteria"]
            },
            correct: 0
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec5_data);
} else {
    var allLectures = [lec5_data];
}