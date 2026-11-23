/*
 * Hungarian Verb Encyclopedia
 * ------------------------------------------------------------
 * To add or edit verbs, normally you only need to change the
 * VERB DATABASE section below.
 *
 * Each conjugation array uses this fixed order:
 * [Én, Te, Ő, Mi, Ti, Ők]
 */

// ============================================================
// 1. TENSE CONFIGURATION
// ============================================================

const tenseConfig = [
    { id: "present_indefinite", title: "Present indefinite tense", color: 1 },
    { id: "present_definite", title: "Present definite tense", color: 2 },
    { id: "past_indefinite", title: "Past indefinite tense", color: 3 }
];

/*
    { id: "past_definite", title: "Past definite tense", color: 4 },
    { id: "conditional_present_indefinite", title: "Conditional present indefinite tense", color: 5 },
    { id: "conditional_present_definite", title: "Conditional present definite tense", color: 1 },
    { id: "conditional_past_indefinite", title: "Conditional past indefinite tense", color: 2 },
    { id: "conditional_past_definite", title: "Conditional past definite tense", color: 3 },
    { id: "future_indefinite", title: "Future indefinite tense", color: 4 },
    { id: "future_definite", title: "Future definite tense", color: 5 },
    { id: "subjunctive_present_definite", title: "Subjunctive present definite tense", color: 1 },
    { id: "subjunctive_present_indefinite", title: "Subjunctive present indefinite tense", color: 2 },
    { id: "conjugated_infinitives", title: "Conjugated infinitives", color: 3 }
*/

// Person order for every six-cell conjugation row.
const persons = ["Én", "Te", "Ő", "Mi", "Ti", "Ők"];

// ============================================================
// 2. VERB DATABASE
// ============================================================

