"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import { createClient } from "../_lib/supabase/client";

// ─── Types ────────────────────────────────────────────────────────────────────

type Question = {
  id: number;
  paper: 1 | 2;
  category: string;
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
};

type OirSet = {
  id: string;
  title: string;
  difficulty: string;
  description: string;
  questions: Question[];
};

// ─── Full question bank ───────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  // ── PAPER 1 — VERBAL (25 questions) ──────────────────────────────────────

  // Number series
  {
    id: 1, paper: 1, category: "Number Series",
    question: "Find the missing number: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    answer: 1,
    explanation: "Differences are 4, 6, 8, 10, 12 — so next is 30 + 12 = 42.",
  },
  {
    id: 2, paper: 1, category: "Number Series",
    question: "Find the missing number: 3, 9, 27, 81, ?",
    options: ["162", "243", "216", "270"],
    answer: 1,
    explanation: "Each term is multiplied by 3. 81 × 3 = 243.",
  },
  {
    id: 3, paper: 1, category: "Number Series",
    question: "Find the missing number: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "38"],
    answer: 2,
    explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36.",
  },
  {
    id: 4, paper: 1, category: "Number Series",
    question: "Find the missing number: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    answer: 2,
    explanation: "Each term doubles. 40 × 2 = 80.",
  },
  {
    id: 5, paper: 1, category: "Number Series",
    question: "Find the missing number: 100, 92, 85, 79, 74, ?",
    options: ["68", "69", "70", "71"],
    answer: 2,
    explanation: "Differences decrease: -8, -7, -6, -5, -4. Next: 74 - 4 = 70.",
  },

  // Analogies
  {
    id: 6, paper: 1, category: "Analogies",
    question: "Doctor : Hospital :: Teacher : ?",
    options: ["Books", "School", "Knowledge", "Student"],
    answer: 1,
    explanation: "A doctor works in a hospital; a teacher works in a school.",
  },
  {
    id: 7, paper: 1, category: "Analogies",
    question: "Sword : Soldier :: Pen : ?",
    options: ["Ink", "Paper", "Author", "Book"],
    answer: 2,
    explanation: "A sword is a tool of a soldier; a pen is a tool of an author.",
  },
  {
    id: 8, paper: 1, category: "Analogies",
    question: "Water : Thirst :: Food : ?",
    options: ["Hunger", "Taste", "Eat", "Stomach"],
    answer: 0,
    explanation: "Water satisfies thirst; food satisfies hunger.",
  },
  {
    id: 9, paper: 1, category: "Analogies",
    question: "Bird : Aviary :: Fish : ?",
    options: ["River", "Sea", "Aquarium", "Pond"],
    answer: 2,
    explanation: "An aviary is a place to keep birds; an aquarium is a place to keep fish.",
  },
  {
    id: 10, paper: 1, category: "Analogies",
    question: "Painting : Painter :: Poem : ?",
    options: ["Book", "Poet", "Literature", "Verse"],
    answer: 1,
    explanation: "A painter creates a painting; a poet creates a poem.",
  },

  // Coding-Decoding
  {
    id: 11, paper: 1, category: "Coding-Decoding",
    question: "If ARMY is coded as BSNZ, how is NAVY coded?",
    options: ["OBWZ", "OCXZ", "OBXZ", "OCWZ"],
    answer: 0,
    explanation: "Each letter moves +1 in the alphabet. N→O, A→B, V→W, Y→Z = OBWZ.",
  },
  {
    id: 12, paper: 1, category: "Coding-Decoding",
    question: "If CAT = 3120, DOG = 4157, what is RAT?",
    options: ["18120", "17120", "18112", "18121"],
    answer: 0,
    explanation: "Each letter's position: R=18, A=1, T=20 → concatenated = 18120.",
  },
  {
    id: 13, paper: 1, category: "Coding-Decoding",
    question: "If INDIA is coded as 9-14-4-9-1, what is ARMY?",
    options: ["1-18-13-25", "1-17-13-25", "2-18-13-25", "1-18-14-25"],
    answer: 0,
    explanation: "A=1, R=18, M=13, Y=25.",
  },

  // Odd One Out
  {
    id: 14, paper: 1, category: "Odd One Out",
    question: "Which word does NOT belong? Lieutenant, Captain, Major, Sergeant, Colonel",
    options: ["Sergeant", "Captain", "Major", "Colonel"],
    answer: 0,
    explanation: "Sergeant is a non-commissioned rank; the others are commissioned officer ranks.",
  },
  {
    id: 15, paper: 1, category: "Odd One Out",
    question: "Which does NOT belong? INS Vikrant, INS Vikramaditya, INS Chennai, INS Arihant",
    options: ["INS Vikrant", "INS Vikramaditya", "INS Chennai", "INS Arihant"],
    answer: 2,
    explanation: "INS Chennai is a destroyer. The others are carriers/submarines — capital ships. INS Arihant is a nuclear submarine.",
  },
  {
    id: 16, paper: 1, category: "Odd One Out",
    question: "Which is odd? Square, Rectangle, Circle, Triangle, Rhombus",
    options: ["Square", "Circle", "Rectangle", "Rhombus"],
    answer: 1,
    explanation: "Circle is the only shape without straight sides or vertices.",
  },

  // Verbal Reasoning
  {
    id: 17, paper: 1, category: "Logical Reasoning",
    question: "All soldiers are brave. Ravi is a soldier. Conclusion?",
    options: ["Ravi may be brave", "Ravi is brave", "Some soldiers are not brave", "Cannot determine"],
    answer: 1,
    explanation: "Classic syllogism: All soldiers are brave → Ravi (a soldier) is brave.",
  },
  {
    id: 18, paper: 1, category: "Logical Reasoning",
    question: "If all officers eat in the mess and Arjun eats in the mess, which is correct?",
    options: ["Arjun is an officer", "Arjun may or may not be an officer", "Arjun is not an officer", "Officers don't eat elsewhere"],
    answer: 1,
    explanation: "Others may also eat in the mess. We can't confirm Arjun is an officer from this alone.",
  },
  {
    id: 19, paper: 1, category: "Logical Reasoning",
    question: "A is older than B. B is older than C. Who is youngest?",
    options: ["A", "B", "C", "Cannot determine"],
    answer: 2,
    explanation: "A > B > C, so C is youngest.",
  },

  // Number Problems
  {
    id: 20, paper: 1, category: "Number Problems",
    question: "A unit marches 40 km in 8 hours. How far in 5 hours at the same pace?",
    options: ["20 km", "25 km", "30 km", "35 km"],
    answer: 1,
    explanation: "Speed = 40/8 = 5 km/h. In 5 hours: 5 × 5 = 25 km.",
  },
  {
    id: 21, paper: 1, category: "Number Problems",
    question: "A platoon of 60 soldiers has rations for 15 days. How long will it last for 45 soldiers?",
    options: ["18 days", "20 days", "22 days", "25 days"],
    answer: 1,
    explanation: "Total ration = 60 × 15 = 900 units. For 45 soldiers: 900/45 = 20 days.",
  },
  {
    id: 22, paper: 1, category: "Number Problems",
    question: "What is 25% of 360?",
    options: ["80", "85", "90", "95"],
    answer: 2,
    explanation: "25% of 360 = 360/4 = 90.",
  },
  {
    id: 23, paper: 1, category: "Number Problems",
    question: "If a tank is 3/4 full and you add 25 litres to fill it completely, what is the tank's capacity?",
    options: ["75 L", "100 L", "125 L", "150 L"],
    answer: 1,
    explanation: "1/4 of capacity = 25 litres → full capacity = 100 litres.",
  },

  // Vocabulary
  {
    id: 24, paper: 1, category: "Vocabulary",
    question: "Choose the correct antonym of COURAGEOUS",
    options: ["Timid", "Bold", "Gallant", "Daring"],
    answer: 0,
    explanation: "Courageous = brave/bold. Antonym = timid (fearful/cowardly).",
  },
  {
    id: 25, paper: 1, category: "Vocabulary",
    question: "Choose the correct synonym of VALOUR",
    options: ["Cowardice", "Bravery", "Loyalty", "Strength"],
    answer: 1,
    explanation: "Valour means great courage in the face of danger, synonymous with bravery.",
  },

  // ── PAPER 2 — NON-VERBAL (25 questions) ──────────────────────────────────

  // Pattern and matrix questions represented as text/ASCII
  {
    id: 26, paper: 2, category: "Pattern Recognition",
    question: "In a sequence: ○ ● ○○ ●● ○○○ — what comes next?",
    options: ["●●●", "○○○○", "●●", "○●●"],
    answer: 0,
    explanation: "Pattern alternates between circles and dots, increasing by one each step. After ○○○ comes ●●●.",
  },
  {
    id: 27, paper: 2, category: "Pattern Recognition",
    question: "Series: △ ▲ △△ ▲▲ △△△ — what comes next?",
    options: ["▲▲▲", "△△△△", "▲▲", "△▲▲"],
    answer: 0,
    explanation: "Alternating hollow and filled triangles, increasing by one. After △△△ comes ▲▲▲.",
  },
  {
    id: 28, paper: 2, category: "Matrix Reasoning",
    question: "A 3×3 matrix has 1,2,3 in row 1; 4,5,6 in row 2; 7,8,? in row 3.",
    options: ["10", "11", "9", "12"],
    answer: 2,
    explanation: "Numbers 1 to 9 fill the matrix left-to-right, top-to-bottom. Missing is 9.",
  },
  {
    id: 29, paper: 2, category: "Matrix Reasoning",
    question: "A 3×3 matrix: row 1 = 2,4,8; row 2 = 3,9,27; row 3 = 4,16,? Each row follows a×a^n pattern.",
    options: ["48", "64", "56", "72"],
    answer: 1,
    explanation: "Row 3: 4, 4²=16, 4³=64.",
  },
  {
    id: 30, paper: 2, category: "Spatial Reasoning",
    question: "A cube has 6 faces painted in 6 different colours. How many edges does it have?",
    options: ["8", "10", "12", "14"],
    answer: 2,
    explanation: "A cube has 12 edges (4 on top face, 4 on bottom face, 4 vertical).",
  },
  {
    id: 31, paper: 2, category: "Spatial Reasoning",
    question: "How many triangles are in a shape with one large triangle divided by 2 lines from apex to base?",
    options: ["3", "4", "5", "6"],
    answer: 0,
    explanation: "2 small triangles + 1 large outer triangle = 3 triangles.",
  },
  {
    id: 32, paper: 2, category: "Spatial Reasoning",
    question: "A square is folded diagonally. How many triangles does it form?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Folding a square diagonally once creates 2 triangles.",
  },
  {
    id: 33, paper: 2, category: "Figure Series",
    question: "Each figure gains one extra side: triangle → square → pentagon → ? ",
    options: ["Hexagon", "Octagon", "Heptagon", "Circle"],
    answer: 0,
    explanation: "3 sides → 4 sides → 5 sides → 6 sides = hexagon.",
  },
  {
    id: 34, paper: 2, category: "Figure Series",
    question: "If a square rotates 45° each step: □ ◇ □ ◇ — what is the 7th figure?",
    options: ["◇", "□", "⬡", "○"],
    answer: 1,
    explanation: "Pattern alternates □ and ◇. Position 7 is odd = □.",
  },
  {
    id: 35, paper: 2, category: "Mirror / Water Image",
    question: "Which letter looks the same as its mirror image?",
    options: ["F", "A", "J", "K"],
    answer: 1,
    explanation: "'A' is symmetrical about its vertical axis, so its mirror image is the same.",
  },
  {
    id: 36, paper: 2, category: "Mirror / Water Image",
    question: "The word 'MOM' — its mirror image is:",
    options: ["MOM", "WOW", "MOW", "WOM"],
    answer: 0,
    explanation: "M and O are both horizontally symmetric letters, so MOM looks the same in a vertical mirror.",
  },
  {
    id: 37, paper: 2, category: "Counting Figures",
    question: "A rectangle is divided by 3 horizontal lines and 2 vertical lines. How many rectangles in total?",
    options: ["18", "20", "24", "12"],
    answer: 0,
    explanation: "Total rectangles = C(4,2) × C(3,2) = 6 × 3 = 18.",
  },
  {
    id: 38, paper: 2, category: "Counting Figures",
    question: "How many squares are in a 3×3 grid?",
    options: ["9", "12", "14", "16"],
    answer: 2,
    explanation: "1×1 squares: 9. 2×2 squares: 4. 3×3 squares: 1. Total = 14.",
  },
  {
    id: 39, paper: 2, category: "Odd Figure",
    question: "Which shape is the odd one out — all shapes are 4-sided: Square, Rectangle, Rhombus, Trapezium, Parallelogram",
    options: ["Trapezium", "Square", "Rhombus", "Rectangle"],
    answer: 0,
    explanation: "Trapezium has only one pair of parallel sides. All others have two pairs.",
  },
  {
    id: 40, paper: 2, category: "Odd Figure",
    question: "Which is the odd one — all have 3 sides except: Scalene, Isosceles, Equilateral, Obtuse, Right-angled, Quadrilateral",
    options: ["Scalene", "Obtuse", "Equilateral", "Quadrilateral"],
    answer: 3,
    explanation: "Quadrilateral has 4 sides. All others are triangles.",
  },
  {
    id: 41, paper: 2, category: "Analogy (Figures)",
    question: "If ● is to ○ as ■ is to:",
    options: ["▲", "□", "◆", "▼"],
    answer: 1,
    explanation: "● (filled circle) : ○ (empty circle) = ■ (filled square) : □ (empty square).",
  },
  {
    id: 42, paper: 2, category: "Dice Problems",
    question: "A standard die has opposite faces summing to 7. If 1 is on top, what is on the bottom?",
    options: ["3", "5", "6", "2"],
    answer: 2,
    explanation: "On a standard die, 1 and 6 are opposite faces. So 6 is on the bottom.",
  },
  {
    id: 43, paper: 2, category: "Dice Problems",
    question: "On a standard die, if 2 faces you can see show 3 and 5, which number is on the face parallel to the 3?",
    options: ["2", "4", "5", "6"],
    answer: 1,
    explanation: "Opposite pairs: 1-6, 2-5, 3-4. So 4 is opposite to 3.",
  },
  {
    id: 44, paper: 2, category: "Direction Sense",
    question: "Ravi walks 5 km north, then 3 km east, then 5 km south. How far is he from start?",
    options: ["3 km East", "5 km North", "3 km West", "5 km South"],
    answer: 0,
    explanation: "North and south cancel. He ends up 3 km east of his starting point.",
  },
  {
    id: 45, paper: 2, category: "Direction Sense",
    question: "A soldier faces North. He turns 90° clockwise, then 180° anti-clockwise. He now faces:",
    options: ["North", "South", "East", "West"],
    answer: 3,
    explanation: "Start: North. +90° clockwise → East. -180° (anti-clockwise) → West.",
  },
  {
    id: 46, paper: 2, category: "Clock Problems",
    question: "At 3:00, the angle between hour and minute hands is:",
    options: ["60°", "75°", "90°", "120°"],
    answer: 2,
    explanation: "At 3:00, minute hand is at 12 and hour hand at 3 — exactly 90° apart.",
  },
  {
    id: 47, paper: 2, category: "Clock Problems",
    question: "How many times do the hands of a clock coincide between 12:00 and 12:00 (24 hours)?",
    options: ["22", "24", "21", "23"],
    answer: 0,
    explanation: "Hands coincide 22 times in 24 hours (once every 65.45 minutes).",
  },
  {
    id: 48, paper: 2, category: "Venn Diagrams",
    question: "In a group of 40 soldiers: 25 can swim, 20 can drive, 10 can do both. How many can do neither?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "Can do either = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5.",
  },
  {
    id: 49, paper: 2, category: "Venn Diagrams",
    question: "All cadets play cricket. Some cadets play football. Some play both. Which diagram is correct?",
    options: [
      "Football circle completely inside Cricket circle",
      "Cricket circle completely inside Football circle",
      "Football circle partially overlaps Cricket circle",
      "Circles are completely separate",
    ],
    answer: 2,
    explanation: "All cadets play cricket (big circle). Some play football (smaller, partially overlapping). Partial overlap is correct.",
  },
  {
    id: 50, paper: 2, category: "Visual Puzzles",
    question: "A piece of paper is folded once and a hole is punched. When unfolded, how many holes are visible?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "One fold → one punch creates 2 holes (mirrored) when unfolded.",
  },
];

