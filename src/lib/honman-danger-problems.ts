export type DangerPredictionProblem = {
  id: number;
  speed: string;
  prompt: string;
  image: { src: string; alt: string };
  statements: string[];
  answers: ("true" | "false")[];
  explanation: string;
};

export const honmanDangerProblems: DangerPredictionProblem[] = [
  {
    id: 1,
    speed: "40 km/h",
    prompt: "You are driving along at 40 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-1.webp", alt: "Driver approaching a kindergarten bus, children and oncoming traffic" },
    statements: [
      "I don’t think the kindergarten bus will start moving yet, so I’ll cross over into the lane of oncoming traffic and keep driving just as I am now.",
      "I don’t think any of the children will dash out into the street because there is an adult with them, so I’ll keep driving at this speed.",
      "There might be children crossing in front of the kindergarten bus, so I’ll sound my horn and keep driving.",
    ],
    answers: ["false", "false", "false"],
    explanation: "The driver should slow down and pass through while preparing for children who might run into the street.",
  },
  {
    id: 2,
    speed: "40 km/h",
    prompt: "You are driving along at 40 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2.webp", alt: "Driver approaching a moped beside a parked van on a narrow street" },
    statements: [
      "I think the moped will notice my vehicle approaching and stop in front of the parked vehicle to yield the road, so I’ll keep driving just as I am now.",
      "The moped might move in front of my vehicle, so I’ll follow it until we pass beside the parked vehicle.",
      "There don’t seem to be any oncoming vehicles, so I’ll accelerate and overtake the moped and the parked vehicle in one move.",
    ],
    answers: ["false", "true", "false"],
    explanation: "The driver should not overtake the moped and should anticipate that it may change lanes.",
  },
  {
    id: 3,
    speed: "25 km/h",
    prompt: "You are driving along at 25 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3.webp", alt: "Rainy road with pedestrians, puddles and children playing near a parked car" },
    statements: [
      "The pedestrians might not have noticed my vehicle approaching, so I’ll reduce my speed and observe their movements.",
      "I’ll reduce my speed so that I won’t splash the pedestrians with water or mud when I pass them.",
      "The children on the right are playing and might dash out in front of my vehicle, so I’ll drive at a speed at which I can stop at any time.",
    ],
    answers: ["true", "true", "true"],
    explanation: "The driver should reduce speed and watch carefully for the movement of pedestrians and children.",
  },
  {
    id: 4,
    speed: "35 km/h",
    prompt: "You are driving along at 35 km/h. Because of construction, the road is covered with steel plates. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-4.webp", alt: "Rainy construction zone with wet steel plates, workers and a vehicle ahead" },
    statements: [
      "Construction workers might come out suddenly from the construction site on the left, so I’ll reduce my speed and watch out as I drive.",
      "The surface of the wet steel plates is extremely slippery, so I’ll reduce my speed in advance and maintain the distance between my vehicle and the vehicle ahead so that I won’t have to brake suddenly.",
      "Rain impedes visibility, making it difficult to see the conditions ahead, so I’ll drive up close to the vehicle in front of me.",
    ],
    answers: ["true", "true", "false"],
    explanation: "The driver should reduce speed and maintain a sufficient distance from the vehicle ahead.",
  },
  {
    id: 5,
    speed: "80 km/h",
    prompt: "While you are driving on an expressway at 80 km/h, the hazard lights of the vehicle ahead begin to flash. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-5.webp", alt: "Expressway traffic slowing behind a truck with flashing hazard lights" },
    statements: [
      "The vehicle ahead might suddenly reduce its speed and I’ll hit it, so I’ll apply the brakes suddenly.",
      "I think the vehicle ahead is having a malfunction and will pull over to the left to stop, so I’ll quickly change lanes into the overtaking lane.",
      "If I apply the brakes suddenly I might be hit by the vehicle behind me, so I’ll turn on my hazard lights and apply the brake with several separate presses of the brake pedal.",
    ],
    answers: ["false", "false", "true"],
    explanation: "The driver should not approach the vehicle ahead because it may reduce speed due to congestion.",
  },
];

