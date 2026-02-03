// js/cards.js
const CARDS = [
{
  id: "the_fool",
  name: "The Fool",
  img: "images/cards/fool.png",
  meaning: "New beginnings, innocence, spontaneity, and taking a leap of faith into the unknown."
},
{
  id: "the_magician",
  name: "The Magician",
  img: "images/cards/magician.png",
  meaning: "Manifestation, skill, confidence, and using available resources to create change."
},
{
  id: "the_high_priestess",
  name: "The High Priestess",
  img: "images/cards/high_priestess.png",
  meaning: "Intuition, inner wisdom, mystery, and listening to what lies beneath the surface."
},
{
  id: "the_empress",
  name: "The Empress",
  img: "images/cards/empress.png",
  meaning: "Abundance, creativity, nurturing energy, fertility, and emotional fulfillment."
},
{
  id: "the_emperor",
  name: "The Emperor",
  img: "images/cards/emperor.png",
  meaning: "Structure, authority, stability, leadership, and taking control of situations."
},
{
  id: "the_hierophant",
  name: "The Hierophant",
  img: "images/cards/hierophant.png",
  meaning: "Tradition, spiritual guidance, shared beliefs, and learning from established systems."
},
{
  id: "the_lovers",
  name: "The Lovers",
  img: "images/cards/lovers.png",
  meaning: "Relationships, alignment, meaningful choices, and values-based decisions."
},
{
  id: "the_chariot",
  name: "The Chariot",
  img: "images/cards/chariot.png",
  meaning: "Determination, willpower, discipline, and moving forward despite obstacles."
},
{
  id: "strength",
  name: "Strength",
  img: "images/cards/strength.png",
  meaning: "Inner strength, compassion, patience, and gentle control over challenges."
},
{
  id: "the_hermit",
  name: "The Hermit",
  img: "images/cards/hermit.png",
  meaning: "Introspection, solitude, inner guidance, and seeking deeper understanding."
},
{
  id: "justice",
  name: "Justice",
  img: "images/cards/justice.png",
  meaning: "Truth, fairness, accountability, and making decisions with integrity."
},
{
  id: "the_hanged_man",
  name: "The Hanged Man",
  img: "images/cards/hanged_man.png",
  meaning: "Pause, surrender, new perspective, and seeing things differently."
},
{
  id: "death",
  name: "Death",
  img: "images/cards/death.png",
  meaning: "Endings, transformation, release, and profound change leading to renewal."
},
{
  id: "temperance",
  name: "Temperance",
  img: "images/cards/temperance.png",
  meaning: "Balance, moderation, patience, and finding harmony between extremes."
},
{
  id: "the_devil",
  name: "The Devil",
  img: "images/cards/devil.png",
  meaning: "Attachment, temptation, unhealthy patterns, and confronting shadow aspects."
},

/* Pick up here*/
{
  id: "the_tower",
  name: "The Tower",
  img: "images/cards/tower.png",
  meaning: "Sudden upheaval, revelation, disruption, and breaking down false foundations."
},
{
  id: "the_star",
  name: "The Star",
  img: "images/cards/star.png",
  meaning: "Hope, healing, renewal, and faith in the future."
},
{
  id: "the_moon",
  name: "The Moon",
  img: "images/cards/moon.png",
  meaning: "Illusion, uncertainty, subconscious influences, and navigating emotional confusion."
},
{
  id: "the_sun",
  name: "The Sun",
  img: "images/cards/sun.png",
  meaning: "Joy, clarity, success, vitality, and positive outcomes."
},
{
  id: "judgement",
  name: "Judgement",
  img: "images/cards/judgement.png",
  meaning: "Awakening, self-reflection, accountability, and answering a higher calling."
},
{
  id: "the_world",
  name: "The World",
  img: "images/cards/world.png",
  meaning: "Completion, fulfillment, wholeness, and successfully closing a major cycle."
},
{
  id: "ace_of_wands",
  name: "Ace of Wands",
  img: "images/cards/ace_wands.png",
  meaning: "Inspiration, new opportunities, creative spark, and the birth of an idea."
},
{
  id: "two_of_wands",
  name: "Two of Wands",
  img: "images/cards/two_wands.png",
  meaning: "Planning, future vision, decision-making, and considering new paths."
},
{
  id: "three_of_wands",
  name: "Three of Wands",
  img: "images/cards/three_wands.png",
  meaning: "Expansion, progress, foresight, and waiting for efforts to pay off."
},
{
  id: "four_of_wands",
  name: "Four of Wands",
  img: "images/cards/four_wands.png",
  meaning: "Celebration, stability, harmony, and a sense of home or community."
},
{
  id: "five_of_wands",
  name: "Five of Wands",
  img: "images/cards/five_wands.png",
  meaning: "Conflict, competition, tension, and differing viewpoints."
},
{
  id: "six_of_wands",
  name: "Six of Wands",
  img: "images/cards/six_wands.png",
  meaning: "Victory, recognition, success, and being acknowledged for achievements."
},
{
  id: "seven_of_wands",
  name: "Seven of Wands",
  img: "images/cards/seven_wands.png",
  meaning: "Defending your position, standing firm, and maintaining boundaries."
},
{
  id: "eight_of_wands",
  name: "Eight of Wands",
  img: "images/cards/eight_wands.png",
  meaning: "Momentum, swift movement, communication, and rapid progress."
},
{
  id: "nine_of_wands",
  name: "Nine of Wands",
  img: "images/cards/nine_wands.png",
  meaning: "Resilience, perseverance, guarding boundaries, and pushing through fatigue."
},
{
  id: "ten_of_wands",
  name: "Ten of Wands",
  img: "images/cards/ten_wands.png",
  meaning: "Burden, responsibility, overcommitment, and carrying too much alone."
},
{
  id: "page_of_wands",
  name: "Page of Wands",
  img: "images/cards/page_wands.png",
  meaning: "Curiosity, enthusiasm, exploration, and the spark of new possibilities."
},
{
  id: "knight_of_wands",
  name: "Knight of Wands",
  img: "images/cards/knight_wands.png",
  meaning: "Bold action, passion, adventure, and impulsive forward movement."
},
{
  id: "queen_of_wands",
  name: "Queen of Wands",
  img: "images/cards/queen_wands.png",
  meaning: "Confidence, charisma, independence, and creative leadership."
},
{
  id: "king_of_wands",
  name: "King of Wands",
  img: "images/cards/king_wands.png",
  meaning: "Vision, leadership, ambition, and inspiring others through action."
},
{
  id: "ace_of_cups",
  name: "Ace of Cups",
  img: "images/cards/ace_cups.png",
  meaning: "Emotional beginnings, love, compassion, and an open heart."
},
{
  id: "two_of_cups",
  name: "Two of Cups",
  img: "images/cards/two_cups.png",
  meaning: "Connection, mutual respect, partnership, and emotional balance."
},
{
  id: "three_of_cups",
  name: "Three of Cups",
  img: "images/cards/three_cups.png",
  meaning: "Celebration, friendship, community, and shared joy."
},
{
  id: "four_of_cups",
  name: "Four of Cups",
  img: "images/cards/four_cups.png",
  meaning: "Apathy, contemplation, emotional withdrawal, and missed opportunities."
},
{
  id: "five_of_cups",
  name: "Five of Cups",
  img: "images/cards/five_cups.png",
  meaning: "Loss, disappointment, regret, and focusing on what has gone wrong instead of what remains."
},
{
  id: "six_of_cups",
  name: "Six of Cups",
  img: "images/cards/six_cups.png",
  meaning: "Nostalgia, memories, innocence, and reconnecting with the past."
},
{
  id: "seven_of_cups",
  name: "Seven of Cups",
  img: "images/cards/seven_cups.png",
  meaning: "Choices, illusion, wishful thinking, and the need for clarity."
},
{
  id: "eight_of_cups",
  name: "Eight of Cups",
  img: "images/cards/eight_cups.png",
  meaning: "Walking away, emotional withdrawal, and seeking deeper fulfillment."
},
{
  id: "nine_of_cups",
  name: "Nine of Cups",
  img: "images/cards/nine_cups.png",
  meaning: "Contentment, satisfaction, emotional fulfillment, and wishes coming true."
},
{
  id: "ten_of_cups",
  name: "Ten of Cups",
  img: "images/cards/ten_cups.png",
  meaning: "Emotional harmony, happiness, fulfillment, and aligned relationships."
},
{
  id: "page_of_cups",
  name: "Page of Cups",
  img: "images/cards/page_cups.png",
  meaning: "Emotional openness, creative inspiration, and gentle curiosity."
},
{
  id: "knight_of_cups",
  name: "Knight of Cups",
  img: "images/cards/knight_cups.png",
  meaning: "Romance, idealism, emotional pursuit, and following the heart."
},
{
  id: "queen_of_cups",
  name: "Queen of Cups",
  img: "images/cards/queen_cups.png",
  meaning: "Emotional intelligence, compassion, intuition, and nurturing support."
},
{
  id: "king_of_cups",
  name: "King of Cups",
  img: "images/cards/king_cups.png",
  meaning: "Emotional balance, wisdom, calm leadership, and steady compassion."
},
{
  id: "ace_of_swords",
  name: "Ace of Swords",
  img: "images/cards/ace_swords.png",
  meaning: "Clarity, truth, mental breakthrough, and decisive communication."
},
{
  id: "two_of_swords",
  name: "Two of Swords",
  img: "images/cards/two_swords.png",
  meaning: "Indecision, avoidance, blocked emotions, and the need to face a choice."
},
{
  id: "three_of_swords",
  name: "Three of Swords",
  img: "images/cards/three_swords.png",
  meaning: "Heartbreak, emotional pain, grief, and difficult truths."
},
{
  id: "four_of_swords",
  name: "Four of Swords",
  img: "images/cards/four_swords.png",
  meaning: "Rest, recovery, mental pause, and restoring inner balance."
},
{
  id: "five_of_swords",
  name: "Five of Swords",
  img: "images/cards/five_swords.png",
  meaning: "Conflict, hollow victory, tension, and the cost of winning at all costs."
},
{
  id: "six_of_swords",
  name: "Six of Swords",
  img: "images/cards/six_swords.png",
  meaning: "Transition, moving on, gradual healing, and leaving turbulence behind."
},
{
  id: "seven_of_swords",
  name: "Seven of Swords",
  img: "images/cards/seven_swords.png",
  meaning: "Deception, secrecy, strategy, and acting independently or covertly."
},
{
  id: "eight_of_swords",
  name: "Eight of Swords",
  img: "images/cards/eight_swords.png",
  meaning: "Restriction, self-doubt, mental traps, and feeling powerless."
},
{
  id: "nine_of_swords",
  name: "Nine of Swords",
  img: "images/cards/nine_swords.png",
  meaning: "Anxiety, worry, guilt, and fear rooted in the mind."
},
{
  id: "ten_of_swords",
  name: "Ten of Swords",
  img: "images/cards/ten_swords.png",
  meaning: "Painful endings, betrayal, collapse, and the finality of a difficult situation."
},
{
  id: "page_of_swords",
  name: "Page of Swords",
  img: "images/cards/page_swords.png",
  meaning: "Curiosity, mental agility, vigilance, and seeking truth."
},
{
  id: "knight_of_swords",
  name: "Knight of Swords",
  img: "images/cards/knight_swords.png",
  meaning: "Swift action, determination, intensity, and pursuing goals relentlessly."
},
{
  id: "queen_of_swords",
  name: "Queen of Swords",
  img: "images/cards/queen_swords.png",
  meaning: "Clarity, honesty, independence, and sharp discernment."
},
{
  id: "king_of_swords",
  name: "King of Swords",
  img: "images/cards/king_swords.png",
  meaning: "Logic, authority, fairness, and intellectual leadership."
},
{
  id: "ace_of_pentacles",
  name: "Ace of Pentacles",
  img: "images/cards/ace_pentacles.png",
  meaning: "New financial or practical opportunities, prosperity, and solid beginnings."
},
{
  id: "two_of_pentacles",
  name: "Two of Pentacles",
  img: "images/cards/two_pentacles.png",
  meaning: "Balance, adaptability, time management, and juggling responsibilities."
},
{
  id: "three_of_pentacles",
  name: "Three of Pentacles",
  img: "images/cards/three_pentacles.png",
  meaning: "Collaboration, teamwork, skill development, and shared goals."
},
{
  id: "four_of_pentacles",
  name: "Four of Pentacles",
  img: "images/cards/four_pentacles.png",
  meaning: "Holding on tightly, control, security concerns, and fear of loss."
},
{
  id: "five_of_pentacles",
  name: "Five of Pentacles",
  img: "images/cards/five_pentacles.png",
  meaning: "Financial hardship, insecurity, isolation, and feeling left out in the cold."
},
{
  id: "six_of_pentacles",
  name: "Six of Pentacles",
  img: "images/cards/six_pentacles.png",
  meaning: "Generosity, balance, giving and receiving, and financial fairness."
},
{
  id: "seven_of_pentacles",
  name: "Seven of Pentacles",
  img: "images/cards/seven_pentacles.png",
  meaning: "Patience, evaluation, long-term growth, and waiting for results."
},
{
  id: "eight_of_pentacles",
  name: "Eight of Pentacles",
  img: "images/cards/eight_pentacles.png",
  meaning: "Dedication, skill-building, craftsmanship, and focused effort."
},
{
  id: "nine_of_pentacles",
  name: "Nine of Pentacles",
  img: "images/cards/nine_pentacles.png",
  meaning: "Self-sufficiency, abundance, independence, and personal achievement."
},
{
  id: "ten_of_pentacles",
  name: "Ten of Pentacles",
  img: "images/cards/ten_pentacles.png",
  meaning: "Wealth, legacy, long-term stability, and family security."
},
{
  id: "page_of_pentacles",
  name: "Page of Pentacles",
  img: "images/cards/page_pentacles.png",
  meaning: "New opportunities, learning, curiosity, and practical beginnings."
},
{
  id: "knight_of_pentacles",
  name: "Knight of Pentacles",
  img: "images/cards/knight_pentacles.png",
  meaning: "Consistency, reliability, patience, and steady progress."
},
{
  id: "queen_of_pentacles",
  name: "Queen of Pentacles",
  img: "images/cards/queen_pentacles.png",
  meaning: "Nurturing, practicality, comfort, and balancing work with care."
},
{
  id: "king_of_pentacles",
  name: "King of Pentacles",
  img: "images/cards/king_pentacles.png",
  meaning: "Financial mastery, stability, abundance, and grounded leadership."
},

];
