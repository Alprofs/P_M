// Data for Lecture 9 & 10
const lec9_10_data = {
    id: "lec9_10",
    title: {
        ar: "المحاضرة 9 و 10: الشخصية والاضطرابات",
        en: "Lec 9 & 10: Personality & Disorders"
    },
    // قسم المراجعة (الخريطة الذهنية)
    revision: [
        {
            title: { ar: "أساسيات الشخصية", en: "Personality Basics" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "تعريف الشخصية", en: "Definition" },
                    content: { 
                        ar: "مزيج من الخصائص التي تشكل الطبيعة الفريدة للشخص في تفاعله مع الآخرين. تنشأ من الوراثة والبيئة.", 
                        en: "Combination of characteristics that comprise the unique nature of a person. Traits from heredity and environment." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الأبعاد الخمسة الكبرى (Big Five)", en: "Big Five Dimensions" },
                    content: { 
                        ar: "1. الانبساط (Extraversion) 2. القبول (Agreeableness) 3. الضمير الحي (Conscientiousness) 4. الاستقرار العاطفي (Emotional stability) 5. الانفتاح (Openness).", 
                        en: "Extraversion, Agreeableness, Conscientiousness, Emotional stability, Openness to experience." 
                    }
                }
            ]
        },
        {
            title: { ar: "عوامل الشخصية الصحية", en: "Healthy Personality Factors" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "التفاؤل (Optimism)", en: "Optimism" },
                    content: { 
                        ar: "توقعات إيجابية للمستقبل. يؤدي لتقليل العدوى، تعافي أسرع، وألم أقل.", 
                        en: "Positive expectations. Leads to fewer infections, quicker recovery, less pain." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "الانبساط (Extraversion)", en: "Extraversion" },
                    content: { 
                        ar: "أفراد اجتماعيون يتمتعون بطاقة عالية. أعراض جسدية أقل.", 
                        en: "Outgoing and social, high energy. Fewer physical symptoms." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "مركز التحكم الداخلي (Internal Locus)", en: "Internal Locus of Control" },
                    content: { 
                        ar: "الشعور بالتحكم الداخلي. يقلل من الاكتئاب ويدفع الفرد لتحسين صحته.", 
                        en: "Perception of internalized control. Decreases depression, likely to investigate health methods." 
                    }
                }
            ]
        },
        {
            title: { ar: "اضطرابات الشخصية (DSM-IV) - المجموعات", en: "Personality Disorders (DSM-IV)" },
            branches: [
                {
                    type: "origin",
                    nodeTitle: { ar: "المجموعة الغريبة (Type A: Odd)", en: "Type A: Odd Cluster" },
                    content: { 
                        ar: "البارانويا (Paranoid): يشك في الجميع. الفصامي (Schizoid): يفتقر للعلاقات. شبه الفصامي (Schizotypal): أفكار غريبة.", 
                        en: "Paranoid: Mistrustful. Schizoid: Lacks relationships. Schizotypal: Odd ideas." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "المجموعة الدرامية (Type B: Dramatic)", en: "Type B: Dramatic Cluster" },
                    content: { 
                        ar: "المعادي للمجتمع (Antisocial): مريض نفسي/ينتهك القوانين. النرجسي (Narcissistic): يبحث عن الاهتمام ومغرور. الحدي (Borderline): عاطفة غير مستقرة ومتهور. ההستيري (Histrionic): درامي.", 
                        en: "Antisocial: Psychopath. Narcissistic: Grandiose. Borderline: Emotionally unstable. Histrionic: Dramatic." 
                    }
                },
                {
                    type: "key",
                    nodeTitle: { ar: "المجموعة القلقة (Type C: Anxious)", en: "Type C: Anxious Cluster" },
                    content: { 
                        ar: "التجنبي (Avoidant): يتجنب المجتمع خوفاً من الرفض. الاعتمادي (Dependent): يتشبث بشخص أقوى. الوسواسي القهري (Obsessive): مهووس بالنظام والكمال.", 
                        en: "Avoidant: Fears rejection. Dependent: Clings to stronger person. Obsessive-compulsive: Perfectionism." 
                    }
                }
            ]
        }
    ],
    // قسم الأسئلة
    quiz: [
        {
            q: { 
                ar: "وفقاً لأبعاد الشخصية الخمسة الكبرى (Big Five)، أي مما يلي يصف الشخصية المنفتحة (Openness)؟", 
                en: "According to the Big Five personality dimensions, Openness to experience means being:" 
            },
            opts: {
                ar: ["موثوقاً ومتعاوناً", "واسع الخيال وفضولياً (Imaginative, curious)", "قلقاً وغير آمن", "اجتماعياً ومنطلقاً"],
                en: ["Trusting, cooperative", "Imaginative, curious", "Worried, insecure", "Outgoing, sociable"]
            },
            correct: 1
        },
        {
            q: { 
                ar: "الأفراد الذين لديهم تفكير متفائل (Optimistic) وتقدير ذاتي مرتفع يعانون من التهابات أقل ويتعافون بشكل أسرع بعد الجراحة.", 
                en: "Individuals with optimistic thinking and high self-esteem leads to fewer infections and quicker post-operative recovery." 
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: مريض نفسي ينتهك القوانين والأعراف الاجتماعية، وغير مهتم بتأثيره على الآخرين؟", 
                en: "Scientific Term: The psychopath - violates laws and social conventions, is dishonest." 
            },
            opts: {
                ar: ["الشخصية النرجسية", "الشخصية التجنبية", "الشخصية المعادية للمجتمع (Antisocial personality)", "الشخصية الاعتمادية"],
                en: ["Narcissistic", "Avoidant", "Antisocial personality", "Dependent"]
            },
            correct: 2
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: شخصية مغرورة، تحتاج إلى الاهتمام، تفتقر إلى التعاطف مع الآخرين؟", 
                en: "Scientific Term: Grandiose, needs attention, lack of empathy for others." 
            },
            opts: {
                ar: ["الشخصية النرجسية (Narcissistic personality)", "الشخصية الحدية", "الشخصية الانطوائية", "الشخصية الهستيرية"],
                en: ["Narcissistic personality", "Borderline", "Schizoid", "Histrionic"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "الشخصية التي تعاني من شدة عاطفية وعدم استقرار، مع سلوك متهور وشعور بالفراغ الداخلي هي:", 
                en: "Emotionally intense and unstable, with impulsive behavior, self destructiveness, inner emptiness:" 
            },
            opts: {
                ar: ["الشخصية الحدية (Borderline personality)", "الشخصية الاعتمادية", "شخصية البارانويا", "الشخصية الوسواسية"],
                en: ["Borderline personality", "Dependent", "Paranoid", "Obsessive-compulsive"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "ما هو المصطلح العلمي: يتجنب المواقف الاجتماعية بسبب الخوف من الرفض أو النقد؟", 
                en: "Scientific Term: Avoids social situations because of fears of rejection, criticism, or disappointment." 
            },
            opts: {
                ar: ["الشخصية التجنبية (Avoidant personality)", "الشخصية شبه الفصامية", "الشخصية الانطوائية", "الشخصية الهستيرية"],
                en: ["Avoidant personality", "Schizotypal", "Schizoid", "Histrionic"]
            },
            correct: 0
        },
        {
            q: { 
                ar: "في تقسيم اضطرابات الشخصية، المجموعة الغريبة (Odd Cluster - Type A) تضم:", 
                en: "The Odd Cluster (Type A) of personality disorders includes:" 
            },
            opts: {
                ar: ["النرجسي، الحدي، الهستيري", "التجنبي، الاعتمادي، الوسواسي", "البارانويا، الفصامي، وشبه الفصامي (Paranoid, Schizoid, Schizotypal)"],
                en: ["Narcissistic, Borderline, Histrionic", "Avoidant, Dependent, Obsessive", "Paranoid, Schizoid, Schizotypal"]
            },
            correct: 2
        }
    ]
};

// التأكد من إضافة المحاضرة للمصفوفة الرئيسية
if (typeof allLectures !== 'undefined') {
    allLectures.push(lec9_10_data);
} else {
    var allLectures = [lec9_10_data];
}