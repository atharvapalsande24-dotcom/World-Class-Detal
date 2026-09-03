export interface BraceItem {
  id: number
  name: string
  slug: string
  iconName: string
  description: string
  pros: string[]
  cons: string[]
  costRange: string
  idealFor: string
}

export const braces: BraceItem[] = [
  {
    id: 1,
    name: "Metal Braces",
    slug: "metal-braces",
    iconName: "Smile",
    description:
      "Traditional stainless-steel brackets and wires remain the most reliable and cost-effective method for correcting a full range of orthodontic issues.",
    pros: [
      "Most affordable brace option",
      "Highly effective for complex misalignment and bite correction",
      "Durable — brackets rarely break under normal use",
      "Coloured bands let patients personalise their look",
    ],
    cons: [
      "Clearly visible on the teeth",
      "Can cause initial irritation to cheeks and lips",
      "Dietary restrictions on hard or sticky foods",
    ],
    costRange: "₹15,000 – ₹30,000",
    idealFor: "Patients of all ages seeking an effective, budget-friendly orthodontic solution.",
  },
  {
    id: 2,
    name: "Ceramic Braces",
    slug: "ceramic-braces",
    iconName: "Sparkles",
    description:
      "Ceramic brackets blend with the natural tooth colour, offering a far less noticeable alternative to metal braces while delivering comparable results.",
    pros: [
      "Tooth-coloured brackets are much less visible than metal",
      "Effective for the same range of cases as metal braces",
      "Smooth surface is generally comfortable against soft tissue",
      "A popular choice for image-conscious adults and teens",
    ],
    cons: [
      "More expensive than metal braces",
      "Brackets can stain if staining foods and drinks are consumed frequently",
    ],
    costRange: "₹25,000 – ₹50,000",
    idealFor: "Adults and older teens who want effective correction with a subtler appearance.",
  },
  {
    id: 3,
    name: "Self-Ligating Braces",
    slug: "self-ligating-braces",
    iconName: "Zap",
    description:
      "Self-ligating braces use a built-in sliding mechanism instead of elastic ties, reducing friction on the wire and often allowing for faster tooth movement.",
    pros: [
      "Lower friction can mean fewer adjustments and potentially shorter treatment",
      "Easier to keep clean than conventional brackets",
      "Less tightening force may improve comfort between appointments",
      "Available in both metal and clear ceramic versions",
    ],
    cons: [
      "Higher upfront cost compared to conventional braces",
      "Not universally faster — results depend on case complexity",
    ],
    costRange: "₹35,000 – ₹65,000",
    idealFor: "Patients seeking efficient treatment with fewer clinic visits and easier daily maintenance.",
  },
  {
    id: 4,
    name: "Lingual Braces",
    slug: "lingual-braces",
    iconName: "EyeOff",
    description:
      "Lingual braces are bonded to the inner surfaces of the teeth, making them completely invisible from the outside — the most discreet fixed-appliance option available.",
    pros: [
      "Totally invisible — no visible brackets or wires",
      "Fixed appliance that works continuously without patient compliance",
      "Suitable for a broad range of orthodontic corrections",
    ],
    cons: [
      "Higher cost than all other brace types",
      "Initial adjustment period may affect speech for a few weeks",
      "Cleaning requires more care due to placement on the inner tooth surface",
    ],
    costRange: "₹80,000 – ₹1,50,000",
    idealFor: "Professionals and adults for whom appearance during treatment is a top priority.",
  },
]