export const honmanDangerProblemsTwo: DangerPredictionProblem[] = [
  {
    id: 1,
    speed: "15 km/h",
    prompt: "You are driving along at 15 km/h. When you are turning left at an intersection where the light for pedestrians has begun to flash, what kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2-1.png", alt: "Driver turning left at an intersection as a cyclist approaches the crosswalk" },
    statements: [
      "The cyclist might cross recklessly, so I’ll stop before the crosswalk and see what happens.",
      "If I stop suddenly I might be hit by the vehicle behind me, so to warn the driver I’ll apply the brake with several separate presses of the brake pedal.",
      "The bicycle is still far away and I think I can complete the left turn before it gets near, so I’ll hurry and turn left.",
    ],
    answers: ["true", "true", "false"],
    explanation: "Wait before the crosswalk for the cyclist and warn following traffic by pressing the brake pedal several times; do not rush the turn.",
  },
  {
    id: 2,
    speed: "30 km/h",
    prompt: "You are driving along at 30 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2-2.png", alt: "Driver approaching an adult and child on a narrow road with an oncoming vehicle" },
    statements: [
      "I think if I hurry I can pass the pedestrians before the oncoming vehicle gets near, so I’ll increase my speed and keep driving.",
      "The child might dash out in front of my vehicle, so I’ll sound my horn and keep driving.",
      "It would be better to pass the oncoming vehicle before passing the pedestrians, so I’ll reduce my speed, move to the left, and stop.",
    ],
    answers: ["false", "false", "true"],
    explanation: "Reduce speed and stop on the left so the oncoming vehicle can pass before you carefully pass the pedestrians.",
  },
  {
    id: 3,
    speed: "30 km/h",
    prompt: "You are driving along at 30 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2-3.png", alt: "Driver following a cyclist while children walk beside a rural road" },
    statements: [
      "The cyclist and the children may not have noticed my vehicle approaching, so to be prepared for any sudden movements I’ll reduce my speed so that I can stop at any time.",
      "It would be dangerous to pass the bicycle and the children at the same time, so while I have the chance I’ll accelerate and overtake the bicycle.",
      "If I keep driving as I am now I won’t be able to respond to any sudden movements of the cyclist or children, so I’ll reduce my speed and maintain a distance behind the bicycle until I pass the children.",
    ],
    answers: ["true", "false", "true"],
    explanation: "Slow down and remain behind the cyclist until the children have been passed safely; do not accelerate to overtake.",
  },
  {
    id: 4,
    speed: "40 km/h",
    prompt: "You are driving along at 40 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2-4.png", alt: "Driver following a cargo truck that is signaling a left turn" },
    statements: [
      "The vehicle ahead will probably take a long time turning left, so I’ll move to the far right of my lane and partly enter the next lane by crossing the center line.",
      "The vehicle ahead will turn left immediately, so I’ll keep driving at this speed.",
      "Even after the vehicle ahead turns left its cargo might remain in my lane, so I’ll reduce my speed and maintain vehicle distance.",
    ],
    answers: ["false", "false", "true"],
    explanation: "A long vehicle and its cargo may continue to occupy your lane during the turn, so slow down and keep a safe following distance.",
  },
  {
    id: 5,
    speed: "30 km/h",
    prompt: "You are driving along at 30 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-2-5.png", alt: "Driver following a red car on a narrow snow-covered road" },
    statements: [
      "It would be dangerous to suddenly swerve away from an oncoming vehicle, so I’ll drive as closely as possible to the left edge of the road.",
      "Where other vehicles have passed the snow is packed and slippery, so I’ll drive where the soft snow has accumulated.",
      "My vehicle has studless tires and tire chains, so I’ll drive just as I would in regular road conditions.",
    ],
    answers: ["false", "false", "false"],
    explanation: "Keep a safe road position and drive slowly on the cleared wheel tracks; winter tires and chains do not make snow behave like a normal road.",
  },
];

