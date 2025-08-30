const questions = [
  { 
    text: {
      id: "Awal 1900-an, organisasi pergerakan lahir melawan kolonialisme Belanda. Mana pendekatanmu?",
      en: "In the early 1900s, movement organizations were born against Dutch colonialism. What is your approach?"
    }, 
    options: {
      id: ["Reformasi bertahap dari dalam (Volksraad)", "Tuntut kemerdekaan segera"],
      en: ["Gradual reform from within (Volksraad)", "Demand immediate independence"]
    } 
  },
  { 
    text: {
      id: "Sumpah Pemuda 1928: seberapa penting maknanya?",
      en: "Youth Pledge of 1928: how important is its meaning?"
    }, 
    options: {
      id: ["Fondasi identitas nasional", "Simbolis, bukan penentu"],
      en: ["Foundation of national identity", "Symbolic, not decisive"]
    } 
  },
  { 
    text: {
      id: "Strategi Boedi Oetomo vs Sarekat Islam:",
      en: "Strategy of Boedi Oetomo vs Sarekat Islam:"
    }, 
    options: {
      id: ["Elitis-terdidik efektif", "Massa-rakyat lebih kuat"],
      en: ["Elite-educated effective", "Mass-people power is stronger"]
    } 
  },
  { 
    text: {
      id: "Pendudukan Jepang (1942–45) bagi kemerdekaan:",
      en: "Japanese occupation (1942–45) for independence:"
    }, 
    options: {
      id: ["Mempercepat kaderisasi militer & birokrasi", "Melemahkan karena represi & kelaparan"],
      en: ["Accelerated military & bureaucratic cadre development", "Weakened due to repression & famine"]
    } 
  },
  { 
    text: {
      id: "17 Agustus 1945: prioritas awal republik?",
      en: "August 17, 1945: initial priorities of the republic?"
    }, 
    options: {
      id: ["Legitimasi diplomatik", "Konsolidasi kekuatan bersenjata"],
      en: ["Diplomatic legitimacy", "Consolidation of armed forces"]
    } 
  },
  { 
    text: {
      id: "Perjanjian Linggarjati & Renville:",
      en: "Linggarjati and Renville Agreements:"
    }, 
    options: {
      id: ["Realistis demi napas perjuangan", "Terlalu mengalah pada Belanda"],
      en: ["Realistic for the struggle's survival", "Too concessionary to the Dutch"]
    } 
  },
  { 
    text: {
      id: "Revolusi Nasional 1945–49: strategi utama menang?",
      en: "1945–49 National Revolution: main winning strategy?"
    }, 
    options: {
      id: ["Gerilya & perang rakyat", "Perang konvensional & diplomasi agresif"],
      en: ["Guerrilla & people's war", "Conventional warfare & aggressive diplomacy"]
    } 
  },
  { 
    text: {
      id: "Demokrasi Liberal 1950-an:",
      en: "Liberal Democracy of the 1950s:"
    }, 
    options: {
      id: ["Pluralisme sehat", "Terlalu fragmentaris"],
      en: ["Healthy pluralism", "Too fragmentary"]
    } 
  },
  { 
    text: {
      id: "Demokrasi Terpimpin:",
      en: "Guided Democracy:"
    }, 
    options: {
      id: ["Stabilkan negara", "Konsentrasi kekuasaan berbahaya"],
      en: ["Stabilized the nation", "Dangerous concentration of power"]
    } 
  },
  { 
    text: {
      id: "Nasionalisasi asing era Sukarno:",
      en: "Nationalization of foreign assets under Sukarno:"
    }, 
    options: {
      id: ["Kedaulatan ekonomi mutlak", "Biarkan mereka"],
      en: ["Absolute economic sovereignty", "Leave them be"]
    } 
  },
  { 
    text: {
      id: "Konfrontasi Malaysia 1963-65:",
      en: "Malaysian Confrontation 1963-1965:"
    }, 
    options: {
      id: ["Kita saudara", "Ganyang negara boneka Inggris"],
      en: ["We are brothers", "Destroy British puppet state"]
    } 
  },
  { 
    text: {
      id: "Kudeta gerakan 30 September",
      en: "30th September Movement coup attempt"
    }, 
    options: {
      id: ["Konspirasi Partai Komunis", "Mereka di jebak oleh militer"],
      en: ["A Communist conspiracy", "They were framed by the Military"]
    } 
  },
  { 
    text: {
      id: "1965–66: prioritas nasional saat transisi:",
      en: "1965–66: national priorities during transition:"
    }, 
    options: {
      id: ["Pemulihan ekonomi dulu", "Penataan politik dan keamanan dulu"],
      en: ["Economic recovery first", "Political and security restructuring first"]
    } 
  },
  { 
    text: {
      id: "Orde Baru soal pembangunan:",
      en: "New Order regarding development:"
    }, 
    options: {
      id: ["Pertumbuhan dulu, pemerataan belakangan", "Pemerataan harus seiring"],
      en: ["Growth first, equity later", "Equity must be simultaneous"]
    } 
  },
  { 
    text: {
      id: "Invasi Timor Leste",
      en: "Invasion of East Timor"
    }, 
    options: {
      id: ["Dibenarkan.", "Invasi ilegal tanpa alasan."],
      en: ["Justified.", "Illegal Invsion without merit."]
    } 
  },
  { 
    text: {
      id: "Krisis moneter 1997-98:",
      en: "Monetary crisis 1997-98:"
    }, 
    options: {
      id: ["Kesalahan kebijakan ekonomi Orba", "Dampak rantai global yang tak terhindarkan"],
      en: ["New Order economic policy failure", "Inevitable global chain impact"]
    } 
  },
  { 
    text: {
      id: "Reformasi 1998: strategi transisi terbaik:",
      en: "Reformasi 1998: best transition strategy:"
    }, 
    options: {
      id: ["Perubahan bertahap institusional", "Guncangan besar untuk reset total"],
      en: ["Gradual institutional change", "Major shock for total reset"]
    } 
  },
  { 
    text: {
      id: "Otonomi daerah pasca-1999:",
      en: "Regional autonomy post-1999:"
    }, 
    options: {
      id: ["Dekatkan layanan ke rakyat", "Risiko korupsi & feodalisme lokal"],
      en: ["Brings services closer to people", "Risk of corruption & local feudalism"]
    } 
  },
  { 
    text: {
      id: "Arah kebijakan luar negeri 'bebas aktif':",
      en: "Direction of 'free and active' foreign policy:"
    }, 
    options: {
      id: ["Netral-berprinsip", "Harus lebih berpihak pada kepentingan ekonomi"],
      en: ["Neutral-principled", "Should side more with economic interests"]
    } 
  },
  { 
    text: {
      id: "Pembangunan sejarah nasional di pendidikan:",
      en: "Development of national history in education:"
    }, 
    options: {
      id: ["Narasi pemersatu", "Harus lebih kritis & plural"],
      en: ["Unifying narrative", "Should be more critical & plural"]
    } 
  },
  { 
    text: {
      id: "Pembentukan KPK (2002): pendekatan pemberantasan korupsi?",
      en: "The establishment of the KPK (2002): approach to eradicating corruption?"
    }, 
    options: {
      id: ["Lembaga khusus & superbody seperti KPK", "Perkuat lembaga existing (Kepolisian, Kejaksaan)"],
      en: ["A dedicated & powerful superbody like the KPK", "Strengthen existing institutions (Police, Attorney Office)"]
    } 
  },
  { 
    text: {
      id: "Pilkada langsung (2005):",
      en: "Direct local elections (2005):"
    }, 
    options: {
      id: ["Memperdalam demokrasi secara signifikan", "Memicu konflik SARA dan politik uang"],
      en: ["Significantly deepens democracy", "Triggers ethnic/religious conflict and money politics"]
    } 
  },
  { 
    text: {
      id: "Presidensi SBY: kebijakan ekonomi yang tepat?",
      en: "SBY's presidency: the right economic policy?"
    }, 
    options: {
      id: ["Pro-market, menarik investasi asing", "Pro-proteksionis, lindungi industri dalam negeri"],
      en: ["Pro-market, attracting foreign investment", "Pro-protectionism, shield domestic industry"]
    } 
  },
  { 
    text: {
      id: "Kebijakan subsidi BBM vs. cash transfer:",
      en: "Fuel subsidy policy vs. direct cash transfer:"
    }, 
    options: {
      id: ["Subsidi tepat sasaran (BLT) lebih efektif", "Harga BBM murah untungkan semua rakyat"],
      en: ["Targeted subsidies (cash transfers) are more effective", "Cheap fuel prices benefit all people"]
    } 
  },
  { 
    text: {
      id: "Era Jokowi: strategi pembangunan infrastruktur?",
      en: "Jokowi era: infrastructure development strategy?"
    }, 
    options: {
      id: ["Percepat pembangunan, pacu pertumbuhan ekonomi", "Waspada terhadap utang dan kerusakan lingkungan"],
      en: ["Accelerate development, spur economic growth", "Be cautious of debt and environmental damage"]
    } 
  },
  { 
    text: {
      id: "Polemik UU Cipta Kerja (Omnibus Law):",
      en: "Controversy over the Job Creation Law (Omnibus Law):"
    }, 
    options: {
      id: ["Dibutuhkan untuk mempermudah investasi", "Mengorbankan perlindungan lingkungan & tenaga kerja"],
      en: ["Needed to ease investment", "Sacrifices environmental and labor protections"]
    } 
  },
  { 
    text: {
      id: "Pendekatan terhadap Papua:",
      en: "Approach to Papua:"
    }, 
    options: {
      id: ["Dialog dan pembangunan kesejahteraan", "Keamanan dan kedaulatan mutlak"],
      en: ["Dialogue and welfare development", "Security and absolute sovereignty"]
    } 
  },
  { 
    text: {
      id: "Politik identitas & agama di era demokrasi:",
      en: "Identity & religion politics in the democratic era:"
    }, 
    options: {
      id: ["Ancaman terhadap pluralisme dan Pancasila", "Wujud kebebasan berekspresi yang sah"],
      en: ["A threat to pluralism and Pancasila", "A legitimate form of freedom of expression"]
    } 
  },
  { 
    text: {
      id: "Polemik revisi UU KPK (2019):",
      en: "Controversy over the KPK Law revision (2019):"
    }, 
    options: {
      id: ["Melemahkan independensi KPK", "Diperlukan untuk meningkatkan akuntabilitas KPK"],
      en: ["Weakens the KPK's independence", "Needed to improve the KPK's accountability"]
    } 
  },
  { 
    text: {
      id: "Tantangan terbesar demokrasi Indonesia pasca-Reformasi:",
      en: "The biggest challenge for Indonesian democracy post-Reformation:"
    }, 
    options: {
      id: ["Korupsi sistemik dan lemahnya penegakan hukum", "Polarisasi dan populisme berdasarkan identitas"],
      en: ["Systemic corruption and weak law enforcement", "Polarization and identity-based populism"]
    } 
  },
  { 
    text: {
      id: "Peran media sosial dalam politik modern:",
      en: "The role of social media in modern politics:"
    }, 
    options: {
      id: ["Memperkuat partisipasi dan pengawasan publik", "Racun bagi diskusi rasional dengan hoaks dan ujaran kebencian"],
      en: ["Strengthens public participation and oversight", "A poison for rational discourse with hoaxes and hate speech"]
    } 
  },
  { 
    text: {
      id: "Penerapan UU ITE dalam mengatur kebebasan berpendapat:",
      en: "Application of the ITE Law in regulating freedom of expression:"
    }, 
    options: {
      id: ["Perlindungan dari pencemaran nama baik & ujaran kebencian", "Alat kriminalisasi kritik dan membungsuhrkan suara oposisi"],
      en: ["Protection from defamation & hate speech", "A tool for criminalizing criticism and silencing opposition"]
    } 
  },
  { 
    text: {
      id: "Strategi menghadapi pandemi Covid-19:",
      en: "Strategy for facing the Covid-19 pandemic:"
    }, 
    options: {
      id: ["Lockdown ketat untuk selamatkan nyawa", "Pembatasan bertahap untuk selamatkan ekonomi rakyat"],
      en: ["Strict lockdowns to save lives", "Gradual restrictions to save the people's economy"]
    } 
  },
  { 
    text: {
      id: "Pilkada serentak 2020 di tengah pandemi:",
      en: "Simultaneous local elections in 2020 during the pandemic:"
    }, 
    options: {
      id: ["Pilihan tepat untuk stabilitas politik", "Seharusnya ditunda, berisiko percepat penularan"],
      en: ["The right choice for political stability", "Should have been postponed, risked accelerating transmission"]
    } 
  },
  { 
    text: {
      id: "Arah kebijakan luar negeri Indonesia di tengang persaingan AS-Tiongkok:",
      en: "Direction of Indonesian foreign policy amid US-China rivalry:"
    }, 
    options: {
      id: ["Tetap 'bebas-aktif' dan tidak memihak blok", "Harus lebih pragmatis memihak kepentingan ekonomi nasional"],
      en: ["Remain 'free-active' and non-aligned", "Must be more pragmatic, siding with national economic interests"]
    } 
  }
];

// UI Strings for both languages
const uiStrings = {
  id: {
    title: "Where do you stand",
    nextButton: "Lanjut",
    backButton: "Kembali ke pertanyaan sebelumnya",
    resultsTitle: "Hasil Akhir",
    resultsSummary: "Ringkasan pilihanmu di {total} pertanyaan.",
    restartButton: "Ulangi Kuis",
    answersDetail: "Rincian Jawaban"
  },
  en: {
    title: "Where do you stand",
    nextButton: "Next",
    backButton: "Back to previous question",
    resultsTitle: "Final Results",
    resultsSummary: "Summary of your choices in {total} questions.",
    restartButton: "Restart Quiz",
    answersDetail: "Answer Details"
  }
};