const SET_TWO_QUESTIONS: Question[] = [
  { id: 101, paper: 1, category: "Number Series", question: "Find the missing number: 4, 9, 16, 25, 36, ?", options: ["42", "45", "49", "52"], answer: 2, explanation: "These are squares: 2^2, 3^2, 4^2, 5^2, 6^2, so next is 7^2 = 49." },
  { id: 102, paper: 1, category: "Number Series", question: "Find the missing number: 7, 14, 28, 56, ?", options: ["84", "98", "112", "126"], answer: 2, explanation: "Each term doubles. 56 x 2 = 112." },
  { id: 103, paper: 1, category: "Number Series", question: "Find the missing number: 81, 72, 64, 57, 51, ?", options: ["44", "45", "46", "47"], answer: 2, explanation: "Differences are -9, -8, -7, -6, so next is -5. 51 - 5 = 46." },
  { id: 104, paper: 1, category: "Number Series", question: "Find the missing number: 2, 5, 11, 23, 47, ?", options: ["83", "91", "95", "99"], answer: 2, explanation: "Each term is previous x 2 + 1. 47 x 2 + 1 = 95." },
  { id: 105, paper: 1, category: "Number Series", question: "Find the missing number: 6, 11, 18, 27, 38, ?", options: ["49", "50", "51", "52"], answer: 2, explanation: "Differences are 5, 7, 9, 11, then 13. 38 + 13 = 51." },
  { id: 106, paper: 1, category: "Analogies", question: "Compass : Direction :: Clock : ?", options: ["Time", "Speed", "Alarm", "Minute"], answer: 0, explanation: "A compass indicates direction; a clock indicates time." },
  { id: 107, paper: 1, category: "Analogies", question: "Pilot : Aircraft :: Captain : ?", options: ["Harbour", "Ship", "Ocean", "Crew"], answer: 1, explanation: "A pilot operates an aircraft; a captain commands a ship." },
  { id: 108, paper: 1, category: "Analogies", question: "Seed : Plant :: Cadet : ?", options: ["Parade", "Officer", "Training", "Uniform"], answer: 1, explanation: "A seed develops into a plant; a cadet develops into an officer." },
  { id: 109, paper: 1, category: "Analogies", question: "Library : Books :: Armoury : ?", options: ["Maps", "Weapons", "Uniforms", "Vehicles"], answer: 1, explanation: "A library stores books; an armoury stores weapons." },
  { id: 110, paper: 1, category: "Analogies", question: "Thermometer : Temperature :: Barometer : ?", options: ["Height", "Rain", "Pressure", "Wind"], answer: 2, explanation: "A thermometer measures temperature; a barometer measures pressure." },
  { id: 111, paper: 1, category: "Coding-Decoding", question: "If CAMP is coded as DBNQ, how is FORT coded?", options: ["GPSU", "GQSU", "GPSV", "EQSS"], answer: 0, explanation: "Each letter moves +1: F to G, O to P, R to S, T to U." },
  { id: 112, paper: 1, category: "Coding-Decoding", question: "If DELHI is 4-5-12-8-9, what is BASE?", options: ["2-1-19-5", "2-2-19-5", "3-1-18-5", "2-1-18-5"], answer: 0, explanation: "Use alphabet positions: B=2, A=1, S=19, E=5." },
  { id: 113, paper: 1, category: "Coding-Decoding", question: "If TIGER is written as SFHDP, how is HORSE written?", options: ["GNQRD", "GNQTD", "IPSTF", "GNRRD"], answer: 0, explanation: "Each letter moves -1: H to G, O to N, R to Q, S to R, E to D." },
  { id: 114, paper: 1, category: "Odd One Out", question: "Which does not belong? Platoon, Company, Battalion, Squadron, Brigade", options: ["Platoon", "Squadron", "Battalion", "Brigade"], answer: 1, explanation: "Squadron is commonly an air/cavalry unit term; the others are standard army formation terms in this list." },
  { id: 115, paper: 1, category: "Odd One Out", question: "Which is odd? Rifle, Carbine, Pistol, Binoculars", options: ["Rifle", "Carbine", "Pistol", "Binoculars"], answer: 3, explanation: "Binoculars are observation equipment; the others are firearms." },
  { id: 116, paper: 1, category: "Odd One Out", question: "Which does not belong? Monday, March, Friday, Sunday", options: ["Monday", "March", "Friday", "Sunday"], answer: 1, explanation: "March is a month; the others are days of the week." },
  { id: 117, paper: 1, category: "Logical Reasoning", question: "All trainees attend parade. Neeraj attends parade. What follows?", options: ["Neeraj is definitely a trainee", "Neeraj may or may not be a trainee", "No trainee attends parade", "Neeraj is not a trainee"], answer: 1, explanation: "Attending parade does not prove he is a trainee; others may attend too." },
  { id: 118, paper: 1, category: "Logical Reasoning", question: "Some athletes are cadets. All cadets are disciplined. Which is certain?", options: ["Some athletes are disciplined", "All athletes are disciplined", "No athlete is disciplined", "All disciplined people are cadets"], answer: 0, explanation: "The athletes who are cadets must be disciplined." },
  { id: 119, paper: 1, category: "Logical Reasoning", question: "A is east of B. C is west of B. Which is true?", options: ["A is east of C", "C is east of A", "A and C are north", "Cannot compare"], answer: 0, explanation: "If C is west of B and A is east of B, A is east of C." },
  { id: 120, paper: 1, category: "Number Problems", question: "A vehicle covers 180 km in 3 hours. How far will it cover in 5 hours at the same speed?", options: ["240 km", "270 km", "300 km", "320 km"], answer: 2, explanation: "Speed = 180/3 = 60 km/h. In 5 hours: 300 km." },
  { id: 121, paper: 1, category: "Number Problems", question: "If 12 men finish a task in 10 days, how many days will 20 men take at the same rate?", options: ["5", "6", "7", "8"], answer: 1, explanation: "Work = 12 x 10 = 120 man-days. 120/20 = 6 days." },
  { id: 122, paper: 1, category: "Number Problems", question: "What is 15% of 240?", options: ["24", "30", "36", "42"], answer: 2, explanation: "10% is 24 and 5% is 12, total 36." },
  { id: 123, paper: 1, category: "Number Problems", question: "A candidate scores 72 out of 120. What percentage is this?", options: ["55%", "60%", "65%", "70%"], answer: 1, explanation: "72/120 x 100 = 60%." },
  { id: 124, paper: 1, category: "Vocabulary", question: "Choose the synonym of RESILIENT", options: ["Fragile", "Adaptable", "Careless", "Silent"], answer: 1, explanation: "Resilient means able to recover or adapt." },
  { id: 125, paper: 1, category: "Vocabulary", question: "Choose the antonym of PRECISE", options: ["Exact", "Vague", "Sharp", "Brief"], answer: 1, explanation: "Precise means exact; its antonym is vague." },
  { id: 126, paper: 2, category: "Pattern Recognition", question: "Series: A, C, F, J, O, ?", options: ["T", "U", "V", "W"], answer: 1, explanation: "Gaps increase by 1: +2, +3, +4, +5, +6. O + 6 = U." },
  { id: 127, paper: 2, category: "Pattern Recognition", question: "Series: 1 square, 2 circles, 3 triangles, 4 squares, ?", options: ["5 circles", "5 squares", "4 circles", "6 triangles"], answer: 0, explanation: "Shape cycle square, circle, triangle repeats while count increases by one." },
  { id: 128, paper: 2, category: "Matrix Reasoning", question: "Matrix rows: 2, 3, 5; 4, 5, 9; 6, 7, ?. What completes row 3?", options: ["11", "12", "13", "14"], answer: 2, explanation: "Third number is first + second: 6 + 7 = 13." },
  { id: 129, paper: 2, category: "Matrix Reasoning", question: "Rows: 1, 4, 9; 2, 5, 10; 3, 6, ?. What fits the pattern?", options: ["9", "11", "12", "13"], answer: 1, explanation: "Columns increase by 1 downward: 9, 10, 11." },
  { id: 130, paper: 2, category: "Spatial Reasoning", question: "How many faces does a cuboid have?", options: ["4", "6", "8", "12"], answer: 1, explanation: "A cuboid has 6 rectangular faces." },
  { id: 131, paper: 2, category: "Spatial Reasoning", question: "A triangle is divided from one vertex to the opposite side. How many smaller triangles are formed?", options: ["1", "2", "3", "4"], answer: 1, explanation: "One internal line from a vertex to the opposite side divides it into 2 triangles." },
  { id: 132, paper: 2, category: "Spatial Reasoning", question: "A cube is cut once exactly through the middle. How many solid pieces are formed?", options: ["2", "3", "4", "6"], answer: 0, explanation: "One complete straight cut creates 2 pieces." },
  { id: 133, paper: 2, category: "Figure Series", question: "Number of sides increases: square, pentagon, hexagon, ?", options: ["Triangle", "Heptagon", "Octagon", "Circle"], answer: 1, explanation: "4 sides, 5 sides, 6 sides, then 7 sides = heptagon." },
  { id: 134, paper: 2, category: "Figure Series", question: "If an arrow rotates 90 degrees clockwise each step: Up, Right, Down, ?", options: ["Up", "Right", "Left", "Down"], answer: 2, explanation: "After Up, Right, Down, the next direction is Left." },
  { id: 135, paper: 2, category: "Mirror / Water Image", question: "Which letter remains unchanged in a vertical mirror?", options: ["B", "C", "H", "R"], answer: 2, explanation: "H is symmetric across a vertical axis." },
  { id: 136, paper: 2, category: "Mirror / Water Image", question: "Which number looks the same in a mirror most clearly?", options: ["2", "3", "8", "7"], answer: 2, explanation: "8 has vertical symmetry in standard block form." },
  { id: 137, paper: 2, category: "Counting Figures", question: "How many squares are in a 2 x 2 grid?", options: ["4", "5", "6", "8"], answer: 1, explanation: "Four small squares plus one large square = 5." },
  { id: 138, paper: 2, category: "Counting Figures", question: "A rectangle has 2 vertical internal lines and no horizontal internal line. How many rectangles total?", options: ["3", "4", "5", "6"], answer: 3, explanation: "There are 4 vertical boundary lines including edges. Choose any 2: C(4,2)=6 rectangles." },
  { id: 139, paper: 2, category: "Odd Figure", question: "Which is odd? Cube, Sphere, Cone, Cylinder", options: ["Cube", "Sphere", "Cone", "Cylinder"], answer: 0, explanation: "Cube has only flat faces and edges; the others have curved surfaces." },
  { id: 140, paper: 2, category: "Odd Figure", question: "Which is odd? Triangle, Pentagon, Hexagon, Circle", options: ["Triangle", "Pentagon", "Hexagon", "Circle"], answer: 3, explanation: "Circle has no sides; the others are polygons." },
  { id: 141, paper: 2, category: "Analogy (Figures)", question: "Filled triangle is to hollow triangle as filled circle is to:", options: ["Hollow circle", "Filled square", "Hollow square", "Filled circle"], answer: 0, explanation: "The relation changes filled to hollow while preserving shape." },
  { id: 142, paper: 2, category: "Dice Problems", question: "On a standard die, what is opposite 5?", options: ["1", "2", "3", "4"], answer: 1, explanation: "Opposite faces sum to 7, so 5 is opposite 2." },
  { id: 143, paper: 2, category: "Dice Problems", question: "If 6 is on top of a standard die, what is on the bottom?", options: ["1", "2", "3", "4"], answer: 0, explanation: "1 and 6 are opposite on a standard die." },
  { id: 144, paper: 2, category: "Direction Sense", question: "A cadet walks 4 km east, 4 km north, then 4 km west. How far is he from the start?", options: ["4 km North", "4 km East", "8 km North", "0 km"], answer: 0, explanation: "East and west cancel; he remains 4 km north of start." },
  { id: 145, paper: 2, category: "Direction Sense", question: "Facing South, you turn left. Which direction do you face?", options: ["East", "West", "North", "South"], answer: 0, explanation: "Left from South points East." },
  { id: 146, paper: 2, category: "Clock Problems", question: "At 6:00, the angle between clock hands is:", options: ["90 degrees", "120 degrees", "180 degrees", "360 degrees"], answer: 2, explanation: "At 6:00, the hands are opposite each other, forming 180 degrees." },
  { id: 147, paper: 2, category: "Clock Problems", question: "At 12:30, the hour hand is between:", options: ["12 and 1", "1 and 2", "6 and 7", "11 and 12"], answer: 0, explanation: "At 12:30, the hour hand has moved halfway between 12 and 1." },
  { id: 148, paper: 2, category: "Venn Diagrams", question: "In a group of 50, 30 read newspapers, 25 read magazines, 10 read both. How many read at least one?", options: ["35", "40", "45", "55"], answer: 2, explanation: "At least one = 30 + 25 - 10 = 45." },
  { id: 149, paper: 2, category: "Venn Diagrams", question: "All pilots are officers. Some officers are instructors. Which diagram is suitable?", options: ["Pilot circle inside Officer circle, Instructor partly overlaps Officer", "Officer inside Pilot", "All circles separate", "Instructor inside Pilot only"], answer: 0, explanation: "All pilots are officers, and instructors share only some of the officer group." },
  { id: 150, paper: 2, category: "Visual Puzzles", question: "A sheet is folded twice and one hole is punched through all layers. Maximum holes after unfolding?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Two folds make four layers, so one punch can create 4 holes." },
];