export const honmanDangerProblemsThree: DangerPredictionProblem[] = [
  {
    id: 1,
    speed: "70 km/h",
    prompt: "You are driving along at 70 km/h. When you leave the main through lane, what kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3-1.png", alt: "Driver approaching an expressway deceleration lane at 70 kilometers per hour" },
    statements: [
      "Continuing at this speed would be too fast and dangerous, so I’ll reduce speed all at once before entering the deceleration lane.",
      "If I reduce speed suddenly in the main through lane, I might be rear-ended by the vehicle following me, so I’ll enter the deceleration lane and then gradually reduce speed.",
      "After entering the deceleration lane, I won’t rely on instinct but rather will check the speedometer as I reduce speed to ensure I am doing it correctly.",
    ],
    answers: ["false", "true", "true"],
    explanation: "Enter the deceleration lane before reducing speed, slow down gradually, and confirm your speed with the speedometer.",
  },
  {
    id: 2,
    speed: "50 km/h",
    prompt: "You are driving along at 50 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3-2.png", alt: "Motorcyclist approaching a sharp mountain curve with limited visibility" },
    statements: [
      "If I fail to negotiate the curve I might hit the guardrail, so I’ll drive near the center line.",
      "An oncoming vehicle might cross over the center line, so I’ll sound my horn to warn any approaching drivers and continue traveling at this speed.",
      "The view is limited and I can’t see around the curve, so I’ll reduce speed and travel near the left of the road.",
    ],
    answers: ["false", "false", "true"],
    explanation: "Reduce speed before the blind curve and keep toward the left rather than approaching the center line.",
  },
  {
    id: 3,
    speed: "30 km/h",
    prompt: "You are driving along at 30 km/h. When turning right at the intersection, what kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3-3.png", alt: "Driver approaching a right turn behind a car and a moped at a pedestrian crossing" },
    statements: [
      "I think the four-wheeled vehicle ahead will turn left ahead of the pedestrians on the pedestrian crossing, so I’ll keep driving just as I am now.",
      "The moped might approach the four-wheeled vehicle turning left and move to the right of it, so I’ll reduce speed and watch how it moves.",
      "I think if the four-wheeled vehicle stops the moped will stop behind it, so I’ll move to the right and turn right.",
    ],
    answers: ["false", "true", "false"],
    explanation: "Slow down and watch both the car and moped; the moped may move right to pass the turning vehicle.",
  },
  {
    id: 4,
    speed: "40 km/h",
    prompt: "You are driving along at 40 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3-4.png", alt: "Driver approaching a cyclist who may move into the roadway near pedestrians" },
    statements: [
      "When the bicycle gets near the pedestrians it might move onto the roadway, so I’ll reduce speed and proceed with caution.",
      "When the bicycle gets near the pedestrians it might move onto the roadway, so I’ll move into the lane of oncoming traffic and proceed.",
      "I’ll sound my horn to warn the bicycle not to move into the roadway and keep driving just as I am now.",
    ],
    answers: ["true", "false", "false"],
    explanation: "Anticipate that the bicycle may enter the roadway, reduce speed, and remain prepared to stop.",
  },
  {
    id: 5,
    speed: "40 km/h",
    prompt: "You are driving along at 40 km/h. What kinds of things should you be careful of?",
    image: { src: "/images/honman-test/danger-3-5.png", alt: "Driver approaching an icy bridge in a snowy mountain area" },
    statements: [
      "The surface of bridges freeze easily, so to avoid slipping I’ll reduce speed before reaching the bridge.",
      "I don’t see any oncoming vehicles and there isn’t anything particularly dangerous, so I’ll keep driving at this speed.",
      "I might slip on the bridge, so I’ll reduce speed and avoid braking or swerving suddenly.",
    ],
    answers: ["true", "false", "true"],
    explanation: "Bridge surfaces freeze easily; reduce speed before the bridge and avoid sudden steering or braking inputs.",
  },
];
