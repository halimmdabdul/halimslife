export type DangerPredictionProblem = {
  id: number;
  speed: string;
  prompt: string;
  image: { src: string; alt: string };
  statements: string[];
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
  },
];