const OIR_SETS: OirSet[] = [
  {
    id: "set-01",
    title: "OIR Set 01",
    difficulty: "Starter",
    description: "Balanced verbal and non-verbal practice for first attempt.",
    questions: QUESTIONS,
  },
  {
    id: "set-02",
    title: "OIR Set 02",
    difficulty: "Fresh",
    description: "A second original free set with new series, logic, and spatial questions.",
    questions: SET_TWO_QUESTIONS,
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const PAPER_TIME = 17 * 60; // 17 minutes per paper in seconds
const DEFAULT_SET = OIR_SETS[0];
const DEFAULT_PAPER_1 = DEFAULT_SET.questions.filter((q) => q.paper === 1);

const CATEGORY_COLORS: Record<string, string> = {
  "Number Series": "#0369a1",
  "Analogies": "#7c3aed",
  "Coding-Decoding": "#b45309",
  "Odd One Out": "#be123c",
  "Logical Reasoning": "#1d6b40",
  "Number Problems": "#0f766e",
  "Vocabulary": "#92400e",
  "Pattern Recognition": "#6d28d9",
  "Matrix Reasoning": "#0369a1",
  "Spatial Reasoning": "#1d6b40",
  "Figure Series": "#b45309",
  "Mirror / Water Image": "#be123c",
  "Counting Figures": "#7c3aed",
  "Odd Figure": "#0f766e",
  "Analogy (Figures)": "#0369a1",
  "Dice Problems": "#92400e",
  "Direction Sense": "#1d6b40",
  "Clock Problems": "#6d28d9",
  "Venn Diagrams": "#b45309",
  "Visual Puzzles": "#7c3aed",
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function fmt(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

type Phase = "intro" | "paper1" | "paper2" | "result";

// ─── Component ────────────────────────────────────────────────────────────────

export default function OirQuiz({
  backHref = "/screening",
}: {
  backHref?: string;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [activeSetId, setActiveSetId] = useState(DEFAULT_SET.id);
  const [currentPaper, setCurrentPaper] = useState<Question[]>(DEFAULT_PAPER_1);
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>(Array(25).fill(null));
  const [timeLeft, setTimeLeft] = useState(PAPER_TIME);
  const [paper1Answers, setPaper1Answers] = useState<(number | null)[]>(Array(25).fill(null));
  const [paper2Answers, setPaper2Answers] = useState<(number | null)[]>(Array(25).fill(null));
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const savedResultKeyRef = useRef<string | null>(null);
  const activeSet = useMemo(
    () => OIR_SETS.find((set) => set.id === activeSetId) ?? DEFAULT_SET,
    [activeSetId],
  );
  const paper1 = useMemo(() => activeSet.questions.filter((q) => q.paper === 1), [activeSet]);
  const paper2 = useMemo(() => activeSet.questions.filter((q) => q.paper === 2), [activeSet]);

  const handlePaperEnd = useCallback(() => {
    if (phase === "paper1") {
      setPaper1Answers(selected);
      setCurrentPaper(paper2);
      setSelected(Array(25).fill(null));
      setQIndex(0);
      setTimeLeft(PAPER_TIME);
      setPhase("paper2");
    } else {
      setPaper2Answers(selected);
      setPhase("result");
    }
  }, [paper2, phase, selected]);

  // Timer
  useEffect(() => {
    if (phase !== "paper1" && phase !== "paper2") return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current!);
          handlePaperEnd();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [handlePaperEnd, phase]);

  const handleSelect = (optIdx: number) => {
    const updated = [...selected];
    updated[qIndex] = optIdx;
    setSelected(updated);
  };

  const currentQ = currentPaper[qIndex];
  const paperLabel = phase === "paper1" ? "Paper 1 — Verbal" : "Paper 2 — Non-Verbal";

  // Score
  const p1Score = paper1Answers.reduce<number>((acc, ans, i) => acc + (ans === paper1[i].answer ? 1 : 0), 0);
  const p2Score = paper2Answers.reduce<number>((acc, ans, i) => acc + (ans === paper2[i].answer ? 1 : 0), 0);
  const totalScore = p1Score + p2Score;
  const ib = totalScore >= 43 ? "IB-5 (Exceptional)" : totalScore >= 37 ? "IB-4 (Very Good)" : totalScore >= 29 ? "IB-3 (Good)" : totalScore >= 20 ? "IB-2 (Average)" : "IB-1 (Below Average)";
  const ibColor = totalScore >= 43 ? "#1d6b40" : totalScore >= 37 ? "#0369a1" : totalScore >= 29 ? "#b45309" : totalScore >= 20 ? "#be123c" : "#6b2d2d";

  // Progress
  const answered = selected.filter((a) => a !== null).length;

  useEffect(() => {
    if (phase !== "result") {
      return;
    }

    const resultKey = `${activeSet.id}:${paper1Answers.join(",")}:${paper2Answers.join(",")}`;

    if (savedResultKeyRef.current === resultKey) {
      return;
    }

    savedResultKeyRef.current = resultKey;
    setSaveStatus("saving");
    setSaveMessage("Saving your score...");

    async function saveAttempt() {
      const supabase = createClient();
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData.user) {
        setSaveStatus("error");
        setSaveMessage("Score shown here, but it was not saved because the session could not be verified.");
        return;
      }

      const { error } = await supabase.from("oir_attempts").insert({
        user_id: userData.user.id,
        paper: activeSet.title,
        score: totalScore,
        total_questions: activeSet.questions.length,
      });

      if (error) {
        setSaveStatus("error");
        setSaveMessage("Score shown here, but saving failed. Please retry from the dashboard.");
        return;
      }

      setSaveStatus("saved");
      setSaveMessage("Saved to your dashboard tracker.");
    }

    void saveAttempt();
  }, [activeSet.id, activeSet.questions.length, activeSet.title, paper1Answers, paper2Answers, phase, totalScore]);

  // ── INTRO ──
  if (phase === "intro") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(228,247,255,0.93))] px-7 py-8 shadow-[var(--shadow-soft)]">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(3,105,161,0.16),transparent_70%)]" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <Link href={backHref} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-ink-strong)]">
                ← Back
              </Link>
              <span className="text-[var(--color-muted)] opacity-40">/</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)]">OIR Quiz</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)] sm:text-4xl lg:text-[3.2rem]">
              Officer Intelligence Rating Test
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              Two papers, 25 questions each, 17 minutes per paper. The real OIR is fast — don&apos;t think too long on any single question.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {OIR_SETS.map((set) => {
            const isActive = set.id === activeSetId;
            return (
              <button
                key={set.id}
                type="button"
                onClick={() => {
                  setActiveSetId(set.id);
                  setCurrentPaper(set.questions.filter((q) => q.paper === 1));
                  setSelected(Array(25).fill(null));
                  setPaper1Answers(Array(25).fill(null));
                  setPaper2Answers(Array(25).fill(null));
                  setSaveStatus("idle");
                  setSaveMessage("");
                  setQIndex(0);
                  setTimeLeft(PAPER_TIME);
                }}
                className="rounded-lg border bg-white p-5 text-left shadow-[var(--shadow-card)] transition hover:-translate-y-0.5"
                style={{
                  borderColor: isActive ? "var(--color-blue)" : "var(--color-border)",
                  boxShadow: isActive ? "0 16px 36px rgba(47,128,201,0.16)" : "var(--shadow-card)",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-extrabold text-[var(--color-ink-strong)]">{set.title}</p>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      background: isActive ? "var(--color-blue-soft)" : "var(--color-surface)",
                      color: isActive ? "var(--color-blue)" : "var(--color-muted)",
                    }}
                  >
                    {set.difficulty}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{set.description}</p>
                <p className="mt-4 text-xs font-bold uppercase text-[var(--color-green)]">
                  50 questions / 34 minutes / Free
                </p>
              </button>
            );
          })}
        </div>

        {/* Info cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Paper 1", desc: "Verbal — number series, analogies, coding, reasoning, vocabulary", color: "#0369a1" },
            { label: "Paper 2", desc: "Non-Verbal — patterns, matrices, spatial, directions, clocks, Venn", color: "#7c3aed" },
            { label: "Total", desc: "50 questions • 34 minutes • IB scored 1 to 5", color: "#1d6b40" },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm"
            >
              <div className="h-1 w-8 rounded-full mb-3" style={{ background: c.color }} />
              <p className="font-display text-lg font-semibold" style={{ color: c.color }}>{c.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)] mb-3">Instructions</p>
          <ul className="space-y-2.5">
            {[
              "Each correct answer earns +1 mark. No negative marking in this practice.",
              "Timer runs per paper — Paper 2 starts immediately after Paper 1 ends.",
              "You can navigate between questions within a paper using the grid.",
              "Time up = auto-submit. Unanswered questions = 0 marks.",
              "After both papers, your Intelligence Band (IB) is calculated.",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-strong)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            setCurrentPaper(paper1);
            setSelected(Array(25).fill(null));
            setPaper1Answers(Array(25).fill(null));
            setPaper2Answers(Array(25).fill(null));
            setSaveStatus("idle");
            setSaveMessage("");
            setQIndex(0);
            setTimeLeft(PAPER_TIME);
            setPhase("paper1");
          }}
          className="w-full rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_rgba(26,115,232,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(26,115,232,0.36)]"
        >
          Start Paper 1 — Verbal →
        </button>
      </div>
    );
  }

  // ── RESULT ──
  if (phase === "result") {
    return (
      <div className="space-y-6">
        {/* Score card */}
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/70 px-7 py-8 shadow-[var(--shadow-soft)]"
          style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${ibColor} 6%, white), color-mix(in srgb, ${ibColor} 3%, rgba(228,247,255,0.9)))` }}
        >
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full" style={{ background: `radial-gradient(circle, color-mix(in srgb, ${ibColor} 18%, transparent), transparent 70%)` }} />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: ibColor }}>
              Your Result
            </p>
            <div className="mt-4 flex items-baseline gap-4 flex-wrap">
              <span className="font-display text-7xl font-bold" style={{ color: ibColor }}>{totalScore}</span>
              <span className="text-lg text-[var(--color-muted)] font-medium">/ 50</span>
            </div>
            <div
              className="mt-3 inline-block rounded-full px-4 py-2 text-base font-bold"
              style={{ background: `color-mix(in srgb, ${ibColor} 12%, white)`, color: ibColor }}
            >
              {ib}
            </div>
            {saveMessage ? (
              <p
                className="mt-4 rounded-lg px-4 py-3 text-sm font-semibold"
                style={{
                  background:
                    saveStatus === "error"
                      ? "color-mix(in srgb, #be123c 10%, white)"
                      : "color-mix(in srgb, #1d6b40 10%, white)",
                  color: saveStatus === "error" ? "#be123c" : "#1d6b40",
                }}
              >
                {saveMessage}
              </p>
            ) : null}
            <div className="mt-5 flex gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Paper 1</p>
                <p className="mt-1 text-2xl font-bold" style={{ color: ibColor }}>{p1Score}/25</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Paper 2</p>
                <p className="mt-1 text-2xl font-bold" style={{ color: ibColor }}>{p2Score}/25</p>
              </div>
            </div>
          </div>
        </div>

        {/* IB Scale */}
        <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-3">Intelligence Band Scale</p>
          <div className="space-y-2">
            {[
              { range: "43–50", band: "IB-5", label: "Exceptional", min: 43, color: "#1d6b40" },
              { range: "37–42", band: "IB-4", label: "Very Good", min: 37, color: "#0369a1" },
              { range: "29–36", band: "IB-3", label: "Good", min: 29, color: "#b45309" },
              { range: "20–28", band: "IB-2", label: "Average", min: 20, color: "#be123c" },
              { range: "0–19", band: "IB-1", label: "Below Average", min: 0, color: "#6b2d2d" },
            ].map((ib) => {
              const isActive = totalScore >= ib.min && (ib.min === 43 ? totalScore <= 50 : totalScore < (ib.min === 37 ? 43 : ib.min === 29 ? 37 : ib.min === 20 ? 29 : 20));
              return (
                <div
                  key={ib.band}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition-all"
                  style={isActive ? { background: `color-mix(in srgb, ${ib.color} 10%, white)`, border: `1px solid color-mix(in srgb, ${ib.color} 25%, transparent)` } : { background: "rgba(248,252,255,0.5)" }}
                >
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: ib.color }} />
                  <span className="text-sm font-bold w-10" style={{ color: ib.color }}>{ib.band}</span>
                  <span className="text-sm text-[var(--color-muted)] flex-1">{ib.label}</span>
                  <span className="text-xs font-mono text-[var(--color-muted)]">{ib.range}</span>
                  {isActive && <span className="text-xs font-bold" style={{ color: ib.color }}>← You</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Answer review */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)] mb-4">Answer Review</p>
          <div className="space-y-3">
            {[...paper1, ...paper2].map((q, i) => {
              const userAns = i < 25 ? paper1Answers[i] : paper2Answers[i - 25];
              const isCorrect = userAns === q.answer;
              const isSkipped = userAns === null;
              return (
                <div
                  key={q.id}
                  className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                      style={{ background: isSkipped ? "#94a3b8" : isCorrect ? "#1d6b40" : "#be123c" }}
                    >
                      {isSkipped ? "–" : isCorrect ? "✓" : "✗"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5"
                          style={{
                            background: `color-mix(in srgb, ${CATEGORY_COLORS[q.category] || "#0369a1"} 10%, white)`,
                            color: CATEGORY_COLORS[q.category] || "#0369a1",
                          }}
                        >
                          P{q.paper} · {q.category}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-ink-strong)]">{q.question}</p>
                      <div className="mt-2 grid grid-cols-2 gap-1">
                        {q.options.map((opt, oi) => (
                          <div
                            key={oi}
                            className="rounded-lg px-2 py-1 text-xs"
                            style={{
                              background:
                                oi === q.answer
                                  ? "color-mix(in srgb, #1d6b40 10%, white)"
                                  : userAns === oi && !isCorrect
                                  ? "color-mix(in srgb, #be123c 10%, white)"
                                  : "transparent",
                              color:
                                oi === q.answer
                                  ? "#1d6b40"
                                  : userAns === oi && !isCorrect
                                  ? "#be123c"
                                  : "var(--color-muted)",
                              fontWeight: oi === q.answer ? 700 : 400,
                            }}
                          >
                            {String.fromCharCode(65 + oi)}. {opt}
                          </div>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed border-t border-slate-100 pt-2">
                        <span className="font-semibold text-[var(--color-ink-strong)]">Explanation: </span>
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => {
              setPhase("intro");
              setSelected(Array(25).fill(null));
              setPaper1Answers(Array(25).fill(null));
              setPaper2Answers(Array(25).fill(null));
              setSaveStatus("idle");
              setSaveMessage("");
              setQIndex(0);
              setTimeLeft(PAPER_TIME);
              setCurrentPaper(paper1);
            }}
            className="flex-1 rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(26,115,232,0.24)] transition-all hover:-translate-y-0.5"
          >
            Retry Test →
          </button>
          <Link
            href={backHref}
            className="flex-1 rounded-2xl border border-white/80 bg-white/90 px-6 py-3.5 text-center text-sm font-bold text-[var(--color-ink-strong)] shadow-sm transition-all hover:-translate-y-0.5"
          >
            ← Back to Screening
          </Link>
        </div>
      </div>
    );
  }

  // ── QUIZ ──
  const timerDanger = timeLeft < 120;
  const catColor = CATEGORY_COLORS[currentQ.category] || "#0369a1";

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/90 px-5 py-3 shadow-sm">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)]">{paperLabel}</p>
          <p className="text-sm font-semibold text-[var(--color-ink-strong)]">
            Q {qIndex + 1} of {currentPaper.length}
            <span className="ml-2 text-[var(--color-muted)] font-normal">· {answered} answered</span>
          </p>
        </div>
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-lg font-bold"
          style={{
            background: timerDanger ? "color-mix(in srgb, #be123c 10%, white)" : "color-mix(in srgb, #0369a1 8%, white)",
            color: timerDanger ? "#be123c" : "#0369a1",
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 6v6l4 2" />
          </svg>
          {fmt(timeLeft)}
        </div>
      </div>

      {/* Question */}
      <div className="rounded-[1.8rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(228,247,255,0.92))] p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
            style={{ background: `color-mix(in srgb, ${catColor} 10%, white)`, color: catColor }}
          >
            {currentQ.category}
          </span>
          <span className="text-xs text-[var(--color-muted)]">Q{qIndex + 1}</span>
        </div>

        <p className="font-display text-xl font-semibold leading-snug text-[var(--color-ink-strong)] sm:text-2xl">
          {currentQ.question}
        </p>

        {/* Options */}
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {currentQ.options.map((opt, oi) => {
            const isSelected = selected[qIndex] === oi;
            return (
              <button
                key={oi}
                onClick={() => handleSelect(oi)}
                className="flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-medium transition-all duration-150"
                style={{
                  borderColor: isSelected ? catColor : "rgba(255,255,255,0.8)",
                  background: isSelected
                    ? `color-mix(in srgb, ${catColor} 10%, white)`
                    : "rgba(255,255,255,0.75)",
                  color: isSelected ? catColor : "var(--color-ink-strong)",
                  transform: isSelected ? "scale(1.01)" : "scale(1)",
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold border"
                  style={{
                    borderColor: isSelected ? catColor : "rgba(0,0,0,0.12)",
                    background: isSelected ? catColor : "white",
                    color: isSelected ? "white" : "var(--color-muted)",
                  }}
                >
                  {String.fromCharCode(65 + oi)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          disabled={qIndex === 0}
          onClick={() => setQIndex(qIndex - 1)}
          className="rounded-2xl border border-white/80 bg-white/90 px-5 py-3 text-sm font-bold text-[var(--color-ink-strong)] shadow-sm disabled:opacity-40 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          ← Prev
        </button>

        <div className="flex-1 flex flex-wrap gap-1.5 justify-center">
          {currentPaper.map((_, i) => (
            <button
              key={i}
              onClick={() => setQIndex(i)}
              className="h-7 w-7 rounded-lg text-[11px] font-bold transition-all"
              style={{
                background:
                  i === qIndex
                    ? catColor
                    : selected[i] !== null
                    ? "color-mix(in srgb, #1d6b40 15%, white)"
                    : "rgba(255,255,255,0.8)",
                color:
                  i === qIndex
                    ? "white"
                    : selected[i] !== null
                    ? "#1d6b40"
                    : "var(--color-muted)",
                border: i === qIndex ? `2px solid ${catColor}` : "1px solid rgba(255,255,255,0.7)",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {qIndex < currentPaper.length - 1 ? (
          <button
            onClick={() => setQIndex(qIndex + 1)}
            className="rounded-2xl border border-white/80 bg-white/90 px-5 py-3 text-sm font-bold text-[var(--color-ink-strong)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handlePaperEnd}
            className="rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5"
            style={{ background: catColor }}
          >
            {phase === "paper1" ? "Paper 2 →" : "Submit →"}
          </button>
        )}
      </div>
    </div>
  );
}
