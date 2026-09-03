export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: ProcessStep[];
  costRange: string;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "metal-braces",
    name: "Metal Braces",
    icon: "Smile",
    shortDescription:
      "Time-tested orthodontic treatment using high-grade stainless steel brackets for reliable, precise tooth alignment.",
    description:
      "Metal braces remain one of the most effective and widely used orthodontic treatments available today. At World Class Dental, we use high-grade stainless steel brackets and archwires that are precision-engineered for optimal force distribution, ensuring teeth move efficiently and comfortably throughout your treatment journey. Modern metal braces are significantly smaller and more streamlined than older designs, making them less noticeable and more comfortable against the soft tissues of your mouth. They are particularly effective for correcting complex orthodontic issues including severe crowding, large gaps, deep overbites, underbites, and crossbites. Metal braces offer unmatched durability and are not susceptible to staining or discolouration, making them an excellent long-term solution. Our orthodontists customise every treatment plan based on detailed digital X-rays and 3D models of your dentition. Coloured elastic ties can be added at each adjustment appointment, giving younger patients a fun way to personalise their smile journey. With regular monthly check-ups and adjustments, most patients complete treatment in 18 to 24 months, achieving a beautifully aligned smile that lasts a lifetime.",
    benefits: [
      "Most cost-effective orthodontic option",
      "Highly effective for complex and severe misalignments",
      "Durable — not prone to staining or warping",
      "Customisable with coloured elastic ties",
      "Requires no patient compliance for wear",
      "Suitable for all age groups from children to adults",
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Digital Imaging",
        description:
          "A comprehensive oral examination with digital X-rays and intraoral scans to assess your bite, spacing, and bone structure.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Your orthodontist designs a personalised treatment plan detailing expected tooth movements, estimated duration, and outcome simulations.",
      },
      {
        step: 3,
        title: "Bracket Bonding",
        description:
          "Brackets are bonded to each tooth with a special dental adhesive, and the archwire is threaded through and secured with elastic ties.",
      },
      {
        step: 4,
        title: "Regular Adjustments",
        description:
          "Monthly visits to tighten or change archwires, progressing tooth movement toward the final planned position.",
      },
      {
        step: 5,
        title: "Debonding & Retention",
        description:
          "Braces are removed, teeth are polished, and custom retainers are provided to maintain your new smile.",
      },
    ],
    costRange: "₹25,000 – ₹45,000",
  },
  {
    id: 2,
    slug: "ceramic-braces",
    name: "Ceramic Braces",
    icon: "Sparkles",
    shortDescription:
      "Tooth-coloured ceramic brackets offering the effectiveness of traditional braces with a far more discreet appearance.",
    description:
      "Ceramic braces combine the proven mechanical effectiveness of conventional orthodontics with an aesthetically pleasing, tooth-coloured appearance. At World Class Dental, we use premium monocrystalline or polycrystalline ceramic brackets that closely match the natural shade of your enamel, making them considerably less visible than metal brackets, especially in photographs and at conversational distances. This makes ceramic braces a popular choice among teenagers and adult professionals who require orthodontic treatment but are conscious about their appearance during the process. The brackets are made from a biocompatible ceramic material that is strong, smooth, and gentle on the lips and cheeks. While ceramic brackets are slightly more delicate than metal ones, our orthodontists guide patients on appropriate dietary adjustments to prevent breakage. Tooth-coloured or clear archwires further enhance the aesthetic result. Ceramic braces are effective for treating the same range of orthodontic issues as metal braces — including crowding, spacing, and malocclusions — making them a versatile and attractive option. Treatment duration is comparable to metal braces, typically ranging from 18 to 24 months depending on complexity.",
    benefits: [
      "Blends with natural tooth colour for a discreet look",
      "Equally effective as metal braces for most cases",
      "Smooth surface minimises irritation to soft tissues",
      "Suitable for teens and appearance-conscious adults",
      "Available with tooth-coloured archwires for full aesthetics",
      "Biocompatible materials safe for sensitive patients",
    ],
    process: [
      {
        step: 1,
        title: "Aesthetic Consultation",
        description:
          "Assessment of your orthodontic needs alongside discussion of cosmetic preferences to confirm ceramic braces are the right fit.",
      },
      {
        step: 2,
        title: "Custom Treatment Plan",
        description:
          "Digital mapping and outcome simulation to plan precise tooth movements and projected treatment timeline.",
      },
      {
        step: 3,
        title: "Ceramic Bracket Bonding",
        description:
          "Ceramic brackets are carefully bonded to each tooth using high-strength adhesive, and the archwire is fitted and secured.",
      },
      {
        step: 4,
        title: "Periodic Adjustments",
        description:
          "Regular monthly appointments to replace archwires and elastic ties, maintaining steady orthodontic progress.",
      },
      {
        step: 5,
        title: "Removal & Retainer Fitting",
        description:
          "Brackets are removed gently, teeth polished, and custom retainers fabricated to preserve your results.",
      },
    ],
    costRange: "₹35,000 – ₹60,000",
  },
  {
    id: 3,
    slug: "self-ligating-braces",
    name: "Self-Ligating Braces",
    icon: "Zap",
    shortDescription:
      "Advanced braces using a built-in clip mechanism for faster tooth movement, fewer appointments, and reduced friction.",
    description:
      "Self-ligating braces represent a significant advancement in orthodontic technology. Unlike traditional braces that rely on elastic ties to hold the archwire in place, self-ligating braces use a built-in sliding clip or door mechanism on each bracket. This design dramatically reduces friction between the wire and the bracket, allowing teeth to move more efficiently and comfortably. At World Class Dental, we offer both passive and active self-ligating systems, including well-established brands known for precision engineering. Passive self-ligating brackets apply gentler, lighter forces to the teeth, which many patients find more comfortable, particularly in the early stages of treatment. Reduced friction also means less force is required to achieve tooth movement, often translating to shorter overall treatment times — in many cases reducing treatment duration by several months compared to conventional braces. Patients typically require fewer adjustment appointments, which is a significant advantage for busy professionals and students. Self-ligating braces are highly effective for complex cases involving severe crowding, as their low-friction design allows for better arch development. Oral hygiene is also somewhat easier to maintain since there are no elastic ties to trap food particles.",
    benefits: [
      "Reduced friction for more comfortable tooth movement",
      "Fewer orthodontic appointments required",
      "Often shorter overall treatment duration",
      "Easier oral hygiene maintenance without elastic ties",
      "Effective for complex crowding and arch expansion",
      "Available in both metal and ceramic versions",
    ],
    process: [
      {
        step: 1,
        title: "Orthodontic Assessment",
        description:
          "Comprehensive examination including digital scans and X-rays to determine if self-ligating braces are optimal for your case.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Detailed planning using digital models to map out tooth movements and estimate treatment timelines.",
      },
      {
        step: 3,
        title: "Bracket Placement",
        description:
          "Self-ligating brackets are bonded precisely to each tooth; the archwire is inserted and locked into the built-in clip.",
      },
      {
        step: 4,
        title: "Scheduled Check-Ups",
        description:
          "Appointments every 6–10 weeks (less frequent than traditional braces) to monitor progress and update the archwire.",
      },
      {
        step: 5,
        title: "Debonding & Retention",
        description:
          "Braces removed at treatment completion, teeth polished, and retainers delivered to lock in your results.",
      },
    ],
    costRange: "₹40,000 – ₹70,000",
  },
  {
    id: 4,
    slug: "lingual-braces",
    name: "Lingual Braces",
    icon: "EyeOff",
    shortDescription:
      "Completely hidden braces fitted to the inner (tongue-side) surface of teeth — invisible to others at all times.",
    description:
      "Lingual braces are the ultimate in discreet orthodontic treatment, as the brackets and wires are bonded to the inner (lingual) surface of the teeth — completely invisible when you smile, speak, or laugh. At World Class Dental, lingual braces are custom-fabricated using advanced CAD/CAM technology, ensuring each bracket is individually designed to fit the precise contours of each tooth's inner surface. This level of customisation is what sets lingual braces apart from standard off-the-shelf systems and directly contributes to their effectiveness and comfort. They are an ideal choice for professionals in public-facing roles, performing artists, brides-to-be, and anyone who wants orthodontic treatment with zero compromise on aesthetics. Lingual braces can treat the full spectrum of orthodontic problems — from mild spacing to complex bite corrections — matching the versatility of traditional braces. The adjustment period may take a couple of weeks as the tongue adapts to the new hardware, and speech may be temporarily affected. Our experienced orthodontic team provides detailed guidance on adaptation, oral hygiene, and dietary adjustments throughout the treatment. Treatment duration is comparable to labial braces, typically between 18 and 30 months depending on case complexity.",
    benefits: [
      "Completely invisible — brackets are on the inner tooth surface",
      "Treats a full range of orthodontic issues",
      "Custom-fabricated brackets for precise fit and comfort",
      "No impact on visible aesthetics at any stage of treatment",
      "Ideal for image-conscious adults and professionals",
      "Advanced CAD/CAM technology ensures accuracy",
    ],
    process: [
      {
        step: 1,
        title: "Detailed Consultation & Scanning",
        description:
          "Full orthodontic assessment with intraoral scans and X-rays; a digital treatment plan is designed for your specific anatomy.",
      },
      {
        step: 2,
        title: "Custom Bracket Fabrication",
        description:
          "Your unique lingual brackets are manufactured using CAD/CAM technology at a specialist laboratory over 4–6 weeks.",
      },
      {
        step: 3,
        title: "Bracket Bonding",
        description:
          "Customised brackets are bonded to the inner surfaces of your teeth using a precision transfer tray system.",
      },
      {
        step: 4,
        title: "Regular Adjustments",
        description:
          "Scheduled appointments every 4–8 weeks where archwires are updated to progress tooth movement.",
      },
      {
        step: 5,
        title: "Debonding & Retention",
        description:
          "Lingual brackets are removed, inner surfaces polished, and fixed or removable retainers fitted to maintain results.",
      },
    ],
    costRange: "₹80,000 – ₹1,50,000",
  },
  {
    id: 5,
    slug: "invisalign-clear-aligners",
    name: "Invisalign / Clear Aligners",
    icon: "Shield",
    shortDescription:
      "Custom-made removable clear aligners that straighten teeth virtually invisibly — no brackets, no wires.",
    description:
      "Invisalign and clear aligner therapy represent the most technologically advanced and aesthetically appealing approach to orthodontic treatment available today. At World Class Dental, we use the globally trusted Invisalign system alongside premium clear aligner alternatives to deliver highly personalised, virtually invisible teeth-straightening solutions. Each set of aligners is precision-fabricated from medical-grade, BPA-free thermoplastic material using advanced 3D printing and digital planning technology. Before treatment begins, you can preview your projected final smile through a digital simulation — a feature patients find both motivating and reassuring. Aligners are worn for 20–22 hours per day and changed every one to two weeks, each set incrementally shifting teeth closer to their target positions. Being fully removable, they allow you to eat, drink, brush, and floss without any restrictions, making them exceptionally convenient for maintaining oral hygiene and enjoying your favourite foods. Clear aligners are effective for treating mild to moderate crowding, spacing, overbites, underbites, and crossbites. More complex cases may require attachments — small tooth-coloured resin buttons — to guide specific movements. Treatment duration varies from as little as six months for minor corrections to 18–24 months for comprehensive alignment cases.",
    benefits: [
      "Nearly invisible — ideal for professionals and adults",
      "Fully removable for eating, drinking, and oral hygiene",
      "No dietary restrictions during treatment",
      "Digital smile preview before treatment begins",
      "Smooth plastic — no brackets or wires to irritate tissue",
      "Regular progress tracking with 3D planning tools",
    ],
    process: [
      {
        step: 1,
        title: "iTero Digital Scan",
        description:
          "A precise 3D intraoral scan replaces traditional impressions, capturing every detail of your teeth and bite.",
      },
      {
        step: 2,
        title: "ClinCheck Simulation",
        description:
          "Your personalised digital treatment plan is created, showing projected tooth movement and your anticipated final smile.",
      },
      {
        step: 3,
        title: "Aligner Fabrication & Fitting",
        description:
          "Your full series of custom aligners is manufactured; the first set is fitted and wear instructions are provided.",
      },
      {
        step: 4,
        title: "Progress Check-Ups",
        description:
          "Visits every 6–8 weeks to monitor progress, deliver the next aligner sets, and make any refinements.",
      },
      {
        step: 5,
        title: "Refinements & Retention",
        description:
          "Minor refinements may be done for final detailing; Vivera retainers are provided to maintain your new smile.",
      },
    ],
    costRange: "₹60,000 – ₹1,50,000",
  },
  {
    id: 6,
    slug: "retainers",
    name: "Retainers",
    icon: "RotateCcw",
    shortDescription:
      "Custom-fitted orthodontic retainers to preserve your perfectly aligned smile after braces or aligner treatment.",
    description:
      "Retainers are an essential component of successful orthodontic treatment, serving as the final guardian of your newly aligned smile. After braces or clear aligners are removed, teeth have a natural tendency to drift back toward their original positions — a phenomenon known as orthodontic relapse. Wearing retainers as prescribed prevents this relapse and ensures your investment in orthodontic treatment is protected for years to come. At World Class Dental, we offer three types of retainers tailored to patient preferences and clinical requirements: removable Hawley retainers, which consist of a wire and acrylic plate; removable clear (Essix) retainers, which are virtually invisible and comfortable; and fixed (bonded) retainers, which are thin wires bonded to the inner surface of the front teeth for permanent passive retention. Each type has distinct advantages — fixed retainers require no compliance but need professional maintenance, while removable retainers are easy to clean. Our orthodontists conduct thorough follow-up consultations to assess which retainer type best suits your anatomy and lifestyle. Proper retainer care instructions, including cleaning routines and replacement schedules, are provided to every patient to maximise long-term success.",
    benefits: [
      "Prevents orthodontic relapse after treatment",
      "Available in removable and fixed options",
      "Custom-fitted for comfort and precise retention",
      "Clear retainers are virtually invisible during wear",
      "Essential for protecting your orthodontic investment",
      "Long-lasting with proper care and maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Post-Treatment Assessment",
        description:
          "Following removal of braces or completion of aligner therapy, your orthodontist assesses the final tooth positions.",
      },
      {
        step: 2,
        title: "Retainer Type Selection",
        description:
          "Your orthodontist recommends the most appropriate retainer type based on your clinical needs and lifestyle.",
      },
      {
        step: 3,
        title: "Impression or Scan",
        description:
          "A digital scan or physical impression is taken of your current tooth positions to fabricate your custom retainer.",
      },
      {
        step: 4,
        title: "Retainer Fitting",
        description:
          "Your retainer is fitted, adjusted for comfort, and detailed wear and care instructions are provided.",
      },
    ],
    costRange: "₹3,000 – ₹12,000",
  },
  {
    id: 7,
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    icon: "Sun",
    shortDescription:
      "Professional in-clinic and take-home whitening treatments for a visibly brighter, more confident smile.",
    description:
      "A bright, radiant smile can significantly enhance your appearance and boost your confidence in both social and professional settings. At World Class Dental, we offer safe, clinically proven teeth whitening treatments that deliver results far superior to over-the-counter products. Our in-clinic whitening procedure uses professional-grade bleaching agents — typically containing 25–40% hydrogen peroxide — activated by an advanced LED or laser light to accelerate the whitening process. Most patients achieve teeth that are six to ten shades lighter in a single 60–90 minute session. For patients who prefer to whiten gradually in the comfort of their own home, we provide customised take-home whitening kits with precisely fitting trays and professional-strength bleaching gel. These kits are designed for use over 10–14 nights and produce excellent, controlled results. We also offer combination treatments where an initial in-clinic session is followed by a take-home kit to maximise and prolong the whitening effect. Before any whitening treatment, our dentists conduct a comprehensive assessment to identify any pre-existing restorations, check enamel health, and manage any sensitivity. All treatments are tailored to your natural tooth shade and desired outcome, ensuring natural-looking, even results.",
    benefits: [
      "Professional results significantly beyond OTC products",
      "In-clinic treatment achieves up to 10 shades lighter",
      "Custom take-home kits for gradual, controlled whitening",
      "Safe procedure with minimal side effects when clinician-supervised",
      "Boosts confidence and enhances overall smile aesthetics",
      "Quick treatment — visible results in a single session",
    ],
    process: [
      {
        step: 1,
        title: "Shade Assessment",
        description:
          "Baseline tooth shade is recorded using a clinical shade guide; oral health is assessed to rule out contraindications.",
      },
      {
        step: 2,
        title: "Pre-Treatment Cleaning",
        description:
          "Teeth are polished to remove surface stains and plaque, ensuring the whitening agent contacts clean enamel evenly.",
      },
      {
        step: 3,
        title: "Gum Protection & Gel Application",
        description:
          "Soft tissue is protected with a gingival barrier; professional-grade whitening gel is applied to all visible teeth.",
      },
      {
        step: 4,
        title: "Light Activation",
        description:
          "An LED or laser light activates the whitening gel, enhancing its penetration for maximum whitening in minimum time.",
      },
      {
        step: 5,
        title: "Result Review & Maintenance Kit",
        description:
          "Final shade is recorded; a take-home maintenance kit is provided to prolong and enhance your results.",
      },
    ],
    costRange: "₹8,000 – ₹20,000",
  },
  {
    id: 8,
    slug: "dental-implants",
    name: "Dental Implants",
    icon: "Anchor",
    shortDescription:
      "Permanent titanium tooth roots topped with lifelike crowns — the gold standard for replacing missing teeth.",
    description:
      "Dental implants are considered the gold standard in tooth replacement, offering a permanent, functional, and aesthetically superior solution for missing teeth. At World Class Dental, we use premium titanium implant fixtures from globally recognised manufacturers, ensuring biocompatibility and long-term osseointegration. The implant is a small titanium screw that is surgically placed into the jawbone, where it gradually fuses with the surrounding bone over a healing period of three to six months — a natural biological process called osseointegration. Once fully integrated, the implant acts as an artificial tooth root, providing an exceptionally stable foundation for a custom-fabricated ceramic crown. The result is a replacement tooth that looks, feels, and functions exactly like a natural tooth. Unlike removable dentures or fixed bridges, implants do not require adjacent teeth to be ground down, and they actively stimulate the jawbone, preventing the bone resorption that typically follows tooth loss. At World Class Dental, our implant workflow incorporates 3D CBCT imaging and guided surgical stent technology to ensure precise, safe implant placement. We offer single-tooth implants, implant-supported bridges for multiple missing teeth, and full-arch solutions including All-on-4 and All-on-6 protocols.",
    benefits: [
      "Permanent solution that can last a lifetime with proper care",
      "Stimulates jawbone to prevent bone loss",
      "Looks, feels, and functions like a natural tooth",
      "No need to modify adjacent healthy teeth",
      "Improves speech and chewing function fully",
      "Supports facial structure and prevents premature ageing",
    ],
    process: [
      {
        step: 1,
        title: "Implant Consultation & CBCT Scan",
        description:
          "3D cone-beam CT imaging assesses bone volume, density, and anatomy to plan precise implant positioning.",
      },
      {
        step: 2,
        title: "Implant Surgical Placement",
        description:
          "Under local anaesthesia, a titanium implant fixture is placed into the jawbone through a minimally invasive surgical procedure.",
      },
      {
        step: 3,
        title: "Osseointegration Period",
        description:
          "A healing period of 3–6 months allows the implant to fuse with the jawbone, forming a stable biological foundation.",
      },
      {
        step: 4,
        title: "Abutment Placement",
        description:
          "A small connector post (abutment) is attached to the implant to support and connect the final crown.",
      },
      {
        step: 5,
        title: "Crown Fitting",
        description:
          "A custom ceramic crown is fabricated to match your natural teeth and permanently cemented onto the abutment.",
      },
    ],
    costRange: "₹25,000 – ₹70,000 per implant",
  },
  {
    id: 9,
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    icon: "Activity",
    shortDescription:
      "Pain-relieving endodontic procedure to save infected or damaged teeth by removing the inflamed pulp tissue.",
    description:
      "Root canal treatment, also known as endodontic therapy, is a highly effective dental procedure designed to save a severely infected, inflamed, or damaged tooth that would otherwise need to be extracted. The pulp — the soft tissue inside the tooth containing nerves and blood vessels — can become infected due to deep decay, cracks, repeated dental procedures, or trauma. Left untreated, the infection can spread to surrounding bone, causing abscesses and significant systemic health complications. At World Class Dental, root canal treatment is performed using modern rotary endodontic equipment and advanced irrigation protocols that maximise disinfection while preserving healthy tooth structure. Contrary to the widespread misconception that root canal treatment is extremely painful, modern anaesthetic techniques ensure that the procedure is no more uncomfortable than a routine dental filling. In fact, most patients find that their severe pre-treatment toothache is completely resolved after treatment. Our endodontically trained dentists use apex locators and digital radiography to precisely measure root canal length and confirm complete cleaning and filling. Following treatment, the tooth is typically restored with a post-core build-up and protected with a full-coverage ceramic crown to restore full strength and function.",
    benefits: [
      "Saves your natural tooth — avoids extraction",
      "Immediately relieves severe toothache and infection",
      "Prevents spread of infection to adjacent teeth and bone",
      "Modern technique is comfortable — comparable to a filling",
      "Restored tooth functions exactly like a natural tooth",
      "Single or multi-visit treatment depending on severity",
    ],
    process: [
      {
        step: 1,
        title: "Diagnosis & X-Ray",
        description:
          "Digital X-rays and clinical tests confirm pulp infection or necrosis; the extent of infection is assessed.",
      },
      {
        step: 2,
        title: "Local Anaesthesia",
        description:
          "The tooth and surrounding area are thoroughly numbed; a rubber dam is placed to isolate the tooth.",
      },
      {
        step: 3,
        title: "Pulp Removal & Canal Shaping",
        description:
          "The infected pulp is removed using rotary endodontic files; canals are shaped and sterilised with irrigating solutions.",
      },
      {
        step: 4,
        title: "Canal Obturation",
        description:
          "Cleaned canals are filled with biocompatible gutta-percha and sealed with root canal sealer cement.",
      },
      {
        step: 5,
        title: "Crown Restoration",
        description:
          "A ceramic crown is placed over the treated tooth to restore full structural integrity and prevent fracture.",
      },
    ],
    costRange: "₹4,000 – ₹12,000 per tooth",
  },
  {
    id: 10,
    slug: "dental-crowns-bridges",
    name: "Dental Crowns & Bridges",
    icon: "Crown",
    shortDescription:
      "Custom ceramic crowns and bridges that restore damaged or missing teeth to full strength and natural appearance.",
    description:
      "Dental crowns and bridges are versatile restorative solutions that address a wide range of dental problems, from damaged or heavily decayed teeth to missing teeth and cosmetic concerns. A dental crown is a tooth-shaped cap that fits completely over a damaged tooth, restoring its shape, size, strength, and appearance. At World Class Dental, we fabricate crowns using premium materials including all-ceramic (zirconia or E-max), porcelain-fused-to-metal, and full gold options, each selected based on the tooth's location, bite forces, and the patient's aesthetic preferences. Zirconia crowns are particularly popular for their combination of exceptional strength and lifelike translucency. A dental bridge uses two adjacent teeth (abutments) as anchors to support one or more artificial teeth (pontics) in the space left by missing teeth. Fixed bridges restore chewing function, prevent adjacent teeth from drifting, and maintain facial contour. Our digital workflow uses intraoral scanning and CAD/CAM milling to ensure crowns and bridges achieve perfect fit, comfortable occlusion, and natural aesthetics. Shade matching is performed under standardised lighting to ensure seamless integration with your natural dentition. Most restorations are delivered within 7–14 days of the initial preparation appointment.",
    benefits: [
      "Restores full chewing function to damaged or missing teeth",
      "Lifelike ceramics match natural tooth colour precisely",
      "Zirconia options provide exceptional strength and aesthetics",
      "Protects root canal treated teeth from fracture",
      "Bridges prevent tooth drift after extraction",
      "Digital CAD/CAM fabrication ensures precise fit",
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Shade Selection",
        description:
          "Clinical examination determines the best restoration type; shade matching ensures a natural colour match.",
      },
      {
        step: 2,
        title: "Tooth Preparation",
        description:
          "The tooth is shaped under local anaesthesia to create space for the crown; a digital scan is taken for the lab.",
      },
      {
        step: 3,
        title: "Temporary Crown Fitting",
        description:
          "A provisional crown protects the prepared tooth while the permanent restoration is being fabricated.",
      },
      {
        step: 4,
        title: "Permanent Crown/Bridge Delivery",
        description:
          "The final restoration is tried in for fit and bite, adjusted as needed, and permanently cemented.",
      },
    ],
    costRange: "₹5,000 – ₹20,000 per unit",
  },
  {
    id: 11,
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    icon: "Scissors",
    shortDescription:
      "Safe, comfortable removal of damaged, decayed, or impacted teeth using gentle surgical or simple techniques.",
    description:
      "While preserving natural teeth is always the primary goal at World Class Dental, there are situations where tooth extraction is the most appropriate and beneficial treatment. Severely decayed teeth that cannot be restored, teeth causing repeated infections, fractured teeth beyond repair, impacted wisdom teeth, and teeth requiring removal for orthodontic treatment are the most common indications. Our dentists perform both simple extractions and surgical extractions under effective local anaesthesia, ensuring the procedure is as comfortable and anxiety-free as possible. For patients with dental anxiety, sedation options are available. Simple extractions involve loosening and removing a fully erupted tooth, while surgical extractions are required for impacted, broken, or unerupted teeth and involve making a small incision in the gum. Wisdom tooth (third molar) extractions are one of the most common surgical procedures we perform, and our team is experienced in managing all levels of impaction — horizontal, vertical, mesioangular, and distoangular. Following extraction, comprehensive aftercare instructions are provided, including guidance on diet, pain management, and socket healing. We also discuss tooth replacement options — including implants and bridges — to restore function and aesthetics.",
    benefits: [
      "Eliminates source of infection and tooth pain",
      "Gentle technique minimises discomfort and recovery time",
      "Experienced team handles complex surgical extractions",
      "Sedation available for anxious patients",
      "Comprehensive post-extraction care guidance provided",
      "Immediate tooth replacement planning available",
    ],
    process: [
      {
        step: 1,
        title: "X-Ray & Clinical Assessment",
        description:
          "Digital X-rays assess root anatomy, bone support, and proximity to nerves or sinus before extraction planning.",
      },
      {
        step: 2,
        title: "Local Anaesthesia",
        description:
          "The area around the tooth is thoroughly numbed; sedation is offered for anxious patients.",
      },
      {
        step: 3,
        title: "Extraction Procedure",
        description:
          "Simple or surgical extraction is performed using gentle instrumentation; the socket is cleaned thoroughly.",
      },
      {
        step: 4,
        title: "Aftercare & Monitoring",
        description:
          "Detailed aftercare instructions are provided; a follow-up appointment confirms proper healing.",
      },
    ],
    costRange: "₹800 – ₹6,000 per tooth",
  },
  {
    id: 12,
    slug: "dental-fillings",
    name: "Dental Fillings",
    icon: "PenTool",
    shortDescription:
      "Tooth-coloured composite fillings that restore decayed or damaged teeth seamlessly and durably.",
    description:
      "Dental fillings are one of the most common and essential restorative procedures in dentistry, used to repair teeth affected by decay, minor fractures, or wear. At World Class Dental, we exclusively use high-quality tooth-coloured composite resin fillings that bond directly to the tooth structure, providing excellent durability while perfectly matching the natural colour of your enamel. Composite resin has largely replaced old amalgam (silver) fillings due to its superior aesthetics, conservative preparation requirements, and lack of mercury content. Our dentists use shade guides to select the most accurate composite shade for each individual tooth, ensuring restorations are virtually indistinguishable from natural tooth structure. The composite resin is applied in layers and cured with a high-intensity LED light, building up the filling incrementally for optimal strength and aesthetics. Tooth preparation for composite fillings is highly conservative — only the decayed or damaged tissue is removed, preserving as much healthy tooth structure as possible. Beyond cavities, composite is also used for repairing chipped teeth, closing small gaps, reshaping irregularly formed teeth, and covering exposed root surfaces. After filling placement, the bite is carefully adjusted and the surface is polished to a high shine for comfort and longevity.",
    benefits: [
      "Natural tooth-coloured — virtually invisible restoration",
      "Bonds directly to tooth for conservative preparation",
      "Mercury-free composite resin — safe and biocompatible",
      "Versatile — repairs cavities, chips, and minor fractures",
      "Same-visit procedure — completed in one appointment",
      "Durable finish with proper care and maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Caries Detection",
        description:
          "Clinical examination and digital X-rays identify the extent of decay and whether a filling is the appropriate treatment.",
      },
      {
        step: 2,
        title: "Shade Matching",
        description:
          "The appropriate composite shade is selected under standardised lighting to perfectly match your natural tooth colour.",
      },
      {
        step: 3,
        title: "Decay Removal",
        description:
          "Under local anaesthesia if required, all decayed and compromised tooth structure is removed using a dental drill or laser.",
      },
      {
        step: 4,
        title: "Composite Application & Curing",
        description:
          "Composite resin is applied in incremental layers, with each layer cured using an LED curing light.",
      },
      {
        step: 5,
        title: "Bite Check & Polishing",
        description:
          "The restoration is shaped, bite is checked and adjusted, and the surface is polished for comfort and aesthetics.",
      },
    ],
    costRange: "₹1,200 – ₹4,000 per tooth",
  },
  {
    id: 13,
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    icon: "Gem",
    shortDescription:
      "Professional dental cleaning that removes tartar, stains, and plaque for healthier gums and a cleaner smile.",
    description:
      "Scaling and polishing is a fundamental preventive dental procedure that forms the cornerstone of maintaining optimal oral health. Over time, even the most diligent daily brushing and flossing cannot remove all plaque and tartar deposits, especially in hard-to-reach areas between teeth and beneath the gumline. Plaque that is not removed hardens into calculus (tartar), which harbours harmful bacteria responsible for gum disease, persistent bad breath, and tooth decay. At World Class Dental, professional dental cleaning is performed using state-of-the-art ultrasonic scalers and hand instruments to safely and thoroughly remove all calculus deposits from tooth surfaces and along the gumline. Ultrasonic scaling uses high-frequency vibrations combined with a water spray to disrupt and dislodge calculus without damaging the tooth enamel. Following scaling, teeth are polished using a rotating rubber cup and fine prophylaxis paste to remove surface stains caused by tea, coffee, red wine, tobacco, and other dietary sources. The polishing step also smooths the tooth surface, making it harder for new plaque to adhere. We recommend professional cleaning every six months for most patients; those with a history of gum disease or heavy tartar build-up may benefit from quarterly visits. Each session includes a periodontal health assessment and personalised oral hygiene coaching.",
    benefits: [
      "Removes tartar that cannot be eliminated by brushing",
      "Prevents and treats early-stage gum disease",
      "Eliminates persistent bad breath caused by bacterial build-up",
      "Removes surface stains for a noticeably brighter smile",
      "Includes periodontal health screening at every visit",
      "Personalised oral hygiene advice for better home care",
    ],
    process: [
      {
        step: 1,
        title: "Periodontal Assessment",
        description:
          "Gum health is assessed by measuring pocket depths and checking for signs of inflammation, recession, or bone loss.",
      },
      {
        step: 2,
        title: "Ultrasonic Scaling",
        description:
          "An ultrasonic scaler removes supragingival and subgingival calculus deposits with high-frequency vibrations and water cooling.",
      },
      {
        step: 3,
        title: "Hand Scaling",
        description:
          "Fine hand instruments remove any residual calculus in precise locations and smooth the root surfaces.",
      },
      {
        step: 4,
        title: "Polishing",
        description:
          "A prophylaxis paste is used with a rotating cup to remove surface stains and leave tooth surfaces smooth and clean.",
      },
      {
        step: 5,
        title: "Fluoride Treatment & Advice",
        description:
          "Fluoride gel or varnish is applied for sensitivity relief; personalised brushing and flossing guidance is given.",
      },
    ],
    costRange: "₹1,500 – ₹4,000",
  },
  {
    id: 14,
    slug: "paediatric-dentistry",
    name: "Paediatric Dentistry",
    icon: "Heart",
    shortDescription:
      "Child-friendly dental care in a warm, welcoming environment — from first tooth to teenage years.",
    description:
      "Paediatric dentistry at World Class Dental is designed to provide comprehensive oral healthcare for children from infancy through adolescence in a nurturing, anxiety-free environment. We understand that a child's first dental experiences profoundly shape their attitude toward dental care for the rest of their life. Our child-friendly clinic is equipped with bright, welcoming décor, age-appropriate distractions, and a team of dental professionals specially trained in child behaviour management techniques. We use the Tell-Show-Do method and positive reinforcement to help children understand and feel comfortable with each procedure, building lifelong trust. Our paediatric services cover the full spectrum of children's dental needs: first dental visits and preventive care, fluoride treatments and fissure sealants to prevent cavities, fillings for milk and permanent teeth, pulpotomy (baby root canals), stainless steel crowns for severely decayed milk teeth, space maintainers following early tooth loss, and early orthodontic assessments. We also provide comprehensive dietary counselling and oral hygiene education for both children and parents. Early orthodontic intervention (interceptive orthodontics) can correct developing bite problems before they become complex, often reducing the need for extensive treatment later. We recommend a child's first dental visit by age one, or within six months of the first tooth erupting.",
    benefits: [
      "Builds positive dental habits and attitudes from early childhood",
      "Specialists trained in child behaviour management",
      "Full range of preventive and restorative paediatric services",
      "Fissure sealants and fluoride to actively prevent cavities",
      "Early orthodontic screening identifies problems before they worsen",
      "Fun, welcoming environment reduces dental anxiety",
    ],
    process: [
      {
        step: 1,
        title: "First Visit & Welcome",
        description:
          "Child-friendly introduction to the dental environment; basic examination and oral health assessment are conducted.",
      },
      {
        step: 2,
        title: "Preventive Treatments",
        description:
          "Fluoride application and fissure sealants are applied to protect developing teeth from decay.",
      },
      {
        step: 3,
        title: "Treatment as Required",
        description:
          "Fillings, pulpotomies, or extractions are performed gently using appropriate anaesthesia and behaviour management.",
      },
      {
        step: 4,
        title: "Home Care Education",
        description:
          "Age-appropriate brushing and dietary guidance is given to both child and parent for excellent home oral care.",
      },
    ],
    costRange: "₹500 – ₹8,000 (per procedure)",
  },
  {
    id: 15,
    slug: "smile-makeover",
    name: "Smile Makeover",
    icon: "Star",
    shortDescription:
      "A bespoke combination of cosmetic and restorative treatments to transform your smile from ordinary to extraordinary.",
    description:
      "A smile makeover is a personalised, comprehensive treatment plan that combines multiple cosmetic and restorative dental procedures to dramatically improve the aesthetics of your smile. At World Class Dental, every smile makeover begins with an in-depth consultation where your smile goals, facial features, skin tone, and dental health are carefully evaluated. Our cosmetic dentists use digital smile design (DSD) technology to simulate your proposed new smile before any treatment begins, allowing you to preview and co-design your outcome with precision and confidence. A typical smile makeover may incorporate teeth whitening, composite or porcelain veneers, dental crowns, gum contouring, orthodontic alignment, and dental implants — chosen and combined specifically to address your unique concerns. Porcelain veneers, a cornerstone of many smile makeovers, are ultra-thin ceramic shells bonded to the front surface of teeth to correct colour, shape, size, length, and surface texture simultaneously. Gum contouring uses a precise dental laser to reshape an uneven or excessive gum line, creating a more balanced and proportionate smile frame. The entire process is carefully sequenced to ensure each procedure complements the next, resulting in a cohesive, harmonious smile that enhances your overall facial aesthetics. Most full smile makeovers are completed within two to six months, depending on the complexity and procedures involved.",
    benefits: [
      "Customised plan addressing all your specific smile concerns",
      "Digital smile design allows preview before treatment",
      "Combines best-in-class cosmetic and restorative techniques",
      "Porcelain veneers correct colour, shape, and size together",
      "Dramatically enhances confidence and overall aesthetics",
      "Sequenced treatment for optimal, cohesive results",
    ],
    process: [
      {
        step: 1,
        title: "Smile Analysis & Digital Design",
        description:
          "Facial and dental photographs are taken; digital smile design software creates a visualisation of your proposed new smile.",
      },
      {
        step: 2,
        title: "Comprehensive Treatment Planning",
        description:
          "A detailed sequence of procedures is designed, with full timeline, cost breakdown, and expected outcomes presented.",
      },
      {
        step: 3,
        title: "Preparatory Treatments",
        description:
          "Foundational procedures such as whitening, scaling, or orthodontics are completed first as required.",
      },
      {
        step: 4,
        title: "Cosmetic Restorations",
        description:
          "Veneers, crowns, composite bonding, or other aesthetic restorations are placed according to the design plan.",
      },
      {
        step: 5,
        title: "Review & Maintenance Plan",
        description:
          "Final smile review is conducted; a long-term maintenance plan is provided to preserve your transformed smile.",
      },
    ],
    costRange: "₹30,000 – ₹2,50,000+",
  },
  {
    id: 16,
    slug: "jaw-tmj-treatment",
    name: "Jaw / TMJ Treatment",
    icon: "Brain",
    shortDescription:
      "Specialist diagnosis and management of jaw pain, clicking, and TMJ disorders for long-term relief and function.",
    description:
      "Temporomandibular joint (TMJ) disorders are a group of painful conditions affecting the jaw joint and the muscles controlling jaw movement. The TMJ connects the lower jaw (mandible) to the skull, enabling essential functions such as speaking, chewing, and yawning. When this complex joint system becomes dysfunctional, it can cause a wide range of debilitating symptoms including jaw pain or tenderness, clicking or popping sounds, difficulty opening or closing the mouth fully, headaches, ear pain, neck stiffness, and facial muscle soreness. At World Class Dental, our approach to TMJ disorders is thorough, evidence-based, and multidisciplinary. Diagnosis begins with a detailed case history, comprehensive clinical examination of jaw range of motion, muscle palpation, and joint auscultation, supplemented by digital X-rays and 3D CBCT imaging when indicated. Treatment is staged from conservative to more advanced interventions. First-line management typically includes occlusal splint therapy — a custom-fabricated nightguard that repositions the jaw, reduces clenching forces, and allows inflamed joint structures to rest and heal. Physical therapy exercises, dietary modifications, and stress management strategies are incorporated into the treatment plan. In cases where structural joint damage or severe bruxism (teeth grinding) is contributing, restorative equilibration or prosthetic rehabilitation may be required.",
    benefits: [
      "Specialist diagnosis using advanced imaging and clinical assessment",
      "Custom occlusal splints for immediate symptom relief",
      "Treats headaches, jaw pain, and clicking comprehensively",
      "Evidence-based, conservative-first approach",
      "Addresses underlying causes — not just symptoms",
      "Improves chewing function, speech, and quality of life",
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive TMJ Assessment",
        description:
          "Detailed history, clinical joint examination, muscle palpation, and digital X-rays/CBCT to diagnose the disorder accurately.",
      },
      {
        step: 2,
        title: "Occlusal Splint Fabrication",
        description:
          "A custom nightguard/splint is designed based on your jaw anatomy to decompress the joint and reduce muscle tension.",
      },
      {
        step: 3,
        title: "Physiotherapy & Exercises",
        description:
          "Guided jaw exercises and physiotherapy techniques are prescribed to restore range of motion and reduce inflammation.",
      },
      {
        step: 4,
        title: "Review & Advanced Therapy",
        description:
          "Progress is evaluated; advanced options including BOTOX, dental equilibration, or specialist referral are considered if needed.",
      },
    ],
    costRange: "₹3,000 – ₹25,000",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export default services;