const verbs = [
    {
        infinitive: "adni",
        meaning: "给",
        tenses: {
            present_indefinite: ["adok", "adsz", "ad", "adunk", "adtok", "adnak"],
            present_definite: ["adom", "adod", "adja", "adjuk", "adjátok", "adják"],
            past_indefinite: ["adtam", "adtál", "adott", "adtunk", "adtatok", "adtak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "aludni",
        meaning: "睡觉",
        tenses: {
			present_indefinite: ["alszom", "alszol", "alszik", "alszunk", "alszotok", "alszanak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["aludtam", "aludtál", "aludt", "aludtunk", "aludtatok", "aludtak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "akarni",
        meaning: "想",
        tenses: {
			present_indefinite: ["akarok", "akarsz", "akar", "akarunk", "akartok", "akarnak"],
			present_definite: ["akarom", "akarod", "akarja", "akarjuk", "akarjátok", "akarják"],
			past_indefinite: ["akartam", "akartál", "akart", "akartunk", "akartatok", "akartak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "beszélni",
        meaning: "说",
        tenses: {
			present_indefinite: ["beszélek", "beszélsz", "beszél", "beszélünk", "beszéltek", "beszélnek"],
			present_definite: ["beszélem", "beszéled", "beszéli", "beszéljük", "beszélitek", "beszélik"],
			past_indefinite: ["beszéltem", "beszéltél", "beszélt", "beszéltünk", "beszéltetek", "beszéltek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "csinálni",
        meaning: "做、干、制作",
        tenses: {
			present_indefinite: ["csinálok", "csinálsz", "csinál", "csinálunk", "csináltok", "csinálnak"],
			present_definite: ["csinálom", "csinálod", "csinálja", "csináljuk", "csináljátok", "csinálják"],
			past_indefinite: ["csináltam", "csináltál", "csinált", "csináltunk", "csináltatok", "csináltak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "dolgozni",
        meaning: "工作",
        tenses: {
            present_indefinite: ["dolgozom", "dolgozol", "dolgozik", "dolgozunk", "dolgoztok", "dolgoznak"],
            present_definite: ["dolgozom", "dolgozod", "dolgozza", "dolgozzuk", "dolgozzátok", "dolgozzák"],
            past_indefinite: ["dolgoztam", "dolgoztál", "dolgozott", "dolgoztunk", "dolgoztatok", "dolgoztak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "ebédelni",
        meaning: "吃午饭",
        tenses: {
            present_indefinite: ["ebédelek", "ebédelsz", "ebédel", "ebédelünk", "ebédeltek", "ebédelnek"],
            present_definite: ["ebédelem", "ebédeled", "ebédeli", "ebédeljük", "ebédelitek", "ebédelik"],
            past_indefinite: ["ebédeltem", "ebédeltél", "ebédelt", "ebédeltünk", "ebédeltetek", "ebédeltek"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "élni",
        meaning: "生活、生存、居住",
        tenses: {
			present_indefinite: ["élek", "élsz", "él", "élünk", "éltek", "élnek"],
			present_definite: ["élem", "éled", "éli", "éljük", "élitek", "élik"],
			past_indefinite: ["éltem", "éltél", "élt", "éltünk", "éltetek", "éltek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "énekelni",
        meaning: "唱歌",
        tenses: {
			present_indefinite: ["éneklek", "énekelsz", "énekel", "éneklünk", "énekeltek", "énekelnek"],
			present_definite: ["éneklem", "énekled", "énekli", "énekeljük", "éneklitek", "éneklik"],
			past_indefinite: ["énekeltem", "énekeltél", "énekelt", "énekeltünk", "énekeltetek", "énekeltek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "enni",
        meaning: "吃",
        tenses: {
            present_indefinite: ["eszem", "eszel", "eszik", "eszünk", "esztek", "esznek"],
            present_definite: ["eszem", "eszed", "eszi", "esszük", "eszitek", "eszik"],
            past_indefinite: ["ettem", "ettél", "evett", "ettünk", "ettetek", "ettek"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "érkezni",
        meaning: "到达",
        tenses: {
			present_indefinite: ["érkezem", "érkezel", "érkezik", "érkezünk", "érkeztek", "érkeznek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["érkeztem", "érkeztél", "érkezett", "érkeztünk", "érkeztetek", "érkeztek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "érteni",
        meaning: "明白，懂",
        tenses: {
			present_indefinite: ["értek", "értesz", "ért", "értünk", "értetek", "értenek"],
			present_definite: ["értem", "érted", "érti", "értjük", "értitek", "értik"],
			past_indefinite: ["értettem", "értettél", "értett", "értettünk", "értettetek", "értettek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "fájni",
        meaning: "疼，伤",
        tenses: {
			present_indefinite: ["fájok", "fájsz", "fáj", "fájunk", "fájtok", "fájnak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["fájtam", "fájtál", "fájt", "fájtunk", "fájtatok", "fájtak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "feküdni",
        meaning: "躺着",
        tenses: {
			present_indefinite: ["fekszem", "fekszel", "fekszik", "fekszünk", "fekszetek", "fekszenek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["feküdtem", "feküdtél", "feküdt", "feküdtünk", "feküdtetek", "feküdtek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "fogni",
        meaning: "抓住，握着，拿着，捕捉，接住。将会……、要……",
        tenses: {
			present_indefinite: ["fogok", "fogsz", "fog", "fogunk", "fogtok", "fognak"],
			present_definite: ["fogom", "fogod", "fogja", "fogjuk", "fogjátok", "fogják"],
			past_indefinite: ["fogtam", "fogtál", "fogott", "fogtunk", "fogtatok", "fogtak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "főzni",
        meaning: "做饭",
        tenses: {
            present_indefinite: ["főzök", "főzöl", "főz", "főzünk", "főztök", "főznek"],
            present_definite: ["főzöm", "főzöd", "főzi", "főzzük", "főzitek", "főzik"],
            past_indefinite: ["főztem", "főztél", "főzött", "főztünk", "főztetek", "főztek"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "hozni",
        meaning: "带着，带来、拿来",
        tenses: {
			present_indefinite: ["hozok", "hozol", "hoz", "hozunk", "hoztok", "hoznak"],
			present_definite: ["hozom", "hozod", "hozza", "hozzuk", "hozzátok", "hozzák"],
			past_indefinite: ["hoztam", "hoztál", "hozott", "hoztunk", "hoztatok", "hoztak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "írni",
        meaning: "写、书写",
        tenses: {
            present_indefinite: ["írok", "írsz", "ír", "írunk", "írtok", "írnak"],
            present_definite: ["írom", "írod", "írja", "írjuk", "írjátok", "írják"],
            past_indefinite: ["írtam", "írtál", "írt", "írtunk", "írtatok", "írtak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "inni",
        meaning: "喝",
        tenses: {
            present_indefinite: ["iszom", "iszol", "iszik", "iszunk", "isztok", "isznak"],
            present_definite: ["iszom", "iszod", "issza", "isszuk", "isszátok", "isszák"],
            past_indefinite: ["ittam", "ittál", "ivott", "ittunk", "ittatok", "ittak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "jönni",
        meaning: "来",
        tenses: {
			present_indefinite: ["jövök", "jössz", "jön", "jövünk", "jöttök", "jönnek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["jöttem", "jöttél", "jött", "jöttünk", "jöttetek", "jöttek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "kapni",
        meaning: "得到",
        tenses: {
			present_indefinite: ["kapok", "kapsz", "kap", "kapunk", "kaptok", "kapnak"],
			present_definite: ["kapom", "kapod", "kapja", "kapjuk", "kapjátok", "kapják"],
			past_indefinite: ["kaptam", "kaptál", "kapott", "kaptunk", "kaptatok", "kaptak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "keresni",
        meaning: "寻找",
        tenses: {
			present_indefinite: ["keresek", "keresel", "keres", "keresünk", "kerestek", "keresnek"],
			present_definite: ["keresem", "keresed", "keresi", "keressük", "keresitek", "keresik"],
			past_indefinite: ["kerestem", "kerestél", "keresett", "kerestünk", "kerestetek", "kerestek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "kérni",
        meaning: "问、请求、要求、索要",
        tenses: {
			present_indefinite: ["kérek", "kérsz", "kér", "kérünk", "kértek", "kérnek"],
			present_definite: ["kérem", "kéred", "kéri", "kérjük", "kéritek", "kérik"],
			past_indefinite: ["kértem", "kértél", "kért", "kértünk", "kértetek", "kértek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "kerülni",
        meaning: "花费",
        tenses: {
			present_indefinite: ["kerülök", "kerülsz", "kerül", "kerülünk", "kerültök", "kerülnek"],
			present_definite: ["kerülöm", "kerülöd", "kerüli", "kerüljük", "kerülitek", "kerülik"],
			past_indefinite: ["kerültem", "kerültél", "került", "kerültünk", "kerültetek", "kerültek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "kirándulni",
        meaning: "远足",
        tenses: {
			present_indefinite: ["kirándulok", "kirándulsz", "kirándul", "kirándulunk", "kirándultok", "kirándulnak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["kirándultam", "kirándultál", "kirándult", "kirándultunk", "kirándultatok", "kirándultak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "lakni",
        meaning: "生活、居住、住在",
        tenses: {
			present_indefinite: ["lakom", "laksz", "lakik", "lakunk", "laktok", "laknak"],
			present_definite: ["lakom", "lakod", "lakja", "lakjuk", "lakjátok", "lakják"],
			past_indefinite: ["laktam", "laktál", "lakott", "laktunk", "laktatok", "laktak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "menni",
        meaning: "走、去",
        tenses: {
            present_indefinite: ["megyek", "mész", "megy", "megyünk", "mentek", "mennek"],
            present_definite: ["", "", "", "", "", ""],
            past_indefinite: ["mentem", "mentél", "ment", "mentünk", "mentetek", "mentek"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "nézni",
        meaning: "看",
        tenses: {
			present_indefinite: ["nézek", "nézel", "néz", "nézünk", "néztek", "néznek"],
			present_definite: ["nézem", "nézed", "nézi", "nézzük", "nézitek", "nézik"],
			past_indefinite: ["néztem", "néztél", "nézett", "néztünk", "néztetek", "néztek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "olvasni",
        meaning: "读",
        tenses: {
            present_indefinite: ["olvasok", "olvasol", "olvas", "olvasunk", "olvastok", "olvasnak"],
            present_definite: ["olvasom", "olvasod", "olvassa", "olvassuk", "olvassátok", "olvassák"],
            past_indefinite: ["olvastam", "olvastál", "olvasott", "olvastunk", "olvastatok", "olvastak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "pihenni",
        meaning: "休息",
        tenses: {
			present_indefinite: ["pihenek", "pihensz", "pihen", "pihenünk", "pihentek", "pihennek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["pihentem", "pihentél", "pihent", "pihentünk", "pihentetek", "pihentek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "repülni",
        meaning: "飞",
        tenses: {
			present_indefinite: ["repülök", "repülsz", "repül", "repülünk", "repültök", "repülnek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["repültem", "repültél", "repült", "repültünk", "repültetek", "repültek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "segíteni",
        meaning: "帮助，帮忙",
        tenses: {
			present_indefinite: ["segítek", "segítesz", "segít", "segítünk", "segítetek", "segítenek"],
			present_definite: ["segítem", "segíted", "segíti", "segítjük", "segítitek", "segítik"],
			past_indefinite: ["segítettem", "segítettél", "segített", "segítettünk", "segítettetek", "segítettek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "sütni",
        meaning: "烤、烘焙、煎；（太阳）照耀",
        tenses: {
			present_indefinite: ["sütök", "sütsz", "süt", "sütünk", "süttök", "sütnek"],
			present_definite: ["sütöm", "sütöd", "süti", "sütjük", "sütitek", "sütik"],
			past_indefinite: ["sütöttem", "sütöttél", "sütött", "sütöttünk", "sütöttetek", "sütöttek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "takarítani",
        meaning: "打扫、清洁、收拾",
        tenses: {
            present_indefinite: ["takarítok", "takarítasz", "takarít", "takarítunk", "takarítotok", "takarítanak"],
            present_definite: ["takarítom", "takarítod", "takarítja", "takarítjuk", "takarítjátok", "takarítják"],
            past_indefinite: ["takarítottam", "takarítottál", "takarított", "takarítottunk", "takarítottatok", "takarítottak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tálalni",
        meaning: "出席，上菜、摆放食物",
        tenses: {
			present_indefinite: ["tálalok", "tálalsz", "tálal", "tálalunk", "tálaltok", "tálalnak"],
			present_definite: ["tálalom", "tálalod", "tálalja", "tálaljuk", "tálaljátok", "tálalják"],
			past_indefinite: ["tálaltam", "tálaltál", "tálalt", "tálaltunk", "tálaltatok", "tálaltak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "találkozni",
        meaning: "会见、见面、相遇",
        tenses: {
			present_indefinite: ["találkozom", "találkozol", "találkozik", "találkozunk", "találkoztok", "találkoznak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["találkoztam", "találkoztál", "találkozott", "találkoztunk", "találkoztatok", "találkoztak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "táncolni",
        meaning: "跳舞",
        tenses: {
            present_indefinite: ["táncolok", "táncolsz", "táncol", "táncolunk", "táncoltok", "táncolnak"],
            present_definite: ["táncolom", "táncolod", "táncolja", "táncoljuk", "táncoljátok", "táncolják"],
            past_indefinite: ["táncoltam", "táncoltál", "táncolt", "táncoltunk", "táncoltatok", "táncoltak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tanítani",
        meaning: "教",
        tenses: {
			present_indefinite: ["tanítok", "tanítasz", "tanít", "tanítunk", "tanítotok", "tanítanak"],
			present_definite: ["tanítom", "tanítod", "tanítja", "tanítjuk", "tanítjátok", "tanítják"],
			past_indefinite: ["tanítottam", "tanítottál", "tanított", "tanítottunk", "tanítottatok", "tanítottak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tanulni",
        meaning: "学习",
        tenses: {
            present_indefinite: ["tanulok", "tanulsz", "tanul", "tanulunk", "tanultok", "tanulnak"],
            present_definite: ["tanulom", "tanulod", "tanulja", "tanuljuk", "tanuljátok", "tanulják"],
            past_indefinite: ["tanultam", "tanultál", "tanult", "tanultunk", "tanultatok", "tanultak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tenni",
        meaning: "放、置、做（某个动作）、使得",
        tenses: {
			present_indefinite: ["teszek", "teszel", "tesz", "teszünk", "tesztek", "tesznek"],
			present_definite: ["teszem", "teszed", "teszi", "tesszük", "teszitek", "teszik"],
			past_indefinite: ["tettem", "tettél", "tett", "tettünk", "tettetek", "tettek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tetszeni",
        meaning: "喜欢、使人喜欢、令人满意、中意",
        tenses: {
			present_indefinite: ["tetszem", "tetszel", "tetszik", "tetszünk", "tetszetek", "tetszenek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["tetszettem", "tetszettél", "tetszett", "tetszettünk", "tetszettetek", "tetszettek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "tudni",
        meaning: "知道，能，可以",
        tenses: {
			present_indefinite: ["tudok", "tudsz", "tud", "tudunk", "tudtok", "tudnak"],
			present_definite: ["tudom", "tudod", "tudja", "tudjuk", "tudjátok", "tudják"],
			past_indefinite: ["tudtam", "tudtál", "tudott", "tudtunk", "tudtatok", "tudtak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "történni",
        meaning: "发生",
        tenses: {
			present_indefinite: ["történek", "történsz", "történik", "történünk", "történtek", "történnek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["történtem", "történtél", "történt", "történtünk", "történtetek", "történtek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "lenni",
        meaning: "成为",
        tenses: {
			present_indefinite: ["leszek", "leszel", "lesz", "leszünk", "lesztek", "lesznek"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["lettem", "lettél", "lett", "lettünk", "lettetek", "lettek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "lenni",
        meaning: "是",
        tenses: {
            present_indefinite: ["vagyok", "vagy", "van", "vagyunk", "vagytok", "vannak"],
            present_definite: ["", "", "", "", "", ""],
            past_indefinite: ["voltam", "voltál", "volt", "voltunk", "voltatok", "voltak"]
        }
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "ülni",
        meaning: "坐",
        tenses: {
			present_indefinite: ["ülök", "ülsz", "ül", "ülünk", "ültök", "ülnek"],
			present_definite: ["ülöm", "ülöd", "üli", "üljük", "ülitek", "ülik"],
			past_indefinite: ["ültem", "ültél", "ült", "ültünk", "ültetek", "ültek"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "úszni",
        meaning: "游泳",
        tenses: {
			present_indefinite: ["úszom", "úszol", "úszik", "úszunk", "úsztok", "úsznak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["úsztam", "úsztál", "úszott", "úsztunk", "úsztatok", "úsztak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "utazni",
        meaning: "旅行",
        tenses: {
			present_indefinite: ["utazom", "utazol", "utazik", "utazunk", "utaztok", "utaznak"],
			present_definite: ["", "", "", "", "", ""],
			past_indefinite: ["utaztam", "utaztál", "utazott", "utaztunk", "utaztatok", "utaztak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "vásárolni",
        meaning: "买，购买，购物",
        tenses: {
			present_indefinite: ["vásárolok", "vásárolsz", "vásárol", "vásárolunk", "vásároltok", "vásárolnak"],
			present_definite: ["vásárolom", "vásárolod", "vásárolja", "vásároljuk", "vásároljátok", "vásárolják"],
			past_indefinite: ["vásároltam", "vásároltál", "vásárolt", "vásároltunk", "vásároltatok", "vásároltak"]
		}
    },
/*-----------------------------------------------------------------*/
    {
        infinitive: "venni",
        meaning: "拿、取、买。买某个东西",
        tenses: {
			present_indefinite: ["veszek", "veszel", "vesz", "veszünk", "vesztek", "vesznek"],
			present_definite: ["veszem", "veszed", "veszi", "vesszük", "veszitek", "veszik"],
			past_indefinite: ["vettem", "vettél", "vett", "vettünk", "vettetek", "vettek"]
		}
    }
/*-----------------------------------------------------------------*/
];

// ============================================================
// 3. RENDER ENGINE
// ============================================================

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getSixForms(tenseData) {
    const values = Array.isArray(tenseData) ? tenseData : [];
    return persons.map((_, index) => {
        const value = values[index];
        return value == null ? "" : String(value).trim();
    });
}

function renderTense(tense, verb) {
    const forms = getSixForms(verb.tenses?.[tense.id]);

    const cells = forms.map((form, index) => {
        const isEmpty = form === "";
        const cellClass = isEmpty
            ? "conjugation-cell empty-cell"
            : `conjugation-cell tense-color-${tense.color}`;

        return `
            <div class="${cellClass}">
                <span class="person-label">${persons[index]}</span>
                <span class="form-value">${isEmpty ? "&nbsp;" : escapeHtml(form)}</span>
            </div>
        `;
    }).join("");

    return `
        <section class="tense-block" aria-label="${escapeHtml(tense.title)}">
            <h3 class="tense-title">${escapeHtml(tense.title)}</h3>
            <div class="conjugation-grid">${cells}</div>
        </section>
    `;
}

function renderVerbCard(verb) {
    const tensesHtml = tenseConfig
        .map(tense => renderTense(tense, verb))
        .join("");

    return `
        <article class="verb-card">
            <div class="verb-identity">
                <h2 class="verb-infinitive">${escapeHtml(verb.infinitive)}</h2>
                <p class="verb-meaning">${escapeHtml(verb.meaning)}</p>
            </div>
            <div class="verb-tenses">
                ${tensesHtml}
            </div>
        </article>
    `;
}

function renderVerbList() {
    const listElement = document.getElementById("verb-list");
    const countElement = document.getElementById("verb-count");

    if (!listElement) return;

    const collator = new Intl.Collator("hu", {
        usage: "sort",
        sensitivity: "base"
    });

    const sortedVerbs = [...verbs].sort((a, b) =>
        collator.compare(a.infinitive, b.infinitive)
    );

    listElement.innerHTML = sortedVerbs.map(renderVerbCard).join("");

    if (countElement) {
        countElement.textContent = `${sortedVerbs.length} verbs`;
    }
}

document.addEventListener("DOMContentLoaded", renderVerbList);
